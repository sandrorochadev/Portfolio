import { FaGithub, FaLinkedin, FaRegEnvelope} from "react-icons/fa";

export default function Buttons() {
    return (
        <nav className={styles.button}>
            <button><FaGithub/>
                <a href="https://github.com/sandrorochadev" target="_blank">Github</a>
            </button>            
            <button><FaLinkedin/>
                <a href="https://www.linkedin.com/in/sandrorochadev" target="_blank">Linkedin</a>
            </button>
            <button><FaRegEnvelope/>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sandrorochadev@gmail.com" target="_blank">E-mail</a>
            </button> 
        </nav>
    )
}