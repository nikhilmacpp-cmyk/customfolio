import { useEffect, useState } from "react";
import { classNameFunction } from "../lib/Utils"
import { FileEditIcon, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const navItems = [
    { name: 'Home', href: "#home" },
    { name: 'About', href: "#about" },
    { name: 'Skills', href: "#skills" },
    { name: 'Projects', href: "#projects" },
    { name: 'Contact', href: "#contact" }
]
export const Navbar = (props) => {
    const {
        action
    } = props
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const initialState = useSelector((state) => state.view);
    const { activeView = '' } = initialState;
    useEffect(() => {
        const handleSCroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleSCroll);
        return () => window.removeEventListener('scroll', handleSCroll);
    }, [])
    return <nav
        className={classNameFunction("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
        <div
            onClick={() => action({ type: 'FORM-EDIT', payload:activeView==='form'?'design':'form'})}
            className="absolute cursor-pointer  ml-2 top-5 flex gap-1 items-center border border-1 hover:bg-[rgba(167,139,250,0.3)]
         border-purple-400 p-1 rounded-md transition-colors duration-200">
            <span>
                <span className="text-red-500">E</span>dit
            </span>
            <FileEditIcon size={17} />
        </div>
        <div className="container flex items-center justify-around">
            <a className="text-xl font-bold text-primary flex items-center" href="#home">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Nikhil PP</span> PortFolio
                </span>
            </a>

            {/* Desktop */}
            <div className="hidden md:flex space-x-8">
                {navItems?.map((item, key) => (
                    <a href={item?.href} key={key}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300">{item?.name}</a>
                ))}
            </div>
            {/* mobile */}
            <button onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
            <div className={
                classNameFunction("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transsition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems?.map((item, key) => (
                        <a href={item?.href} key={key}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >{item?.name}</a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
}