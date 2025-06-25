import { sfPro } from "@/lib/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={sfPro.variable}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
} 