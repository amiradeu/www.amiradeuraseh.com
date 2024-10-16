import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { useLocation } from 'react-router-dom'

import Experience from './Experience'

function Skills() {
    const location = useLocation()
    const debugVisible = location.hash === '#debug'

    return (
        <>
            <Leva hidden={!debugVisible} />
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 12],
                }}
            >
                <Experience />
            </Canvas>
        </>
    )
}

export default Skills
