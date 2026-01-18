import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opposition Research: Representative Ro Khanna",
  description: "A comprehensive analysis of financial disclosures, legislative actions, and political operations",
  openGraph: {
    title: "Opposition Research: Representative Ro Khanna",
    description: "A comprehensive analysis of financial disclosures, legislative actions, and political operations",
    type: "website",
    images: [
      {
        url: "/RepRoKhanna_CA17_hires.png",
        width: 1200,
        height: 630,
        alt: "Representative Ro Khanna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opposition Research: Representative Ro Khanna",
    description: "A comprehensive analysis of financial disclosures, legislative actions, and political operations",
    images: ["/RepRoKhanna_CA17_hires.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/RepRoKhanna_CA17_hires.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
