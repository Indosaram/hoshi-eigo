import { Link } from "react-router-dom";
import { lessons, papers, readings, vocab } from "../data";
import { useProgress } from "../progress";
import { Bar } from "../components/ui";

const STEPS = [
  { to: "/guide", icon: "🎯", t: "1. 시험부터 알자", d: "B방식 영어는 70분·100점·마크시트, 대문 9개. 어떤 문제가 몇 개 나오는지 먼저 파악합니다." },
  { to: "/grammar", icon: "🧱", t: "2. 왕기초 문법 27강", d: "품사·문장 구조부터 관계사·가정법까지. 모든 용어를 쉬운 말로 풀어서 설명합니다." },
  { to: "/vocab", icon: "🗂️", t: "3. 어휘·숙어", d: `기출 단어·숙어·의약 용어 ${vocab.length}개. 플래시카드로 매일 외우기.` },
  { to: "/reading", icon: "🧪", t: "4. 의약 장문 연습", d: "약·의학·생명과학 지문을 문장 하나하나 해부합니다." },
  { to: "/papers", icon: "📝", t: "5. 기출 3개년 실전", d: "2024~2026 공식 기출 전 문항 해설. 70분 타이머로 실전처럼." },
];

export default function Home() {
  const { store } = useProgress();
  const allQs = lessons.reduce((a, l) => a + l.quiz.length, 0) + papers.reduce((a, p) => a + p.sections.reduce((b, s) => b + s.questions.length, 0), 0) + readings.reduce((a, r) => a + r.quiz.length, 0);
  const solved = Object.entries(store).filter(([k, v]) => !k.startsWith("vocab:") && typeof v === "number").length;
  return (
    <div>
      <section className="rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-sky-600 text-white p-6 sm:p-10 shadow-lg">
        <p className="text-sm opacity-80" lang="ja">星薬科大学 薬学部 薬学科（6年制）· 一般選抜 B方式</p>
        <h1 className="text-2xl sm:text-4xl font-bold mt-2 leading-tight">영문법 0에서 시작하는<br />호시약대 B방식 영어 독학</h1>
        <p className="mt-4 max-w-2xl opacity-90 leading-relaxed">
          "주어가 뭐예요?"부터 시작해도 됩니다. 이 사이트 하나로 <b>시험 분석 → 문법 → 어휘 → 장문 → 기출 실전</b>까지 순서대로 따라가면 됩니다. 설명은 모두 한국어, 문제와 지문은 실제 시험처럼 영어·일본어 그대로입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/grammar/g01-parts-of-speech" className="rounded-xl bg-white text-indigo-700 font-bold px-5 py-3">제1강부터 시작하기 →</Link>
          <Link to="/papers" className="rounded-xl bg-white/15 border border-white/40 font-semibold px-5 py-3">기출문제 바로 풀기</Link>
        </div>
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          ["시험 시간", "70분"],
          ["배점", "100점 (영·수·화 각 100)"],
          ["합격 목표", "약 65% 전후"],
        ].map(([a, b]) => (
          <div key={a} className="rounded-2xl bg-white border p-4">
            <p className="text-xs text-slate-500">{a}</p>
            <p className="text-lg font-bold">{b}</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold mb-3">학습 순서</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <Link key={s.to} to={s.to} className="rounded-2xl bg-white border p-4 hover:border-indigo-400 hover:shadow transition">
              <p className="text-2xl">{s.icon}</p>
              <p className="font-bold mt-1">{s.t}</p>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{s.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-white border p-5">
        <h2 className="font-bold">내 학습 현황</h2>
        <p className="text-sm text-slate-500">이 브라우저에만 저장됩니다.</p>
        <Bar value={solved} total={allQs} />
        <p className="text-sm mt-2">문법 {lessons.length}강 · 기출 {papers.length}개년 · 의약 장문 {readings.length}편 · 단어 {vocab.length}개 · 전체 문제 {allQs}문항</p>
        <Link to="/plan" className="inline-block mt-3 text-sm text-indigo-700 underline">나에게 맞는 학습 로드맵 보기 →</Link>
      </section>
    </div>
  );
}
