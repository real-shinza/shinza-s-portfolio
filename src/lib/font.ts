import { NextFont } from '@next/font';
import {
  Noto_Sans,
  Noto_Sans_JP,
  Noto_Sans_SC,
  Noto_Sans_TC,
  Noto_Sans_KR,
} from 'next/font/google';

const en = Noto_Sans({ subsets: ['latin'] });
const jp = Noto_Sans_JP({ subsets: ['latin'] });
const sc = Noto_Sans_SC({ subsets: ['latin'] });
const tc = Noto_Sans_TC({ subsets: ['latin'] });
const kr = Noto_Sans_KR({ subsets: ['latin'] });

export const notoSans: Record<string, NextFont> = {
  'en': en,
  'ja': jp,
  'zh-CN': sc,
  'zh-TW': tc,
  'ko': kr,
};
