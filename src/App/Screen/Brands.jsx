import { Image, Stack, Box } from '@chakra-ui/react'
import React from 'react'
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import brand4 from '../../assets/brand4.png';
import brand5 from '../../assets/brand5.png';



const Brands = () => {
    return (
        <Box py={'120px'} mt={'60px'}>
            <Stack direction={'row'} justifyContent='space-between'>
                <Image px={3} src={brand1} objectFit="contain" />
                <Image px={3} src={brand2} objectFit="contain" />
                <Image px={3} src={brand3} objectFit="contain" />
                <Image px={3} src={brand4} objectFit="contain" />
                <Image px={3} src={brand5} objectFit="contain" />

            </Stack>
        </Box>
    )
}

export default Brands