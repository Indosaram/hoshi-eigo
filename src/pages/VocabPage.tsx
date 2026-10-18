import { useMemo, useState } from "react";
import { vocab } from "../data";
import { PageTitle } from "../components/ui";
import { setProgress, useProgress } from "../progress";

export default function VocabPage() {
  const tags = useMemo(() => ["전체", ...Array.from(new Set(vocab.map((v) => v.tag)))], []);
  const [tag, setTag] = useState("전체");
  const [q, setQ] = useState("");
  const [mode, setMode] = useState<"list" | "card">("list");
  const [hideKo, setHideKo] = useState(false);
  const [onlyUnknown, setOnlyUnknown] = useState(false);
  const { get } = useProgress();
  const list = vocab.filter(
    (v) =>
      (tag === "전체" || v.tag === tag) &&
      (!onlyUnknown || get(`vocab:${v.word}`) !== true) &&
      (q === "" || (v.word + v.ko + (v.ja ?? "")).toLowerCase().includes(q.toLowerCase())),
  );
  const known = vocab.filter((v) => get(`vocab:${v.word}`) === true).length;
  const [ci, setCi] = useState(0);
  const [flip, setFlip] = useState(false);
  const card = list[Math.min(ci, Math.max(list.length - 1, 0))];

  return (
    <div>
      <PageTitle kicker="어휘·숙어" title={`星薬 필수 어휘 ${vocab.length}개`}>
        기출에서 실제로 나온 단어·숙어와 의약 장문에 자주 나오는 전문 용어를 모았습니다. 아는 단어는 <b>✓ 외웠어요</b>를 눌러 지워 나가세요. (외운 단어 {known}개)
      </PageTitle>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((t) => (
          <button key={t} onClick={() => { setTag(t); setCi(0); }} className={"rounded-full px-3 py-1 text-sm " + (tag === t ? "bg-indigo-600 text-white" : "bg-white border")}>
            {t}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 items-center mb-4 text-sm">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="검색 (영어/한국어/일본어)" className="rounded-lg border px-3 py-1.5 w-56" />
        <button onClick={() => setMode(mode === "list" ? "card" : "list")} className="rounded-lg bg-slate-900 text-white px-3 py-1.5">
          {mode === "list" ? "🃏 플래시카드 모드" : "📋 목록 모드"}
        </button>
        <label className="flex items-center gap-1"><input type="checkbox" checked={hideKo} onChange={(e) => setHideKo(e.target.checked)} /> 뜻 가리기</label>
        <label className="flex items-center gap-1"><input type="checkbox" checked={onlyUnknown} onChange={(e) => { setOnlyUnknown(e.target.checked); setCi(0); }} /> 못 외운 것만</label>
        <span className="text-slate-500">{list.length}개</span>
      </div>
      {mode === "card" ? (
        card ? (
          <div className="mx-auto max-w-lg">
            <button onClick={() => setFlip((f) => !f)} className="w-full min-h-64 rounded-3xl bg-white border-2 border-indigo-200 shadow p-6 text-center">
              <p className="text-xs text-slate-400">{card.tag} · {ci + 1}/{list.length}</p>
              <p className="en text-3xl font-bold mt-4">{card.word}</p>
              <p className="text-sm text-slate-500 mt-1">{card.pos}</p>
              {flip ? (
                <div className="mt-4 space-y-1">
                  <p className="text-xl font-bold text-indigo-800">{card.ko}</p>
                  {card.ja && <p className="text-slate-600" lang="ja">{card.ja}</p>}
                  <p className="en mt-3">{card.example}</p>
                  <p className="text-sm text-slate-500">{card.exampleKo}</p>
                </div>
              ) : (
                <p className="mt-8 text-sm text-slate-400">탭해서 뜻 보기</p>
              )}
            </button>
            <div className="mt-4 flex justify-between gap-2">
              <button className="rounded-xl border bg-white px-4 py-2" onClick={() => { setCi((i) => Math.max(0, i - 1)); setFlip(false); }}>← 이전</button>
              <button className="rounded-xl bg-emerald-600 text-white px-4 py-2" onClick={() => { setProgress(`vocab:${card.word}`, true); setFlip(false); if (!onlyUnknown) setCi((i) => Math.min(list.length - 1, i + 1)); }}>✓ 외웠어요</button>
              <button className="rounded-xl border bg-white px-4 py-2" onClick={() => { setCi((i) => Math.min(list.length - 1, i + 1)); setFlip(false); }}>다음 →</button>
            </div>
          </div>
        ) : (
          <p>남은 단어가 없어요 🎉</p>
        )
      ) : (
        <div className="grid gap-2 sm:grid-cols-2">
          {list.map((v) => {
            const k = get(`vocab:${v.word}`) === true;
            return (
              <div key={v.word + v.tag} className={"rounded-xl border bg-white p-3 " + (k ? "opacity-50" : "")}>
                <div className="flex items-baseline gap-2">
                  <span className="en text-lg font-bold">{v.word}</span>
                  <span className="text-xs text-slate-500">{v.pos}</span>
                  <button onClick={() => setProgress(`vocab:${v.word}`, !k)} className={"ml-auto text-xs rounded-full px-2 py-0.5 " + (k ? "bg-emerald-100 text-emerald-700" : "bg-slate-100")}>
                    {k ? "✓ 외움" : "외웠어요"}
                  </button>
                </div>
                <p className={"font-semibold text-indigo-800 " + (hideKo ? "blur-sm hover:blur-none" : "")}>
                  {v.ko} {v.ja && <span className="font-normal text-slate-500 text-sm" lang="ja">／{v.ja}</span>}
                </p>
                <p className="en text-sm mt-1">{v.example}</p>
                <p className={"text-xs text-slate-500 " + (hideKo ? "blur-sm hover:blur-none" : "")}>{v.exampleKo}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
