import {FC} from 'react'
import Link from 'next/link'
import {useDarkMode} from 'usehooks-ts'
import Image from 'next/image'

import LogoDarkMode from '@/assets/icons/logo-dark-mode.svg'
import LogoLightMode from '@/assets/icons/logo-light-mode.svg'

export const Logo: FC = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <Link href={'/'}>
      {isDarkMode
        ? <Image src={LogoDarkMode} alt={'Takeoff Logo'} />
        : <Image src={LogoLightMode} alt={'Takeoff Logo'} />
      }
    </Link>
  )
}
