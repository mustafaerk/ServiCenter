import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import { loginConst } from "../../Constant/Const";

import { Container, Input, Button, Item, Label } from "native-base";
import { Actions } from "react-native-router-flux";

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <View style={styles.View}>
          <View style={styles.View}>
            <Text style={styles.text}>{loginConst.login}</Text>
            <Item floatingLabel style={styles.Item}>
              <Label>{loginConst.username}</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.Item}>
              <Label>{loginConst.pass}</Label>
              <Input />
            </Item>
            <Button
              rounded
              info
              style={styles.button}
              onPress={() => {
                Actions.Main();
              }}
            >
              <Text style={styles.textButton}> {loginConst.login} </Text>
            </Button>
            <Text
              style={{ marginBottom: "5%" }}
              onPress={() => {
                Actions.ForgotPass();
              }}
            >
              {loginConst.forgotPass}
            </Text>
            <Text
              style={{ marginBottom: "5%" }}
              onPress={() => {
                Actions.Register();
              }}
            >
              {loginConst.Register}
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center"
  },
  Item: { marginLeft: "15%", marginRight: "15%", marginBottom: "5%" },
  button: {
    marginLeft: "25%",
    marginRight: "15%",
    marginBottom: "5%",
    minWidth: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  View: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold"
  },
  textButton: {
    color: "#ffffff",
    fontWeight: "bold"
  }
});
