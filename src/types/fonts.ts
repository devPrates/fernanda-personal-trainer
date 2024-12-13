import { Oswald, Raleway, Pacifico } from "next/font/google"

export const pacifico = Pacifico({
    weight: ["400"],
    subsets: ['latin'],
})

export const oswald = Oswald({
    weight: ["200", "400", "500", "600", "700"],
    subsets: ['latin'],
})

export const raleway = Raleway({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
})