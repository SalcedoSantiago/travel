import { Container } from '@chakra-ui/react'
import React from 'react'
import { Category } from './Category'
import Header from './Header'
import Selling from './Selling'
import Trip from './Trip'

const App = () => {
  return (
    <div>
      <Header />
      <Container maxW={'6xl'} >
        <Category />
        <Selling />
        <Trip />
      </Container>
    </div>
  )
}

export default App