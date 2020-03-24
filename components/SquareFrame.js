import React, { useState, useEffect } from 'react';

export default (props) => {
    const [mount, didMount] = useState(false);
    useEffect(() => {
        didMount(true);
    });

    return (
        <div className={`frame fade-in ${mount && 'visible'}`}>
            <img src={props.imgLink}></img>

            <style jsx>{`
                .frame {
                    display: flex;

                    width: 256px;
                    height: 256px;
                    margin: 12px;

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