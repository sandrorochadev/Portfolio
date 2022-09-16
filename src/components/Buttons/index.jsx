import { FaGithub, FaLinkedin, FaRegEnvelope} from "react-icons/fa";
import styles from './styles.module.scss'

export default function Buttons() {
    return (
        <nav>
            <button className={styles.btnGithub}><FaGithub/><a href="https://github.com/sandrorochadev" target="_blank">Github</a></button>            
            <button className={styles.btnLinkedin}><FaLinkedin/><a href="https://www.linkedin.com/in/sandrorochadev" target="_blank">Linkedin</a></button>
            <button className={styles.btnEmail}><FaRegEnvelope/><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sandrorochadev@gmail.com" target="_blank">E-mail</a></button> 
        </nav>
    )
}