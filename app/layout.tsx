import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FuelFit | Premium Luxury Gym & Fitness Center",
  description: "Transform your body at FuelFit. Expert trainers, world-class equipment, and a community dedicated to your success. Join the movement today.",
  keywords: ["gym", "fitness", "bodybuilding", "personal training", "weight loss", "luxury gym"],
  openGraph: {
    title: "FuelFit | Premium Luxury Gym & Fitness Center",
    description: "Transform your body at FuelFit. Expert trainers, world-class equipment, and a community dedicated to your success.",
    type: "website",
    url: "https://fuelfit.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FuelFit Gym",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
