import { LocaleStrings } from './locale';

export type SocialMediaEntry = {
  name: string,
  href: string,
  src: string,
};

export type ProfileDocument = {
  id: string,
  title: LocaleStrings,
  name: LocaleStrings,
  description: LocaleStrings,
  social_medias: SocialMediaEntry[]
};
