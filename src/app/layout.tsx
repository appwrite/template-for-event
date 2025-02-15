import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "@/components/UserProvider";

export const metadata: Metadata = {
  title: "Dev Hackathon",
  description: "The best hackathon in town",
  openGraph: {
    title: "Dev Hackathon",
    description: "The best hackathon in town",
    images: [
      {
        // URLs need to be absolute!
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.png`,
      },
    ],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
