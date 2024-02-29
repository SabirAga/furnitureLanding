import { Hero } from "./Hero"
import { Navbar } from "./Navbar"

export const Header = () => {
    return (
        <div className="bg-[url(src/assets/Rectangle1441.jpg)] bg-cover h-[1084px]">
            <Navbar />
            <Hero />
        </div>
    )
}