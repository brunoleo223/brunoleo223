import Link from "next/link";
import { useState } from "react";
import styles from './styles.module.scss';

export function Menu(){
    const [menu, setMenu] = useState(true);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <menu className={styles.menu}>
            <button onClick={handleMenu} className={menu ? styles.button_active : ``}></button>
            <ul className={menu ? styles.ul_active : ``}>
                <li><Link href={'/'}><a>home</a></Link></li>
                <li><Link href={'/#projects'}><a>projects</a></Link></li>
                <li><Link href={'/#about'}><a>about</a></Link></li>
                <li><Link href={'/#skills'}><a>skills</a></Link></li>
                <li><Link href={'/#experiences'}><a>experience</a></Link></li>
                {/* <li><Link href={'#blog'}><a>blog</a></Link></li> */}
                <li><Link href={'#contact'}><a>contact</a></Link></li>
            </ul>
        </menu>
    )
}