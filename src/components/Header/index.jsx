import { Outlet, Link } from "react-router-dom";
import styles from './styles.module.scss';

export default function Header() {
    return (
    <header>
        <nav>
            <Link to="/">Início</Link>
            <Link to="/contact">Sobre</Link>
            <Link to="/projects">Projetos</Link>
        </nav>
        <Outlet/>
    </header>
    );
  }