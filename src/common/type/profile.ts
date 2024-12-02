import { LocaleStrings, LocaleNames } from './locale';

export type SocialMediaEntry = {
  name: string,
  href: string,
  src: string,
};

export type ProfileDocument = {
  id: string,
  title: LocaleStrings,
  name: LocaleNames,
  description: LocaleStrings,
  social_medias: SocialMediaEntry[]
};
