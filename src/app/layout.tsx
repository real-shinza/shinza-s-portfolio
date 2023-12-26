import './layout.css'
import type { Metadata } from 'next'
import GoogleTagManager from '../components/google-tag-manager'

export const metadata: Metadata = {
  title: 'Shinza\'s Portfolio',
  description: '新佐のポートフォリオ',
}

function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <GoogleTagManager />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
