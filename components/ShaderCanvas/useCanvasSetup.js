const useCanvasSetup = (width, height) => {
    const zoom = Math.min(width, height)
    const aspectRatio = width / height
    const scale = width > height ? [aspectRatio, 1] : [1, 1 / aspectRatio]
    return { width, height, scale, zoom, aspectRatio }
}

export default useCanvasSetup
