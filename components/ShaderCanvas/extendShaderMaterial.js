import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

const extendShaderMaterial = ({
    materialName,
    uniforms,
    vertexShader,
    fragShader,
}) => {
    const ShaderMaterial = shaderMaterial(uniforms, vertexShader, fragShader)
    extend({ [materialName]: ShaderMaterial })
}

export default extendShaderMaterial
