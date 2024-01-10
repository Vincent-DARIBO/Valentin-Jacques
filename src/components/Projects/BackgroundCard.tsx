import React, { useRef } from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  Image,
  View,
  Button,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../styles/Colors";

export type BackgroundCardPros = {
  image?: ImageSourcePropType | null;
  onPress: () => void;
  action: "PREV" | "NEXT" | "END";
};

export const BACKGROUNG_CARD_WIDTH = 150;

export default function BackgroundCard({
  onPress,
  action,
}: BackgroundCardPros) {
  const iconName = action === "NEXT" ? "caretright" : "caretleft";
  return (
    <View
      style={[
        backgroundCardStyles.container,
        { backgroundColor: Colors.BLACK },
      ]}
    >
      {action !== "END" && (
        <Pressable
          onPress={() => onPress()}
          style={backgroundCardStyles.caretIcon}
        >
          <AntDesign name={iconName} size={30} color={Colors.WHITE} />
        </Pressable>
      )}
    </View>
  );
}

export const backgroundCardStyles = StyleSheet.create({
  container: {
    height: 400,
    width: BACKGROUNG_CARD_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 40,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    backgroundColor: "black",
  },
  image: {
    height: 400,
    width: 150,
    resizeMode: "cover",
    borderWidth: 2,
    borderRadius: 40,
  },
  caretIcon: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
