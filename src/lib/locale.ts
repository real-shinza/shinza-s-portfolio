'use client';
import { useParams } from 'next/navigation';
import { Locale } from '../i18n/routing';
import { LocaleStrings } from '../common/type';

export function GetLocale(strings: LocaleStrings): string {
  const params = useParams();
  return strings[params.locale as Locale];
}
