import Image from 'next/image'

import logo from '@/assets/logo.svg'

export function Header() {
  return (
    <header className="py-8 w-full max-w-[1180px] mx-auto">
      <Image src={logo} width={130} height={52} quality={70} alt="" priority />
    </header>
  )
}
