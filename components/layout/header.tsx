import React from 'react'
import { Button } from '@/components/ui/button'

export function Header() {
  const navItems = [
    { name: '전체 카테고리', href: '#categories' },
    { name: '마케팅', href: '#marketing' },
    { name: 'HR', href: '#hr' },
    { name: 'AI서비스', href: '#ai' },
    { name: '학습법', href: '#learning' },
    { name: 'IT관리', href: '#it' },
    { name: '고객관리', href: '#crm' },
    { name: 'ERP', href: '#erp' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-brand-purple mr-2">
              Fit-!T
            </div>
            <span className="text-sm text-gray-500 hidden md:block">
              나에게 FIt한 IT솔루션은? 핏잇에서!
            </span>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 우측 버튼들 */}
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors hidden md:block">
              솔루션 견적받기
            </button>
            <button className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors hidden md:block">
              전화문의
            </button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
              견적 문의하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 