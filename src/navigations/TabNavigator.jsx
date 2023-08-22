import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import HomeScreen from "../screens/HomeScreen";
import StatisticScreen from "../screens/StatisticScreen";
import UserProfileScreen from "../screens/UserProfileScreen";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          paddingHorizontal: 40,
          height: 53,
          backgroundColor: "white",
          elevation: 5,
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowColor: "black",
          shadowOpacity: 0.5,
          shadowRadius: 5,
        },
        tabBarActiveTintColor: "0FA958",
        tabBarInactiveTintColor: "#0FA958",
        tabBarIcon: ({ focused, color, size }) => {
          const iconSize = 26; 
          if (route.name === "Customers") {
            if (focused)
              return <Icon name="home" type="ionicon" color="#0FA958" size={iconSize}/>;
            else
              return (
                <Icon name="home-outline" type="ionicon" color="#0FA958" size={iconSize}/>
              );
          } else if (route.name === "Orders") {
            if (focused)
              return <Icon name="stats-chart" type="ionicon" color="#0FA958" size={iconSize}/>;
            else
              return (
                <Icon
                  name="stats-chart-outline"
                  type="ionicon"
                  color="#0FA958"
                  size={iconSize}
                />
              );
          } else if (route.name === "Profile") {
            if (focused)
              return <Icon name="person" type="ionicon" color="#0FA958" size={iconSize}/>;
            else
              return (
                <Icon name="person-outline" type="ionicon" color="#0FA958" size={iconSize}/>
              );
          }
        },
      })}
    >
    
      <BottomTab.Screen
        name="Customers"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={StatisticScreen}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
 