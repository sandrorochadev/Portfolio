import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Typewriter= () => {
    const {text} = useTypewriter({
    words: ['Olá, seja bem vindo!', 'Sou desenvolvedor web', 'Vamos trabalhar juntos ?'],
    loop: 5000,
  });
    return <h1>{text}<Cursor /></h1>
}
export default Typewriter