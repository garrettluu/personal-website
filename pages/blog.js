import React, {useState, useEffect} from 'react';

import Layout from '../components/Layout';
import BlogCard from "../components/BlogCard";
import Parallax from '../components/Parallax';

export default () => {
    return (
            <Layout>
                <Parallax scrollFactor={0.5} scrollOffset={}>
                    <div className="header">
                        <p className="header-text">
                            Blog
                        <div className="fancy-rectangle"></div>
                        </p>
                    </div>
                </Parallax>

                <div>
                    <BlogCard title="Why Am I Studying CS?"
                        date="2020.2.19">
                        <p className="body-text">
                            Lorem ipsum
                    </p>
                    </BlogCard>
                    <BlogCard title="Why Am I Studying CS?"
                        date="2020.2.19">
                        <p className="body-text">
                            Lorem ipsum
                    </p>
                    </BlogCard>
                </div>
                <style jsx>{`
                .header {
                    display: flex;
                    margin: auto;
                    width: 100%;
                    height: 512px;

                    background: url("/images/titlebg.jpg") no-repeat;
                    background-size: cover;
                }

                .header-text {
                    margin: auto;
                    text-align: center;

                    font-family: 'Oswald';
                    font-size: 72px;
                    color: white;
                }
            `}
                </style>
            </Layout>
    );
};