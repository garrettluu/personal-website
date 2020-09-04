import React from 'react';

export default (props) => {
    const DEFAULT_IMAGE = "./images/title_thumbnail_1.jpg";
    return (
        <a className={`card ${props.className}`}
           href={"/blog/" + props.link}>
            <div>
                <img className="icon" src={props.imgLink ? props.imgLink : DEFAULT_IMAGE}/>
            </div>
            <div className="info">
                <h2 className="title">
                    {props.title}
                </h2>
                <div className="role-date">
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
                    text-decoration: none;
                    color: black;

                    margin-top: 48px;
                    margin-bottom: 48px;
                    margin-left: ${props.margin};
                    margin-right: ${props.margin};

                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

                    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
                }

                .card:hover {
                    transform: scale(1.1);
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

                .date {
                    margin: 0;
                    font-weight: 300;
                    font-size: 18px;
                    color: tomato;
                }

                @media only screen and (max-width: 850px) {
                    .card {
                        grid-template-columns: 128px auto;
                    }
                    .icon {
                        width: 120px;
                        height: 120px;
                    }
                }

            `}
            </style>
        </a>
    );
}