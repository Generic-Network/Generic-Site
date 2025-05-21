export default function ServerStatus() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center shadow-2xl">
            <div className="container">
                <h1 className="text-[1.5rem]">Server Status</h1>
                <h3 className="font-sans font-bold">Der Status aller wichtigen Server</h3>

                <div className="grid grid-cols-1 gap-4 mt-6 w-full">
                    <div className="p-10 xl:mx-40 rounded-2xl bg-white flex justify-center items-center shadow-2xl">
                        <h1 className="text-[1.3rem]">Minecraft Server</h1>
                    </div>
                    <div className="py-[9rem] xl:mx-40 rounded-2xl bg-white shadow-2xl"></div>
                    <div className="py-[9rem] xl:mx-40 rounded-2xl bg-white shadow-2xl"></div>
                </div>
            </div>
        </div>
    );
}
