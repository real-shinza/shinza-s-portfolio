import { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { NextIntlClientProvider } from 'next-intl';
import { Locale } from '../../i18n/routing';
import { Header } from '../../components';
import { notoSans } from '../../lib';
import '../globals.css';

export function metadata(): Metadata {
  return {
    title: 'Shinza\'s Portfolio - Top',
    description: '新佐のポートフォリオ - Top',
    keywords: '新佐,ポートフォリオ,エンジニア',
    icons: [{ rel: 'icon', url: '/icons/favicon.ico' }],
    openGraph: {
      type: 'website',
      description: '新佐のポートフォリオ - Top',
      siteName: 'Shinza\'s Portfolio',
      title: 'Shinza\'s Portfolio - Top',
      url: 'https://shinza-s-portfolio.vercel.app/',
      images: 'https://shinza-s-portfolio.vercel.app/works/shinza-s-portfolio.jpg',
      locale: 'ja_JP',
    },
  };
};

export default ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) => {
  return (
    <html lang={params.locale} style={notoSans[params.locale].style}>
      <GoogleTagManager gtmId='GTM-THB3JD7F' />
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
