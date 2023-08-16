import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {};
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item code..."
        // value={searchText}
        onChangeText={(text) => console.log(text)}
        // onSubmitEditing={handleSearch}
      />

      <Feather name="search" size={24} color="#625D5D" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    borderColor: "#ccc",
    borderRadius: 7,
    backgroundColor: "white",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    flex: 1,
    padding: 9,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});

export default Search;
