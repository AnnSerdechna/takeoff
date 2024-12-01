import {FC} from 'react'

import {Menu} from '@/components/ui'
import styles from './HeaderMenu.module.scss'

const items: Array<{ id: string, label: string, path: string }> = [
  {
    id: '1',
    label: 'Women',
    path: '/women',
  },
  {
    id: '2',
    label: 'Men',
    path: '/men',
  },
  {
    id: '3',
    label: 'Kids',
    path: '/kids',
  },
]

export const HeaderMenu: FC = () => (
  <nav className={styles.nav}>
    <Menu items={items} />
  </nav>
)
