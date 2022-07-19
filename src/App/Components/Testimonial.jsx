import { Avatar, Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Testimonial = () => {
    return (
        <Stack
            direction={'column'}
            spacing={6}
            px={8}
            py={8}
            shadow="lg"
            maxW="500px"
            rounded={'xl'}
            position="relative"
            bgColor={'white'}
        >
            <Avatar
                position={'absolute'}
                name='Dan Abrahmov'
                src='https://bit.ly/dan-abramov'
                top={'-40px'}
                left={'-40px'}
                size='xl'
            />
            <Heading
                fontWeight={500}
                fontSize="16px"
                color="#5E6282"
                fontFamily={'Poppins'}
                lineHeight="2"
            >“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</Heading>
            <Box

            >
                <Text
                    fontWeight={600}
                    fontSize="18px"
                    color="#5E6282"
                    fontFamily={'Poppins'}
                    lineHeight="2"
                >Mike taylor</Text>
                <Text
                    fontWeight={500}
                    fontSize="14px"
                    color="#5E6282"
                    fontFamily={'Poppins'}
                    lineHeight="2"
                >Lahore, Pakistan</Text>
            </Box>
        </Stack>
    )
}

export default Testimonial