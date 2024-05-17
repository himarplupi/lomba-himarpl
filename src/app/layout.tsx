import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

const fontWesternBangBang = localFont({
  src: [
    {
      path: "./fonts/western-bang-bang/western-bang-bang-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-western",
});

const fontWildrodeo = localFont({
  src: [
    {
      path: "./fonts/wildrodeo/ifc-wildrodeo-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-wildrodeo",
});

export const metadata = {
  title: "Lomba | HIMARPL",
  description:
    "Lomba Poster Merayakan Dies Natalis Rekayasa Perangkat Lunak ke-5 Universitas Pendidikn Indonesia.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <GoogleTagManager gtmId="G-8LEG34DFTS" />
      <body
        className={cn(
          "bg-background font-sans antialiased",
          fontWesternBangBang.variable,
          fontWildrodeo.variable,
        )}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-8LEG34DFTS" />
    </html>
  );
}
