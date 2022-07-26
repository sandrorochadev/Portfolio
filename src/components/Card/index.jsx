import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export default function Card() {
    const [ repositories, setRepositories ] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/sandrorochadev/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    const repositoriesFilter = repositories.filter(item => item.homepage !== null && item.homepage !== '' && item.name !== 'Portfolio')

    return (
        <>
            { repositoriesFilter.map(repository => {
                    return (
                        <div key={repository.id} className={styles.cardContainer}>
                            <h4>{repository.name}</h4>
                            <p>{repository.description}</p>
                            <button><a href={`${repository.homepage}`}>clique aqui</a></button>
                        </div>
                    )
                })
            }
        </>
    )
}