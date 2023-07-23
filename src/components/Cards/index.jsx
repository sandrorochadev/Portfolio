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
        <section className='flex flex-col gap-6'>
            { repositoriesFilter.map(repository => {
                    return (
                        <div key={repository.id}>
                            <h2 className='text-lg font-semibold'>{repository.name}</h2>
                            <p className='font-light'>{repository.description}
                                <a className='mx-1' href={`${repository.homepage}`} target="_blank">Clique aqui</a>
                            </p>
                        </div>
                    )
                })
            }
        </section> 
)
}