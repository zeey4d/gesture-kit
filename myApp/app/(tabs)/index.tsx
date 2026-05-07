import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Home from "../../components/home/Home";
import { Colors } from "../../components/core/Theme";

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
