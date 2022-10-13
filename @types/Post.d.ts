export interface PostProps {
    post: {
        slug: string;
        title: string;
        id: string;
        cover: {
            responsiveImage: any
        };
        content: any;
        description: any;
        links?: any;
        technologies?: any;
        plataform?: any;
        seo:any;
    }
}


export interface PostsProps{
    data: {
        allProjects: PostProps[];
    }
}