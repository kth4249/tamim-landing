"use client";

import { useEffect } from "react";

const ANDROID_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.hun.tamim";
const IOS_STORE_URL =
  "https://apps.apple.com/kr/app/%EC%84%B1%EB%8B%B9-%ED%99%9C%EB%8F%99%EC%9D%84-%ED%95%A8%EA%BB%98-tamim/id6744606805";

export default function BridgePage() {
  // const [isAndroid, setIsAndroid] = useState(false);
  // const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    // 브라우저 감지
    const userAgent = navigator.userAgent.toLowerCase();
    const isKakaoBrowser = userAgent.indexOf("kakaotalk") > -1;
    const isAndroid = /android/i.test(userAgent);

    // setIsAndroid(isAndroid);
    // 앱 스킴 URL
    const appScheme = "tamim://com.hun.tamim";

    // 현재 URL의 쿼리 파라미터를 가져옴
    const urlParams = new URLSearchParams(window.location.search);

    const joinKey = urlParams.get("key");
    // setKey(joinKey);

    // 앱으로 전달할 파라미터 구성
    const appUrl = `${appScheme}/join/${joinKey}`;

    // 카카오톡 브라우저인 경우
    if (isKakaoBrowser) {
      // 카카오톡 브라우저에서는 앱 스킴 실행이 제한될 수 있으므로
      // 바로 스토어로 이동
      const storeUrl = isAndroid ? ANDROID_STORE_URL : IOS_STORE_URL;

      window.location.href = storeUrl;
      return;
    }

    // 일반 브라우저인 경우
    // 앱 실행 시도
    window.location.href = appUrl;

    // eslint-disable-next-line prefer-const
    let timeout: NodeJS.Timeout;
    let handleVisibilityChange: () => void;

    // iOS에서 앱이 설치되어 있는지 확인
    if (!isAndroid) {
      handleVisibilityChange = () => {
        if (document.hidden) {
          // 앱이 실행되었으므로 타임아웃을 취소
          clearTimeout(timeout);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
    }

    // 앱이 설치되어 있지 않은 경우를 위한 타임아웃
    timeout = setTimeout(() => {
      const fallbackUrl = isAndroid ? ANDROID_STORE_URL : IOS_STORE_URL;

      window.location.href = fallbackUrl;
    }, 2000);

    return () => {
      clearTimeout(timeout);
      if (!isAndroid && handleVisibilityChange) {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">앱으로 이동 중...</h1>
        <p className="text-gray-600">잠시만 기다려주세요.</p>
      </div>
    </div>
  );
}
