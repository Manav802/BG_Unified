import React from 'react';
import { Button,Box } from '@chakra-ui/core';
import Section from './Section';
import Title from './Title';
import Description from './Description';
import Row from './Row';
import Body from './Body';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

function RenderSection({ title, typeWriter_title, titleStyle, color = "dark.500", align = "center", description, containerWidth = ["100%", "100%", "720px", "960px", "1140px"], descriptionStyle, endingButtonTitle, endingButton, slider, endingButtonLink, sliderOption, gap = 4, rowDistance = 0, body, ...props }) {
    return (
        <>
            <Section containerWidth={containerWidth} color={color} align={align} {...props}>
                {title && <Title {...titleStyle}>{title}</Title>}
                {typeWriter_title && <Title {...titleStyle}>
                <Box  justifyContent={align} className="d-flex flex-lg-row flex-column text-center">
                    <span>{typeWriter_title.before}</span>
                    <Typewriter options={{
                        strings: typeWriter_title.typed,
                        autoStart: true,
                        loop: true
                    }}></Typewriter>&nbsp;
                    {typeWriter_title.after}
                </Box>
                </Title>}
                {description && <Description {...descriptionStyle}>{description}</Description>}
                {body && <Row rowDistance={rowDistance}>
                    {body && body.map((b, index) => (
                        <Body key={index} gap={gap} {...b} />
                    ))}

                </Row>}
                {endingButtonTitle && <Row mt="2rem"><Link href={"/" + endingButtonLink}><Button {...endingButton}>{endingButtonTitle}</Button></Link></Row>}
            </Section>
        </>
    );
}

export default RenderSection;