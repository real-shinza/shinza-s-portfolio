import type { Metadata } from 'next';
import GoogleTagManager from '../components/google-tag-manager';
import './layout.css';

export const metadata: Metadata = {
  title: 'Shinza\'s Portfolio',
  description: '新佐のポートフォリオ',
  keywords: '新佐,ポートフォリオ,エンジニア',
  viewport: { width: "device-width", initialScale: 0.5 },
  openGraph: {
    type: 'website',
    description: '新佐のポートフォリオ',
    siteName: 'Shinza\'s Portfolio',
    title: 'Shinza\'s Portfolio - Top',
    url: 'https://shinza-s-portfolio.vercel.app/',
    images: 'https://raw.githubusercontent.com/real-shinza/shinza-s-portfolio/main/public/profile.jpg',
    locale: 'ja_JP',
  }
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <GoogleTagManager />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
