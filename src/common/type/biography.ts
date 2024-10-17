import { LanguageStrings } from '.';

export type BiographyEntry = {
  date: LanguageStrings,
  description: LanguageStrings,
};

export type BiographySection = {
  subtitle: LanguageStrings,
  entries: BiographyEntry[],
};

export type BiographyDocument = {
  id: string,
  title: LanguageStrings,
  sections: BiographySection[],
};
