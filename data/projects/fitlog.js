/*
 * Fit Log 사례 페이지 내용 (project.html?id=fitlog).
 * 새 프로젝트를 만들 땐 이 파일을 복사해 id와 내용을 바꾸면 돼요.
 *
 * sections의 type:
 *   "text"     heading + paragraphs (+ 선택: aside 사진)
 *   "points"   heading + 짧은 항목 목록 (title + body)
 *   "timeline" heading + 날짜별 단계
 *   "flow"     heading + 구조도 (lanes: 왼쪽에서 오른쪽으로 흐르는 상자들)
 *   "eval"     heading + 숫자가 바뀐 과정 + 직접 눌러 보는 평가판(evalExplorer)
 *   "gallery"  사진 여러 장
 */
window.PORTFOLIO = window.PORTFOLIO || {};
window.PORTFOLIO.caseStudies = window.PORTFOLIO.caseStudies || {};
window.PORTFOLIO.caseStudies.fitlog = {
  title: { ko: "Fit Log 핏로그", en: "Fit Log" },
  lede: {
    ko: "옷을 사기 전에 묻는 쇼핑 판정 앱. 링크 하나로 최저가, 내 옷 기준 사이즈, 코디, 날씨를 한 화면에 판정합니다.",
    en: "A shopping verdict app you ask before you buy. One link gets you the lowest price, the size that matches your own clothes, outfits and weather on one screen."
  },
  facts: [
    { label: { ko: "기간", en: "Period" }, value: { ko: "2026년 10월 21일 – 지금", en: "21 Oct 2026 – now" } },
    { label: { ko: "역할", en: "Role" }, value: { ko: "1인 기획", en: "Solo planning" } }
  ],
  links: [
    { label: { ko: "앱 열기", en: "Open the app" }, url: "https://salkka.vercel.app" }
  ],
  hero: "assets/img/real/home.jpg",
  heroAlt: { ko: "Fit Log 홈 화면: 상품 링크 입력 칸과 최근 판정", en: "Fit Log home screen: product link field and recent verdicts" },

  sections: [
    {
      type: "text",
      id: "problem",
      heading: { ko: "후회 세 가지에서 둘만 골랐어요", en: "Three regrets, two chosen" },
      paragraphs: [
        {
          ko: "옷을 사고 하는 후회는 세 가지였어요. 사이즈가 안 맞았다, 더 싼 곳이 있었다, 입을 데가 없었다. 같은 와이드 팬츠도 브랜드마다 치수가 다르고, 모델 착용샷은 내 몸이 아니에요.",
          en: "Buying clothes left three regrets: it didn't fit, it was cheaper elsewhere, and I had nothing to wear it with. The same wide trousers measure differently by brand, and the model in the photo is not me."
        },
        {
          ko: "그래서 주인공을 둘로 좁혔어요. 내 옷장의 딱 맞는 옷 실측으로 고르는 사이즈, 그리고 산 옷을 실제로 입게 만드는 코디. 상용화는 범위에서 뺐어요.",
          en: "So I narrowed it to two jobs: pick the size from the measurements of clothes that already fit, and make new clothes wearable with outfits from my own wardrobe. Commercial launch was cut from scope."
        }
      ],
      aside: "assets/img/real/verdict.jpg",
      asideAlt: { ko: "판정 화면: 가격 2곳, 추천 사이즈, 오늘 날씨", en: "Verdict: two prices, recommended size, today's weather" }
    },
    {
      type: "timeline",
      id: "timeline",
      heading: { ko: "24일 동안 한 일", en: "Twenty-four days" },
      intro: {
        ko: "첫 업로드부터 배포는 하루 만에, 친구용 엔진은 사흘 만에 붙였어요. 그 뒤는 대부분 재고 고치는 시간이었어요.",
        en: "The first deploy took a day and the friends' engine three. Most of the time after that went into measuring and fixing."
      },
      steps: [
        { date: { ko: "10월 21일", en: "21 Oct" }, title: { ko: "문제 좁히기", en: "Scope" }, body: { ko: "후회 세 가지 정리, 사이즈·코디 두 기능으로 좁힘", en: "Three regrets written down, cut to size and outfits" } },
        { date: { ko: "10월 22일", en: "22 Oct" }, title: { ko: "첫 배포", en: "First deploy" }, body: { ko: "v0.1. 에이전트 지침, 판정 규칙 한 장, 앱 화면, Vercel 자동 배포", en: "v0.1: agent instructions, a one-page rulebook, the app, auto-deploy on Vercel" } },
        { date: { ko: "10월 23일", en: "23 Oct" }, title: { ko: "남이 쓸 수 있게", en: "Usable by others" }, body: { ko: "자체 로그인(서버비 0원), 막힌 쇼핑몰을 Gemini로 읽기, 친구용 서버 엔진", en: "Own login at zero cost, blocked shops read through Gemini, a server engine for friends" } },
        { date: { ko: "11월 4일", en: "4 Nov" }, title: { ko: "도구로 묶고 재기", en: "Package and measure" }, body: { ko: "Python 도구를 MCP 서버로. 사이즈 규칙 첫 평가 5/18, 바지 기준을 허리로 바꿔 8/18", en: "Python tools wrapped as an MCP server. First size evaluation 5/18; switching trousers to the waist made it 8/18" } },
        { date: { ko: "11월 5일", en: "5 Nov" }, title: { ko: "기준선과 비교", en: "Against a baseline" }, body: { ko: "\"평소 사던 사이즈\" 기준선이 13/18로 규칙보다 높았어요. 규칙을 나눠 써서 14/18", en: "A 'just buy your usual size' baseline scored 13/18, beating the rule. Splitting the rule made it 14/18" } },
        { date: { ko: "11월 14일", en: "14 Nov" }, title: { ko: "지금", en: "Now" }, body: { ko: "v0.74.1, 116개 버전, 자동 시험 70개 이상이 PR마다 돌아요", en: "v0.74.1, 116 releases, 70+ automated tests on every pull request" } }
      ]
    },
    {
      type: "flow",
      id: "architecture",
      heading: { ko: "엔진 두 개, 규칙 한 장", en: "Two engines, one rulebook" },
      intro: {
        ko: "정답이 하나인 것(사이즈 결정 순서, 예산, 기온별 옷차림, 가격 비교)은 코드와 규칙으로 고정하고, 답이 여럿인 가장자리(페이지 읽기, 코디, 설명)만 AI에게 맡겼어요.",
        en: "Anything with one right answer (size order, budget, what to wear at which temperature, price comparison) is fixed in code and rules. The model only gets the edges with many answers: reading pages, outfits, explanations."
      },
      lanes: [
        {
          name: { ko: "입력", en: "Input" },
          boxes: [{ ko: "상품 링크 · 사진 · 상품명", en: "Product link, photo or name" }]
        },
        {
          name: { ko: "내 계정: 에이전트 팀", en: "My account: agent team" },
          boxes: [
            { ko: "총괄 (Opus) · 일을 나누고 기록", en: "Lead (Opus): splits work, writes results" },
            { ko: "가격 · 대안 (Haiku)", en: "Price, alternatives (Haiku)" },
            { ko: "핏 · 코디 · 추천 · 리서치 (Sonnet)", en: "Fit, outfits, picks, research (Sonnet)" }
          ]
        },
        {
          name: { ko: "친구 계정: 서버 엔진", en: "Friends: server engine" },
          boxes: [
            { ko: "Vercel 함수 + Gemini 무료 등급", en: "Vercel functions + Gemini free tier" },
            { ko: "OpenRouter + Tavily (비슷한 옷)", en: "OpenRouter + Tavily (similar items)" },
            { ko: "사람별 · 하루 한도", en: "Per-person, per-day limits" }
          ]
        },
        {
          name: { ko: "공통", en: "Shared" },
          boxes: [
            { ko: "판정 규칙 한 장 (모든 에이전트가 먼저 읽음)", en: "One rulebook every agent reads first" },
            { ko: "MCP 서버: 도구 7개, 지우는 도구 없음", en: "MCP server: 7 tools, none that delete" },
            { ko: "Supabase (본인 줄만 읽고 쓰기, RLS)", en: "Supabase with row-level security" }
          ]
        }
      ]
    },
    {
      type: "eval",
      id: "evaluation",
      heading: { ko: "숫자로 재고 규칙을 고쳤어요", en: "Measured, then fixed the rule" },
      intro: {
        ko: "옷장에서 옷 한 벌씩 빼고, 나머지 옷으로 그 옷의 사이즈를 맞히게 했어요. 정답은 제가 실제로 산 사이즈예요. 18문제, 한 사람의 옷장이라 숫자는 방향만 봐요.",
        en: "Take one garment out of the wardrobe and predict its size from the rest; the answer is the size I actually bought. Eighteen cases from one person's wardrobe, so the numbers show direction, not precision."
      },
      steps: [
        { score: 5, label: { ko: "처음 규칙", en: "First rule" }, body: { ko: "바지를 허벅지로 비교하다 허리가 전혀 다른 사이즈를 골랐어요.", en: "Comparing trousers by the thigh picked sizes with a completely different waist." } },
        { score: 8, label: { ko: "바지는 허리로", en: "Trousers by waist" }, body: { ko: "바지 적중이 1/7에서 4/7로.", en: "Trousers went from 1/7 to 4/7." } },
        { score: 13, label: { ko: "기준선: 평소 사이즈", en: "Baseline: usual size" }, body: { ko: "그냥 평소 사던 사이즈를 샀다면 13. 제 규칙이 기준선보다 낮았어요.", en: "Just buying the usual size scored 13. My rule was losing to the baseline." } },
        { score: 14, label: { ko: "규칙을 나눠 쓰기", en: "Split the rule" }, body: { ko: "같은 종류·핏 옷이 있을 땐 실측 규칙이 5/5. 그때만 실측, 아니면 평소 사이즈.", en: "With a same-type, same-fit garment the measurement rule went 5/5. Use it only then, otherwise the usual size." } }
      ],
      agentNote: {
        ko: "같은 18문제를 핏 에이전트에게도 풀게 했어요. 여러 문제를 한 에이전트에게 주면 답이 새어서, 문제 하나에 에이전트 하나로 바꾸자 규칙 일치가 17/18이 됐어요.",
        en: "The fit agent sat the same 18 cases. Giving one agent many cases leaked answers between them; one agent per case brought rule agreement to 17/18."
      }
    },
    {
      type: "points",
      id: "decisions",
      heading: { ko: "이렇게 정했고, 이건 뺐어요", en: "Decisions and cuts" },
      items: [
        { title: { ko: "출처 없는 정보는 보여 주지 않아요", en: "No source, no claim" }, body: { ko: "링크 없는 가격·상품·사진은 넣지 않고 \"확인 필요\"나 \"찾지 못함: 이유\"로 적어요.", en: "Prices, products or photos without a link are left out and marked 'needs checking' or 'not found: reason'." } },
        { title: { ko: "외부 AI에는 필요한 것만", en: "Send the model only what it needs" }, body: { ko: "제 계정과 MCP 서버는 Gemini에 상품 주소와 고정 질문만 보내요. 친구 엔진은 동의를 받고 판정에 필요한 체형 숫자만 보내요.", en: "My account and the MCP server send Gemini only the product URL and a fixed question. The friends' engine sends body measurements only, with consent." } },
        { title: { ko: "결과를 흔드는 곳은 뺐어요", en: "Removed what made results unstable" }, body: { ko: "같은 상품을 두 번 조사하면 종합몰 최저가가 결과를 가장 많이 흔들었어요. 옷은 무신사, 신발은 크림을 먼저 보게 고정했어요.", en: "Running the same product twice, general marketplaces caused most of the drift. Clothing now checks one fashion store first, shoes one sneaker store." } },
        { title: { ko: "\"사지 마세요\"도 정답이에요", en: "'Don't buy it' is a valid answer" }, body: { ko: "쇼핑몰이 아니라서, 안 맞거나 비슷한 옷이 이미 있으면 그렇게 말해요.", en: "It is not a shop, so when it won't fit or you own something similar, it says so." } }
      ]
    },
    {
      type: "points",
      id: "limits",
      heading: { ko: "아직 부족한 점", en: "What is still missing" },
      items: [
        { title: { ko: "실사용자", en: "Real users" }, body: { ko: "저 말고 쓰는 사람이 아직 없어요. 친구 3명이 2주 쓰는 시험이 다음 단계예요.", en: "Nobody but me uses it yet. Three friends for two weeks is the next step." } },
        { title: { ko: "표본의 편향", en: "Sample bias" }, body: { ko: "정답지가 제 옷장 18벌이라, 맞아서 남긴 옷만 있다는 편향이 있어요.", en: "The answer key is my own 18 garments: only clothes that fitted well enough to keep." } },
        { title: { ko: "코드 작성", en: "Who wrote the code" }, body: { ko: "코드 대부분은 Claude Code 에이전트가 썼어요. 규칙과 평가를 정한 이유는 제가 설명할 수 있고, 코드도 한 파일씩 다시 읽으며 설명할 수 있게 만드는 중이에요.", en: "Claude Code agents wrote most of the code. I can explain why each rule and test exists, and I am working through the code file by file to explain it line by line." } }
      ]
    },
    {
      type: "gallery",
      id: "screens",
      heading: { ko: "실제 앱 화면", en: "The real app" },
      note: { ko: "제가 실제로 쓰는 계정의 화면이에요. 쇼핑몰 상품 사진과 체형 숫자는 흐리게 처리했어요.", en: "Screens from my own account. Store product photos and body numbers are blurred." },
      images: [
        { src: "assets/img/real/home.jpg", alt: { ko: "홈: 링크를 넣거나 기준을 골라 추천받기", en: "Home: paste a link or pick a way to get picks" } },
        { src: "assets/img/real/verdict.jpg", alt: { ko: "판정: 가격 2곳, 예산, 오늘 날씨", en: "Verdict: two prices, budget, today's weather" } },
        { src: "assets/img/real/size.jpg", alt: { ko: "사이즈: 내 옷장 실측으로 고른 L과 근거", en: "Size: L picked from my wardrobe's measurements" } },
        { src: "assets/img/real/coordi.jpg", alt: { ko: "코디: 내 옷장 옷으로 만든 3벌", en: "Outfits: three looks from my own wardrobe" } },
        { src: "assets/img/real/research.jpg", alt: { ko: "조사: 무엇을 볼지 고르기", en: "Research: choose what to check" } },
        { src: "assets/img/real/recommend.jpg", alt: { ko: "추천받기: 기준과 예산", en: "Get picks: criteria and budget" } },
        { src: "assets/img/real/add-item.jpg", alt: { ko: "옷 추가: 링크를 넣으면 Claude가 채워요", en: "Add an item: Claude fills it in from a link" } }
      ]
    }
  ]
};

