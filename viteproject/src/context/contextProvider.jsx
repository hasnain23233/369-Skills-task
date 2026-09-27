import {useState} from "react"
import CreateContext from "./createContext"

const ContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const login = () => {
        setIsAuthenticated(true)
    }

    const logout = () => {
        setIsAuthenticated(false)
    }
    return (
        <CreateContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout }}>
            {children}
        </CreateContext.Provider>
    )
}

export default ContextProvider