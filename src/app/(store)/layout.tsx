import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function LayoutStore({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen">
      <Header />
      {children}
    </div>
  )
}
