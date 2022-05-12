import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  return (
    <View>
      <Text>Detail Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailShowScreen;
