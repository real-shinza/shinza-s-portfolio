import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ja', 'en', 'zh-CN', 'zh-TW', 'ko'],
  defaultLocale: 'ja',
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);