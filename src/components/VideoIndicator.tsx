import React from "react";
import { View } from "react-native";

type Props = {
  videos: Array<{ video: string; shortDescription: string }>;
  highlightedVideo: number;
};
export default function VideoIndicator({ videos, highlightedVideo }: Props) {
  return (
    <View
      style={{
        gap: 5,
        marginTop: 10,
        flexDirection: "row",
      }}
    >
      {videos.map((_, index) => (
        <View
          key={index}
          style={{
            height: 10,
            width: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
            backgroundColor:
              index === highlightedVideo ? "gray" : "transparent",
          }}
        />
      ))}
    </View>
  );
}
