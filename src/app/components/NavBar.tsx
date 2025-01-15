export default function NavBar() {
  return (
    <>
      <nav
        className="rounded-2xl border-[1.5px] border-gray-200 bg-background px-2 transition-all mt-5 duration-300 ease-in-out dark:border-gray-500 p-1 mx-8 lg:mx-20 max-w-[1024px]:mx-20"
        aria-label="Main navigation"
      >
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center">
            <a
              className="flex-shrink-0 items-center hidden xl:flex below-400:flex"
              aria-label="Generic Network Home"
              href="/"
            >
              <div className="ml-1 text-2xl font-bold">Generic Network</div>
            </a>
            <nav className="ml-4  md:block" aria-label="Main menu">
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
                    <a
                      className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background px-1 text-sm font-medium transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                      target="_self"
                      href="/pricing"
                    >
                      Home
                    </a>
                    <a
                      className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background px-1 text-sm font-medium transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                      target="_self"
                      href="/docs"
                    >
                      Shop
                    </a>
                    <a
                      className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background px-1 text-sm font-medium transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                      target="_blank"
                      href="https://github.com/trypear/pearai-master"
                    >
                      About Us
                    </a>
                    <a
                      className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background px-1 text-sm font-medium transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                      target="_blank"
                      href="https://github.com/trypear/pearai-master"
                    >
                      About Us
                    </a>
                  </ul>
                </div>
              </nav>
            </nav>
          </div>
          <div className="hidden items-center space-x-4 lg:flex">
            <button className="inline-flex items-center gap-2 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-700 text-white-main hover:bg-primary-800 dark:hover:bg-primary-600 hover:shadow-sm py-2 h-8 rounded-lg px-3 bg-slate-100 text-black">
              Lege los!
            </button>
            <div className="flex h-9 w-9 items-center justify-center duration-200">
              <label className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-gray-600/50 duration-200 hover:bg-gray-400/20">
                <input className="hidden" type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-moon-star h-5 w-5"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                </svg>
              </label>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              className="inline-flex items-center gap-2 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-md hover:bg-secondary-300/10"
              aria-label="Open menu"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
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
      </nav>
    </>
  );
}