import React, { Component } from "react";
import { Item, Input, Icon } from "native-base";
export default class SearchBarExample extends Component {
  searchPost = () => {};
  render() {
    return (
      <Item >
        <Input placeholder="Search" />
        <Icon onPress={this.searchPost} name="ios-search" />
      </Item>
    );
  }
}
