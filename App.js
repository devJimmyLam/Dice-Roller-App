import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uri: require("./src/images/dice1.png")
    };
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1
  };

  playButtonPressed = () => {
    Alert.alert("Hey: " + this.getRandomValue())
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.header}>Dice Roll App</Text>
        <Image
          source={this.state.uri}
        />
        <TouchableOpacity
          onPress={this.playButtonPressed}
        >
          <Text style={styles.gamebutton}>
            Play Game
            </Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E74292",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    marginBottom: 50,
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",

  },
  gamebutton: {
    marginTop: 35,
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderWidth: 2,
    overflow: "hidden",
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#FFF",
  }
});

