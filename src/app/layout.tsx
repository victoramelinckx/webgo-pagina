import type { Metadata, Viewport } from 'next';
import './globals.css'; // Assumes globals.css will be in the same dir in generated site (src/app/)
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';
import { sfPro } from "@/lib/fonts";
import { Navbar } from '@/components/Navbar';


export const metadata: Metadata = {
  title: 'WebGo', // This will likely be overridden by repoName in create-site API
  description: 'WebGo',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'black', // Example, adjust or remove as needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={sfPro.variable}>
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
} 