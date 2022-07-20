/**
 * External dependencies
 */
import React from 'react'
import { Box, Heading, Stack, Text, Flex } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

/**
 * Internal dependencies
 */
import Link from '../Components/Link'
import Logo from '../Components/Logo'

const Footer = () => {


    return (
        <Box pt={'120px'} w="100%">
            <Stack direction={'row'} w="100%">
                <Stack >
                    <Logo />
                    <Text> Book your trip in minute, get full Control for much longer.</Text>
                </Stack>
                <Stack direction={'row'} alignItems='start' flex={1}>
                    <Stack flex={1}>
                        <Heading
                            fontWeight={700}
                            fontFamily="Poppins"
                            fontSize="21px"
                            pb={3}
                        >Company</Heading>
                        <Link>About</Link>
                        <Link>Careers</Link>
                        <Link>Mobile</Link>
                    </Stack>
                    <Stack flex={1}>
                        <Heading
                            fontWeight={700}
                            fontFamily="Poppins"
                            fontSize="21px"
                            pb={3}
                        >Contact</Heading>
                        <Link>Help/FAQ</Link>
                        <Link>Press</Link>
                        <Link>Affilates</Link>
                    </Stack>

                    <Stack flex={1}>
                        <Heading
                            fontWeight={700}
                            fontFamily="Poppins"
                            fontSize="21px"
                            pb={3}
                        >More</Heading>
                        <Link>Airlinefees</Link>
                        <Link>Airline</Link>
                        <Link>Low fare tips</Link>
                    </Stack>
                    <Stack flex={1} direction='column'>
                        <Flex alignItems={'center'} justifyContent='space-between'>
                            <Box>
                                <FaFacebookF />
                            </Box>
                            <Box>
                                <FaInstagram />
                            </Box>
                            <Box>
                                <FaTwitter />
                            </Box>
                        </Flex>
                    </Stack>
                </Stack>

            </Stack>

            <Text py={6} textAlign={'center'}>All rights reserved@jadoo.co</Text>
        </Box>
    )
}

export default Footer