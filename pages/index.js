import Head from 'next/head'
import Container from '../components/container'
import Aboutme from '../components/aboutme'
import Tools from '../components/skillstools'
import Projects from '../components/projects'
import Notes from '../components/contact'

function Beta(){
  <dialog>This is just a simple concept.</dialog>
}
export default function Home() {
  return (
    <Container>
      <Head>
         <title>Trickster</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Beta/>
      <Aboutme/>
      <Tools/>
      <Projects/>
      <Notes/>
    </Container>
  )
}
