import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readings } from "../data";
import { Md } from "../components/Md";
import { QuizCard } from "../components/Quiz";

export default function ReadingPage() {
  const { id } = useParams();
  const r = readings.find((x) => x.id === id);
  const [tab, setTab] = useState<"read" | "break">("read");
  const [openAll, setOpenAll] = useState(false);
  if (!r) return <p>지문을 찾을 수 없어요.</p>;
  return (
    <article className="mx-auto max-w-3xl">
      <Link to="/reading" className="text-sm text-indigo-700">← 장문 목록</Link>
      <h1 className="text-2xl sm:text-3xl font-bold mt-2 en">{r.title}</h1>
      <p className="text-slate-600 mt-1">{r.topic}</p>
      <div className="mt-4 rounded-xl bg-sky-50 border border-sky-200 p-4 text-sm leading-relaxed">
        <b>추천 순서</b> ① 사전 없이 원문을 한 번 읽고 퀴즈를 푼다 → ② "문장별 해부"에서 모르는 문장을 확인한다 → ③ 원문을 소리 내어 3번 다시 읽는다.
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => setTab("read")} className={"px-4 py-2 rounded-lg text-sm " + (tab === "read" ? "bg-slate-900 text-white" : "bg-white border")}>📖 원문 읽기</button>
        <button onClick={() => setTab("break")} className={"px-4 py-2 rounded-lg text-sm " + (tab === "break" ? "bg-slate-900 text-white" : "bg-white border")}>🔬 문장별 해부 ({r.breakdown.length})</button>
      </div>
      {tab === "read" ? (
        <div className="mt-3 rounded-2xl bg-white border p-5 sm:p-7">
          <Md text={r.text} className="en text-[17px]" />
          {r.notes && <Md text={r.notes} className="mt-4 border-t pt-3 text-sm text-slate-600" />}
        </div>
      ) : (
        <div className="mt-3 space-y-3">
          <button onClick={() => setOpenAll((o) => !o)} className="text-sm underline text-indigo-700">{openAll ? "해설 모두 접기" : "해설 모두 펼치기"}</button>
          {r.breakdown.map((b, i) => (
            <details key={i + String(openAll)} open={openAll} className="rounded-xl bg-white border p-4">
              <summary className="cursor-pointer en text-[16px]"><span className="font-sans text-xs text-slate-400 mr-2">{i + 1}</span>{b.en}</summary>
              <div className="mt-3 space-y-2 text-sm">
                <p><span className="font-semibold text-indigo-700">끊어 읽기</span><br /><span className="en">{b.slash}</span></p>
                <p><span className="font-semibold text-indigo-700">해석</span><br />{b.ko}</p>
                <div><span className="font-semibold text-indigo-700">문법 구조</span><Md text={b.grammar} /></div>
              </div>
            </details>
          ))}
        </div>
      )}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-3">✍️ 확인 문제</h2>
        <div className="space-y-4">
          {r.quiz.map((q, i) => (
            <QuizCard key={i} q={q} index={i} storeKey={`reading:${r.id}:${i}`} />
          ))}
        </div>
      </section>
    </article>
  );
}
