import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import ButtonText from "../../components/Typography/ButtonText";
import Colors from "../../styles/Colors";

export default function Partners() {
  const { width } = useWindowDimensions();
  const shouldResize = width < 700;

  const images = [
    {
      img: require("../../../assets/images/partners/kabocharts.png"),
      height: 150,
      width: 150,
    },
    {
      img: require("../../../assets/images/partners/lesmills-black.png"),
      height: 150,
      width: 250,
    },
    {
      img: require("../../../assets/images/partners/elk.png"),
      height: 150,
      width: 150,
    },
    {
      img: require("../../../assets/images/partners/logo-ville-lons-le-saunier.png"),
      height: 150,
      width: 250,
    },
    {
      img: require("../../../assets/images/partners/departement-jura.png"),
      height: 150,
      width: 150,
    },
    {
      img: require("../../../assets/images/partners/iceo.png"),
      height: 150,
      width: 150,
    },
  ];
  return (
    <View style={{ alignItems: "center", marginVertical: 50, gap: 20 }}>
      <ButtonText
        text="Ils m'ont fait confiance !"
        style={{
          textTransform: "uppercase",
          color: Colors.YELLOW,
          fontFamily: "Rama-Bold",
          fontSize: shouldResize ? 30 : 50,
        }}
      />
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            source={item.img}
            style={{
              height: shouldResize ? item.height * 0.5 : item.height,
              width: shouldResize ? item.width * 0.5 : item.width,
              resizeMode: "contain",
              margin: 20,
            }}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={{ alignItems: "center" }}
        style={{ alignSelf: "center" }}
      />
    </View>
  );
}
