import { Open_Sans } from 'next/font/google'

export default function Footer() {
  const links = [
    { label: "About Us", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "App Privacy Policy", href: "/privacy-app" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Documentation", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Changelog", href: "/changelog" },
    { label: "FAQ", href: "/faq" },
    { label: "Email", href: "mailto:pear@trypear.ai" },
    { label: "Discord", href: "https://discord.gg/7QMraJUsQt", target: "_blank" },
  ];

  const socialLinks = [
    { href: "https://github.com/trypear/pearai-master", icon: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59..." },
    { href: "https://discord.gg/AKy5FmqCkF", icon: "M13.545 2.907a13.2 13.2 0 0..." },
    { href: "https://x.com/trypearai", icon: "M389.2 48h70.6L305.6 224.2..." },
    { href: "https://www.linkedin.com/company/trypearai", icon: "M416 32H31.9C14.3 32 0 46.5..." },
  ];

  const opensans = Open_Sans({ subsets: ['latin'] })

  return (
    <footer className="mx-auto mt-32 w-full max-w-screen-xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 pb-12 sm:grid-cols-4 sm:gap-6 xl:grid-cols-6">
        
        <div className="col-span-full mb-2 sm:mb-8 xl:col-span-2 xl:mb-0">
          <a className="-ml-1 inline-block " href="/">
            <h1 className={`text-white ${opensans.className}`}>GN</h1>
          </a>
          <p className="mt-5 text-sm leading-[1.75] text-neutral-500 dark:text-neutral-400">
            Spiel einfach ungestört auf unsere Minecraft-Server.
          </p>
        </div>

        <div>
          <h5 className="font-semibold">Unternehmen</h5>
          <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
            <li><a className="text-sm hover:text-primary-600" href="/about">Über uns</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/privacy">Privatsphäre Richtlinien</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/agb">AGB</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/impressum">Impressum</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Produkt</h5>
          <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
            <li><a className="text-sm hover:text-primary-600" href="/shop">Shop</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/games">Spielmodi</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/infos"></a>Status</li>
            <li><a className="text-sm hover:text-primary-600" href="/blog">Blog</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Support</h5>
          <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
            <li><a className="text-sm hover:text-primary-600" href="/changelog">Changelog</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/faq">FAQ</a></li>
            <li><a className="text-sm hover:text-primary-600" href="mailto:support@generic-network.xyz">Email</a></li>
            <li><a className="text-sm hover:text-primary-600" href="generic-network.xyz/discord" target="_blank">Discord</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2.5 border-t py-3.5 text-neutral-500 dark:text-neutral-400 sm:flex-row-reverse">
        <div className="-mr-2 flex items-center gap-1">
          {socialLinks.map((social, idx) => (
            <button key={idx} className="inline-flex items-center gap-2 justify-center h-10 w-10 rounded-full hover:bg-accent hover:text-accent-foreground">
              <a target="_blank" rel="noopener noreferrer" href={social.href}>
                <svg aria-hidden="true" viewBox="0 0 16 16" width="24" className="h-5 w-5">
                  <path fillRule="evenodd" d={social.icon} />
                </svg>
              </a>
            </button>
          ))}
        </div>
        <span className="text-sm">© 2025 Generic Network - Alle Rechte vorbehalten.</span>
      </div>
    </footer>
  );
}
