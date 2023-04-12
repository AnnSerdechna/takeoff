import {FC, PropsWithChildren, SVGProps} from 'react'
import cn from 'classnames'
import {useDarkMode} from 'usehooks-ts'

import styles from './Icon.module.scss'

const SvgIcon: FC<PropsWithChildren<SVGProps<SVGSVGElement> & { className?: string }>> = ({ className, children, ...props }) => {
  const { isDarkMode } = useDarkMode()

  return (
    <svg
      className={cn(styles.icon, isDarkMode && styles.dark, className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  )
}

export const SunIcon: FC<{ className?: string }> = ({ className }) => (
  <SvgIcon
    className={className}
    width="14"
    height="14"
    viewBox="0 0 14 14"
  >
    <path
      d="M7.00004 10.5C5.06704 10.5 3.50004 8.93299 3.50004 7C3.50004 5.067 5.06704 3.5 7.00004 3.5C8.93303 3.5 10.5 5.067 10.5 7C10.5 8.93299 8.93303 10.5 7.00004 10.5ZM6.41671 0.583328H7.58337V2.33333H6.41671V0.583328ZM6.41671 11.6667H7.58337V13.4167H6.41671V11.6667ZM2.05029 2.8752L2.87525 2.05025L4.11269 3.28769L3.28773 4.11264L2.05029 2.8752ZM9.88737 10.7123L10.7124 9.88732L11.9498 11.1248L11.1249 11.9498L9.88737 10.7123ZM11.1249 2.05025L11.9498 2.8752L10.7124 4.11264L9.88737 3.28769L11.1249 2.05025ZM3.28773 9.88732L4.11269 10.7123L2.87525 11.9498L2.05029 11.1248L3.28773 9.88732ZM13.4167 6.41666V7.58333H11.6667V6.41666H13.4167ZM2.33337 6.41666V7.58333H0.583374V6.41666H2.33337Z"
      fill="white"
    />
  </SvgIcon>
)

export const MoonIcon: FC<{ className?: string }> = ({ className }) => (
  <SvgIcon
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
  >
    <path
      d="M5.6387 0.177734C4.78413 0.976213 4.24996 2.11326 4.24996 3.37507C4.24996 5.7913 6.20873 7.75008 8.62496 7.75008C9.88677 7.75008 11.0238 7.21586 11.8223 6.36134C11.6357 9.41474 9.10032 11.8334 5.99996 11.8334C2.7783 11.8334 0.166626 9.22171 0.166626 6.00008C0.166626 2.89973 2.5853 0.364308 5.6387 0.177734Z"
      fill="#212121"
    />
  </SvgIcon>
)

export const UserIcon: FC<{ className?: string }> = ({ className }) => (
  <SvgIcon
    className={cn(styles.userIcon, className)}
    width="20"
    height="27"
    viewBox="0 0 20 27"
  >
    <path
      d="M1.05493 25.5C1.55237 21 5.36744 17.5 10 17.5C14.6326 17.5 18.4476 21 18.9451 25.5H1.05493ZM10 14.25C6.40853 14.25 3.5 11.3415 3.5 7.75C3.5 4.15853 6.40853 1.25 10 1.25C13.5915 1.25 16.5 4.15853 16.5 7.75C16.5 11.3415 13.5915 14.25 10 14.25Z"
      strokeWidth="2"
    />
  </SvgIcon>
)

export const HeartIcon: FC<{ className?: string }> = ({ className }) => (
  <SvgIcon
    className={cn(styles.heartIcon, className)}
    width="26"
    height="24"
    viewBox="0 0 26 24"
  >
    <path d="M12.2929 3.95711L13 4.66421L13.7071 3.95711C14.8373 2.82693 16.6477 1.75 18.625 1.75C21.8092 1.75 24.5 4.36474 24.5 8.25C24.5 12.2382 22.3686 15.4307 19.7359 17.913C17.401 20.1145 14.771 21.6668 13.0891 22.6594C13.0591 22.6772 13.0294 22.6947 13 22.7121C12.9706 22.6947 12.9409 22.6772 12.9109 22.6594C11.229 21.6668 8.59901 20.1145 6.26414 17.913C3.63137 15.4307 1.5 12.2382 1.5 8.25C1.5 4.36931 4.23353 1.75 7.375 1.75C9.35228 1.75 11.1627 2.82693 12.2929 3.95711Z" strokeWidth="2"/>
  </SvgIcon>
)

export const CartIcon: FC<{ className?: string }> = ({ className }) => (
  <SvgIcon
    className={cn(styles.cartIcon, className)}
    width="28"
    height="27"
    viewBox="0 0 28 27"
  >
    <path d="M6.00545 6.02077V5.60656L5.71256 5.31366L2.36636 1.96747L2.71991 1.61392L6.06611 4.96011L6.359 5.25301H6.77321H25.8254C25.9635 5.25301 26.0754 5.36492 26.0754 5.50301C26.0754 5.52739 26.0718 5.55181 26.0647 5.57546L23.0649 15.5748C23.0649 15.5749 23.0649 15.5749 23.0649 15.5749C23.0332 15.6805 22.9358 15.753 22.8254 15.753H7.50545H6.50545V16.753V19.253V20.253H7.50545H20.2555V20.753H6.25545C6.11737 20.753 6.00545 20.6411 6.00545 20.503V6.02077ZM6.88045 25.753C6.39721 25.753 6.00545 25.3612 6.00545 24.878C6.00545 24.3948 6.39721 24.003 6.88045 24.003C7.36369 24.003 7.75545 24.3948 7.75545 24.878C7.75545 25.3612 7.36369 25.753 6.88045 25.753ZM21.8805 25.753C21.3972 25.753 21.0055 25.3613 21.0055 24.878C21.0055 24.3947 21.3972 24.003 21.8805 24.003C22.3637 24.003 22.7555 24.3948 22.7555 24.878C22.7555 25.3612 22.3637 25.753 21.8805 25.753Z" strokeWidth="2"/>
  </SvgIcon>
)

export const SearchIcon: FC<{ className?: string, onClick: () => void }> = ({ className, onClick }) => (
  <SvgIcon
    className={cn(styles.searchIcon, className)}
    width="26"
    height="26"
    viewBox="0 0 26 26"
    onClick={onClick}
  >
    <path
      d="M11.75 1.5C17.4077 1.5 22 6.09228 22 11.75C22 17.4077 17.4077 22 11.75 22C6.09228 22 1.5 17.4077 1.5 11.75C1.5 6.09228 6.09228 1.5 11.75 1.5ZM22.0031 22.3566L22.3566 22.0031L24.4779 24.1244L24.1244 24.4779L22.0031 22.3566Z"
      strokeWidth="2"
    />
  </SvgIcon>
)
