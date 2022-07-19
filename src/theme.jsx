import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    color: {
        primary: theme.colors.orange
    },
    fonts: {
        body: `'Poppins', sans-serif`,
        heading: `'Volkhov','Poppins",sans-serif`
    }
    // styles: {
    //     global: {
    //         body: {
    //             backgroundColor: 'blue.50'
    //         }
    //     }
    // }
})