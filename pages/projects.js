import React from 'react';

import Layout from '../components/Layout';
import Parallax from '../components/Parallax';

export default (props) => {
    return (
        <Layout>
            <Parallax scrollFactor={0.5} scrollOffset={0}>
                <div className="header">
                    <div className="header-text">
                        Projects
                        <div className="fancy-rectangle"></div>
                    </div>
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
                <div id="babel-sandbox">
                    <h1 className="project-title">Babel Sandbox - IDE and educational tool for Babel</h1>
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
                <div id="routinely">
                    <h1 className="project-title">Routine.ly - Task Scheduling App</h1>
                    <h2 className="tech-text">
                        Firebase, Flutter, Dart
                    </h2>
                    <p className="body-text">
                        <b>Github repo: </b> <a href="https://github.com/garrettluu/routine.ly">garrettluu/routine.ly</a>
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
                <div id="slearn">
                    <h1 className="project-title">Slearn - AI Flashcard Generator</h1>
                    <h2 className="tech-text">
                        Express, Node.js, React
                    </h2>
                    <p className="body-text">
                        <b>Github repo: </b> <a href="https://github.com/garrettluu/slearn">garrettluu/slearn</a>
                    </p>
                    <p className="body-text">
                        Submitted as part of <b>HooHacks 2020</b>. I teamed up with a few friends and built this AI flashcard generator in the last 8 hours of the
                        hackathon. Using a few APIs, we were able to pull data from Wikipedia articles and feed the text into an AI, which would generate questions
                        to be displayed to the user. The backend is a simple Express server, while the front end is built with React, and uses the React Spring
                        component library.
                    </p>
                    <img className="project-card" src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/995/361/datas/original.png"/>
                </div>
                <div id="webwaste">
                    <h1 className="project-title">WebWaste - Carbon-tracking Chrome Extension</h1>
                    <h2 className="tech-text">
                        Express, Node.js, React
                    </h2>
                    <p className="body-text">
                        <b>Github repo: </b><a href="https://github.com/daniel-d-truong/web-waste">daniel-d-truong/web-waste</a>
                    </p>
                    <p className="body-text">
                        Submitted as part of <b>HackTech 2020</b>. Working with a few friends, we had the idea to track the carbon footprint
                        of a user's internet activity by building a Chrome extension. I had never worked with Chrome extensions before
                        but it was simple enough to get started. I implemented a feature to pause videos when the user switches to a
                        different tab, and another feature to prevent downloading the same file twice.
                    </p>
                    <img className="project-card" src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/953/111/datas/original.png"/>
                </div>
                <div id="stakk">
                    <h1 className="project-title">Stakk - Study Group App</h1>
                    <h2 className="tech-text">
                        Express, Node.js, React
                    </h2>
                    <p className="body-text">
                        <b>Github repo: </b><a href="https://github.com/garrettluu/stakk">garrettluu/stakk</a>
                    </p>
                    <p className="body-text">
                        Built at <b>SDHacks 2019</b>. This was my first time building a full-stack web application using
                        Firebase, Express, React, and Node.js, so there was a lot I had to learn. We only managed to
                        implement very basic features, but it was an incredibly fun learning experience, and made me
                        really enjoy web development.
                    </p>
                    <img className="project-card-small" src="/images/stakk.png"/>
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
                    margin-bottom: 45px;
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

                .project-card-small {
                    display: block;
                    margin: auto;
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