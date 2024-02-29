export const Hero = () => {
    return (
        <div>
            <div className="text-white text-center mt-40 font-questrial">
                <div className="font-bold text-7xl flex flex-col gap-y-5">
                    <h1>Make Your Interior More</h1>
                    <h1>Minimalistic & Modern</h1>
                </div>
                <div className="pt-4 text-2xl">
                    <p>Turn your room with panto into a lot more minimalist </p>
                    <p>and modern with ease and speed</p>
                </div>
                <div className="relative flex items-center justify-center mt-[45px] ">
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search furniture"
                            className="border rounded-full pl-4 text-white w-[344px] h-[56px]  backdrop-blur-sm bg-transparent"
                            />
                        <button className="ml-[-47px] z-10">
                            <img src="src/assets/Frame48095395.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
