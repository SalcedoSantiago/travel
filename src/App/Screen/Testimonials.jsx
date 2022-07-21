/**
 * External dependencies
 */
import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { FaChevronUp, FaChevronDown, FaCircle } from 'react-icons/fa';

/**
 * Internal dependencies
 */
import Badget from '../Components/Badget';
import Card from '../Components/Card';
import Testimonial from '../Components/Testimonial';

const Testimonials = () => {
    return (
        <Stack
            direction={'column'}
            alignItems='center'
            spacing={'60px'}
            py={6}
            pt={'120px'}
            position='relative'
            w="100%"
        >
            <Stack direction={['column', 'column', 'row']} w="100%" alignItems={'center'} >
                <Box w={['100%','100%','50%']}>
                    <Heading
                        textTransform={'capitalize'}
                        color={'gray.500'}
                        fontWeight={600}
                        fontSize={'lg'}
                        fontFamily="Poppins"
                        display={'block'}
                        pb={4}
                    >Testimonials</Heading>
                    <Heading
                        fontFamily={'Volkhov'}
                        fontSize={'5xl'}
                        display={'block'}
                        textTransform={'capitalize'}
                        color={'#14183E'}
                    >
                        What people say
                        <br />
                        about Us.
                    </Heading>

                    <Stack direction={'row'} justifyContent={['center','center','start']} spacing={6} py={'50px'}>
                        <FaCircle cursor="pointer" fontSize={'12px'} />
                        <FaCircle cursor="pointer" fontSize={'12px'} color={'#BCB7C2'} />
                        <FaCircle cursor="pointer" fontSize={'12px'} color={'#BCB7C2'} />
                    </Stack>
                </Box>
                <Flex justifyContent={'center'} w={['100%','100%','50%']}>
                    <Stack direction={'row'} alignItems='center' spacing={6}>
                        <Testimonial />
                        <Stack pl={6} direction='column' spacing={6} zIndex={9999}>
                            <FaChevronUp  color={'#BCB7C2'} cursor="pointer" />
                            <FaChevronDown cursor="pointer" />
                        </Stack>

                    </Stack>

                </Flex>
            </Stack>

        </Stack >
    )
}

export default Testimonials