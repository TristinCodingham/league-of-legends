import React from 'react';

export default function useScroll() {
    const [offset, setOffset] = React.useState(window.pageYOffset);
    const handleScroll = () => {
        setOffset(window.pageYOffset);
    }

    React.useEffect(() => {
        window.onscroll = handleScroll;
    }, [offset]);
    
    return {offset};
}
