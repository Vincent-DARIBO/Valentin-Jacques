import * as React from "react";

type Props = React.PropsWithChildren<{
  isPhone: boolean;
  setIsPhone: (val: boolean) => void;
}>;

export const IsPhoneContext = React.createContext({
  isPhone: false,
  setIsPhone: (val: boolean) => {},
});

function IsPhoneprovider({ isPhone, setIsPhone, children }: Props) {
  return (
    <IsPhoneContext.Provider value={{ isPhone, setIsPhone }}>
      {children}
    </IsPhoneContext.Provider>
  );
}

export default IsPhoneprovider;
