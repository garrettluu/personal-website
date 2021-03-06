import React from 'react';

export default (props) => {
    return (
        <div className={`card ${props.className}`}>
            <div className="icon-container">
                <img className="icon" src={props.imgLink}></img>
            </div>
            <div className="info">
                <h2 className="title">
                    {props.title}
                </h2>
                <div className="role-date">
                    <h3 className="role">
                        {props.role}
                    </h3>
                    <h3 className="date">
                        {props.date}
                    </h3>
                </div>
                {props.children}
            </div>

            <style jsx>{`
                .card {
                    display: grid;
                    grid-template-columns: 256px auto;

                    margin-top: 48px;
                    margin-bottom: 48px;
                    margin-left: ${props.margin};
                    margin-right: ${props.margin};

                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
                }

                .icon-container {
                    margin: auto;
                }

                .icon {
                    object-fit: cover;
                    width: 200px;
                    height: 200px;
                    
                    margin: 28px;
                }

                .info {
                    margin: 28px;
                }

                .role-date {
                    display: flex;
                    flex-direction: horizontal;

                    font-family: 'Oswald', sans-serif;
                }

                .title {
                    font-family: 'Oswald', sans-serif;
                    font-weight: 500;
                    font-size: 24px;

                    margin: 0;
                }

                .role {
                    margin: 0;
                    margin-right: 8px;
                    font-weight: 300;
                    font-size: 18px;
                }

                .date {
                    margin: 0;
                    font-weight: 300;
                    font-size: 18px;
                    color: tomato;
                }

                @media only screen and (max-width: 650px) {
                    .card {
                        grid-template-columns: none;
                        grid-template-rows: 148px auto;
                        margin-top: 24px;
                        margin-bottom: 24px;
                    }
                    .icon {
                        width: 120px;
                        height: 120px;
                    }
                }

            `}
            </style>
        </div>
    );
}