import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

import RoundedButton from "../Buttons/RoundedButton";
import Colors from "../../styles/Colors";
import Title from "../../components/Typography/Title";
import Paragraph from "../../components/Typography/Paragraph";
import { backgroundCardStyles } from "./BackgroundCard";

type Props = {
  date: string;
  title: string;
  description: string;
  onDiscoverPress: () => void;
  image?: ImageSourcePropType;
  isVideo?: boolean;
  videoUrl?: any;
  index: number;
  playVideo?: () => void;
};

export const HIGHLIGHTED_CARD_WIDTH = 400;

export default function HighlightedCard({
  date,
  title,
  description,
  onDiscoverPress,
  image,
  videoUrl,
  isVideo,
  index,
  playVideo,
}: Props) {
  const [playing, setPlaying] = useState(false);
  const [textDisplayed, setTextDisplayed] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setTextDisplayed(true)}
      onHoverOut={() => setTextDisplayed(false)}
      style={styles.container}
    >
      <iframe
        width="100%"
        height={"500"}
        src={videoUrl}
        title="YouTube video player"
        className="border-radius: 30px;"
        id={`carousselVideo${index}`}
      ></iframe>

      {textDisplayed && (
        <Paragraph
          text={description}
          style={{
            position: "absolute",
            color: Colors.WHITE,
            bottom: 10,
            zIndex: 10,
            width: "80%",
            fontSize: 15,
          }}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 550,
    width: HIGHLIGHTED_CARD_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 15,
    zIndex: 10,
    // backgroundColor: "pink",
  },
  divider: {
    height: 2,
    width: 200,
    backgroundColor: Colors.BLACK,
    borderRadius: 10,
  },
  titleContainer: {
    gap: 5,
    alignItems: "center",
  },
});
