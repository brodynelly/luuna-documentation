import chunks from '../../../data/chunks.json';
import {handleAssistant} from '../../../lib/assistant.mjs';
export const dynamic='force-dynamic';
export function GET(request:Request){return handleAssistant(request,process.env,chunks);}
export function POST(request:Request){return handleAssistant(request,process.env,chunks);}
