import { useC } from "@/shared/hooks/use-change-theme";
import ruleDark from '@/shared/assets/icons/rule_dark.svg';
import ruleLight from '@/shared/assets/icons/rule_light.svg';

const Footer = () => {
  return (
    <footer className={`w-full ${useC('bg-[#F9FAFB] border-t-[3px]', 'bg-[#111827]')} flex justify-center py-4`}>
      <div className="flex gap-x-2">
        <img src={useC(ruleLight, ruleDark)} alt="Rule" />
        <p>Abramov Samir | 2024</p>
      </div>
    </footer>
  )
}

export default Footer;