import * as React from "react";

type Props = React.PropsWithChildren<{ drawerPressed: boolean }>;

export const DrawerContext = React.createContext({ drawerPressed: false });

function DrawerProvider({ drawerPressed, children }: Props) {
  return (
    <DrawerContext.Provider value={{ drawerPressed }}>
      {children}
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;
