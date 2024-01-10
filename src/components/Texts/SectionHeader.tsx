import React from 'react'
import { View, StyleSheet } from 'react-native'

import Title from '../../components/Typography/Title';

type Props = {
    title: string;
    color: string
}

export default function SectionHeader({ title, color }: Props) {
    return <View style={[styles.container, { borderColor: color }]}>
        <Title text={title} style={{ color }} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 40,
        paddingHorizontal: 32,
        paddingVertical: 8,
        // maxWidth: 150,
        // height: 25
        // height: 50
    }
})