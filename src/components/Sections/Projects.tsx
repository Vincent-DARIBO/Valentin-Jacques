import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, FlatList, Animated, ImageSourcePropType, ListRenderItem } from "react-native";
import SectionHeader from "../Texts/SectionHeader";
import layouts from "../../styles/layouts";
import Colors from "../../styles/Colors";
import SectionSeparator from "../Texts/SectionSeparator";
import HighlightedCard from "../Projects/HighlightedCard";
import BackgroundCard, { BackgroundCardPros } from "../Projects/BackgroundCard";
import VideoCaroussel from "../../components/Projects/VideosCaroussel";
import PhotosCaroussel from "../../components/Projects/PhotosCaroussel";
import {  videos } from "../../constants/data";

type RenderPhotosProps = ListRenderItem<{ image: ImageSourcePropType }>
export default function Projects() {

    return <View style={styles.container}>
        <View style={{ justifyContent: "flex-end", width: "100%", ...layouts.row }}>
            <SectionHeader title="projets" color={Colors.RED} />
        </View>
        <VideoCaroussel videos={videos} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 15
    },
})