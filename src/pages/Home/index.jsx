import Typewriter from '../../components/Typewriter'
import office from '../../assets/img/office.svg'
import { HiCode } from "react-icons/hi"
import styles from './styles.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <section>
                <h1>Alessandro Rocha<HiCode/></h1>
                <Typewriter/>
            </section>
            <section>
                <img src={office} alt="espaço de estudo"></img>
            </section>
        </div>
    )
}