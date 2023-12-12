"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";
import { dateTransform } from '@/lib/data';

import { useAudioPlayer } from '@/contexts/AudioPlayerContext';
import { useCallback, useRef } from 'react';

export default function SlideArchive(props: { archives: any; showCount: any; }) {

    const archives = props.archives;
    const showCount = props.showCount;

    const swiperRef = useRef<any>(null);

    const navigateToNextSlide = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    const navigateToPrevSlide = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const { playAudio } = useAudioPlayer();

    return (
        <div className='flex gap-2 items-center relative'>
            <button onClick={() => navigateToPrevSlide()} className='bg-slate-700 rounded-full p-2 absolute left-0 md:static z-10'>
                <Image src='/Images/SVG/arrow_left.svg' alt='prev' width={16} height={16} />
            </button>
            <div className='w-full md:w-[90%] aspect-[16/10] md:aspect-[32/10] lg:aspect-[48/10] grow'>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={showCount === 1 ? 0 : 8}
                    centeredSlides={showCount === 1 ? true : false}
                    slidesPerView={showCount}
                    speed={showCount === 1 ? 500 : 1000}
                    className="w-full h-full overflow-visible"
                >
                    {archives?.map((item: { attachment_name: string; id: number; thumbnail: string; title: string; created_at: string; }) => (
                        <SwiperSlide key={item.id}>
                            <div
                                onClick={() => playAudio(item.attachment_name)}
                                className="relative cursor-pointer w-full h-[90%]"
                            >
                                <Image
                                    src={"https://apiprod.khojgurbani.org/uploads/thumbnail/" + item.thumbnail}
                                    alt={item.title}
                                    fill
                                />
                            </div>
                            <div className="absolute bottom-0 w-full flex justify-between">
                                <div className="text-subtitle text-sm font-bold">{item.title}</div>
                                <div className="text-date text-xs font-bold">{dateTransform(item.created_at)}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button onClick={() => navigateToNextSlide()} className=' bg-slate-700 rounded-full p-2 absolute right-0 md:static z-10'>
                <Image src='/Images/SVG/arrow_right.svg' alt='right' width={16} height={16} />
            </button>
        </div>
    );
}