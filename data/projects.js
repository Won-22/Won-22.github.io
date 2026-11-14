/*
 * 프로젝트 목록. 홈 화면에 위에서부터 이 순서로 나와요.
 * 새 프로젝트 추가:
 *   1) 아래 배열에 항목 하나 추가 (id는 영문 소문자, 파일 이름과 같게)
 *   2) data/projects/<id>.js 파일을 만들어 상세 내용을 적기 (fitlog.js를 복사해서 시작)
 *   3) 사진은 assets/img/<id>/ 폴더에
 */
window.PORTFOLIO = window.PORTFOLIO || {};
window.PORTFOLIO.projects = [
  {
    id: "fitlog",
    title: { ko: "Fit Log 핏로그", en: "Fit Log" },
    period: "2026.10 – ",
    summary: {
      ko: "옷을 사기 전에 링크 하나를 넣으면 AI 에이전트 8개가 최저가, 내 옷 실측 기준 사이즈, 코디, 날씨를 나눠 조사해 한 화면에 판정합니다. 사이즈 규칙을 세 번 고쳐 옷장 18벌 평가에서 14벌을 맞혔습니다.",
      en: "Paste one product link and eight AI agents split the work: lowest price, the size that matches clothes you already own, outfits and weather, all judged on one screen. Three rounds of rule changes took the size hit rate to 14 of 18 on a wardrobe test."
    },
    role: { ko: "기획 · 판정 규칙 · 평가 설계와 운영 · 배포", en: "Scoping · decision rules · evaluation · deployment" },
    // 큰 사진과 작은 사진. 홈 화면 블록에 쓰여요.
    image: "assets/img/real/verdict.jpg",
    imageAlt: { ko: "Fit Log 판정 화면: 가격 2곳 비교, 추천 사이즈 L, 오늘 날씨", en: "Fit Log verdict: two prices compared, size L recommended, today's weather" },
    thumb: "assets/img/real/size.jpg",
    thumbAlt: { ko: "Fit Log 사이즈 판정: 사이즈표와 추천 근거", en: "Fit Log size check: size chart and the reasons" },
    links: [
      { label: { ko: "사례 읽기", en: "Read the case" }, url: "project.html?id=fitlog" },
      { label: { ko: "앱 열기", en: "Open the app" }, url: "https://salkka.vercel.app" }
    ]
  }
];
