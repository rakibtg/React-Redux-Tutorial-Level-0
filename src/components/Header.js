import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateMenu } from '../store/actions/header'

class App extends React.Component {

  handleMenuChange (menuName) {
    const { updateMenu } = this.props
    updateMenu(menuName)
  }

  render () {
    const { activeMenu } = this.props
    return <div>

      <button
        onClick={() => this.handleMenuChange('welcome')}
        disabled={activeMenu === 'welcome'}
        >
        <span className='imo'>🤝</span> Welcome
      </button>

      <button
        onClick={() => this.handleMenuChange('newpost')}
        disabled={activeMenu === 'newpost'}
        >
        <span className='imo'>✍️</span> New Post
      </button>

      <button
        onClick={() => this.handleMenuChange('allposts')}
        disabled={activeMenu === 'allposts'}
        >
        <span className='imo'>📒</span> All Posts
      </button>
      
    </div>
  }
}

const mapStateToProps = state => {
  return {
    activeMenu: state.header.activeMenuName
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateMenu
  },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(App)