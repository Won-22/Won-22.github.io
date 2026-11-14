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
  role: { ko: "FDE 지망 개발자", en: "Aspiring Forward Deployed Engineer" },
  location: { ko: "서울", en: "Seoul, Korea" },

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
    ko: "AI 에이전트를 실제 문제에 붙이는 일을 합니다. Fit Log에서 기획, 판정 규칙, 평가 설계와 운영은 제가 했고, 코드는 Claude Code 에이전트와 함께 썼습니다. 어디를 AI에게 맡기고 어디를 규칙과 숫자로 묶을지 정하는 것이 제 일의 중심입니다.",
    en: "I put AI agents to work on real problems. On Fit Log I did the scoping, the decision rules and the evaluation design and runs; I wrote the code together with Claude Code agents. Deciding what to hand to the model and what to pin down with rules and numbers is the centre of how I work."
  },
  facts: [
    { label: { ko: "지원 분야", en: "Looking for" }, value: { ko: "Forward Deployed Engineer", en: "Forward Deployed Engineer" } },
    { label: { ko: "기반", en: "Based in" }, value: { ko: "서울", en: "Seoul, Korea" } },
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
