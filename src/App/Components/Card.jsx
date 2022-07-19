/**
 * External dependencies
 */
import React from 'react'
import { Stack, Box, Text, Image, Heading, Button, Flex, Progress, } from '@chakra-ui/react';
import { FaLeaf, FaTelegramPlane, FaRegMap, FaRegBuilding, FaRegHeart } from 'react-icons/fa';
/**
 * Internal dependencies
 */

import GirlImage from '../../assets/girl.png'


const Card = () => {
    return (
        <Stack direction="column" bgColor={'white'} py={7} px={6} borderRadius="20px" spacing={8} shadow="2xl">
            <Image
                src={GirlImage}
                w="100%"
                borderRadius={'15px'}
            />
            <Box>
                <Heading fontSize={'lg'} color="#080809" fontWeight={500} fontFamily="Poppins">Trip To Greece</Heading>
                <Text
                    fontWeight={500}
                    fontSize="16px"
                    color="#5E6282"
                    py={3}
                    fontFamily={'Poppins'}
                >
                    14-29 June | by Robbin joseph
                </Text>

                <Stack direction={'row'} alignItems='center' pt={2} spacing={3} color="gray.800">
                    <Box
                        bgColor={'gray.100'}
                        color="gray.500"
                        p={3}
                        borderRadius={9999}
                        cursor="pointer"
                    >
                        <FaLeaf />
                    </Box>
                    <Box
                        bgColor={'gray.100'}
                        p={3}
                        borderRadius={9999}
                        color="gray.500"
                        cursor="pointer"
                    >
                        <FaRegMap />
                    </Box>
                    <Box
                        bgColor={'gray.100'}
                        p={3}
                        borderRadius={9999}
                        color="gray.500"
                        cursor="pointer"
                    >
                        <FaTelegramPlane />
                    </Box>
                </Stack>

                <Stack
                    py={5}
                    direction="row"
                    align={'center'}
                    justifyContent='space-between'
                    px={1}
                    position={'relative'}
                >
                    <Stack direction={'row'} alignItems="center" >
                        <FaRegBuilding
                            color="#5E6282"
                        />
                        <Text
                            fontWeight={500}
                            fontSize="16px"
                            color="#5E6282"
                            fontFamily={'Poppins'}
                            lineHeight={1}
                        >24 people going</Text>
                    </Stack>
                    <Box>
                        <FaRegHeart
                            fontSize={'20px'}
                            color={'#4152CA'}
                            cursor="pointer"
                        />
                        <Stack
                            direction={'row'}
                            position="absolute"
                            px={3}
                            py={4}
                            bgColor="white"
                            borderRadius={'15px'}
                            spacing={4}
                            w="300px"
                            top={'-150px'}
                            left={'50%'}
                            shadow="2xl"
                            right={'50%'}
                            flex={1}
                        >
                            <Image
                                borderRadius='full'
                                boxSize='80px'
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                            />
                            <Box>
                                <Text
                                    fontWeight={500}
                                    fontSize="16px"
                                    color="#5E6282"
                                    fontFamily={'Poppins'}
                                    lineHeight={1}
                                    py={2}
                                >Ongoing</Text>
                                <Heading pb={4} fontSize={'lg'} color="#080809" fontWeight={500} fontFamily="Poppins">Trip To Rome</Heading>
                                <Flex
                                    alignItems={'center'}
                                    justifyContent="start"
                                    pb={2}
                                    spacing={2}
                                >
                                    <Text
                                        color="purple.400"
                                        fontWeight={500}
                                        fontSize="14px"
                                        fontFamily={'Poppins'}
                                    >40%</Text>
                                    <Text
                                        color="#080809"
                                        fontWeight={500}
                                        fontSize="14px"
                                        pl={1}
                                        fontFamily={'Poppins'}
                                    >completed</Text>
                                </Flex>
                                <Progress  borderRadius={7} mb={4} value={40} colorScheme='purple' />
                            </Box>


                        </Stack>
                    </Box>


                </Stack>
            </Box>
        </Stack>
    )
}

export default Card