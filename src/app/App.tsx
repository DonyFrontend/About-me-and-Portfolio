import './styles/App.css';
import { Header } from '../widgets/header';
import Home from '@/pages/home/ui/Home';

function App() {

  return (
    <>
      <Header />

      <div className='mt-[75.2px]'>
        <Home />
      </div>
    </>
  )
}

export default App;