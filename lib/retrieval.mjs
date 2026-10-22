const STOP=new Set('a an the is are of to for and or in on i my me how what can do does it with please help luuna tell about'.split(' '));
export function terms(text){return [...new Set(text.toLowerCase().match(/[a-z0-9_]{2,}/g)||[])].filter(t=>!STOP.has(t));}
export function searchPassages(chunks,question,limit=8){
 const query=terms(question);if(!query.length)return [];
 return chunks.map(p=>{const text=p.text.toLowerCase(),title=p.title.toLowerCase();let hits=0,score=0;for(const term of query){if(text.includes(term)){hits++;score+=1+Math.min(3,text.split(term).length-1)*.25;}if(title.includes(term))score+=3;}score*=hits/query.length;return {...p,score,hits};}).filter(p=>p.hits>=Math.min(2,query.length)&&p.score>=1.25&&(query.length<3||p.hits/query.length>=.6)).sort((a,b)=>b.score-a.score).slice(0,limit);
}
export function verifiedSelection(value,passages){if(!value||!Array.isArray(value.passage_ids)||value.passage_ids.length>4)return [];const map=new Map(passages.map(p=>[p.id,p]));if(value.passage_ids.some(id=>typeof id!=='string'||!map.has(id)))return [];return [...new Set(value.passage_ids)].map(id=>map.get(id));}
