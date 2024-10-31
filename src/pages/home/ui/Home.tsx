import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks"
import { useEffect, useState } from "react";
import { homeDataTC } from "../service/home-data.service";
import { useTranslation } from "react-i18next";

const Home = () => {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const data = useAppSelector(state => state.home)
  const r = data.data;
  console.log(r);

  const [str, setStr] = useState('');

  useEffect(() => {
    dispatch(homeDataTC());
  }, [dispatch])

  const arr = ['Hello', 'HAHAHA', 'ajjajaja']
  for (let i = 0; i < arr.length; i++) {
      setStr(arr[i])
  }

  return (
    <div className={`w-[85%] flex justify-start gap-y-44`}>
      <main>
        <h1 className="font-bold text-[60px]">{i18n.language == 'ru' ? r[2].title.ru : r[2].title.en}</h1>
        <div>{str}</div>
      </main>
    </div>
  )
}

export default Home