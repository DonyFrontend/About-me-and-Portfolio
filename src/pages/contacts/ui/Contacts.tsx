import { useC } from "@/shared/hooks/use-change-theme";
import { useAppDispatch } from "@/shared/hooks/useReduxHooks";
import Title from "@/shared/ui/pagesTitle/ui/Title";
import { Box, useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { addMessageTC } from "../model/service/add-message.service";

const Contacts = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const toast = useToast();
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [network, setNetwork] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [load, setLoad] = useState<boolean>(false);

    const C = (a: string, b: string) => {
        return useC(a, b);
    }

    const handleChangeMessage = (message: string, count: number) => {
        setMessage(message);
        setCount(count);
    }

    const toastFC = (str: string) => {
        toast({
            position: 'bottom-left',
            render: () => (
                <Box color='white' rounded={12} p={3} bg={C('blackAlpha.700', 'darkviolet')}>
                    <p className="text-[18px]">{str}</p>
                </Box>
            )
        })
    }
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (name == '' || email == '' || network == '' || message == '') {
           toastFC(t('check_data'))
        } else {
            setLoad(true);
            setEmail('');
            setName('');
            setNetwork('');
            setMessage('');
            dispatch(addMessageTC({
                email,
                message,
                name,
                network,
                toast: () => toastFC(t('sent_message')),
                load: setLoad
            }));
        }
    }

    return (
        <div id="contacts" className={`w-full flex ${useC('bg-white', 'bg-[#030712]')} justify-center py-20`}>
            <main className="componentWidth flex flex-col items-center gap-y-16">
                <Title description={t('contacts_desc')} title={t('contacts')} />

                <form className="w-[50%] " onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-y-6">
                        <div className={`flex flex-col gap-y-2 p-2`}>
                            <label className="text-[19px] font-semibold" htmlFor="name">{t('name')}</label>
                            <input maxLength={25} value={name} onChange={(e) => setName(e.target.value)} className={`border-b-[2px] p-1 ${useC('border-b-black', 'border-b-[#8b5cf6]')} ${useC('bg-white', 'bg-[#030712]')}`} id="name"  type="text" />
                        </div>
                        <div className={`flex flex-col gap-y-2 p-2`}>
                            <label className="text-[19px] font-semibold" htmlFor="email">{t('email')}</label>
                            <input maxLength={100} value={email} onChange={(e) => setEmail(e.target.value)} className={`border-b-[2px] p-1 ${useC('border-b-black', 'border-b-[#8b5cf6]')} ${useC('bg-white', 'bg-[#030712]')}`} id="email" type="email" />
                        </div>
                        <div className={`flex flex-col gap-y-2 p-2`}>
                            <label className="text-[19px] font-semibold" htmlFor="network">{t('network')}</label>
                            <input maxLength={50} value={network} onChange={(e) => setNetwork(e.target.value)} minLength={1} className={`border-b-[2px] p-1 ${useC('border-b-black', 'border-b-[#8b5cf6]')} ${useC('bg-white', 'bg-[#030712]')}`} id="network" type="text" />
                        </div>
                        <div className={`flex flex-col gap-y-2 p-2`}>
                            <label className="text-[19px] font-semibold" htmlFor="message">{t('message')}</label>
                            <textarea value={message} onChange={e => handleChangeMessage(e.target.value, e.target.value.length)} className={`border-b-[2px] min-h-[150px] p-1 ${useC('border-b-black', 'border-b-[#8b5cf6]')} ${useC('bg-white', 'bg-[#030712]')}`} maxLength={1000} id="message" />
                            <span>{count}/1000</span>
                        </div>
                    </div>

                    <button type="submit" className={`text-[17px] mt-4 text-white transition-all font-semibold p-[9px]  px-4 ${useC('bg-gray-600', 'bg-violet-600')} ${useC('hover:bg-gray-800', 'hover:bg-violet-800')} ${useC('active:bg-gray-900', 'active:bg-violet-900')} rounded-[10px] `}> {load ? <div className="px-[31px]"><div className={`animate-spin rounded-full border-white border-y-transparent border-[3px] p-[10px]`}></div></div> :  t('send')}</button>
                </form>
            </main>
        </div>
    )
}

export default Contacts;