import { LocaleStrings } from '.';

export type BiographyEntry = {
  id: string,
  date: LocaleStrings,
  description: LocaleStrings,
};

export type BiographySection = {
  subtitle: LocaleStrings,
  entries: BiographyEntry[],
};

export type BiographyDocument = {
  id: string,
  title: LocaleStrings,
  sections: BiographySection[],
};
