import { Link } from "react-router-dom";
import { papers } from "../data";
import { Md } from "../components/Md";
import { PageTitle } from "../components/ui";

const KIND: Record<string, string> = { grammar: "빈칸 문법·어휘", paraphrase: "의미가 가까운 표현", error: "틀린 곳 찾기", relation: "단어 관계", ordering: "정렬(並べ替え)", dialogue: "회화문", reading: "장문독해" };

const BASICS = `
## 1. B방식은 어떤 시험인가?

| 항목 | 내용 |
|---|---|
| 대상 | 薬学部 **薬学科(6년제)** · 創薬科学科(4년제) — 영어 문제는 두 학과 **공통** |
| 시험 과목 | 영어 100점 · 수학 100점 · 화학 100점 (3과목 동일 배점) |
| 영어 시험 시간 | **70분** (2026년도: 14:40~15:50) |
| 답안 방식 | 전부 **마크시트**(번호 고르기) — 영작·서술형 없음 |
| 출제 범위 | 英語コミュニケーションⅠ·Ⅱ·Ⅲ, 論理・表現Ⅰ·Ⅱ·Ⅲ (= 고교 영어 전 범위) |
| 대문(大問) 수 | 최근 3년 모두 **I~IX, 9개** |
| 합격선(참고) | 학원 분석으로는 **65% 전후** 득점이면 합격권 |

> **B방식은 대학 독자 시험만으로 뽑는 방식**이고 정원도 가장 많습니다. A방식(共通テスト만), S방식(共通テスト+독자 화학)에서는 영어 독자 시험이 없습니다. 즉, **星薬 독자 영어 시험을 보는 일반선발은 B방식뿐**입니다.

## 2. 실제 경쟁률 (대학 공식 「最近3ヵ年の入試結果」)

一般選抜 **B方式 · 薬学科(6년제)**

| 연도 | 모집인원 | 지원자 | 응시자 | 합격자 | 경쟁률(응시/합격) |
|---|---|---|---|---|---|
| 2026 | 120 | 1,337 | 1,296 | 437 | **3.0배** |
| 2025 | 120 | 1,361 | 1,308 | 371 | **3.5배** |
| 2024 | 120 | 1,287 | 1,246 | 413 | **3.0배** |

> 정원은 120명이지만 합격자는 400명 전후입니다(다른 대학과 병행 지원하는 사람이 많기 때문). 즉 **응시자 3명 중 1명**이 붙는 시험입니다. 합격 최저점은 대학이 공표하지 않으며, 학원 분석으로는 3과목 합계 **65% 전후**가 목표선으로 알려져 있습니다.

## 3. 문제 구성 (최근 3개년 공통 흐름)

| 대문 | 형식 | 문항 수 | 이 사이트에서 공부할 곳 |
|---|---|---|---|
| I | 빈칸에 들어갈 단어·문법 4지선다 | 약 9 | 문법 1~3단계, 어휘 |
| II | 밑줄 친 단어·숙어와 의미가 가장 가까운 것 | 3~4 | 어휘·숙어 |
| III | 문법적으로 틀린 곳 찾기 | 약 3 | 제26강 오류 찾기 전략 |
| IV | 짧은 의학·과학 글 3개, 빈칸 채우기 | 약 12 | 의약 장문, 제12강 접속사 |
| V | 정렬(並べ替え): 일본어 뜻에 맞게 단어 배열 | 약 3 | 제25강 정렬 전략 |
| VI~IX | 장문독해(의약·생명과학), 빈칸·내용일치 | 각 2~5 | 의약 장문, 제27강 |

※ 연도별 정확한 구성은 아래 표(사이트 수록 데이터에서 자동 집계)를 보세요. 年에 따라 대문 순서·문항 수가 조금씩 바뀝니다.

## 4. 출제 경향 핵심 5가지

1. **문법은 기초~표준 레벨의 전형 문제.** 고교 문법 문제집을 3회독 하면 충분하다는 분석이 많습니다. 다만 *단어 뜻*을 묻는 문제(I번 상당수)가 섞여 있어 어휘력이 중요합니다.
2. **숙어(구동사)가 자주 나온다.** turn in(자러 가다), see eye to eye(의견이 일치하다), more often than not(대개) 처럼 **단어 하나하나 뜻으로는 알 수 없는 표현**을 통째로 외워야 합니다.
3. **장문은 짧지만 개수가 많다.** 1편당 150~300단어 정도의 의학·약학·생명과학 글이 여러 편. 전문 용어에는 **주석(注)이 달려 있으므로** 어려운 전문 단어를 따로 외울 필요는 적습니다.
4. **내용일치 문제의 비중이 커지는 중.** "본문에 쓰여 있는 것은?" 형태 — 반드시 본문의 근거 문장과 1:1로 대조해야 합니다.
5. **시간 배분이 승부.** 대문이 9개나 되므로 앞쪽 문법에서 고민하다 시간을 날리면 뒤쪽 장문을 못 풉니다.

## 5. 추천 시간 배분 (70분)

| 구간 | 목표 시간 | 요령 |
|---|---|---|
| I~III (문법·어휘·오류) | 15분 | 1문제 1분 이내. 모르면 찍고 표시 후 넘어가기 |
| IV (짧은 글 빈칸) | 12분 | 빈칸 앞뒤 + 문장 전체 논리(역접·인과) 확인 |
| V (정렬) | 6분 | 먼저 주어+동사를 찾고 덩어리로 묶기 |
| VI~IX (장문) | 32분 | 설문을 먼저 훑고 본문을 읽기 |
| 검토 | 5분 | 마크 누락·밀림 확인 |

## 6. 문법 0인 사람의 합격 로드맵 (요약)

1. **1~2개월차**: 문법 1·2단계(제1~12강) + 필수동사 60개. 이 단계에서는 "문장을 주어/동사/목적어로 쪼갤 수 있다"가 목표.
2. **3~4개월차**: 문법 3단계(제13~22강) + 숙어 70개 + 의약 장문 1~3편.
3. **5개월차**: 문법 4단계(실전 전략) + 의약 장문 4~6편 + 의약·과학 어휘.
4. **6개월차~**: 기출 2024 → 2025 → 2026 순서로 **70분 타이머 실전**, 틀린 문제는 "관련 문법 강의" 링크로 복습.

자세한 주 단위 계획은 [학습 로드맵](#/plan) 페이지를 보세요.
`;

