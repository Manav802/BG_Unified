import React from 'react';
import { Flex, Icon, Heading, Text } from '@chakra-ui/core';

function Feature({data, align="center", ...props}) {
    return (
        <Flex direction="column" align={align} {...props}>
            {data.image && <Image src={data.image} objectFit="cover" size={data.size}></Image>}
            {data.icon && <Icon src={data.image} size={data.size}></Icon>}
            <Heading my={4} size="xl" fontFamily="NunitoSans Bold">{data.title}</Heading>
            <Text>{data.description}</Text>
        </Flex>
    );
}

export default Feature;