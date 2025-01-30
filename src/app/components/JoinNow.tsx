import localFont from 'next/font/local';



const nexaBlack = localFont({
  src: '../../../public/fonts/nexa-black.otf',
  variable: '--font-nexa-black',
});


export default function JoinNow() { 

    return (
    
        
          
          <div className={`relative pl-6 wtdc p-14 rounded-2xl text-center text-gray-600 bg-gray-100 justify-center shadow-md transition-all ease-linear hover:shadow-xl hover:bg-gradient-to-r ${nexaBlack.className} `}>
              <h1 className="text-[1.7rem] ml-6 text-3xl ">
                Worauf wartest du? Werde ein Teil unserer{" "}
                <a href="" className="text-blue-600 underline hover:text-purple-600 transition-all ease-linear">Community</a>!
              </h1>
              <div className='font-sans'>

              <h3 className="text-gray-800 font-sans font-semibold text-[1.4rem] below-800:text-[1.1rem]">
                Tauche ein in eine neue Welt voller neuer Freunde und Abenteuer.
              </h3>
              <h3 className="text-gray-800 font-sans font-semibold text-[1.4rem] below-800:text-[1.1rem]">
                Sammle neues Wissen und lerne aus Erfahrungen
              </h3>
              </div>
              <button className="p-4 m-5 below-1000:m-2 px-12 rounded-2xl bg-white text-blue-600 hover:shadow-2xl shadow-sm transition-all ease-linear hover:bg-purple-600 hover:text-white">
                Jetzt joinen
              </button>
              <img
                className="absolute right-[-90px] top-[-30px] xl:scale-125 below-700:hidden"
                src="https://minecraft.wiki/images/thumb/Allay_JE2.gif/150px-Allay_JE2.gif?aca63"
                alt="Allay"
              />
            </div>
          
        
        
          
        
    )

}