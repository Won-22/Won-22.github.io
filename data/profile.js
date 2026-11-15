/*
 * 사이트 전체에 쓰는 내 정보.
 * 모든 문구는 { ko: "...", en: "..." } 모양이에요. en이 비어 있으면 ko를 보여 줘요.
 * 목록(education, certifications, experience)이 비어 있으면 그 줄은 화면에서 숨겨져요.
 */
window.PORTFOLIO = window.PORTFOLIO || {};
window.PORTFOLIO.profile = {
  // 가운데에 크게 들어가는 이름. 영문 3~8글자가 가장 보기 좋아요.
  wordmark: "Won",
  name: { ko: "원", en: "Won" },
  location: { ko: "대전", en: "Daejeon, Korea" },

  // 첫 화면 왼쪽 위 한 문장
  pitch: {
    ko: "고객 문제를 좁히고, 만들어 배포하고, 숫자로 확인합니다.",
    en: "I scope the problem, ship the fix, and measure it."
  },

  // 연락처. 비워 두면 그 줄이 숨겨져요.
  email: "",
  github: "https://github.com/Won-22",
  links: [
    // { label: { ko: "블로그", en: "Blog" }, url: "https://..." }
  ],

  // 소개 문단 (About)
  about: {
    ko: "일상에서 불편하거나 시간과 손이 많이 가는 일을 AI로 하나씩 고쳐 가고 있습니다. 처음엔 저만 불편한 줄 알았는데, 주변에 물어보면 다들 같은 불편을 겪고 있는 경우가 많았습니다. Fit\u00a0Log도 옷을 살 때마다 겪던 그런 불편에서 시작했습니다. AI에게 맡기는 데서 그치지 않고 프로그래밍 언어도 함께 공부하며, 만들 줄만 아는 사람이 아니라 코드를 읽고 설명할 줄 아는 개발자가 되려고 합니다.",
    en: "I use AI to fix the small frictions in everyday life: the things that annoy me or eat up time and effort. Each one started as my own problem, and when I asked around, it usually turned out everyone else had it too. Fit\u00a0Log began that way, with buying clothes. I don't stop at handing work to AI; I'm also studying programming languages, so that I can read and explain the code, not just ship it."
  },
  facts: [
    { label: { ko: "지원 분야", en: "Looking for" }, value: { ko: "Forward Deployed Engineer", en: "Forward Deployed Engineer" } },
    { label: { ko: "기반", en: "Based in" }, value: { ko: "대전", en: "Daejeon, Korea" } },
    { label: { ko: "언어", en: "Languages" }, value: { ko: "한국어", en: "Korean" } }
  ],

  // 직접 붙여 본 도구·서비스. 홈 화면에 한 문장으로 이어서 보여 줘요.
  stack: [
    "Claude Code", "Claude subagents", "MCP", "Python", "Node.js",
    "Supabase", "Vercel", "Gemini API", "OpenRouter", "Tavily",
    "pytest", "GitHub Actions", "PWA"
  ],

  /* 아래 세 목록에 한 줄씩 추가하면 화면에 나타나요.
   * { title: { ko: "...", en: "..." }, org: { ko: "...", en: "..." }, year: "2026" }
   */
  education: [],
  certifications: [],
  experience: []
};
