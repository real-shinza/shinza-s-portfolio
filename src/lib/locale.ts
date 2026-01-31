'use client';
import { useParams } from 'next/navigation';
import { Locale } from '../i18n/routing';
import { LocaleStrings, LocaleNames } from '../common/type';

export function GetLocaleString(strings: LocaleStrings): string {
  const params = useParams();
  return strings[params.locale as Locale];
}

export function GetLocaleNames(names: LocaleNames): { main: string, sub: string[]} {
  const params = useParams();
  return names[params.locale as Locale];
}
