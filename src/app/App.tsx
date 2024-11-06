import './styles/App.css';
import { Header } from '../widgets/header';
import Home from '@/pages/home/ui/Home';
import Skills from '@/pages/skills/ui/Skills';
import Experience from '@/pages/experience/ui/Experience';
import Projects from '@/pages/projects/ui/Projects';

function App() {
  const isChanged = localStorage.getItem('isChanged');
  if (isChanged !== 'true') {
    localStorage.setItem('isChanged', 'true')
    localStorage.setItem('chakra-ui-color-mode', 'dark')
  }

  return (
    <>
      <Header />

      <div className='mt-[75.2px]'>
        <Home />
        <Skills/>
        <Experience/>
        <Projects/>
      </div>
    </>
  )
}

export default App;