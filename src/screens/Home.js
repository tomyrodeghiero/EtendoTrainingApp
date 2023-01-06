import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { BottomTab } from "../components/BottomTab";
import HomeScreen from "../components/HomeScreen";
import MainNavigator from "../navigations/MainNavigator";
import TabNavigator from "../navigations/TabNavigator";

const Home = () => {
  return (
    <>
      <TabNavigator />
    </>
  );
};

export default Home;
