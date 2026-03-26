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
  title: "UAE Indonesia Visa | #1 Indonesia Visa Service in Dubai & UAE",
  description: "Official UAE Indonesia Visa portal. Specialist in B1, C1, D1, and E33G Indonesian Visas for UAE residents. Get your Indonesia Visa from Dubai or Abu Dhabi in 24-48 hours. Professional service based on UAE-Indonesia strategic partnership.",
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
    "Best Indonesia Visa Agency UAE",
    "Indonesia Visa Service Dubai"
  ],
  authors: [{ name: "UAE Indonesia Visa" }],
  metadataBase: new URL("https://uaeindonesiavisa.agency"),
  alternates: {
    canonical: "https://uaeindonesiavisa.agency",
  },
  icons: {
    icon: "/Logo.webp",
    apple: "/Logo.webp",
  },
  openGraph: {
    title: "UAE Indonesia Visa | Fast & Professional Services in Dubai",
    description: "Secure your Indonesian Visa from the UAE with expert guidance. Fast processing, 99% success rate, and 24/7 dedicated support.",
    url: "https://uaeindonesiavisa.online",
    siteName: "UAE Indonesia Visa",
    images: [
      {
        url: "/Logo.webp",
        width: 800,
        height: 600,
        alt: "UAE Indonesia Visa Logo",
      },
    ],
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for Indonesia Visa from UAE | Dubai's Trusted Agency",
    description: "Get your Indonesian visa in 24-48 hours. Professional service for Dubai and Abu Dhabi residents.",
    images: ["/Logo.webp"],
  },
  other: {
    "geo.region": "AE",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    "ICBM": "25.2048, 55.2708",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://indonesianvisas.com" />
      </head>
      <body
        className={`${inter.variable} antialiased h-full w-full bg-slate-50`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
