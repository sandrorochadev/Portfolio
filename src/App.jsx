import { Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import styles from './styles/main.scss';

export default function App() {
    return (
    <>
        <Header/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="projects" element={<Projects/>}/>
        </Routes>
    </>
    )
}