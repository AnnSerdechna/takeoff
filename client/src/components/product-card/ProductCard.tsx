import {FC} from 'react'

import {Button, Card, Title} from '@/components/ui'
import {ProductCardProps} from '@/types'
import styles from './ProductCard.module.scss'

export const ProductCard: FC<ProductCardProps> = ({ productName, productImage, btnText }) => (
  <div className={styles.productCard}>
    <div>
        <Title
          title={productName}
          className={styles.productCardTitle}
        />

        <Card
          price={140}
          productImage={productImage}
          imageAlt={productName}
        />
    </div>

    <Button btnText={btnText} />
  </div>
)
