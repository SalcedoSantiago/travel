import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <Flex
            justifyContent={['center', 'center', 'start']}
        >
            <Image
                cursor="pointer"
                src={logo}
                alt='Dan Abramov'
            />
        </Flex>
    )
}

export default Logo