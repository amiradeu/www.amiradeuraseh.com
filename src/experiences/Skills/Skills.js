import { Canvas } from '@react-three/fiber'

import Experience from './Experience'

function Skills() {
    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 0, 8],
            }}
        >
            <Experience />
        </Canvas>
    )
}

export default Skills
