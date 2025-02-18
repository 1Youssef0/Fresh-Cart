import React from 'react'
import Productfeature from './Productfeature'
import Header from './Header'
import Categories from './Categories'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div >
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                
            </Helmet>
      <Header/>
      <Productfeature/>
    </div>
  )
}


