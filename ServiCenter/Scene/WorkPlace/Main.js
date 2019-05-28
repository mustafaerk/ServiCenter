import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import { Container, Drawer } from "native-base";
import { Actions } from "react-native-router-flux";

import Cards from "../../Component/Cards/Post";

const title = "Açıklama";
const description = "bu proje cihat yücenin";
const footer = "Cihat yüce";
const header = "ServiCenter";

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          onClose={() => this.closeDrawer()}
        />
        )
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
  text: {
    color: "#ffffff",
    fontWeight: "bold"
  }
});
