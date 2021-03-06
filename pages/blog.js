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

const Blog = (props) => {
    const previews = props.entries.map((e) => (
        <div data-aos="zoom-out-up">
            <BlogCard title={e.title}
                imgLink={e.image}
                margin={0}
                date={e.date}
                link={e.url}>
                <p className='body-text'>
                    {e.description}
                </p>
            </BlogCard>
        </div>
    ));

    return (
        <Layout>
            <Parallax scrollFactor={0.5} scrollOffset={0}>
                <div className="header">
                    <div className="header-text" data-aos="zoom-out" data-aos-duration={1000}>
                        Blog
                    </div>
                    <div className="fancy-rectangle" data-aos="fade-right" data-aos-duration={1000}/>
                    <p className="subheader-text" data-aos="zoom-out" data-aos-duration={1000} data-aos-delay={500}>
                        Musings about life, work, and code
                    </p>
                </div>
            </Parallax>

            <div className="blog-content">
                {previews}
            </div>
            <style jsx>{`
                .header {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: auto;
                    width: 100%;
                    height: 512px;

                    background: url("/images/subheader_3.png") no-repeat;
                    background-size: cover;
                }

                .header-text {
                    margin-bottom: 0;
                    text-align: center;

                    font-family: 'Oswald';
                    font-size: 72px;
                    color: white;
                }

                .subheader-text {
                    text-align: center;

                    font-family: 'Oswald';
                    font-size: 36px;
                    color: white;
                    margin-top: 0;
                }

                .blog-content {
                  margin-left: 20%;
                  margin-right: 20%;
                }

                @media only screen and (max-width: 850px) {
                    .header-text {
                        font-size: 48px;
                        padding-left: 4%;
                        padding-right: 4%;
                    }
                    .subheader-text {
                        font-size: 24px;
                        padding-left: 4%;
                        padding-right: 4%;
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

export default Blog;