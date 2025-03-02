export default function ServerStatus() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 text-center">
            <div className="container">
                <h1 className="text-[1.5rem]">Server Status</h1>
                <h3 className="font-sans font-bold">Der Status aller wichtigen Server</h3>

                <div className="grid grid-cols-1 gap-4 mt-6 w-full">
                    <div className="p-10 xl:mx-40 rounded-2xl bg-slate-200 flex justify-center items-center">
                        <h1 className="text-[1.3rem]">Minecraft Server</h1>
                    </div>
                    <div className="py-[7rem] xl:mx-40 rounded-2xl bg-slate-200"></div>
                    <div className="py-[7rem] xl:mx-40 rounded-2xl bg-slate-200"></div>
                </div>
            </div>
        </div>
    );
}
