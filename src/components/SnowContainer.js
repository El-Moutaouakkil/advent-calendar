import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import useWindowDimensions from "./useWindowDimensions";

function SnowContainer() {
    const [width, height] = useWindowDimensions();
    const [snowFallWidth, setSnowFallWidth] = useState("100px");
    useEffect(() => {
        if (width <= 1024 && width < height) {
			console.log(width);
            setSnowFallWidth(width * 2 + "px");
        }
    }, [width, height]);

    return (
        <Snowfall style={{ width: snowFallWidth }} />
        // <div></div>
    );
}

export default SnowContainer;
