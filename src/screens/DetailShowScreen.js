import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const DetailShowScreen = ({ navigation }) => {
  const [result, setResults] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>Detail Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailShowScreen;
