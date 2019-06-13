import React from 'react';

import CssClasses from './NavigationItems.module.css';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={CssClasses.NavigationItems}>
    <NavigationItem link='/' active>Burger Builder</NavigationItem>
    <NavigationItem link='/' >CheckOut</NavigationItem>
  </ul>
)

export default navigationItems
