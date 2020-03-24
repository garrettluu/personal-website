import React from 'react';

export default (props) => {
    return (
        <div className="frame">
            <img src={props.imgLink}></img>

            <style jsx>{`
                .frame {
                    width: 256px;
                    height: 256px;
                    margin: 24px;
                }

                img {
                    width: 232px;
                    height: 232px;

                    object-fit:cover;
                }
            `}
            </style>
        </div>
    );
};