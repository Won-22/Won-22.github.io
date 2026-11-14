// 데이터 파일 검사: node tools/check.mjs
// 프로젝트마다 상세 파일이 있는지, 사진 파일이 있는지, 한국어 문구가 비어 있지 않은지 확인해요.
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const ctx = { window: {} };
vm.createContext(ctx);
const load = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });

const errors = [];
const need = (cond, msg) => { if (!cond) errors.push(msg); };
const text = (v, where) => need(v && (typeof v === "string" ? v : v.ko), `${where}: 한국어 문구가 비어 있어요`);
const file = (p, where) => need(p && fs.existsSync(path.join(root, p)), `${where}: 파일이 없어요 (${p})`);

load("data/profile.js");
load("data/projects.js");
const P = ctx.window.PORTFOLIO;
need(P.profile, "data/profile.js: profile이 없어요");
text(P.profile.name, "profile.name");
text(P.profile.pitch, "profile.pitch");
for (const k of ["education", "certifications", "experience"]) {
  need(Array.isArray(P.profile[k]), `profile.${k}: 목록([])이어야 해요`);
  (P.profile[k] || []).forEach((it, i) => text(it.title, `profile.${k}[${i}].title`));
}

const ids = new Set();
for (const [i, p] of (P.projects || []).entries()) {
  const where = `projects[${i}] (${p.id})`;
  need(/^[a-z0-9-]+$/.test(p.id || ""), `${where}: id는 영문 소문자·숫자·-만`);
  need(!ids.has(p.id), `${where}: id가 겹쳐요`); ids.add(p.id);
  text(p.title, `${where}.title`); text(p.summary, `${where}.summary`);
  file(p.image, `${where}.image`); if (p.thumb) file(p.thumb, `${where}.thumb`);
  const cs = `data/projects/${p.id}.js`;
  file(cs, `${where} 상세 파일`);
  if (fs.existsSync(path.join(root, cs))) {
    load(cs);
    const c = (P.caseStudies || {})[p.id];
    need(c, `${cs}: caseStudies.${p.id}가 없어요`);
    (c?.sections || []).forEach((s, j) => {
      text(s.heading, `${cs} sections[${j}].heading`);
      if (s.aside) file(s.aside, `${cs} sections[${j}].aside`);
      (s.images || []).forEach((im, k) => file(im.src, `${cs} sections[${j}].images[${k}]`));
    });
  }
}
if (P.evalExplorer) {
  const n = (f) => P.evalExplorer.cases.filter(f).length;
  need(n((c) => c.rule) === 8 && n((c) => c.usual) === 13 && n((c) => (c.near ? c.rule : c.usual)) === 14,
    "evalExplorer: 공개한 숫자(8 · 13 · 14)와 칸이 안 맞아요");
}

if (errors.length) { console.error("검사 실패\n- " + errors.join("\n- ")); process.exit(1); }
console.log(`검사 통과: 프로젝트 ${ids.size}개`);
