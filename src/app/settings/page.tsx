import Footer from "../components/Footer";
import NavBar from "../components/NavBarTesti";

export default function infos(){
  return (
    <>
      <div className="flex flex-col justify-between h-screen m-0">
        <nav className="">
          <NavBar>
          </NavBar>
        </nav>
        <main>
            <p>settings</p>
        </main>
        <footer className="static bottom-0 h-8">
          <Footer></Footer>
        </footer>
      </div>
      
    </>
  )
}