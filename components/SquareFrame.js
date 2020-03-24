import React from 'react';

export default (props) => {
    return (
        <div className="frame">
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
            `}
            </style>
        </div>
    );
};