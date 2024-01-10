import React from "react";
import { Text } from "react-native";
import { TextProps } from "./types";

export default function ButtonText({ text, style }: TextProps) {
  return (
    <Text style={[{ fontFamily: "NotoSans-Medium", fontSize: 15 }, style]}>
      {text}
    </Text>
  );
}
