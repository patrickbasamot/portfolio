import { FaReact,FaAndroid,FaStackOverflow } from 'react-icons/fa';
import { SiFirebase,SiAntdesign, SiHtml5,SiCss3,SiJavascript, SiReact, SiRedux } from "react-icons/si";
import Link from 'next/link';
export default function Projects(){
  const project =[
    {
      'name': ` Capstone Project: A Disaster Risk Reduction, Safety Management and Emergency Response Mobile Application`,

      'title': 'SAVER',

      'description':'The SAVER Mobile Application was created to carry helpful and useful information on Disaster Risk management and calamity preparedness. It also promotes the safety precautionary measures to be done before, during and after a disaster.',
      
      'role':'Programmer',

      'tools': <><FaAndroid size={25} color={'#367E18'}/> <SiFirebase size={25} color={'#ffcb2b'}/></> 
    },
    {
      'name': ` `,

      'title': 'ASU Musyon Event App',

      'description':'A multi-platform software that enables students to search events and activities exclusive for all campuses of Aklan State University (ASU). Faculties of ASU can post events that aims to strenghten the community of learners and teachers. Students can bookmark events and receive notifications from the app. The goal of this software is to provide a platform to rapidly dissimiante event details to all students and teaching staffs of ASU.',
      'maneger': 'Roger Molas',

      'role':'Front-end Web Developer',
      

      'tools': <><SiReact size={25}/> <SiAntdesign size={25}/> <SiRedux size={25}/></> 
    }

  ]
    return(
        <div className="snap-center w-screen h-screen overflow-auto flex flex-col px-12 pt-10">
        <h1 className='text-lg text-#fffffe text-center md:text-left text-2xl'> <ins className='text-red-500'>&lt;</ins> Projects/Contribution  <ins className='text-red-500'>&gt;</ins>
      </h1>

      <ul className="grid grid-cols-1 gap-2 justify-items-center pt-6 md:grid-cols-2 gap-x-10 justify-items-center place-items-center ">
        {
            project.map((i)=>{ 
        return (
        <div>
          <h1 className='text-sm text-#fffffe md:text-base text-left'> <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">{i.title}</span></h1>
          <p className='text-sm pt-2 text-justify md:text-base'>{i.name} &nbsp; {i.description} </p>
          {/* <p className='text-sm pt-2 text-justify md:text-base'>ASU Project Manager: <Link href={'www.rogermolas.com'}><a className='underline'>{i.maneger}</a></Link></p> */}
          <p className='text-sm md:text-base'>Role: <span className='text-red-500'>{i.role}</span> </p>
          <li className='text-sm flex gap-2 items-center pt-1 md:text-base'>Tools used: {i.tools}</li>
        </div>
          
          )})
        }
        </ul>


        </div>
    )
}