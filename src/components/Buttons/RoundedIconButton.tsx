import layouts from '../../styles/layouts';
import React from 'react'
import { StyleSheet, Pressable, ViewProps, ViewStyle } from 'react-native'

type Props = {
    backgroundColor: string;
    icon: any;
    onPress: () => void;
    style?: ViewStyle;
    size?: number
}
export default function RoundedIconButton({ backgroundColor, icon, onPress, style, size = 50 }: Props) {
    return <Pressable
        onPress={() => onPress()}
        style={[styles.rounded, { backgroundColor,  width: size,
            height: size,
            borderRadius: size,...style }]}
    >
        {icon}
    </Pressable>
}

const styles = StyleSheet.create({
    rounded: {
        ...layouts.center

    }
})