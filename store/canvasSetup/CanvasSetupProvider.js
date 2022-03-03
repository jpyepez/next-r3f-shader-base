import { createContext } from 'react'
import useCanvasSetup from 'hooks/useCanvasSetup'

export const CanvasSetupContext = createContext()

const CanvasSetupProvider = ({ children }) => {
    const state = useCanvasSetup()

    return (
        <CanvasSetupContext.Provider value={state}>
            {children}
        </CanvasSetupContext.Provider>
    )
}

export default CanvasSetupProvider
