/**
 * External dependencies
 */
import React from 'react'
import { Container, Stack, Box, Image, Text } from '@chakra-ui/react'

/**
 * Internal dependencies
 */
import logo from '../../assets/logo.png'
import Hero from '../Components/Hero';

const Header = () => {

    const links = ['destination', 'hotels', 'flights', 'booking', 'login', 'sin up'];

    return (
        <Container maxW={'6xl'} >
            <Stack direction={'column'} spacing={10} height={'100vh'}>

                <Stack direction={'row'} py={10} alignItems='center' justifyContent={'space-between'}>
                    <Image
                        cursor="pointer"
                        src={logo}
                        alt='Dan Abramov'
                    />
                    <Stack as="nav" direction={'row'} alignItems='center' spacing={10}>
                        {links.map((link) =>
                            <Text
                                key={link}
                                fontWeight={600}
                                textTransform='capitalize'
                                fontFamily={'Poppins'}
                                _hover={{ color: 'orange.500' }}
                                cursor='pointer'
                            >
                                {link}
                            </Text>
                        )}
                    </Stack>
                </Stack>
                <Hero />
            </Stack>


            
        </Container>
    )
}

export default Header