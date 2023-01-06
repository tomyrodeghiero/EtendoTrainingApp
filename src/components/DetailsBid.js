import { View, Text, Image, Button } from "react-native";
import { EthPrice } from "./SubInfo";
import { SIZES, COLORS } from "../constants";
const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View>
        <Text
          style={{
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Resolved by {bid.name}
        </Text>

        <Text
          style={{
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;