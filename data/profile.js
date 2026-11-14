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
    ko: "AI 에이전트로 실제 문제를 푸는 개발자입니다. Fit Log는 기획부터 판정 규칙, 평가까지 직접 설계했고, 코드는 Claude Code와 함께 짰습니다. AI에게 맡길 부분과 규칙으로 정해 둘 부분을 나누는 일을 가장 중요하게 생각합니다.",
    en: "I build with AI agents to solve real problems. On Fit Log I designed everything from the scope to the decision rules and the evaluation, and wrote the code together with Claude Code. What I care about most is deciding which parts to hand to the model and which to pin down with rules."
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
