import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container} >
        <Image
          source={require("./src/images/dice1.png")}
        />
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
  // text: {
  //   fontSize: 30,
  //   backgroundColor: "#BB2CD9",
  //   paddingVertical: 12,
  //   paddingHorizontal: 20,
  //   color: "#FFFFFF",
  //   borderRadius: 10,
  //   overflow: 'hidden', // need overflow: hidden to make rounded borders
  //   borderWidth: 2,
  //   borderColor: "#FFFFFF"
  // }
});

