import React from "react";
import RoundedButton from "./RoundedButton";
import { Pressable } from "react-native";
import layouts from "../../styles/layouts";
import Colors from "../../styles/Colors";
import ButtonText from "../../components/Typography/ButtonText";

type Props = {
    title: string;
    pressed: boolean;
    onPress: () => void
}
export default function HeaderButton({ pressed, onPress, title, }: Props) {
    return pressed ? <RoundedButton title={title} onPress={onPress} color={Colors.YELLOW} />
        : <Pressable onPress={onPress} style={{
            ...layouts.center, paddingHorizontal: 16,
            paddingVertical: 2
        }}>
            <ButtonText text={title} style={{ color: Colors.WHITE, textTransform: "uppercase" }}/>
        </Pressable>
}