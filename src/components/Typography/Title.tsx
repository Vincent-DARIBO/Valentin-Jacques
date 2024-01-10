import React from "react";
import { Text } from "react-native";
import { TextProps } from "./types";


export default function Title({text, style}: TextProps) {
    return <Text style={[{fontFamily: "Rama-Bold", fontSize: 40, textTransform: "uppercase"}, style]}>{text}</Text>
}