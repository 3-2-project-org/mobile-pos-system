import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  ToastAndroid,
} from "react-native";
import { Icon } from "react-native-elements";
import CloseIcon from "../../../assets/CloseIcon";
import MPSButton from "../../atoms/Button/Button";
import { axiosInstance } from "../../../utils/common/api";

const MPSUserInfoModal = ({ visible, setVisible, userInfo }) => {
  const windowWidth = Dimensions.get("window").width;

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              width: windowWidth - 50,
              borderRadius: 20,
              paddingVertical: 45,
              paddingHorizontal: 30,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Employee Information
              </Text>

              <View style={{}}>
                <Pressable
                  onPress={() => setVisible(false)}
                  style={{
                    zIndex: 1,
                  }}
                >
                  <CloseIcon />
                </Pressable>
              </View>
            </View>

            <View
              style={{
                flexDirection: "column",
                marginBottom: 15,
                marginTop: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Icon
                    name="person-outline"
                    type="ionicon"
                    solid={true}
                    color="#625D5D"
                    size={24}
                    style={{
                      fontWeight: "700",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      width: 100,
                      color: "#625D5D",
                    }}
                  >
                    Name:
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    textAlign: "right",
                    color: "#625D5D",
                    maxWidth: 200,
                  }}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {userInfo?.username}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Icon
                    name="mail-outline"
                    type="ionicon"
                    solid={true}
                    color="#625D5D"
                    size={24}
                    style={{
                      fontWeight: "700",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      width: 100,
                      color: "#625D5D",
                    }}
                  >
                    Email:
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    textAlign: "right",
                    color: "#625D5D",
                    maxWidth: 200,
                  }}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {userInfo?.email}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Icon
                    name="call-outline"
                    type="ionicon"
                    solid={true}
                    color="#625D5D"
                    size={24}
                    style={{
                      fontWeight: "700",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      width: 100,
                      color: "#625D5D",
                    }}
                  >
                    Phone:
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    textAlign: "right",
                    color: "#625D5D",
                    maxWidth: 200,
                  }}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {userInfo?.phone}
                </Text>
              </View>

              <MPSButton
                buttonType={"error"}
                buttonStyle={{
                  backgroundColor: "none",
                  marginTop: 40,
                }}
                buttonTitle={
                  userInfo?.is_active ? "Deactivate Account" : "Activate Account"
                }
                onPress={async () => {
                  await axiosInstance
                    .patch(`/auth/update-user/${userInfo?._id}`, {
                      is_active: userInfo?.is_active ? false : true,
                    })
                    .then((res) => {
                      showToastWithGravityAndOffset("Account Deactivated");
                      setVisible(false);
                    })
                    .catch((err) => {
                      showToastWithGravityAndOffset("Something went wrong");
                    });
                }}
              />

              <MPSButton
                buttonType={"secondary"}
                buttonStyle={{
                  backgroundColor: "none",
                  marginTop: 10,
                }}
                buttonTitle={"Edit Information"}
              />
            </View>
          </View>
        </View>
      </Modal>

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
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
  },
});
export default MPSUserInfoModal;
