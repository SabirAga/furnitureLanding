export const Advantages = () => {
    return (
        <>
            <div className="grid grid-cols-2 px-10 justify-items-center items-center md:flex  md:justify-center lg:items-center font-questrial h-fit md:h-[420px]  ">
                <div className="font-questrial font-bold text-4xl mr-[81px]">
                    <h2>Why</h2>
                    <h2>Choosing Us</h2>
                </div>
                <ul className="grid  md:grid-cols-2  md:gap-x-10 lg:flex gap-x-[41px]" >
                    <li className="w-[250px]">
                        <p className="font-bold text-2xl pb-5">Luxury Facilities</p>
                        <p className="pb-3 text-base ">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                        <button className="text-[#E58411]">More info &rarr;</button>
                    </li>
                    <li className="w-[250px]">
                        <p className="font-bold text-2xl pb-5">Affordable Price</p>
                        <p className="pb-3 text-base ">You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                        <button className="text-[#E58411]">More info &rarr;</button>
                    </li>
                    <li className="w-[250px] pb-2">
                        <p className="font-bold text-2xl pb-5">Many Choices</p>
                        <p className="pb-3 text-base ">We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                        <button className="text-[#E58411]">More info &rarr;</button>
                    </li>
                </ul>
            </div>
        </>
    )
}