import React from "react";
import { View } from "react-native";

import Accordion, { AccordionItem } from "../Services/Accordion";
import SectionHeader from "../../components/Texts/SectionHeader";
import Colors from "../../styles/Colors";
import { servicesDescription, traineesDescription } from "../../texts";

export default function Services() {
  const services: AccordionItem[] = [
    // {
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    //   title: "Photographie",
    //   onMorePress: () => console.log("know more about photography service"),
    //   image: require("../../../assets/images/services/camera.png"),
    // },
    {
      description: servicesDescription,
      title: "Vidéo",
      onMorePress: () => console.log("know more about video service"),
      image: {
        uri: "https://plus.unsplash.com/premium_photo-1682146749338-f380c93c8dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
      },
    },
    {
      description: traineesDescription,
      title: "Cours",
      onMorePress: () => console.log("know more about trainings"),
      image: require("../../../assets/images/services/course.jpg"),
    },
  ];
  return (
    <View style={{ width: "100%", gap: 30 }}>
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          marginLeft: 40,
        }}
      >
        <SectionHeader title="services" color={Colors.BLUE} />
      </View>
      <Accordion items={services} />
    </View>
  );
}
