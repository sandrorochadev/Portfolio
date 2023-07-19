import Typewriter from '../../components/Typewriter'
import Icons from '../../components/Icons'

export default function Home() {
    return (
        <div className={styles.container}>
                <main>
                    <Typewriter/>
                </main>
                <footer>
                    <a href="https://github.com/sandrorochadev" target="_blank">
                        Alessandro Rocha
                    </a>
                    <Icons/>
                </footer>
        </div>
    )
}