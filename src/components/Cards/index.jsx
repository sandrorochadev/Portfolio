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
                        <div className='md:h-32 hover:bg-zinc-800 p-4 rounded flex flex-col justify-center' key={repository.id}>
                            <h2 className='text-lg md:text-2xl font-semibold'>{repository.name}</h2>
                            <p className='font-light md:text-lg md:mt-2'>{repository.description}
                                <a className='mx-1' href={`${repository.homepage}`} target="_blank">
                                    Clique aqui
                                </a>
                            </p>
                        </div>
                    )
                })
            }
        </section> 
)
}