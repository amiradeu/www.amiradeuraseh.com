import { useEffect, useState } from 'react'

function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        function handleMouseMove(event) {
            setMousePosition({
                x: event.clientX / window.innerWidth - 0.5,
                y: event.clientY / window.innerHeight - 0.5,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return mousePosition
}

export default useMousePosition
