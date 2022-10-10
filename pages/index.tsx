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

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.img}>
          <Image src='/img/intro.png' layout='fill' />
        </div>
      </section>

      {/* PROJETOS */}
      <section className={styles.projects}>
        <div className={styles.clip}></div>
        <div className={styles.wrapper}>
          {Posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* SOBRE */}
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

      {/* TRANSICAO */}
      <div className={styles.transition}>
          <p>
          Keep Learning <br />
          Digital Culture <br />
          Design as solution <br />
          Code as possibility
          </p>
      </div>

      {/* SKILLS */}
      <section className={styles.skills}>
        <div className="content">
          <div className="row">
            <div className={styles.skills__photo}>
              <Image src='/img/foto2.png' layout='fill' />
            </div>
            <div className={styles.skills__content}>
              <h2>
              <span>“</span><br />
              I use design, research and technologie to develope amazing user experience for companies and consumers
              </h2>

              <div className={styles.itens}>
                <h3>TECHNOLOGIES</h3>
                <div className={styles.item}>
                  <b>
                    Programação
                  </b>
                  <p>
                    HTML, CSS, Javascript, React JS, Next JS, Wordpress, PHP, MySQL, Tailwind, Fauna DB, Mongo DB, Vite JS, Webpack
                  </p>
                </div>
                <div className={styles.item}>
                  <b>
                    Design
                  </b>
                  <p>
                    Photoshop, Illustrator, Figma, Adobe XD, Canva, Adobe Premiere
                  </p>
                </div>
                <div className={styles.item}>
                  <b>
                    Marketing
                  </b>
                  <p>
                    SEO, Facebook e Google Ads, Analytics, CRM, Relatórios
                  </p>
                </div>
                <div className={styles.item}>
                  <b>
                    Negócios
                  </b>
                  <p>
                    Organização, Gestão de pessoas, Gestão de projetos, Apresentações, Pitch, Solução de Problemas, Facilidade para lidar com pressão
                  </p>
                </div>
                <div className={styles.item}>
                  <b>
                    Idiomas
                  </b>
                  <p>
                    Inglês avançado, espanhol básico para escrita e avançado para conversas
                  </p>
                </div>
              </div>

              <div className={styles.itens}>
                <h3>Experiências</h3>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <Image src='/img/exp1.jpeg' width={100} height={100} />
                  </div>
                  <p>
                    <b>Grupo Digital Solvers</b>
                    <b>Tech Lead</b>
                    <span>2 yrs 5 mos</span>
                    Alinhamento e direcionamento de uma equipe de desenvolvimento de software com 10 integrantes.
                  </p>
                </div>


                <div className={styles.item}>
                  <div className={styles.img}>
                    <Image src='/img/exp2.jpeg' width={100} height={100} />
                  </div>
                  <p>
                    <b>Agência Value</b>
                    <b>Co-founder and CTO</b>
                    <span>6 years</span>
                    Digital Marketing Agency focused on medium-sized companies.
                  </p>
                </div>


                <div className={styles.item}>
                  <div className={styles.img}>
                    <Image src='/img/exp3.jpeg' width={100} height={100} />
                  </div>
                  <p>
                    <b>Trilha MPN</b>
                    <b>Content Creator</b>
                    <span>6 mos</span>
                    Criação de conteúdo de Negócios. Foram mais de 100 publicações feitas entre lives, roteirização, gravação e edição de reels para o Instagram, stories e feed posts.
                  </p>
                </div>


                <div className={styles.item}>
                  <div className={styles.img}>
                    <Image src='/img/exp4.jpeg' width={100} height={100} />
                  </div>
                  <p>
                    <b>RUP Life</b>
                    <b>Co-founder </b>
                    <span>6 mos</span>
                    Organização de encontros livres sobre criatividade, design e experiência.
                  </p>
                </div>


                <div className={styles.item}>
                  <div className={styles.img}>
                    <Image src='/img/exp5.jpeg' width={100} height={100} />
                  </div>
                  <p>
                    <b>Impact HUB</b>
                    <b>Desenvolvedor web front end</b>
                    <span>6 mos</span>
                    Criação de site e páginas para eventos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
