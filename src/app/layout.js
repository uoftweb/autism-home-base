import { PT_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

export const metadata = {
  title: "AHB Weekly Planner",
  description: "Weekly planner for Autism Home Base programs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ptSans.variable}>
      <body>{children}</body>
    </html>
  );
}
