import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'
import {
    Decal,
    OrbitControls,
    shaderMaterial,
    useGLTF,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { button, useControls } from 'leva'

import decalsVertexShader from '../shaders/decals/vertex.glsl'
import decalsFragmentShader from '../shaders/decals/fragment.glsl'
import {
    BallCollider,
    CapsuleCollider,
    CuboidCollider,
    InstancedRigidBodies,
    Physics,
    RigidBody,
} from '@react-three/rapier'

import { TECHSTACK } from '../../data'
import { MODELS } from '../../data'

const fruit = MODELS.LEMON

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

    const { fruit_rotation, fruit_scale } = useControls(fruit.name, {
        jumpButton: button(() => {
            console.log('jump', fruitRef.current)
            fruitRef.current.applyImpulse({ x: 0, y: 20, z: 0 })
        }),
        fruit_rotation: {
            value: { x: 0, y: 0, z: 0.2 },
            min: 0,
            max: Math.PI * 2,
            step: 0.1,
        },
        fruit_scale: {
            value: 30,
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

    /**
     * CONSTANTS
     */
    // invisible walls
    const length = 15
    const height = TECHSTACK.length * 3
    const width = 3
    const basePosition = 5

    // Loaders
    const loadingManager = new THREE.LoadingManager()
    const textureLoader = new THREE.TextureLoader(loadingManager)

    // Skill Texture
    const skillTexture = textureLoader.load('/skills/threejs.png')

    /**
     * FRUIT MODEL
     */
    const fruitRef = useRef()
    const { nodes, materials } = useGLTF(
        `/models/${fruit.name}/${fruit.name}.gltf`
    )
    fruit.nodes = nodes
    fruit.materials = materials
    // console.log(nodes)

    const fruitCount = TECHSTACK.length
    // const fruitCount = 1
    const instances = useMemo(() => {
        const instances = []

        for (let i = 0; i < fruitCount; i++) {
            instances.push({
                key: 'instance_' + i,
                position: [(Math.random() - 0.5) * length, 4 + i * 2, 0],
                rotation: [0, 0, 0],
                imageUrl: TECHSTACK[i].image,
            })
        }

        return instances
    }, [])

    /**
     * ANIMATIONS
     */
    useFrame((state, delta) => {
        // fruitRef.current.rotation.y += delta * 0.5
    })

    // const jump = () => {
    //     console.log('jump', fruitRef.current)
    //     fruitRef.current.applyImpulse({ x: 0, y: 10, z: 0 })
    // }

    return (
        <>
            {isDebug && <axesHelper scale={20} />}
            {isDebug && <Perf position='top-left' />}
            {isDebug && <OrbitControls makeDefault />}

            <color args={[backgroundColor]} attach='background' />

            <directionalLight position={[1, 2, 3]} intensity={2.5} />
            <ambientLight intensity={0.5} />

            <Physics debug={isDebug} gravity={[0, -9.81, 0]}>
                {/* Fruit */}
                {instances.map(({ position, imageUrl, key }) => {
                    return (
                        <RigidBody
                            key={key}
                            ref={fruitRef}
                            colliders={false}
                            position={position}
                        >
                            {/* <CuboidCollider
                                args={[0.5, 0.5, 0.5]}
                            /> */}
                            {/* <InstancedRigidBodies instances={instances} colliders='ball'> */}
                            {/* <BallCollider args={[1]} /> */}
                            <CapsuleCollider
                                args={[0.5, 1]}
                                restitution={0}
                                friction={10}
                            />
                            <mesh
                                geometry={fruit.nodes.lemon.geometry}
                                material={fruit.materials.lemon}
                                scale={fruit_scale}
                                // rotation={[
                                //     fruit_rotation.x,
                                //     fruit_rotation.y,
                                //     fruit_rotation.z,
                                // ]}
                            >
                                {/* <instancedMesh
                        //ref={fruitRef}
                        args={[
                            nodes.lemon.geometry,
                            materials.lemon,
                            fruitCount,
                        ]}
                        scale={fruit_scale}
                    > */}
                                <Decal
                                    // debug={isDebug}
                                    map={textureLoader.load(
                                        `/skills/${imageUrl}`
                                    )}
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
                                    // debug={isDebug}
                                    map={textureLoader.load(
                                        `/skills/${imageUrl}`
                                    )}
                                    scale={decals_scale}
                                    rotation={[
                                        -decals_rotation.x,
                                        Math.PI,
                                        -decals_rotation.z,
                                    ]}
                                    position={[
                                        -decals_position.x,
                                        -decals_position.y,
                                        -decals_position.z,
                                    ]}
                                />
                                {/* </instancedMesh> */}
                            </mesh>
                            {/* </InstancedRigidBodies> */}
                        </RigidBody>
                    )
                })}

                {/* Boundary */}

                {/* front */}
                <RigidBody
                    type='fixed'
                    restitution={0.1}
                    friction={10}
                    position={[0, height / 2 - basePosition, width]}
                >
                    <mesh>
                        <boxGeometry args={[length, height, width]} />
                        <meshBasicMaterial opacity={0} transparent />
                    </mesh>
                </RigidBody>

                {/* back */}
                <RigidBody
                    type='fixed'
                    restitution={0.1}
                    friction={10}
                    position={[0, height / 2 - basePosition, -width]}
                >
                    <mesh>
                        <boxGeometry args={[length, height, width]} />
                        <meshBasicMaterial
                            color='yellowgreen'
                            opacity={0}
                            transparent
                        />
                    </mesh>
                </RigidBody>

                {/* left */}
                <RigidBody
                    type='fixed'
                    position={[
                        -(length / 2 + width / 2),
                        height / 2 - basePosition,
                        0,
                    ]}
                >
                    <mesh>
                        <boxGeometry args={[width, height, width]} />
                        <meshBasicMaterial
                            color='blue'
                            opacity={0}
                            transparent
                        />
                    </mesh>
                </RigidBody>

                {/* right */}
                <RigidBody
                    type='fixed'
                    position={[
                        length / 2 + width / 2,
                        height / 2 - basePosition,
                        0,
                    ]}
                >
                    <mesh>
                        <boxGeometry args={[width, height, width]} />
                        <meshBasicMaterial
                            color='blue'
                            opacity={0}
                            transparent
                        />
                    </mesh>
                </RigidBody>

                {/* bottom */}
                <RigidBody
                    type='fixed'
                    restitution={0.1}
                    friction={10}
                    position={[0, -basePosition - width / 2, 0]}
                >
                    <mesh>
                        <boxGeometry args={[length, width, width]} />
                        <meshBasicMaterial
                            color='pink'
                            opacity={0}
                            transparent
                        />
                    </mesh>
                </RigidBody>

                {/* top */}
                <RigidBody
                    type='fixed'
                    restitution={0.1}
                    friction={10}
                    position={[0, height - width, 0]}
                >
                    <mesh>
                        <boxGeometry args={[length, width, width]} />
                        <meshBasicMaterial
                            color='pink'
                            opacity={0}
                            transparent
                        />
                    </mesh>
                </RigidBody>
            </Physics>
        </>
    )
}
