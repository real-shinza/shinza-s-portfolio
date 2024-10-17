'use client';
import {
  Inter,
  Noto_Sans_JP,
  Noto_Sans_SC,
  Noto_Sans_TC,
  Noto_Sans_KR,
} from 'next/font/google';
import { GetHl } from '.';

export const inter = Inter({ subsets: ['latin'] });
export const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });
export const notoSansSC = Noto_Sans_SC({ subsets: ['latin'] });
export const notoSansTC = Noto_Sans_TC({ subsets: ['latin'] });
export const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });

export function GetFont() {
  switch (GetHl()) {
    case 'ja':
      return notoSansJP;
    case 'en':
      return inter;
    case 'zh-CN':
      return notoSansSC;
    case 'zh-TW':
      return notoSansTC;
    case 'ko':
      return notoSansKR;
    default:
      return inter;
  }
}
