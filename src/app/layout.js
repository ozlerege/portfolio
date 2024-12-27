import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ege Özler",
  description: "Ege's personal portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.className} antialiased`}>
        <Navbar />
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  );
}
