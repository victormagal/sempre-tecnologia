'use client';
import Image from 'next/image';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function Slideshow() {
  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return (
      <button onClick={() => swiper.slidePrev()} type="button">
        {children}
      </button>
    );
  };

  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return (
      <button onClick={() => swiper.slideNext()} type="button">
        {children}
      </button>
    );
  };

  return (
    <>
      <Swiper
        autoplay={{ delay: 10000 }}
        className="w-full"
        effect={'fade'}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation]}
      >
        <SwiperSlide>
          <img alt="Sempre tecnologia" src="/slide-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="Sempre tecnologia" src="/slide-2.jpg" />
        </SwiperSlide>
        <div className="absolute container flex justify-end left-0 mx-auto right-0 top-60 z-10">
          <ul className="mr-6">
            <li>
              <SwiperButtonPrev>
                <Image
                  alt="Voltar"
                  height={47}
                  quality={100}
                  src="/icon-arrow-left.svg"
                  width={47}
                />
              </SwiperButtonPrev>
            </li>
            <li>
              <SwiperButtonNext>
                <Image
                  alt="Voltar"
                  height={47}
                  quality={100}
                  src="/icon-arrow-right.svg"
                  width={47}
                />
              </SwiperButtonNext>
            </li>
          </ul>
        </div>
      </Swiper>
    </>
  );
}
