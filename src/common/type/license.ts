import { LocaleStrings } from '.';

export type LicenseEntry = {
  date: LocaleStrings,
  name: LocaleStrings,
};

export type LicenseDocument = {
  id: string,
  title: LocaleStrings,
  entries: LicenseEntry[],
};
