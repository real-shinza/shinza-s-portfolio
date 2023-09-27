import './layout.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kainari\'s Portfolio',
  description: 'かいなりのポートフォリオ',
}

function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;