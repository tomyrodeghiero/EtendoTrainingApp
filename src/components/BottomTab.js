import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import Search from "./Search";

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //tabBarActiveTintColor: "red",
        //tabBarActiveBackgroundColor: "grey",
        //tabBarInactiveBackgroundColor: "orange",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          switch (route.name) {
            case "HomeScreen":
              iconName = focused ? "home" : "home-outline";
              break;
            case "ProfileScreen":
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};
