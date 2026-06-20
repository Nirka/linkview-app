import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkView App",
  description: "LinkView remote access portal",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
