import type { Metadata } from 'next';
import './globals.css';
import { getLocale } from '@/lib/locale';
const baseMetadata: Metadata = { title: 'Simon Paul — AI Engineer', description: 'AI engineer and founding engineer at Arctis AI. Building useful AI, from the first idea to production.', icons: { icon: '/favicon.svg' } };
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { const locale=await getLocale(); return <html lang={locale}><body>{children}</body></html> }

export async function generateMetadata():Promise<Metadata>{const locale=await getLocale();return {...baseMetadata,title:locale==='de'?'Simon Paul — AI Engineer in München':'Simon Paul — AI Engineer'}}
