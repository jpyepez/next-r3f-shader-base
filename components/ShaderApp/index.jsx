import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import ShaderPlane from './ShaderPlane'
import extendShaderMaterial from './extendShaderMaterial'
import vertexShader from 'public/shaders/vertexShader.vert'
import { Vector2 } from 'three'
import styles from './ShaderCanvas.module.css'
import useCanvasSetup from './useCanvasSetup'

// TODO: add resize observer
const ShaderCanvas = ({ shaderFile, uniforms = {} }) => {
    const [loaded, setLoaded] = useState(false)
    const containerRef = useRef()
    const width = containerRef.current?.offsetWidth
    const height = containerRef.current?.offsetHeight
    const { zoom, scale } = useCanvasSetup(width, height)

    useEffect(() => {
        const loadShader = async () => {
            const src = await import(`public/shaders/${shaderFile}`)
            const fragShader = src.default

            extendShaderMaterial({
                materialName: 'ShaderMaterial',
                uniforms: {
                    uTime: 0,
                    uResolution: new Vector2(width, height),
                    ...uniforms,
                },
                vertexShader,
                fragShader,
            })
        }
        loadShader()
        setLoaded(true)
    }, [shaderFile, uniforms, width, height])

    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1

    return (
        <div ref={containerRef} className={styles.canvasContainer}>
            <Canvas
                orthographic
                dpr={dpr}
                camera={{ position: [0, 0, 5], zoom: zoom }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Suspense fallback={null}>
                    {loaded && <ShaderPlane scale={scale} />}
                </Suspense>
            </Canvas>
        </div>
    )
}

export default ShaderCanvas
