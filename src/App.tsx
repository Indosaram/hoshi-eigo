import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import GrammarList from "./pages/GrammarList";
import LessonPage from "./pages/LessonPage";
import PaperList from "./pages/PaperList";
import PaperPage from "./pages/PaperPage";
import VocabPage from "./pages/VocabPage";
import ReadingList from "./pages/ReadingList";
import ReadingPage from "./pages/ReadingPage";
import Resources from "./pages/Resources";
import Plan from "./pages/Plan";

const NAV = [
  { to: "/", label: "홈", end: true },
  { to: "/guide", label: "시험 분석" },
  { to: "/plan", label: "학습 로드맵" },
  { to: "/grammar", label: "왕기초 문법" },
  { to: "/papers", label: "기출문제" },
  { to: "/vocab", label: "어휘·숙어" },
  { to: "/reading", label: "의약 장문" },
  { to: "/resources", label: "자료 모음" },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-indigo-900 shrink-0">
            <span className="text-xl">⭐</span>
            <span className="leading-tight">
              호시약대 영어 독학
              <span className="block text-[11px] font-normal text-slate-500">星薬科大学 一般選抜B方式</span>
            </span>
          </NavLink>
          <nav className="hidden lg:flex gap-1 ml-auto">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  "px-3 py-1.5 rounded-lg text-sm " + (isActive ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <button aria-label="메뉴" className="lg:hidden ml-auto rounded-lg border border-slate-200 px-3 py-1.5 text-sm" onClick={() => setOpen((o) => !o)}>
            {open ? "닫기 ✕" : "메뉴 ☰"}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-slate-200 bg-white px-4 py-2 grid grid-cols-2 gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) => "px-3 py-2 rounded-lg text-sm " + (isActive ? "bg-indigo-600 text-white" : "text-slate-700 hover:bg-slate-100")}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/grammar" element={<GrammarList />} />
          <Route path="/grammar/:id" element={<LessonPage />} />
          <Route path="/papers" element={<PaperList />} />
          <Route path="/papers/:year" element={<PaperPage />} />
          <Route path="/vocab" element={<VocabPage />} />
          <Route path="/reading" element={<ReadingList />} />
          <Route path="/reading/:id" element={<ReadingPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<p className="text-center py-20">페이지를 찾을 수 없어요. <NavLink to="/" className="text-indigo-700 underline">홈으로</NavLink></p>} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 bg-white text-xs text-slate-500">
        <div className="mx-auto max-w-6xl px-4 py-5 space-y-1">
          <p>비공식 학습 사이트입니다. 星薬科大学과 무관하며, 기출문제의 저작권은 星薬科大学에 있습니다. 정답·해설은 대학이 공개하지 않아 본 사이트가 자체적으로 작성했습니다.</p>
          <p>입시 요강은 매년 바뀔 수 있으니 반드시 <a className="underline" href="https://www.hoshi.ac.jp/admission/nyushi/" target="_blank" rel="noreferrer">대학 공식 입시 페이지</a>에서 최신 정보를 확인하세요.</p>
        </div>
      </footer>
    </div>
  );
}
