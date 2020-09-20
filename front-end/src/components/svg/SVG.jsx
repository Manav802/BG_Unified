import React from 'react';
import { useTheme } from '@chakra-ui/core';
import { ReactSVG } from 'react-svg';

function SVG({color,hex="#fff", size = 12, src}) {
    const {colors, sizes} = useTheme()
    const [c, setColor] = React.useState(colors["black"][500])
    React.useEffect(() => {
        if(color){
            const col = colors[color.split(".")[0]][color.split(".")[1]] || colors["black"][500]
            setColor(col)
        }
        else{
            setColor(hex)
        }
        
    }, [color])
    return (
        <ReactSVG src={src} beforeInjection={(svg) => {
            svg.setAttribute('style', `fill: ${c};width: ${sizes[size] || size};height:${sizes[size] || size};`)
        }} ></ReactSVG>
    );
}

export default SVG;