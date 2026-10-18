import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function PageTitle({ kicker, title, children }: { kicker?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-6">
      {kicker && <p className="text-sm font-semibold text-indigo-600">{kicker}</p>}
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">{title}</h1>
      {children && <div className="mt-2 text-slate-600 leading-relaxed">{children}</div>}
    </div>
  );
}

export function Card({ to, title, desc, badge, extra }: { to: string; title: string; desc?: string; badge?: string; extra?: ReactNode }) {
  return (
    <Link to={to} className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-indigo-400 hover:shadow-md transition">
      {badge && <span className="inline-block rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 mb-2">{badge}</span>}
      <h3 className="font-bold text-slate-900">{title}</h3>
      {desc && <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>}
      {extra}
    </Link>
  );
}

export function Bar({ value, total }: { value: number; total: number }) {
  const pct = total ? Math.round((value / total) * 100) : 0;
  return (
    <div className="mt-3">
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <div className="h-full bg-emerald-500" style={{ width: pct + "%" }} />
      </div>
      <p className="mt-1 text-xs text-slate-500">{value} / {total} ({pct}%)</p>
    </div>
  );
}
