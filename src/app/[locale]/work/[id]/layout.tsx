import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import { Header } from '../../../../components';
import { work } from '../../../../data';
import '../../../globals.css';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const id = params.id;
  const entry = work.entries.find(entry => entry.id === id);
  if (!entry) return notFound();
  return {
    title: `Shinza\'s Portfolio - ${entry.name.ja}`,
    description: `新佐のポートフォリオ - ${entry.name.ja}`,
    keywords: '新佐,ポートフォリオ,エンジニア',
    icons: [{ rel: 'icon', url: '/icons/favicon.ico' }],
    openGraph: {
      type: 'article',
      description: `新佐のポートフォリオ - ${entry.name.ja}`,
      siteName: 'Shinza\'s Portfolio',
      title: `Shinza\'s Portfolio - ${entry.name.ja}`,
      url: `https://shinza-s-portfolio-v1.vercel.app/work/${entry.id}`,
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
