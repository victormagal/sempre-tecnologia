'use client';
import Image from 'next/image';
import styles from './styles.module.css';
import Container from '../Container';

export default function SegmentPartners({ data }) {
  return (
    <>
      <div className="block md:hidden">
        <Container newClasses="pb-12 lg:pb-24">
          <div className="col-span-4 lg:col-span-12">
            <div className="flex flex-col m-auto p-auto">
              <div
                id="parentBox"
                className={`flex overflow-x-scroll ${styles.hideScrollBar}`}
              >
                <div className="flex flex-nowrap items-center space-x-12">
                  {data.map((logo) => (
                    <div className="inline-block" key={logo?.attributes?.url}>
                      <div className="w-[100px]">
                        <Image
                          alt="Litoral"
                          height={logo?.attributes?.height}
                          src={logo?.attributes?.url}
                          width={logo?.attributes?.width}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="hidden md:block">
        <Container newClasses="pb-16">
          <ul className="col-span-4 lg:col-span-12 flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
            {data.map((logo) => (
              <li key={logo?.attributes?.url}>
                <Image
                  height={logo?.attributes?.height}
                  src={logo?.attributes?.url}
                  width={logo?.attributes?.width}
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}
