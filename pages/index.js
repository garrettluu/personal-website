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

            `}
            </style>
        </Layout>
    );
};