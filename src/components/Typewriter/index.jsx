import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Typewriter= () => {

  const {text} = useTypewriter({
    words: ['Olá, seja bem vindo!', 'Sou desenvolvedor web', 'Vamos trabalhar juntos ?'],
    loop: 5000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

  return (
    <div className='App'>
      <h2>{text}<Cursor /></h2>
    </div>
  )
}

export default Typewriter