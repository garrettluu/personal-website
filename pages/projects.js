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
                <div>
                    <h1 className="project-title">Babel Sandbox</h1>
                    <h2 className="tech-text">
                        Firebase, Flutter, Dart
                    </h2>
                    <p className="body-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nulla id egestas interdum. Sed vel ipsum blandit, fringilla lectus ac, aliquam tortor. Integer rutrum est vitae nisi dignissim, at porttitor sem mattis. Nullam at suscipit quam, et molestie felis. Nam eu consectetur magna, eget ornare erat. Curabitur eget efficitur purus. Praesent nec bibendum orci. Vestibulum commodo purus vitae nisl lobortis, eget convallis purus sodales. Vivamus sed neque lectus.
                    </p>
                    <p className="body-text">
                        Sed commodo lacus eget consequat gravida. Phasellus porttitor scelerisque mauris. Quisque et congue arcu, nec vulputate nunc. Vivamus ante tortor, tempor eu nunc et, viverra accumsan mauris. Phasellus velit nisl, vulputate eget arcu nec, ultrices tincidunt nibh. Suspendisse eget quam ultricies, facilisis ex a, euismod dui. Vestibulum diam lectus, ultricies sed tempus non, laoreet ut augue. Pellentesque rhoncus gravida metus, nec vulputate sem. Nunc non elementum urna. Donec cursus libero id laoreet semper. Integer condimentum mauris placerat turpis euismod, quis pellentesque leo sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget leo sit amet augue cursus cursus.
                    </p>
                    <img className="project-card" src="/images/routinely.png" />
                </div>
                <div>
                    <h1 className="project-title">Routine.ly</h1>
                    <h2 className="tech-text">
                        Firebase, Flutter, Dart
                    </h2>
                    <p className="body-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nulla id egestas interdum. Sed vel ipsum blandit, fringilla lectus ac, aliquam tortor. Integer rutrum est vitae nisi dignissim, at porttitor sem mattis. Nullam at suscipit quam, et molestie felis. Nam eu consectetur magna, eget ornare erat. Curabitur eget efficitur purus. Praesent nec bibendum orci. Vestibulum commodo purus vitae nisl lobortis, eget convallis purus sodales. Vivamus sed neque lectus.
                    </p>
                    <p className="body-text">
                        Sed commodo lacus eget consequat gravida. Phasellus porttitor scelerisque mauris. Quisque et congue arcu, nec vulputate nunc. Vivamus ante tortor, tempor eu nunc et, viverra accumsan mauris. Phasellus velit nisl, vulputate eget arcu nec, ultrices tincidunt nibh. Suspendisse eget quam ultricies, facilisis ex a, euismod dui. Vestibulum diam lectus, ultricies sed tempus non, laoreet ut augue. Pellentesque rhoncus gravida metus, nec vulputate sem. Nunc non elementum urna. Donec cursus libero id laoreet semper. Integer condimentum mauris placerat turpis euismod, quis pellentesque leo sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget leo sit amet augue cursus cursus.
                    </p>
                    <img className="project-card" src="/images/routinely.png" />
                </div>
                <div>
                    <h1 className="project-title">Slearn</h1>
                    <h2 className="tech-text">
                        Express, Node.js, React
                    </h2>
                    <p className="body-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nulla id egestas interdum. Sed vel ipsum blandit, fringilla lectus ac, aliquam tortor. Integer rutrum est vitae nisi dignissim, at porttitor sem mattis. Nullam at suscipit quam, et molestie felis. Nam eu consectetur magna, eget ornare erat. Curabitur eget efficitur purus. Praesent nec bibendum orci. Vestibulum commodo purus vitae nisl lobortis, eget convallis purus sodales. Vivamus sed neque lectus.
                    </p>
                    <p className="body-text">
                        Sed commodo lacus eget consequat gravida. Phasellus porttitor scelerisque mauris. Quisque et congue arcu, nec vulputate nunc. Vivamus ante tortor, tempor eu nunc et, viverra accumsan mauris. Phasellus velit nisl, vulputate eget arcu nec, ultrices tincidunt nibh. Suspendisse eget quam ultricies, facilisis ex a, euismod dui. Vestibulum diam lectus, ultricies sed tempus non, laoreet ut augue. Pellentesque rhoncus gravida metus, nec vulputate sem. Nunc non elementum urna. Donec cursus libero id laoreet semper. Integer condimentum mauris placerat turpis euismod, quis pellentesque leo sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget leo sit amet augue cursus cursus.
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
                  margin-left: 20%;
                  margin-right: 20%;
                }

                .project-title {
                    font-family: 'Oswald';
                    font-size: 48px;
                    font-weight: normal;
                }

                .project-card {
                    width: 812px;

                    margin-left: calc(50% - 256px/2 - 278px);
                    margin-right: calc(50% - 256px/2 - 278px);
                }

                .tech-text {
                   color: tomato;
                   margin-top: 30px;
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