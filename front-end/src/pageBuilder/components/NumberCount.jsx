import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/core';
import MyCount from '../../components/Countup/main';
import Head from 'next/head';

function NumberCount({count, digitColor = "primary.500", prefix, suffix, duration=2, title, titleSize, description, align="center", ...props}) {
    return (
        <Flex direction="column" align={align} {...props}>
            <Heading size="xl" fontFamily="Nexa Bold" color={digitColor}>
                <MyCount endPoint={count} prefix={prefix} suffix={suffix} duration={duration}></MyCount>
            </Heading>
            <Heading my={2} size={"lg" || titleSize} textAlign ={align}>{title}</Heading>
            <Text textAlign={align}>{description}</Text>
        </Flex>
    );
}

export default NumberCount;