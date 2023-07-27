import Icons from '../../components/Icons'
import Buttons from '../../components/Buttons'
import { TbMessageCircle } from "react-icons/tb";
import { FiCoffee } from "react-icons/fi";
import styles from './styles.module.scss'

export default function Contact() {
    return (
        <div className={styles.container}>
                <section>
                    <h2>Alessandro Rocha</h2>
                    <h2>Sobre mim<FiCoffee/></h2>
                    <p>Sou desenvolvedor web, focado em criar soluções inovadoras e intuitivas. Esta página nasceu do objetivo de compartilhar minha experiência e todo conhecimento obtido, através de projetos realizados com tecnologias modernas e frameworks avançados. Na minha trajetória desenvolvi principalmente habilidades em Javascript, Node, React e outras tecnologias essenciais para a criação de aplicações e websites. Atualmente me dedico bastante em aprender sobre a área de DevOps.</p>
                    <p>Também disponibilizo nesta página uma sessão de links para download de ferramentas para desenvolvedores e entusiastas em tecnologia, além de artigos e vídeos, selecionados para aprimorar sua produtividade e experiência.</p>
                    <Buttons/>
                </section>
        </div>
    )
}