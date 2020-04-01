import React, {useState, useEffect} from 'react';

export default (props) => {
    const PARALLAX_SCROLL_FACTOR = props.scrollFactor;
    const PARALLAX_SCROLL_OFFSET = props.scrollOffset;

    const [offset, setOffset] = useState(PARALLAX_SCROLL_OFFSET);

    let childrenRef = React.createRef();
    let initialOffset = 0;

    useEffect(() => {
        window.addEventListener('scroll', parallaxScroll);
        console.log(childrenRef);
        initialOffset = childrenRef.current.offsetTop; 

        return () => {window.removeEventListener('scroll', parallaxScroll);};
    });

    const parallaxScroll = () => {
        setOffset(window.pageYOffset * PARALLAX_SCROLL_FACTOR +     
            PARALLAX_SCROLL_OFFSET - (initialOffset * PARALLAX_SCROLL_FACTOR));
    }
    return (
        <div>
            {React.cloneElement(props.children, {
                ref: childrenRef,
                style: {
                    backgroundPositionY: offset
                }
            })}
        </div>
    );
}