export interface SectionData {
  Data: any;
  navigation: {
    showInMenu: boolean;
  };
  navigationTitle: string;
  url: string;
}

export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  text: string;
  iconPack: string;
  url: string;
  iconName: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}

export interface LivePreviewData {
  id: string;
  formData: any;
}

export interface HeaderContent {
  title: string;
  logoLight: { MediaUrl: string };
  logoDark: { MediaUrl: string };
}

export interface SplashContent {
  githubUrl: string;
  splashImage: { MediaUrl: string };
  splashLogo: { MediaUrl: string };
  splashText: string;
}
