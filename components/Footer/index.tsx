import Image from "next/image";
import Link from "next/link";
import { AboutMeProps } from "../../@types/About";
import AboutJson from '../../data/about-me.json'
import styles from './styles.module.scss';

const {about}: AboutMeProps = AboutJson;

export function Footer(){
    return (
        <footer id="contact" className={styles.footer}>
            <div className="content">
                <Link href="mailto:brunoleo223@gmail.com">
                    <a id='mail_contact' className={styles.mail}>brunoleo223<span>@</span>gmail.com</a>
                </Link>
                <ul>
                {about?.social.map(item => (
                  <li key={`social-${item.name}`}>
                    <Link href={item.link}>
                      <a className='social_click' id={item.name} target="_blank"><Image src={item.iconUrl} width={40} height={40} alt={item.name} /></a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.logo}>
                <Image src="/img/footer.png" layout="fill" alt="Bruno Leo Footer" />
              </div>
            </div>
        </footer>
    )
}