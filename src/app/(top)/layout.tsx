import type { Metadata } from 'next';
import GoogleTagManager from '../../components/google-tag-manager';
import './layout.css';

export function metadata(): Metadata {
  return {
    title: 'Shinza\'s Portfolio - Top',
    description: '新佐のポートフォリオ - Top',
    keywords: '新佐,ポートフォリオ,エンジニア',
    viewport: { width: "device-width", initialScale: 0.5 },
    openGraph: {
      type: 'website',
      description: '新佐のポートフォリオ - Top',
      siteName: 'Shinza\'s Portfolio',
      title: 'Shinza\'s Portfolio - Top',
      url: 'https://shinza-s-portfolio.vercel.app/',
      images: 'https://raw.githubusercontent.com/real-shinza/shinza-s-portfolio/main/public/works/shinza-s-portfolio.jpg',
      locale: 'ja_JP',
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <GoogleTagManager />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
