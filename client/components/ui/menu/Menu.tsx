'use client';

import { FC } from 'react'
import Link from 'next/link'
import { useDarkMode } from 'usehooks-ts'
import cn from 'classnames'
import { usePathname } from 'next/navigation';

import styles from './Menu.module.scss'

export const Menu: FC<{ items: Array<{ id: string, label: string, path: string }>}> = ({ items }) => {
  const pathname = usePathname();
  const { isDarkMode } = useDarkMode()


  return (
    <ul className={cn(styles.menu, isDarkMode && styles.dark)}>
      {items.map(({ id, label, path }) => (
        <li key={id}>
          <Link
            href={path}
            className={cn(styles.menuLink, pathname === path && styles.active)}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
