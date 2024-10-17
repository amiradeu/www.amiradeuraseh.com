import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'
import { OrbitControls, shaderMaterial } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

import waterVertexShader from '../shaders/water/vertex.glsl'
import waterFragmentShader from '../shaders/water/fragment.glsl'
import useMousePosition from '../../hooks/use-mouse-position'
import useIdle from '../../hooks/use-idle'

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

        uCursorX: 0,
        uCursorY: 0,
    },
    waterVertexShader,
    waterFragmentShader
)

extend({ WaterMaterial })

export default function Experience() {
    /**
     * Cursor
     */
    const mousePosition = useMousePosition()

    const isIdle = useIdle(10)

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
        // update shader uniform time
        waterMaterialRef.current.uTime += delta

        const currentX = waterMaterialRef.current.uCursorX
        const currentY = waterMaterialRef.current.uCursorY

        // during idle, position goes back to center (0,0) slowly
        if (isIdle) {
            // console.log('going back to 0,0')
            waterMaterialRef.current.uCursorX -= currentX * delta * 0.4
            waterMaterialRef.current.uCursorY -= currentY * delta * 0.4
        } else {
            // small increments to destination position
            const shiftX = (mousePosition.x - currentX) * delta
            const shiftY = (mousePosition.y - currentY) * delta

            waterMaterialRef.current.uCursorX += shiftX
            waterMaterialRef.current.uCursorY += shiftY
        }

        // console.log(mousePosition.x, mousePosition.y)
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
                <planeGeometry ref={planeRef} args={[5, 5, 512, 512]} />
                <waterMaterial ref={waterMaterialRef} />
            </mesh>

            <color args={[backgroundColor]} attach='background' />
        </>
    )
}
