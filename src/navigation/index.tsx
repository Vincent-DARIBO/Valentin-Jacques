import React, { useReducer } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Pressable, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAnchors } from "@nandorojo/anchor";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/Home";
import { RootStackParams } from "./types";
import RowHeader from "../components/Navigation/RowHeader";
import { TouchableRipple } from "react-native-paper";
import Colors from "../styles/Colors";
import DrawerProvider from "../providers/DrawerProvider";
import IsPhoneprovider from "../providers/IsPhoneProvider";

const Stack = createStackNavigator<RootStackParams>();

export default function MainNavigator() {
  const headerSections = ["à propos", "projets", "services", "contact"];
  const scrollRefs = ["about", "projects", "services", "contact"];
  const [selectedItem, setSelectedItem] = React.useState("");
  const [drawerPressed, toggleDrawer] = React.useReducer((val) => !val, false);
  const [isPhone, setIsPhone] = React.useState(
    Dimensions.get("window").width < 500
  );

  const anchors = useAnchors();

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
    <IsPhoneprovider isPhone={isPhone} setIsPhone={setIsPhone}>
      <DrawerProvider drawerPressed={drawerPressed}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerMode: "float",
              headerTransparent: true,
              headerBackground: () => (
                <LinearGradient
                  end={{ x: 0, y: 0.1 }}
                  style={{ width: "100%", height: 60 }}
                  colors={["rgba(0,0,0,0.5)", "transparent"]}
                />
              ),
              headerLeft: ({}) => (
                <Pressable
                  onPress={() => {
                    anchors.current?.scrollTo("video", {
                      animated: true,
                    });
                  }}
                  style={{ marginLeft: 20, height: 45, width: 50 }}
                >
                  <Image
                    source={require("../../assets/images/logo-blanc.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      resizeMode: "contain",
                    }}
                  />
                </Pressable>
              ),
              headerRight: () => {
                return isPhone ? (
                  <TouchableRipple
                    onPress={() => {
                      toggleDrawer();
                    }}
                  >
                    <Entypo name="menu" size={30} color={Colors.WHITE} />
                  </TouchableRipple>
                ) : (
                  <RowHeader
                    headerSections={headerSections}
                    onItemPressed={onItemPressed}
                    selectedItem={selectedItem}
                  />
                );
              },
            }}
          >
            <Stack.Screen
              name="Home"
              initialParams={{ anchors, drawerPressed }}
              component={Home}
              options={{ headerTitle: "", title: "Valentin Jacques" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DrawerProvider>
    </IsPhoneprovider>
  );
}
