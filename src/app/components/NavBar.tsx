import { errorMonitor } from "events";
import Link from "next/link";



export default function NavBar() {

  function copyIp(): any {
    console.log('button pressed')
    const ip = 'generic-network.xyz'
    navigator.clipboard.writeText(ip).then(() => {
      console.log(`copied ${ip} to clipboard.`)
    }).catch(err => {
      console.error('error', err)
    })
  }

  return (
    <>
      <nav
        className="mx-auto flex max-w-[1070px] items-center justify-between px-2 transition-all duration-300 ease-in-out dark:border-gray-50 py-2"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <a
            className="flex flex-shrink-0 items-center"
            aria-label="PearAI Home"
            href="/"
          >
            
              
            <div className="ml-1 mt-[2px] text-xl font-semibold">Generic Network</div>
          </a>
          <nav className="ml-4 hidden md:block" aria-label="Main menu">
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              dir="ltr"
              className="relative z-10 flex max-w-max flex-1 items-center justify-center"
            >
              <div>
                <ul
                  data-orientation="horizontal"
                  className="group flex flex-1 list-none items-center justify-center space-x-1 text-[#666666] dark:text-gray-500"
                  dir="ltr"
                >
                  <li>
                    <Link href="/" className="transition-all p-2 ease-linear hover:text-gray-800">Home </Link>
                       
                  </li>
                  <li>
                    <Link href="/aboutus"> About Us </Link>
                  </li>
                  <a
                    className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background p-2 text-sm transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                    target="_self"
                    data-radix-collection-item=""
                    href="/contact"
                  >
                    Contact
                  </a>
                  <a
                    className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background p-2 text-sm transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                    target="_blank"
                    data-radix-collection-item=""
                    href="/contact"
                  >
                    GitHub
                  </a>
                </ul>
              </div>
              <div className="absolute left-0 top-full flex justify-center"></div>
            </nav>
          </nav>
        </div>
        <div className="hidden items-center space-x-2 lg:flex">
          
         <button
              onClick={copyIp}
              className="inline-flex items-center gap-2 justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white-main dark:hover:bg-gray-400 font-bold hover:shadow-sm py-2 h-9 rounded-xl bg-gray-200 px-4 text-base hover:bg-black/80"
            >
              Start Playing
            </button>
        </div>
        <div className="lg:hidden">
          <button
            className="inline-flex items-center gap-2 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-md hover:bg-secondary-300/10"
            aria-label="Open menu"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:Rcqcq:"
            data-state="closed"
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
      </nav>
    </>
  );
}
