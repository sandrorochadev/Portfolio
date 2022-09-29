import Typewriter from '../../components/Typewriter'
import { HiCode } from "react-icons/hi"
import styles from './styles.module.scss';
import Icons from '../../components/Icons'

export default function Home() {
    return (
        <div className={styles.container}>
                <main>
                    <Typewriter/>
                </main>
                <footer>
                    <p>Alessandro Rocha</p>
                    <Icons/>
                </footer>
        </div>
    )
}