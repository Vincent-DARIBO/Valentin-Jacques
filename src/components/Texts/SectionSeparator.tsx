import Colors from "../../styles/Colors"
import React from "react"
import { View, Image, StyleSheet, Dimensions, ImageSourcePropType } from "react-native"

export const isPhone = Dimensions.get('window').width <= 300
type Props  = { 
    image: ImageSourcePropType
}

export default function SectionSeparator({ image}: Props) {
    const {width} = Dimensions.get("window")

    return <View style={styles.container}>
        <Image style={styles.image} source={image}/>
        {width > 500 && <View style={styles.divider} />}
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        marginVertical: 30
    },
    image: {
       width: 200,
       height: 100,
       resizeMode: "stretch",
       aspectRatio: 1 / 1,
       flex: Dimensions.get("window").width > 500 ? 1: 0
    },
    divider: {
        height: 2,
        flex: 19,    
        backgroundColor: Colors.RED,
        alignSelf: "center",
        // width: "90%",
        // minWidth: "60%",

    },
})