import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreen";
import Search from "../components/Search";
import Icon from "../components/Icon";
import Notification from "../components/Notification";
import Chat from "../components/Chat";
import { StyleSheet, Animated, Dimensions } from "react-native";
const tabs = [
  {
    name: "ImageHome",
    screen: HomeScreen,
  },
  {
    name: "Search",
    screen: Search,
  },
  {
    name: "Notification",
    screen: Notification,
  },
  {
    name: "Chat",
    screen: Chat,
  },
];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        {tabs.map(({ name, screen }, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Icon
                      icon={name}
                      size={40}
                      style={{
                        tintColor: focused ? "#202452" : "#8b8989",
                      }}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    width: 17,
    height: 2.5,
    left: width / tabs.length / 2 - 9,
    bottom: 5,
    backgroundColor: "#E0BD00",
    zIndex: 100,
  },
});

export default TabNavigator;
