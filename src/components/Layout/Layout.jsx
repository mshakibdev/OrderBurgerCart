import React, { Component } from 'react'
import Aux from '../../hoc/Auxi'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import CssClasses from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state ={
    showSideDrawer : false
  }

  sideDrawerCancelHandler  = () => {
    this.setState({showSideDrawer :false});
  }
  
  sideDrawerToggleHandler  = () => {
    this.setState((prevState) => {
     return {showSideDrawer :!prevState.showSideDrawer}
    })
  }
  

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleclicked ={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerCancelHandler} />
        <main className={CssClasses.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
export default Layout
