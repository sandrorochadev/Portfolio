
import { BiLogoNodejs, BiLogoTypescript, BiLogoReact, BiLogoTailwindCss} from 'react-icons/bi'
import {RiJavascriptFill} from 'react-icons/ri'
import {SiNextdotjs} from 'react-icons/si'

function Icons() {
    return (
        <nav className='flex gap-2 mt-2 text-lg md:text-xl'>
            <RiJavascriptFill className='text-yellow-500'/>
            <BiLogoNodejs className='text-green-500'/>
            <BiLogoTypescript className='text-sky-500'/>
            <BiLogoReact className='text-emerald-500'/>
            <SiNextdotjs className="text-white"/>
            <BiLogoTailwindCss className='text-sky-500'/>
        </nav>
    );
}

export default Icons