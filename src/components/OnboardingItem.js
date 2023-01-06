import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

import {
  useFonts,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  const [loaded] = useFonts({
    OpenSans_600SemiBold,
    OpenSans_500Medium,
    OpenSans_700Bold,
  });

  if (!loaded) return null;

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 1000,
    marginBottom: 150,
    justifyContent: "center",
  },
  title: {
    marginTop: -500,
    marginBottom: 20,
    fontSize: 40,
    fontFamily: "OpenSans_700Bold",
    color: "#181f6e",
    textAlign: "center",
  },
  description: {
    marginBottom: -100,
    color: "#62656b",
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 24,
    fontFamily: "OpenSans_600SemiBold",
  },
});
