import Link from "next/link";

const userAgent = navigator.userAgent.toLowerCase();
const isAndroid = /android/i.test(userAgent);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            성당 활동을 함께 - Tamim
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            성당 공동체의 미사 및 봉사, 나눔이 온전히 이어질 수 있도록 돕는 단체
            관리 앱
          </p>
          {!isAndroid ? (
            <Link
              href="https://apps.apple.com/kr/app/성당-활동을-함께-tamim/id6744606805"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              App Store에서 다운로드
            </Link>
          ) : (
            <Link
              href="https://play.google.com/store/apps/details?id=com.hun.tamim"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Google Play에서 다운로드
            </Link>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                전례력과 연동된 일정 관리
              </h3>
              <p className="text-gray-600">
                주보나 구두로 전달되던 봉사 일정을 앱에서 확인하고 관리하세요.
                차월 봉사표 작성도 손쉽게!
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                모임 개설 및 초대 기능
              </h3>
              <p className="text-gray-600">
                복잡한 가입 절차 없이 초대 링크 또는 QR로 빠르게 모임에 참여할
                수 있습니다.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                소셜 로그인 및 내 정보 관리
              </h3>
              <p className="text-gray-600">
                간편한 소셜 로그인으로 시작하고, 내 소속 모임과 역할도 쉽게
                관리하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            이런 분들을 위한 앱입니다
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg text-gray-600">
              <li>
                • 성당 청년 전례단, 성가대, 복사단, 성서모임 등 단체에 소속된
                분들
              </li>
              <li>• 봉사자 스케줄 조율이 어려운 모임장</li>
              <li>• 성당 내의 취미나 관심사 모임에 관심이 있으신 분</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2024 Tamim. All rights reserved.</p>
          <p className="text-gray-400">개발자: Taehun Kim</p>
        </div>
      </footer>
    </main>
  );
}
