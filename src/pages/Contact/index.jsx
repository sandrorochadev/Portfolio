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
                    <p>Desenvolvedor web com experiência na criação de sites utilizando as skills em: Javascript, React, NodeJS, Typescript e Tailwind. Graduado em Análise e Desenvolvimento de Sistemas, e cursando MBA em Projetos de Redes e Computação em Nuvem. Disponibilizo minha rede de contato, para esclarecimento de dúvidas ou assuntos relacionados a projetos e colaborações.</p>
                    {/* <p>Também disponibilizo uma sessão de links para download de ferramentas para desenvolvedores e entusiastas em tecnologia, além de artigos e vídeos, selecionados para aprimorar sua produtividade e experiência.</p> */}
                    <Buttons/>
                </section>
        </div>
    )
}