export interface SectionData {
  Data: any;
  navigation: {
    showInMenu: boolean
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
