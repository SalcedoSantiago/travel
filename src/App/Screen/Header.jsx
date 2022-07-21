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
import decore from '../../assets/decore.png';

const Header = () => {

    const links = ['destination', 'hotels', 'flights', 'booking', 'login', 'sin up'];

    return (
        <Box pos='relative' bgGradient='linear(104deg, rgba(213,174,228,0.6278886554621849) 1%, rgba(255,255,255,0.3337710084033614) 4%, rgba(255,255,255,1) 9%, rgba(255,255,255,1) 31%)'>
            <Box bgImage={decore} w={'704px'} h={'724px'} pos="absolute" right={0} zIndex={1} />
            <Container maxW={'6xl'} >
                <Stack direction={'column'} spacing={10} height={'100vh'} zIndex={2} pos='relative' >
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
                                    fontSize="17px"
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
        </Box>

    )
}

export default Header