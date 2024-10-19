import { LanguageStrings } from './language';

export type SocialMediaEntry = {
  name: string,
  href: string,
  src: string,
};

export type ProfileDocument = {
  id: string,
  title: LanguageStrings,
  description: LanguageStrings,
  social_medias: SocialMediaEntry[]
};
