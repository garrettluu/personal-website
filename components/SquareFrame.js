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

                    margin: ${props.margin};

                    background-color: white;
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

                    z-index: 2;
                }

                img {
                    margin: 12px;
                    width: 232px;
                    height: 232px;

                    object-fit:cover;
                }

                @media only screen and (max-width: 850px) {
                    // .frame {
                    //     margin: 4px;
                    // }

                    img {
                        margin: 8px;
                        width: 96px;
                        height: 96px;
                    }
                }

                .fade-in {
                    opacity: 0;
                }

                .fade-in.visible {
                    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
                    opacity: 1;
                }
            `}
            </style>
        </div>
    );
};