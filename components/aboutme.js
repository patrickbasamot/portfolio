import { FaFacebookF,FaLinkedin } from 'react-icons/fa';
import { SiGithub,SiFrontendmentor } from 'react-icons/si';
import Link from 'next/link'
const contact =[
  {
      'name': 'Facebook',
      'icon': <FaFacebookF size={30}/>,
      'account': "@patrickbasamot",
      'url': 'facebook.com/patmegakill',
      'id': 1,
  },
  {
      'name': 'Github',
      'icon': <SiGithub size={30}/>,
      'account': "@patrickbasamot",
      'url': 'github.com/patrickbasamot',
      'id': 2,
  },
  {
      'name': 'LinkedIn',
      'icon': <FaLinkedin size={30}/>,
      'account': "@patrickbasamot",
      'url': 'https://www.linkedin.com/in/patrick-basamot-2874a3211/',
      'id': 3,
  },
  {
      'name': 'Frontend Mentor',
      'icon': <SiFrontendmentor size={30}/>,
      'account': "@patrickbasamot",
      'url': 'https://www.frontendmentor.io/profile/patrickbasamot',
      'id': 4,
  }
]
export default function Aboutme(){
  return(
  <div>
  <div className="snap-center w-screen h-screen flex flex-col px-12 pt-10">
    <figure >
      
      <img className="rounded-full h-22 w-22 mx-auto md:rounded-full h-32 w-32" src="/me.jpg" alt="" width="500" height="450"/>
      
      <ul className="flex justify-center gap-5 pt-4 md:justify-items-start ">
        {
        
            contact.map((i)=>{ return (<li key={i.id} >
            <Link href={i.url}>
            <a className='no-underline text-sm flex gap-2 justify-evenly md:justify-between'>{i.icon}</a>
            </Link>
            </li>)})
        }
        </ul>
     <figcaption>
      
      <h1 className='text-#fffffe text-center pt-4 text-lg md:text-2xl'> <ins className='text-red-500'>&lt;</ins> Patrick Morales Basamot  <ins className='text-red-500'>&gt;</ins>
      </h1>
     
      {/* <p className="text-xs mx-auto text-justify mt-3 text-#a7a9be md:text-base"> 
      <br/> <br/>
      <br/> <br/>   
      </p> */}

      <ul className='list-disc mt-3 text-sm text-justify md:text-base'>

        <li><p>I am looking for an <strong className='text-red-500'>entry/junior</strong> level position in <strong className='text-red-500'>Front-End Web Development</strong> that will further develop my skills and knowledge in Web Development specifically with ReactJS.</p></li>

        <li><p>Passionate about Web Developing and enjoy making them.</p></li>
        <li><p>Willing to be trained.</p></li>
        <li><p> I am an Information Technology Graduate in Aklan State University College of Industrial Technology Batch 2022 Major in Software Engineering.</p></li>

        <li><p>Check my resume <Link href={'https://rxresu.me/r/8Hv9an3R'}><a className='underline '>here</a></Link></p></li>
      </ul>
   
     </figcaption>
    </figure>
  </div>
  </div>
  )
}
