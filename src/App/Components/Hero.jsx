/**
 * External dependencies
 */
import React from 'react';
import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { BiPlay } from "react-icons/bi";

/**
 * Internal dependencies
 */
import heroImage from '../../assets/hero.png'


const Hero = () => {
    return (
        <Stack py={6} flex="1">
            <Stack direction={'row'} alignItems='center'>
                <Box w={'50%'}>
                    <Heading
                        as='h2'
                        textTransform={'uppercase'}
                        color={'orange.600'}
                        fontSize="lg"
                        pb={4}
                        fontFamily="Poppins"
                        fontWeight={800}
                    >Best Destinations around the world</Heading>
                    <Heading
                        py={5}
                        fontSize={'7xl'}
                        lineHeight={'.9'}
                        color="#181E4B"
                        letterSpacing={'-0.04em'}
                        fontFamily="Volkhov"
                    >
                        Travel, enjoy
                        and live a new
                        and full life
                    </Heading>

                    <Text
                        fontFamily={'Poppins'}
                        fontSize="16px"
                        color="#5E6282"
                        fontWeight={500}
                    >
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                    </Text>

                    <Stack direction={'row'} alignItems='center' py={10} spacing={9}>
                        <Button
                            color="white"
                            padding={7}
                            colorScheme='orange'
                            bgColor={'#F1A501'}
                            lineHeight={1}
                        >
                            Find out more
                        </Button>
                        <Button
                            borderRadius={999}
                            py={7}
                            px={5}
                            colorScheme="orange"
                        >
                            <BiPlay
                                fontSize={20}
                            />
                        </Button>
                    </Stack>
                </Box>
                <Box>
                    <Image
                        src={heroImage}
                    />
                </Box>
            </Stack>

        </Stack>
    )
}

export default Hero