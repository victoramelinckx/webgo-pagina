import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';
import { sfPro } from "@/lib/fonts";
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
    title: 'WebGo',
    description: 'WebGo',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: 'black',
};

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Toaster />
            <Analytics />
        </>
    );
} 