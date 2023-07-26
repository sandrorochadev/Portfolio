import { Link } from "react-router-dom";

function Menu() {
    return (
    <header className="container h-16 mx-auto flex items-center justify-center">
        <nav className="flex gap-4 md:gap-8 md:text-lg text-gray-500 font-light">
            <Link to="/">Sobre</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/links">Links</Link>
        </nav>
    </header>
    );
}

export default Menu