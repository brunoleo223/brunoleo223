import { PostProps } from "../../@types/Post";
import { request } from "../../lib/datocms";
import { StructuredText } from "react-datocms";
import { Image as ImageDato } from "react-datocms";
import Image from "next/image";

export function Article({post}: PostProps){
    console.log(post)
    return(
        <div>
            <h1>{post.title}</h1>
            <StructuredText 
            data={post.content} 
            renderBlock={({ record }: any) => {
                switch (record.__typename) {
                    case 'MidiaContentRecord':
                        return record.imageVideo.responsiveImage 
                            ? <ImageDato data={record.imageVideo.responsiveImage} /> 
                            : <video autoPlay muted><source src={record.imageVideo.video.mp4Url} type="video/mp4" /></video>
                    default:
                    return null;
                }
            }}
            />
        </div>
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
            paths.push(`/articles/${p.slug}`);
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