import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Simon Paul — AI Engineer', description: 'AI engineer and founding engineer at Arctis AI. Building useful AI, from the first idea to production.', icons: { icon: '/favicon.svg' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
