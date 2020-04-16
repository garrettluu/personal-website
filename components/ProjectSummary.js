import React from 'react';

import SquareFrame from '../components/SquareFrame';

export default (props) => {
    
    return (
        <div className="container">
            <SquareFrame imgLink={props.imgLink}/>
            <h2 className="title">
                {props.title}
            </h2>
            <div className="fancy-rectangle small-fancy-rectangle"></div>
            <p className="body-text">
                {props.text}
            </p>
            <h3 className="tech-stack-header">
                Tech Stack:
            </h3>
            <p className="body-text italicized">
                <i>{props.tech}</i>
            </p>

            <style jsx>{`
                .container {
                    margin-left: 12px;
                    margin-right: 12px;

                }

                .title {
                    font-family: 'Oswald', sans-serif;
                    font-weight: 700;
                    font-size: 24px;

                    margin-top: 24px;
                    margin-bottom: 0;
                }

                .tech-stack-header {
                    font-family: 'Roboto', sans-serif;
                    font-weight: 500;
                }

                .small-fancy-rectangle {
                    width: 128px;

                    margin: 0;
                }

            `}
            </style>
        </div>
    );
}