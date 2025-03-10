import { Locale } from '../../i18n/routing';

export type LocaleStrings = Record<Locale, string>;
export type LocaleNames = Record<Locale, { main: string, sub: string[]}>;
export type LocaleData = Record<Locale, { name: string, src: string }>;

