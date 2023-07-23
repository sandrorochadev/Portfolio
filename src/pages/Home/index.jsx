import Icons from "../../components/Icons"

function Home() {
    return (
        <div className="container w-72 md:w-2/4 mx-auto mt-8 flex flex-col gap-2">
            <div className="text-2xl font-bold">
                <h1>Alessandro Rocha</h1>
                <h1>Software Developer</h1>
                <Icons/>
            </div>
            <div className="container font-light">
                <p>Sou desenvolvedor web, focado em criar soluções inovadoras e intuitivas. Está página nasceu do objetivo de compartilhar minha experiência e todo conhecimento obtido, através de projetos realizados com tecnologias modernas e frameworks avançados.</p>
                <p>Na minha trajetória desenvolvi principalmente habilidades em Javascript, Node, React e outras tecnologias essenciais para a criação de aplicações e websites. Atualmente me dedico bastante em aprender sobre a área de DevOps.</p>
                <p>Também disponibilizo nesta página uma sessão de links para download de ferramentas para desenvolvedores e entusiastas em tecnologia, além de artigos e vídeos, selecionados para aprimorar sua produtividade e experiência.</p>
            </div>
        </div>
    )
}

export default Home