import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ja', 'en', 'zh-CN', 'zh-TW', 'ko'],
  defaultLocale: 'ja',
});

export type Locale = (typeof routing)['locales'][number];

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
