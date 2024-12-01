import {FC} from 'react'
import { useDarkMode } from 'usehooks-ts'
import cn from 'classnames'

import {TitleProps} from '@/types'
import styles from './Title.module.scss'

export const Title: FC<TitleProps> = ({ title, size, className }) => {
  const { isDarkMode } = useDarkMode()

  return (
    <h1 className={cn(styles.title, size === 'md' && styles.md, isDarkMode && styles.dark, className)}>
      {title}
    </h1>
  )
}
