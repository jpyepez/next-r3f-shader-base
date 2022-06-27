import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const ShaderPlane = (props) => {
    const meshRef = useRef()

    // update time
    // update resolution to handle resize
    useFrame((_, delta) => {
        meshRef.current.material.uniforms.uTime.value += delta
        meshRef.current.material.uniforms.uResolution.value.set(
            props.width,
            props.height
        )
    })

    return (
        <mesh ref={meshRef} {...props}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial />
        </mesh>
    )
}

export default ShaderPlane
