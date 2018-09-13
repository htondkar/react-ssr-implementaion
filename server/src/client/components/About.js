import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsersThunk } from '../actions/actionCreators'

class About extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <main>
        <h3>Our users</h3>
        <section>
          <ul>
            {this.props.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </section>
        <Link to="/">Home</Link>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const actions = {
  fetchUsers: fetchUsersThunk,
}

export default connect(
  mapStateToProps,
  actions
)(About)
