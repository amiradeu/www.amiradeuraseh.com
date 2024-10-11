import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'
import {
    Decal,
    OrbitControls,
    shaderMaterial,
    useGLTF,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

import decalsVertexShader from '../shaders/decals/vertex.glsl'
import decalsFragmentShader from '../shaders/decals/fragment.glsl'

const DecalMaterial = shaderMaterial(
    {
        uDecalTexture: '',
        uTime: 0,
    },
    decalsVertexShader,
    decalsFragmentShader
)

extend({ DecalMaterial })

export default function Experience() {
    /**
     * ADDRESS BAR
     */
    const location = window.location
    const isDebug = location.hash === '#debug'
    // console.log('debugging:', isDebug)

    /**
     * DEBUG
     */
    const { backgroundColor } = useControls({
        backgroundColor: '#f2f9ff',
    })

    const { enableAnimation } = useControls({
        enableAnimation: true,
    })

    const { lemon_rotation, lemon_scale } = useControls('lemon', {
        lemon_rotation: {
            value: { x: 0, y: 0, z: 0.2 },
            min: 0,
            max: Math.PI * 2,
            step: 0.1,
        },
        lemon_scale: {
            value: 10,
            min: 0.01,
            max: 50,
            step: 0.01,
        },
    })

    const { decals_position, decals_rotation, decals_scale } = useControls(
        'decals',
        {
            decals_position: {
                value: { x: 0, y: 0, z: 0.04 },
                min: -0.1,
                max: 0.1,
                step: 0.01,
            },
            decals_rotation: {
                value: { x: 0, y: 0, z: 0.7 },
                min: 0,
                max: Math.PI * 2,
                step: 0.1,
            },
            decals_scale: {
                value: 0.06,
                min: 0.01,
                max: 0.1,
                step: 0.01,
            },
        }
    )

    // Loaders
    const loadingManager = new THREE.LoadingManager()
    const textureLoader = new THREE.TextureLoader(loadingManager)

    // Skill Texture
    const skillTexture = textureLoader.load('/skills/threejs.png')

    /**
     * LEMON MODEL
     * source: https://polyhaven.com/a/lemon
     */
    const lemonRef = useRef()
    const { nodes, materials } = useGLTF('/models/lemon/lemon_1k.gltf')
    // console.log(nodes)

    /**
     * ANIMATIONS
     */
    useFrame((state, delta) => {
        if (enableAnimation) lemonRef.current.rotation.y += delta * 0.5
    })

    return (
        <>
            {isDebug && <axesHelper scale={20} />}
            {isDebug && <Perf position='top-left' />}
            {isDebug && <OrbitControls makeDefault />}

            <color args={[backgroundColor]} attach='background' />

            <directionalLight position={[1, 2, 3]} intensity={2.5} />
            <ambientLight intensity={0.5} />

            {/* <mesh scale={2}>
                <planeGeometry args={[1, 1, 100, 100]} />
                <decalMaterial ref={decalRef} uDecalTexture={skillTexture} />
            </mesh> */}

            {/* decal on plane geo */}
            {/* <mesh ref={decalMeshRef} scale={2} position={[0, 0, 1]}>
                <planeGeometry args={[1, 1, 100, 100]} />

                <meshStandardMaterial
                    transparent={true}
                    // map={skillTexture}
                    displacementMap={faceDisplacementTexture}
                    normalMap={boulderNormalTexture}
                />
            </mesh> */}

            <mesh
                ref={lemonRef}
                geometry={nodes.lemon.geometry}
                material={materials.lemon}
                scale={lemon_scale}
                rotation={[
                    lemon_rotation.x,
                    lemon_rotation.y,
                    lemon_rotation.z,
                ]}
            >
                <Decal
                    debug={isDebug}
                    map={skillTexture}
                    scale={decals_scale}
                    rotation={[
                        decals_rotation.x,
                        decals_rotation.y,
                        decals_rotation.z,
                    ]}
                    position={[
                        decals_position.x,
                        decals_position.y,
                        decals_position.z,
                    ]}
                />

                <Decal
                    debug={isDebug}
                    map={skillTexture}
                    scale={decals_scale}
                    rotation={[-decals_rotation.x, Math.PI, -decals_rotation.z]}
                    position={[
                        -decals_position.x,
                        -decals_position.y,
                        -decals_position.z,
                    ]}
                />
            </mesh>

            {/* <primitive ref={boulderRef} object={boulder.scene} scale={2} /> */}

            {/* <Clone object={boulder.scene} /> */}
        </>
    )
}
