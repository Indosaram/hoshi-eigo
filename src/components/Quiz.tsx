import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Check, Lightbulb, RotateCcw, X } from "lucide-react";
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
    <div data-testid="quiz-card" className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="shrink-0 mt-0.5 inline-flex h-7 min-w-7 px-2 items-center justify-center rounded-lg bg-slate-900 text-white text-sm font-bold tnum">
          {q.label ?? (index !== undefined ? index + 1 : "Q")}
        </span>
        <Md text={q.prompt} className="en flex-1 text-[16.5px]" />
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {q.choices.map((c, i) => {
          const n = i + 1;
          const isAnswer = done && n === q.answer;
          const isWrongPick = done && n === picked && !correct;
          let cls = "bg-white hover:bg-stone-50 active:translate-y-px";
          if (isAnswer) cls = "bg-emerald-50 text-emerald-900";
          else if (isWrongPick) cls = "bg-rose-50 text-rose-900";
          else if (done) cls = "bg-white opacity-55";
          return (
            <button
              key={i}
              data-testid="choice"
              onClick={() => choose(n)}
              disabled={done}
              aria-label={isAnswer ? `${n}번 정답` : isWrongPick ? `${n}번 내가 고른 오답` : undefined}
              className={"en flex items-start gap-2.5 text-left rounded-xl border border-slate-200 px-3.5 py-3 min-h-11 transition " + cls}
            >
              <span className={"font-sans text-sm font-bold mt-0.5 tnum " + (isAnswer ? "text-emerald-700" : isWrongPick ? "text-rose-700" : "text-slate-400")}>{n}</span>
              <span className="flex-1">{c}</span>
              {isAnswer && <Check aria-hidden className="size-5 shrink-0 text-emerald-700" />}
              {isWrongPick && <X aria-hidden className="size-5 shrink-0 text-rose-700" />}
            </button>
          );
        })}
      </div>
      <div aria-live="polite">
        {done && (
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              data-testid="verdict"
              className={"inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-bold " + (correct ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700")}
            >
              {correct ? <Check aria-hidden className="size-4" /> : <X aria-hidden className="size-4" />}
              {correct ? "정답입니다" : `오답입니다. 정답은 ${q.answer}번`}
            </span>
            <button onClick={() => setShowExp((s) => !s)} aria-expanded={showExp} className="inline-flex items-center gap-1 text-sm text-indigo-700 underline-offset-4 hover:underline">
              <BookOpen aria-hidden className="size-4" />
              {showExp ? "해설 접기" : "해설 보기"}
            </button>
            <button onClick={retry} className="inline-flex items-center gap-1 text-sm text-slate-500 underline-offset-4 hover:underline hover:text-slate-800">
              <RotateCcw aria-hidden className="size-3.5" />
              다시 풀기
            </button>
          </div>
        )}
      </div>
      {!done && (
        <button onClick={() => setShowExp((s) => !s)} aria-expanded={showExp} className="mt-4 inline-flex items-center gap-1 text-sm text-slate-500 underline-offset-4 hover:underline hover:text-slate-800">
          <Lightbulb aria-hidden className="size-4" />
          {showExp ? "해설 숨기기" : "모르겠어요, 해설 먼저 보기"}
        </button>
      )}
      {showExp && (
        <div data-testid="explanation" className="reveal mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4 sm:p-5">
          <p className="mb-2 flex items-center gap-1.5 text-sm font-bold text-amber-900">
            <Lightbulb aria-hidden className="size-4" />
            해설{!done && <span className="ml-1 rounded-md bg-amber-100 px-2 py-0.5">정답 {q.answer}번</span>}
          </p>
          <Md text={q.explanation} />
          {q.lessonIds && q.lessonIds.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-amber-200 pt-3 text-sm">
              <span className="text-amber-900">관련 문법 강의</span>
              {q.lessonIds.map((id) => {
                const l = lessonById(id);
                return l ? (
                  <Link key={id} to={`/grammar/${id}`} className="rounded-full bg-white px-3 py-1 text-indigo-800 shadow-sm transition hover:bg-indigo-50">
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
