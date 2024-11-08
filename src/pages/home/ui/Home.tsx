import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks"
import { useEffect } from "react";
import { homeDataTC } from "../service/home-data.service";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import { useC } from "@/shared/hooks/use-change-theme";
import gpsIcon from '@/shared/assets/icons/gpsIcon.svg';
import gpsIconWhite from '@/shared/assets/icons/gpsIconWhite.svg';
import Loading from "@/pages/loading/ui/Loading";
import { useMediaQuery } from "@/shared/hooks/use-media";

const Home = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const data = useAppSelector(state => state.home)
  const r = data.data;
  const media = useMediaQuery("(max-width: 768px)")
  const mediaT = useMediaQuery("(max-width: 1024px)")
  console.log(r);
  console.log(media);


  const words: string[] = [t('samir'), t('developer'), t('programmer'), t('dony'), t('make_sites')]
  const theme = localStorage.getItem('chakra-ui-color-mode');
  const C = (a: string, b: string) => {
    return useC(a, b)
  }

  useEffect(() => {
    dispatch(homeDataTC());
  }, [dispatch])

  if (data.isLoading) {
    return <Loading />
  }

  return (
    <div id="home" className={`w-full flex justify-center ${C('bg-[white]', 'bg-[#030712]')} py-[180px] ${media && 'py-[70px]'}`}>
      <div className={`componentWidth flex justify-start`}>
        <main className="flex flex-col gap-y-9">
          <div className={`flex flex-col`}>
            <h1 className={`font-bold text-[60px] ${media && 'text-[29px] h-[100px]'} ${mediaT && 'h-[140px] mb-6'}`}>{i18n.language == 'ru' ? r[3].title.ru : r[3].title.en} <Typewriter words={words} typeSpeed={110} deleteSpeed={65} delaySpeed={1500} cursor cursorBlinking={false} loop={0} /></h1>
            <div className={`w-[55%] mt-8 ${mediaT && 'w-full'}`}>
              <p className={`text-[18px] ${C('text-black', 'text-gray-400')}`}>{i18n.language == 'ru' ? r[1].description.ru : r[1].description.en}</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-3">
            <div className="flex gap-x-2 items-center">
              <img src={theme == 'light' ? gpsIconWhite : gpsIcon} alt="" />
              <p className={`${C('text-[#4B5563]', 'text-white')}`}>{i18n.language == 'ru' ? r[0].gps.ru : r[0].gps.en}</p>
            </div>
            <div className="flex gap-x-2 p-1 items-center">
              <div className="flex">
                <span className={`w-[13px] h-[13px] rounded-full ${r[2].currentState == 0 ? 'bg-[#10B981]' : 'bg-red-600'}`}></span>
              </div>
              <p className={`${C('text-[#4B5563]', 'text-white')}`}>{i18n.language == 'ru' ? `${r[2].now.ru} ${r[2].currentState == 0 ? r[2].statets[0].ru : r[2].statets[1].ru}` : `${r[2].now.en} ${r[2].currentState == 0 ? r[2].statets[0].en : r[2].statets[1].en}`}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home