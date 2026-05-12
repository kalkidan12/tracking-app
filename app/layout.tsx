import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "የአርሰናል የዝውውር ዜናዎች | Arsenal Fans Ethiopia",
  description:
    "ወቅታዊ የአርሰናል የዝውውር ዜናዎች እና ትንታኔዎች። የአለምን እግር ኳስ ያስደነገጠው አዲሱ ዝውውር።",
  keywords: [
    "Arsenal",
    "Arsenal News",
    "Ethiopia",
    "Transfer News",
    "EPL",
    "አርሰናል",
    "እግር ኳስ",
  ],
  authors: [{ name: "Arsenal Fans ET" }],
  openGraph: {
    title: "የአርሰናል የዝውውር ዜናዎች | Arsenal Fans Ethiopia",
    description: "አርሰናል የአለምን እግር ኳስ ያስደነገጠ አዲስ ዝውውር በዛሬው እለት አጠናቋል።",
    url: "https://ethionews.vercel.app/news",
    siteName: "Arsenal Fans Ethiopia",
    images: [
      {
        url: "https://img.youtube.com/vi/W_YgP7z9_kM/maxresdefault.jpg",
        width: 1200,
        height: 630,
        alt: "Arsenal Transfer News",
      },
    ],
    locale: "am_ET",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "አርሰናል አዲስ ዝውውር አጠናቀቀ!",
    description: "Arsenal's shocking new transfer completed today.",
    images: ["https://img.youtube.com/vi/W_YgP7z9_kM/maxresdefault.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="am"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
