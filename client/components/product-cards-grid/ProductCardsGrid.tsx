'use client';

import { FC } from 'react'

import styles from './ProductCardsGrid.module.scss'
import {ProductCard} from '@/components/product-card/ProductCard'
import Img from '@/public/images/cardImg.png'

export const ProductCardsGrid: FC = () => (
  <div className={styles.grid}>
    <ProductCard
      price={140}
      productImage={Img.src}
      imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      btnText={'Buy'}
      productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
    />
    <ProductCard
      price={140}
      productImage={Img.src}
      imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      btnText={'Buy'}
      productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
    />
    <ProductCard
      price={140}
      productImage={Img.src}
      imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      btnText={'Buy'}
      productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
    />
    <ProductCard
      price={140}
      productImage={Img.src}
      imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      btnText={'Buy'}
      productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
    />
    <ProductCard
      price={140}
      productImage={Img.src}
      imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      btnText={'Buy'}
      productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
    />
    <ProductCard
      price={140}
      productImage={Img.src}
      imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      btnText={'Buy'}
      productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
    />
    <ProductCard
      price={140}
      productImage={Img.src}
      imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      btnText={'Buy'}
      productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
    />
    <ProductCard
      price={140}
      productImage={Img.src}
      imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      btnText={'Buy'}
      productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
    />
    <ProductCard
      price={140}
      productImage={Img.src}
      imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      btnText={'Buy'}
      productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
    />
      <ProductCard
        price={140}
      productImage={Img.src}
        imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
        btnText={'Buy'}
        productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      />
      <ProductCard
        price={140}
      productImage={Img.src}
        imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
        btnText={'Buy'}
        productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      />
      <ProductCard
        price={140}
      productImage={Img.src}
        imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
        btnText={'Buy'}
        productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      />
      <ProductCard
        price={140}
      productImage={Img.src}
        imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
        btnText={'Buy'}
        productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      />
      <ProductCard
        price={140}
      productImage={Img.src}
        imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
        btnText={'Buy'}
        productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      />
      <ProductCard
        price={140}
      productImage={Img.src}
        imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
        btnText={'Buy'}
        productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      />
      <ProductCard
        price={140}
      productImage={Img.src}
        imageAlt={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
        btnText={'Buy'}
        productName={'BLACK T-SHIRT WITH A VINTAGE EFFECT'}
      />
  </div>
)
