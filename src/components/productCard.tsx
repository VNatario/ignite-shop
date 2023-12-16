import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export interface Product {
  id: string
  image: string
  price: number
  title: string
  link: string
}

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={product.link}
      className={twMerge(
        'bg-gradient-to-b from-gradient-green  to-gradient-purple rounded-lg relative flex items-center justify-center flex-col object-cover group overflow-hidden',
        className
      )}
    >
      <Image
        className="h-[480px]"
        src={product.image}
        alt=""
        width={520}
        height={520}
        quality={100}
        priority
      />
      <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black bg-opacity-60 p-8 translate-y-[110%] opacity-0 ease-in-out duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <strong className="text-xl">{product.title}</strong>{' '}
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
}
