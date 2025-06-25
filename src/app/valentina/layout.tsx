import { ReactNode } from 'react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Valentina Guzman',
    description: 'Página de Valentina Guzman Cortes.',
}

export default function ValentinaLayout({ children }: { children: ReactNode }) {
    return (
        <main>{children}</main>
    );
} 