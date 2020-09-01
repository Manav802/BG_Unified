import React from 'react';
import { Button } from '@chakra-ui/core';
import Section from './Section';
import Title from './Title';
import Description from './Description';
import Row from './Row';
import Body from './Body';

function RenderSection({ title, titleStyle, color = "dark.500", align = "center", description, containerWidth = ["100%", "540px", "720px", "960px", "1140px"], descriptionStyle, endingButtontitle, endingButton, hoverButton, slider, sliderOption, gap = 4, rowDistance = 0, body, ...props }) {
    return (
        <>
            <Section containerWidth={containerWidth} color={color} align={align} {...props}>
                {title && <Title {...titleStyle}>{title}</Title>}
                {description && <Description {...descriptionStyle}>{description}</Description>}
                {body && <Row rowDistance={rowDistance}>
                    {body && body.map((b, index) => (
                        <Body key={index} gap={gap} {...b} />
                    ))}

                </Row>}
                {endingButton && <Row justify="flex-end"><Button {...endingButton} _hover={{ bg: "light.400", color: "primary.500" }}>{endingButtontitle}</Button></Row>}
            </Section>
        </>
    );
}

export default RenderSection;