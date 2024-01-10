import React, { RefObject } from "react";
import { Drawer as PaperDrawer } from "react-native-paper";

import Colors from "../../styles/Colors";
import { HeaderRightProps } from "./RowHeader";
import { AnchorsRef } from "@nandorojo/anchor";

type Props = {
  anchors: RefObject<AnchorsRef>;
};

function Drawer({ anchors }: Props) {
  const headerSections = ["à propos", "projets", "services", "contact"];
  const scrollRefs = ["about", "projects", "services", "contact"];

  const [selectedItem, setSelectedItem] = React.useState("");
  const onItemPressed = (item: string, index: number) => {
    if (selectedItem === item) setSelectedItem("");
    else {
      setSelectedItem(item);
      anchors.current?.scrollTo(scrollRefs[index], {
        animated: true,
        offset: -50,
      });
    }
  };
  return (
    <PaperDrawer.Section
      title="Valentin Jacques"
      style={{ backgroundColor: Colors.WHITE, position: "absolute", right: 0, height: "100%"}}
    >
      {headerSections.map((item, index) => (
        <PaperDrawer.Item
          key={index}
          label={item.toUpperCase()}
          rippleColor={Colors.YELLOW}
          style={{
            backgroundColor:
              selectedItem === item ? Colors.YELLOW : Colors.WHITE,
            borderRadius: 0,
            width: "100%",
          }}
          onPress={() => onItemPressed(item, index)}
        />
      ))}
    </PaperDrawer.Section>
  );
}

export default Drawer;
