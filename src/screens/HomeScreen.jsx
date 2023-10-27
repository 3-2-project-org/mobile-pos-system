import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";
import TouchableCard from "../components/atoms/Card/Card";
import CardIcon from "../assets/material-symbols_inventory.svg";
import { BASIC_COLORS } from "../utils/constants/styles";
import { axiosInstance } from "../utils/common/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SalesHomeScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const [index, setIndex] = React.useState(0);
  const [lineChartData, setLineChartData] = React.useState();

  const chartData = () => {
    return {
      labels: lineChartData?.labels[0],
      datasets: lineChartData?.datasets?.map((set) => {
        return {
          data:
            index === 0
              ? set?.data[0]?.slice(0, 6)
              : set?.data[0]?.slice(6, 12),
          color: set?.color,
          strokeWidth: set?.strokeWidth,
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

  useEffect(() => {
    AsyncStorage.getItem("user").then((res) => {
      axiosInstance
        .get("/order/seller-orders/" + JSON.parse(res)._id)
        .then((res) => {
          setLineChartData({
            labels: [res?.data?.data[0].label],
            datasets: [
              {
                data: [res?.data?.data[0].data],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          });
        });
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
            cardTitle={"Inventory"}
            cardDescription={
              "Record all incoming stocks details in a efficient way here"
            }
            onPress={() => navigation.navigate("InventoryHomeScreen")}
            icon={<CardIcon />}
          />

<TouchableCard
            cardTitle={"Sale Summary"}
            cardDescription={
              "All incoming sale summary details in a efficient way here"
            }
            onPress={() => navigation.navigate("SalesFinalSummary")}
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
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {lineChartData ? (
              <LineChart
                data={chartData()}
                width={windowWidth - 60}
                height={350}
                yAxisInterval={1}
                verticalLabelRotation={30}
                chartConfig={{
                  backgroundColor: "#fff",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  horizontalLabelRotation: 30,

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
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  height: 350,
                }}
              />
            ) : (
              <Text>No Items To Display</Text>
            )}
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
