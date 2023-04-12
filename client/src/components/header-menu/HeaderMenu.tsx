import {FC} from 'react'

import {Menu} from '@/components/ui/menu/Menu'
import styles from './HeaderMenu.module.scss'

const items: Array<{ id: string, label: string, pathname: string }> = [
  {
    id: '1',
    label: 'Women',
    pathname: '/women',
  },
  {
    id: '2',
    label: 'Men',
    pathname: '/men',
  },
  {
    id: '3',
    label: 'Kids',
    pathname: '/kids',
  },
]

export const HeaderMenu: FC = () => (
  <nav className={styles.nav}>
    <Menu items={items} />
  </nav>
)
