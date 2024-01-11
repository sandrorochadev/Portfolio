import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Typewriter= () => {
    const {text} = useTypewriter({
    words: [
    'Olá, me chamo Alessandro',
    'Sou desenvolvedor web',
    'Criei este site para me apresentar',
    'E compartilhar meus projetos',
    'Seja bem-vindo!',
    ],
    loop: 5000,
  });
    return <h1>{text}<Cursor /></h1>
}
export default Typewriter