# 원 · FDE 포트폴리오

고객 문제를 좁히고, 만들어 배포하고, 숫자로 확인하는 FDE(Forward Deployed Engineer) 지망 개발자의 포트폴리오 사이트입니다.

- 주소: https://won-22.github.io
- 한국어·영어: 화면 위쪽 `English` / `한국어` 버튼, 또는 주소 뒤에 `?lang=en`
- 빌드 도구 없음: HTML · CSS · JavaScript만 씁니다. `index.html`을 더블클릭해도 열려요.

## 폴더

```
index.html              홈
project.html            사례 페이지 (project.html?id=fitlog)
data/profile.js         이름 · 소개 · 연락처 · 기술 · 교육 · 자격증 · 경력
data/projects.js        프로젝트 목록 (홈에 나오는 요약)
data/projects/<id>.js   프로젝트별 사례 본문
assets/css/site.css     디자인 (색·글꼴은 맨 위 :root에)
assets/js/site.js       data/를 읽어 화면을 그리는 코드
assets/img/             사진
tools/check.mjs         데이터 검사 (PR마다 GitHub Actions가 실행)
```

화면 코드는 `data/`를 읽어서 그리기만 해요. 내용을 바꿀 때는 `data/`만 고치면 됩니다.
모든 문구는 `{ ko: "...", en: "..." }` 모양이고, `en`이 비어 있으면 한국어를 보여 줘요.

## 자주 하는 일

### 교육 수료 · 자격증 · 경력 추가

`data/profile.js`의 목록에 한 줄씩 넣으면 홈의 소개 아래에 나타나요. 목록이 비어 있으면 그 칸은 숨겨져요.

```js
education: [
  { title: { ko: "○○ AI 부트캠프 수료", en: "○○ AI Bootcamp" }, org: { ko: "○○아카데미", en: "○○ Academy" }, year: "2026" }
],
certifications: [
  { title: { ko: "정보처리기사", en: "Engineer Information Processing" }, org: { ko: "한국산업인력공단", en: "HRDK" }, year: "2026" }
],
```

### 프로젝트 추가

1. `data/projects.js` 배열에 항목 하나를 추가해요. `id`는 영문 소문자(예: `"newproject"`).
2. `data/projects/fitlog.js`를 복사해 `data/projects/newproject.js`로 만들고, 맨 위 `caseStudies.fitlog`를 `caseStudies.newproject`로 바꾼 뒤 내용을 고쳐요. 평가판(`evalExplorer`)은 Fit Log 전용이라 새 파일에서는 지워요.
3. 사진은 `assets/img/newproject/`에 넣고 경로를 적어요.
4. `node tools/check.mjs`로 빠진 파일이 없는지 확인해요.

사례 본문은 `sections` 목록이고, `type`으로 모양을 골라요: `text`(글 + 옆 사진), `timeline`(날짜별 단계), `flow`(구조도), `eval`(숫자 변화), `points`(짧은 항목들), `gallery`(사진 여러 장).

### 내 PC에서 보기

`index.html`을 더블클릭하면 돼요. 서버가 필요 없어요.

## 배포

GitHub Pages가 `main` 브랜치의 루트 폴더를 그대로 올려요. main에 머지하면 1~2분 뒤 반영돼요.

브라우저가 예전 파일을 기억하지 않도록 `index.html`과 `project.html`의 CSS·JS 주소 끝에 `?v=날짜`를 붙여 뒀어요. 문구나 디자인을 바꾸면 두 파일의 `v=` 값을 함께 바꿔 주세요.

## 디자인

- 콘셉트: 글자와 색만으로 된 첫 화면, 아래로 갈수록 실제 앱 화면이 크게 나와요.
- 글꼴: 이름·큰 숫자는 Bodoni Moda, 본문은 Pretendard. 색: 퍼티(#dedad3) 바탕, 검정 글자, 청록(#256f82) 강조. 다크 모드 지원.
- 앱 화면 사진은 Fit Log 데모 계정의 예시 데이터로 찍은 것이에요.
