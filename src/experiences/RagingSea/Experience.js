import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { OrbitControls, shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'

import waterVertexShader from '../shaders/water/vertex.glsl'
import waterFragmentShader from '../shaders/water/fragment.glsl'
import { useEffect, useRef } from 'react'

const WaterMaterial = shaderMaterial(
    {
        uTime: 0,
        uBigWavesElevation: 0.2,
        uBigWavesFrequency: new THREE.Vector2(4, 1.5),
        uBigWavesSpeed: 0.75,

        uSmallWavesElevation: 0.15,
        uSmallWavesFrequency: 3,
        uSmallWavesSpeed: 0.2,
        uSmallIterations: 4,

        uDepthColor: new THREE.Color('#ff4000'),
        uSurfaceColor: new THREE.Color('#151c37'),
        uColorOffset: 0.925,
        uColorMultiplier: 1,
    },
    waterVertexShader,
    waterFragmentShader
)

extend({ WaterMaterial })

export default function Experience() {
    /**
     * ADDRESS BAR
     */
    const location = window.location
    const isDebug = location.hash === '#debug'

    /**
     * DEBUG
     */
    const { backgroundColor } = useControls({
        backgroundColor: '#000000',
    })

    const waterMaterialRef = useRef()
    const planeRef = useRef()

    /**
     * TIME
     */
    useFrame((state, delta) => {
        waterMaterialRef.current.uTime += delta
    })

    // Delete unused attributes for performace
    useEffect(() => {
        // console.log(planeRef.current)
        planeRef.current.deleteAttribute('normal')
        planeRef.current.deleteAttribute('uv')
    }, [planeRef])

    return (
        <>
            {isDebug && <axesHelper scale={20} />}
            {isDebug && <Perf position='top-left' />}
            {isDebug && <OrbitControls makeDefault />}

            <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
                <planeGeometry ref={planeRef} args={[2, 2, 512, 512]} />
                <waterMaterial ref={waterMaterialRef} />
            </mesh>

            <color args={[backgroundColor]} attach='background' />
        </>
    )
}
