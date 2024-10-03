import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {
    InstancedRigidBodies,
    Physics,
    RigidBody,
    CuboidCollider,
} from '@react-three/rapier'
import * as THREE from 'three'

import { TECHSTACK } from '../../data'

export default function Experience() {
    const spheresCount = TECHSTACK.length

    // invisible walls
    const length = 5
    const height = 10

    const sphereRef = useRef()
    const spheresRef = useRef()

    const instances = useMemo(() => {
        const instances = []

        for (let i = 0; i < spheresCount; i++) {
            // const scale = TECHSTACK[i].level * 0.1
            const scale = 0.5

            instances.push({
                key: 'instance_' + i,
                position: [
                    (Math.random() - 0.5) * (length / 2),
                    2 + i + 0.2,
                    0,
                ],
                scale: [scale, scale, scale],
            })
        }

        console.log(instances)
        return instances
    }, [])

    useFrame((state, delta) => {})

    const sphereJump = () => {
        const force = Math.random() * 12 + 6
        console.log(force)
        sphereRef.current.applyImpulse({ x: 0, y: force, z: 0 })
    }

    return (
        <>
            <OrbitControls makeDefault />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={0.5} />

            <Physics debug={false} gravity={[0, -9.81, 0]}>
                {/* Sphere */}
                {/* <RigidBody
                    ref={sphereRef}
                    colliders='ball'
                    position={[-1.5, 6, 0]}
                >
                    <mesh scale={[0.5, 0.5, 0.5]} onClick={sphereJump}>
                        <sphereGeometry />
                        <meshStandardMaterial color='darkgrey' />
                    </mesh>
                    r
                </RigidBody> */}

                {/* Spheres */}
                <InstancedRigidBodies instances={instances} colliders='ball'>
                    <instancedMesh args={[null, null, spheresCount]}>
                        <sphereGeometry />
                        <meshStandardMaterial color='orange' />
                    </instancedMesh>
                </InstancedRigidBodies>

                {/* Floor */}
                <RigidBody type='fixed' restitution={0.2} friction={0.4}>
                    <mesh receiveShadow position-y={-3}>
                        <boxGeometry args={[length, 0.5, 1]} />
                        <meshStandardMaterial color='slategray' />
                    </mesh>
                </RigidBody>

                {/* Invisible Walls */}
                <RigidBody type='fixed'>
                    {/* front */}
                    <CuboidCollider
                        args={[length / 2, height, 0.5]}
                        position={[0, 1, 1]}
                    />
                    {/* back */}
                    <CuboidCollider
                        args={[length / 2, height, 0.5]}
                        position={[0, 1, -1]}
                    />
                    {/* right */}
                    <CuboidCollider
                        args={[0.5, height, 1]}
                        position={[length / 2 + 0.5, 1, 0]}
                    />
                    {/* left */}
                    <CuboidCollider
                        args={[0.5, height, 1]}
                        position={[-(length / 2 + 0.5), 1, 0]}
                    />
                    {/* top */}
                    {/* <CuboidCollider
                        args={[5, 0.5, 0.5]}
                        position={[0, 10, 0]}
                        restitution={1}
                        friction={0.4}
                    /> */}
                </RigidBody>
            </Physics>
        </>
    )
}
