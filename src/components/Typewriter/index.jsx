import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Typewriter= () => {
    const {text} = useTypewriter({
    words: ['Seja bem vindo!', 'Vamos aprender juntos ?'],
    loop: 5000,
    delaySpeed: 5000,
  });
    return <h1 className='text-2xl font-bold'>{text}<Cursor /></h1>
}
export default Typewriter