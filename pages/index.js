import React from 'react';
import Layout from '../components/Layout';
import SquareFrame from '../components/SquareFrame';

export default () => {
    return (
        <Layout>
            <div className="header">
                <p className="header-text">
                    Garrett Luu
                    <div className="fancy-rectangle"></div>
                </p>
            </div>
            <div className="square-frame-container">
                <SquareFrame imgLink="/images/title_thumbnail_1.jpg"/>
                <SquareFrame imgLink="/images/title_thumbnail_2.jpg"/>
                <SquareFrame imgLink="/images/title_thumbnail_3.jpg"/>
            </div>

            <p className="body-text intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nulla id egestas interdum. Sed vel ipsum blandit, fringilla lectus ac, aliquam tortor. Integer rutrum est vitae nisi dignissim, at porttitor sem mattis. Nullam at suscipit quam, et molestie felis. Nam eu consectetur magna, eget ornare erat. Curabitur eget efficitur purus. Praesent nec bibendum orci. Vestibulum commodo purus vitae nisl lobortis, eget convallis purus sodales. Vivamus sed neque lectus.

                Sed commodo lacus eget consequat gravida. Phasellus porttitor scelerisque mauris. Quisque et congue arcu, nec vulputate nunc. Vivamus ante tortor, tempor eu nunc et, viverra accumsan mauris. Phasellus velit nisl, vulputate eget arcu nec, ultrices tincidunt nibh. Suspendisse eget quam ultricies, facilisis ex a, euismod dui. Vestibulum diam lectus, ultricies sed tempus non, laoreet ut augue. Pellentesque rhoncus gravida metus, nec vulputate sem. Nunc non elementum urna. Donec cursus libero id laoreet semper. Integer condimentum mauris placerat turpis euismod, quis pellentesque leo sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget leo sit amet augue cursus cursus.
            </p>
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

                .fancy-rectangle {
                    width: 362px;
                    height: 8px;
                    background-color: tomato;
                }

                .square-frame-container {
                    position: absolute;
                    top: 383px;
                    width: 100%;

                    display: flex;
                    flex-direction: horizontal;
                    justify-content: center;

                    margin: 0 auto;
                }

                .body-text {
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                }

                .intro {
                    margin-top: calc(128px + 45px);
                    margin-left: calc(50% - 256px/2 - 278px);
                    margin-right: calc(50% - 256px/2 - 278px);
                }

            `}
            </style>
        </Layout>
    );
};