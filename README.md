# Fit-!T 🎯

맞춤형 SaaS 비교·견적 플랫폼 - 복잡한 비교는 그만, 핏잇이 직접 제안합니다

## 🎯 서비스 개요

Fit-!T는 사용자가 복잡한 SaaS 시장에서 자신에게 최적화된 서비스를 쉽고 빠르게 비교·선택할 수 있도록 지원하는 **역제안 기반 견적 플랫폼**입니다.

### 미션
사용자가 복잡한 SaaS 시장에서 자신에게 최적화된 서비스를 쉽고 빠르게 비교·선택할 수 있도록 지원

### 비전
'역제안 기반 견적 플랫폼'으로서 국내외 모든 SaaS 공급자와 수요자를 연결해주는 표준 채널

## 🚀 핵심 기능

- **🎯 맞춤형 제안**: 사용자 요구사항을 정밀히 분석하여 최적화된 SaaS 솔루션 제안
- **⚡ 간편한 비교**: 한 번의 요청으로 여러 공급업체의 맞춤 견적을 한 곳에서 비교
- **🛡️ 검증된 정보**: 엄격한 심사를 통과한 신뢰할 수 있는 SaaS 공급업체들만 참여
- **💰 투명한 가격**: Pay-per-quote 모델로 공정하고 투명한 과금 시스템
- **🔒 데이터 보안**: 기업 데이터와 견적 정보에 대한 철저한 보안 관리

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS (브랜드 컬러 적용)
- **Database**: PostgreSQL, Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: CloudType

## 🎨 브랜드 가이드

자세한 브랜드 가이드는 [`docs/BRAND_GUIDE.md`](./docs/BRAND_GUIDE.md) 파일을 참조하세요.

### 브랜드 컬러
- **터키색**: `#30CFCF`
- **보라색**: `#7C3AED`
- **다크 그레이**: `#333333`
- **라이트 그레이**: `#F5F5F5`

## 🏃‍♂️ 개발 시작하기

### 1. 저장소 클론
```bash
git clone https://github.com/jaimo012/FitIt.git
cd FitIt
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경변수 설정
```bash
cp .env.example .env.local
# .env.local 파일에 실제 값들을 입력하세요
```

### 4. 데이터베이스 설정
```bash
npm run db:generate
npm run db:push
```

### 5. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

## 📁 프로젝트 구조

```
fitit/
├── app/                    # Next.js 14 App Router
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/               # API Routes
├── components/            # 재사용 컴포넌트
│   ├── ui/               # Shadcn/ui 컴포넌트
│   └── custom/           # 커스텀 컴포넌트
├── docs/                 # 문서
│   └── BRAND_GUIDE.md    # 브랜드 가이드
├── lib/                  # 유틸리티 및 설정
├── prisma/               # 데이터베이스 스키마
├── public/               # 정적 파일
└── types/                # TypeScript 타입 정의
```

## 🚀 배포

### CloudType 배포
1. CloudType 콘솔에서 새 프로젝트 생성
2. GitHub 저장소 연결
3. 환경변수 설정
4. 자동 배포 실행

### 환경변수 (CloudType)
- `DATABASE_URL`: PostgreSQL 연결 URL
- `NEXTAUTH_SECRET`: NextAuth.js 시크릿 키
- `NEXTAUTH_URL`: 배포된 애플리케이션 URL

## 🤝 기여하기

1. 이 저장소를 Fork하세요
2. 새로운 기능 브랜치를 생성하세요 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 문의사항

프로젝트 관련 문의사항이 있으시면 이슈를 생성해주세요. 