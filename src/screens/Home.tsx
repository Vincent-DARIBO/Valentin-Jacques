import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, useWindowDimensions, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Target, ScrollView } from "@nandorojo/anchor";
import { StackScreenProps } from "@react-navigation/stack";

import RoundedIconButton from "../components/Buttons/RoundedIconButton";
import About from "../components/Sections/About";
import AnswerYourNeeds from "../components/Sections/AnswerYourNeeds";
import Projects from "../components/Sections/Projects";
import Colors from "../styles/Colors";
import layouts from "../styles/layouts";
import useScroll from "../hooks/useScroll";
import Services from "../components/Sections/Services";
import Partners from "../components/Sections/Partners";
import Contact from "../components/Sections/Contact";
import { RootStackParams } from "../navigation/types";
import { ResizeMode, Video } from "expo-av";
import useIsPhone from "../providers/hooks/useIsPhone";
import Footer from "../components/Sections/Footer";
import Drawer from "../components/Navigation/Drawer";
import useDrawer from "../providers/hooks/useDrawer";
import { pauseVideo, playVideo } from "../utils/videoHandler";

type Props = StackScreenProps<RootStackParams, "Home">;
export default function Home({ route }: Props) {
  const { height, width } = useWindowDimensions();
  const { isPhone, setIsPhone } = useIsPhone();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (width < 500) setIsPhone(true);
    else setIsPhone(false);
  }, [width]);

  const { drawerPressed } = useDrawer();

  const { handleScroll } = useScroll();

  function onMainVideoPress() {
    console.log("je passe");
    if (playing) {
      pauseVideo("mainVideo");
      setPlaying(false);
    } else {
      playVideo("mainVideo");
      setPlaying(true);
    }
  }
  useEffect(() => {
    playVideo("mainVideo");
    setPlaying(true);
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <ScrollView
        contentContainerStyle={styles.container}
        onScroll={(event) => {
          if (playing) {
            pauseVideo("mainVideo");
            setPlaying(false);
          }
          handleScroll(event.nativeEvent);
        }}
        scrollEventThrottle={16}
        anchors={route?.params?.anchors}
      >
        <Target
          name="video"
          style={{
            height,
            width: isPhone ? "100%" : 1920,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%", height: "100%" }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/gFZK9M5j7KI?si=gMtF4GoYMXkTe2dl&autoplay=1&controls=0&enablejsapi=1`}
                title="YouTube video player"
                allow="autoplay"
                id="mainVideo"
                allowFullScreen
              ></iframe>
              <Pressable
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
                onPress={onMainVideoPress}
              ></Pressable>
            </View>

            <RoundedIconButton
              backgroundColor="transparent"
              icon={
                <AntDesign name="caretdown" size={25} color={Colors.YELLOW} />
              }
              onPress={() =>
                route?.params?.anchors.current?.scrollTo("about", {
                  animated: true,
                  offset: -50,
                })
              }
              style={{
                borderWidth: 1,
                borderColor: Colors.YELLOW,
                position: "absolute",
                marginHorizontal: "50%",
                bottom: 20,
              }}
            />
          </View>
        </Target>

        <View
          style={{
            width: "100%",
            paddingHorizontal: isPhone ? 25 : 50,
            gap: 50,
            alignSelf: "center",
          }}
        >
          <Target
            style={{ marginTop: 100, width: "100%", alignSelf: "center" }}
            name="about"
          >
            <About />
          </Target>

          <AnswerYourNeeds />

          <Target style={{ marginTop: 100 }} name="projects">
            <Projects />
          </Target>

          <Target style={{ marginTop: 100 }} name="services">
            <Services />
          </Target>
          <Partners />

          <Target name="contact">
            <Contact />
          </Target>
        </View>

        <Footer anchors={route.params.anchors} />
      </ScrollView>
      {drawerPressed && <Drawer anchors={route.params.anchors} />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    width: 200,
    padding: 4,
    color: Colors.WHITE,
  },
  submitButton: {
    width: 200,
    ...layouts.center,
    padding: 8,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    marginTop: 10,
  },
});
