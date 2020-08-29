import React from 'react';
import { Box,Text,List,ListIcon, ListItem,Heading  } from '@chakra-ui/core';

function MyList({fontSize = "28px", ...data}) {
    //Ex - <Lists title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" items={["tempor incididunt u" ,"dolore magna aliqua."]}/>
            return (
                <>
                    <Heading 
                    mx={1}
                    fontSize={fontSize}>
                        {data.title}
                    </Heading>
                    <List p={1} spacing={2}>
                        {data.items.map((item, index) => {
                        return (
                            <ListItem>
                            <ListIcon icon={data.bullet ||"check"}  color={data.color || "primary.500"} />
                            {item}
                            </ListItem>
                        );
                        })}
                    </List>
                </>
            );
        
}

export default MyList;
