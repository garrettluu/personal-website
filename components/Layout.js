import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'Garrett Luu' }) => {
    return (
        <div id="container">
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport" />
                <link href="https://fonts.googleapis.com/css?family=Oswald:400,500,700|Roboto:300,300i,500,500i&display=swap" rel="stylesheet"></link>
            </Head>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
            </nav>

            {children}

            <style jsx global>{`
                body {
                    margin: 0;
                    top: 0;
                }

                nav {
                    position: fixed;
                }

                .fancy-rectangle {
                    width: 362px;
                    height: 8px;
                    background-color: tomato;
                        
                }

                .body-text {
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                }
            `}
            </style>

            <style jsx>{`
                nav {
                    padding: 24px;
                    width: 100%;
                }
                a {
                    color: white;
                    font-size: 24px;
                    font-family: 'Oswald', sans-serif;
                    text-decoration: none;
                    padding-right: 24px;
                }
            `}

            </style>
        </div>
    );
};