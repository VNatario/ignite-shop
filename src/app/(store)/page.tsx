import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main
      className="flex gap-12 w-full 
      max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[656px]"
    >
      <Link
        href=""
        className="bg-gradient-to-b from-gradient-green  to-gradient-purple rounded-lg p-1 relative flex items-center justify-center flex-col object-cover group overflow-hidden"
      >
        <Image
          className="h-[480px]"
          src="/shirt1.png"
          alt=""
          width={520}
          height={480}
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
