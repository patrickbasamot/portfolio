import { FaFacebookF,FaLinkedin } from 'react-icons/fa';
import { SiGithub,SiFrontendmentor } from 'react-icons/si';
import Link from 'next/link'
export default function Contacts(){

    const contact =[
    {
        'name': 'Facebook',
        'icon': <FaFacebookF size={20}/>,
        'account': "@patrickbasamot",
        'url': 'facebook.com/patmegakill',
        'id': 1,
    },
    {
        'name': 'Github',
        'icon': <SiGithub size={20}/>,
        'account': "@patrickbasamot",
        'url': 'github.com/patrickbasamot',
        'id': 2,
    },
    {
        'name': 'LinkedIn',
        'icon': <FaLinkedin size={20}/>,
        'account': "@patrickbasamot",
        'url': 'https://www.linkedin.com/in/patrick-basamot-2874a3211/',
        'id': 3,
    },
    {
        'name': 'Frontend Mentor',
        'icon': <SiFrontendmentor size={20}/>,
        'account': "@patrickbasamot",
        'url': 'https://www.frontendmentor.io/profile/patrickbasamot',
        'id': 4,
    }
]

    return(
        <div className="snap-center w-screen h-screen flex flex-col px-12 pt-10">
        <h1 className='text-lg text-#fffffe text-center md:text-left text-2xl'> <ins className='text-red-500'>&lt;</ins> Contacts <ins className='text-red-500'>&gt;</ins>
      </h1>

        </div>
    )
}