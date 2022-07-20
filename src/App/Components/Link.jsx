import { Text } from '@chakra-ui/react'
import React from 'react'

const Link = ({ children }) => {
    return (
        <Text
            fontWeight={500}
            fontSize="18px"
            color="#5E6282"
            fontFamily={"Poppins"}
            cursor="pointer"
        >{children}</Text>
    )
}

export default Link