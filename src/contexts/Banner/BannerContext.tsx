import React, { createContext, useContext, useState } from "react";
import { BannerContextType } from "./types.props";

const BannerContext = createContext<BannerContextType>({
  isOpen: true,
  toggleBanner: () => {},
});

export const useBanner = () => useContext(BannerContext);

export const BannerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState(false);
  const toggleBanner = () => setOpen(!isOpen);

  return (
    <BannerContext.Provider value={{ isOpen, toggleBanner }}>
      {children}
    </BannerContext.Provider>
  );
};
