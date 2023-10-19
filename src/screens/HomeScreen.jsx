import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";
import TouchableCard from "../components/atoms/Card/Card";
import CardIcon from "../assets/material-symbols_inventory.svg";
import { BASIC_COLORS } from "../utils/constants/styles";
const SalesHomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50, 20, 45, 28, 80, 99],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [88, 99, 43, 50, 20, 45, 28, 80, 99, 43, 50, 20],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const moveChart = (dir) => {
    dir === "left" ? setIndex(0) : setIndex(6);
  };
  const chartData = () => {
    return {
      labels: index === 0 ? data.labels.slice(0, 6) : data.labels.slice(6, 12),
      datasets: data.datasets.map((set) => {
        return {
          data: index === 0 ? set.data.slice(0, 6) : set.data.slice(6, 12),
          color: set.color,
          strokeWidth: set.strokeWidth,
        };
      }),
    };
  };

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <ScrollView>
      <View style={styles.container}>
    
        <Text
          style={{
            marginTop: 32,
            fontSize: 25,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Hey Fazid
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Good Morning!
        </Text>

      
          <TouchableCard
            cardTitle={"Make A Sale"}
            cardDescription={
              "Record all incoming stocks details in a efficient way here"
            }
            onPress={() => navigation.navigate("SalesScreen")}
            icon={<CardIcon />}
          />

          <TouchableCard
            cardTitle={"inventory"}
            cardDescription={
              "Record all incoming stocks details in a efficient way here"
            }
            onPress={() => navigation.navigate("InventoryHomeScreen")}
            icon={<CardIcon />}
          />

          <Text
            style={{
              marginTop: 48,
              fontSize: 20,
              fontWeight: "bold",
              color: BASIC_COLORS.FONT_PRIMARY,
            }}
          >
            Quick Analysis On Your Works
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              color: BASIC_COLORS.FONT_SECONDARY,
            }}
          >
            This section show how you performed during the last 7 days
          </Text>
          <View
            style={{
              backgroundColor: BASIC_COLORS.WHITE,
              borderRadius: 10,
              //   paddingHorizontal: 10,
              paddingVertical: 20,
              marginTop: 20,
              elevation: 2,
            }}
          >
            <LineChart
              data={chartData()}
              width={290}
              height={220}
              yAxisInterval={1}
              verticalLabelRotation={30}
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `#000`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "4",
                  strokeWidth: "1",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
       
      </View>
      </ScrollView>
    </>
  );
};

export default SalesHomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,

    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});
