import Footer from "@/components/Footer";
import "./globals.css";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body className="relative min-h-screen">
        {children}

        <Footer />
      </body>
    </html>
  );
}
