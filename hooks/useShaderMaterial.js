import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

// TODO: fix material name, keep an eye on caps
const useShaderMaterial = ({
    materialName,
    uniforms,
    vertexShader,
    fragShader,
}) => {
    const ShaderMaterial = shaderMaterial(uniforms, vertexShader, fragShader)
    extend({ [materialName]: ShaderMaterial })
}

export default useShaderMaterial
