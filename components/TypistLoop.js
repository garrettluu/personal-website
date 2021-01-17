import React, {useState, useEffect} from 'react';
import Typist from 'react-typist';

const TypistLoop = (props) => {
    const words = props.words;
    const [typing, setTyping] = useState(true);

    const doneTyping = () => {
        setTyping(false);
    };

    useEffect(() => {
        setTyping(true);
    }, [typing]);

    return (
        <div>
            {typing ? (<Typist cursor={{
                show: false,
                blink: false,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 1000,
            }}
                               onTypingDone={doneTyping}>
                <Typist.Delay ms={1000}/>
                <div className="flex-horizontal">
                    {words.map((word) => (
                            <div>
                                <h1 className="intro-header">
                                    {word}
                                </h1>
                                <Typist.Backspace count={word.length} delay={1500}/>
                                <Typist.Delay ms={1000}/>
                            </div>
                        )
                    )}
                </div>
            </Typist>) : ""}
            <style jsx>{`
                .flex-horizontal {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                }
                
                .intro-header {
                    font-family: 'Oswald', sans-serif;
                    font-weight: 400;
                    font-size: 48px;

                    margin-top: 0;
                    margin-bottom: 0;
                }

                @media only screen and (max-width: 850px) {
                    .intro-header {
                        font-size: 30px;
                    }
                }
            `}
            </style>
        </div>
    );
};

export default TypistLoop;