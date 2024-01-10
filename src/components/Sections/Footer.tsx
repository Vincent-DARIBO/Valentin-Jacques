import * as React from "react";
import { Dimensions, Image, Linking, Pressable, View } from "react-native";
import { AntDesign, Entypo, EvilIcons } from "@expo/vector-icons";

import Colors from "../../styles/Colors";
import RoundedIconButton from "../Buttons/RoundedIconButton";
import layouts from "../../styles/layouts";
import Paragraph from "../Typography/Paragraph";
import { AnchorsRef } from "@nandorojo/anchor";

type Props = {
  anchors: React.RefObject<AnchorsRef>;
};
function Footer({ anchors }: Props) {
  const scrollRefs = ["about", "projects", "services", "contact"];
  const shouldResize = Dimensions.get("window").width < 700;

  const onItemPressed = (index: number) => {
    anchors.current?.scrollTo(scrollRefs[index], {
      animated: true,
      offset: -50,
    });
  };
  return (
    <View
      style={[
        layouts.row,
        {
          height: 300,
          width: "100%",
          backgroundColor: Colors.GREY,
          alignItems: "center",
          paddingHorizontal: 20,
        },
      ]}
    >
      <View
        style={[
          layouts.center,
          {
            flex: 1,
            alignSelf: "center",
          },
        ]}
      >
        <Image
          style={[{ height: 50, width: 50, resizeMode: "contain" }]}
          source={require("../../../assets/images/valentin-jacques-logo.png")}
        />
      </View>
      <View style={[layouts.center, { flex: 1, gap: 5 }]}>
        <View>
          {[
            "À propos",
            "Projets",
            "Services",
            "Contact",
            "Confidentialité",
          ].map((item, index) => (
            <Pressable onPress={() => onItemPressed(index)} key={index}>
              <Paragraph
                text={item}
                style={{
                  color: Colors.WHITE,
                  textTransform: "uppercase",
                }}
              />
            </Pressable>
          ))}
        </View>
      </View>
      <View style={[layouts.center, { flex: 1, gap: 5 }]}>
        <View>
          <Pressable
            style={{ display: "flex", flexDirection: "row", gap: 2 }}
            onPress={() =>
              Linking.openURL(`mailto: valentin.jacques@gmail.com`)
            }
          >
            <Paragraph text="Email: " style={{ color: Colors.WHITE }}>
              <Paragraph
                text="valentin.jacques@gmail.com"
                style={{ textDecorationLine: "underline" }}
              />
            </Paragraph>
          </Pressable>
          <Pressable
            style={{ display: "flex", flexDirection: "row", gap: 2 }}
            onPress={() => Linking.openURL(`tel: ${+33651599105}`)}
          >
            <Paragraph text="Téléphone: " style={{ color: Colors.WHITE }}>
              <Paragraph
                text="06 51 59 91 05"
                style={{ textDecorationLine: "underline" }}
              />
            </Paragraph>
          </Pressable>
        </View>
        <View
          style={[layouts.row, { gap: shouldResize ? 10 : 20, marginTop: 5 }]}
        >
          <RoundedIconButton
            onPress={() => {}}
            size={25}
            backgroundColor={Colors.WHITE}
            icon={<AntDesign name="instagram" size={10} color={Colors.GREY} />}
          />
          <RoundedIconButton
            onPress={() => {}}
            size={25}
            backgroundColor={Colors.WHITE}
            icon={<AntDesign name="twitter" size={10} color={Colors.GREY} />}
          />
          <RoundedIconButton
            onPress={() => {}}
            size={25}
            backgroundColor={Colors.WHITE}
            icon={<Entypo name="linkedin" size={10} color={Colors.GREY} />}
          />
          <RoundedIconButton
            onPress={() => {}}
            size={25}
            backgroundColor={Colors.WHITE}
            icon={
              <EvilIcons name="sc-facebook" size={20} color={Colors.GREY} />
            }
          />
        </View>
      </View>
    </View>
  );
}

export default Footer;
