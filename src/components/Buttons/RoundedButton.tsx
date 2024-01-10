import React from "react";
import { StyleSheet, Pressable, ViewStyle, TextStyle } from "react-native";
import layouts from '../../styles/layouts'
import Colors from "../../styles/Colors";
import ButtonText from "../../components/Typography/ButtonText";

type Props = {
    title: string;
    color: string;
    onPress: () => void;
    style?: ViewStyle
    textStyle?: TextStyle;
    icon?: any
}

export default function RoundedButton({ title, color, onPress, style, textStyle, icon }: Props) {
    return <Pressable style={[styles.container, { backgroundColor: color, gap: icon ? 10 : 0, flexDirection: icon ? "row" : "column" }, style]} onPress={() => onPress()}>
        <ButtonText text={title} style={{ color: Colors.WHITE, textTransform: "uppercase", ...textStyle }} />
        {icon}
    </Pressable>
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        ...layouts.center,
    },
})