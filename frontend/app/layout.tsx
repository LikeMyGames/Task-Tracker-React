import type { Metadata } from "next";
import { Pixelify_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const pixelifySans = Pixelify_Sans({
  variable: "--main-font",
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--mono-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
    		<Head>
    			<meta charSet="UTF-8" />
    			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    			<meta name="color-scheme" content="light dark" />
				{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}

				<link rel="icon" type="image/png" href="/icons/favicon/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/icons/favicon/favicon.svg" />
				<link rel="shortcut icon" href="/icons/favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon/apple-touch-icon.png" />
				<meta name="apple-mobile-web-app-title" content="Tasks" />
				<link rel="manifest" href="/icons/favicon/darksite.webmanifest" />
			</Head>
      <body className={`${pixelifySans.variable} ${notoSansMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
