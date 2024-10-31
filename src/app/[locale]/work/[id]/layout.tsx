import type { Metadata } from 'next';
import React from 'react';
import { Header } from '../../../../components';
import { work } from '../../../../data';
import '../../../globals.css';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const id = params.id;
  const entry = work.entries.find(entry => entry.id === id);
  return {
    title: `Shinza\'s Portfolio - ${entry?.name}`,
    description: `新佐のポートフォリオ - ${entry?.name}`,
    keywords: '新佐,ポートフォリオ,エンジニア',
    icons: [{ rel: 'icon', url: '/icons/favicon.ico' }],
    openGraph: {
      type: 'website',
      description: `新佐のポートフォリオ - ${entry?.name}`,
      siteName: 'Shinza\'s Portfolio',
      title: `Shinza\'s Portfolio - ${entry?.name}`,
      url: `https://shinza-s-portfolio.vercel.app/work/${entry?.id}`,
      images: 'https://shinza-s-portfolio.vercel.app/works/shinza-s-portfolio.jpg',
      locale: 'ja_JP',
    },
  };
}

export default ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <>
      <Header />
      {children}
    </>
  );
};
