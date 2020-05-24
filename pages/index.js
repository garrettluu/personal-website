import React, {useState, useEffect, Children} from 'react';

import Layout from '../components/Layout';
import SquareFrame from '../components/SquareFrame';
import ActivityCard from '../components/ActivityCard';
import ProjectSummary from '../components/ProjectSummary';
import TypistLoop from "../components/TypistLoop";
import BlogCard from "../components/BlogCard";
import Parallax from "../components/Parallax";
import axios from 'axios';

import * as data from '../blog-entries.json';

export function getStaticProps() {
    // require('dotenv').config();
    // const response = await axios.get("https://dev.to/api/articles/me/published", {
    //     headers: {
    //         "api-key" : process.env.API_KEY
    //     }
    // });

    // const entries = response.data;

    const entries = data.entries;

    return {
        props: {entries}
    }
}
/**
 * Home page of website
 */
export default (props) => {
    const [entries, setEntries] = useState([]);

    const renderFirst2Entries = async () => {
        let result = [];

        for (let i = 0; i < 1; i++) {
            let entry = props.entries[i]
            result.push((
                <BlogCard title={entry.title}
                    date={entry.published_at}
                    imgLink={entry.image}>
                    <p className="body-text">
                        {entry.description}
                    </p>
                </BlogCard>
            ));
        }

        setEntries(result);
    }

    useEffect(() => {
        console.log(entries);
        if (entries.length === 0) {
            renderFirst2Entries();
        }
    });

    return (
        <Layout>
            <Parallax scrollFactor={0.5} scrollOffset={0}>
                <div className="header">
                    <p className="header-text">
                        Garrett Luu
                        <div className="fancy-rectangle"/>
                    </p>
                </div>
            </Parallax>

            <div className="square-frame-container">
                <SquareFrame imgLink="/images/title_thumbnail_1.jpg" />
                <SquareFrame imgLink="/images/title_thumbnail_2.jpg" />
                <SquareFrame imgLink="/images/title_thumbnail_3.jpg" />
            </div>
            <div className="intro">
                <div className="flex-horizontal">
                    <h1 className="intro-header">
                        I am a&nbsp;
                    </h1>
                    <TypistLoop words={[
                        "developer.",
                        "mathematician.",
                        "pursuer of knowledge.",
                    ]}/>
                </div>
                <div className="fancy-rectangle"/>
                <p className="body-text">
                    Hello and welcome to my website! I'm Garrett, a UCSD
                    student majoring in Computer Science. I am a developer of
                    various things, and I've worked on a wide variety of
                    projects in the past, including Android development, FRC
                    control systems, and TI calculators. Programming is
                    something I'm passionate about, and I just love coding and
                    learning whatever I can.
                </p>
                <p className="body-text">
                    This website is just a personal project for me to learn web
                    development and a place for me to nerd out and talk about
                    my ongoing projects. It also serves as a hub so that anyone
                    can look through my independent projects in one place, and
                    possibly a future portfolio/resume if I want a job or
                    something. Stuff is still under construction around here,
                    but feel free to have a look around!
                </p>
            </div>

            <Parallax scrollFactor={0.5} scrollOffset={-150}>
                <div className="subheader" id="activities">
                    <h1 className="subheader-text">
                        What I've been up to
                        <div className="fancy-rectangle"></div>
                        <h2 className="subheader-caption">
                            I love to be involved in both school and work.
                        </h2>
                    </h1>
                </div>
            </Parallax>

            <div className="activitycard-container">
                <ActivityCard className="activitycard"
                              imgLink="/images/bentley.png"
                              title="Bentley Systems"
                              role="Incoming Software Development Intern"
                              date="2020.6 - 2020.9">
                    <p className="body-text">
                        Recently, I was accepted into Bentley Systems' summer internship
                        program! I excited to see where this opportunity has in store for
                        me in the future.
                    </p>
                </ActivityCard>

                <ActivityCard className="activitycard"
                              imgLink="/images/acm.png"
                              title="ACM @ UC San Diego🔷"
                              role="Technical Event Director"
                              date="2019.11 - now">
                    <p className="body-text">
                        I taught technical workshops about
                        Firebase and Git/Unix, volunteered to help during other technical
                        workshops, and even created a workshop about JSFuck!

                        ACM very quickly became my new home in college. I got to
                        work with like-minded people who were motivated an passionate
                        about the same things I was.
                    </p>
                </ActivityCard>

                <ActivityCard className="activitycard"
                              imgLink="/images/ieee.png"
                              title="IEEE UC San Diego Branch"
                              role="Competitor and Quarterly Projects Mentor"
                              date="2019.09 - 2020.3">
                    <p className="body-text">
                        I competed in the Quarterly Projects program, where teams of 3-4 are given
                        a small budget and 8 weeks to design and build a marketable product.
                        I worked on software and hardware projects such as a heart-rate
                        sensing glove and an XY plotter device. After competing for two quarters,
                        I switched to mentoring other teams in the program.
                    </p>
                </ActivityCard>

                <ActivityCard className="activitycard"
                              imgLink="/images/staylinked.png"
                              title="StayLinked Corporation"
                              role="Web Development Intern"
                              date="2016.08">
                    <p className="body-text">
                        In high school, I had the opportunity to intern at StayLinked, which specializes in
                        terminal emulation. I was part of a project that involved creating a web application
                        to customize toolbars for the company software, which is used by over 250 corporate
                        clients. Previously, customization was done with manually editing a config file, but
                        we created a GUI that allowed users to simply drag and drop toolbar items and generate
                        the config file automatically.
                    </p>
                </ActivityCard>
            </div>

            <Parallax scrollFactor={0.5} scrollOffset={-150}>
                <div className="subheader" id="projects">
                    <h1 className="subheader-text">
                        I love to tinker
                        <div className="fancy-rectangle"></div>
                        <h2 className="subheader-caption">
                            Here are some of my projects.
                        </h2>
                    </h1>
                </div>
            </Parallax>

            <div className="projectsummary-container">
                <ProjectSummary imgLink="/images/stakk.png"
                                title="Stakk"
                                text="A full-stack web application for creating and finding study groups"
                                tech="Firebase, Express, React, Node.js" />
                <ProjectSummary imgLink="/images/r3.png"
                                title="R3"
                                text="A 3D graphing calculator for the TI-84 Plus CE"
                                tech="C programming language" />
                <ProjectSummary imgLink="/images/webwaste.png"
                                title="WebWaste"
                                text="A Chrome extension that tracks the carbon footprint of your internet activity"
                                tech="HTML, CSS, JavaScript, jQuery" />
            </div>

            <Parallax scrollFactor={0.5} scrollOffset={-150}>
                <div className="subheader" id="blogs">
                    <h1 className="subheader-text">
                        What I'm thinking about
                        <div className="fancy-rectangle"></div>
                        <h2 className="subheader-caption">
                            My most recent blog entries.
                        </h2>
                    </h1>
                </div>
            </Parallax>

            <div className="blogcard-container">
                {/* <BlogCard title="Why Am I Studying CS?"
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
                </BlogCard> */}

                {entries}

            </div>

            <h1 className="subheader-text subheader-black">
                Say Hello
                <div className="fancy-rectangle"/>
            </h1>

            <div className="social-container">
                <a href="https://www.facebook.com/garrettluu/">
                    <img className="social-icon" src="/images/facebook.png"/>
                </a>
                <a href="https://www.linkedin.com/in/garrettluu/">
                    <img className="social-icon" src="/images/linkedin.png"/>
                </a>
                <a href="https://github.com/garrettluu">
                    <img className="social-icon" src="/images/github.png"/>
                </a>
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

                @media only screen and (max-width: 600px) {
                    .header-text {
                        font-size: 48px;
                    }
                }


                .square-frame-container {
                    position: absolute;
                    top: 383px;
                    width: 812px;

                    display: flex;
                    flex-direction: horizontal;
                    justify-content: space-between;

                    margin-left: calc(50% - 256px/2 - 278px);
                    margin-right: calc(50% - 256px/2 - 278px);
                }

                .intro {
                    margin-top: calc(128px + 48px);
                    margin-left: calc(50% - 256px/2 - 278px);
                    margin-right: calc(50% - 256px/2 - 278px);
                    margin-bottom: 48px;
                }

                .intro-header {
                    font-family: 'Oswald', sans-serif;
                    font-weight: 400;
                    font-size: 48px;

                    margin-top: 0;
                    margin-bottom: 0;
                }

                .intro .fancy-rectangle {
                    margin: 0;
                }

                .flex-horizontal {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                }

                .subheader {
                    display: flex;
                    margin: auto;
                    width: 100%;
                    height: 340px;

                }

                .subheader-text {
                    margin: auto;
                    text-align: center;

                    font-family: 'Oswald', sans-serif;
                    font-weight: 700;
                    font-size: 36px;
                    color: white;
                }
                
                .subheader-black {
                    color: black;
                }

                .subheader-caption {
                    margin: auto;
                    text-align: center;

                    font-family: 'Oswald', sans-serif;
                    font-weight: 500;
                    font-size: 24px;
                    color: white;
                }

                #activities {
                    background: url("/images/subheader_1.png");
                    background-size: cover;
                    background-position: center;
                }

                .activitycard-container {
                    margin-left: calc(50% - 256px/2 - 278px);
                    margin-right: calc(50% - 256px/2 - 278px);
                }

                #projects {
                    background: url("/images/subheader_2.png");
                    background-size: cover;
                    background-position: center;
                }

                .projectsummary-container {
                    width: 812px;

                    margin-left: calc(50% - 256px/2 - 278px);
                    margin-right: calc(50% - 256px/2 - 278px);
                    margin-top: 48px;
                    margin-bottom: 48px;

                    display: flex;
                    flex-direction: horizontal;
                    justify-content: space-between;
                }
                
                #blogs {
                    background: url("/images/subheader_3.png");
                    background-size: cover;
                    background-position: center 60%;
                }

                .blogcard-container {
                    margin-left: calc(50% - 256px/2 - 278px);
                    margin-right: calc(50% - 256px/2 - 278px);
                }

                .social-container {
                    display: flex;
                    justify-content: center;

                    margin-top: 48px;
                }

                .social-icon {
                    width: 128px;
                    height: 128px;

                    margin: 24px;
                }

                @media only screen and (max-width: 600px) {
                    .square-frame-container {
                        top: calc(512px - 104px/2);
                        width: 92%;
                        margin-left: 4%;
                        margin-right: 4%;
                    }

                    .intro {
                        margin-top: 96px;
                        margin-left: 4%;
                        margin-right: 4%;
                    }

                    .intro-header {
                        font-size: 30px;
                    }

                    .activitycard-container {
                        margin-left: 4%;
                        margin-right: 4%;
                    }

                    .projectsummary-container {
                        width: 92%;
                        margin-left: 4%;
                        margin-right: 4%;

                        flex-direction: column;
                    }

                    .blogcard-container {
                        margin-left: 4%;
                        margin-right: 4%;
                    }

                    .social-container {
                        margin-left: 4%;
                        margin-right: 4%;

                        margin-top: 24px;
                    }

                    .social-icon {
                        width: 64px;
                        height: 64px;
                    }
                }
            `}
            </style>
        </Layout>
    );
};