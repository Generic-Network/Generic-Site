import Footer from "../../components/Footer";
import NavBar from "../../components/NavBarTesti";




export default function home(){
  return (
    <>
      <div className="flex flex-col justify-between h-screen m-0">
        <nav className="">
          <NavBar>
          </NavBar>
        </nav>
        <main>
        


            <div className="p-8 min-h-screen font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Impressum Section */}
                <h1 className="text-4xl font-extrabold font-helvetica mb-8">Impressum</h1>
                
                <p className="mb-6">Informationen über den Diensteanbieter.</p>
                
                <div className="mb-8">
                <p className="font-bold">Generic Network UG i. Gr. (haftungsbeschränkt)</p>
                <p>
                    Salzstr. 1<br />
                    21335 Lüneburg<br />
                    Deutschland
                </p>
                </div>

                <div className="mb-8">
                <p><span className="font-bold">Tel.:</span> 0151 41380419</p>
                <p><span className="font-bold">E-Mail:</span> support@generic-network.xyz</p>
                </div>

                <div className="mb-8">
                <p><span className="font-bold">Register:</span> Handelsregister</p>
                <p><span className="font-bold">Registernummer:</span> HRB 134124</p>
                <p><span className="font-bold">Registergericht:</span> Lüneburg</p>
                </div>

                {/* Privacy Policy Section */}
                <h1 className="text-4xl font-extrabold font-helvetica mt-16 mb-8">Datenschutzerklärung</h1>
                
                <h2 className="text-2xl font-extrabold font-helvetica mb-4">Einleitung und Überblick</h2>
                
                <p className="mb-6">
                Wir haben diese Datenschutzerklärung (Fassung 15.01.2025-322932576) verfasst, 
                um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und 
                anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten wir verarbeiten.
                </p>

                <h2 className="text-2xl font-extrabold font-helvetica mb-4">Anwendungsbereich</h2>
                
                <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
                <li className="mb-2">Social Media Auftritte und E-Mail-Kommunikation</li>
                <li className="mb-2">mobile Apps für Smartphones und andere Geräte</li>
                </ul>

                <h2 className="text-2xl font-extrabold font-helvetica mb-4">Rechtsgrundlagen</h2>
                
                <p className="mb-6">
                Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:
                </p>

                <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2"><span className="font-bold">Einwilligung</span> (Artikel 6 Absatz 1 lit. a DSGVO)</li>
                <li className="mb-2"><span className="font-bold">Vertrag</span> (Artikel 6 Absatz 1 lit. b DSGVO)</li>
                <li className="mb-2"><span className="font-bold">Rechtliche Verpflichtung</span> (Artikel 6 Absatz 1 lit. c DSGVO)</li>
                <li className="mb-2"><span className="font-bold">Berechtigte Interessen</span> (Artikel 6 Absatz 1 lit. f DSGVO)</li>
                </ol>

                <p className="text-sm mt-8 text-gray-400">
                Quelle: Erstellt mit dem Datenschutz Generator von AdSimple
                </p>
            </div>
            </div>

        </main>
        <footer className="static bottom-0 h-8">
          <Footer></Footer>
        </footer>
      </div>

    </>
  )
}