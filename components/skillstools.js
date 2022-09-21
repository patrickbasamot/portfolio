import { FaReact,FaAndroid,FaStackOverflow } from 'react-icons/fa';
import { SiFirebase,SiAntdesign, SiHtml5,SiCss3,SiJavascript } from "react-icons/si";
import { Tooltip, Button } from "@material-tailwind/react";

export default function Skills(){
    const tools =[
    {
        'name': 'ReactJS',
        'icon': <FaReact size={30}/>,
        'description': '',
        'id': 1,
    },
    {
        'name': 'Android Studio',
        'icon': <FaAndroid color='#367E18' size={30}/>,
        'id':2,
   },
   {
        'name': 'Firebase',
        'icon': <SiFirebase color='#E6B325' size={30}/>,
        'id': 3 ,
   },

   {
        'name': 'Antd',
        'icon': <SiAntdesign size={30}/>,
        'id': 4,
    },

    {
        'name': 'HTML5',
        'icon': <SiHtml5 size={30}/>,
        'id': 5,
     },

     {
        'name': 'CSS3',
        'icon': <SiCss3 size={30}/>,
        'id': 6,
     },

     {
        'name': 'Javascript',
        'icon': <SiJavascript size={30}/>,
        'id': 7,
     },

     {
        'name': 'StackOverflow',
        'icon': <FaStackOverflow size={30}/>,
        'id': 8,
     },
   
]
    return(
    <div className="snap-center w-screen h-screen flex flex-col px-12 pt-8 md:pt-12">
            <h1 className='text-#fffffe text-lg text-center md:text-left text-2xl'> <ins className='text-red-500'>&lt;</ins> Skills and Tools  <ins className='text-red-500'>&gt;</ins>
            </h1>
            <p className='text-xs pt-3 md:text-base'>Tools I have used <strong className='text-red-500'>before </strong>:</p>
        <ul className="grid grid-cols-4 gap-3 pt-2 justify-items-center lg:flex pt-6 ">
        {
            tools.map((i)=>{ return(  <Tooltip key={i.id} content={i.name}>
            <Button variant="gradient">{i.icon}</Button>
          </Tooltip>)})
        }
        </ul>
        <div className='flex items-center pt-6 md:justify-start'>
            <p className='text-xs md:text-base'>Little knowledge about <strong className='text-red-500'>Redux</strong>. </p>
        </div>
        <div className='flex items-center justify-center pt-3 md:justify-start'>
            <p className='text-xs md:text-base'>Knowledgeable about <strong className='text-red-500'>GNU/Linux</strong>   
            &nbsp; especially Ubuntu and EndeavourOS which is a Debian and Arch based Linux Distributions.
            </p> 
           
        </div>

        <div className='flex pt-3 md:justify-start'>
        <p className='text-xs md:text-base'> Knowledgeable about <strong className='text-red-500'>C++</strong>  which was my First Programming Language way back my first college years.</p>
        </div>
    </div>
    )
}