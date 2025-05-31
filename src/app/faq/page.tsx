import Footer from "../components/Footer";
import NavBar from "../components/NavBarTesti";

export const metadata = {
  title: "Generic Network | FAQ - Fragen und Antworten",
  description: "Auf dieser Seite gibt es ein breites Arsenal an oft gestellten Fragen und Antworten von unserem Team Persönlich",
};

export default function faq(){
  return (
    <>
      <div className="flex flex-col justify-between h-screen m-0">
        
        <nav className="">
          <NavBar>
          </NavBar>
        </nav>
        <main>

        </main>
        <footer className="static bottom-0 h-8">
          <Footer></Footer>
        </footer>
      </div>
      
    </>
  )
}