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

export async function getStaticProps() {
    require('dotenv').config();
    const response = await axios.get(process.env.BACKEND_URL + "/blog/previews", {
        params: {
            limit: 2,
        },
    });

    const entries = response.data
    
    return {
        props: {entries}
    }
}
/**
 * Home page of website
 */
export default (props) => {
    const previews = props.entries.map((e) => (
            <BlogCard title={e.title}
                      imgLink={e.image}
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
                              imgLink="/images/mlh.png"
                              title="Major League Hacking💻"
                              role="Open Source Fellow"
                              date="2020.6 - 2020.8">
                    <p className="body-text">
                        I got the opportunity to participate in the the MLH Fellowship, where I am
                        currently making open-source contributions to SheetJS, a JavaScript library
                        for spreadsheets.
                    </p>
                </ActivityCard>
                {/*internship cancelled :(*/}
                {/* <ActivityCard className="activitycard"
                              imgLink="/images/bentley.png"
                              title="Bentley Systems"
                              role="Incoming Software Development Intern"
                              >
                    <p className="body-text">
                        Recently, I was accepted into Bentley Systems' summer internship
                        program! I excited to see where this opportunity has in store for
                        me in the future.
                    </p>
                </ActivityCard> */}

                <ActivityCard className="activitycard"
                              imgLink="/images/acm.png"
                              title="ACM @ UC San Diego🔷"
                              role="Technical Event Director"
                              date="2019.11 - 2020.6">
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
                              title="IEEE UC San Diego Branch💡"
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
                              title="StayLinked Corporation📗"
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
                <a href="https://github.com/MLH-Fellowship/babel-sandbox">
                    <img className="project-card" src="/images/babel.png"/>
                </a>
                <a href="https://github.com/garrettluu/routine.ly">
                    <img className="project-card" src="/images/routinely.png"/>
                </a>
                <a href="https://github.com/garrettluu/slearn">
                    <img className="project-card" src="/images/slearn.png"/>
                </a>
                <div className="scale flex-horizontal space-between flex-vertical-mobile">
                    <a href="https://github.com/garrettluu/stakk">
                        <img className="project-card project-card-small" src="/images/stakk.png" />
                    </a>
                    <a href="https://github.com/daniel-d-truong/web-waste">
                        <img className="project-card project-card-small" src="/images/webwaste.png" />
                    </a>
                </div>
                <p className="subheader-light subheader-black subheader-text">
                    For more, please check out my <a href="https://github.com/garrettluu">Github</a>!
                </p>
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
                {previews}
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
                a {
                    text-decoration: none;
                }
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

                @media only screen and (max-width: 850px) {
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

                .space-between {
                    justify-content: space-between;
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

                .subheader-light {
                    font-weight: 300;
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
                    margin-top: 0;
                    margin-bottom: 48px;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .project-card {
                    margin-top: 48px;
                    margin-left: auto;
                    margin-right: auto;
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
                    border-radius: 20px;
                    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)
                }

                .project-card:hover {
                    transform: scale(1.1);
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
                    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)
                }

                .social-icon:hover {
                    transform: scale(1.1);
                }

                a {
                    color: black;
                }

                p a {
                    color: tomato;
                }

                @media only screen and (max-width: 850px) {
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

                    .project-card {
                        width: 100%;
                        margin-top: 24px;
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

                @media only screen and (max-width: 650px) {
                    .project-card-small {
                        width: 100%;
                        height: auto;
                    }

                    .flex-vertical-mobile {
                        flex-direction: column;
                    }
                }

            `}
            </style>
        </Layout>
    );
};