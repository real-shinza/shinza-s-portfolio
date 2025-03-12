import {
  Noto_Sans,
  Noto_Sans_JP,
  Noto_Sans_SC,
  Noto_Sans_TC,
  Noto_Sans_KR,
} from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font/dist/types';
import { Locale } from '../i18n/routing';

const en = Noto_Sans({ subsets: ['latin'], display: 'swap' });
const jp = Noto_Sans_JP({ subsets: ['latin'], display: 'swap' });
const sc = Noto_Sans_SC({ subsets: ['latin'], display: 'swap' });
const tc = Noto_Sans_TC({ subsets: ['latin'], display: 'swap' });
const kr = Noto_Sans_KR({ subsets: ['latin'], display: 'swap' });

export const notoSans: Record<Locale, NextFont> = {
  'en': en,
  'ja': jp,
  'zh-CN': sc,
  'zh-TW': tc,
  'ko': kr,
};
