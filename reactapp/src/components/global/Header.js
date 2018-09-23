import React, { Component } from 'react';
import { SearchBar,NavBar, Icon } from 'antd-mobile';
export default class Nav extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavBar
          mode="dark"
          leftContent="哈尔滨"
          rightContent={[
            <Icon key="1" type="ellipsis" />,
            ]}
            ><SearchBar placeholder="Search" maxLength={8} disabled={true} />
        </NavBar>
      </div>
    )
  } 
}