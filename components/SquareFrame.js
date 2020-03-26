import React, { useState, useEffect } from 'react';

/**
 * Picture with square frame. 240x240px image with 16px margin (256x256px total)
 */
export default (props) => {
    // State hook to track if component has mounted
    const [mount, didMount] = useState(false);

    // componentDidMount
    useEffect(() => {
        didMount(true);
    });

    return (
        // Make the fram fade in and become visible once component has mounted
        <div className={`frame fade-in ${mount && 'visible'}`}>
            <img src={props.imgLink}></img>

            <style jsx>{`
                .frame {
                    display: flex;

                    width: 256px;
                    height: 256px;
                    margin: ${props.margin};

                    background-color: white;
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

                    z-index: 2;
                }

                img {
                    margin: auto;
                    width: 232px;
                    height: 232px;

                    object-fit:cover;
                }

                .fade-in {
                    opacity: 0;
                }

                .fade-in.visible {
                    transition: opacity .25s ease-in;
                    opacity: 1;
                }
            `}
            </style>
        </div>
    );
};