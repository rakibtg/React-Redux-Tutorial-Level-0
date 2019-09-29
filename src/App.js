import React from 'react'

import { connect } from 'react-redux'

import Header from './components/Header'
import Welcome from './components/Welcome'
import NewPost from './components/NewPost'
import Posts from './components/Posts'

class App extends React.Component {

  renderActivePage () {
    const { activeMenu } = this.props
    if( activeMenu === 'welcome' ) {
      return <Welcome />
    } else if ( activeMenu === 'newpost' ) {
      return <NewPost />
    } else if ( activeMenu === 'allposts' ) {
      return <Posts />
    }
  }

  render () {
    return <div className='App-header'>
      <Header />
      {this.renderActivePage()}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    activeMenu: state.header.activeMenuName
  }
}

export default connect(mapStateToProps, null)(App)