import {docs,navigation} from '../lib/documents';
import Shell from './shell';
export default function Home(){return <Shell docs={navigation} doc={docs.find(d=>d.slug==='guide-overview')!} home/>;}
