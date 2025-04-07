"use client";

import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-6 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Julian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
