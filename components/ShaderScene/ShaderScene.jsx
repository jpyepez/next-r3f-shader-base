import { Suspense } from 'react'
import ShaderCanvas from './ShaderCanvas'

const ShaderScene = ({ scale }) => {
    return (
        <Suspense fallback={null}>
            <ShaderCanvas scale={scale} />
        </Suspense>
    )
}

export default ShaderScene
