import { useEffect, useState } from 'react'

export default function Cards() {
    const [ repositories, setRepositories ] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/sandrorochadev/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])
    const repositoriesFilter = repositories.filter(item => item.homepage !== null && item.homepage !== '' && item.name !== 'Portfolio')
    
    return (
        <section className='flex flex-col  gap-4'>
            { repositoriesFilter.map(repository => {
                    return (
                        <div key={repository.id}>
                            <h2>{repository.name}</h2>
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