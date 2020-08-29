import React from 'react';
import {List,ListIcon, ListItem,Heading  } from '@chakra-ui/core';

function MyList({data}) {
    //Ex - <Lists title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" items={["tempor incididunt u" ,"dolore magna aliqua."]}/>
            return (
                <>
                    <Heading 
                    fontSize={data.fontSize || "28px"}>
                        {data.title}
                    </Heading>
                    <List mt = {4} styleType={data.styleType} spacing={2}>
                        {data.items.map((item, index) => {
                        return (
                            <ListItem>
                                {data.styleType?"": <ListIcon icon={data.icon ||"check"}  color={data.color || "primary.500"} />}
                            {item}
                            </ListItem>
                        );
                        })}
                    </List>
                </>
            );
        
}

export default MyList;
