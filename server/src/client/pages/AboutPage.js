import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsersThunk } from '../actions/actionCreators'

class AboutPage extends Component {
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
      </main>
    )
  }
}

// returns a promise, because store.dispatch returns the fired action,
// in this case its a promise because of the async function,
// redux thunk also returns the promise returned from the thunk itself.
AboutPage.preLoadProps = store => store.dispatch(fetchUsersThunk())

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const actions = {
  fetchUsers: fetchUsersThunk,
}

export default connect(
  mapStateToProps,
  actions
)(AboutPage)
