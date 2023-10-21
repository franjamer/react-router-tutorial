import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "./routes/componentes/NavBar"
import { HomeScreen } from './routes/HomeScreen'
import { AboutScreen } from './routes/AboutScreen'
import {ContactScreen} from './routes/ContactScreen'
import { LoginScreen } from "./routes/LoginScreen"
import {UsuarioProvider} from "../src/routes/context/UsuarioProvider"
export const App = () => {
    return (
        <UsuarioProvider>
        
            <NavBar></NavBar>
            
            <Routes>
                <Route path="/" element={<HomeScreen />}></Route>
                <Route path="/about" element={<AboutScreen />}></Route>
                <Route path="/contact" element={<ContactScreen />}></Route>
                <Route path="/" element={<Navigate to='/' />}></Route>
                <Route path="/login" element={<LoginScreen/>}></Route>
            </Routes>
        
        </UsuarioProvider>
    )
}

