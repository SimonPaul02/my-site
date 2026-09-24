'use client';
import { useEffect } from 'react';
export function ScrollReveal(){
useEffect(()=>{
 if(!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 const entries=document.querySelectorAll<HTMLElement>('.job, .education-cards article');
 const observer=new IntersectionObserver(changes=>{
  changes.forEach(({isIntersecting,target})=>{
   if(isIntersecting){(target as HTMLElement).dataset.reveal='visible';observer.unobserve(target)}
  });
 },{threshold:0.08,rootMargin:'0px 0px -24px 0px'});
 entries.forEach(entry=>{
  if(entry.getBoundingClientRect().top>=window.innerHeight){entry.dataset.reveal='pending';observer.observe(entry)}
 });
 return()=>{observer.disconnect();entries.forEach(entry=>delete entry.dataset.reveal)};
},[]);
return null;
}
