import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
