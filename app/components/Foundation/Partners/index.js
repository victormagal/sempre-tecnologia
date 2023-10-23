'use client';
import Image from 'next/image';
import styles from './styles.module.css';
import Container from '../Container';

export default function Partners() {
  return (
    <>
      <div className="block md:hidden">
        <Container newClasses="py-12 lg:py-24">
          <div className="col-span-4 lg:col-span-12">
            <div className="flex flex-col m-auto p-auto">
              <div
                id="parentBox"
                className={`flex overflow-x-scroll ${styles.hideScrollBar}`}
              >
                <div className="flex flex-nowrap items-center space-x-12">
                  <div className="inline-block">
                    <div className="w-[119px]">
                      <Image
                        alt="Litoral"
                        height={48}
                        src="/parceiros/litoral.png"
                        width={119}
                      />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-[99px]">
                      <Image
                        alt="SmartFit"
                        height={36}
                        src="/parceiros/smart-fit.png"
                        width={99}
                      />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-[139px]">
                      <Image
                        alt="Coco Bambu"
                        height={29}
                        src="/parceiros/coco-bambu.png"
                        width={139}
                      />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-[68px]">
                      <Image
                        alt="Sebrae"
                        height={37}
                        src="/parceiros/sebrae.png"
                        width={68}
                      />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-[65px]">
                      <Image
                        alt="Magic Color"
                        height={41}
                        src="/parceiros/magic-color.png"
                        width={65}
                      />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-[51px]">
                      <Image
                        alt="Valor Ambiental"
                        height={52}
                        src="/parceiros/valor-ambiental.png"
                        width={51}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="hidden md:block">
        <Container newClasses="py-16">
          <ul className="col-span-4 lg:col-span-12 flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
            <li>
              <Image
                alt="Litoral"
                height={48}
                src="/parceiros/litoral.png"
                width={119}
              />
            </li>
            <li>
              <Image
                alt="SmartFit"
                height={36}
                src="/parceiros/smart-fit.png"
                width={99}
              />
            </li>
            <li>
              <Image
                alt="Coco Bambu"
                height={29}
                src="/parceiros/coco-bambu.png"
                width={139}
              />
            </li>
            <li>
              <Image
                alt="Sebrae"
                height={37}
                src="/parceiros/sebrae.png"
                width={68}
              />
            </li>
            <li>
              <Image
                alt="Magic Color"
                height={41}
                src="/parceiros/magic-color.png"
                width={65}
              />
            </li>
            <li>
              <Image
                alt="Valor Ambiental"
                height={52}
                src="/parceiros/valor-ambiental.png"
                width={51}
              />
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}
