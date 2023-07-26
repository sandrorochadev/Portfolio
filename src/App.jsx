
import { Routes, Route} from "react-router-dom";
import './index.css'
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import Footer from "./components/Footer";

function App() {
    return (
    <>
        <Menu/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="links" element={<Links/>}/>
        </Routes>
        <Footer/>
    </>
    )
}

export default App