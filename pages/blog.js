import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';
import BlogCard from "../components/BlogCard";
import Parallax from '../components/Parallax';

export async function getStaticProps() {
    require('dotenv').config();
    const response = await axios.get(process.env.BACKEND_URL + "/blog/previews");

    const entries = response.data;

    return {
        props: { entries }
    }
}

export default (props) => {
    const previews = props.entries.map((e) => (
        <BlogCard title={e.title}
            imgLink={e.image}
            margin={0}
            date={e.date}
            link={e.url}>
            <p className='body-text'>
                {e.description}
            </p>
        </BlogCard>
    ));

    return (
        <Layout>
            <Parallax scrollFactor={0.5} scrollOffset={0}>
                <div className="header">
                    <p className="header-text">
                        Blog
                        <div className="fancy-rectangle"></div>
                    </p>
                </div>
            </Parallax>

            <div className="blog-content">
                {previews}
            </div>
            <style jsx>{`
                .header {
                    display: flex;
                    margin: auto;
                    width: 100%;
                    height: 512px;

                    background: url("/images/subheader_3.png") no-repeat;
                    background-size: cover;
                }

                .header-text {
                    margin: auto;
                    text-align: center;

                    font-family: 'Oswald';
                    font-size: 72px;
                    color: white;
                }

                .blog-content {
                  margin-left: 20%;
                  margin-right: 20%;
                }

                @media only screen and (max-width: 850px) {
                    .header-text {
                        font-size: 48px;
                    }
                    .blog-content {
                        margin-left: 4%;
                        margin-right: 4%;
                    }
                }
            `}
            </style>
        </Layout>
    );
};
