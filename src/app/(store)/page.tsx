'use client'
import Image from 'next/image'
import Link from 'next/link'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <main
      ref={sliderRef}
      className="flex  w-full 
      max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[656px] keen-slider"
    >
      <Link
        href=""
        className="bg-gradient-to-b from-gradient-green  to-gradient-purple rounded-lg relative flex items-center justify-center flex-col object-cover group overflow-hidden keen-slider__slide"
      >
        <Image
          className="h-[480px]"
          src="/shirt1.png"
          alt=""
          width={520}
          height={520}
          quality={100}
          priority
        />
        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black bg-opacity-60 p-8 translate-y-[110%] opacity-0 ease-in-out duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <strong className="text-xl">Camiseta Beyond the Limits </strong>
          <span className="font-bold text-2xl text-product-light">
            {(79.9).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </footer>
      </Link>
      <Link
        href=""
        className="bg-gradient-to-b from-gradient-green  to-gradient-purple rounded-lg p-1 relative flex items-center justify-center flex-col object-cover group overflow-hidden keen-slider__slide"
      >
        <Image
          className="h-[480px]"
          src="/shirt2.png"
          alt=""
          width={520}
          height={520}
          quality={100}
          priority
        />
        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black bg-opacity-60 p-8 translate-y-[110%] opacity-0 ease-in-out duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <strong className="text-xl">Camiseta Beyond the Limits </strong>
          <span className="font-bold text-2xl text-product-light">
            {(79.9).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </footer>
      </Link>
      <Link
        href=""
        className="bg-gradient-to-b from-gradient-green  to-gradient-purple rounded-lg p-1 relative flex items-center justify-center flex-col object-cover group overflow-hidden keen-slider__slide"
      >
        <Image
          className="h-[480px]"
          src="/shirt3.png"
          alt=""
          width={520}
          height={520}
          quality={100}
          priority
        />
        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black bg-opacity-60 p-8 translate-y-[110%] opacity-0 ease-in-out duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <strong className="text-xl">Camiseta Beyond the Limits </strong>
          <span className="font-bold text-2xl text-product-light">
            {(79.9).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </footer>
      </Link>
      <Link
        href=""
        className="bg-gradient-to-b from-gradient-green  to-gradient-purple rounded-lg p-1 relative flex items-center justify-center flex-col object-cover group overflow-hidden keen-slider__slide"
      >
        <Image
          className="h-[480px]"
          src="/shirt4.png"
          alt=""
          width={520}
          height={520}
          quality={100}
          priority
        />
        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black bg-opacity-60 p-8 translate-y-[110%] opacity-0 ease-in-out duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <strong className="text-xl">Camiseta Beyond the Limits </strong>
          <span className="font-bold text-2xl text-product-light">
            {(79.9).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </footer>
      </Link>
      <Link
        href=""
        className="bg-gradient-to-b from-gradient-green  to-gradient-purple rounded-lg p-1 relative flex items-center justify-center flex-col object-cover group overflow-hidden keen-slider__slide"
      >
        <Image
          className="h-[480px]"
          src="/shirt5.png"
          alt=""
          width={520}
          height={520}
          quality={100}
          priority
        />
        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black bg-opacity-60 p-8 translate-y-[110%] opacity-0 ease-in-out duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <strong className="text-xl">Camiseta Beyond the Limits </strong>
          <span className="font-bold text-2xl text-product-light">
            {(79.9).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </footer>
      </Link>
    </main>
  )
}
