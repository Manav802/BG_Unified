import React from 'react';
import { Button } from '@chakra-ui/core';
import Section from './Section';
import Title from './Title';
import Description from './Description';
import Row from './Row';
import Body from './Body';
import Link from 'next/link';

function RenderSection({ title,typeWriter_title, titleStyle, color = "dark.500", align = "center", description, containerWidth = ["100%", "100%", "720px", "960px", "1140px"], descriptionStyle, endingButtonTitle, endingButton, slider,endingButtonLink, sliderOption, gap = 4, rowDistance = 0, body, ...props }) {
    return (
        <>
            <Section containerWidth={containerWidth} color={color} align={align} {...props}>
                {title && <Title {...titleStyle}>{title}</Title>}
                {typeWriter_title && <Title {...titleStyle}><span>{typeWriter_title.before}</span><span>{typeWriter_title.typed}</span><span>{typeWriter_title.after}</span></Title>}
                {description && <Description {...descriptionStyle}>{description}</Description>}
                {body && <Row rowDistance={rowDistance}>
                    {body && body.map((b, index) => (
                        <Body key={index} gap={gap} {...b} />
                    ))}

                </Row>}
                {endingButton && <Row mt="2rem"><Link href={"/" + endingButtonLink}><Button {...endingButton}>{endingButtonTitle}</Button></Link></Row>}
            </Section>
        </>
    );
}

export default RenderSection;