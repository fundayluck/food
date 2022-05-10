import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
