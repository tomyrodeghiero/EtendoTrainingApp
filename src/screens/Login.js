import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";

const Login = ({ navigation }) => {
  const [loaded] = useFonts({
    OpenSans_600SemiBold,
  });

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/login.png")}
        style={{ width: "100%", height: "100%" }}
      />
      {/* button */}
      <Button navigation={navigation} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    zIndex: 1,
  },
});
