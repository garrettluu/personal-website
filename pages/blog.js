import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Layout from '../components/Layout';
import BlogCard from "../components/BlogCard";
import Parallax from '../components/Parallax';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

// export async function getServerSideProps(context) {
//     const response = await axios.get('http://localhost:3000/blog/entries');
//     console.log("Sent axios request");
//     console.log(response.data);
//     return {
//         props: {entries: response.data}
//     }
// };

// export async function getStaticProps() {
    // require('dotenv').config();
    // const response = await axios.get("https://dev.to/api/articles/me/published", {
    //     headers: {
    //         "api-key" : process.env.API_KEY
    //     }
    // });

    // const entries = response.data;
    // console.log(entries);

    // return {
    //     props: {entries}
    // }
// }

export default (props) => {
    const [entries, setEntries] = useState([]);

    const renderEntries = async () => {
        let result = props.entries.map((entry) => {
            console.log(entry);
            return (
                <BlogCard title={entry.title}
                        date={entry.published_at}>
                    <p className="body-text">
                        {entry.description}
                    </p>
                </BlogCard>
        )});

        setEntries(result);
    }

    useEffect(() => {
        // if (entries.length === 0) {
        //     renderEntries();
        // }
    });

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

                <div>
                    {entries}
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
