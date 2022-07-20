import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Components/Logo'

const Footer = () => {


    return (
        <Box pt={'120px'} w="100%">
            <Stack direction={'row'} w="100%">
                <Stack flex={1}>
                    <Logo />
                    <Text> Book your trip in minute, get full Control for much longer.</Text>
                </Stack>
                <Stack flex={1}>
                    <Heading fontSize={'xl'}>Company</Heading>
                    <Text>About</Text>
                    <Text>Careers</Text>
                    <Text>Mobile</Text>
                </Stack>

                <Stack flex={1}>
                    <Heading fontSize={'xl'}>Contact</Heading>
                    <Text>Help/FAQ</Text>
                    <Text>Press</Text>
                    <Text>Affilates</Text>
                </Stack>

                <Stack flex={1}>
                    <Heading fontSize={'xl'}>More</Heading>
                    <Text>Airlinefees</Text>
                    <Text>Airline</Text>
                    <Text>Low fare tips</Text>
                </Stack>

                <Stack flex={1}>
                    <Heading fontSize={'xl'}>More</Heading>
                    <Text>Discover our app</Text>
                    <Text>Airline</Text>
                    <Text>Low fare tips</Text>
                </Stack>
            </Stack>

            <Text py={6} textAlign={'center'}>All rights reserved@jadoo.co</Text>
        </Box>
    )
}

export default Footer