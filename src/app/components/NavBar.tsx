"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Open_Sans, Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '900'
});

const openSans = Open_Sans({
    subsets: ['latin']
})

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className="rounded-2xl border-[1.5px] border-gray-200 bg-background px-2 transition-all mt-5 duration-300 ease-in-out dark:border-gray-500 p-1 mx-8 lg:mx-20 max-w-[1024px]:mx-20"
        aria-label="Main navigation"
      >
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center">
            <a
              className="flex-shrink-0 items-center hidden xl:flex below-400:flex transform transition-all duration-500"
              aria-label="Generic Network Home"
              href="/"
            >
              <div className="ml-1 text-2xl font-bold animate-slideIn">Generic Network</div>
            </a>
            <nav className="ml-4 block below-400:hidden" aria-label="Main menu">
              <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <div className="relative">
                  <ul
                    data-orientation="horizontal"
                    className="group flex flex-1 list-none items-center justify-center space-x-1 text-black/60 dark:text-gray-500"
                    dir="ltr"
                  >
                    {['Home', 'Shop', 'About Us', 'Contact'].map((item, index) => (
                      <a
                        key={item}
                        className={`group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background px-1 text-sm font-medium transition-all duration-300 hover:bg-secondary-300/10 hover: hover:text-accent-foreground hover:font-extrabold disabled:pointer-events-none disabled:opacity-50`}
                        style={{
                        
                          animation: `slideIn 0.5s ease-out ${index * 0.1}s forwards`
                        }}
                        href="#"
                      >
                        {item}
                      </a>
                    ))}
                  </ul>
                </div>
              </nav>
            </nav>
          </div>
          <div className="hidden space-x-4 lg:flex">
            <button className="inline-flex items-center gap-2 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-700 text-white-main hover:bg-primary-800 dark:hover:bg-primary-600 hover:shadow-sm py-2 h-8 rounded-lg px-3 bg-slate-100 text-black">
              Lege los!
            </button>
            
          </div>
          <div className="">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}

              className="inline-flex items-center gap-2 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-md hover:bg-secondary-300/10"

             

              aria-label="Open menu"
              type="button"
              aria-haspopup="dialog"
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          ref={menuRef}
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}

            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"

           
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="p-6 pt-16">
            <ul className="space-y-4">
              {['Home', 'Shop', 'About Us', 'Contact'].map((item, index) => (
                <li
                  key={item}
                  style={{
                    opacity: 0,
                    animation: isMenuOpen ? `slideIn 0.5s ease-out ${index * 0.1}s forwards` : 'none'
                  }}
                >
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-600 transition-all duration-300 hover:text-black hover:font-extrabold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}