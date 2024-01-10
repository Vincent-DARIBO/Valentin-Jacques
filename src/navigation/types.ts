import { AnchorsRef } from "@nandorojo/anchor";
import { ImageSourcePropType } from "react-native";

export type Project = {
  id?: number;
  title: string;
  subTitle: string;
  description: string;
  goals: string;
  backgroundImage: ImageSourcePropType;
  contentImage: ImageSourcePropType;
  socialNetworks?: URL[];
  colors: {
    filter: string;
    filterOpacity: number;
    fade: string;
    text1: string;
    text2: string;
    footer: string;
  };
};
export type RootStackParams = {
  Home: {
    anchors: React.RefObject<AnchorsRef>;
    drawerPressed: boolean;
  };
  ProjectDetails: Project;
};
