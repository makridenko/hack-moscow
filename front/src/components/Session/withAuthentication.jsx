import React from 'react'
import * as PropTypes from 'prop-types'
import AuthUserContext from './context'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    }

    render () {

      return (
          <Component {...this.props} />
      )
    }
  }

  WithAuthentication.propTypes = {
  }

  return WithAuthentication
}

export default withAuthentication
