import styles from './styles.module.scss'
import { FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript, SiNodedotjs } from "react-icons/si";

export default function Icons() {
    return (
        <ul>
            <li className={styles.orange}><FaHtml5/></li>
            <li className={styles.blue}><FaCss3Alt/></li>
            <li className={styles.yellow}><SiJavascript/></li>
            <li className={styles.lightblue}><SiTailwindcss/></li>
            <li className={styles.pink}><FaSass/></li>
            <li className={styles.green}><SiNodedotjs/></li>
            <li className={styles.lightblue}><FaReact/></li>
            <li className={styles.blue}><SiTypescript/></li>
        </ul>
    );
}