import hexRgb from "hex-rgb"

export default function toRGBA(hex: string, a: number = 1) {
    const {red, green, blue, alpha} = hexRgb(hex, {alpha : a})
    return  `rgba(${red}, ${green}, ${blue}, ${alpha})`
}