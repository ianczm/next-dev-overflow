import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/context/Theme";

const interFont = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800",
});

const spaceGroteskFont = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "DevOverflow",
  description:
    "Welcome to DevOverflow, where coding questions get supercharged!" +
    "Dive into a lively community that's all about boosting your developer game." +
    'With turbocharged Q&A, epic tutorials, and a dash of fun, you\'ll find answers faster than you can say "debug."' +
    "Whether you're a newbie or a code ninja, join us and level up your skills like never before!",
  icons: { icon: "/images/site-logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.className} ${spaceGroteskFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
