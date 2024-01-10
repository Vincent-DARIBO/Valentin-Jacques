import { useContext } from "react";
import { IsPhoneContext } from "../IsPhoneProvider";

export default function useIsPhone() {
  return useContext(IsPhoneContext);
}
