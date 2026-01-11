import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexendZetta = localFont({
  src: "../fonts/LexendZetta.ttf",
  variable: "--font-lexend-zetta",
  display: "swap",
});

const godiva = localFont({
  src: "../fonts/godiva-regular.ttf",
  variable: "--font-godiva",
  display: "swap",
});

export const metadata = {
  title: "SBOOCH",
  description: "A scroll-animated landing page template with GSAP animations",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexendZetta.variable} ${godiva.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
