import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client';
import AppScreen from './App/Screen/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AppScreen />
  </ChakraProvider>
)
