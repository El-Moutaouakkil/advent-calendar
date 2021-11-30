import React, { useEffect } from "react";

function debounce(fn, ms) {
    let timer;
    return (_) => {
        clearTimeout(timer);
        timer = setTimeout((_) => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

function useWindowDimensions() {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }, 200);

        window.addEventListener("resize", debouncedHandleResize);

        return () => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });
    return [dimensions.width, dimensions.height];
}

export default useWindowDimensions;
