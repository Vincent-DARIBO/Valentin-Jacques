import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  Text,
  ListRenderItemInfo,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BackgroundCard, {
  BACKGROUNG_CARD_WIDTH,
  BackgroundCardPros,
} from "./BackgroundCard";
import HighlightedCard, { HIGHLIGHTED_CARD_WIDTH } from "./HighlightedCard";
import layouts from "../../styles/layouts";
import Colors from "../../styles/Colors";
import useIsPhone from "../../providers/hooks/useIsPhone";
import VideoIndicator from "../VideoIndicator";

type Props = {
  videos: Array<{ video: string; shortDescription: string }>;
};

export default function VideoCaroussel({ videos }: Props) {
  const videosListRef = React.useRef<FlatList>(null);
  const [highlightedVideo, setHighlightedVideo] = React.useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setscrollDirection] = useState("");
  const scrollVideoOffset = React.useRef(0);
  const hasScrolledVideos = React.useRef(false);
  const { isPhone } = useIsPhone();

  const toggleVideoScroll = useCallback(
    (action: BackgroundCardPros["action"], index: number) => {
      if (!hasScrolledVideos.current) hasScrolledVideos.current = true;
      if (action == "NEXT") {
        setHighlightedVideo(index);
        videosListRef?.current?.scrollToOffset({
          offset: scrollVideoOffset.current + (BACKGROUNG_CARD_WIDTH + 40),
          animated: true,
        });
      } else if (action == "PREV") {
        setHighlightedVideo(index);
        videosListRef?.current?.scrollToOffset({
          offset: scrollVideoOffset.current - (BACKGROUNG_CARD_WIDTH + 40),
          animated: true,
        });
      }
    },
    [videosListRef]
  );

  function onScroll({
    nativeEvent: {
      contentOffset: { x },
    },
  }: NativeSyntheticEvent<NativeScrollEvent>) {
    scrollVideoOffset.current = x;
  }
  function goToPreviousVideos() {
    setHighlightedVideo((prevState) =>
      prevState >= 1 ? prevState - 1 : prevState
    );
    videosListRef?.current?.scrollToOffset({
      offset: scrollVideoOffset.current - (BACKGROUNG_CARD_WIDTH + 70) * 2,
      animated: true,
    });
  }

  function goToNextVideos() {
    setHighlightedVideo((prevState) =>
      prevState < videos.length - 1 ? prevState + 1 : prevState
    );
    videosListRef?.current?.scrollToOffset({
      offset: scrollVideoOffset.current + (BACKGROUNG_CARD_WIDTH + 70) * 2,
      animated: true,
    });
  }

  const renderVideos = ({
    index,
    item,
  }: ListRenderItemInfo<Props["videos"][0]>) => {
    const autoplaySuffix = index !== 0 ? "&autoplay=1" : "";
    const url = item.video + autoplaySuffix;

    if (isPhone) {
      return (
        <View style={{ flexDirection: "row" }}>
          <HighlightedCard
            isVideo
            date="11.01.2021"
            videoUrl={item.video}
            description={item.shortDescription}
            onDiscoverPress={() => {}}
            title={"DJ Tony" + index}
            index={index}
          />
        </View>
      );
    }
    let action: BackgroundCardPros["action"] = "END";
    if (index > highlightedVideo) {
      action = "NEXT";
    } else if (index < highlightedVideo) {
      action = "PREV";
    } else {
      action = "END";
    }

    return index == highlightedVideo ? (
      <HighlightedCard
        isVideo
        date="11.01.2021"
        videoUrl={url}
        description={item.shortDescription}
        onDiscoverPress={() => {}}
        title={"DJ Tony" + index}
        index={index}
      />
    ) : (
      <BackgroundCard
        action={action}
        onPress={() => toggleVideoScroll(action, index)}
      />
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={videos}
        onScroll={onScroll}
        ref={videosListRef}
        scrollEnabled={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderVideos}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ padding: 10, alignItems: "center" }}
        style={{
          width: HIGHLIGHTED_CARD_WIDTH + BACKGROUNG_CARD_WIDTH * 2 + 100,
          alignSelf: "center",
        }}
        getItemLayout={(_, index) => {
          return {
            length: HIGHLIGHTED_CARD_WIDTH + 40,
            offset: HIGHLIGHTED_CARD_WIDTH * index,
            index,
          };
        }}
        ListHeaderComponent={() => (
          <View style={layouts.row}>
            <BackgroundCard onPress={() => {}} action="END" />
            <View style={styles.separator} />
          </View>
        )}
        ListFooterComponent={() => (
          <View style={layouts.row}>
            <View style={styles.separator} />
            <BackgroundCard onPress={() => {}} action="END" />
          </View>
        )}
      />
      <View
        style={[
          layouts.row,
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          },
        ]}
      >
        <VideoIndicator videos={videos} highlightedVideo={highlightedVideo} />
        {isPhone && (
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              gap: 5,
              position: "absolute",
              right: 10,
            }}
          >
            <Pressable
              style={[layouts.center, styles.pressableArrow]}
              onPress={goToPreviousVideos}
            >
              <AntDesign name="arrowleft" size={30} />
            </Pressable>
            <Pressable
              style={[layouts.center, styles.pressableArrow]}
              onPress={goToNextVideos}
            >
              <AntDesign name="arrowright" size={30} />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    alignSelf: "center",
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.RED,
    marginHorizontal: 15,
  },
  pressableArrow: { borderWidth: 1, borderRadius: 25, paddingHorizontal: 2 },
});
