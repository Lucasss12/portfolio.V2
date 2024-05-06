import Navbar from './components/navbar/navbar'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio.V2 Lucas Méné",
  description: "Portfolio.V2 Lucas Méné",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} max-w-screen-xl 2xl:mx-auto xl:mx-60 lg:mx-36 md:mx-12 mx-3 my-3 sm:my-6`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
