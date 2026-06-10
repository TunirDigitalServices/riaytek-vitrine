import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riaytek",
  description: "Riaytek is a your freindly health assistant, providing personalized health insights and recommendations based on your unique health data.",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="w-full border-b border-solid border-zinc-200 bg-white dark:border-zinc-700 dark:bg-black">
          <div className="max-w-3xl mx-auto px-4 py-6 flex items-center gap-4">
              <Image
                className="dark:invert"
                src="/logo.png"
                alt="Next.js logo"
                width={100}
                height={20}
                priority
              />
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
             Riaytek
            </h1>
          </div>
        </header>
        {children}
        </body>
    </html>
  );
}
