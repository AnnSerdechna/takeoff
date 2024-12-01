'use client';

import { FC, useState } from 'react'
import { useDarkMode } from 'usehooks-ts'
import cn from 'classnames'

import styles from './Card.module.scss'
import Image from 'next/image'
import {CardProps} from '@/types'

export const Card: FC<CardProps> = ({ price, productImage, imageAlt }) => {
  const [isLiked, setLiked] = useState(false)
  const { isDarkMode } = useDarkMode()

  return (
    <div className={cn(styles.card, isDarkMode && styles.dark)}>
      <svg
        className={cn(styles.heartIcon, isLiked && styles.heartIconLiked)}
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setLiked(!isLiked)}
      >
        <path
          d="M12.2929 3.95711L13 4.66421L13.7071 3.95711C14.8373 2.82693 16.6477 1.75 18.625 1.75C21.8092 1.75 24.5 4.36474 24.5 8.25C24.5 12.2382 22.3686 15.4307 19.7359 17.913C17.401 20.1145 14.771 21.6668 13.0891 22.6594C13.0591 22.6772 13.0294 22.6947 13 22.7121C12.9706 22.6947 12.9409 22.6772 12.9109 22.6594C11.229 21.6668 8.59901 20.1145 6.26414 17.913C3.63137 15.4307 1.5 12.2382 1.5 8.25C1.5 4.36931 4.23353 1.75 7.375 1.75C9.35228 1.75 11.1627 2.82693 12.2929 3.95711Z"
          fill="transparent"
          stroke="white"
          strokeWidth="1"
        />
      </svg>


      <img src={productImage} alt={imageAlt} />

      <h3 className={styles.price}>
        {`€ ${price}`}
      </h3>
    </div>
  )
}
