import React from 'react';
import { SimpleGrid, Grid } from '@chakra-ui/core';

function Row({spacing = "16px", ...props}) {
    return (
        <Grid width="100%" gap={spacing} {...props}>

        </Grid>
    );
}

export default Row;