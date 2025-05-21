import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const nexaBlack = localFont({
  src: '../../../public/fonts/nexa-black.otf',
  variable: '--font-nexa-black', // CSS-Variable für Tailwind
});



const openSans = Open_Sans({ subsets: ['latin'], weight: ["800"] });


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


  return (


    <>
    
      <div className={`mx-auto mt-40 w-full max-w-screen-xl px-4 sm:px-6 static bottom-0 ${nexaBlack.className} below-400:text-center`}>
         
      
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 pb-12 sm:grid-cols-4 sm:gap-6 xl:grid-cols-7">
        
        <div className="col-span-full mb-2 sm:mb-8 xl:col-span-2 xl:mb-0">
          <a className="-ml-1 inline-block" href="/">
            <h1 className={`text-black font-extrabold ${nexaBlack.className}`}>Generic Network</h1>
          </a>
          <p className="mt-5 text-sm leading-[1.75] text-neutral-500 dark:text-neutral-400">
            Spiel einfach ungestört auf unsere Minecraft-Server.
          </p>
        </div>

        <div>
          <h5 className="">Unternehmen</h5>
          <ul className={`mt-4 space-y-2 text-neutral-500 dark:text-neutral-400`}>
            <li><a className="text-sm hover:text-primary-600" href="/aboutus">Über uns</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/rechtliches/privacy">Privatsphäre Richtlinien</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/rechtliches/agb">AGB</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/rechtliches/impressum">Impressum</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Produkt</h5>
          <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
            <li><a className="text-sm hover:text-primary-600" href="/shop">Shop</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/games">Spielmodi</a></li>
            <li><a className="text-sm hover:text-primary-600" href="/infos">Infos</a></li>
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

        <div>
            <h5 className="font-semibold">Sonstiges</h5>
            <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
              <li><a className="text-sm hover:text-primary-600" href="/status">Status</a></li>
              <li><a className="text-sm hover:text-primary-600" href="/services">Services</a></li>
              <li><a className="text-sm hover:text-primary-600" href="/socials">Socials</a></li>
              <li><a className="text-sm hover:text-primary-600" href="/" target="_blank">AJSDLAJSDKL</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      


      <div className="flex flex-col items-center justify-center gap-2.5 border-t border-black py-3.5 text-neutral-500 dark:text-neutral-400 sm:flex-row-reverse">
        <div className="-mr-2 flex items-center gap-1">
          
        </div>
        <span className="text-sm">© 2025 Generic Network Holding GmbH & CO KG - Alle Rechte vorbehalten.</span>
      </div>

    </>
  );
}
