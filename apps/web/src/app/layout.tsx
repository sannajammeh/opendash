// import { AppContextProvider } from "./(app)/AppContext";
import "./globals.css";
import { URLPattern } from "urlpattern-polyfill";

// @ts-ignore
if (!globalThis.URLPattern) {
  // @ts-ignore
  globalThis.URLPattern = URLPattern;
}

import { Raleway } from "@next/font/google";
import Providers from "./providers";
const raleway = Raleway({ subsets: ["latin"], preload: false });

/* eslint-disable @next/next/no-head-element */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html className="dark">
      <head></head>
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
