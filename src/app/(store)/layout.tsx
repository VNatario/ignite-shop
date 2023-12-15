import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function LayoutStore({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
