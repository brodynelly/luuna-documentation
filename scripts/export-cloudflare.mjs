import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
const root=process.cwd();
const docs=JSON.parse(fs.readFileSync('data/docs.json','utf8'));
if(!fs.existsSync('dist/server/wrangler.json'))throw Error('Run the production build first.');
const output=path.join(root,'static-export');fs.mkdirSync(output,{recursive:true});
fs.cpSync('dist/client',output,{recursive:true});
const server=spawn(process.execPath,['--import','./scripts/sites-env.mjs','node_modules/wrangler/bin/wrangler.js','dev','--config','dist/server/wrangler.json','--local','--port','8791','--ip','127.0.0.1','--inspector-port','0'],{cwd:root,stdio:['ignore','pipe','pipe'],windowsHide:true});
let log='';server.stdout.on('data',d=>log=(log+d).slice(-4000));server.stderr.on('data',d=>log=(log+d).slice(-4000));
try{
 let ready=false;for(let i=0;i<90;i++){try{if((await fetch('http://127.0.0.1:8791/',{signal:AbortSignal.timeout(2000)})).ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,500));}
 if(!ready)throw Error('Production preview unavailable: '+log);
 for(const route of ['/',...docs.map(d=>'/docs/'+d.slug)]){const r=await fetch('http://127.0.0.1:8791'+route);if(!r.ok)throw Error(`${route}: ${r.status}`);const html=await r.text();if(!html.includes('<main'))throw Error('Missing document '+route);const dir=path.join(output,route);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),html);}
 const missing=await fetch('http://127.0.0.1:8791/docs/unknown-document');fs.writeFileSync(path.join(output,'404.html'),await missing.text());
 fs.writeFileSync(path.join(output,'_headers'),'/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n');
 console.log(JSON.stringify({exported:docs.length+1,directory:output}));
}finally{server.kill();}
