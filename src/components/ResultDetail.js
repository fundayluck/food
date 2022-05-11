import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultDetail;
