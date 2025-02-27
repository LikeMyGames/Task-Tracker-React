import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
	variable: "--main-font",
	subsets: ["latin"],
	display: "swap",
});

// const notoSansMono = Noto_Sans_Mono({
//   variable: "--mono-font",
//   subsets: ["latin"],
// 	display: "swap",
// });

export const metadata: Metadata = {
  title: {
	default: 'Task Tracker',
	template: '%s | Task Tracker'
  },
  description: "A Web App that allows users to keep track of and manage their tasks",
  icons: [
	{ rel: "icon", url: "/icon.png" },
	{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
	{ rel: "icon", url: "/icons/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
	{ rel: "icon", url: "/icons/favicon/favicon.svg", type: "image/svg+xml" },
	{ rel: "shortcut icon", url: "/favicon.ico", sizes: "256x256 128x128 64x64 32x32"}
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${pixelifySans.variable}`}>
    		{/* <Head>
    			<meta charSet="UTF-8" />
    			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    			<meta name="color-scheme" content="light dark" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
				<link rel="icon" type="image/png" href="@/public/icons/favicon/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="@/public/icons/favicon/favicon.svg" />
				<link rel="shortcut icon" href="@/public/icons/favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="@/public/icons/favicon/apple-touch-icon.png" />
				<meta name="apple-mobile-web-app-title" content="Tasks" />
				<link rel="manifest" href="@/public/icons/favicon/darkmanifest.json" />
			</Head> */}
      		<body>
        		{children}
     		</body>
    	</html>
  	);
}
