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
                <Link href="mailto:work@brunoleo.com.br">
                    <a className={styles.mail}>work<span>@</span>brunoleo.com.br</a>
                </Link>
                <ul>
                {about?.social.map(item => (
                  <li>
                    <Link href={item.link} key={item.id}>
                      <a><Image src={item.iconUrl} width={40} height={40} alt={item.name} /></a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.logo}>
                <Image src="/img/footer.png" layout="fill" alt="Bruno Leo" />
              </div>
            </div>
        </footer>
    )
}