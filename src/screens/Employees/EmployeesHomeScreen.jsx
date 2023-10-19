import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import { LineChart } from "react-native-chart-kit";
import { BottomSheet } from "@rneui/base";
import CloseIcon from "../../assets/CloseIcon";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";
import MPSDoubleButton from "../../components/atoms/Button/DoubleButton";

const EmployeesHomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
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

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: BASIC_COLORS.FONT_PRIMARY,
            }}
          >
            Employees
          </Text>

          <View style={styles.card}>
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Item Name{" "}
                </Text>
              </View>
              <View style={styles.column}>
                <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>
                  Maliban Chocolate biscuit
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Unit Price
                </Text>
              </View>
              <View style={styles.column}>
                <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>
                  Rs 200.00 per gram/unit
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Discount
                </Text>
              </View>
              <View style={styles.column}>
                <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>N/A</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Quantity
                </Text>
              </View>
              <View style={styles.column}>
                <Text
                  style={{
                    backgroundColor: "#D8EFDD",
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    width: 60,
                    borderRadius: 8,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  }}
                >
                  100
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <MPSButton
              buttonTitle={"Add New Resource"}
              buttonStyle={{ height: 67 }}
              onPress={() => setShowModal(true)}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 22,
          }}
        >
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              Employees Sales Performance
            </Text>
            <Text
              style={{
                marginTop: 6,
                fontSize: 16,
                fontWeight: "400",
                maxWidth: 300,
                color: BASIC_COLORS.FONT_SECONDARY,
              }}
            >
              Overview of the employees' sales performances over months
            </Text>
          </View>

          <View style={styles.container}>
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
                width={280}
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
        </View>
        <BottomSheet
          isVisible={showModal}
          backdropStyle={{
            maxHeight: "75%",
            position: "absolute",
            bottom: 0,
          }}
          containerStyle={{
            backgroundColor: BASIC_COLORS.WHITE,
            maxHeight: "90%",
            minHeight: "90%",
            position: "absolute",
            width: "100%",
            justifyContent: "flex-end",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            bottom: 0,
            paddingVertical: 31,
            paddingHorizontal: 31,
          }}
        >
          <ScrollView>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: 50,
                  padding: 5,
                }}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                paddingVertical: 7,
                fontSize: 25,
                fontWeight: "bold",
                color: BASIC_COLORS.FONT_PRIMARY,
              }}
            >
              Add New Employee
            </Text>
            <MPSInputField
              inputLabel={"Username"}
              inputPlaceholder={"Username"}
              error={false}
            />
            <MPSInputField
              inputLabel={"Email"}
              inputPlaceholder={"email"}
              error={false}
            />
            <MPSInputField
              inputLabel={"Phone number"}
              inputPlaceholder={"phone"}
              error={false}
            />

            <MPSDoubleButton
              button1Title="Cancel"
              button2Title="Invite"
              button1TitleStyle={{ color: BASIC_COLORS.PRIMARY, fontSize: 15 }}
              button2TitleStyle={{ color: BASIC_COLORS.WHITE, fontSize: 15 }}
              button1Style={{
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",

                width: 143,
                alignContent: "center",
                borderRadius: 10,
                height: 46,
                borderColor: BASIC_COLORS.PRIMARY,
                borderWidth: 3,
              }}
              button2Style={{
                backgroundColor: BASIC_COLORS.PRIMARY,
                alignItems: "center",
                justifyContent: "center",
                width: 143,
                alignContent: "center",
                borderRadius: 10,
                height: 46,

                borderColor: BASIC_COLORS.PRIMARY,
                borderWidth: 3,
              }}
              onPress1={() => console.log(" cancel Button pressed")}
              onPress2={() => console.log(" save Button pressed")}
              loading={false}
            />
          </ScrollView>
        </BottomSheet>
      </ScrollView>
    </>
  );
};

export default EmployeesHomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginTop: 13,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  column: {
    flex: 1,
  },
});
