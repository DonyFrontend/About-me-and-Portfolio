import './styles/App.css';
import { Header } from '../widgets/header';
import Home from '@/pages/home/ui/Home';

function App() {

  return (
    <>
      <Header />

      <div className='w-full flex justify-center mt-[200px]'>
        <Home />
      </div>
    </>
  )
}

export default App;