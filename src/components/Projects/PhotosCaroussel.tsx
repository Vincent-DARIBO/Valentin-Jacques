import React, { useCallback } from "react";
import { FlatList, ImageSourcePropType, StyleSheet, View } from "react-native";

import BackgroundCard, { BACKGROUNG_CARD_WIDTH, BackgroundCardPros } from "./BackgroundCard";
import HighlightedCard, { HIGHLIGHTED_CARD_WIDTH } from "./HighlightedCard";
import Colors from "../../styles/Colors";
import layouts from "../../styles/layouts";
import RoundedButton from "../../components/Buttons/RoundedButton";

type Props = {
    photos: Array<{ image: ImageSourcePropType }>
}
export default function PhotosCaroussel({ photos }: Props) {
    const [highlightedPhoto, setHighlightedPhoto] = React.useState(0)
    const photosListRef = React.useRef<FlatList>(null)
    const scrollPhotoOffset = React.useRef(0)
    const hasScrolledPhotos = React.useRef(false)

    const togglePhotoScroll = useCallback((action: BackgroundCardPros["action"], index: number) => {
        if (!hasScrolledPhotos.current)
            hasScrolledPhotos.current = true
        if (action == "NEXT") {
            setHighlightedPhoto(index)
            photosListRef?.current?.scrollToOffset({ offset: scrollPhotoOffset.current + (BACKGROUNG_CARD_WIDTH + 40), animated: true })
        } else if (action == "PREV") {
            setHighlightedPhoto(index)
            photosListRef?.current?.scrollToOffset({ offset: scrollPhotoOffset.current - (BACKGROUNG_CARD_WIDTH + 40), animated: true })
        }
    }, [photosListRef])

    const renderPhotos = ({ index, item, separators }: any) => {
        let action: BackgroundCardPros["action"] = "END"
        if (index > highlightedPhoto) {
            action = "NEXT"
        } else if (index < highlightedPhoto) {
            action = "PREV"
        } else {
            action = "END"
        }
        return index == highlightedPhoto
            ? <HighlightedCard
                date="11.01.2021"
                description="small fiesta in italy with my friends"
                image={item.image}
                onDiscoverPress={() => separators.highlight()}
                title={"DJ Tony" + index} />
            : <BackgroundCard image={item.image} action={action} onPress={() => togglePhotoScroll(action, index)} />
    }

    return <View style={{ gap: 20, alignItems: "center" }}>
        <FlatList
            onScroll={(event) => scrollPhotoOffset.current = event.nativeEvent.contentOffset.x}
            data={photos}
            ref={photosListRef}
            style={{ width: HIGHLIGHTED_CARD_WIDTH + (BACKGROUNG_CARD_WIDTH * 2) + 100, alignSelf: "center" }}
            contentContainerStyle={{ padding: 10, alignItems: "center" }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderPhotos}
            horizontal
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            showsHorizontalScrollIndicator={false}
            getItemLayout={(data, index) => {
                return { length: HIGHLIGHTED_CARD_WIDTH + 40, offset: HIGHLIGHTED_CARD_WIDTH * index, index }
            }}
            scrollEnabled={false}
            ListHeaderComponent={() => <View style={layouts.row}><BackgroundCard onPress={() => { }} action="END" /><View style={styles.separator} /></View>}
            ListFooterComponent={() => <View style={layouts.row}><View style={styles.separator} /> <BackgroundCard onPress={() => { }} action="END" /></View>}
        />
    </View>

}

const styles = StyleSheet.create({
    separator: {
        alignSelf: "center",
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: Colors.RED,
        marginHorizontal: 15
    }
})