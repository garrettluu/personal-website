import React from 'react';
import Head from 'next/head';

export default () => {
    return (
        <div id="container">
            <Head>
                <title>404 Not found</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport" />
                <link href="https://fonts.googleapis.com/css?family=Oswald:600|Roboto:300&display=swap" rel="stylesheet"></link>
            </Head>
            <h1>
                404: Not found
            </h1>
            <div className="fancy-rectangle"></div>
            <p className="body-text">
                The page you were looking for was not found.
            </p>
            <style jsx>{`
                #container {
                    display: flex;
                    flex-direction: column;
                }
                h1 {
                    font-family: 'Oswald', sans-serif;
                    font-size: 72px;
                    font-weight: 600;

                    margin: auto;
                }
                .fancy-rectangle {
                    width: 362px;
                    height: 8px;
                    background-color: tomato;
                    margin: auto;
                }
                .body-text {
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    margin: auto;
                    padding: 16px;
                }
            `}
            </style>
        </div>
    );
};