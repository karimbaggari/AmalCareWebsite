import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AmalCare - Healthcare Services",
  description: "Comprehensive healthcare services with compassion and excellence",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  // Enable static rendering
  setRequestLocale(locale);
  
  // Determine text direction based on locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
