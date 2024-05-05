import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider"
import NavigationBar from "./components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud-Clicker",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession() ; 
  return (
      <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <SessionProvider session = {session}>
          <main>
          <NavigationBar/>
            {children}
          </main>
          </SessionProvider>
        </div>
     
        
      </body>
    </html>
    
  );
}
