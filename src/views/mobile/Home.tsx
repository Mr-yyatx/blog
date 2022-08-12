import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <div className="App">
      this is mobile home page
      <Link to={'/m/about'}>about</Link>
    </div>
  )
}

export default Home
