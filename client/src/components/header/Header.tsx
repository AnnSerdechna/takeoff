import {FC, useState} from 'react'
import { useDarkMode } from 'usehooks-ts'
import cn from 'classnames'

import styles from './Header.module.scss'
import {Container, Switch} from '@/components/ui'
import {HeaderMenu} from '@/components/header-menu/HeaderMenu'

export const Header: FC = () => {
  const [isVisibleInput, setVisibleInput] = useState(false)
  const { isDarkMode } = useDarkMode()

  return (
    <header className={cn(styles.header, isDarkMode && styles.dark)}>
      <Container>
        <div className={styles.content}>
          <div className={styles.switchWrap}>
            <Switch />
          </div>

          <div className={styles.menuWrap}>
            <HeaderMenu />
          </div>

          <div className={styles.contentEnd}>
            <div className={styles.search}>
              <svg
                className={styles.icon}
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setVisibleInput(!isVisibleInput)}
              >
                <path
                  d="M11.75 1.5C17.4077 1.5 22 6.09228 22 11.75C22 17.4077 17.4077 22 11.75 22C6.09228 22 1.5 17.4077 1.5 11.75C1.5 6.09228 6.09228 1.5 11.75 1.5ZM22.0031 22.3566L22.3566 22.0031L24.4779 24.1244L24.1244 24.4779L22.0031 22.3566Z"
                  strokeWidth="2"
                />
              </svg>

              <div className={cn(styles.inputWrap, isVisibleInput && styles.visible)}>
                <input className={styles.input} autoFocus={isVisibleInput} />
              </div>
            </div>

            <div className={styles.icons}>
              <svg
                className={styles.icon}
                width="20"
                height="27"
                viewBox="0 0 20 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.05493 25.5C1.55237 21 5.36744 17.5 10 17.5C14.6326 17.5 18.4476 21 18.9451 25.5H1.05493ZM10 14.25C6.40853 14.25 3.5 11.3415 3.5 7.75C3.5 4.15853 6.40853 1.25 10 1.25C13.5915 1.25 16.5 4.15853 16.5 7.75C16.5 11.3415 13.5915 14.25 10 14.25Z"
                  strokeWidth="2"
                />
              </svg>

              <div className={styles.iconsGroup}>
                <svg className={styles.icon} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2929 3.95711L13 4.66421L13.7071 3.95711C14.8373 2.82693 16.6477 1.75 18.625 1.75C21.8092 1.75 24.5 4.36474 24.5 8.25C24.5 12.2382 22.3686 15.4307 19.7359 17.913C17.401 20.1145 14.771 21.6668 13.0891 22.6594C13.0591 22.6772 13.0294 22.6947 13 22.7121C12.9706 22.6947 12.9409 22.6772 12.9109 22.6594C11.229 21.6668 8.59901 20.1145 6.26414 17.913C3.63137 15.4307 1.5 12.2382 1.5 8.25C1.5 4.36931 4.23353 1.75 7.375 1.75C9.35228 1.75 11.1627 2.82693 12.2929 3.95711Z" strokeWidth="2"/>
                </svg>

                <svg className={styles.icon} width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00545 6.02077V5.60656L5.71256 5.31366L2.36636 1.96747L2.71991 1.61392L6.06611 4.96011L6.359 5.25301H6.77321H25.8254C25.9635 5.25301 26.0754 5.36492 26.0754 5.50301C26.0754 5.52739 26.0718 5.55181 26.0647 5.57546L23.0649 15.5748C23.0649 15.5749 23.0649 15.5749 23.0649 15.5749C23.0332 15.6805 22.9358 15.753 22.8254 15.753H7.50545H6.50545V16.753V19.253V20.253H7.50545H20.2555V20.753H6.25545C6.11737 20.753 6.00545 20.6411 6.00545 20.503V6.02077ZM6.88045 25.753C6.39721 25.753 6.00545 25.3612 6.00545 24.878C6.00545 24.3948 6.39721 24.003 6.88045 24.003C7.36369 24.003 7.75545 24.3948 7.75545 24.878C7.75545 25.3612 7.36369 25.753 6.88045 25.753ZM21.8805 25.753C21.3972 25.753 21.0055 25.3613 21.0055 24.878C21.0055 24.3947 21.3972 24.003 21.8805 24.003C22.3637 24.003 22.7555 24.3948 22.7555 24.878C22.7555 25.3612 22.3637 25.753 21.8805 25.753Z" strokeWidth="2"/>
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
