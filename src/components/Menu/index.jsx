import { Link } from "react-router-dom";

function Menu() {
    return (
    <header className="container h-16 mx-auto flex items-center justify-center">
        <nav className="flex md:text-lg text-gray-500 font-light gap-4 md:gap-6">
            <Link to="/" className="hover:text-white">Sobre</Link>
            <Link to="/projects" className="hover:text-white">Projetos</Link>
            <Link to="/links" className="hover:text-white">Links</Link>
        </nav>
    </header>
    );
}

export default Menu