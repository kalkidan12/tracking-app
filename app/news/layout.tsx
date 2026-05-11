import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    'ጋዜጠኛው እውነቱን አጋለጠ|"ዛቻና ማስፈራሪያ ደርሶብኛል"| Elias Meseret| Gerado Media | Ethiopia',
  openGraph: {
    title:
      'ጋዜጠኛው እውነቱን አጋለጠ|"ዛቻና ማስፈራሪያ ደርሶብኛል"| Elias Meseret| Gerado Media | Ethiopia',
    images: ["https://img.youtube.com/vi/VEBvFgM32lI/maxresdefault.jpg"],
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
