/* eslint-disable import/no-webpack-loader-syntax */
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const ShaderCanvas = (props) => {
    const meshRef = useRef()

    useFrame((_, delta) => {
        console.log(meshRef.current.material)
        if (meshRef.current.material.uniforms.uTime) {
            meshRef.current.material.uniforms.uTime.value += delta
        }
    })

    return (
        <mesh ref={meshRef} {...props}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial />
        </mesh>
    )
}

export default ShaderCanvas