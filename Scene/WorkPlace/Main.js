import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Container } from "native-base";

import SearchBar from "../../Component/searchBar";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.button}>
          <SearchBar />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    justifyContent: "center",
    minWitdh: "80%",
    marginLeft: "5%",
    backgroundColor: "white"
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
