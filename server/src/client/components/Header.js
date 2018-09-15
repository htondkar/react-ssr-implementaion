import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './header.css'

const Header = ({ auth }) => (
  <header className="main-header">
    <section>Dashboard ({auth ? 'Authenticated' : 'Not Authenticated'})</section>

    <section>
      <Link to="/about">About Users</Link>
      <Link to="/">Home</Link>
      {auth ? <a href="/api/logout">Logout</a> : <a href="/api/auth/google">Login</a>}
    </section>
  </header>
)

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Header)