/*
 * 직접 눌러 보는 평가판 데이터.
 * 18문제의 칸은 공개한 집계(규칙 8 · 평소 사이즈 13 · 둘 다 맞힘 6 · 평소만 7 · 규칙만 2 · 둘 다 틀림 3,
 * 같은 종류+핏 옷이 있는 5문제에서 규칙 5/5)를 그대로 재현하도록 배치했어요. 실제 옷 이름은 비공개예요.
 */
window.PORTFOLIO.evalExplorer = {
  cases: [
    // near: 같은 종류+핏 옷이 옷장에 있음 / rule: 실측 규칙이 맞힘 / usual: 평소 사이즈가 맞힘
    { near: true, rule: true, usual: true },
    { near: true, rule: true, usual: true },
    { near: true, rule: true, usual: false },
    { near: true, rule: true, usual: true },
    { near: true, rule: true, usual: true },
    { near: false, rule: false, usual: true },
    { near: false, rule: true, usual: true },
    { near: false, rule: false, usual: true },
    { near: false, rule: false, usual: false },
    { near: false, rule: false, usual: true },
    { near: false, rule: true, usual: false },
    { near: false, rule: false, usual: true },
    { near: false, rule: false, usual: true },
    { near: false, rule: true, usual: true },
    { near: false, rule: false, usual: false },
    { near: false, rule: false, usual: true },
    { near: false, rule: false, usual: true },
    { near: false, rule: false, usual: false }
  ],
  strategies: [
    { id: "rule", label: { ko: "실측 규칙만", en: "Measurements only" }, note: { ko: "옷장의 가장 가까운 옷과 실측을 비교해요. 같은 종류·핏 옷이 없으면 자주 틀려요.", en: "Compare measurements with the closest garment. Often wrong when no same-type, same-fit garment exists." } },
    { id: "usual", label: { ko: "평소 사이즈만", en: "Usual size only" }, note: { ko: "같은 카테고리에서 가장 많이 산 사이즈를 그대로 골라요. 기준선이에요.", en: "Pick the size bought most often in that category. This is the baseline." } },
    { id: "split", label: { ko: "나눠 쓰기", en: "Split" }, note: { ko: "같은 종류·핏 옷이 있을 때만 실측, 없으면 평소 사이즈. 지금 앱이 쓰는 규칙이에요.", en: "Measurements only when a same-type, same-fit garment exists, otherwise the usual size. The rule the app uses now." } }
  ]
};
