import { Stack, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'

const GooglePlay = () => {
    return (
        <Stack cursor={'pointer'} px={4} py={3} borderRadius="25px" alignItems={'center'} direction="row" spacing={3} bgColor="black">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_521)">
                    <path d="M11.5075 10.0018L1.46393 19.673C0.993605 19.3516 0.714365 18.817 0.719303 18.2473V1.75626C0.714365 1.18663 0.993605 0.65199 1.46393 0.330566L11.5075 10.0018Z" fill="#2196F3" />
                    <path d="M15.0217 6.62364L11.5074 10.0018L1.46387 0.330532C1.50171 0.301203 1.54113 0.273918 1.58191 0.248803C2.11272 -0.0729183 2.77574 -0.0833047 3.31639 0.22156L15.0217 6.62364Z" fill="#4CAF50" />
                    <path d="M19.2806 10.0017C19.2872 10.6447 18.9377 11.2387 18.3725 11.5454L15.0217 13.3798L11.5073 10.0017L15.0217 6.62354L18.3725 8.45788C18.9377 8.76462 19.2872 9.3586 19.2806 10.0017Z" fill="#F0BB1F" />
                    <path d="M15.0217 13.3798L3.31639 19.7819C2.77455 20.0821 2.11404 20.0717 1.58191 19.7547C1.54113 19.7296 1.50171 19.7023 1.46387 19.6729L11.5074 10.0017L15.0217 13.3798Z" fill="#F15A2B" />
                </g>
                <defs>
                    <clipPath id="clip0_1_521">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <Box>
                <Text
                    fontFamily={'Poppins'}
                    color="white"
                    fontWeight={700}
                    fontSize="12px"
                >GET IT ON</Text>
                <Text
                    fontFamily={'Poppins'}
                    fontWeight={300}
                    color="white"
                    fontSize="12px"
                >GOOGLE PLAY</Text>
            </Box>
        </Stack>
    )
}

export default GooglePlay