'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ProductCard } from '@/components/productCard'

const data = [
  {
    id: '01',
    image: '/shirt1.png',
    price: 79.9,
    title: 'Camiseta Beyond the Limits',
    link: '',
  },
  {
    id: '02',
    image: '/shirt2.png',
    price: 79.9,
    title: 'Camiseta Beyond the Limits',
    link: '',
  },
  {
    id: '03',
    image: '/shirt3.png',
    price: 79.9,
    title: 'Camiseta Beyond the Limits',
    link: '',
  },
  {
    id: '04',
    image: '/shirt4.png',
    price: 79.9,
    title: 'Camiseta Beyond the Limits',
    link: '',
  },
  {
    id: '05',
    image: '/shirt5.png',
    price: 79.9,
    title: 'Camiseta Beyond the Limits',
    link: '',
  },
]

export function Carousel() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <div ref={sliderRef} className="flex">
      {data.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            className="keen-slider__slide"
          />
        )
      })}
    </div>
  )
}
