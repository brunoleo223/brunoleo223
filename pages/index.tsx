import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '../components/Post'
import styles from '../styles/Index.module.scss';
import { AboutMeProps } from '../@types/About';

import AboutJson from '../data/about-me.json'
import CompaniesJson from '../data/companies.json'
import DepoimentsJson from '../data/depoiments.json'
import { request } from '../lib/datocms';
import { PostsProps } from '../@types/Post';
import { Blog } from '../components/Blog';
import Head from 'next/head';

const Home: NextPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {

  // const postsData = PostsJson.posts;
  const postsData: PostsProps[] = data.allProjects;
  const companies = CompaniesJson.companies;
  const depoiments = DepoimentsJson.depoiments;
  const
   {about, skills, education, experiences}: AboutMeProps = AboutJson;
  return (
    <>
      <Head>
        <title>Bruno Leonardo - Frontend Developer</title>
				<meta name="description" content="with 10 years of experience and more than 100 websites programmed from scratch." />
				<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<link rel="canonical" href="https://brunoleo.work" />
				<meta property="og:locale" content="pt_BR" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Bruno Leonardo - Frontend Developer" />
				<meta property="og:description" content="with 10 years of experience and more than 100 websites programmed from scratch." />
				<meta property="og:url" content="https://brunoleo.work" />
				<meta property="og:site_name" content="Bruno Leonardo - Frontend Developer" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:description" content="with 10 years of experience and more than 100 websites programmed from scratch." />
				<meta name="twitter:title" content="Bruno Leonardo - Frontend Developer" />
				<meta property="og:image" content="https://brunoleo.work/thumb.png" />
				<meta property="og:image:type" content="image/jpeg"/> 
        <meta property="og:image:width" content="800" />
				<meta property="og:image:height" content="600" />
      </Head>
      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.img}>
          <Image src='/img/intro.png' layout='fill' alt='Bruno Leonardo intro logo' />
        </div>
      </section>

      {/* PROJETOS */}
      <section id='projects' className={styles.projects}>
        <div className={styles.clip}></div>
        <div className={styles.wrapper}>
          {postsData.map((post: any) => (
            <Post post={post} key={post.slug} />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className={styles.about}>
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
                <span>f</span><span>u</span><span>l</span><span>l</span><br/>
                <span>s</span><span>t</span><span>a</span><span>c</span><span>k</span><br/>
                <span>d</span><span>e</span><span>v</span><span>e</span><br/>
                <span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
              </h2>
             
              <ul className={styles.social}>
                {about?.social.map(item => (
                  <li key={`about-${item.id}`}>
                    <Link href={item.link}>
                      <a target="_blank"><Image src={item.iconUrl} width={40} height={40} alt={item.name} /></a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.about__photo}>
              <Image src='/img/foto1.png' layout='fill' alt='Bruno Leonardo with laptop' />
            </div>
          </div>
        </div>
      </section>

      {/* TRANSICAO */}
      <div className={styles.transition}>
          <p>
          Keep Learning <br />
          Digital Culture <br />
          Design as a Solution <br />
          Code as a Possibility
          </p>
      </div>

      {/* SKILLS */}
      <section id="skills" className={styles.skills}>
        <div className="content">
          <div className="row">
            <div className={styles.skills__photo}>
              <Image src='/img/foto2.png' layout='fill' alt='Bruno Leonardo profile picture' />
            </div>
            <div className={styles.skills__content}>
              <h2>
              <span>“</span><br />
                I USE DESIGN, RESEARCH AND TECHNOLOGY TO DEVELOP AMAZING USER EXPERIENCE FOR COMPANIES AND CONSUMERS
              </h2>

              <div className={styles.itens}>
                <h3>SKILLS</h3>
                {skills.map(skill => (
                  <div className={styles.item} key={`skill-${skill.id}`}>
                    <b>
                      {skill.title}
                    </b>
                    <p>
                      {skill.content}
                    </p>
                  </div>
                ))}
              </div>

              <div id="experiences" className={styles.itens}>
                <h3>EXPERIENCES</h3>
                {experiences.map(exp => (
                  <div className={styles.item} key={`exp-${exp.id}`}>
                    <div className={styles.img}>
                      <Image src={exp.logoUrl} width={100} height={100} alt={exp.company} />
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
                  <div className={styles.item} key={`edu-${edu.school}`}>
                    <div className={styles.img}>
                      <Image src={edu.logoUrl} width={100} height={100} alt={edu.school} />
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
              <div className={styles.logo} key={logo.name} >
                <Image src={logo.logoUrl} layout="fill" alt={logo.name} />
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
                <div className={styles.depoiment} key={depoiment.name}>
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
      <Blog />
      
    </>
  )
}

export default Home;


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

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await request({
    query: BLOG_QUERY,
  })

  return {
    props: {
      data
    }
  }
}