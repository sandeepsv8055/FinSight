import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "FinSight",
  description: "An AI powered finance platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} `}>
          {/*header*/}
          <main className="min-h-screen">{children}</main>
          
          {/*footer*/}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p> Made with ❤️ by Sandeep </p>
            </div>
          </footer>
      </body>
    </html>
  );
}
