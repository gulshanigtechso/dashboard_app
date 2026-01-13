import React from "react";
import Header from "./Header";
import BreadcrumbBar from "./BreadcrumbBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-foreground font-sans">
      <BreadcrumbBar />
      <Header />
      <main className="p-8 pt-0 bg-[linear-gradient(135deg,#f6f5f4_50%,#faf5ec_40%,#f4f2f1_100%)]">
        {children}
      </main>
    </div>
  );
}
