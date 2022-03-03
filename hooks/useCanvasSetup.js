const useCanvasSetup = (
    { width: canvasWidth, height: canvasHeight } = { width: 1280, height: 720 }
) => {
    const cameraZoom = Math.min(canvasWidth, canvasHeight)
    const aspectRatio = canvasWidth / canvasHeight
    const canvasScale =
        canvasWidth > canvasHeight ? [aspectRatio, 1] : [1, 1 / aspectRatio]

    return { canvasWidth, canvasHeight, canvasScale, cameraZoom, aspectRatio }
}

export default useCanvasSetup
