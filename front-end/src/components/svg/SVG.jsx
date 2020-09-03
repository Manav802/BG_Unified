import React from 'react';
import { useTheme } from '@chakra-ui/core';
import { ReactSVG } from 'react-svg';

function SVG({color, size = 96, src}) {
    const {colors, sizes} = useTheme()
    const [c, setColor] = React.useState(colors["primary"][500])
    React.useEffect(() => {
        const col = colors[color.split(".")[0]][color.split(".")[1]] || colors["primary"][500]
        setColor(col)
    }, [color])
    return (
        <ReactSVG src={src} beforeInjection={(svg) => {
            svg.setAttribute('viewport', `0 0 ${size} ${size}`)
            svg.setAttribute('style', 'rect')
            svg.se
        }} ></ReactSVG>
    );
}

export default SVG;