import Image from "next/image";
import Link from "next/link";
import { PostProps } from "../../@types/Post";
import styles from "./styles.module.scss";

export function Post({post}: PostProps){   
    return (
        <div className={styles.post}>
            <div className={styles.post__cover}>
                <Image src={post.coverImage} layout="fill" />
            </div>
            <div className={styles.post__content}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href="#">
                    <a><Image src='/img/seta.png' width={80} height={30} /></a>
                </Link>
            </div>
        </div>
    )
}