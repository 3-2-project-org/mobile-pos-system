import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { BottomSheet } from "@rneui/base";
import CloseIcon from "../../assets/CloseIcon";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { BarChart } from "react-native-gifted-charts";
import { axiosInstance } from "../../utils/common/api";

const SuperAdminInventoryOverview = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [individualProduct, setIndividualProduct] = useState({
    _id: "",
    name: "",
    price: "",
    inStock: 0,
    totalStock: 0,
    description: "",
    supplier: "",
  });

  useEffect(() => {
    axiosInstance.get("/product?is_active=true").then((res) => {
      setProducts(res.data.data.data);
    });
  }, []);

  const getItemStatus = (quantity) => {
    if (quantity > 100) {
      return "inStock";
    } else if (quantity === 0) {
      return "outOfStock";
    } else if (quantity < 100) {
      return "refillState";
    }
  };

  useEffect(() => {
    if (selectedItem !== "") {
      axiosInstance.get(`/product/${selectedItem}`).then((res) => {
        setIndividualProduct(res.data.data);
      });

      axiosInstance
        .get(`product/individual-month-analysis/${selectedItem}`)
        .then((res) => {
          setChartData(res.data.data);
        });
    }
  }, [selectedItem]);

  const renderChartData = (chartData) => {
    const month = new Date().getMonth();

    if (month > 6) return chartData.slice(5, 11);
    else return chartData.slice(0, 5);
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
          {products.length > 0 ? (
            <>
              {products.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedItem(item._id);
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
                        ellipsizeMode="tail"
                        numberOfLines={1}
                      >
                        {item._id}
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
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          color: BASIC_COLORS.FONT_SECONDARY,
                          flex: 1.5,
                        }}
                      >
                        {item.price}
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
                              getItemStatus(item.inStock) === "outOfStock"
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
                          {getItemStatus(item.inStock)}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </>
          ) : (
            <Text>Loading</Text>
          )}
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
              {individualProduct.name ?? "Not Given"}
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
                  maxWidth: 100,
                }}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {individualProduct._id ?? "Not Given"}
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
                      getItemStatus(individualProduct.inStock) === "outOfStock"
                        ? BASIC_COLORS.ERROR
                        : getItemStatus(individualProduct.inStock) ===
                          "refillState"
                        ? "#FFB800"
                        : "#27DD23",
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
                  {getItemStatus(individualProduct.inStock)}
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
                {individualProduct.supplier ?? "Not Given"}
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
                Rs {individualProduct.price ?? "Not Given"}
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
                size={70}
                width={5}
                fill={
                  (individualProduct.inStock / individualProduct.totalStock) *
                  100
                }
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
                    {Math.round((individualProduct.inStock /
                      individualProduct.totalStock) *
                      100).toFixed(1) + "%"}
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
                data={renderChartData(chartData)}
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
