import {handleAssistant} from '../lib/assistant.mjs';
import chunks from '../data/chunks.json';
export default {async fetch(request,env){
 const url=new URL(request.url);
 if(url.pathname==='/api/assistant')return handleAssistant(request,env,chunks);
 if(url.pathname.startsWith('/api/'))return new Response('Not found',{status:404});
 const response=await env.ASSETS.fetch(request);
 const headers=new Headers(response.headers);headers.set('X-Content-Type-Options','nosniff');headers.set('Referrer-Policy','strict-origin-when-cross-origin');
 return new Response(response.body,{status:response.status,headers});
}};
