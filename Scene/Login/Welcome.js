import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import { Actions } from "react-native-router-flux";

import { loginConst } from "../../Constant/Const";

import Cards from "../../Component/Cards/Post";

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body style={styles.body}>
            <Title>{loginConst.header}</Title>
          </Body>
        </Header>
        <Cards
          title={loginConst.title}
          description={loginConst.description}
          footer={loginConst.footer}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              rounded
              primary
              style={styles.button}
              onPress={() => {
                Actions.Login();
              }}
            >
              <Text style={styles.text}>{loginConst.login}</Text>
            </Button>
            <Button
              rounded
              info
              style={styles.button}
              onPress={() => {
                Actions.Register();
              }}
            >
              <Text style={styles.text}> {loginConst.register} </Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginBottom: "5%",
    minWidth: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold"
  }
});
