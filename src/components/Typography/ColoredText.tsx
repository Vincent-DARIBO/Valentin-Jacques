import React from "react";
import {Text, TextStyle} from 'react-native'

type Props = {
    title: string;
    color: string;
    style?: TextStyle
}
export default function ColoredText({ title, color, style = {} }: Props) {
    return <Text style={{color, fontSize: 40, letterSpacing: 2, textAlign: "center", fontFamily: "Rama-Bold",...style}}>{title.toUpperCase()}</Text>
}