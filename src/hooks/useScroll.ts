import { useState } from "react"

export default function useScroll() {
    const [scrollDirection, setScrollDirection] = useState('none')
    const [lastY, setLastY] = useState(0)

    function handleScroll(event) {
        if (lastY > event?.contentOffset?.y && scrollDirection !== 'UP') {
            setScrollDirection('UP')
        } else if (lastY < event?.contentOffset?.y && scrollDirection !== 'DOWN') {
            setScrollDirection('DOWN')
        }
        setLastY(event.contentOffset.y)
    }
    return {
        handleScroll,
        scrollDirection
    }
}
