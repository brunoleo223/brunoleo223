import Link from "next/link";
import styles from '../styles/404.module.scss';

export default function Custom404() {
    return (
    <div className={styles.notfound}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link href="/">
            <a>Go to homepage</a>
        </Link>
    </div>
    )
}