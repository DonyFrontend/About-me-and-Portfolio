import moon from '@/shared/assets/icons/moon.svg';
import sun from '@/shared/assets/icons/sun.svg';
import { useState } from 'react';


const ThemeButton = () => {
  const [theme, setTheme] = useState(moon);

  function onHandleChangeTheme() {
    if (theme == moon) {
        setTheme(sun)
    } else setTheme(moon);
  }

  return (
    <div className='cursor-pointer'>
      <img src={theme} onClick={onHandleChangeTheme} alt="change theme" />
    </div>
  )
}

export default ThemeButton