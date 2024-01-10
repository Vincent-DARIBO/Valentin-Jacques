import React from "react";
import { Linking, View, useWindowDimensions } from "react-native";
import { AntDesign, Entypo, EvilIcons } from "@expo/vector-icons";

import layouts from "../../styles/layouts";
import Colors from "../../styles/Colors";
import Title from "../Typography/Title";
import RoundedButton from "../Buttons/RoundedButton";
import RoundedIconButton from "../Buttons/RoundedIconButton";
import Paragraph from "../Typography/Paragraph";

export default function Contact() {
  const { width } = useWindowDimensions();
  const shouldResize = width < 700;

  function openLink(url: string) {
    Linking.openURL(url).catch((e) => console.log("Could not open link" + url));
  }

  return (
    <View style={{ gap: 15, alignItems: "center" }}>
      <View
        style={[
          layouts.center,
          layouts.banner,
          {
            width: "60%",
            borderWidth: 1,
            alignSelf: "center",
            borderColor: Colors.BLACK,
            padding: 20,
            borderRadius: 20,
          },
        ]}
      >
        <View style={[layouts.center, { gap: 15 }]}>
          <Title
            text="UN PROJET, UNE IDÉE ?"
            style={{
              color: Colors.BLUE,
              fontFamily: "Rama-Regular",
              fontSize: shouldResize ? 30 : undefined,
            }}
          />
          <Title
            text="PRENONS CONTACT !"
            style={{
              fontSize: shouldResize ? 50 * 0.75 : 50,
              fontWeight: "bold",
              color: Colors.YELLOW,
            }}
          />
        </View>
      </View>

      <RoundedButton
        title="contact"
        color={Colors.YELLOW}
        textStyle={{ color: Colors.BLACK, fontWeight: "bold" }}
        onPress={() => Linking.openURL(`tel: ${+33651599105}`)}
        style={{ paddingVertical: 8, paddingHorizontal: 32 }}
        icon={<AntDesign name="arrowright" size={15} />}
      />
      <Paragraph
        text="n'hésiter pas à jeter un oeil ..."
        style={{ color: Colors.GREY, textTransform: "uppercase" }}
      />
      <View style={[layouts.row, { alignItems: "center", gap: 20 }]}>
        <RoundedIconButton
          onPress={() =>
            openLink(
              "https://www.instagram.com/vlt_visual?igsh=MXJuZ3Q1MmdtOXN1Yg%3D%3D&utm_source=qr"
            )
          }
          backgroundColor={Colors.BLUE}
          icon={<AntDesign name="instagram" size={25} color={Colors.WHITE} />}
        />

        <RoundedIconButton
          onPress={() =>
            openLink(
              "https://www.linkedin.com/in/valentin-j-93a056252/"
            )
          }
          backgroundColor={Colors.BLUE}
          icon={<Entypo name="linkedin" size={25} color={Colors.WHITE} />}
        />
      </View>
    </View>
  );
}
