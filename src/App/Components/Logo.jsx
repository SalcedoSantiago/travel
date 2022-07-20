import React from 'react'
import { Box, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <Box>
            <Image
                cursor="pointer"
                src={logo}
                alt='Dan Abramov'
            />
        </Box>
    )
}

export default Logo