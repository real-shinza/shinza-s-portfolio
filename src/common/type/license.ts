import { LanguageStrings } from '.';

export type LicenseEntry = {
  date: LanguageStrings,
  name: LanguageStrings,
};

export type LicenseDocument = {
  id: string,
  title: LanguageStrings,
  entries: LicenseEntry[],
};
