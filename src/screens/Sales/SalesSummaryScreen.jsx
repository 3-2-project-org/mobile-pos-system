import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import MPSTodosContainer from "../../components/molecules/MPSTodosContainer/MPSTodosContainer";

const SalesSummaryScreen = () => {
  const [value, setValue] = useState("");
  const onValueChange = (value) => {
    setValue(value);
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 32,
            alignContent: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Sales Summary
        </Text>

        <View style={{ marginTop: 40 }}>
          <MPSTodosContainer />
        </View>

        <View style={{ marginTop: 20 }}>
          <MPSTodosContainer />
        </View>

        <View style={{ marginTop: 20 }}>
          <MPSTodosContainer />
        </View>

        <View style={{ marginTop: 50 }}>
          <MPSButton
            buttonType={"primary"}
            onPress={() => navigation.navigate("SalesThankScreen")}
            buttonTitle={"Complete Transaction"}
          />
        </View>
      </View>
    </>
  );
};

export default SalesSummaryScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});
