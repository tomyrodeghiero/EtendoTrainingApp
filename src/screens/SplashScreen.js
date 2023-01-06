import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import {
  useFonts,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Login");
  }, 7000);

  const [loaded] = useFonts({
    OpenSans_600SemiBold,
    OpenSans_500Medium,
  });

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg-splashscreen.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          source={require("../assets/images/etendo.png")}
          style={styles.imageLogo}
        />
        <Text style={styles.subtitle}>developed by</Text>
        <Image
          source={require("../assets/images/futit.png")}
          style={styles.imageSmall}
        />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLogo: {
    marginBottom: 90,
    alignSelf: "center",
  },
  subtitle: {
    top: 200,
    color: "#63625e",
    fontFamily: "OpenSans_500Medium",
  },
  imageSmall: {
    top: 210,
  },
});
