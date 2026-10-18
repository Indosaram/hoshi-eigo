import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { BookMarked, ClipboardList, FlaskConical, Home as HomeIcon, Library, Map, Menu, Search, Target, X } from "lucide-react";
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
  { to: "/", label: "홈", end: true, icon: HomeIcon },
  { to: "/guide", label: "시험 분석", icon: Target },
  { to: "/plan", label: "학습 로드맵", icon: Map },
  { to: "/grammar", label: "왕기초 문법", icon: BookMarked },
  { to: "/papers", label: "기출문제", icon: ClipboardList },
  { to: "/vocab", label: "어휘·숙어", icon: Library },
  { to: "/reading", label: "의약 장문", icon: FlaskConical },
  { to: "/resources", label: "자료 모음", icon: Search },
];

export function Logo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-8 shrink-0">
      <rect width="32" height="32" rx="9" className="fill-slate-900" />
      <path d="M16 6.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" className="fill-amber-300" />
    </svg>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return (
    <div className="min-h-dvh flex flex-col">
      <a href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main")?.focus(); }} className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:shadow">
        본문으로 건너뛰기
      </a>
      <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
            <Logo />
            <span className="leading-tight">
              <span className="block font-bold text-slate-900 tracking-tight">호시약대 영어 독학</span>
              <span className="block text-xs text-slate-500" lang="ja">星薬科大学 一般選抜B方式</span>
            </span>
          </NavLink>
          <nav aria-label="주 메뉴" className="hidden lg:flex gap-0.5 ml-auto">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  "px-3 py-2 rounded-lg text-sm transition " + (isActive ? "bg-indigo-50 text-indigo-800 font-semibold" : "text-slate-600 hover:bg-stone-100 hover:text-slate-900")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <button
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            className="lg:hidden ml-auto inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-stone-100"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
        {open && (
          <nav aria-label="주 메뉴" className="reveal lg:hidden border-t border-slate-200 bg-white px-4 py-3 grid grid-cols-2 gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  "flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition " + (isActive ? "bg-indigo-50 text-indigo-800 font-semibold" : "text-slate-700 hover:bg-stone-100")
                }
              >
                <n.icon aria-hidden className="size-4 opacity-70" />
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      <main id="main" tabIndex={-1} className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:py-10 outline-none">
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
          <Route
            path="*"
            element={
              <div className="py-20 text-center">
                <p className="text-5xl font-bold text-slate-200 tnum">404</p>
                <p className="mt-3 text-slate-700">페이지를 찾을 수 없어요. 주소가 바뀌었거나 삭제된 페이지입니다.</p>
                <Link to="/" className="mt-6 inline-flex rounded-xl bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800">홈으로</Link>
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 bg-white text-xs text-slate-500">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row gap-4 sm:items-start">
          <div className="flex items-center gap-2 shrink-0">
            <Logo />
            <span className="font-semibold text-slate-700">호시약대 영어 독학</span>
          </div>
          <div className="space-y-1 leading-relaxed sm:ml-auto sm:max-w-2xl">
            <p>비공식 학습 사이트입니다. 星薬科大学과 무관하며, 기출문제의 저작권은 星薬科大学에 있습니다. 정답·해설은 대학이 공개하지 않아 본 사이트가 자체적으로 작성했습니다.</p>
            <p>입시 요강은 매년 바뀌어요. 최신 정보는 <a className="underline underline-offset-2 hover:text-slate-800" href="https://www.hoshi.ac.jp/admission/nyushi/" target="_blank" rel="noreferrer">대학 공식 입시 페이지</a>에서 확인하세요. 학습 기록은 이 브라우저에만 저장됩니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
