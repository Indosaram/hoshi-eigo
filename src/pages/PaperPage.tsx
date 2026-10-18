import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { papers } from "../data";
import { Md } from "../components/Md";
import { QuizCard } from "../components/Quiz";
import { Bar } from "../components/ui";
import { setProgress, useProgress } from "../progress";
import type { Section } from "../data/types";

const KIND: Record<Section["kind"], string> = {
  grammar: "빈칸 문법·어휘",
  paraphrase: "의미가 가까운 표현",
  error: "틀린 곳 찾기",
  relation: "단어 관계",
  ordering: "정렬(並べ替え)",
  dialogue: "회화문",
  reading: "장문독해",
};

function Timer() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    if (left === null || left <= 0) return;
    const t = setTimeout(() => setLeft((l) => (l ?? 1) - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);
  if (left === null)
    return (
      <button onClick={() => setLeft(70 * 60)} className="rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm">
        ⏱ 70분 타이머 시작
      </button>
    );
  const m = Math.floor(left / 60);
  const s = left % 60;
  return (
    <span className={"rounded-lg px-3 py-1.5 text-sm font-mono font-bold " + (left < 600 ? "bg-rose-100 text-rose-700" : "bg-slate-100")}>
      {left > 0 ? `남은 시간 ${m}:${String(s).padStart(2, "0")}` : "시간 종료!"}
      <button onClick={() => setLeft(null)} className="ml-2 font-sans font-normal underline">끄기</button>
    </span>
  );
}

function SectionView({ year, s }: { year: number; s: Section }) {
  const [ko, setKo] = useState(false);
  return (
    <section id={`sec-${s.roman}`} className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-xl font-bold">{s.roman}.</h2>
        <span className="rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-0.5">{KIND[s.kind]}</span>
        <span className="text-xs text-slate-500">{s.questions.length}문항</span>
      </div>
      <p className="mt-2 text-[15px]" lang="ja">{s.instructionJa}</p>
      <p className="mt-1 text-sm text-slate-500">🇰🇷 {s.instructionKo}</p>
      <details className="mt-3 rounded-xl bg-sky-50 border border-sky-200 p-3">
        <summary className="cursor-pointer font-semibold text-sky-900 text-sm">💡 이 유형 푸는 요령 (초보자용)</summary>
        <Md text={s.strategy} className="mt-2 text-sm" />
      </details>
      {s.passage && (
        <div className="mt-4">
          <div className="flex gap-2 mb-2">
            <button onClick={() => setKo(false)} className={"text-sm px-3 py-1 rounded-lg " + (!ko ? "bg-slate-900 text-white" : "bg-slate-100")}>영어 원문</button>
            {s.passageKo && (
              <button onClick={() => setKo(true)} className={"text-sm px-3 py-1 rounded-lg " + (ko ? "bg-slate-900 text-white" : "bg-slate-100")}>한국어 번역</button>
            )}
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 max-h-[70vh] overflow-y-auto">
            {ko && s.passageKo ? <Md text={s.passageKo} /> : <Md text={s.passage} className="en text-[16.5px]" />}
            {!ko && s.notes && <Md text={s.notes} className="mt-3 text-sm text-slate-600 border-t pt-2" />}
          </div>
        </div>
      )}
      <div className="mt-4 space-y-4">
        {s.questions.map((q, i) => (
          <QuizCard key={i} q={{ ...q, label: String(q.number) }} storeKey={`paper:${year}:${s.roman}:${i}`} />
        ))}
      </div>
    </section>
  );
}

export default function PaperPage() {
  const { year } = useParams();
  const p = papers.find((x) => String(x.year) === year);
  const { get } = useProgress();
  if (!p) return <p>해당 연도를 찾을 수 없어요.</p>;
  let answered = 0;
  let correct = 0;
  let total = 0;
  p.sections.forEach((s) =>
    s.questions.forEach((q, i) => {
      total++;
      const v = get(`paper:${p.year}:${s.roman}:${i}`);
      if (typeof v === "number") {
        answered++;
        if (v === q.answer) correct++;
      }
    }),
  );
  function resetPaper() {
    if (!p) return;
    p.sections.forEach((s) => s.questions.forEach((_, i) => setProgress(`paper:${p.year}:${s.roman}:${i}`, false)));
  }
  return (
    <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-6">
      <aside className="hidden lg:block">
        <div className="sticky top-20 space-y-1 text-sm">
          <Link to="/papers" className="text-indigo-700">← 기출 목록</Link>
          {p.sections.map((s) => (
            <a key={s.roman} href={`#sec-${s.roman}`} onClick={(e) => { e.preventDefault(); document.getElementById(`sec-${s.roman}`)?.scrollIntoView(); }} className="block rounded-lg px-3 py-1.5 hover:bg-white">
              {s.roman}. {KIND[s.kind]}
            </a>
          ))}
        </div>
      </aside>
      <div>
        <Link to="/papers" className="lg:hidden text-sm text-indigo-700">← 기출 목록</Link>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2">{p.year}年度 一般選抜（B方式）英語</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Timer />
          <a href={p.pdfUrl} target="_blank" rel="noreferrer" className="rounded-lg border px-3 py-1.5 text-sm bg-white">📄 원본 PDF</a>
          <button onClick={resetPaper} className="text-sm text-slate-500 underline">이 연도 기록 초기화</button>
        </div>
        <div className="mt-3 max-w-md">
          <p className="text-sm">현재 점수: <b>{correct}</b> / 푼 문제 {answered} / 전체 {total} {answered > 0 && <span className="text-slate-500">(정답률 {Math.round((correct / answered) * 100)}%, 합격선 약 65%)</span>}</p>
          <Bar value={answered} total={total} />
        </div>
        <details className="mt-5 rounded-2xl bg-white border border-slate-200 p-5" open>
          <summary className="cursor-pointer font-bold">📊 {p.year}년도 총평</summary>
          <Md text={p.overview} className="mt-2" />
        </details>
        <div className="mt-6 space-y-6">
          {p.sections.map((s) => (
            <SectionView key={s.roman} year={p.year} s={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
