export type TitleProps = {
  title: string
  size?: 'md'
  className?: string
}

export type ButtonProps = {
  btnText: string
}

export type CardProps = {
  price: number
  productImage: string
  imageAlt: string
}

export type ProductCardProps = CardProps & ButtonProps & {
  productName: string
}
