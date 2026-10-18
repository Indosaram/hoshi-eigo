import { Link, useParams } from "react-router-dom";
import { lessons, levelNames } from "../data";
import { Md } from "../components/Md";
import { QuizCard, useScore } from "../components/Quiz";
import { Bar } from "../components/ui";

export default function LessonPage() {
  const { id } = useParams();
  const idx = lessons.findIndex((l) => l.id === id);
  const l = lessons[idx];
  const score = useScore(`lesson:${id}:`, l?.quiz ?? []);
  if (!l) return <p>강의를 찾을 수 없어요.</p>;
  const prev = lessons[idx - 1];
  const next = lessons[idx + 1];
  return (
    <article className="mx-auto max-w-3xl">
      <Link to="/grammar" className="text-sm text-indigo-700">← 문법 목록</Link>
      <p className="mt-3 text-sm font-semibold text-indigo-600">{levelNames[l.level]} · 제{idx + 1}강</p>
      <h1 className="text-2xl sm:text-3xl font-bold mt-1">{l.title}</h1>
      <p className="mt-2 text-slate-600">{l.summary}</p>
      <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-sm">
        <Md text={l.body} />
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-1">✍️ 확인 퀴즈</h2>
        <p className="text-sm text-slate-500 mb-3">먼저 스스로 풀고, 선택하면 바로 정답과 해설이 나옵니다.</p>
        <Bar value={score.correct} total={score.total} />
        <div className="mt-4 space-y-4">
          {l.quiz.map((q, i) => (
            <QuizCard key={i} q={q} index={i} storeKey={`lesson:${l.id}:${i}`} />
          ))}
        </div>
      </section>
      <nav className="mt-10 flex justify-between gap-3 text-sm">
        {prev ? <Link className="rounded-xl border bg-white px-4 py-3 hover:border-indigo-400" to={`/grammar/${prev.id}`}>← {prev.title}</Link> : <span />}
        {next ? <Link className="rounded-xl border bg-white px-4 py-3 hover:border-indigo-400 text-right" to={`/grammar/${next.id}`}>{next.title} →</Link> : <span />}
      </nav>
    </article>
  );
}
