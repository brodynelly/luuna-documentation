import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Luuna Docs — Build with evidence',description:'The complete documentation for Luuna: a local-first engineering workbench. Guides, runtime APIs, component references and architecture decisions.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
