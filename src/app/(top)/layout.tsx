import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
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
}

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja'>
      <body>
        <GoogleTagManager gtmId='GTM-THB3JD7F'/>
        {children}
      </body>
    </html>
  );
}
