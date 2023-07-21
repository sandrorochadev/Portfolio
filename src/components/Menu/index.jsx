import { Link } from "react-router-dom";

function Menu() {
    return (
    <header className="container h-12 mx-auto flex items-center justify-center">
        <nav className="flex gap-4">
            <Link to="/">Sobre</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/links">Links</Link>
        </nav>
    </header>
    );
}

export default Menu