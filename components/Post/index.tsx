import Image from "next/image";
import { Image as ImageDato } from "react-datocms";
import Link from "next/link";
import { PostProps } from "../../@types/Post";
import styles from "./styles.module.scss";
import { StructuredText } from "react-datocms";

export function Post(props: any){   
    const {post}: PostProps = props;
    return (
        <div className={styles.post}>
            <div className={styles.post__cover}>
                    <ImageDato data={post.cover.responsiveImage} />
            </div>
            <div className={styles.post__content}>
                <Link href={`project/${post.slug}`}>
                    <h3>{post.title}</h3>
                </Link>
                <StructuredText data={post.description} />
                <Link href={`project/${post.slug}`}>
                    <a aria-label={post.title}><Image src='/img/seta.png' width={80} height={30} alt="Continue Reading" title="Continue Reading" /></a>
                </Link>
            </div>
        </div>
    )
}