import { useContext } from "react";
import { DrawerContext } from "../DrawerProvider";

export default function useDrawer() {
  return useContext(DrawerContext);
}
