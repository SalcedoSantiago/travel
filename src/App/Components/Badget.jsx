/**
 * External dependencies
 */
import React from 'react'
import { Box, Stack, Text, } from '@chakra-ui/react';

/**
 * Internal dependencies
 */
import { FaCar } from "react-icons/fa";

const Badget = ({ colorBox, title ,icon}) => {

    return (
        <Stack direction="row" alignItems={'center'} spacing={6}>
            <Box bgColor={colorBox} p={5} borderRadius={'15px'} color="white">
                {icon}
            </Box>
            <Box maxW={'330px'}>
                <Text
                    fontWeight={700}
                    fontSize="16px"
                    color="#5E6282"
                    fontFamily={'Poppins'}
                >
                    {title}
                </Text>
                <Text
                    fontWeight={400}
                    fontSize="16px"
                    color="#5E6282"
                    fontFamily={'Poppins'}
                >
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Urna, tortor tempus. </Text>
            </Box>
        </Stack>
    )
}

export default Badget