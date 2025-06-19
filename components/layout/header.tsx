import { Logo } from '@/components/ui/logo'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <Logo size="sm" />
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
              서비스 소개
            </a>
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
              주요 기능
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
              요금제
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
              문의하기
            </a>
          </nav>

          {/* CTA 버튼 */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
              견적 요청하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 