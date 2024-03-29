import styles from './styles.module.scss'
import { FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNodedotjs } from "react-icons/si";

export default function Icons() {
    return (
        <ul>
            <li className={styles.yellow}><SiJavascript/></li>
            <li className={styles.blue}><FaReact/></li>
            <li className={styles.green}><SiNodedotjs/></li>
            <li className={styles.blue}><SiTailwindcss/></li>
        </ul>
    );
}