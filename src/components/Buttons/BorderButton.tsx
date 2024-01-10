import React from "react";
import { StyleSheet, Pressable } from "react-native";
import layouts from '../../styles/layouts'
import Colors from "../../styles/Colors";
import ButtonText from "../../components/Typography/ButtonText";

type Props = {
    title: string;
    color: string;
    onPress: () => void
}

export default function BorderedButton({ title, color, onPress }: Props) {
    return <Pressable onPress={onPress} style={[styles.container, layouts.center, { backgroundColor: color, }]}>
        <ButtonText text={title} style={{ color: Colors.WHITE, textTransform: "uppercase" }} />
    </Pressable>
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderWidth: 1,
        // paddingBottom: 1,
        // borderRightWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
})