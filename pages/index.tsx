import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import { Post } from '../components/Post'
import styles from '../styles/Index.module.scss';


const Posts = [
  {
    id: 0,
    title: 'Nasa APOD API Project',
    excerpt: 'Esse é o primeiro projeto da minha lista de aplicações focadas em prática, teste e design. A Nasa disponibiliza várias APIs públicas e uma delas é a APOD (Astronomy Picture of the Day), então decidi montar um pequeno site que lista todas essas imagens de forma simples e bonita.',
    coverImage: '/img/cover0.png'
  },
  {
    id: 1,
    title: 'Brazil Holidays',
    excerpt: 'Brazil Holidays also is part of my list of applications focused on practice, testing and design.This project shows how many days until the next national holiday. At the moment it is only possible to know the next holiday, but in the future I want to implement a calendar so that users can access all the upcoming holidays and how much time is left until they arrive',
    coverImage: '/img/cover1.png'
  },
  {
    id: 2,
    title: 'COPY.js',
    excerpt: 'Todo desenvolvedor sabe que uma parte importante do seu trabalho é reutilizar códigos simples que geralmente não decoramos, como por exemplo remover valores duplicados de uma lista. É comum buscarmos por esses códigos em sites como Stackoverflow ou em projetos antigos. ',
    coverImage: '/img/cover2.png'
  }
]

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.img}>
          <Image src='/img/intro.png' layout='fill' />
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.clip}></div>
        <div className={styles.wrapper}>
          {Posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className={styles.about}>
        <div className="content">
          <div className="row">
            <h1>Bruno<br/>Leonardo</h1>
          </div>
          <div className="row">
            <div className={styles.about__content}>
            <p>
                Desenvolvedor front-end, com 10 anos de experiência e mais de 100 sites programados do zero. Co-fundador da Agência VALUE de Marketing Digital e do Coletivo RUP de educação livre. Completamente dedicado a explorar o futuro e suas tecnologias.
              </p>
              <h2>
                <span>f</span><span>r</span><span>o</span><span>n</span><span>t</span><br/>
                <span>e</span><span>n</span><span>d</span><br/>
                <span>d</span><span>e</span><span>v</span><span>e</span><br/>
                <span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
              </h2>
             
              <ul className={styles.social}>
                <li>
                  <Link href="#">
                    <a><Image src='/img/github.svg' width={40} height={40} /></a>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <a><Image src='/img/linkedin.svg' width={40} height={40} /></a>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <a><Image src='/img/instagram.svg' width={40} height={40} /></a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.about__photo}>
              <Image src='/img/foto1.png' layout='fill' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
