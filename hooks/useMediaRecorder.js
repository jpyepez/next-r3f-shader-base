import { useRef } from 'react'

let videoStream, mediaRecorder
let chunks = []

const useMediaRecorder = () => {
    const canvasRef = useRef(null)

    const init = (fps = 30) => {
        videoStream = canvasRef.current.captureStream(fps)
        mediaRecorder = new MediaRecorder(videoStream, {
            mimeType: 'video/webm; codecs=vp9',
        })

        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data)
        }

        mediaRecorder.onstop = function (e) {
            var blob = new Blob(chunks, { type: 'video/webm' }) // other types are available such as 'video/webm' for instance, see the doc for more info
            chunks = []
            var videoURL = URL.createObjectURL(blob)

            const a = document.createElement('a')
            document.body.appendChild(a)
            a.href = videoURL
            a.download = 'test.webm'
            a.click()
            window.URL.revokeObjectURL(videoURL)
            document.body.removeChild(a)
        }
    }

    const start = () => {
        mediaRecorder?.start()
    }

    const stop = () => {
        if (mediaRecorder.state === 'recording') mediaRecorder?.stop()
    }

    return { canvasRef, init, start, stop }
}

export default useMediaRecorder
