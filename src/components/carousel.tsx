'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'

interface CarouselProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export function Carousel({ products }: CarouselProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <div ref={sliderRef} className="flex">
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            href=""
            className="bg-gradient-to-b from-gradient-green  to-gradient-purple rounded-lg relative flex items-center justify-center flex-col object-cover group overflow-hidden keen-slider__slide"
          >
            <Image
              className="h-[480px]"
              src={product.imageUrl}
              alt=""
              width={520}
              height={480}
              quality={100}
              priority
            />
            <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black bg-opacity-60 p-8 translate-y-[110%] opacity-0 ease-in-out duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <strong className="text-xl">{product.name}</strong>{' '}
              <span className="font-bold text-2xl text-product-light">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </footer>
          </Link>
        )
      })}
    </div>
  )
}
