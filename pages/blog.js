import React, {useState, useEffect} from 'react';

import Layout from '../components/Layout';
import BlogCard from "../components/BlogCard";

export default () => {
    const PARALLAX_SCROLL_FACTOR = .5;

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', parallaxScroll);

        return () => {window.removeEventListener('scroll', parallaxScroll);};
    });

    const parallaxScroll = () => {
        setOffset(window.pageYOffset * PARALLAX_SCROLL_FACTOR);
    }

    return (
            <Layout>
                <div className="header" style={{backgroundPositionY: offset}}>
                    <p className="header-text">
                        Blog
                    <div className="fancy-rectangle"></div>
                    </p>
                </div>

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
                    background-position: center;
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