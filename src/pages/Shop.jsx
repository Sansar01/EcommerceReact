import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offers from '../component/Offers/Offers'
import NewCollection from '../component/NewCollection/NewCollection'

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers/>
      <NewCollection/>
    </div>
  )
}

export default Shop