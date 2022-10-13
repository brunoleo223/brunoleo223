import { PostProps } from "../../@types/Post";
import { request } from "../../lib/datocms";
import { StructuredText } from "react-datocms";
import { Image as ImageDato } from "react-datocms";
import styles from "../../styles/Projetc.module.scss";
import { Blog } from "../../components/Blog";

export function Article({post}: PostProps){
    
    return(
        <>
            <div className="content">
                <div className={styles.post__cover}>
                    <ImageDato data={post.cover.responsiveImage} />
                </div>
                <div className={styles.infos}>
                    <div className={styles.data}>
                        <h1>{post.title}</h1>
                        <StructuredText data={post.description} />
                    </div>
                    <div className={styles.lists}>
                        {post.technologies ? <div><StructuredText data={post.technologies} /></div> : null}
                        {post.plataform ? <div><StructuredText data={post.plataform} /></div> : null}
                        {post.links ? <div><StructuredText data={post.links} /></div> : null}
                    </div>
                </div>
                <div className={styles.media}>
                    <StructuredText 
                    data={post.content} 
                    renderBlock={({ record }: any) => {
                        switch (record.__typename) {
                            case 'MidiaContentRecord':
                                return record.imageVideo.responsiveImage 
                                    ? <ImageDato data={record.imageVideo.responsiveImage} /> 
                                    : <video className={styles.video} autoPlay muted loop><source src={record.imageVideo.video.mp4Url} type="video/mp4" /></video>
                            case 'VideoRecord':
                                return <video className={styles.video} autoPlay muted loop><source src={record.video.video.mp4Url} type="video/mp4" /></video>
                            default:
                            return null;
                        }
                    }}
                    />
                </div>
            </div>
            
            <Blog />
        </>
    )
}
    
    export default Article;
    
    const PATHS_QUERY = `query {
        allProjects {
            slug
        }
    }`;
    
    export const getStaticPaths = async () => {
        const slugQuery = await request({
            query: PATHS_QUERY,
        })
        
        let paths: string[] = [];
        
        slugQuery.allProjects.map((p: any) => {
            paths.push(`/project/${p.slug}`);
        })
        
        return {
            paths,
            fallback: false,
        }
        
    }
    
    const ARTICLE_QUERY = `query MyQuery($slug: String) {
        project(filter: {slug: {eq: $slug}}, locale: en) {
            title
            slug
            id
            description {
                value
            }
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
            content {
                blocks {
                    __typename
                    ... on VideoRecord {
                        id
                        video {
                            video {
                                thumbnailUrl
                                streamingUrl
                                muxPlaybackId
                                muxAssetId
                                mp4Url
                                framerate
                                duration
                            }
                        }
                    }
                    __typename
                    ... on MidiaContentRecord {
                        id
                        imageVideo {
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
                            video {
                                thumbnailUrl
                                streamingUrl
                                muxPlaybackId
                                muxAssetId
                                mp4Url
                                framerate
                                duration
                            }
                        }
                    }
                }
                value
                links
            }
            links {
                value
              }
              technologies {
                value
              }
              plataform {
                value
              }
        }
    }
    
    `;
    
    export const getStaticProps = async ({ params }: any) => {
        const post = await request({
            query: ARTICLE_QUERY,
            variables: { slug: params.slug },
        });
        
        return {
            props: {
                post: post.project
            }
        }
    }