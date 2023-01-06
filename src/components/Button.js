import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Google from "../assets/images/google.png";

import { COLORS, SHADOWS, SIZES } from "../constants";

const Button = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          height: 42,
          width: "85%",
          backgroundColor: "white",
          marginBottom: 30,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,

          elevation: 17,
        }}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Image
          source={Google}
          style={{ width: 26, height: 27, marginLeft: 15, marginRight: 62 }}
        />
        <Text
          style={{
            fontSize: 15,
            fontFamily: "OpenSans_600SemiBold",
          }}
        >
          Continue with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Go learn
      </Text>
    </TouchableOpacity>
  );
};
