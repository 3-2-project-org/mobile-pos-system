import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BASIC_COLORS } from "../../utils/constants/styles";

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

const SuperAdminInventoryOverview = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [showModal, setShowModal] = useState(false);
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
    </View>
  );
};

export default SuperAdminInventoryOverview;
