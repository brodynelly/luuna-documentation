import {docs,navigation} from '../../../lib/documents';
import Shell from '../../shell';
import {notFound} from 'next/navigation';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const doc=docs.find(d=>d.slug===slug);return {title:doc?`${doc.title} · Luuna Docs`:'Not found · Luuna Docs',description:doc?.description};}
export default async function Document({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const doc=docs.find(d=>d.slug===slug);if(!doc)notFound();return <Shell docs={navigation} doc={doc!}/>;}
