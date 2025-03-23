import type React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialShareSidebar from "./SocialShareSidebar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showShareSidebar?: boolean;
}

const Layout = ({
  children,
  title = "MSF - Médecins Sans Frontières",
  description = "Médecins Sans Frontières (MSF) is an international, independent medical humanitarian organization.",
  showShareSidebar = false,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow relative">
          {showShareSidebar && <SocialShareSidebar />}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
