import moon from '@/shared/assets/icons/moon.svg';
import sun from '@/shared/assets/icons/sun.svg';
import { useColorMode } from '@chakra-ui/react';



const ThemeButton = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <div className='cursor-pointer'>
      <img src={colorMode == 'dark' ? moon : sun} onClick={toggleColorMode} alt="change theme" />
    </div>
  )
}

export default ThemeButton