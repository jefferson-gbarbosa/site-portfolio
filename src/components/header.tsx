import Perfil from '../assets/images/perfil.jpg'
import Background from '../assets/images/img-04.jpg'
import { Github, Linkedin } from 'lucide-react'


export default function Header(){
    return(
        <div className='relative min-h-screen w-full flex items-center justify-center overflow-hidden'>   
           <img src={Background} alt="" className="absolute inset-0 w-full h-full object-cover -z-10"/>
            <div className="absolute inset-0 bg-[#161713] opacity-80 -z-10" />
            <div>
                <div className="grid place-items-center">
                <div className="border-4 border-[#fbfefd] w-36 h-36 justify-self-center rounded-full grid place-items-center">
                    <div className="w-32 h-32 border flex items-end justify-center rounded-full overflow-hidden">
                        <img src={Perfil} alt='Perfil Image'/>
                    </div>
                </div>
                <h2 className="text-xl text-[#e1eeef] font-semibold">Jefferson Gonçalves</h2>
                <h3 className="text-base font-medium text-[#909493]">Estudante</h3>
                <ul className='flex gap-3 pt-4 '>
                    <a href="https://www.linkedin.com/in/jefferson-gbarbosa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className=' text-[#fbfefd] text-xl transform transition-transform duration-300 ease-in-out hover:scale-125'/>
                    </a>
                    <a href="https://github.com/jefferson-gbarbosa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className=' text-[#fbfefd] text-xl transform transition-transform duration-300 ease-in-out hover:scale-125'/>
                    </a>
                </ul>
            </div> 
            </div>
        </div>
    )
}