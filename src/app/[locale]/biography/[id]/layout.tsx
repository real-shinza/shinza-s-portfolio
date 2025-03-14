import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import { Header } from '../../../../components';
import { biography } from '../../../../data';
import { GetLocaleString } from '../../../../lib';
import '../../../globals.css';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const id = params.id;
  const entry = biography.sections.map(s => s.entries).flat().find(entry => entry.id === id);
  if (!entry) return notFound();
  return {
    title: `Shinza\'s Portfolio - ${entry.description.ja}`,
    description: `新佐のポートフォリオ - ${entry.description.ja}`,
    keywords: '新佐,ポートフォリオ,エンジニア',
    icons: [{ rel: 'icon', url: '/icons/favicon.ico' }],
    openGraph: {
      type: 'website',
      description: `新佐のポートフォリオ - ${entry.description.ja}`,
      siteName: 'Shinza\'s Portfolio',
      title: `Shinza\'s Portfolio - ${entry.description.ja}`,
      url: `https://shinza-s-portfolio.vercel.app/biography/${entry.id}`,
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
