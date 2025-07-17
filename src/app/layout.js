import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata = {
  title: "Ege Özler - Full Stack Developer",
  description: "Professional portfolio of Ege Özler, a skilled full-stack developer specializing in modern web technologies, AI integration, and scalable software solutions.",
  keywords: ["Ege Özler", "Full Stack Developer", "Software Engineer", "Web Developer", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Ege Özler" }],
  creator: "Ege Özler",
  publisher: "Ege Özler",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ege Özler - Full Stack Developer",
    description: "Professional portfolio showcasing expertise in full-stack development, AI integration, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ege Özler - Full Stack Developer",
    description: "Professional portfolio showcasing expertise in full-stack development, AI integration, and modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className="font-mono antialiased">
        <Navbar />
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  );
}
