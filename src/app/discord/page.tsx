import { redirect } from "next/dist/server/api-utils";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const discordLink = "https://discord.gg/5tZpmCzvtX"; 

export default function discord(){

  window.location.href = discordLink;

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