import { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { LanguageType } from '../../common/type';
import { Header } from '../../components';
import { notoSans, toFont } from '../../lib';
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
  params: { locale: string };
}) => {
  return (
    <html lang={params.locale} style={notoSans[toFont[params.locale as LanguageType]].style}>
      <GoogleTagManager gtmId='GTM-THB3JD7F' />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};
