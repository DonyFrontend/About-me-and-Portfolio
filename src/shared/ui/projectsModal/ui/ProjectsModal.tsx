import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import React from 'react';
import { IProjectsModalType } from '../types/projects-type';
import { useC } from '@/shared/hooks/use-change-theme';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ProjectsModal: React.FC<IProjectsModalType> = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t, i18n } = useTranslation();
    const C = (a: string, b: string) => {
        return useC(a, b)
    }

    return (
        <>
            <button onClick={onOpen} className={`text-[17px] ${C('text-[#4B5563]', 'text-white')} transition-all font-semibold p-[9px]  px-4 ${C('bg-[#e5e7eb]', 'bg-violet-600')} ${C('hover:bg-[#d0d2d5]', 'hover:bg-violet-800')} ${C('active:bg-[#c2c4c7]', 'active:bg-violet-90 0')} rounded-[10px] `}>{t('show_more')}</button>

            <Modal scrollBehavior='inside' size={'4xl'} isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay backdropFilter='blur(7px)' />
                <ModalContent>
                    <ModalHeader>{data.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{ clickable: true }}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            className='z-0 mb-4'
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                        >
                            {data.images.map((item, index) => <SwiperSlide key={index}>
                                <img className='rounded-[12px]' src={item} alt="Error!" />
                            </SwiperSlide>)}
                        </Swiper>

                        <div className='flex flex-col gap-y-8'>
                            <p className={`text-[19px] ${C('text-[#4B5563]', 'text-[#dbd1db]')}`}>{i18n.language == 'ru' ? data.description.ru : data.description.en}</p>

                            <p className="text-[20px] font-medium">{t('used_tech')}</p>
                            <section className='w-[80%] grid grid-cols-4 gap-5 auto-rows-auto'>
                                {data.technologies.map((item, index) => <article className={`p-2 flex transition-all hover:-translate-y-4 justify-center ${C('bg-[#E5E7EB]', 'bg-[#374151]')} rounded-[12px]`} key={index}>
                                    {item}
                                </article>)}
                            </section>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <div className='flex w-full justify-between'>
                            <div className='flex gap-x-2'>
                                <a target='_blank' href={data.vercel_link} className={`text-[17px] text-white transition-all font-semibold p-[9px]  px-4 ${C('bg-gray-600', 'bg-violet-600')} ${C('hover:bg-gray-800', 'hover:bg-violet-800')} ${C('active:bg-gray-900', 'active:bg-violet-900')} rounded-[10px] `}>{t('open_site')}</a>
                                <a target='_blank' href={data.github_link} className={`text-[17px] px-5 ${C('text-[#4B5563]', 'text-white')} transition-all font-semibold p-[9px]  px-4 ${C('bg-[#e5e7eb]', 'bg-[#374151]')} ${C('hover:bg-[#d0d2d5]', 'hover:bg-[#333c4b]')} ${C('active:bg-[#c2c4c7]', 'active:bg-[#2a313e]')} rounded-[10px] `}>{t('open_github')}</a>
                            </div>
                            <button onClick={onClose} className={`text-[17px] px-5 ${C('text-[#4B5563]', 'text-white')} transition-all font-semibold p-[9px]  px-4 ${C('bg-[#e5e7eb]', 'bg-[#374151]')} ${C('hover:bg-[#d0d2d5]', 'hover:bg-[#333c4b]')} ${C('active:bg-[#c2c4c7]', 'active:bg-[#2a313e]')} rounded-[10px] `}>{t('exit')}</button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProjectsModal
