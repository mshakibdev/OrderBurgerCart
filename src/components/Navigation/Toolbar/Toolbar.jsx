import React from 'react'
import CssClasses from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
  <header className={CssClasses.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleclicked} />
    <div className = {CssClasses.Logo}>
      <Logo />
    </div>
    <nav className={CssClasses.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
