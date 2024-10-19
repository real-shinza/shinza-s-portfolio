import {
  Noto_Sans,
  Noto_Sans_JP,
  Noto_Sans_SC,
  Noto_Sans_TC,
  Noto_Sans_KR,
} from 'next/font/google';
import { FontType } from '../common/type';

export const en = Noto_Sans({ subsets: ['latin'] });
export const jp = Noto_Sans_JP({ subsets: ['latin'] });
export const sc = Noto_Sans_SC({ subsets: ['latin'] });
export const tc = Noto_Sans_TC({ subsets: ['latin'] });
export const kr = Noto_Sans_KR({ subsets: ['latin'] });

export const notoSans = { en, jp, sc, tc, kr };
export const toFont = {
  en: 'en' as FontType,
  ja: 'jp' as FontType,
  'zh-CN': 'sc' as FontType,
  'zh-TW': 'tc' as FontType,
  ko: 'kr' as FontType,
};
