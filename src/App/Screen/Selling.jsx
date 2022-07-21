/**
 * External dependencies
 */
import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { IoNavigate } from 'react-icons/io5'
/**
 * Internal dependencies
 */


const Selling = () => {
    return (
        <Stack
            direction={'column'}
            alignItems='center'
            spacing={'60px'}
            py={6}
            pt={'120px'}
            position='relative'
            maxW="100%"
            overflow={'hidden'}
        >
            <Flex justifyContent={'center'}>
                <Box textAlign={'center'}>
                    <Heading
                        textTransform={'capitalize'}
                        color={'gray.600'}
                        fontWeight={600}
                        fontSize={'lg'}
                        fontFamily="Poppins"
                        display={'block'}
                        pb={4}
                    >Top Selling</Heading>
                    <Heading
                        fontFamily={'Volkhov'}
                        fontSize={'5xl'}
                        display={'block'}
                        textTransform={'capitalize'}
                        color={'#14183E'}
                    >
                        Top Destinations
                    </Heading>
                </Box>
            </Flex>
            <Stack direction={['column', 'column', 'row']}  spacing={12} py={6}>
                {
                    [1, 2, 3].map((index) =>
                        <Stack
                            direction={'column'}
                            key={index}
                            shadow="lg"
                            zIndex={9999}
                            rounded={'2xl'}
                            bgColor="white"
                        >
                            <Image
                                h='350px'
                                objectFit={'cover'}
                                borderTopRadius="20px"
                                src={'https://www.caracteristicas.co/wp-content/uploads/2016/06/civilizacion-romana-e1558669365322.jpg'}
                            />
                            <Stack
                                px={5}
                                direction={'column'}
                                spacing={4}
                                pb={7}
                                pt={3}
                            >
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems='center' >
                                    <Text
                                        color={'#5E6282'}
                                        fontFamily="Poppins"
                                        fontWeight={500}
                                        fontSize="18px"
                                    >Rome, Italty</Text>
                                    <Text
                                        color={'#5E6282'}
                                        fontFamily="Poppins"
                                        fontWeight={500}
                                        fontSize="18px"
                                    >$5,42k</Text>
                                </Stack>
                                <Stack direction={'row'} alignItems='center'>
                                    <IoNavigate />
                                    <Text
                                        color={'#5E6282'}
                                        fontFamily="Poppins"
                                        fontWeight={500}
                                        fontSize="16px"
                                    >10 Days Trip</Text>
                                </Stack>
                            </Stack>

                        </Stack>
                    )
                }

            </Stack>
            <svg style={{ position: 'absolute', right: '-60px', top: "48%", bottom: '50%', zIndex: '1' }} width="98" height="254" viewBox="0 0 98 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.95816 14.2344C15.985 5.71795 33.7527 -7.37604 48.6094 8.37933C63.4661 24.1347 43.423 53.6228 31.5443 66.3974C25.6886 69.9459 13.4754 75.9784 11.4677 71.7202C8.95816 66.3974 7.45241 55.2196 28.0309 45.6387C41.248 39.961 69.7902 33.9286 78.2224 55.2196C82.0704 64.4457 82.7396 85.8787 54.6324 97.8017L19.4984 113.238M19.4984 113.238C6.11398 113.774 -13.1261 107.392 16.9888 77.5752C26.5252 72.9621 49.6133 63.6296 65.6746 63.2038C74.8763 65.1554 92.5772 74.8074 89.7665 97.8017C90.1011 102.415 83.8439 113.876 56.1382 122.819C49.7806 124.238 35.5597 127.183 29.5367 127.609L7.95439 130.803L19.4984 113.238ZM19.4984 113.238C28.2808 110.754 49.0085 106.531 61.6592 109.512C77.4727 113.238 83.7435 110.044 96.2913 130.803C98.4663 141.448 96.8936 163.272 73.2033 165.401C49.5129 167.53 34.2212 163.449 29.5367 161.143V141.448M29.5367 141.448C46.7691 143.045 83.7435 141.874 93.7818 124.415C98.6336 111.996 99.0017 86.6239 61.6592 84.4948C52.6248 84.8496 33.3513 85.9852 28.5329 87.6884L29.5367 125.48C47.1037 127.077 84.0446 134.635 91.2722 152.094C95.1202 162.207 96.3917 183.498 70.6937 187.756C61.1573 188.111 39.575 186.798 29.5367 178.708M29.5367 141.448V178.708M29.5367 141.448C40.4115 144.11 64.3696 151.455 73.2033 159.546C83.9108 168.417 99.604 190.418 76.7167 207.45C69.5225 210.112 50.4163 212.241 31.5443 199.466M29.5367 178.708L31.5443 199.466M29.5367 178.708C41.5827 187.224 66.1765 207.876 68.1841 222.354C69.0207 231.225 66.7788 249.713 51.119 252.694C47.1037 253.404 37.1658 253.333 29.5367 247.371L31.5443 199.466" stroke="#84829A" />
            </svg>
        </Stack >
    )
}

export default Selling