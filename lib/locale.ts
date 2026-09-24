import { cache } from 'react';
import { cookies, headers } from 'next/headers';
export type Locale='en'|'de';
export const getLocale=cache(async ():Promise<Locale>=>{
 const saved=(await cookies()).get('site-language')?.value;
 if(saved==='en'||saved==='de') return saved;
 const accepted=(await headers()).get('accept-language')??'';
 const languages=accepted.split(',').map((part,index)=>{
  const [tag,...params]=part.trim().split(';');
  const quality=params.find(p=>p.trim().startsWith('q='));
  return {language:tag.toLowerCase().split('-')[0],quality:quality?Number(quality.trim().slice(2)):1,index};
 }).filter(item=>item.quality>0).sort((a,b)=>b.quality-a.quality||a.index-b.index);
 return languages.find(item=>item.language==='de'||item.language==='en')?.language as Locale??'en';
});
