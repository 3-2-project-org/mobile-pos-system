import { View, Text } from "react-native";
import React from "react";
import { BASIC_COLORS } from "../../../utils/constants/styles";
// import { LineChart } from "react-native-gifted-charts";
import { LineChart } from "react-native-chart-kit";

const SuperAdminAnalyticsOverviewFMI = () => {
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
    <View
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
  );
};

export default SuperAdminAnalyticsOverviewFMI;
