import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Express Skip Bins Melbourne",
  description: "Skip Bin Hire | Waste Removal | Rubbish Removal | Hire a Skip | Skip Bin Rental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
