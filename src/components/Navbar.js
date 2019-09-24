import React from 'react'
import { Route, NavLink } from 'react-router-dom';
import { Dropdown, Icon, Menu } from 'semantic-ui-react'


const Navbar = () => (
  <div>
    <Menu attached='top'>
      <Dropdown item icon='bars' simple>
        <Dropdown.Menu>
          
          <Dropdown.Item><NavLink to='/home'>My Card </NavLink></Dropdown.Item>
          <Dropdown.Item><NavLink to='/home/collection'>Collected Cards </NavLink></Dropdown.Item>
          <Dropdown.Item><NavLink to ='/home/add'>Add a Card </NavLink></Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  </div>
)

            
            
export default Navbar