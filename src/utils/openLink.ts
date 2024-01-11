import { Linking } from "react-native";

export function openLink(url: string) {
    Linking.openURL(url).catch((e) => console.log("Could not open link" + url));
  }