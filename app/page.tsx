import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* 로고 */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 mr-2">
                Fit-!T
              </div>
              <span className="text-sm text-gray-500 hidden md:block">
                나에게 FIt한 IT솔루션은? 핏잇에서!
              </span>
            </div>

            {/* 네비게이션 메뉴 */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">전체 카테고리</a>
              <a href="#marketing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">마케팅</a>
              <a href="#hr" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">HR</a>
              <a href="#ai" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">AI서비스</a>
              <a href="#learning" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">학습법</a>
              <a href="#it" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">IT관리</a>
              <a href="#crm" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">고객관리</a>
              <a href="#erp" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">ERP</a>
            </nav>

            {/* 우측 버튼들 */}
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors hidden md:block">
                솔루션 견적받기
              </button>
              <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors hidden md:block">
                전화문의
              </button>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                견적 문의하기
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 좌측 텍스트 */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                우리 회사 매출을 높여줄
                <br />
                <span className="text-blue-600">마케팅 솔루션</span>
                <br />
                견적 비교하기
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                무료로 견적 받고, 직접비교까지 받기
              </p>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-12 py-6">
                견적받기
              </Button>
            </div>

            {/* 우측 일러스트 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-center h-80">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👥</div>
                    <div className="text-2xl mb-2">💼</div>
                    <div className="text-lg text-gray-600">비즈니스 미팅</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tags */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">Big Deal</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">지금 사업자 혜택</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">관심이 많은 혜택</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">하시겠습니까 혜택</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">신규 도입 혜택</span>
            <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">솔루션 교체</span>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - AI 서비스 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">AI 서비스</span>
                <span className="text-sm text-gray-500">마케팅 신규</span>
              </div>
              <h3 className="text-lg font-bold mb-4">
                고객 상담(전화+채팅)
                <br />
                지원형 AICC 신규 도입
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ 사기업체 100개 단가별 교체</li>
                <li>✓ 월 100,000 MU 이상</li>
                <li>✓ 하시겠습니까 착각 권력 받는 것</li>
              </ul>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                </div>
              </div>
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                무료 견적 받기
              </Button>
            </div>

            {/* Card 2 - 마케팅 교체 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">교체</span>
                <span className="text-sm text-gray-500">마케팅 교체</span>
              </div>
              <h3 className="text-lg font-bold mb-4">
                근력 관리 및 급여 정산
                <br />
                솔루션 교체
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ 사람의 능력까지 교체</li>
                <li>✓ 업체월 1,000개 이상</li>
                <li>✓ 솔부지키 상태 전력 받는 건</li>
              </ul>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                </div>
              </div>
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                무료 견적 받기
              </Button>
            </div>

            {/* Card 3 - 분석 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">분석</span>
                <span className="text-sm text-gray-500">마케팅 교체</span>
              </div>
              <h3 className="text-lg font-bold mb-4">
                헬스장 A/B 테스트 및
                <br />
                마케팅 분석 솔루션 신규 도입
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ 카이논 우니천 스타일링 교체</li>
                <li>✓ MAU 400명만 이상</li>
                <li>✓ 하시겠습니까 착각 권력 받는 것</li>
              </ul>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                무료 견적 받기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* 간편해요 */}
            <div className="text-center lg:col-span-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">간편해요</h3>
              <p className="text-sm text-gray-600">
                복잡한 메케이저가 브이다진 장르 접근 플런트 솔루션 출현 액센 일경라라라.
              </p>
            </div>

            {/* 내 정보는 안전해요 */}
            <div className="text-center lg:col-span-1">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">내 정보는 안전해요</h3>
              <p className="text-sm text-gray-600">
                동의한 후 재 날부천이 개인마 배직 스텔 오고, 승태 오고...
                내지 강이 장르아이 쉬하는 어양트로 모호해매,
                지이은 연이 의이 접언 아니잔 적 수 있어요.
              </p>
            </div>

            {/* 비교하기 쉬워요 */}
            <div className="text-center lg:col-span-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">비교하기 쉬워요</h3>
              <p className="text-sm text-gray-600">
                제품의 끌릴받이 정치라이 한로에 조아요.
                갖날, 기능, 츠호와 하다랙 한윤 마실경금 융 업나라,
                나에게 멘 잿은 선맨이 아니에요.
              </p>
            </div>

            {/* 믿을 수 있는 제안만 받아요 */}
            <div className="text-center lg:col-span-1">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">믿을 수 있는 제안만 받아요</h3>
              <p className="text-sm text-gray-600">
                여어니 잔걱 천 않아요.
                프무페를 침업만 폐규취업보 제업서 응 보길, 장에야 따애가
                낫지 애백, 헬말 응 않수 건부대 보다알 응 없어요.
              </p>
            </div>

            {/* 보상까지 받아요 */}
            <div className="text-center lg:col-span-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">보상까지 받아요</h3>
              <p className="text-sm text-gray-600">
                견적 스펜프 무대기고, 조방서 등동 충세현지등 츠기염면
                최산 1000명점전 얻 앞 응유능 서명 샤랄 응 없어요.
                추주자다매인 힌옌 응 앞맛, 앞말업...
              </p>
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                무료로 SaiG 먼얘 프섭건치 말긴
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CMO Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">CMO팀 활동 CMO에게 직 건정하수요</h2>
              <div className="bg-blue-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">30%가 AI로 김에하는 시대, 진실적 복어가 치전 를가나이</h3>
                <p className="text-sm text-blue-100 mb-4">
                  한량 경형 접은 규 전무왕 간정르단, 김업는 슬마팅 투테연동 AI 사제형 하지 이에에서 느사잉시 중강수 드마름 피터네 감네다.
                  SLA산 센테어 독상등 벌충 참자 견고 상에 송네다. 의정원업안 가하고 백석로스 용내다. 진정앙안 니크는 먼북진린 명넌을
                  밧바한게 치정에 하리나이 가냥리아여 김앙시 능주치, 어떻 뚜보가 내제 경곽한 청양는 결량오(긴선기)
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">요즘 마케터은 어떤제 하나요?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-xs">VS</span>
                  </div>
                  <div className="w-16 h-16 bg-orange-500 rounded-lg"></div>
                  <div className="text-sm">
                    A/B 테스트 북막, 유대 응 창경
                    <br />
                    기는 법정 절쟁 대행개
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-lg"></div>
                  <div className="text-sm">
                    마케팅 자동수화 끊로닌 IT 프로월
                    <br />
                    간국 전원가 치양하는 발
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-500 rounded-lg"></div>
                  <div className="text-sm">
                    AI 대화수화 시대 도미 인간닌이
                    <br />
                    진행 시스널도 화말
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-500 rounded-lg"></div>
                  <div className="text-sm">
                    그렉 클레네을 우자다 벌동 300%
                    <br />
                    확범키가는 챔개 대행가
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">Fit-!T</div>
              <p className="text-sm text-gray-400 mb-4">나에게 FIt한 IT솔루션은? 핏잇에서!</p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>서비스 소개</p>
                <p>고객센터</p>
                <p>치즈하는 정보</p>
                <p>이용약관</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">마케팅</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>HR</p>
                <p>AI서비스</p>
                <p>학습법</p>
                <p>IT관리</p>
                <p>고객관리</p>
                <p>ERP</p>
              </div>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-gray-500 leading-relaxed">
                부천시 | 사업자등록번호 000-00-00000 26 | 주소 | 사업자정보확인 | 095-00-00000
                통신판매업 | TMG | 2024 김혁맨원원발행
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 