import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import SectionHeader from "../Texts/SectionHeader";
import Colors from "../../styles/Colors";
import { intro } from "../../texts";
import ButtonText from "../../components/Typography/ButtonText";
import useIsPhone from "../../providers/hooks/useIsPhone";
import { Image } from "expo-image";

export default function About() {
  const { isPhone } = useIsPhone();

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          marginLeft: 40,
        }}
      >
        <SectionHeader title="à propos" color={Colors.ORANGE} />
      </View>
      <View
        style={[
          styles.aboutContainer,
          isPhone ? styles.aboutContainerPhone : undefined,
        ]}
      >
        <View style={[isPhone ? styles.imagePhone : styles.image, styles.text]}>
          <ButtonText
            text={intro}
            style={{
              flex: 1,
              fontSize: 20,
            }}
          />
        </View>
        <View
          style={[
            isPhone ? styles.imagePhone : styles.image,
            {
              borderTopRightRadius: 30,
              borderTopLeftRadius: isPhone ? 30 : 0,
              borderBottomRightRadius: isPhone ? 0 : 30,
              flexDirection: isPhone ? "column" : "row",
            },
          ]}
        >
          <Image
            source={require("../../../assets/images/arena.jpg")}
            style={[
              {
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                borderTopRightRadius: 28,
                borderTopLeftRadius: isPhone ? 28 : 0,
                borderBottomRightRadius: isPhone ? 0 : 28,
              },
            ]}
          />
          {!isPhone && (
            <View
              style={{
                marginLeft: 2,
                gap: 2,
                height: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
              }}
            >
              <View
                style={{ width: 1, height: "90%", backgroundColor: "orange" }}
              />
              <View
                style={{ width: 1, height: "80%", backgroundColor: "orange" }}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    alignSelf: "center",
  },
  aboutContainerPhone: {
    flexDirection: "column-reverse",
  },
  aboutContainer: {
    backgroundColor: "lightreen",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    borderRadius: 30,
    borderColor: Colors.ORANGE,
    borderWidth: 2,
  },
  imagePhone: {
    minHeight: 200,
    width: "100%",
  },
  image: {
    minHeight: 400,
    height: "100%",
    width: "50%",
  },
  text: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 20,
  },
});
