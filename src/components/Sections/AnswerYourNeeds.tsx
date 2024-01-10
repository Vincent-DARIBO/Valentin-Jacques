import React from "react";
import { View } from "react-native";
import ColoredText from "../Typography/ColoredText";
import layouts from "../../styles/layouts";
import Colors from "../../styles/Colors";


export default function AnswerYourNeeds() {

    return <View style={[layouts.center,
    {
        gap: 20,
        paddingHorizontal: 16,
        marginTop: 50
    }]}>
        <ColoredText title="Un particulier cherchant à capturer un mariage inoubliable ou une aventure passionnante ?" color={Colors.GREEN} />
        <ColoredText title="Ou ..." color={Colors.BLACK} style={{fontWeight: "bold"}} />
        <ColoredText title="Une entreprise cherchant à promouvoir vos produits, services ou évènements ?" color={Colors.BLUE} />
        <View style={{marginTop: 10}}>
             <View style={{ width: "100%", position: "absolute" }}><View style={{ width: 20, height: 3, backgroundColor: Colors.RED, alignSelf: "flex-start"}} /></View>
            <View style={{ height: "100%",  position: "absolute" }}><View style={{ width: 3, height: 20, backgroundColor: Colors.RED, alignSelf: "flex-start", }} /></View>
            <ColoredText title="Je suis la pour vous aider à donner vie à vos idées !"
                color={Colors.RED}
                style={{
                    alignSelf: "center",
                    marginHorizontal: 10,
                    marginVertical: 8
                }} />
            <View style={{ width: "100%", height: "100%", justifyContent: "flex-end", position: "absolute" }}><View style={{ width: 3, height: 20, backgroundColor: Colors.RED, alignSelf: "flex-end" }} /></View>
            <View style={{
                width: "100%",
                justifyContent: "flex-end",
                position: "absolute",
                bottom: 0
            }}><View style={{
                width: 20,
                height: 3,
                alignSelf: "flex-end",
                backgroundColor: Colors.RED
            }} /></View>
        </View>
    </View>

}