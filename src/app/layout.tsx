import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// GlobaL CSS from `@cz/cz-react-ui-library`
import "@cz/cz-react-ui-library/dist/index.css";
import "@cz/cz-react-ui-library/dist/css/global.scss";
import "@cz/cz-react-ui-library/dist/css/theme_cz.css";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MCZZ POC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu />
          {children}
        <Footer />
      </body>
    </html>
  );
}
