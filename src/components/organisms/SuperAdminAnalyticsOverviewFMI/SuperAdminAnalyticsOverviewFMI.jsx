import { View, Text, Touchable, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { BASIC_COLORS } from "../../../utils/constants/styles";
// import { LineChart } from "react-native-gifted-charts";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

const SuperAdminAnalyticsOverviewFMI = () => {
  const windowWidth = Dimensions.get("window").width;
  const [index, setIndex] = React.useState(0);
  const [hideDataIndex, setHideDataIndex] = React.useState([]);
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
        color: (opacity = 1) => `rgba(111, 2, 18, ${opacity})`,
        strokeWidth: 2,
        itemName: "Item 1",
      },
      {
        data: [88, 99, 43, 50, 20, 45, 28, 80, 99, 43, 50, 20],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
        itemName: "Item 2",
      },
    ],
  };

  const moveChart = (dir) => {
    dir === "left" ? setIndex(0) : setIndex(6);
  };
  const chartData = (chatData) => {
    const chartDataToShow = chatData?.datasets?.filter(
      (set, i) => !hideDataIndex.includes(i)
    );
    const data = {
      labels: chatData.labels,
      datasets: chartDataToShow,
    };
    return {
      labels:
        index === 0
          ? chatData?.labels?.slice(0, 6)
          : data?.labels?.slice(6, 12),
      datasets: data?.datasets?.map((set) => {
        return {
          data: index === 0 ? set?.data?.slice(0, 6) : set?.data?.slice(6, 12),
          color: set?.color,
          strokeWidth: set?.strokeWidth,
        };
      }),
    };
  };

  useEffect(() => {
    const month = new Date().getMonth();
    if (month < 6) {
      setIndex(0);
    }
    if (month > 5) {
      setIndex(6);
    }
  }, []);
  return (
    <ScrollView
      style={{
        marginTop: 22,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Fast moving items
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
          Top selling items statistics over the months.
        </Text>
      </View>

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
        {hideDataIndex.length < data.datasets.length ? (
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <LineChart
              data={chartData(data) || []}
              width={windowWidth - 60}
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
                width: 490,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 25,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: BASIC_COLORS.PRIMARY,
                  borderRadius: 50,
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                disabled={index === 0}
                onPress={() => moveChart("left")}
              >
                <Icon
                  name="arrow-back-outline"
                  type="ionicon"
                  color="#ffffff"
                  size={20}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: BASIC_COLORS.PRIMARY,
                  borderRadius: 50,
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                disabled={index === 6}
                onPress={() => moveChart("right")}
              >
                <Icon
                  name="arrow-forward-outline"
                  type="ionicon"
                  color="#ffffff"
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              minHeight: 250,
            }}
          >
            <Text>No data to show</Text>
            <Text>Please select atleast 1 filter</Text>
          </View>
        )}
      </View>
      <View
        style={{
          backgroundColor: BASIC_COLORS.WHITE,
          borderRadius: 10,
          //   paddingHorizontal: 10,
          paddingVertical: 20,
          marginTop: 20,
          elevation: 2,
          flexDirection: "row",
          gap: 10,
          paddingHorizontal: 10,
          flexWrap: "wrap",
        }}
      >
        {data?.datasets?.map((set, i) => {
          return (
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                gap: 10,
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                borderRadius: 10,
                borderColor: BASIC_COLORS.PRIMARY,
                borderWidth: 1,
                backgroundColor: hideDataIndex.includes(i)
                  ? BASIC_COLORS.WHITE
                  : "#0FA958",
              }}
              onPress={() => {
                if (hideDataIndex.includes(i)) {
                  setHideDataIndex(hideDataIndex.filter((item) => item !== i));
                } else {
                  setHideDataIndex([...hideDataIndex, i]);
                }
              }}
            >
              <Text
                style={{
                  color: hideDataIndex.includes(i)
                    ? BASIC_COLORS.PRIMARY
                    : BASIC_COLORS.WHITE,
                  fontWeight: "700",
                }}
              >
                {set?.itemName}
              </Text>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: set.color(),
                  borderRadius: 10,
                }}
              ></View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{
        marginTop: 22
      }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Sales Overview
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
          Brief overview of your sales made today.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SuperAdminAnalyticsOverviewFMI;
