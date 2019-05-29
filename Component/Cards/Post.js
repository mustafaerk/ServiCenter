import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>{this.props.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{this.props.description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text>{this.props.footer}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
