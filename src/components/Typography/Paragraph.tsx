import React from "react";
import { Text } from "react-native";
import { TextProps } from "./types";

export default function Paragraph({ text, style, ...props }: TextProps) {
  return (
    <Text
      style={[{ fontFamily: "NotoSans-Regular", fontSize: 15 }, style]}
      {...props}
    >
      {text} {props.children}
    </Text>
  );
}
