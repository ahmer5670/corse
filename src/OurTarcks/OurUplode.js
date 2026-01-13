import { createContext, useState } from "react";
export const OurUplode = createContext();
export const UplodProvider = ({ children }) => {
  const [uplod, setUplod] = useState({ items: [] });
  return (
    <OurUplode.Provider value={{ uplod, setUplod }}>
      {children}
    </OurUplode.Provider>
  );
};
