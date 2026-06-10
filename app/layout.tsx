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
  description:
    "Riaytek is a your freindly health assistant, providing personalized health insights and recommendations based on your unique health data.",
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
          <nav className="ml-auto flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors sm:gap-8 sm:text-base sm:font-normal">
            <div className="max-w-3xl mx-auto px-4 py-6 flex items-center gap-4">
              <Image
                className="dark:invert"
                src="/logo.png"
                alt="Next.js logo"
                width={100}
                height={20}
                priority
              />
            </div>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Contact
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
