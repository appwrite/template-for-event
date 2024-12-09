import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Dev Hackathon",
  description: "The best hackathon in town",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/images/og-image.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
