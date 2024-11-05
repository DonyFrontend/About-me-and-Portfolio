import './styles/App.css';
import { Header } from '../widgets/header';
import Home from '@/pages/home/ui/Home';
import Skills from '@/pages/skills/ui/Skills';
import Experience from '@/pages/experience/ui/Experience';

function App() {

  return (
    <>
      <Header />

      <div className='mt-[75.2px]'>
        <Home />
        <Skills/>
        <Experience/>
      </div>
    </>
  )
}

export default App;