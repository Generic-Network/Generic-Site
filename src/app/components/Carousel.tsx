import "./css/Carousel.scss"

export default function Carousel() {
  return(
    <>
    <div className="mode-preview-card text-center font-sans">
    <div className="text-3xl font-bold flex justify-center">
        Welche <span className="text-orange-600 ml-1">Spielmodi</span> bieten wir dir an?
    </div>
    <div className="text-lg mt-2">
        Wir bieten dir viele verschiedene Spielmodi, die alle etwas Besonderes haben und Spaß mitbringen
    </div>
    <div className="flex overflow-x-auto gap-4 mt-5 p-3">
        {[
            { src: "https://assets.twerion.net/website/Red_Bed.webp", alt: "Bedwars", name: "Bedwars" },
            { src: "https://assets.twerion.net/website/Bedrock_JE2_BE2.webp", alt: "Oneblock", name: "Oneblock" },
            { src: "https://assets.twerion.net/website/Sandstone_JE6_BE3.webp", alt: "FastBuilders", name: "FastBuilders" },
            { src: "", alt: "CityBuild SMP", name: "CityBuild SMP" },
            { src: "https://assets.twerion.net/website/Feather_JE3_BE2.webp", alt: "SkyPVP", name: "SkyPVP" },
            { src: "https://assets.twerion.net/website/Stick_JE1_BE1.webp", alt: "Practice", name: "Practice" },
            { src: "https://assets.twerion.net/website/Diamond_Sword_JE3_BE3.webp", alt: "Lifesteal SMP", name: "Lifesteal SMP" },
            { src: "https://assets.twerion.net/website/Fishing_Rod_JE2_BE2.webp", alt: "BuildFFA", name: "BuildFFA" },
            { src: "https://assets.twerion.net/website/Golden_Apple_JE2_BE2.webp", alt: "OPPvP", name: "OPPvP" }
        ].map((mode, index) => (
            <div key={index} className="flex flex-col items-center min-w-[100px]">
                <img className="w-12 h-12 object-contain" src={mode.src} alt={mode.alt} />
                <div className="mt-2 text-sm font-medium">{mode.name}</div>
            </div>
        ))}
    </div>
</div>


    </>
  )
}