import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBarTesti";




export default function home(){
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