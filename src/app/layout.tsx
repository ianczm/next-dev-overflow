import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

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
  description: "StackOverflow on steroids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} ${spaceGroteskFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
