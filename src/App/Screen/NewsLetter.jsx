/**
 * External dependencies
 */
import React from 'react'
import { Heading, Stack, Box, InputGroup, InputLeftAddon, Input, Button, } from '@chakra-ui/react'
import { IoMailOutline } from 'react-icons/io5';
/**
 * Internal dependencies
 */
import imageNewletter from '../../assets/newsletter.png';
import SendIcon from '../Components/SendIcon';

//DFD7F9

const NewsLetter = () => {


    return (
        <Box py={6} pb={'100px'} position='relative'>
            <SendIcon />
            <Stack
                h={"407px"}
                direction={'column'}
                alignItems='center'
                justifyContent={'center'}
                bgImage={imageNewletter}
                bgPosition='center center'
                bgSize={'cover'}
                bgColor={'#dfd7f9c8'}
                // bgGradient='linear-gradient(to-l, #DFD7F9 , #8165e630)'
                rounded="2xl"
                px={10}
                py={10}
                borderTopLeftRadius={'100px'}
                spacing="30px"
            >
                <Heading
                    textAlign={'center'}
                    color="#5E6282"
                    fontFamily={'Poppins'}
                    fontSize={'xl'}
                    maxW='500px'
                    lineHeight={2}
                    fontWeight={600}
                >
                    Subscribe to get information, latest news and other
                    interesting offers about Cobham
                </Heading>
                <Stack direction={['column','column','row']} alignItems='center' py={6}>
                    <InputGroup minW="auto" >
                        <InputLeftAddon
                            children={<IoMailOutline />}
                            bgColor='white'
                            border={'none'}
                            h="68px"
                            rounded="2xl"
                            // px={3}
                            fontSize={'18px'}
                        />
                        <Input
                            type='text'
                            placeholder='Your Email'
                            bgColor={'white'}
                            border={'none'}
                            h="68px"
                            rounded="2xl"
                            fontFamily={'Poppins'}
                            color={'#39425D'}
                        />

                    </InputGroup>

                    <Button
                        h="68px"
                        colorScheme={'orange'}
                        px={6}
                        w={'180px'}
                        // bgColor="background: linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)"
                        bgGradient='linear(to-r, #FF946D, #FF7D68)'
                    >
                        Subscribe
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}


export default NewsLetter