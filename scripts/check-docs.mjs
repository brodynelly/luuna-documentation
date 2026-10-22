import fs from 'node:fs';
import assert from 'node:assert/strict';
const docs=JSON.parse(fs.readFileSync('data/docs.json','utf8'));
const bySlug=new Map(docs.map(d=>[d.slug,d]));assert.equal(bySlug.size,docs.length,'Unique page slugs');
const warnings=[];let links=0;
for(const d of docs){
 assert.ok(d.html.includes('<h1'),`Heading: ${d.slug}`);
 assert.ok(!/<script|onerror=|onclick=|javascript:/i.test(d.html),`Unsafe rendered HTML: ${d.slug}`);
 assert.ok(!/\b(?:sk-or-v1-|ghp_|github_pat_)[A-Za-z0-9_-]{20,}/.test(d.markdown),`Possible credential: ${d.slug}`);
 for(const match of d.html.matchAll(/href="\/docs\/([^"#]+)(#[^"]*)?"/g)){links++;const target=bySlug.get(match[1]);assert.ok(target,`Broken page: ${d.slug} -> ${match[1]}`);if(match[2]&&!target.html.includes(`id="${decodeURIComponent(match[2].slice(1))}"`))warnings.push({from:d.slug,to:match[1]+match[2]});}
}
const chunks=JSON.parse(fs.readFileSync('data/chunks.json','utf8'));
for(const c of chunks){const doc=bySlug.get(c.slug);assert.ok(doc.ai&&!['dated','historical'].includes(doc.status),'AI corpus must exclude archive');assert.ok(doc.markdown.includes(c.text),'Excerpts must be verbatim');}
console.log(JSON.stringify({pages:docs.length,links,passages:chunks.length,anchorWarnings:warnings},null,2));
if(warnings.length)process.exitCode=1;
