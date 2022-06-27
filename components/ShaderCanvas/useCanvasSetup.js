import { useEffect, useState } from 'react'

const useCanvasSetup = (width, height) => {
    const [aspectRatio, setAspectRatio] = useState(1)
    const [scale, setScale] = useState(1)
    const [zoom, setZoom] = useState(1)

    useEffect(() => {
        setAspectRatio(width / height)
        setZoom(Math.min(width, height))
    }, [width, height])

    useEffect(() => {
        setScale(width > height ? [aspectRatio, 1] : [1, 1 / aspectRatio])
    }, [width, height, aspectRatio])

    return { width, height, scale, zoom, aspectRatio }
}

export default useCanvasSetup
