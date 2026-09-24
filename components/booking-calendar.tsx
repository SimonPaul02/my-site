'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
const Cal=dynamic(()=>import('@calcom/embed-react'),{ssr:false});
export function BookingCalendar({calLink,locale}:{calLink:string;locale:string}){
 const ref=useRef<HTMLDivElement>(null);
 const [ready,setReady]=useState(false);
 useEffect(()=>{
  if(!('IntersectionObserver' in window)){setReady(true);return}
  const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setReady(true);observer.disconnect()}},{rootMargin:'350px'});
  if(ref.current) observer.observe(ref.current);
  return()=>observer.disconnect();
 },[]);
 return <div ref={ref} style={{minHeight:620}}>{ready&&<Cal calLink={calLink} config={{theme:'dark',layout:'month_view',locale}} style={{width:'100%',minHeight:620}}/>}<noscript><a href={`https://cal.com/${calLink}`}>{locale==='de'?'Termin buchen':'Book a meeting'}</a></noscript></div>;
}
