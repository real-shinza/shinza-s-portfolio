'use client';
import { useSearchParams } from 'next/navigation';
import { LanguageStrings, LanguageType } from '../common/type';

const translations: { [key: string]: string } = {
  ja: 'ja',
  en: 'en',
  'zh-CN': 'cn',
  'zh-TW': 'tw',
  ko: 'ko',
};

export function GetHl(): string {
  const searchParams = useSearchParams();
  return searchParams.get('hl') || 'ja';
}

export function GetHlParam(): { hl: string } {
  return { hl: GetHl() };
}

export function GetLocale(lang: LanguageStrings): string {
  const hl = translations[GetHl() || 'ja'] as LanguageType;
  return lang[hl];
}


