import React from 'react';
import { Box,Text,List,ListIcon, ListItem,Heading  } from '@chakra-ui/core';

function Lists({fontSize = "28px", ...props}) {
    //Ex - <Lists title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" items={["tempor incididunt u" ,"dolore magna aliqua."]}/>
            return (
                <Box>
                    <Heading 
                    mx={1}
                    fontFamily="Nexa Bold" 
                    fontSize={fontSize} {...props}>
                        {props.title}
                    </Heading>
                    <List p={1} spacing={2}>
                        {props.items.map((item, index) => {
                        return (
                            <ListItem>
                            <ListIcon icon={props.icon||"check"}  color={props.color || "primary.500"} />
                            {item}
                            </ListItem>
                        );
                        })}
                    </List>
                </Box>
            );
        
}

export default Lists;
