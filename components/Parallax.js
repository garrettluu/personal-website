import React, {useState, useEffect} from 'react';

const Parallax = (props) => {
    const PARALLAX_SCROLL_FACTOR = props.scrollFactor ?? 0;
    const PARALLAX_SCROLL_OFFSET = props.scrollOffset ?? 0;

    const [offset, setOffset] = useState(PARALLAX_SCROLL_OFFSET);

    let childrenRef = React.createRef();
    let initialOffset = 0;

    useEffect(() => {
        window.addEventListener('scroll', parallaxScroll);
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

export default Parallax;