import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls, shaderMaterial } from '@react-three/drei'
import {
    InstancedRigidBodies,
    Physics,
    RigidBody,
    CuboidCollider,
} from '@react-three/rapier'
import * as THREE from 'three'
import { useLocation } from 'react-router-dom'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

import { TECHSTACK } from '../../data'
import halftoneVertexShader from '../shaders/halftone/vertex.glsl'
import halftoneFragmentShader from '../shaders/halftone/fragment.glsl'

const HalftoneMaterial = shaderMaterial(
    {
        uColor: new THREE.Color(0.2, 0.0, 0.1),
        uResolution: new THREE.Vector2(
            940.0 * 1, // size.width * viewport.pixelRatio,
            960.0 * 1 // size.height * viewport.pixelRatio
        ),
        uShadowRepetitions: 200,
        uShadowColor: new THREE.Color('#8e19b8'),
        uLightRepetitions: 200,
        uLightColor: new THREE.Color('#e5ffe0'),
    },
    halftoneVertexShader,
    halftoneFragmentShader
)

extend({ HalftoneMaterial })

export default function Experience() {
    const location = useLocation()
    const debugVisible = location.hash === '#debug'

    // DEBUG UI
    const { backgroundColor } = useControls({
        backgroundColor: '#fefefe',
    })
    const {
        color,
        shadowColor,
        lightColor,
        shadowRepetitions,
        lightRepetitions,
    } = useControls('sphere', {
        color: '#9faeeb',
        shadowColor: '#1a41b8',
        lightColor: '#fefefe',
        shadowRepetitions: {
            value: 100,
            min: 0,
            max: 300,
            step: 1,
        },
        lightRepetitions: {
            value: 100,
            min: 0,
            max: 300,
            step: 1,
        },
    })

    const { size, viewport } = useThree()

    const spheresCount = TECHSTACK.length

    // invisible walls
    const length = 5
    const height = 15
    const width = 1
    const basePosition = -3

    const sphereRef = useRef()
    const spheresRef = useRef()

    const instances = useMemo(() => {
        const instances = []

        for (let i = 0; i < spheresCount; i++) {
            const scale = TECHSTACK[i].level * 0.3
            // const scale = 0.5

            instances.push({
                key: 'instance_' + i,
                position: [(Math.random() - 0.5) * length, 2 + i, 0],
                // scale: [scale, scale, scale],
                scale: [1.0, 1.0, 1.0],
            })
        }

        // console.log(instances)

        return instances
    }, [])

    useFrame((state, delta) => {})

    const sphereJump = () => {
        console.log('jump', sphereRef.current)
        const force = Math.random() * 12 + 6
        sphereRef.current.applyImpulse({ x: 0, y: force, z: 0 })
    }

    return (
        <>
            <color args={[backgroundColor]} attach='background' />

            {debugVisible && <Perf position='top-left' />}

            {debugVisible && <OrbitControls makeDefault />}

            <Physics debug={false} gravity={[0, -9.81, 0]}>
                {/* Sphere */}
                {/* <RigidBody
                            ref={sphereRef}
                            colliders='ball'
                            position={[-1.5, 0, 0]}
                        >
                            <mesh scale={[0.5, 0.5, 0.5]} onClick={sphereJump}>
                                <sphereGeometry />
                                <halftoneMaterial
                                    uResolution={
                                        new THREE.Vector2(
                                            size.width * viewport.dpr,
                                            size.height * viewport.dpr
                                        )
                                    }
                                />
                            </mesh>
                        </RigidBody> */}

                {/* Spheres */}
                {instances.map(({ position, scale }, index) => {
                    return (
                        <RigidBody
                            key={index}
                            colliders='ball'
                            position={position}
                        >
                            <mesh scale={scale}>
                                <sphereGeometry />
                                <halftoneMaterial
                                    uResolution={
                                        new THREE.Vector2(
                                            size.width * viewport.dpr,
                                            size.height * viewport.dpr
                                        )
                                    }
                                    uColor={color}
                                    uShadowColor={shadowColor}
                                    uLightColor={lightColor}
                                    uShadowRepetitions={shadowRepetitions}
                                    uLightRepetitions={lightRepetitions}
                                />
                            </mesh>
                        </RigidBody>
                    )
                })}

                {/* Spheres w Instanced Mesh */}
                {/* <InstancedRigidBodies instances={instances} colliders='ball'>
                            <instancedMesh args={[null, null, spheresCount]}>
                                <sphereGeometry />
                                <halftoneMaterial
                                    uResolution={
                                        new THREE.Vector2(
                                            size.width * viewport.dpr,
                                            size.height * viewport.dpr
                                        )
                                    }
                                />
                            </instancedMesh>
                        </InstancedRigidBodies> */}

                {/* Floor */}
                {/* <RigidBody type='fixed' restitution={0.2} friction={0.4}>
                            <mesh receiveShadow position-y={-3}>
                                <boxGeometry args={[length, 0.5, 1]} />
                                <meshStandardMaterial color='slategray' />
                            </mesh>
                        </RigidBody> */}

                {/* Invisible Walls */}
                <RigidBody type='fixed'>
                    {/* front */}
                    <CuboidCollider
                        args={[length, height, width]}
                        position={[0, height + basePosition, width * 2]}
                    />
                    {/* back */}
                    <CuboidCollider
                        args={[length, height, width]}
                        position={[0, height + basePosition, -width * 2]}
                    />
                    {/* right */}
                    <CuboidCollider
                        args={[width, height, 1]}
                        position={[length + width, height + basePosition, 0]}
                    />
                    {/* left */}
                    <CuboidCollider
                        args={[width, height, 1]}
                        position={[-(length + width), height + basePosition, 0]}
                    />
                    {/* bottom */}
                    <CuboidCollider
                        args={[length, width, width]}
                        position={[0, basePosition, 0]}
                        restitution={0.2}
                        friction={0.4}
                    />
                    {/* top */}
                    <CuboidCollider
                        args={[length, width, width]}
                        position={[0, height * 2 + basePosition, 0]}
                    />
                </RigidBody>
            </Physics>
        </>
    )
}
