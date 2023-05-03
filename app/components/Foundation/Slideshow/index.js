/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getAllSlides } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useQuery(getAllSlides, {
    onCompleted: (data) => {
      const {
        slideshows: { data: slides }
      } = data;

      slides.map((slide) => {
        const {
          attributes: { banner_desktop, banner_mobile, link }
        } = slide;
        setSlides((prevState) => [
          ...prevState,
          {
            desktop: banner_desktop.data.attributes.url,
            mobile: banner_mobile.data.attributes.url,
            link: link
          }
        ]);
      });
    }
  });

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[600px] w-full m-auto relative group">
      <Link href={slides[currentIndex]?.link || ``}>
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex]?.desktop})`
          }}
          className="hidden lg:block w-full h-full bg-center bg-cover duration-500"
        ></div>
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex]?.mobile})`
          }}
          className="block lg:hidden w-full h-full bg-center bg-cover duration-500"
        ></div>
      </Link>
      <div className="hidden absolute container lg:flex justify-end left-0 mx-auto right-0 top-[50%] translate-y-[-50%] z-10">
        <ul className="mr-6">
          <li className="cursor-pointer mb-2">
            <Image
              alt="Voltar"
              height={47}
              onClick={prevSlide}
              quality={100}
              src="/icon-arrow-left.svg"
              width={47}
            />
          </li>
          <li className="cursor-pointer">
            <Image
              alt="Voltar"
              height={47}
              onClick={nextSlide}
              quality={100}
              src="/icon-arrow-right.svg"
              width={47}
            />
          </li>
        </ul>
      </div>
      <div className="absolute container flex left-0 mx-auto right-0 bottom-[5%]">
        <ul className="flex space-x-4">
          {slides.map((slide, slideIndex) => (
            <li
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer p-2 ${
                currentIndex === slideIndex && 'border-b border-b-white'
              }`}
            >
              <span
                className={`font-sans font-semibold text-white ${
                  currentIndex !== slideIndex && 'text-opacity-60'
                }`}
              >{`0${slideIndex + 1}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
