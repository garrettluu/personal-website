import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'Garrett Luu' }) => {

    let [navButtonClass, setNavButtonClass] = useState("nav-button");
    let [navClass, setNavClass] = useState("nav-bar");

    let [isMounted, didMount] = useState(false);

    let onScroll = () => {
        if (window.scrollY >= 10) {
            setNavButtonClass("nav-button nav-button-dark");
            setNavClass("nav-bar nav-opaque");
        } else {
            setNavButtonClass("nav-button");
            setNavClass("nav-bar");
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        didMount(true);
        return () => {window.removeEventListener('scroll', onScroll)};
    });

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
            <nav className={navClass}>
                <Link href="/">
                    <a className={navButtonClass}>Home</a>
                </Link>
                <Link href="/blog">
                    <a className={navButtonClass}>Blog</a>
                </Link>
                <Link href="/projects">
                    <a className={navButtonClass}>Projects</a>
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
                    transition: background-color .25s ease-in;
                    padding: 24px;
                    width: 100%;
                }

                .nav-opaque {
                    transition: background-color .25s ease-in;
                    background-color: white;
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
                    z-index: 100;
                }

                .nav-button {
                    transition: color .25s ease-in;
                    color: white;
                    font-size: 24px;
                    font-family: 'Oswald', sans-serif;
                    text-decoration: none;
                    padding-right: 24px;
                }

                .nav-button-dark {
                    transition: color .25s ease-in;
                    color: black;
                }

                .fade-in {
                    opacity: 0;
                }

                .fade-in.visible {
                    transition: opacity .25s ease-in;
                    opacity: 1;
                }
            `}

            </style>

        </div>
    );
};