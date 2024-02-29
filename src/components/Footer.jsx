export const Footer = () => {
    return (
        <div className="h-[420px] bg-[#2D2F33] font-questrial">
            <div className="grid grid-cols-4  p-10 lg:pt-[118px] lg:w-[1000px] lg:flex lg:justify-between lg:pl-[118px]">
                <div className="h-[146px]  text-white">
                    <h1 className="font-bold text-4xl pb-7">Panto</h1>
                    <p className="w-[293px]">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>
                <div className="grid col-span-3 col-start-5 lg:flex">
                    <div className="grid lg:pr-11">
                        <ul className=" lg:gap-y-[20px]">
                            <li className="text-[#E58411]">Services</li>
                            <li className="text-white"><a href="#">Email Marketing</a></li>
                            <li className="text-white"><a href="#">Campaigns</a></li>
                            <li className="text-white"><a href="#">Branding</a></li>
                        </ul>
                    </div>
                    <div className="grid lg:pl-11">
                        <ul className="lg:gap-y-[20px] ">
                            <li className="text-[#E58411]">Furniture</li>
                            <li className="text-white"><a href="#">Beds</a></li>
                            <li className="text-white"><a href="#">Chair</a></li>
                            <li className="text-white"><a href="#">All</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-around lg:flex lg:justify-between lg:px-[118px] pt-[75px]">
                <p className="text-white opacity-50">Copyright © 2021</p>
                <div className="flex gap-10">
                    <p className="text-white">
                        <a href="#">Terms & Conditions</a>
                    </p>
                    <p className="text-white">
                        <a href="#">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}