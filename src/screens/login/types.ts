export interface Login {
  username: string;
  password: string;
}

export interface BannerContainerProps {
  images: string[];
  bannerOpen: boolean;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  setBannerOpen: (open: boolean) => void;
}


export interface CloseBannerButtonProps {
  setBannerOpen: (open: boolean) => void;
}


export interface ImagePaginationProps {
  totalImages: number;
  currentIndex: number;
  changeImage: (index: number) => void;
}

export interface DarkModeSwitcherProps {
  darkMode: boolean;
  setDarkMode: () => void;
}

export interface LoginContainerProps {
  bannerOpen: boolean;
  setBannerOpen: (open: boolean) => void;
}

export interface LoginHeaderProps {
  darkMode: boolean;
}

export interface CloseBannerButtonProps {
  setBannerOpen: (open: boolean) => void;
}