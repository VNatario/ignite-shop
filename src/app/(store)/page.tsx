import { Carousel } from '@/components/carousel'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

async function getProducts() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount as number) / 100,
    }
  })

  return products
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="flex w-full max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[656px] keen-slider">
      <Carousel products={products} />
    </main>
  )
}
