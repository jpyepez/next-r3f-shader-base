const useCanvasSetup = ({ width, height } = { width: 1280, height: 720 }) => {
    const cameraZoom = Math.min(width, height)
    const aspectRatio = width / height
    const canvasScale = width > height ? [aspectRatio, 1] : [1, 1 / aspectRatio]

    return { width, height, canvasScale, cameraZoom, aspectRatio }
}

export default useCanvasSetup
