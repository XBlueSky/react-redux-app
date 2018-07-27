import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Content from './Content'

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}
export default App
