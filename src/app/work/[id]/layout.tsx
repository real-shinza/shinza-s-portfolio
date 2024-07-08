import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { works } from '../../../data';
import '../../globals.css';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const id = params.id;
  const work = works.find(data => data.id === id);
  return {
    title: `Shinza\'s Portfolio - ${work?.name}`,
    description: `新佐のポートフォリオ - ${work?.name}`,
    keywords: '新佐,ポートフォリオ,エンジニア',
    icons: [{ rel: 'icon', url: '/icons/favicon.ico' }],
    openGraph: {
      type: 'website',
      description: `新佐のポートフォリオ - ${work?.name}`,
      siteName: 'Shinza\'s Portfolio',
      title: `Shinza\'s Portfolio - ${work?.name}`,
      url: `https://shinza-s-portfolio.vercel.app/work/${work?.id}`,
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
};
