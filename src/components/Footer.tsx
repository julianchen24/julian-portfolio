"use client";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contacts</h2>
            <p className="mb-2">
              Thanks for visiting my website! Feel free to contact me through LinkedIn or Email, I am open to all opportunities
              
            </p>
            <p className="text-sm mt-6">
              &copy; {new Date().getFullYear()} Julian Chen. All rights reserved.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Socials</h2>
            <p className="mb-4">Check out my socials below!</p>
            
            <div className="flex space-x-4">

              <a 
                href="https://www.linkedin.com/in/julian--chen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-700 p-3 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 shadow-sm hover:shadow"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              

              <a 
                href="https://github.com/julianchen24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-700 p-3 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 shadow-sm hover:shadow"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>


              <a 
                href="https://www.instagram.com/julixn.chxn_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-700 p-3 rounded-md text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 shadow-sm hover:shadow"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              
              <a 
                href="mailto:jy24chen@uwaterloo.ca"
                className="bg-white dark:bg-gray-700 p-3 rounded-md text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 shadow-sm hover:shadow"
                aria-label="Email"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Designed in{" "}
            <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="text-[#F24E1E] hover:underline">
              Figma
            </a>
            , built using{" "}
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#000000] dark:text-[#ffffff] hover:underline">
              Next.js
            </a>
            {" "}+{" "}
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-[#087EA4] hover:underline">
              React
            </a>
            {" "}+{" "}
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-[#06B6D4] hover:underline">
              Tailwind CSS
            </a>
            {" "}+{" "}
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="text-[#3178C6] hover:underline">
              TypeScript
            </a>
            , deployed with{" "}
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:underline">
              Vercel
            </a>
            {" "}by{" "}
            <a href="https://github.com/julianchen24" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Julian Chen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}