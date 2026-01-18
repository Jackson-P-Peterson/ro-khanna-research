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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Opposition Research: Representative Ro Khanna - Financial Disclosures, Legislative Actions, Campaign Ethics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opposition Research: Representative Ro Khanna",
    description: "A comprehensive analysis of financial disclosures, legislative actions, and political operations",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/RepRoKhanna_CA17_hires.jpg",
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
