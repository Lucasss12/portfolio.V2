import Navbar from './components/navbar/navbar'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Portfolio.V2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} max-w-screen-2xl 2xl:mx-auto xl:mx-56 lg:mx-36 md:mx-10 mx-5 my-6`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
