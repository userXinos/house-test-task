// noinspection JSIgnoredPromiseFromCall

import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {useState, useRef, useEffect} from 'react';

import ReactPaginate from 'react-paginate';
import Search from '../components/Search';

import styles from '../styles/Home.module.scss';
import {getPosts, Post} from '../api/posts';

const POSTS_PER_PAGE = 10;

export default function Posts() {
    const router = useRouter();
    const [posts, setPosts] = useState<Post[]>([]);
    const [lastSearched, setLastSearched] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pageUrl = useRef<URL>();

    useEffect(() => {
        pageUrl.current = new URL(window.location.href);
        fetchPostsByParams();
    }, []);


    return (
        <div>
            <Head>
                <title>Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.container}>
                <Search onSubmit={searched} lastSearched={lastSearched}/>

                {posts.map((post) => (
                    <div key={post.id} className={styles.post}>
                        <h2 className={styles.title} onClick={() => goToComments(post.id)}>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}

                <ReactPaginate
                    pageCount={10}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={pageChange}
                    containerClassName={styles.pagination}
                    activeClassName={styles.active}
                    nextLabel="вперёд >"
                    previousLabel="< назад"
                    forcePage={currentPage}
                />
            </main>
        </div>
    );

    function searched(text: string) {
        if (pageUrl.current) {
            pageUrl.current.searchParams.set('search', encodeURI(text));
            pageUrl.current.searchParams.set('page', '1');
            router.push(pageUrl.current);
        }
        fetchPostsByParams();
    }

    function pageChange({selected} : {selected: number}) {
        if (pageUrl.current) {
            pageUrl.current.searchParams.set('page', (selected + 1).toString());
            router.push(pageUrl.current);
        }
        fetchPostsByParams();
    }

    async function fetchPostsByParams() {
        if (pageUrl.current) {
            const page = parseInt(pageUrl.current.searchParams.get('page') || '1');
            const search = decodeURI(pageUrl.current.searchParams.get('search') || '');

            setLastSearched(search);
            setCurrentPage(page - 1);

            setPosts(await getPosts({
                '_page': page,
                'title_like': search,
                '_limit': POSTS_PER_PAGE,
            }));
        }
    }

    function goToComments(id: number) {
        router.push(`/comments/${id}`);
    }
}
