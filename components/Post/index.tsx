import Image from "next/image";
import { Image as ImageDato } from "react-datocms";
import Link from "next/link";
import { PostProps } from "../../@types/Post";
import styles from "./styles.module.scss";
import { StructuredText } from "react-datocms";

export function Post({post}: PostProps){   
    console.log(post)
    return (
        <div className={styles.post}>
            <div className={styles.post__cover}>
                <ImageDato data={post.cover.responsiveImage} />
            </div>
            <div className={styles.post__content}>
                <h3>{post.title}</h3>
                <StructuredText data={post.description} />
                <Link href={`project/${post.slug}`}>
                    <a><Image src='/img/seta.png' width={80} height={30} /></a>
                </Link>
            </div>
        </div>
    )
}