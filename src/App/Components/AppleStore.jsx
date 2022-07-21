import { Stack, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'

const AppleStore = () => {
    return (
        <Stack cursor={'pointer'} px={5} py={3} borderRadius="25px" alignItems={'center'} direction="row" spacing={3} bgColor="black">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.78926 15.9998C2.40798 15.9861 0.438232 11.1251 0.438232 8.64954C0.438232 4.60566 3.47183 3.72035 4.64095 3.72035C5.16783 3.72035 5.73042 3.92725 6.22664 4.11035C6.57364 4.23807 6.93251 4.36991 7.13211 4.36991C7.25158 4.36991 7.53311 4.25775 7.78167 4.15935C8.31176 3.94832 8.97139 3.68604 9.73951 3.68604C9.74089 3.68604 9.74273 3.68604 9.74408 3.68604C10.3176 3.68604 12.0567 3.81191 13.1022 5.38204L13.3471 5.75007L12.9947 6.01604C12.4911 6.39597 11.5724 7.08904 11.5724 8.46188C11.5724 10.0878 12.6129 10.7132 13.1128 11.0139C13.3334 11.1467 13.5618 11.2835 13.5618 11.5829C13.5618 11.7784 12.0018 15.9756 9.7363 15.9756C9.18195 15.9756 8.79011 15.809 8.44448 15.662C8.09476 15.5133 7.79308 15.3851 7.29458 15.3851C7.04189 15.3851 6.72236 15.5046 6.38408 15.6314C5.9218 15.8039 5.39855 15.9998 4.80483 15.9998H4.78926Z" fill="white" />
                <path d="M9.97954 0C10.0385 2.12737 8.51713 3.60325 6.9975 3.51069C6.74709 1.81297 8.51694 0 9.97954 0Z" fill="white" />
            </svg>
            <Box>
                <Text
                    fontFamily={'Poppins'}
                    color="white"
                    fontWeight={600}
                    fontSize="10px"
                >Available on the</Text>
                <Text
                    fontFamily={'Poppins'}
                    fontWeight={600}
                    color="white"
                    fontSize="14px"
                >Apple Store</Text>
            </Box>
        </Stack>
    )
}

export default AppleStore