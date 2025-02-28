import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";




export default function home(){
  return (
    <>
      <div className="flex flex-col justify-between h-screen m-0">
        <nav className="">
          <NavBar>
          </NavBar>
        </nav>
        <main>
   

<div className="bg-gray-100 text-gray-900">
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-6">Datenschutzerklärung</h2>
        
        <h3 className="text-2xl font-semibold mt-6">2. Allgemeine Hinweise zur Datenverarbeitung</h3>
        <p className="mt-2">Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie haben.</p>
        
        <h3 className="text-2xl font-semibold mt-6">3. Welche Daten wir verarbeiten</h3>
        
        <h4 className="text-xl font-medium mt-4">3.1 Besuch der Website</h4>
        <ul className="list-disc ml-6 mt-2">
            <li>IP-Adresse (anonymisiert)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Besuchte Seiten</li>
            <li>Browsertyp und -version</li>
            <li>Betriebssystem</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">Grundlage: Berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO (Optimierung und Sicherheit der Website).</p>
        
        <h4 className="text-xl font-medium mt-4">3.2 Kontaktaufnahme</h4>
        <p className="mt-2">Wenn Sie uns per E-Mail oder über ein Formular kontaktieren, speichern wir Ihre Angaben für die Bearbeitung der Anfrage.</p>
        <p className="mt-2 text-sm text-gray-600">Grundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen).</p>
        
        <h4 className="text-xl font-medium mt-4">3.3 Google Analytics</h4>
        <p className="mt-2">Wir nutzen Google Analytics, um das Verhalten der Nutzer auf unserer Website zu analysieren. Erfasste Daten:</p>
        <ul className="list-disc ml-6 mt-2">
            <li>Verweildauer auf der Website</li>
            <li>Klickverhalten und Interaktionen</li>
            <li>Herkunft der Besucher (Referrer)</li>
        </ul>
        <p className="mt-2">Google verarbeitet diese Daten in den USA. IP-Anonymisierung ist aktiviert.</p>
        <p className="mt-2 text-sm text-gray-600">Grundlage: Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
        
        <h4 className="text-xl font-medium mt-4">3.4 Affiliate-Links & Werbepartner</h4>
        <p className="mt-2">Bei Nutzung eines Affiliate-Links speichern wir:</p>
        <ul className="list-disc ml-6 mt-2">
            <li>Referrer-URL</li>
            <li>Bestellte Produkte</li>
            <li>Zugeordnete Provisionen</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">Grundlage: Berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO.</p>
        
        <h4 className="text-xl font-medium mt-4">3.5 Zahlungsmethoden (Stripe, PayPal, etc.)</h4>
        <p className="mt-2">Wenn Sie auf unserer Website etwas kaufen, speichern Zahlungsanbieter folgende Daten:</p>
        <ul className="list-disc ml-6 mt-2">
            <li>Name</li>
            <li>Rechnungsadresse</li>
            <li>Zahlungsinformationen</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">Grundlage: Vertragserfüllung gemäß Art. 6 Abs. 1 lit. b DSGVO.</p>
        
        <h3 className="text-2xl font-semibold mt-6">4. Speicherung & Löschung der Daten</h3>
        <ul className="list-disc ml-6 mt-2">
            <li>Kontaktanfragen: 6 Monate</li>
            <li>Google Analytics Daten: 14 Monate</li>
            <li>Affiliate-Daten: 3 Jahre</li>
            <li>Rechnungsdaten: 10 Jahre</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mt-6">5. Ihre Rechte nach DSGVO</h3>
        <ul className="list-disc ml-6 mt-2">
            <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung falscher Daten (Art. 16 DSGVO)</li>
            <li>Löschung der Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p className="mt-2">E-Mail für Anfragen: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a></p>
        
        <h3 className="text-2xl font-semibold mt-6">6. Änderungen der Datenschutzerklärung</h3>
        <p className="mt-2">Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um sie an rechtliche Anforderungen anzupassen.</p>
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