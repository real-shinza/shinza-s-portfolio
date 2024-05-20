import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { getWork } from '../../../lib/works/work';
import './layout.css';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const id = params.id;
  const works = getWork(id);
  return {
    title: `Shinza\'s Portfolio - ${works?.name}`,
    description: `新佐のポートフォリオ - ${works?.name}`,
    keywords: '新佐,ポートフォリオ,エンジニア',
    icons: [{ rel: 'icon', url: '/icons/favicon.ico' }],
    openGraph: {
      type: 'website',
      description: `新佐のポートフォリオ - ${works?.name}`,
      siteName: 'Shinza\'s Portfolio',
      title: `Shinza\'s Portfolio - ${works?.name}`,
      url: `https://shinza-s-portfolio.vercel.app/work/${works?.id}`,
      images: 'https://shinza-s-portfolio.vercel.app/works/shinza-s-portfolio.jpg',
      locale: 'ja_JP',
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
      <GoogleTagManager gtmId="GTM-THB3JD7F"/>
        {children}
      </body>
    </html>
  );
}
