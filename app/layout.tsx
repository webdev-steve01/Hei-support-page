import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Condensed, Outfit } from "next/font/google";

// Configure Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"], // Essential: Specifies which character subsets to load
  display: "swap", // Recommended: Controls font loading behavior for better UX
  weight: ["400", "700"], // Example: Specify weights you need (check Figma/Google Fonts for available weights)
  variable: "--font-roboto-condensed", // Optional: Define a CSS variable for easier use with Tailwind
});

// Configure Outfit
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"], // Example: Specify weights you need
  variable: "--font-outfit", // Optional: Define a CSS variable
});
export const metadata: Metadata = {
  title: "Hei Support",
  keywords: [
    "Hei Support",
    "Student Companion",
    "AI Assistant",
    "WhatsApp Bot",
    "Order Management",
    "Delivery Tracking",
    "Campus Life",
    "Student Services",
    "Print Services",
    "Order Delivery",
    "Student Support",
    "AI-Powered Assistant",
    "Student Companion App",
    "Campus Assistant",
    "Student Productivity",
    "Student Convenience",
  ],
  authors: [
    {
      name: "Hei Support Team",
      url: "https://heii.vercel.app",
    },
  ],
  creator: "Hei Support Team",
  description: "Hei Support - Your AI-Powered Companion for Students",
  openGraph: {
    title: "Hei Support",
    description:
      "Your AI-Powered companion for students - print, order, deliver, done.",
    url: "https://heii.vercel.app",
    siteName: "Hei Support",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${robotoCondensed.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
