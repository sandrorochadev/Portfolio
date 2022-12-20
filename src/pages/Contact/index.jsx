import Icons from '../../components/Icons'
import Buttons from '../../components/Buttons'
import { TbMessageCircle } from "react-icons/tb";
import { FiCoffee } from "react-icons/fi";
import styles from './styles.module.scss'

export default function Contact() {
    return (
        <div className={styles.container}>
                <section>
                    <h2>Sobre mim<FiCoffee/></h2>
                    <p>Sou desenvolvedor web e possuo experiência na criação de sites utilizando a stack HTML, CSS e Javascript, com conhecimento em bibliotecas como o React. Além de novas tecnologias estudo bastante sobre experiência do usuário, acessibilidade e otimização para mecanismos de busca. Fique a vontade para enviar uma mensagem.</p>
                </section>
                <section>
                    <h2>Redes sociais<TbMessageCircle/></h2>
                    <Buttons/>
                </section>
        </div>
    )
}