import React from 'react';
import { useTheme } from '@chakra-ui/core';
import { ReactSVG } from 'react-svg';

function SVG({color= "black.500", size = 12, src}) {
    const {colors, sizes} = useTheme()
    const [c, setColor] = React.useState(colors["black"][500])
    React.useEffect(() => {
        const col = colors[color.split(".")[0]][color.split(".")[1]] || colors["black"][500]
        setColor(col)
    }, [color])
    return (
        <ReactSVG src={src} beforeInjection={(svg) => {
            svg.setAttribute('style', `fill: ${c};width: ${sizes[size] || size};height:${sizes[size] || size};`)
        }} ></ReactSVG>
    );
}

export default SVG;