import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <main>
    <h5>Hello world </h5>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eos id suscipit
      perspiciatis nobis officia, dignissimos doloremque non quasi sit excepturi,
      praesentium odio totam placeat ipsam pariatur dolor quaerat dolores.
    </p>

    <div>
      <Link to="/about">About us</Link>
    </div>
  </main>
)

export default HomePage
