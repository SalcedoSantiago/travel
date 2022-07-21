/**
 * External dependencies
 */
import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { FaLayerGroup, FaSwimmer, FaCar } from 'react-icons/fa';

/**
 * Internal dependencies
 */
import Badget from '../Components/Badget';
import Card from '../Components/Card';

const Trip = () => {
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
            <Stack direction={['column', 'column', 'row']}  w="100%" alignItems={'center'}>
                <Box w={['100%', '100%', '50%']}>
                    <Heading
                        textTransform={'capitalize'}
                        color={'gray.500'}
                        fontWeight={600}
                        fontSize={'lg'}
                        fontFamily="Poppins"
                        display={'block'}
                        pb={4}
                    >Easy and Fast</Heading>
                    <Heading
                        fontFamily={'Volkhov'}
                        fontSize={'5xl'}
                        display={'block'}
                        textTransform={'capitalize'}
                        color={'#14183E'}
                    >
                        Book your next trip
                        <br />
                        in 3 easy steps
                    </Heading>
                    <Stack direction={'column'} py={6} spacing={4}>
                        <Badget
                            icon={<FaLayerGroup />}
                            colorBox={'orange.300'}
                            title="Choose Destination"
                        />
                        <Badget
                            icon={<FaSwimmer />}
                            colorBox={'red.300'}
                            title="Make Payment"
                        />
                        <Badget
                            icon={<FaCar />}
                            colorBox={'blue.500'}
                            title="Reach Airport on Selected Date"
                        />
                    </Stack>


                </Box>
                <Flex justifyContent={'center'} w="50%">
                    <Card />
                </Flex>
            </Stack>

        </Stack >
    )
}

export default Trip