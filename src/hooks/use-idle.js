import { useEffect, useState } from 'react'

function useIdle(idleValue) {
    const [isIdle, setIsIdle] = useState(false)

    useEffect(() => {
        function checkIdle() {
            window.setInterval(() => {
                console.log('idle')
                setIsIdle(true)
            }, 1000 * idleValue)
        }

        function handleMouseMove() {
            setIsIdle(false)
        }

        // events
        window.addEventListener('mousemove', handleMouseMove)
        checkIdle()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.clearInterval(checkIdle)
        }
    }, [])

    return isIdle
}

export default useIdle
