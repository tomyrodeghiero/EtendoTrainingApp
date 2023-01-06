import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Animated,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import OnboardingItem from "../components/OnboardingItem";
import Paginator from "../components/Paginator";
import slides from "../data/slides";

const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          marginTop: 120,
          height: 40,
          width: "22%",
          backgroundColor: "#eeca00",
          marginBottom: 65,
          borderRadius: 14,
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 230,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,
          elevation: 15,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            fontSize: 15,
            color: "white",
            fontFamily: "OpenSans_600SemiBold",
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
