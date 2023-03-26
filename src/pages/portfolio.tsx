import React from 'react'
import Hero from '../../components/Hero'
import Portfolio from '../../components/Portfolio'

const portfolio = () => {
  return (
    <div>
        <Hero heading="My work" message='These are some of my recent arts done while traveling the world' />
        <Portfolio />
    </div>
  )
}

export default portfolio