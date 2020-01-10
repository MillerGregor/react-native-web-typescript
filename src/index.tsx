import React, { memo } from "react";
import { AppRegistry, View, Text, Platform, StyleSheet } from "react-native";

const appName = "example";
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});

const anObject: {
  levelOne: { levelTwo: { levelThree: boolean } };
  levelFive?: boolean;
} = {
  levelOne: {
    levelTwo: {
      levelThree: true
    }
  }
};

let resultOne = false;
let resultTwo = false;
if (anObject?.levelOne) resultOne = true;
if (anObject?.levelFive) resultTwo = true;

export const Main = memo(function Main() {
  return (
    <View style={styles.container}>
      <Text>react native with web and typescript</Text>
      <Text>{resultOne ? "true" : "false"}</Text>
      <Text>{resultTwo ? "true" : "false"}</Text>
    </View>
  );
});

AppRegistry.registerComponent(appName, () => Main);
if (Platform.OS === "web") {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root")
  });
}
