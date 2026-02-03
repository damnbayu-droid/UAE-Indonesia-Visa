import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UAE Indonesia Visa | #1 Indonesia Visa Service in UAE | Fast & Trusted",
  description: "Official UAE Indonesia Visa portal. Specialist in B1, C1, D1, and E33G Indonesian Visas for UAE residents. 16+ years experience, 24/7 support. Get your Indonesia Visa from Dubai or Abu Dhabi in 24-48 hours.",
  keywords: [
    "UAE Indonesia Visa",
    "Indonesia Visa Dubai",
    "Indonesia Visa Abu Dhabi",
    "Apply Indonesia Visa from UAE",
    "Bali Visa for UAE Residents",
    "Indonesian E-Visa UAE",
    "Digital Nomad Visa Indonesia UAE",
    "Business Visa Indonesia from Dubai",
    "UAE Indonesia Strategic Partnership",
    "Best Indonesia Visa Agency UAE"
  ],
  authors: [{ name: "UAE Indonesia Visa" }],
  metadataBase: new URL("https://uaeindonesiavisa.online"),
  alternates: {
    canonical: "https://uaeindonesiavisa.online",
  },
  openGraph: {
    title: "UAE Indonesia Visa | Fast & Professional Services",
    description: "Secure your Indonesian Visa from the UAE with expert guidance. Fast processing, 99% success rate, and 24/7 dedicated support.",
    url: "https://uaeindonesiavisa.online",
    siteName: "UAE Indonesia Visa",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for Indonesia Visa from UAE | Fast & Reliable",
    description: "Get your Indonesian visa in 24-48 hours. Professional service for Dubai and Abu Dhabi residents.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased h-full w-full bg-slate-50`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
