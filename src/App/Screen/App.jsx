import { Container } from '@chakra-ui/react'
import React from 'react'
import Brands from './Brands'
import { Category } from './Category'
import Footer from './Footer'
import Header from './Header'
import NewsLetter from './NewsLetter'
import Selling from './Selling'
import Testimonials from './Testimonials'
import Trip from './Trip'

const App = () => {
  return (
    <div>
      <Header />
      <Container maxW={'6xl'} >
        <Category />
        <Selling />
        <Trip />
        <Testimonials />
        <Brands />
        <NewsLetter />
      </Container>
      <Footer />
    </div>
  )
}

export default App