import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { classNameFunction } from "../lib/Utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const theme = localStorage.getItem("theme");
        if(theme === "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark")
        }else{
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark")
        }
    },[])

    const toggleTheme = () => {
        if(isDarkMode){
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","lignt");
        }else{
            setIsDarkMode(true);
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark");
        }
    }
    return <button className={
        classNameFunction("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
    )} onClick={toggleTheme}>{isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" />
        :
        <Moon className="h-6 w-6 text-blue-300" />}</button>
}