
const ENDPOINT = 'https://jsonplaceholder.typicode.com';

export interface Post {
    userId: string
    id: number
    title: string
    body: string
}
export function getPosts(params: Record<string, number|string>): Promise<Post[]> {
    const url = new URL('/posts', ENDPOINT);

    Object.entries(params).forEach(([k, v]) => {
        url.searchParams.set(k, v.toString());
    });

    return fetch(url)
        .then((response) => response.json());
}

export interface Comment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}
export function getPostComments(postId: string|number): Promise<Comment[]> {
    const url = new URL(`/posts/${postId}/comments`, ENDPOINT);

    return fetch(url)
        .then((response) => response.json());
}
