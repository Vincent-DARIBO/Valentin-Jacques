import { StyleSheet } from "react-native";

const layouts = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: 'center',
    },
    row: {
        flexDirection: "row"
    },
    banner: {
        maxWidth: 800,
        minWidth: 300,
        borderWidth: 2,
    }
})

export default layouts