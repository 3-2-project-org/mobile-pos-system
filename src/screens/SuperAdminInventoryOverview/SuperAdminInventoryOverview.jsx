import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { BottomSheet } from "@rneui/base";
import CloseIcon from "../../assets/CloseIcon";
import CircularProgress from "react-native-circular-progress-indicator";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { BarChart } from "react-native-gifted-charts";

const dataList = [
  {
    code: "IT0001",
    itemName: "Ceylon Tea",
    unitPrice: "Rs 500.00",
    status: "inStock",
  },
  {
    code: "IT0002",
    itemName: "Maggee seasoning cube",
    unitPrice: "Rs 500.00",
    status: "refillState",
  },
  {
    code: "IT0003",
    itemName: "Maliban Chocalate Biscuit",
    unitPrice: "Rs 500.00",
    status: "outOfStock",
  },
  {
    code: "IT0004",
    itemName: "Manchee Chocalate Biscuit",
    unitPrice: "Rs 500.00",
    status: "inStock",
  },
];

const barData = [
  { value: 250, label: "Jan" },
  { value: 500, label: "Feb" },
  { value: 745, label: "Mar" },
  { value: 320, label: "Apr" },
  { value: 600, label: "May" },
  { value: 256, label: "Jun" },
  { value: 300, label: "Jul" },
  { value: 500, label: "Aug" },
  { value: 745, label: "Sep" },
  { value: 320, label: "Oct" },
  { value: 600, label: "Nov" },
  { value: 256, label: "Dec" },
];

const SuperAdminInventoryOverview = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [showModal, setShowModal] = useState(false);
  const props = {
    activeStrokeWidth: 15,
    inActiveStrokeWidth: 15,
    inActiveStrokeOpacity: 0.2,
    height: 10,
    width: 10,
  };
  return (
    <View
      style={{
        paddingHorizontal: 31,
        marginTop: 27,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        Inventory Overview
      </Text>

      <View
        style={{
          backgroundColor: BASIC_COLORS.WHITE,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#D8EFDD",
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderTopEndRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: BASIC_COLORS.FONT_SECONDARY,
              flex: 1,
            }}
          >
            Code
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: BASIC_COLORS.FONT_SECONDARY,
              flex: 2,
            }}
          >
            Item Name
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: BASIC_COLORS.FONT_SECONDARY,
              flex: 1.5,
            }}
          >
            Unit Price
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: BASIC_COLORS.FONT_SECONDARY,
              flex: 1.5,
              textAlign: "center",
            }}
          >
            Status
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          {dataList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedItem(item.code);
                  setShowModal(true);
                }}
                style={{
                  backgroundColor: BASIC_COLORS.WHITE,
                  marginVertical: 3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: BASIC_COLORS.FONT_SECONDARY,
                      flex: 1,
                    }}
                  >
                    {item.code}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: BASIC_COLORS.FONT_SECONDARY,
                      flex: 2,
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {item.itemName}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: BASIC_COLORS.FONT_SECONDARY,
                      flex: 1.5,
                    }}
                  >
                    {item.unitPrice}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        backgroundColor:
                          item.status === "outOfStock"
                            ? BASIC_COLORS.ERROR
                            : item.status === "refillState"
                            ? "#FFB800"
                            : "#27DD23",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: BASIC_COLORS.FONT_SECONDARY,
                        marginLeft: 5,
                      }}
                    >
                      {item.status}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
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

          <View
            style={{
              paddingVertical: 22,
              paddingHorizontal: 15,
              backgroundColor: "#0FA958",
              flexDirection: "column",
              borderRadius: 10,
              marginTop: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: BASIC_COLORS.WHITE,
              }}
            >
              Maliban Chocolate Biscuit
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  color: BASIC_COLORS.WHITE,
                  fontSize: 14,
                  minWidth: 100,
                }}
              >
                IT0001
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1.5,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    // backgroundColor:
                    //   item.status === "outOfStock"
                    //     ? BASIC_COLORS.ERROR
                    //     : item.status === "refillState"
                    //     ? "#FFB800"
                    //     : "#27DD23",
                    backgroundColor: "#27DD23",
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: BASIC_COLORS.WHITE,
                    marginLeft: 5,
                  }}
                >
                  instock
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  color: BASIC_COLORS.WHITE,
                  fontSize: 14,
                  minWidth: 100,
                }}
              >
                Supplier:
              </Text>
              <Text
                style={{
                  color: BASIC_COLORS.WHITE,
                  fontSize: 12,
                }}
              >
                Maliban Lanka Pvt ltd
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  color: BASIC_COLORS.WHITE,
                  fontSize: 14,
                  minWidth: 100,
                }}
              >
                Unit Price:
              </Text>
              <Text
                style={{
                  color: BASIC_COLORS.WHITE,
                  fontSize: 12,
                }}
              >
                Rs 1000.00
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingVertical: 22,
              paddingHorizontal: 15,
              backgroundColor: "#DEF1D4",
              marginTop: 22,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: BASIC_COLORS.FONT_SECONDARY,
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                Availability Overview
              </Text>
              <Text
                style={{
                  color: BASIC_COLORS.FONT_SECONDARY,
                  fontWeight: "400",
                  fontSize: 12,
                }}
              >
                Availability over remaining
              </Text>
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                marginRight: 10,
              }}
            >
              <AnimatedCircularProgress
                size={60}
                width={5}
                fill={60}
                tintColor="red"
                backgroundColor={BASIC_COLORS.WHITE}
                rotation={0}
              >
                {(fill) => (
                  <Text
                    style={{
                      color: "red",
                      fontWeight: "700",
                    }}
                  >
                    60%
                  </Text>
                )}
              </AnimatedCircularProgress>
            </View>
          </View>

          <View
            style={{
              marginTop: 22,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Sales over the months
            </Text>

            <View
              style={{
                backgroundColor: "#DEF1D4",
                paddingHorizontal: 15,
                paddingVertical: 22,
                borderRadius: 10,
                marginTop: 22,
              }}
            >
              <BarChart
                barWidth={22}
                noOfSections={5}
                barBorderRadius={5}
                frontColor={BASIC_COLORS.PRIMARY}
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                hideRules
              />
            </View>
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default SuperAdminInventoryOverview;
