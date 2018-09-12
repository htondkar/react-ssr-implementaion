import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <main>
    <h3>Home page</h3>
    <h5>Hello world </h5>
    <button onClick={_ => console.log('works!')}>Click me</button>

    <div>
      <Link to="/about">About us</Link>
    </div>
  </main>
)

export default Home
