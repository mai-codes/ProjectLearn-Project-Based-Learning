import React, { Component } from "react";
import styled from "styled-components";

import CategoryInfo from "./CategoryInfo";
import Categories from "./Categories";

const SidebarWrapper = styled.div`
  display: grid;
  position: fixed;
  left: 0;
  grid-template-rows: 30vh 63vh 7vh;
  width: 25vw;
  .footer {
    display: flex;
    padding-left: 3vh;
    color: var(--theme-grey);
  }
`;

export default class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <CategoryInfo  slug={this.props.slug} color={this.props.color}/>
        <Categories slug={this.props.slug} url={this.props.url} color={this.props.color}/>
        <div className="footer">© 2020 ProjectLearn</div>
      </SidebarWrapper>
    );
  }
}
