import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export default function Cards() {
    const [ repositories, setRepositories ] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/sandrorochadev/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])
    const repositoriesFilter = repositories.filter(item => item.homepage !== null && item.homepage !== '' && item.name !== 'Portfolio')
    
    return (
        <section>
            { repositoriesFilter.map(repository => {
                    return (
                        <div key={repository.id} className={styles.cardContainer}>
                            <h3>{repository.name}</h3>
                            <p>{repository.description}</p>
                            <button>
                                <a href={`${repository.homepage}`} target="_blank">clique aqui</a>
                            </button>
                        </div>
                    )
                })
            }
        </section> 
)
}