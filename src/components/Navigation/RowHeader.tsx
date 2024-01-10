import * as React from "react";
import { View } from "react-native";
import layouts from "../../styles/layouts";
import HeaderButton from "../Buttons/HeaderButton";

export interface HeaderRightProps {
  headerSections: string[];
  selectedItem: string;
  onItemPressed(item: string, index: number): void;
}

function RowHeader({ onItemPressed, headerSections, selectedItem }: HeaderRightProps) {
  return (
    <View
      style={[
        layouts.row,
        {
          paddingRight: 10,
          marginBottom: 10,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {headerSections.map((item, index) => (
          <HeaderButton
            title={item}
            onPress={() => onItemPressed(item, index)}
            pressed={selectedItem === item}
            key={index}
          />
        ))}
      </View>
    </View>
  );
}

export default RowHeader;
