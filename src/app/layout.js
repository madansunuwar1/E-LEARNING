import { Inter,Lora,Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const os = Oswald({
  subsets: ["latin"],
  variable: '--font-os',
})

export const metadata = {
  title: "E-Learning",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${os.variable} font-sans`}>
        <div className="w-screen h-[100%] lg:h-[100%] bg-[url('/High.webp')] bg-cover bg-fixed">

          <div className="h-24 text-white">
          <Navbar />
          </div>
          {children}
          <Footer />
          
        </div>
      </body>
    </html>
  );
}
