import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import { Post } from '../components/Post'
import styles from '../styles/Index.module.scss';
import { AboutMeProps } from '../@types/About';

import PostsJson from '../data/posts.json'
import AboutJson from '../data/about-me.json'
import CompaniesJson from '../data/companies.json'
import DepoimentsJson from '../data/depoiments.json'
import { Footer } from '../components/Footer';
import { request } from '../lib/datocms';
import { PostsProps } from '../@types/Post';

const Home: NextPage = ({data}: PostsProps) => {

  console.log(data.allProjects)

  // const postsData = PostsJson.posts;
  const postsData = data.allProjects;
  const companies = CompaniesJson.companies;
  const depoiments = DepoimentsJson.depoiments;
  const
   {about, skills, education, experiences}: AboutMeProps = AboutJson;
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
          {postsData.map(post => (
            <Post post={post} />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className={styles.about}>
        <div className="content">
          <div className="row">
            <h1>{about?.firstName}<br/>{about?.lastName}</h1>
          </div>
          <div className="row">
            <div className={styles.about__content}>
              <p>
                {about?.miniBio}  
              </p>
              <h2>
                <span>f</span><span>r</span><span>o</span><span>n</span><span>t</span><br/>
                <span>e</span><span>n</span><span>d</span><br/>
                <span>d</span><span>e</span><span>v</span><span>e</span><br/>
                <span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
              </h2>
             
              <ul className={styles.social}>
                {about?.social.map(item => (
                  <li>
                    <Link href={item.link} key={item.id}>
                      <a><Image src={item.iconUrl} width={40} height={40} alt={item.name} /></a>
                    </Link>
                  </li>
                ))}
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
                <h3>SKILLS</h3>
                {skills.map(skill => (
                  <div className={styles.item} key={skill.id}>
                    <b>
                      {skill.title}
                    </b>
                    <p>
                      {skill.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className={styles.itens}>
                <h3>Experiências</h3>
                {experiences.map(exp => (
                  <div className={styles.item} key={exp.id}>
                    <div className={styles.img}>
                      <Image src={exp.logoUrl} width={100} height={100} />
                    </div>
                    <p>
                      <b>{exp.company}</b>
                      <b>{exp.role}</b>
                      <span>{exp.duration}</span>
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className={styles.itens}>
                <h3>Education</h3>
                {education.map(edu => (
                  <div className={styles.item} key={edu.id}>
                    <div className={styles.img}>
                      <Image src={edu.logoUrl} width={100} height={100} />
                    </div>
                    <p>
                      <b>{edu.title}</b>
                      {edu.school}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPRESAS */}
      <section className={styles.companies}>
        <div className="content">
          <h2>
            <span>+</span>50 COMPANIES <br />
            <b>AROUND THE WORLD</b>
          </h2>
          <div className={styles.logos}>
            {companies.map(logo => (
              <div className={styles.logo}>
                <Image src={logo.logoUrl} layout="fill" key={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className={styles.depoiments}>
        <div className="content">
          <div className={styles.itens}>
            {
              depoiments.map(depoiment => (
                <div className={styles.depoiment}>
                  <p>{depoiment.depoiment}</p>
                  <p><b>{depoiment.name}</b></p>
                  <span>{depoiment.companie}</span>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className={styles.blog}>
        <div className="content">
          <div className={styles.link}>
            <h3>EDUCATION </h3>
          </div>
          <div className={styles.link}>
            <h3>CODE & DESIGN </h3>
          </div>
          <div className={styles.link}>
            <h3>FAMILY </h3>
          </div>
          <div className={styles.link}>
            <h3>EXPERIENCE </h3>
          </div>
          <div className={styles.link}>
            <h3>BUSINESS </h3>
          </div>
          <div className={styles.link}>
            <h3>TRAVEL</h3>
          </div>
          <div className={styles.link}>
            <h3>explore</h3>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home


const BLOG_QUERY = `query MyQuery {
  allProjects(locale: en) {
    slug
    title
    id
    cover {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
    }
    description {
      value
    }
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: BLOG_QUERY,
  })

  return {
    props: {
      data
    }
  }
}