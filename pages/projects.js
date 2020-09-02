import React from 'react';

import Layout from '../components/Layout';
import Parallax from '../components/Parallax';

export default (props) => {
    return (
        <Layout>
            <Parallax scrollFactor={0.5} scrollOffset={0}>
                <div className="header">
                    <p className="header-text">
                        Projects
                        <div className="fancy-rectangle"></div>
                    </p>
                </div>
            </Parallax>

            <div className="projects-container">
                <p className="body-text">
                    Welcome to my projects page! Below, you can find a list of my projects, complete and incomplete, along with
                    a short description of each. I consider myself a full stack web developer;
                    a lot of my projects are web applications (usually <b>React</b> and <b>Node.js</b>), but I'm currently learning
                    mobile development with <b>React Native</b>, <b>Flutter</b>, and even native <b>Android</b>.
                    This isn't a comprehensive list by any means, but just the ones I find to be most
                    interesting and meaningful. Feel free to visit my <a href="https://github.com/garrettluu">Github</a> and peruse
                    my repositories if you want to see more!
                </p>
                <p className="body-text">
                </p>
                <div>
                    <h1 className="project-title">Babel Sandbox - an IDE and educational tool for Babel</h1>
                    <h2 className="tech-text">
                        React, Semantic UI, SailsJS
                    </h2>
                    <p className="body-text">
                        <b>Github repo:</b> <a href="https://github.com/MLH-Fellowship/babel-sandbox">MLH-Fellowship/babel-sandbox</a>
                    </p>
                    <p className="body-text">
                        Done as part of the <b>MLH Fellowship</b>. In 4 weeks, our team of 8 fellows built
                        Babel Sandbox, an IDE and educational tool for Babel plugins and presets. Every week,
                        we would meet with Babel maintainer <b>Henry Zhu</b> (acting as the "customer")
                        to demo new features, receive feedback, and just chat about working in open source.
                    </p>
                    <p className="body-text">
                        I worked on the React front-end, using functional
                        components and hooks to control state (without using Redux 🤯). Some of my biggest and most notable contributions are
                        the <a href="https://github.com/MLH-Fellowship/babel-sandbox/pull/52">plugin import system</a> and
                        the <a href="https://github.com/MLH-Fellowship/babel-sandbox/pull/77">forking and saving of configs</a>.
                        A few other less notable but still interesting pull requests I made:
                    </p>
                    <div className="body-text">
                        <ul>
                            <li><a href="https://github.com/MLH-Fellowship/babel-sandbox/pull/103">Changing url when saving and forking</a></li>
                            <li><a href="https://github.com/MLH-Fellowship/babel-sandbox/pull/133">Cloning configs</a></li>
                            <li><a href="https://github.com/MLH-Fellowship/babel-sandbox/pull/107">Fix bug: plugin scripts being added every page load</a></li>
                        </ul>
                    </div>
                    <p className="body-text">
                        If you are interested, visit <a href="https://babelsandbox.com/">babelsandbox.com</a> to try it out! I also wrote a blog
                        post about my overall experience in the MLH Fellowship, which you can read <a href="/blog/mlh-fellowship/">here</a>.
                    </p>
                    <img className="project-card" src="https://dev-to-uploads.s3.amazonaws.com/i/ofni1muqpd9h0mbk0tvg.PNG" />
                </div>
                <div>
                    <h1 className="project-title">Routine.ly - Task Scheduling App</h1>
                    <h2 className="tech-text">
                        Firebase, Flutter, Dart
                    </h2>
                    <p className="body-text">
                        <b>Github repo:</b> 
                    </p>
                    <p className="body-text">
                        Submitted as part of <b>MLH Hack at Home 2020</b>. For this remote hackathon, I decided to compete solo and really focus on learning
                        a new technology. After hearing about the hype surrounding Flutter, I decided to commit to building a simple CRUD app and learning
                        the Dart language. Coupled with Firebase for the backend, developing on this tech stack was a breeze. In about 12 hours, I was able
                        to finish designing and coding the interface shown below, and ship a simple but complete product.
                    </p>
                    <p className="body-text">
                        After the hackathon, I decided to refactor the structure of the code to improve readability, modularity, and testability by
                        separating components and applying OOD principles.
                        In the future, I plan to add additional features to improve the user experience, such as <b>user authentication</b>, <b>Calendar API </b>
                        integration, and <b>automatic task scheduling</b>.
                    </p>
                    <img className="project-card" src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/083/792/datas/gallery.jpg" />
                </div>
                <div>
                    <h1 className="project-title">Slearn</h1>
                    <h2 className="tech-text">
                        Express, Node.js, React
                    </h2>
                    <p className="body-text">
                        Submitted as part of <b>HooHacks 2020</b>.
                    </p>
                    <img className="project-card" src="/images/slearn.png" />
                </div>
            </div>

            <style jsx>{`
                .header {
                    display: flex;
                    margin: auto;
                    width: 100%;
                    height: 512px;

                    background: url("/images/subheader_2.png") no-repeat;
                    background-size: cover;
                }

                .header-text {
                    margin: auto;
                    text-align: center;

                    font-family: 'Oswald';
                    font-size: 72px;
                    color: white;
                }

                .projects-container {
                    margin-top: 45px;
                    margin-left: 20%;
                    margin-right: 20%;
                }

                .project-title {
                    font-family: 'Oswald';
                    font-size: 48px;
                    font-weight: normal;
                    margin-bottom: 0;
                }

                .project-card {
                    width: 812px;

                    margin-left: calc(50% - 256px/2 - 278px);
                    margin-right: calc(50% - 256px/2 - 278px);
                }

                .tech-text {
                   color: tomato;
                   margin-top: 0;
                   margin-bottom: 30px;

                   font-size: 24px;
                   font-family: 'Oswald';
                   font-weight: normal;
                }

                @media only screen and (max-width: 850px) {
                    .header-text {
                        font-size: 48px;
                    }
                    .projects-container {
                        margin-left: 4%;
                        margin-right: 4%;
                    }
                    .project-card {
                        width: 92%;
                        margin-left: 4%;
                        margin-right: 4%;
                    }
                }
            `}
            </style>
        </Layout>
    );
};