import {FC, useState} from 'react'
import Link from 'next/link'
import { useDarkMode } from 'usehooks-ts'

import styles from './Menu.module.scss'
import cn from 'classnames'
import {useRouter} from 'next/router'

export const Menu: FC<{ items: Array<{ id: string, label: string, pathname: string }>}> = ({ items }) => {
  const router = useRouter()
  const { isDarkMode } = useDarkMode()

  console.log(router.pathname)

  return (
    <ul className={cn(styles.menu, isDarkMode && styles.dark)}>
      {items.map(({ id, label, pathname }) => (
        <li
          key={id}
          className={styles.menuItem}
        >
          <Link
            href={pathname}
            className={cn(styles.menuLink, router.pathname === pathname && styles.active)}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
