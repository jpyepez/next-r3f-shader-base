import CanvasSetupProvider from 'store/canvasSetup/CanvasSetupProvider'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <CanvasSetupProvider>
            <Component {...pageProps} />
        </CanvasSetupProvider>
    )
}

export default MyApp
