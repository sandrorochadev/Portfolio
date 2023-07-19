import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
    <header>
        <nav>
            <Link to="/">Início</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/contact">Contato</Link>
        </nav>
        <Outlet/>
    </header>
    );
  }