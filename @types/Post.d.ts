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
    }
}


export interface PostsProps{
    data: {
        allProjects: PostProps[];
    }
}