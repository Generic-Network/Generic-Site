import Footer from "./components/Footer";
import NavBar from "./components/NavBar";



export default function home(){
  return (
    <>
      <div className="flex flex-col justify-between h-screen m-0">
        <nav className="sticky top-0 z-50">
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