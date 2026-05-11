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
  title:
    'ጋዜጠኛው እውነቱን አጋለጠ | "ዛቻና ማስፈራሪያ ደርሶብኛል" | Elias Meseret | Gerado Media',
  description:
    "የጋዜጠኛ ኤልያስ መሰረት ልዩ ቃለ-መጠይቅ - ስለ ወቅታዊው ሁኔታ የተሰጠ ማብራሪያ። Exclusive interview with Journalist Elias Meseret regarding recent events and threats.",
  keywords: [
    "Ethiopia",
    "Elias Meseret",
    "Gerado Media",
    "Ethiopian News",
    "Breaking News",
  ],
  authors: [{ name: "Gerado Media" }],
  openGraph: {
    title: 'ጋዜጠኛው እውነቱን አጋለጠ | "ዛቻና ማስፈራሪያ ደርሶብኛል" | Elias Meseret',
    description: "የጋዜጠኛ ኤልያስ መሰረት ልዩ ቃለ-መጠይቅ - ስለ ወቅታዊው ሁኔታ የተሰጠ ማብራሪያ።",
    url: "https://ethionews.vercel.app/news",
    siteName: "Gerado Media Ethiopia",
    images: [
      {
        url: "https://img.youtube.com/vi/VEBvFgM32lI/maxresdefault.jpg",
        width: 1200,
        height: 630,
        alt: "Elias Meseret Interview",
      },
    ],
    locale: "am_ET",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: 'ጋዜጠኛው እውነቱን አጋለጠ | "ዛቻና ማስፈራሪያ ደርሶብኛል"',
    description: "Journalist Elias Meseret speaks out on recent threats.",
    images: ["https://img.youtube.com/vi/VEBvFgM32lI/maxresdefault.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
