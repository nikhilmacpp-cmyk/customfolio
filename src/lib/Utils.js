import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const classNameFunction = (...inputs)=>{
    return twMerge(clsx(inputs))
}