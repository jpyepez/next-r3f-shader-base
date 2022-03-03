import { useRef } from 'react'

const imageLink = document.createElement('a')

const useCapture = () => {
    const canvasRef = useRef(null)

    const capture = (filename = 'image.png') => {
        const dataURI = canvasRef.current.toDataURL('image/png')
        imageLink.download = filename
        imageLink.href = dataURI
        imageLink.click()
    }

    return { canvasRef, capture }
}

export default useCapture
