import Card from '../../components/Card'
import styles from './styles.module.scss'

export default function Projects() {
    return (
        <div className={styles.container}>
            <h2>Projetos</h2>
            <section>
                <Card/>
            </section>
        </div>
    )
}