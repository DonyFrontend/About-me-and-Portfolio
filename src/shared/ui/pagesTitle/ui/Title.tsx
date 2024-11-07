import { useC } from "@/shared/hooks/use-change-theme"
import { ITitleTypes } from "../types/title-types";

const Title: React.FC<ITitleTypes> = ({ description, title }) => {

  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      <div className={`p-1 px-3 rounded-[12px] ${useC('bg-[#E5E7EB]', 'bg-[#374151]')}`}><h1 className={`text-[19px] ${useC('text-[#4B5563]', 'text-[#D1D5DB]')}`}>{title}</h1></div>
      <p className={`text-[17px] ${useC('text-[#4B5563]', 'text-white')}`}>{description}</p>
    </div>
  )
}

export default Title
