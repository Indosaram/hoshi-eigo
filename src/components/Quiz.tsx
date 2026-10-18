import { useState } from "react";
import { Link } from "react-router-dom";
import { Md } from "./Md";
import { lessonById } from "../data";
import { setProgress, useProgress } from "../progress";

export interface QuizQ {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
  lessonIds?: string[];
  label?: string;
}

/** 한 문제: 선택 → 즉시 정오 표시 + 해설 */
export function QuizCard({ q, storeKey, index }: { q: QuizQ; storeKey: string; index?: number }) {
  const { get } = useProgress();
  const saved = get(storeKey);
  const [picked, setPicked] = useState<number | null>(typeof saved === "number" ? saved : null);
  const [showExp, setShowExp] = useState(typeof saved === "number");
  const done = picked !== null;
  const correct = picked === q.answer;

  function choose(i: number) {
    if (done) return;
    setPicked(i);
    setShowExp(true);
    setProgress(storeKey, i);
  }
  function retry() {
    setPicked(null);
    setShowExp(false);
    setProgress(storeKey, false);
  }

  return (
    <div data-testid="quiz-card" className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="shrink-0 mt-0.5 inline-flex h-7 min-w-7 px-2 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold">
          {q.label ?? (index !== undefined ? index + 1 : "Q")}
        </span>
        <Md text={q.prompt} className="en flex-1 text-[16.5px]" />
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {q.choices.map((c, i) => {
          const n = i + 1;
          let cls = "border-slate-200 hover:border-indigo-400 hover:bg-indigo-50";
          if (done) {
            if (n === q.answer) cls = "border-emerald-500 bg-emerald-50 text-emerald-900";
            else if (n === picked) cls = "border-rose-500 bg-rose-50 text-rose-900";
            else cls = "border-slate-200 opacity-60";
          }
          return (
            <button
              key={i}
              data-testid="choice"
              onClick={() => choose(n)}
              disabled={done}
              className={"en text-left rounded-xl border-2 px-3 py-2.5 transition " + cls}
            >
              <span className="font-sans font-bold mr-2 text-slate-500">{n}.</span>
              {c}
            </button>
          );
        })}
      </div>
      {done && (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span data-testid="verdict" className={"font-bold " + (correct ? "text-emerald-600" : "text-rose-600")}>
            {correct ? "⭕ 정답입니다!" : `❌ 오답입니다. 정답은 ${q.answer}번`}
          </span>
          <button onClick={() => setShowExp((s) => !s)} className="text-sm text-indigo-700 underline">
            {showExp ? "해설 접기" : "해설 보기"}
          </button>
          <button onClick={retry} className="text-sm text-slate-500 underline">다시 풀기</button>
        </div>
      )}
      {!done && (
        <button onClick={() => setShowExp((s) => !s)} className="mt-3 text-sm text-slate-500 underline">
          {showExp ? "해설 숨기기" : "모르겠어요 → 해설 먼저 보기"}
        </button>
      )}
      {showExp && (
        <div data-testid="explanation" className="mt-3 rounded-xl bg-amber-50 border border-amber-200 p-4">
          {!done && <p className="font-bold text-amber-800 mb-1">정답: {q.answer}번</p>}
          <Md text={q.explanation} />
          {q.lessonIds && q.lessonIds.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="text-slate-500">관련 문법 강의:</span>
              {q.lessonIds.map((id) => {
                const l = lessonById(id);
                return l ? (
                  <Link key={id} to={`/grammar/${id}`} className="rounded-full bg-indigo-100 px-3 py-0.5 text-indigo-800 hover:bg-indigo-200">
                    {l.title}
                  </Link>
                ) : null;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** 점수 요약: storeKey 접두사로 정답 수를 센다 */
export function useScore(prefix: string, qs: { answer: number }[]) {
  const { get } = useProgress();
  let answered = 0;
  let correct = 0;
  qs.forEach((q, i) => {
    const v = get(`${prefix}${i}`);
    if (typeof v === "number") {
      answered++;
      if (v === q.answer) correct++;
    }
  });
  return { answered, correct, total: qs.length };
}
