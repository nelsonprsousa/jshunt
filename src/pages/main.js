import React, { Component } from "react";
import api from "../services/api";

import { View, Text } from "react-native";
import Axios from "axios";

export default class Main extends Component {
  static navigationOptions = {
    title: "JSHunt"
  };

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = async () => {
    const response = await api.get("/products");

    const { docs } = response.data;

    console.log(docs);
  };

  render() {
    return (
      <View>
        <Text>Página Main!</Text>
      </View>
    );
  }
}
