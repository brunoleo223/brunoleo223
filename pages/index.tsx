import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.img}>
          <Image src='/img/intro.png' layout='fill' />
        </div>
      </section>
    </>
  )
}

export default Home
