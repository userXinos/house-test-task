import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';

import styles from '../../styles/Comments.module.scss';
import {Comment, getPostComments} from '../../api/posts';


export default function Post() {
    const router = useRouter();
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        (async () => {
            if (router.query.pid) {
                setComments(await getPostComments(router.query.pid as string));
            }
        })();
    }, [router.query.pid]);


    return (
        <div>
            <Head>
                <title>Комментарии поста {router.query.pid}</title>
            </Head>

            <main className={styles.container}>
                <header className={styles.header}>
                    <button className={styles['back-btn']} onClick={handleGoBack}>Назад</button>

                    <h2>Комментарии поста {router.query.pid}</h2>
                </header>

                {comments.map((comment) => (
                    <div key={comment.id} className={styles.comment}>
                        <h2 className={styles.name}>{comment.name}</h2>
                        <span>{comment.email}</span>
                        <p>{comment.body}</p>
                    </div>
                ))}

            </main>
        </div>
    );

    function handleGoBack() {
        router.back();
    }
}
