import './App.css'
import World from "./World.tsx";
import Hello from "./Hello.tsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Hello/>} />
                <Route path={"/world/:planet"} element={<World/>} />
                <Route path={"/*"} element={<Navigate to={"/"}/>} />
            </Routes>


            <ul>
                <li><Link to={"/"}>Zurück zur Startseite</Link></li>
                <li><Link to={"/world/Earth"}>Zur World-Seite</Link></li>
            </ul>
        </>
    )
}

export default App
