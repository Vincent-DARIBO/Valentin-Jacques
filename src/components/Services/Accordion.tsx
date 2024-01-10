import React from "react";
import { ImageSourcePropType, View, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image, ImageStyle } from "expo-image";

import RoundedButton from "../../components/Buttons/RoundedButton";
import Colors from "../../styles/Colors";
import layouts from "../../styles/layouts";
import Title from "../../components/Typography/Title";
import Paragraph from "../../components/Typography/Paragraph";
import Markdown from "react-native-markdown-renderer";

export type AccordionItem = {
  title: string;
  image: ImageSourcePropType;
  customStyle?: Partial<{
    base?: ImageStyle;
    contentPosition?: Partial<{
      top: number;
      bottom: number;
      right: number;
      left: number;
    }>;
  }>;
  description: string;
  onMorePress: () => void;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [selected, setSelected] = React.useState(0);
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={{ alignItems: "center", width: "100%" }}>
      {items.map((item, index, array) => {
        const isSelected = selected === index;
        return (
          <Pressable
            onPress={() => setSelected(index)}
            style={{
              alignItems: "center",
              gap: 10,
              borderBottomColor: Colors.BLACK,
              width: "100%",
            }}
            key={index}
          >
            {index !== 0 && <View style={styles.separator} />}
            <View
              style={[
                layouts.row,
                {
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                  width: "100%",
                },
              ]}
            >
              <Pressable
                style={[layouts.row, { gap: 20 }]}
                onPress={() => setSelected(index)}
              >
                <Title
                  text={(index + 1).toString().padStart(2, "0")}
                  style={{ color: isSelected ? Colors.BLUE : Colors.BLACK }}
                />
                <Title
                  text={item.title.toUpperCase()}
                  style={{ color: isSelected ? Colors.BLUE : Colors.BLACK }}
                />
              </Pressable>
              <Pressable
                style={styles.iconContainer}
                onPress={() => setSelected(index)}
              >
                <AntDesign
                  name="arrowdown"
                  size={15}
                  color={isSelected ? Colors.BLUE : Colors.GREY}
                  style={{
                    transform: [{ rotate: isSelected ? "-130deg" : "0deg" }],
                  }}
                />
              </Pressable>
            </View>
            {isSelected && (
              <>
                <Image
                  style={[styles.image, item?.customStyle?.base]}
                  source={item.image}
                  placeholder={blurhash}
                  contentFit="cover"
                  contentPosition={item?.customStyle?.contentPosition}
                />
                <Markdown
                  style={StyleSheet.create({
                    text: {
                      minWidth: 300,
                      maxWidth: 800,
                      marginTop: 10,
                      fontSize: 20,
                      fontFamily: "NotoSans-Regular",
                      marginBottom: 20,
                    },
                  })}
                >
                  {item.description}
                </Markdown>
                {/* <RoundedButton
                  title="Voir plus"
                  onPress={() => item.onMorePress()}
                  color={Colors.APPLE_GREEN}
                  textStyle={{ color: Colors.BLACK }}
                  style={{ marginBottom: 20 }}
                /> */}
              </>
            )}
            {index === array.length - 1 && <View style={styles.separator} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 25,
    width: 25,
    borderRadius: 25,
    borderWidth: 1,
    ...layouts.center,
  },
  image: {
    width: "100%",
    height: 350,
    ...layouts.banner,
    borderRadius: 30,
    borderWidth: 1,
    resizeMode: "cover",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.BLACK,
  },
});
