import { Carousel } from '@/components/carousel'

export default function Home() {
  return (
    <main className="flex w-full max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[656px] keen-slider">
      {/* server component */}
      <Carousel />
    </main>
  )
}
