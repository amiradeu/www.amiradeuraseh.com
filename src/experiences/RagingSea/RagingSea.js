import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'

import Experience from './Experience'

function RagingSea() {
    const location = window.location
    const isDebug = location.hash === '#debug'

    return (
        <>
            <Leva hidden={!isDebug} />
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 1, 2],
                }}
            >
                <Experience />
            </Canvas>
        </>
    )
}

export default RagingSea
