/*
 * 화면을 그리는 코드. 내용은 data/ 폴더에서 읽어요.
 * 순서: 언어 정하기 → 페이지 그리기(홈 또는 사례) → 움직임 붙이기
 */
(function () {
  "use strict";
  var P = window.PORTFOLIO || {};
  var root = document.documentElement;
  root.classList.remove("no-js");

  /* ---------- 언어 ---------- */
  var LANGS = ["ko", "en"];
  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) >= 0) return q;
    try { var s = localStorage.getItem("lang"); if (LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    return (navigator.language || "ko").toLowerCase().indexOf("ko") === 0 ? "ko" : "en";
  }
  var lang = pickLang();
  root.lang = lang;

  // { ko, en } → 지금 언어의 문구. en이 비면 ko.
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] || v.ko || "";
  }

  // 화면 고정 문구
  var UI = {
    switchTo: { ko: "English", en: "한국어" },
    seeCase: { ko: "{t} 사례 보기", en: "Read the {t} case" },
    work: { ko: "작업", en: "Work" },
    how: { ko: "일하는 방식", en: "How I work" },
    contact: { ko: "연락", en: "Contact" },
    home: { ko: "처음으로", en: "Home" },
    intro: [
      { ko: "옷 쇼핑의 후회를", en: "I took the regret" },
      { ko: "사이즈 하나로 좁혀", en: "of buying clothes," },
      { ko: "직접 만들어 배포하고", en: "narrowed it to size," },
      { ko: "18벌로 재며 고쳐서", en: "shipped it, measured it," },
      { ko: "14벌을 맞혔습니다.", en: "and got 14 of 18 right." }
    ],
    measureHead: { ko: "규칙을 바꾸고 다시 쟀어요", en: "Change the rule, measure again" },
    measureLead: {
      ko: "옷장에서 옷 한 벌씩 빼고, 나머지로 그 옷의 사이즈를 맞히는 18문제예요. 방법을 골라 보세요.",
      en: "Eighteen cases: take one garment out of my wardrobe and predict its size from the rest. Pick a method."
    },
    hit: { ko: "맞힘", en: "Correct" },
    miss: { ko: "틀림", en: "Missed" },
    near: { ko: "같은 종류·핏 옷이 옷장에 있는 문제", en: "A same-type, same-fit garment exists" },
    of18: { ko: "/18", en: "/18" },
    caseN: { ko: "문제", en: "Case" },
    howHead: { ko: "혼자 한 바퀴", en: "One full loop, solo" },
    howBody: {
      ko: "FDE가 고객사에서 하는 일을 제 문제로 한 바퀴 돌았어요. 문제를 좁히고, 만들고, 붙이고, 재고, 고쳤어요.",
      en: "I ran the loop a forward deployed engineer runs at a customer, on my own problem: narrow it, build, integrate, measure, fix."
    },
    slip: [
      { h: { ko: "문제 정의 · 10월 21일", en: "Define · 21 Oct" }, rows: [
        [{ ko: "쇼핑 후회 정리", en: "Regrets listed" }, { ko: "3가지", en: "3" }],
        [{ ko: "주인공으로 남긴 기능", en: "Jobs kept" }, { ko: "2개", en: "2" }],
        [{ ko: "범위에서 뺀 것", en: "Cut from scope" }, { ko: "상용화", en: "Launch" }]
      ] },
      { h: { ko: "프로토타입 · 10월 22–23일", en: "Prototype · 22–23 Oct" }, rows: [
        [{ ko: "첫 배포까지", en: "To first deploy" }, { ko: "1일", en: "1 day" }],
        [{ ko: "역할을 나눈 에이전트", en: "Agents with roles" }, { ko: "8개", en: "8" }],
        [{ ko: "친구용 서버 엔진", en: "Friends' server engine" }, { ko: "3일째", en: "Day 3" }]
      ] },
      { h: { ko: "통합 · 11월 3–4일", en: "Integrate · 3–4 Nov" }, rows: [
        [{ ko: "MCP 서버 도구", en: "MCP server tools" }, { ko: "7개", en: "7" }],
        [{ ko: "사람별·하루 한도", en: "Per-person daily limits" }, { ko: "적용", en: "On" }],
        [{ ko: "한 달 서버비", en: "Monthly hosting" }, { ko: "0원", en: "$0" }]
      ] },
      { h: { ko: "평가와 수정 · 11월 4–5일", en: "Measure and fix · 4–5 Nov" }, rows: [
        [{ ko: "사이즈 첫 평가", en: "First size score" }, { ko: "5/18", en: "5/18" }],
        [{ ko: "기준선(평소 사이즈)", en: "Baseline (usual size)" }, { ko: "13/18", en: "13/18" }],
        [{ ko: "규칙을 나눠 쓴 뒤", en: "After splitting the rule" }, { ko: "14/18", en: "14/18" }],
        [{ ko: "에이전트 규칙 일치", en: "Agent rule agreement" }, { ko: "17/18", en: "17/18" }]
      ] }
    ],
    slipTotal: [{ ko: "24일 · 116개 버전", en: "24 days · 116 releases" }, { ko: "적중 14/18", en: "14/18 correct" }],
    stackHead: { ko: "직접 붙여 본 것들:", en: "What I have wired together:" },
    aboutHead: { ko: "소개", en: "About" },
    education: { ko: "교육", en: "Education" },
    certifications: { ko: "자격증", en: "Certifications" },
    experience: { ko: "경력", en: "Experience" },
    records: { ko: "기록", en: "Record" },
    contactHead: { ko: "연락처", en: "Contact" },
    hello: { ko: "연락하기", en: "Say hello" },
    footInvite: { ko: "같이 풀 문제를\n찾고 있어요", en: "Bring me\na real problem" },
    footBtnMail: { ko: "이메일 보내기", en: "Send an email" },
    footBtnGit: { ko: "GitHub 보기", en: "See GitHub" },
    backHome: { ko: "← 처음으로", en: "← Home" },
    notFound: { ko: "이 프로젝트를 찾지 못했어요.", en: "Project not found." },
    otherWork: { ko: "다른 작업 보기", en: "See other work" }
  };

  /* ---------- 작은 도구 ---------- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function $(sel) { return document.querySelector(sel); }
  function withLang(url) {
    if (!url || /^(https?:|mailto:)/.test(url)) return url;
    return url + (url.indexOf("?") >= 0 ? "&" : "?") + "lang=" + lang;
  }
  function external(url) { return /^https?:/.test(url) ? { target: "_blank", rel: "noopener" } : {}; }
  function linkEl(label, url, cls) {
    var a = el("a", Object.assign({ href: withLang(url), class: cls || "textlink" }, external(url)), [label]);
    return a;
  }

  // 큰 이름: SVG 글자를 그린 뒤 실제 크기에 맞게 viewBox를 맞춰 가로폭을 꽉 채워요.
  function wordmark(text, label) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "wordmark");
    svg.setAttribute("viewBox", "0 0 1000 300");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", label || text);
    var tx = document.createElementNS(ns, "text");
    tx.setAttribute("x", "0"); tx.setAttribute("y", "240"); tx.setAttribute("font-size", "300");
    tx.textContent = text;
    svg.appendChild(tx);
    function fit() {
      try {
        // 글자의 실제 잉크 높이만큼만 잘라서, 위아래 빈 공간 없이 꽉 차게
        var b = tx.getBBox();
        var c = document.createElement("canvas").getContext("2d");
        c.font = '500 300px "Bodoni Moda", serif';
        c.letterSpacing = "-15px";
        var m = c.measureText(text);
        var up = m.actualBoundingBoxAscent || 210, down = m.actualBoundingBoxDescent || 4;
        if (b.width > 0) svg.setAttribute("viewBox", [b.x, 240 - up - 2, b.width, up + down + 4].join(" "));
      } catch (e) {}
    }
    requestAnimationFrame(fit);
    if (document.fonts && document.fonts.load) document.fonts.load('500 300px "Bodoni Moda"', text).then(fit, fit);
    window.addEventListener("load", fit);
    return svg;
  }

  function langToggle() {
    var b = el("button", { type: "button", class: "lang-toggle", "aria-label": lang === "ko" ? "Switch to English" : "한국어로 보기" }, [t(UI.switchTo)]);
    b.addEventListener("click", function () {
      var next = lang === "ko" ? "en" : "ko";
      try { localStorage.setItem("lang", next); } catch (e) {}
      var u = new URL(location.href); u.searchParams.set("lang", next); location.href = u.toString();
    });
    return b;
  }

  function rise(node, i) { node.classList.add("rise"); node.style.setProperty("--i", i || 0); return node; }

  /* ---------- 공통: 평가판 (직접 눌러 보는 것) ---------- */
  function evalExplorer(headingTag) {
    var E = P.evalExplorer; if (!E) return null;
    var sec = el("section", { class: "measure", id: "measure", "aria-labelledby": "measure-h" });
    var grid = el("div", { class: "measure-grid" });
    var left = el("div");
    left.appendChild(rise(el(headingTag || "h2", { id: "measure-h", text: t(UI.measureHead) }), 0));
    left.appendChild(rise(el("p", { class: "lead", text: t(UI.measureLead) }), 1));
    var score = el("p", { class: "score num", "aria-live": "polite" });
    left.appendChild(rise(score, 2));

    var right = el("div");
    var pick = el("div", { class: "strategy-pick", role: "group", "aria-label": t(UI.measureHead) });
    var cells = el("ol", { class: "cases" });
    var note = el("p", { class: "strategy-note" });
    E.cases.forEach(function (c, i) {
      cells.appendChild(el("li", { class: "case" + (c.near ? " near" : ""), text: String(i + 1) }));
    });
    function result(c, id) { return id === "rule" ? c.rule : id === "usual" ? c.usual : (c.near ? c.rule : c.usual); }
    function show(id) {
      var n = 0;
      E.cases.forEach(function (c, i) {
        var ok = result(c, id); if (ok) n++;
        var li = cells.children[i];
        var was = li.classList.contains("hit");
        li.classList.toggle("hit", ok); li.classList.toggle("miss", !ok);
        li.setAttribute("aria-label", t(UI.caseN) + " " + (i + 1) + ": " + (ok ? t(UI.hit) : t(UI.miss)));
        if (was !== ok) { li.classList.add("pop"); setTimeout(function () { li.classList.remove("pop"); }, 300); }
      });
      score.innerHTML = "";
      score.appendChild(document.createTextNode(String(n)));
      score.appendChild(el("small", { text: t(UI.of18) }));
      var s = E.strategies.filter(function (x) { return x.id === id; })[0];
      note.textContent = t(s.note);
      Array.prototype.forEach.call(pick.children, function (b) { b.setAttribute("aria-pressed", String(b.dataset.id === id)); });
    }
    E.strategies.forEach(function (s) {
      var b = el("button", { type: "button", "data-id": s.id, "aria-pressed": "false" }, [t(s.label)]);
      b.addEventListener("click", function () { show(s.id); });
      pick.appendChild(b);
    });
    right.appendChild(rise(pick, 1));
    right.appendChild(rise(cells, 2));
    var legend = el("p", { class: "legend" }, [
      el("span", {}, [el("i", { class: "l-hit", "aria-hidden": "true" }), t(UI.hit)]),
      el("span", {}, [el("i", { class: "l-near", "aria-hidden": "true" }), t(UI.near)])
    ]);
    right.appendChild(rise(legend, 3));
    right.appendChild(rise(note, 3));
    grid.appendChild(left); grid.appendChild(right); sec.appendChild(grid);
    show("split");
    return sec;
  }

  /* ---------- 홈 ---------- */
  function renderHome() {
    var me = P.profile, projects = P.projects || [];
    var main = $("#main"); if (!main || !me) return;
    document.title = t(me.name) + " · " + t({ ko: "포트폴리오", en: "Portfolio" });
    var first = projects[0];

    // 첫 화면
    var hero = el("header", { class: "hero" });
    var top = el("div", { class: "hero-top" });
    var pitchBox = el("div");
    pitchBox.appendChild(rise(el("p", { class: "hero-pitch", text: t(me.pitch) }), 1));
    if (first) pitchBox.appendChild(rise(el("a", { class: "btn", href: withLang("project.html?id=" + first.id) }, [t(UI.seeCase).replace("{t}", t(first.title)), el("span", { class: "arrow", "aria-hidden": "true", text: "→" })]), 2));
    top.appendChild(pitchBox);
    var nav = el("nav", { class: "hero-nav", "aria-label": "Site" });
    nav.appendChild(langToggle());
    if (me.github) nav.appendChild(linkEl("GitHub", me.github));
    if (me.email) nav.appendChild(linkEl(t({ ko: "이메일", en: "Email" }), "mailto:" + me.email));
    top.appendChild(nav);
    hero.appendChild(top);
    var nameRow = el("div", { class: "hero-name" });
    var h1 = el("h1");
    h1.appendChild(wordmark(me.wordmark, t(me.name)));
    nameRow.appendChild(h1);
    hero.appendChild(nameRow);
    if (first) {
      var shot = el("figure", { class: "hero-shot" }, [el("img", { src: "assets/img/real/home.jpg", alt: t({ ko: "Fit Log 홈 화면", en: "Fit Log home screen" }) })]);
      hero.appendChild(shot);
    }
    var bottom = el("div", { class: "hero-bottom" });
    var bnav = el("nav", { "aria-label": "Sections" }, [
      linkEl(t(UI.work), "#work"), linkEl(t(UI.how), "#how"), linkEl(t(UI.contact), "#contact")
    ]);
    bottom.appendChild(bnav);
    hero.appendChild(bottom);
    main.appendChild(hero);

    // 계단 문장
    var intro = el("section", { class: "intro", "aria-label": "Fit Log" });
    var stairs = el("p", { class: "stairs" });
    UI.intro.forEach(function (line, i) { stairs.appendChild(rise(el("span", { text: t(line) }), i)); });
    intro.appendChild(stairs);
    var pics = el("div", { class: "intro-pics" });
    if (first) {
      pics.appendChild(rise(el("img", { src: first.thumb, alt: t(first.thumbAlt), loading: "lazy" }), 2));
      pics.appendChild(rise(el("img", { src: "assets/img/real/coordi.jpg", alt: t({ ko: "Fit Log 내 옷장 코디 화면", en: "Fit Log outfits from my wardrobe" }), loading: "lazy" }), 3));
    }
    intro.appendChild(pics);
    main.appendChild(intro);

    // 작업
    var work = el("section", { class: "work", id: "work", "aria-label": t(UI.work) });
    projects.forEach(function (p) {
      var block = el("article", { class: "project" });
      var vis = el("a", { class: "project-visual", href: withLang("project.html?id=" + p.id), "aria-label": t(p.title) }, [el("img", { src: p.image, alt: t(p.imageAlt), loading: "lazy" })]);
      block.appendChild(vis);
      var cl = el("div", { class: "project-cluster" });
      if (p.thumb) cl.appendChild(rise(el("img", { class: "thumb", src: p.thumb, alt: t(p.thumbAlt), loading: "lazy" }), 0));
      var tx = el("div", { class: "project-text" });
      tx.appendChild(rise(el("h2", { text: t(p.title) }), 1));
      var desc = el("div");
      desc.appendChild(el("p", { text: t(p.summary) }));
      if (p.role || p.period) desc.appendChild(el("p", { class: "project-role", text: [p.period, p.role && t(p.role)].filter(Boolean).join(" · ") }));
      tx.appendChild(rise(desc, 2));
      cl.appendChild(tx);
      var links = el("p", { class: "project-links" });
      (p.links || []).forEach(function (l) { links.appendChild(linkEl(t(l.label), l.url)); });
      cl.appendChild(rise(links, 3));
      block.appendChild(cl);
      work.appendChild(block);
    });
    main.appendChild(work);

    // 평가판
    var m = evalExplorer("h2"); if (m) main.appendChild(m);

    // 일하는 방식: 영수증
    var how = el("section", { class: "how", id: "how", "aria-labelledby": "how-h" });
    var hh = el("div", { class: "how-head" });
    hh.appendChild(rise(el("h2", { id: "how-h", text: t(UI.howHead) }), 0));
    hh.appendChild(rise(el("p", { text: t(UI.howBody) }), 1));
    how.appendChild(hh);
    var slip = rise(el("div", { class: "slip" }), 2);
    UI.slip.forEach(function (g) {
      slip.appendChild(el("h3", { text: t(g.h) }));
      g.rows.forEach(function (r) {
        slip.appendChild(el("p", { class: "slip-row" }, [el("span", { class: "what", text: t(r[0]) }), el("span", { class: "dots", "aria-hidden": "true" }), el("span", { class: "val", text: t(r[1]) })]));
      });
    });
    slip.appendChild(el("p", { class: "slip-total" }, [el("span", { text: t(UI.slipTotal[0]) }), el("span", { text: t(UI.slipTotal[1]) })]));
    how.appendChild(slip);
    main.appendChild(how);

    // 도구 문장
    var stack = el("section", { class: "stack", "aria-labelledby": "stack-h" });
    var sp = el("p");
    stack.appendChild(el("h2", { id: "stack-h", class: "sr-only", text: t(UI.stackHead) }));
    sp.appendChild(el("strong", { class: "stack-lead", text: t(UI.stackHead) }));
    sp.appendChild(document.createTextNode(" "));
    (me.stack || []).forEach(function (s, i, arr) {
      sp.appendChild(el("span", { class: "name", text: s }));
      sp.appendChild(document.createTextNode(i < arr.length - 1 ? ", " : "."));
    });
    stack.appendChild(rise(sp, 0));
    main.appendChild(stack);

    // 소개 + 교육·자격증·경력
    var about = el("section", { class: "about", id: "about", "aria-labelledby": "about-h" });
    var row1 = el("div", { class: "about-row" });
    var dl = el("dl", { class: "facts" });
    (me.facts || []).forEach(function (f) { dl.appendChild(el("div", {}, [el("dt", { text: t(f.label) }), el("dd", { text: t(f.value) })])); });
    row1.appendChild(rise(dl, 1));
    var at = el("div", { class: "about-text" });
    at.appendChild(el("h2", { id: "about-h", text: t(UI.aboutHead) }));
    at.appendChild(el("p", { text: t(me.about) }));
    row1.appendChild(rise(at, 0));
    about.appendChild(row1);
    var lists = ["experience", "education", "certifications"].filter(function (k) { return (me[k] || []).length; });
    if (lists.length) {
      var row2 = el("div", { class: "about-row" });
      row2.appendChild(el("p", { class: "facts", text: t(UI.records) }));
      var rec = el("div", { class: "records" });
      lists.forEach(function (k, i) {
        var box = el("div");
        box.appendChild(el("h3", { text: t(UI[k]) }));
        var ul = el("ul");
        me[k].forEach(function (it) {
          ul.appendChild(el("li", {}, [el("span", {}, [t(it.title), it.org ? el("span", { class: "org", text: t(it.org) }) : null]), el("span", { class: "year", text: it.year || "" })]));
        });
        box.appendChild(ul);
        rec.appendChild(rise(box, i));
      });
      row2.appendChild(rec);
      about.appendChild(row2);
    }
    main.appendChild(about);

    // 연락
    var contact = el("section", { class: "contact", id: "contact", "aria-labelledby": "contact-h" });
    contact.appendChild(el("h2", { id: "contact-h", class: "sr-only", text: t(UI.contactHead) }));
    var rows = el("div");
    if (me.email) rows.appendChild(el("a", { class: "contact-row", href: "mailto:" + me.email, text: me.email }));
    if (me.github) rows.appendChild(el("a", Object.assign({ class: "contact-row", href: me.github }, external(me.github)), [me.github.replace(/^https?:\/\//, "")]));
    if (first) rows.appendChild(el("a", Object.assign({ class: "contact-row", href: "https://salkka.vercel.app" }, external("https://salkka.vercel.app")), ["salkka.vercel.app"]));
    (me.links || []).forEach(function (l) { rows.appendChild(el("a", Object.assign({ class: "contact-row", href: l.url }, external(l.url)), [t(l.label)])); });
    rows.appendChild(el("p", { class: "contact-row" }, [t(me.location)]));
    var helloUrl = me.email ? "mailto:" + me.email : me.github;
    rows.appendChild(el("a", Object.assign({ class: "contact-row", href: helloUrl }, external(helloUrl)), [t(UI.hello), el("span", { class: "go", "aria-hidden": "true", text: "→" })]));
    contact.appendChild(rows);
    main.appendChild(contact);

    renderFooter();
  }

  /* ---------- 푸터 (두 페이지 공통) ---------- */
  function renderFooter() {
    var me = P.profile; var f = $("#footer"); if (!f || !me) return;
    f.className = "site-footer";
    var top = el("div", { class: "footer-top" });
    var inv = el("div", { class: "footer-invite" });
    var h = el("h2");
    t(UI.footInvite).split("\n").forEach(function (line, i) { if (i) h.appendChild(el("br")); h.appendChild(document.createTextNode(line)); });
    inv.appendChild(rise(h, 0));
    var url = me.email ? "mailto:" + me.email : me.github;
    inv.appendChild(rise(el("a", Object.assign({ class: "btn", href: url }, external(url)), [t(me.email ? UI.footBtnMail : UI.footBtnGit), el("span", { class: "arrow", "aria-hidden": "true", text: "→" })]), 1));
    top.appendChild(inv);
    var links = el("div", { class: "footer-links" });
    if (me.email) links.appendChild(linkEl(me.email, "mailto:" + me.email));
    if (me.github) links.appendChild(linkEl("GitHub", me.github));
    links.appendChild(linkEl("Fit Log", "https://salkka.vercel.app"));
    links.appendChild(langToggle());
    top.appendChild(links);
    f.appendChild(top);
    f.appendChild(el("div"));
    var mark = el("div", { class: "footer-mark", "aria-hidden": "true" });
    mark.appendChild(wordmark(me.wordmark));
    f.appendChild(mark);
  }

  /* ---------- 사례 페이지 ---------- */
  function loadCase(id, done) {
    if (!/^[a-z0-9-]+$/.test(id || "")) return done(null);
    if (P.caseStudies && P.caseStudies[id]) return done(P.caseStudies[id]);
    var s = document.createElement("script");
    s.src = "data/projects/" + id + ".js";
    s.onload = function () { P = window.PORTFOLIO; done((P.caseStudies || {})[id] || null); };
    s.onerror = function () { done(null); };
    document.head.appendChild(s);
  }

  function renderCase() {
    var main = $("#main"); if (!main) return;
    var id = new URLSearchParams(location.search).get("id") || "fitlog";
    var me = P.profile;
    var top = el("header", { class: "case-top" }, [
      linkEl(t(UI.backHome), "index.html"),
      el("nav", { "aria-label": "Site" }, [langToggle(), me && me.github ? linkEl("GitHub", me.github) : null])
    ]);
    main.appendChild(top);
    loadCase(id, function (c) {
      if (!c) { main.appendChild(el("p", { class: "cs", text: t(UI.notFound) })); renderFooter(); return; }
      document.title = t(c.title) + " · " + (me ? t(me.name) : "");
      var hero = el("section", { class: "case-hero" });
      var ht = el("div", { class: "case-hero-text" });
      ht.appendChild(rise(el("h1", { text: t(c.title) }), 0));
      ht.appendChild(rise(el("p", { class: "lede", text: t(c.lede) }), 1));
      var hl = el("p", { class: "project-links" });
      (c.links || []).forEach(function (l) { hl.appendChild(linkEl(t(l.label), l.url)); });
      ht.appendChild(rise(hl, 2));
      hero.appendChild(ht);
      if (c.hero) hero.appendChild(el("figure", { class: "case-hero-pic" }, [el("img", { src: c.hero, alt: t(c.heroAlt) })]));
      main.appendChild(hero);
      var facts = el("dl", { class: "case-facts" });
      (c.facts || []).forEach(function (f, i) { facts.appendChild(rise(el("div", {}, [el("dt", { text: t(f.label) }), el("dd", { text: t(f.value) })]), i)); });
      main.appendChild(facts);
      (c.sections || []).forEach(function (s) { main.appendChild(renderSection(s)); });
      var others = (P.projects || []).filter(function (p) { return p.id !== id; });
      var next = el("section", { class: "cs next-case", "aria-labelledby": "next-h" });
      next.appendChild(el("h2", { id: "next-h", text: t(UI.otherWork) }));
      var np = el("p", { class: "project-links" });
      others.forEach(function (p) { np.appendChild(linkEl(t(p.title), "project.html?id=" + p.id)); });
      np.appendChild(linkEl(t(UI.backHome), "index.html#work"));
      next.appendChild(np);
      main.appendChild(next);
      renderFooter();
      startMotion();
    });
  }

  function renderSection(s) {
    var sec = el("section", { class: "cs", id: s.id, "aria-labelledby": s.id + "-h" });
    var h = rise(el("h2", { id: s.id + "-h", text: t(s.heading) }), 0);
    if (s.type === "text") {
      sec.classList.add("cs-text");
      var body = el("div", { class: "body" }, [h]);
      (s.paragraphs || []).forEach(function (p, i) { body.appendChild(rise(el("p", { text: t(p) }), i + 1)); });
      sec.appendChild(body);
      if (s.aside) sec.appendChild(rise(el("figure", { class: "aside" }, [el("img", { src: s.aside, alt: t(s.asideAlt), loading: "lazy" })]), 2));
      return sec;
    }
    sec.appendChild(h);
    if (s.intro) sec.appendChild(rise(el("p", { class: "intro-p", text: t(s.intro) }), 1));
    if (s.type === "timeline") {
      var ol = el("ol", { class: "timeline" });
      s.steps.forEach(function (st, i) {
        ol.appendChild(rise(el("li", {}, [el("p", { class: "when", text: t(st.date) }), el("p", { class: "what", text: t(st.title) }), el("p", { class: "detail", text: t(st.body) })]), i));
      });
      sec.appendChild(el("div", { class: "timeline-bar", "aria-hidden": "true" }));
      sec.appendChild(ol);
    } else if (s.type === "flow") {
      var fl = el("div", { class: "flow" });
      s.lanes.forEach(function (ln, i) {
        var lane = el("div", { class: "lane" }, [el("h3", { text: t(ln.name) })]);
        var ul = el("ul");
        ln.boxes.forEach(function (b) { ul.appendChild(el("li", { text: t(b) })); });
        lane.appendChild(ul);
        fl.appendChild(rise(lane, i));
      });
      sec.appendChild(fl);
    } else if (s.type === "eval") {
      var ev = el("ol", { class: "evalsteps" });
      s.steps.forEach(function (st, i, arr) {
        var cls = i === arr.length - 1 ? "final" : (st.label && /기준선|Baseline/.test(st.label.ko + st.label.en) ? "baseline" : "");
        var bar = el("div", { class: "bar", "aria-hidden": "true" }, [el("span", { style: "width:" + Math.round(st.score / 18 * 100) + "%" })]);
        ev.appendChild(rise(el("li", { class: cls }, [
          el("p", { class: "big num" }, [String(st.score), el("small", { text: "/18" })]),
          bar,
          el("p", { class: "label", text: t(st.label) }),
          el("p", { class: "detail", text: t(st.body) })
        ]), i));
      });
      sec.appendChild(ev);
      var m = evalExplorer("h3"); if (m) sec.appendChild(m);
      if (s.agentNote) sec.appendChild(rise(el("p", { class: "agent-note", text: t(s.agentNote) }), 0));
    } else if (s.type === "points") {
      var pts = el("div", { class: "points" });
      s.items.forEach(function (it, i) { pts.appendChild(rise(el("div", {}, [el("h3", { text: t(it.title) }), el("p", { text: t(it.body) })]), i)); });
      sec.appendChild(pts);
    } else if (s.type === "gallery") {
      var g = el("div", { class: "gallery" });
      s.images.forEach(function (im, i) { g.appendChild(rise(el("figure", {}, [el("img", { src: im.src, alt: t(im.alt), loading: "lazy" }), el("figcaption", { text: t(im.alt) })]), i)); });
      sec.appendChild(g);
      if (s.note) sec.appendChild(el("p", { class: "gallery-note", text: t(s.note) }));
    }
    return sec;
  }

  /* ---------- 움직임 ---------- */
  function startMotion() {
    var items = document.querySelectorAll(".rise:not(.in)");
    if (!("IntersectionObserver" in window)) { items.forEach(function (n) { n.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (n) { io.observe(n); });

    // 도구 이름을 하나씩 밝히기
    var names = document.querySelectorAll(".stack .name");
    if (names.length && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var k = 0;
      setInterval(function () { names.forEach(function (n, i) { n.classList.toggle("lit", i === k); }); k = (k + 1) % names.length; }, 2000);
    }
  }

  /* ---------- 시작 ---------- */
  var page = document.body.getAttribute("data-page");
  if (page === "case") renderCase(); else { renderHome(); startMotion(); }
})();
