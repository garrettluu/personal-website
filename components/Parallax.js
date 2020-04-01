import React, {useState, useEffect} from 'react';

export default (props) => {
    const PARALLAX_SCROLL_FACTOR = props.scrollFactor;
    const PARALLAX_SCROLL_OFFSET = props.scrollOffset;

    const [offset, setOffset] = useState(PARALLAX_SCROLL_OFFSET);

    useEffect(() => {
        window.addEventListener('scroll', parallaxScroll);

        return () => {window.removeEventListener('scroll', parallaxScroll);};
    });

    const parallaxScroll = () => {
        setOffset(window.pageYOffset * PARALLAX_SCROLL_FACTOR +     
            PARALLAX_SCROLL_OFFSET);
    }
    return (
        <div>
            {React.cloneElement(props.children, {
                style: {
                    backgroundPositionY: offset
                }
            })}
        </div>
    );
}