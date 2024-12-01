'use client';

import { FC } from 'react'
import Link from 'next/link'
import { useDarkMode } from 'usehooks-ts'
import Image from 'next/image'

import LogoDarkMode from '@/public/icons/logo-dark-mode.svg'
import LogoLightMode from '@/public/icons/logo-light-mode.svg'

export const Logo: FC = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <Link href={'/'}>
      {isDarkMode
        ? <Image src={LogoDarkMode.src} alt={'Takeoff Logo'} width={283} height={65} />
        : <Image src={LogoLightMode.src} alt={'Takeoff Logo'} width={283} height={65}  />
      }
    </Link>
  )
}
