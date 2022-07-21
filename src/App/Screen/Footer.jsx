/**
 * External dependencies
 */
import React from 'react'
import { Box, Heading, Stack, Text, Flex, Container } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

/**
 * Internal dependencies
 */
import Link from '../Components/Link'
import Logo from '../Components/Logo'
import GooglePlay from '../Components/GooglePlay'
import AppleStore from '../Components/AppleStore'

const Footer = () => {


    return (
        <Box pos='relative' bgGradient='linear(304deg, rgba(213,174,228,0.6278886554621849) 1%, rgba(255,255,255,0.3337710084033614) 4%, rgba(255,255,255,1) 9%, rgba(255,255,255,1) 31%)'>
            <Container maxW={'6xl'}>
                <Box pt={'120px'} w="100%">
                    <Stack direction={'row'} w="100%">
                        <Stack pr={'40px'} direction='column' spacing={6}>
                            <Logo />
                            <Text
                                fontWeight={500}
                                fontSize="14px"

                                color="#5E6282"
                                fontFamily={"Poppins"}
                            > Book your trip in minute, get full <br />Control for much longer.</Text>
                        </Stack>
                        <Stack direction={'row'} alignItems='start' flex={1}>
                            <Stack w={'170px'}>
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
                            <Stack w={'170px'}>
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

                            <Stack w={'170px'}>
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
                                <Flex alignItems={'center'} justifyContent='start' gap={5}>
                                    <Box
                                        cursor="pointer"
                                        px={3}
                                        py={3}
                                        borderRadius={999}
                                        color="black"
                                        bgColor="white"
                                        shadow="xl"
                                    >
                                        <FaFacebookF />
                                    </Box>
                                    <Box
                                        cursor="pointer"
                                        px={3}
                                        py={3}
                                        borderRadius={999}
                                        color="white"
                                        bgColor="white"
                                        shadow="xl"
                                        bgGradient={'linear(90deg, hsla(344, 97%, 63%, 1) 0%, hsla(232, 90%, 59%, 1) 100%)'}
                                    >
                                        <FaInstagram />
                                    </Box>
                                    <Box
                                        cursor="pointer"
                                        px={3}
                                        py={3}
                                        borderRadius={999}
                                        color="black"
                                        bgColor="white"
                                        shadow="xl"
                                    >
                                        <FaTwitter />
                                    </Box>
                                </Flex>
                                <Text
                                    pt={5}
                                    textAlign="start"
                                    fontWeight={500}
                                    fontSize="20px"
                                    color="#5E6282"
                                    fontFamily={"Poppins"}
                                >Discover our app</Text>
                                <Stack direction={'row'} alignItems='center' spacing={2}>
                                    <GooglePlay />
                                    <AppleStore />
                                </Stack>
                            </Stack>
                        </Stack>

                    </Stack>
                    <Box py="50px">
                        <Text
                            py={6}
                            textAlign={'center'}
                            fontWeight={500}
                            fontSize="17px"
                            color="#5E6282"
                            fontFamily={"Poppins"}
                        >All rights reserved@jadoo.co</Text>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer