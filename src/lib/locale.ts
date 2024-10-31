'use client';
import { useParams } from 'next/navigation';
import { LanguageStrings, LanguageType } from '../common/type';

export function GetLocale(strings: LanguageStrings): string {
  const params = useParams();
  return strings[params.locale as LanguageType];
}
