import { TextStyle, TextProps as NativeTextProps } from "react-native";
 export type TextProps = NativeTextProps & {
    text: string;
    style?: TextStyle
}