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
import { useControls } from 'leva'

import decalsVertexShader from '../shaders/decals/vertex.glsl'
import decalsFragmentShader from '../shaders/decals/fragment.glsl'
import {
    BallCollider,
    CuboidCollider,
    InstancedRigidBodies,
    Physics,
    RigidBody,
} from '@react-three/rapier'

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
    const length = 5
    const height = 15
    const width = 1
    const basePosition = -3

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

    const lemonsCount = 10
    const instances = useMemo(() => {
        const instances = []

        for (let i = 0; i < lemonsCount; i++) {
            instances.push({
                key: 'instance_' + i,
                position: [(Math.random() - 0.5) * length, 4 + i * 2, 0],
                rotation: [0, 0, 0],
            })
        }

        return instances
    }, [])

    /**
     * ANIMATIONS
     */
    useFrame((state, delta) => {
        // lemonRef.current.rotation.y += delta * 0.5
    })

    return (
        <>
            {isDebug && <axesHelper scale={20} />}
            {isDebug && <Perf position='top-left' />}
            {isDebug && <OrbitControls makeDefault />}

            <color args={[backgroundColor]} attach='background' />

            <directionalLight position={[1, 2, 3]} intensity={2.5} />
            <ambientLight intensity={0.5} />

            <Physics debug={isDebug} gravity={[0, -9.81, 0]}>
                {/* Lemon */}
                {instances.map(({ position, key }) => {
                    return (
                        <RigidBody
                            key={key}
                            colliders={false}
                            position={position}
                        >
                            {/* <CuboidCollider args={[0.5, 0.5, 0.5]} /> */}
                            {/* <InstancedRigidBodies instances={instances} colliders='ball'> */}
                            <BallCollider args={[1]} />
                            <mesh
                                //ref={lemonRef}
                                geometry={nodes.lemon.geometry}
                                material={materials.lemon}
                                scale={lemon_scale}
                                // rotation={[
                                //     lemon_rotation.x,
                                //     lemon_rotation.y,
                                //     lemon_rotation.z,
                                // ]}
                            >
                                {/* <instancedMesh
                        //ref={lemonRef}
                        args={[
                            nodes.lemon.geometry,
                            materials.lemon,
                            lemonsCount,
                        ]}
                        scale={lemon_scale}
                    > */}
                                <Decal
                                    // debug={isDebug}
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
                                    // debug={isDebug}
                                    map={skillTexture}
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
                        restitution={1}
                        friction={0.3}
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
