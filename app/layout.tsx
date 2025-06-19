import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Fit-!T - 맞춤형 SaaS 비교 플랫폼',
  description: '복잡한 SaaS 시장에서 자신에게 최적화된 서비스를 쉽고 빠르게 비교·선택하세요',
  keywords: [
    'SaaS', '소프트웨어', '비교', '견적', '맞춤', '역제안', 
    '기업솔루션', '클라우드서비스', '소프트웨어선택'
  ],
  authors: [{ name: 'Fit-!T Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Fit-!T - 맞춤형 SaaS 비교 플랫폼',
    description: '복잡한 비교는 그만, 핏잇이 직접 제안합니다',
    url: 'https://fit-it.com',
    siteName: 'Fit-!T',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fit-!T - 맞춤형 SaaS 비교 플랫폼',
    description: '복잡한 비교는 그만, 핏잇이 직접 제안합니다',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
} 