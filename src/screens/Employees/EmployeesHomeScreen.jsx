import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import { LineChart } from "react-native-chart-kit";
import { BottomSheet } from "@rneui/base";
import CloseIcon from "../../assets/CloseIcon";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";
import { Icon } from "react-native-elements";
import { axiosInstance } from "../../utils/common/api";
import MPSUserInfoModal from "../../components/molecules/MPSUserInfoModal/MPSUserInfoModal";
import RNPickerSelect from "react-native-picker-select";
import { useFormik } from "formik";

const EmployeesHomeScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");
  const [hideDataIndex, setHideDataIndex] = React.useState([]);
  const [users, setUsers] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);

  const onValueChange = (value) => {
    setValue(value);
  };

  const navigation = useNavigation();

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [index, setIndex] = React.useState(0);

  const initialValues = {
    username: "",
    email: "",
    phone: "",
    type: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await axiosInstance.post("/auth/create-user", values).then((res) => {
        if (res.data) {
          showToastWithGravityAndOffset("User added successfully");
          setShowModal(false);
          setUsers([...users, res.data.data]);
        } else {
          showToastWithGravityAndOffset("Something went wrong");
        }
      });
    },
  });

  const { handleChange, handleSubmit, values, errors } = formik;

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
        data: [0, 0, 0, 0, 0, 0, 0, 0, 4000, 7200, 0, 0],
        color: (opacity = 1) => `rgba(111, 2, 18, ${opacity})`,
        strokeWidth: 2,
        itemName: "Fazid",
      },
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4300, 0, 0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
        itemName: "Thushan",
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
    axiosInstance
      .get("/auth/allEmployees")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView>
      <MPSUserInfoModal
        visible={showUserInfoModal}
        setVisible={setShowUserInfoModal}
        userInfo={users.find((item) => item._id === selectedItem)}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: BASIC_COLORS.FONT_PRIMARY,
            flex: 1,
          }}
        >
          Employees
        </Text>

        <Text
          style={{
           fontSize: 16,
            fontWeight: "400",
            maxWidth: 300,
            color: BASIC_COLORS.FONT_SECONDARY,
            marginTop: 5,
          }}
        >
          * Select a row to see the detailed information
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
              ID
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: BASIC_COLORS.FONT_SECONDARY,
                flex: 2,
              }}
            >
              Name
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: BASIC_COLORS.FONT_SECONDARY,
                flex: 1.5,
              }}
            >
              Role
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
              Email
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            {users.length > 0 ? (
              <>
                {users.map((item, index) => {
                  console.log(item);
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSelectedItem(item._id);
                        setShowUserInfoModal(true);
                      }}
                      style={{
                        backgroundColor: !item?.is_active ? "#D9D9D9" : BASIC_COLORS.WHITE,
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
                          {item.username}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: "400",
                            color: BASIC_COLORS.FONT_SECONDARY,
                            flex: 1.5,
                          }}
                          numberOfLines={1}
                        >
                          {item.type}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: "400",
                            color: BASIC_COLORS.FONT_SECONDARY,
                            flex: 1.5,
                            textAlign: "center",
                          }}
                          numberOfLines={1}
                        >
                          {item.email}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </>
            ) : (
              <Text>No items to display. Please hang on a bit!</Text>
            )}
          </View>
        </View>
        <View style={styles.addButton}>
          <MPSButton
            buttonTitle="Add New Resource"
            onPress={() => setShowModal(true)}
          />
        </View>
      </View>

      <View style={{ marginTop: 20, paddingHorizontal: 31 }}>
        <View style={styles.chartContainer}>
          <Text style={styles.chartHeaderText}>
            Employees Sales Performance
          </Text>
          <Text style={styles.chartDescriptionText}>
            Overview of the employees' sales performances over months
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
                      setHideDataIndex(
                        hideDataIndex.filter((item) => item !== i)
                      );
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
        </View>
      </View>

      <BottomSheet
        isVisible={showModal}
        backdropStyle={styles.backdropStyle}
        containerStyle={styles.bottomSheetContainer}
      >
        <ScrollView>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.closeButton}
            >
              <CloseIcon />
            </TouchableOpacity>
          </View>

          <Text style={styles.modalHeader}>Add New Employee</Text>
          <View
            style={{
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
            }}
          >
            <MPSInputField
              inputLabel="Username"
              inputPlaceholder="Username"
              error={false}
              value={values.username}
              onChangeText={handleChange("username")}
            />
            <MPSInputField
              inputLabel="Email"
              inputPlaceholder="email"
              error={false}
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <MPSInputField
              inputLabel="Phone number"
              inputPlaceholder="phone"
              error={false}
              value={values.phone}
              onChangeText={handleChange("phone")}
            />
            <View>
              <Text
                style={{
                  color: BASIC_COLORS.FONT_PRIMARY,
                  fontWeight: "500",
                  fontSize: 16,
                }}
              >
                Employee role
              </Text>
              <RNPickerSelect
                value={values.type}
                onValueChange={(value) => handleChange("type")(value)}
                items={[
                  { label: "Super Admin", value: "admin" },
                  { label: "Inventory Manager", value: "inventory manager" },
                  { label: "Salers Manager", value: "sales manager" },
                ]}
                style={{
                  inputIOSContainer: {
                    borderColor: BASIC_COLORS.TERTIARY,
                    borderWidth: 1,
                    borderRadius: 10,
                    height: 40,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  },
                  viewContainer: {
                    borderColor: BASIC_COLORS.TERTIARY,
                    borderWidth: 1,
                    borderRadius: 10,
                    height: 40,
                    color: BASIC_COLORS.FONT_SECONDARY,
                    justifyContent: "center",
                  },
                  inputAndroidContainer: {
                    borderColor: BASIC_COLORS.TERTIARY,
                    borderWidth: 1,
                    borderRadius: 10,
                    height: 40,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  },
                }}
              />
            </View>
          </View>

          <View style={styles.inviteButtonContainer}>
            <MPSButton
              buttonTitle="Invite"
              buttonType="primary"
              onPress={() => handleSubmit()}
              // buttonStyle={styles.inviteButton}
            />
          </View>
        </ScrollView>
      </BottomSheet>

      {/* <BottomSheet
        isVisible={showModal}
        backdropStyle={{
          maxHeight: "75%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        containerStyle={{
          backgroundColor: BASIC_COLORS.WHITE,
          maxHeight: "80%",
          minHeight: "80%",
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
            Edit Information
          </Text>
          <View
            style={{
              marginTop: 12,
            }}
          >
            <MPSInputField
              inputLabel={"Username"}
              inputPlaceholder={"Username"}
              value={values.username}
              error={errors.username ? true : false}
              errorMessage={errors.username}
              onChangeText={handleChange("username")}
            />
          </View>

          <View
            style={{
              marginTop: 12,
            }}
          >
            <MPSInputField
              inputLabel={"Email"}
              inputPlaceholder={"email"}
              value={values.email}
              error={errors.email ? true : false}
              errorMessage={errors.email}
              onChangeText={handleChange("email")}
            />
          </View>

          <View
            style={{
              marginTop: 12,
            }}
          >
            <MPSInputField
              inputLabel={"Phone number"}
              inputPlaceholder={"phone"}
              value={values.phone}
              error={errors.phone ? true : false}
              errorMessage={errors.phone}
              onChangeText={handleChange("phone")}
            />
          </View>

          <View
            style={{
              marginTop: 35,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <MPSButton
                buttonType={"secondary"}
                buttonStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 46,
                  paddingHorizontal: "17%",
                  borderColor: BASIC_COLORS.PRIMARY,
                  borderWidth: 3,
                  flex: 1,
                }}
                onPress={() => setShowModal(false)}
                buttonTitle={"Cancel"}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <MPSButton
                onPress={handleSubmit}
                buttonType={"primary"}
                buttonTitle="Save"
                disabled={
                  values.username !== userDetails.username ||
                  values.email !== userDetails.email ||
                  values.phone !== userDetails.phone
                    ? false
                    : true
                }
              />
            </View>
          </View>
        </ScrollView>
      </BottomSheet> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: BASIC_COLORS.FONT_PRIMARY,
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
  labelText: {
    fontSize: 14,
    fontWeight: "500",
  },
  secondaryText: {
    color: BASIC_COLORS.FONT_SECONDARY,
  },
  quantityText: {
    backgroundColor: "#D8EFDD",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 60,
    borderRadius: 8,
    color: BASIC_COLORS.FONT_SECONDARY,
  },
  addButton: {
    marginTop: 30,
  },
  chartContainer: {
    marginTop: 22,
  },
  chartHeaderText: {
    fontSize: 20,
    fontWeight: "700",
  },
  chartDescriptionText: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "400",
    maxWidth: 300,
    color: BASIC_COLORS.FONT_SECONDARY,
  },
  chartCard: {
    backgroundColor: BASIC_COLORS.WHITE,
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: 20,
    elevation: 2,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  backdropStyle: {
    maxHeight: "80%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    bottom: 0,
  },
  bottomSheetContainer: {
    backgroundColor: BASIC_COLORS.WHITE,
    maxHeight: "80%",
    minHeight: "80%",
    position: "absolute",
    width: "100%",
    justifyContent: "flex-end",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 0,
    paddingVertical: 31,
    paddingHorizontal: 31,
  },
  closeButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    padding: 5,
  },
  modalHeader: {
    paddingVertical: 7,
    fontSize: 25,
    fontWeight: "bold",
    color: BASIC_COLORS.FONT_PRIMARY,
  },
  inviteButtonContainer: {
    paddingVertical: 30,
  },
  inviteButton: {
    width: "45%",
  },
});

export default EmployeesHomeScreen;
