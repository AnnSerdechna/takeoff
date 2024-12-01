'use client';

import { FC, useState } from 'react'
import cn from 'classnames'
import { useDarkMode } from 'usehooks-ts'

import styles from './SearchBar.module.scss'
import {SearchIcon} from '@/components/header/components/icons/Icon'

export const SearchBar: FC = () => {
  const [isVisibleInput, setVisibleInput] = useState(false)
  const { isDarkMode } = useDarkMode()

  return (
    <div 
      className={cn(
        styles.search, 
        isDarkMode && styles.dark, 
        isVisibleInput && styles.visible
        )}
      >
      <SearchIcon
        className={styles.searchIcon}
        onClick={() => setVisibleInput(!isVisibleInput)}
      />
      <input className={styles.input} autoFocus={isVisibleInput} />
    </div>
  )
}
