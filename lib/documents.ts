import source from '../data/docs.json';
export type Doc={slug:string;path:string;title:string;group:string;status:string;ai:boolean;markdown:string;html:string;description:string;source:string;commit:string;headings:{id:string;title:string;depth:number}[]};
export const docs=source as Doc[];
export const navigation=docs.map(({slug,title,group,status})=>({slug,title,group,status}));
export type NavDoc=typeof navigation[number];
