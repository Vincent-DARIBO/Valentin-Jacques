import "react-native-gesture-handler";
import React from "react";
import { AnchorProvider } from "@nandorojo/anchor";
import { ActivityIndicator, Platform, useWindowDimensions } from "react-native";
import { useFonts } from "expo-font";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import MainNavigator from "./src/navigation";
import layouts from "./src/styles/layouts";
import { Provider } from "react-native-paper";

SplashScreen.preventAutoHideAsync();
/**  TODO: ajuster le caroussel pour que ce soit un caroussel infini
 * Pour le block de contact en bas, remplacer le Ecrivez moi par num de tel -> DONE
 * faire les redirections des header buttons -> DONE
 * Ajuster les dimensions (revoir à la hausse)-> DONE
 * Ajouter les fonts (composants text)
 * (À réfléchir) Details de projet:  - titre, image principale, image/ vidéo du projet, objectifs
 *                     - éléments modulables: image,  -> backoffice
 *
 */
if (Platform.OS === "web" && typeof window !== "undefined") {
  require("smoothscroll-polyfill").polyfill();
}
export default function App() {
  const [fontsLoaded] = useFonts({
    // Tusker
    "Tusker-6600": require("./assets/fonts/tusker/TuskerGrotesk-6600Semibold.ttf"),
    "Tusker-6700": require("./assets/fonts/tusker/TuskerGrotesk-6700Bold.ttf"),
    "Tusker-6800": require("./assets/fonts/tusker/TuskerGrotesk-6800Super.ttf"),
    "Tusker-9800": require("./assets/fonts/tusker/TuskerGrotesk-9800Super.ttf"),

    // Rama
    "Rama-Heavy": require("./assets/fonts/rama/RamaGothicE-Heavy.ttf"),
    "Rama-Bold": require("./assets/fonts/rama/RamaGothicM-Bold.ttf"),
    "Rama-Regular": require("./assets/fonts/rama/RamaGothicM-Regular.ttf"),
    "Rama-SemiBold": require("./assets/fonts/rama/RamaGothicM-SemiBold.ttf"),

    // NotoSans
    "NotoSans-Black": require("./assets/fonts/NotoSans-Black.ttf"),
    "NotoSans-BlackItalic": require("./assets/fonts/NotoSans-BlackItalic.ttf"),
    "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
    "NotoSans-ExtraBold": require("./assets/fonts/NotoSans-ExtraBold.ttf"),
    "NotoSans-BoldItalic": require("./assets/fonts/NotoSans-BoldItalic.ttf"),
    "NotoSans-ExtraBoldItalic": require("./assets/fonts/NotoSans-ExtraBoldItalic.ttf"),
    "NotoSans-ExtraLight": require("./assets/fonts/NotoSans-ExtraLight.ttf"),
    "NotoSans-ExtraLightItalic": require("./assets/fonts/NotoSans-ExtraLightItalic.ttf"),
    "NotoSans-Italic": require("./assets/fonts/NotoSans-Italic.ttf"),
    "NotoSans-Light": require("./assets/fonts/NotoSans-Light.ttf"),
    "NotoSans-LightItalic": require("./assets/fonts/NotoSans-LightItalic.ttf"),
    "NotoSans-Medium": require("./assets/fonts/NotoSans-Medium.ttf"),
    "NotoSans-MediumItalic": require("./assets/fonts/NotoSans-MediumItalic.ttf"),
    "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-SemiBold": require("./assets/fonts/NotoSans-SemiBold.ttf"),
    "NotoSans-SemiBoldItalic": require("./assets/fonts/NotoSans-SemiBoldItalic.ttf"),
    "NotoSans-Thin": require("./assets/fonts/NotoSans-Thin.ttf"),
    "NotoSans-ThinItalic": require("./assets/fonts/NotoSans-ThinItalic.ttf"),

    // 'Rama-Bold': require('./assets/fonts/NotoSans-BoldItalic.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-ExtraBoldItalic.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-ExtraLight.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-ExtraLightItalic.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-Italic.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-Light.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-LightItalic.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-Medium.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-MediumItalic.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-Regular.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-SemiBold.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-SemiBoldItalic.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-Thin.ttf'),
    // 'Rama-Bold': require('./assets/fonts/NotoSans-ThinItalic.ttf'),
  });

  React.useEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    onLayoutRootView();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={[layouts.center, { flex: 1 }]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AnchorProvider horizontal={false}>
      <Provider>
        
        <MainNavigator />
      </Provider>
    </AnchorProvider>
  );
}
