export default function NavBar() {
  return (
    <>
      <nav
        className="mx-auto flex max-w-[1070px] items-center justify-between px-2 transition-all duration-300 ease-in-out dark:border-gray-50"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <a
            className="flex flex-shrink-0 items-center"
            aria-label="PearAI Home"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="28"
              fill="none"
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M7 7.434h.012c3.238.002 3.272.135 3.909 2.606.148.575.328 1.275.589 2.13.79 2.587.94 2.964 1.112 3.399.131.331.276.696.728 2.099 1.018 3.163-.187 7.283-6.338 7.484h-.024C.838 24.95-.368 20.83.651 17.668c.451-1.403.596-1.768.727-2.1.173-.434.323-.811 1.112-3.398.261-.855.442-1.556.59-2.13.636-2.47.67-2.604 3.908-2.606z"
                clipRule="evenodd"
              ></path>
              <circle cx="10.227" cy="14.602" r="0.711" fill="#000"></circle>
              <path
                fill="#000"
                fillRule="evenodd"
                d="m8.676 6.592-.013.01V6.59l-.015-.004.013-.011c-.028-.292-.118-1.824.83-2.866.965-1.06 3.039-.917 3.372-.886l.005-.005.042.001s-.035 2.4-1.308 3.306c-1.146.816-2.642.532-2.926.468"
                clipRule="evenodd"
              ></path>
              <path
                fill="#000"
                d="M11.926 18.979c0 1.67-2.297 2.896-2.297 2.896s1.312-1.225 1.312-2.896c0-1.672-1.18-2.335-.328-2.637.853-.303 1.313.965 1.313 2.637"
              ></path>
            </svg>
            <div className="ml-1 mt-[2px] text-xl font-semibold">PearAI</div>
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
                    <button
                      id="radix-:R14qcq:-trigger-radix-:Rn4qcq:"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:R14qcq:-content-radix-:Rn4qcq:"
                      className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background px-1 text-sm transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 group"
                      data-radix-collection-item=""
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
                        className="lucide lucide-chevron-down relative top-px ml-px h-3 w-3 stroke-[2.8] text-[#b3b3b3] transition duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      id="radix-:R14qcq:-trigger-radix-:R174qcq:"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:R14qcq:-content-radix-:R174qcq:"
                      className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background px-1 text-sm transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 group"
                      data-radix-collection-item=""
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
                        className="lucide lucide-chevron-down relative top-px ml-px h-3 w-3 stroke-[2.8] text-[#b3b3b3] transition duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </li>
                  <a
                    className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background px-1 text-sm transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                    target="_self"
                    data-radix-collection-item=""
                    href="/pricing"
                  >
                    Pricing
                  </a>
                  <a
                    className="group inline-flex h-8 w-max items-center justify-center rounded-lg bg-background px-1 text-sm transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                    target="_blank"
                    data-radix-collection-item=""
                    href="https://github.com/trypear/pearai-master"
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
          <div className="flex items-center space-x-4">
            <div className="m-0 inline-flex rounded-xl border border-[#e6e6e6] p-0">
              <a href="/signin">
                <button className="inline-flex items-center gap-2 justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary-300/10 hover:text-accent-foreground rounded-lg px-4 py-2 h-9 rounded-r-none pl-3 pr-2 text-base font-normal">
                  Sign in
                </button>
              </a>
              <div className="w-[1px] self-stretch bg-[#e6e6e6]"></div>
              <a href="/signup">
                <button className="inline-flex items-center gap-2 justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary-300/10 hover:text-accent-foreground rounded-lg px-4 py-2 h-9 rounded-l-none border-0 pl-2 pr-3 text-base font-normal">
                  Sign up
                </button>
              </a>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white-main dark:hover:bg-primary-600 hover:shadow-sm py-2 h-9 rounded-xl bg-black px-4 text-base font-normal hover:bg-black/80">
            Download for free
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
