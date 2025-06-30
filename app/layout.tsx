import type { Metadata, Viewport } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { Auth0Domain, Auth0ClientID } from "@/lib/auth0";

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
		{ rel: "shortcut icon", url: "/favicon.ico", sizes: "256x256 128x128 64x64 32x32" }
	]
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
	maximumScale: 1.0,
	userScalable: false,
	viewportFit: "auto"
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${pixelifySans.variable}`}>
			<body>
				{children}
			</body>
		</html>
	);
}
