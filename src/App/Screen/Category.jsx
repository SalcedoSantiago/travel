import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import satelite from '../../assets/satelite.png';
import flight from '../../assets/flight.png';
import micro from '../../assets/micro.png';
import settings from '../../assets/settings.png';
import CategoryIcon from '../Components/CategoryIcon';


const Information = [
    {
        title: 'Calculated Weather ',
        desc: 'Built Wicket longer admire do barton vanity itself do in it.',
        image: satelite
    },
    {
        title: 'Best Flights',
        desc: 'Engrossed listening. Park gate sell they west hard for the.',
        image: flight
    },
    {
        title: 'Local Events',
        desc: 'Barton vanity itself do in it. Preferd to men it engrossed listening. ',
        image: micro
    },
    {
        title: 'Customization',
        desc: 'We deliver outsourced aviation services for military customers',
        image: settings
    },
]



export const Category = () => {

    return (
        <Stack direction={'column'} alignItems='center' spacing={20} py={6} position="relative" maxW={'100%'} overflow='hidden'>
            <CategoryIcon />
            <Flex justifyContent={'center'}>
                <Box textAlign={'center'}>
                    <Heading
                        textTransform={'uppercase'}
                        color={'gray.600'}
                        fontWeight={600}
                        fontSize={'lg'}
                        fontFamily="Poppins"
                        display={'block'}
                        pb={4}
                    >Category</Heading>
                    <Heading
                        fontFamily={'Volkhov'}
                        fontSize={'5xl'}
                        display={'block'}
                        textTransform={'capitalize'}
                        color={'#14183E'}
                    >
                        We Offer Best Services
                    </Heading>
                </Box>
            </Flex>
            <Stack direction={['column', 'column', 'row']} spacing={10} py={6}>
                {
                    Information.map(({ title, image, desc }, index) =>
                        <Stack
                            key={index}
                            position={'relative'}
                        >
                            <Box
                                bgColor="white"
                                zIndex={999}
                                spacing={3}
                                px={6}
                                py={8}
                                shadow={index == 1 ? 'lg' : 'none'}
                                rounded="2xl"
                            >
                                <Flex justifyContent={'center'} pb={6}>
                                    <Image
                                        src={image}
                                        w={'92px'}
                                        objectFit="contain"
                                        h={'78px'}
                                    />
                                </Flex>
                                <Heading
                                    py={3}
                                    textAlign={'center'}
                                    fontSize={'lg'}
                                    color={'#1E1D4C'}
                                    fontWeight={600}
                                >
                                    {title}
                                </Heading>

                                <Text
                                    color={'gray.500'}
                                    textAlign={'center'}
                                    fontFamily="Poppins"
                                    fontWeight={500}
                                    fontSize="16px"
                                >
                                    {desc}
                                </Text>
                            </Box>

                            {index == 1 &&
                                <Box
                                    zIndex={1}
                                    bottom={'-40px'}
                                    left="-25px"
                                    position={'absolute'}
                                    w={'100px'}
                                    h={'100px'}
                                    bgColor="orange.500"
                                    borderTopLeftRadius={'20px'}
                                    borderRightRadius={'20px'}
                                >
                                </Box>
                            }
                        </Stack>
                    )
                }

            </Stack>


        </Stack >
    )
}
