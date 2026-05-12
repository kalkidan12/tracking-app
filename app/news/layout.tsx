import { Metadata } from "next";

export const metadata: Metadata = {
  title: "አርሰናል አዲስ ዝውውር አጠናቀቀ! | የዝውውር ዜናዎች | Arsenal Transfer News",
  description:
    "አርሰናል የአለምን እግር ኳስ ያስደነገጠ አዲስ ዝውውር በዛሬው እለት አጠናቋል። ሙሉ መረጃውን ለማየት ሊንኩን ይጫኑ።",
  openGraph: {
    title: "አርሰናል አዲስ ዝውውር አጠናቀቀ! | Arsenal Transfer News",
    description: "አርሰናል የአለምን እግር ኳስ ያስደነገጠ አዲስ ዝውውር በዛሬው እለት አጠናቋል።",
    // Using a high-quality Arsenal transfer thumbnail
    images: ["https://img.youtube.com/vi/W_YgP7z9_kM/maxresdefault.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://img.youtube.com/vi/W_YgP7z9_kM/maxresdefault.jpg"],
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