export default function Guide() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageTitle kicker="시험 분석" title="星薬科大学 一般選抜B方式 英語 완전 분석" />
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-8 shadow-sm">
        <Md text={BASICS} />
        <h2 className="text-xl font-bold text-slate-900 mt-9 mb-3 pb-2 border-b border-slate-200">7. 연도별 실제 구성 (사이트 수록 기출 기준)</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {papers.map((p) => (
            <div key={p.year} className="rounded-xl border border-slate-200 bg-stone-50 p-4">
              <Link to={`/papers/${p.year}`} className="font-bold text-indigo-700">{p.year}年度 →</Link>
              <table className="w-full text-sm mt-2">
                <tbody>
                  {p.sections.map((s) => (
                    <tr key={s.roman} className="border-t">
                      <td className="py-1 pr-2 font-semibold">{s.roman}</td>
                      <td className="py-1">{KIND[s.kind]}</td>
                      <td className="py-1 text-right text-slate-500">{s.questions.length}</td>
                    </tr>
                  ))}
                  <tr className="border-t font-bold">
                    <td colSpan={2} className="py-1">합계</td>
                    <td className="py-1 text-right">{p.sections.reduce((a, s) => a + s.questions.length, 0)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-slate-900 mt-9 mb-3 pb-2 border-b border-slate-200">출처</h2>
        <ul className="text-sm list-disc pl-5 space-y-1">
          <li><a className="text-indigo-700 underline" href="https://www.hoshi.ac.jp/admission/nyushi/exam/" target="_blank" rel="noreferrer">星薬科大学 入学試験過去問題</a> (공식 기출 PDF)</li>
          <li><a className="text-indigo-700 underline" href="https://www.hoshi.ac.jp/admission/nyushi/" target="_blank" rel="noreferrer">星薬科大学 入学試験概要</a></li>
          <li><a className="text-indigo-700 underline" href="https://www.hoshi.ac.jp/admission/nyushi/3yearly/" target="_blank" rel="noreferrer">星薬科大学 最近3ヵ年の入試結果</a> (경쟁률)</li>
          <li><a className="text-indigo-700 underline" href="https://www.topedu.jp/high-school_list/hoshi/" target="_blank" rel="noreferrer">Topedu 星薬科大学対策</a> / <a className="text-indigo-700 underline" href="https://pharmassist-edu.com/post/mitehosii/hosiyakkakaisetsu26/" target="_blank" rel="noreferrer">PharmAssist 星薬科大学徹底解説</a></li>
          <li><a className="text-indigo-700 underline" href="https://jyuke-labo.com/daigakujyukentaisaku/hoshiyakkadaigaku/kamokubetsu/" target="_blank" rel="noreferrer">じゅけラボ 星薬科大学 科目別対策</a> (70분·100점·마크시트, 출제 범위)</li>
          <li><a className="text-indigo-700 underline" href="https://logicalteacher.com/post-3744/3744/" target="_blank" rel="noreferrer">ロジティー 星薬科大学 英語 過去問分析</a> (대문 구성, 65% 전후 합격)</li>
        </ul>
      </div>
    </div>
  );
}
