import { useState } from "react";

const DUMMY_PRODUCTS = [
    {
        id: '1',
        type: 'Chair',
        name: 'Sakarias Armchair',
        photo: 'src/assets/chair/chair-01.png',
        rating: 'src/assets/chair/rating/Group 171.png',
        price: 392
    },
    {
        id: '2',
        type: 'Chair',
        name: 'Baltsar Chair',
        photo: 'src/assets/chair/chair-02.png',
        rating: 'src/assets/chair/rating/Group 172.png',
        price: 299
    },
    {
        id: '3',
        type: 'Chair',
        name: 'Anjay Chair',
        photo: 'src/assets/chair/chair-03.png',
        rating: 'src/assets/chair/rating/Group 171.png',
        price: 519
    },
    {
        id: '4',
        type: 'Chair',
        name: 'Nyantuy Chair',
        photo: 'src/assets/chair/chair-04.png',
        rating: 'src/assets/chair/rating/Group 171.png',
        price: 921
    },

]


export const Products = () => {

    const furnitures = [
        { key: 'Chair', label: 'Chair' },
        { key: 'Beds', label: 'Beds' },
        { key: 'Sofa', label: 'Sofa' },
        { key: 'Lamp', label: 'Lamp' },
    ];

    const [isActive, setIsActive] = useState('Chair')

    return (
        <div className="flex flex-col  items-center text-center font-questrial h-fit lg:h-[906px] bg-[#F7F7F7] pt-[50px]">
            <div className="pb-[32px]">
                <h1 className="font-bold text-5xl">Best Selling Product</h1>
            </div>
            <div >
                <ul className="flex flex-row justify-center items-center gap-x-8 mt-6 text-lg border rounded-full w-[340px] bg-[#EEEEEE] h-[57px]">
                    {/* <li className="border rounded-full bg-white px-[19.5px] h-[45px]  py-[7px]"> <a href="#">Chair</a></li>
                    <li> <a href="#">Beds</a></li>
                    <li> <a href="#">Sofa</a></li>
                    <li> <a href="#">Lamp</a></li> */}
                    {furnitures.map((furniture) => {
                        return (<li key={furniture.key} className={isActive===furniture.key && 'border rounded-full bg-white px-[19.5px] h-[45px]  py-[7px]'} onClick={()=>{ setIsActive(furniture.key) }}> <button href="">{furniture.label}</button></li>)
                    })}
                </ul>
            </div>
            <div className="pt-[80px] ">
                <ul className="grid gap-y-20 lg:flex lg:gap-x-[42px]">

                    <button className="transform rotate-90 relative -my-10 -bottom-20 lg:relative lg:left-20 z-10 lg:-top-2  lg:rotate-0">
                        <img src="src/assets/grommet-icons_form-next-link.svg" className="border rounded-full p-5 bg-white" alt="" />
                    </button>
                    {DUMMY_PRODUCTS.map(({ id, name, photo, rating, price, type }) => (
                        <li className="border rounded-xl w-[270px] h-[500px] bg-[#FAFAFA]  relative flex flex-col" key={id}>
                            <div className="min-h-[326px]">
                                <img src={photo} alt={name} className="relative w-full bottom-16" />
                            </div>
                            <div className="relative bg-white text-start bottom-10 p-4 rounded-b-xl grow">
                                <p className="pb-[6px]">{type}</p>
                                <p className="font-bold pb-[6px] text-[#0D1B39] text-2xl">{name}</p>
                                <img src={rating} alt="" className="" />
                                <div className="flex  pt-8 pb-[10px] ">
                                    <p className="pl-4 self-center">${price}</p>
                                    <button className="border rounded-full bg-black text-white py-[14px] px-[14px] ml-32 self-center relative ">
                                        <img src="src/assets/Vector.png" alt="" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                    <button className="transform -rotate-90 relative -my-10 bottom-28 lg:relative lg:right-20 z-10 lg:bottom-2 lg:rotate-180">
                        <img src="src/assets/grommet-icons_form-next-link.svg" className="border rounded-full p-5 bg-white" alt="" />
                    </button>
                </ul>
            </div>
            <div>
                <button className="text-[#E58411] my-[50px] text-lg">View All &rarr;</button>
            </div>
        </div>
    );
};
