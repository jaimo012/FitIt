import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Logo } from '@/components/ui/logo'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-turquoise via-brand-purple to-brand-turquoise py-24 px-4">
        <div className="container mx-auto text-center">
          {/* 공식 BI 로고 사용 */}
          <div className="mb-8 flex justify-center">
            <Logo variant="white" size="xl" />
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-brand">
            복잡한 비교는 그만, 핏잇이 직접 제안합니다
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            SaaS 시장에서 자신에게 최적화된 서비스를 쉽고 빠르게 비교·선택하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-brand-purple hover:bg-white/90 font-semibold"
            >
              견적 요청하기
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
            >
              서비스 둘러보기
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-dark">
            어떻게 작동하나요?
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            3단계만으로 최적의 SaaS 솔루션을 찾아보세요
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-turquoise rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">요구사항 입력</h3>
              <p className="text-gray-600 leading-brand">
                필요한 기능, 예산, 규모 등 상세한 요구사항을 간단한 폼으로 입력하세요
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">맞춤 제안 수신</h3>
              <p className="text-gray-600 leading-brand">
                검증된 SaaS 공급업체들로부터 고객님께 딱 맞는 맞춤형 제안서를 받아보세요
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-turquoise to-brand-purple rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">비교 및 선택</h3>
              <p className="text-gray-600 leading-brand">
                투명한 정보와 실제 리뷰를 바탕으로 최적의 솔루션을 선택하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-brand-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-dark">
            핏잇만의 특별함
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-brand-dark">
                  <div className="w-10 h-10 bg-brand-turquoise rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  맞춤성
                </CardTitle>
                <CardDescription className="text-gray-600">
                  정밀한 매칭 알고리즘으로 고객 요구에 최적화된 제안
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-brand">
                  단순 비교가 아닌, 고객의 구체적 상황과 요구사항을 반영한 정밀한 매칭
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-brand-dark">
                  <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  간편함
                </CardTitle>
                <CardDescription className="text-gray-600">
                  복잡한 절차 없이 직관적인 비교 경험 제공
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-brand">
                  한 번의 요청으로 여러 업체의 맞춤 제안을 받아보는 효율적인 프로세스
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-brand-dark">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-turquoise to-brand-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🛡️</span>
                  </div>
                  신뢰성
                </CardTitle>
                <CardDescription className="text-gray-600">
                  검증된 공급업체와 실제 사용자 리뷰 기반 정보
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-brand">
                  엄격한 심사를 통과한 신뢰할 수 있는 SaaS 공급업체들만 참여
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-purple to-brand-turquoise">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            지금 시작하세요!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-brand">
            복잡한 SaaS 선택, 이제 핏잇에서 간단하게 해결하세요
          </p>
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 bg-white text-brand-purple hover:bg-white/90 font-semibold"
          >
            제안서 확인하기
          </Button>
        </div>
      </section>
    </main>
  )
} 