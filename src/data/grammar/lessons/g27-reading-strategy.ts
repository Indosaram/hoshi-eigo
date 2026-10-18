import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "g27-reading-strategy",
  level: 4,
  title: "이과·의약 장문 읽기 전략",
  summary: "문장의 뼈대와 연결어를 먼저 잡아 의약 장문의 주장, 근거, 빈칸을 정확히 찾는다.",
  body: String.raw`## 한 줄로 말하면
이과·의약 지문은 모든 단어가 아니라 주어와 동사의 뼈대, 연결어, 반복어를 따라 주장과 근거를 찾는 글이다.

## 왜 배우나요?
星薬科大学 B方式은 약물, 세포, 질병, 연구 결과처럼 낯선 내용을 짧은 시간에 읽게 한다. 전문용어를 몰라도 주어와 동사, however(반대), therefore(결과), for example(예시)를 잡으면 방향을 놓치지 않는다. 4지선다에서는 빈칸의 품사와 논리, 동의어 문제에서는 바꿔 쓴 표현을 찾는다.

## 개념 설명
먼저 문장의 뼈대인 주어(행동이나 상태의 주인)와 동사(행동이나 상태를 나타내는 말)를 찾는다. *The effect of the drug on blood pressure was small*에서 주어는 *The effect*, 동사는 *was*이다. of와 on 뒤는 설명이다.

연결어(앞뒤 생각의 관계를 알려 주는 말)도 찾는다. *however*는 반대, *therefore*는 결과, *although*는 양보, *because*는 이유를 예고한다.

지시어(앞에서 나온 내용을 가리키는 말)도 표시한다. *this result*의 this는 앞의 결과를, *they*는 복수 명사를 가리킨다. *The treatment reduced pain. This suggests that...*에서 This는 통증 감소라는 결과다.

반복어와 바꿔 쓰기도 찾는다. *drug, medicine, treatment*는 같은 대상을 가리키고, *reduce*는 *decrease*로 바뀐다. 빈칸은 뜻과 앞의 관사나 to, 뒤의 형태를 확인한다.

## 형태 정리
| 표지 | 기본 뜻 | 읽을 방향 | 의약 지문 예 |
|---|---|---|---|
| however | 그러나 | 앞 주장과 반대 | However, the treatment caused nausea. |
| therefore, thus | 그러므로, 따라서 | 앞 내용의 결과 | Therefore, the dose was reduced. |
| because, since | 왜냐하면, ...이므로 | 뒤에 이유 | The trial stopped because patients felt dizzy. |
| although, though | ...이지만 | 뒤에 양보할 내용 | Although the drug was effective, it was costly. |
| for example | 예를 들어 | 뒤에 구체 사례 | For example, aspirin can reduce fever. |
| in contrast | 대조적으로 | 앞뒤 차이 | In contrast, the control group improved slowly. |
| this result | 이 결과 | 앞의 결과를 지시 | This result supports the hypothesis. |
| lead to, result in | ...을 초래하다 | 원인에서 결과로 | The mutation led to drug resistance. |

## 예문으로 익히기
1. **The effect of the drug on blood pressure was small.**
   구조: The effect(주어: 핵심 명사) / of the drug on blood pressure(주어를 설명) / was(동사) / small(보어: 상태 설명)
   해석: 그 약물이 혈압에 미친 효과는 작았다.
   메모: of와 on 뒤가 아니라 effect와 was를 연결한다.

2. **Although the medicine reduced pain, it caused nausea.**
   구조: Although(양보 연결어) / the medicine(주어) / reduced(동사) / pain(목적어) / it(대명사: medicine) / caused(동사) / nausea(목적어)
   해석: 그 약은 통증을 줄였지만 메스꺼움을 일으켰다.
   메모: although 뒤의 좋은 효과와 주절의 부작용을 대조한다.

3. **The student missed the bus; therefore, she arrived late.**
   구조: The student(주어) / missed(동사) / the bus(목적어) / therefore(결과 연결어) / she(대명사: student) / arrived(동사) / late(부사)
   해석: 그 학생은 버스를 놓쳤다. 따라서 늦게 도착했다.
   메모: therefore 뒤는 앞 사건의 결과다.

4. **Researchers examined a new vaccine that protects older adults.**
   구조: Researchers(주어) / examined(동사) / a new vaccine(목적어) / that protects older adults(관계절: 백신을 설명)
   해석: 연구자들은 고령자를 보호하는 새 백신을 조사했다.
   메모: that절은 vaccine을 설명하고 본동사는 examined다.

5. **For example, regular exercise may lower the risk of diabetes.**
   구조: For example(예시 표지) / regular exercise(주어) / may lower(조동사+동사) / the risk(목적어) / of diabetes(위험의 대상)
   해석: 예를 들어, 규칙적인 운동은 당뇨병 위험을 낮출 수 있다.
   메모: for example 뒤는 일반 주장의 사례다.

6. **The trial produced an unexpected result. This result requires further study.**
   구조: The trial(주어) / produced(동사) / an unexpected result(목적어) / This result(앞 결과를 가리키는 주어) / requires(동사) / further study(목적어)
   해석: 그 시험은 예상하지 못한 결과를 냈다. 이 결과는 추가 연구를 필요로 한다.
   메모: This result는 앞 결과를 가리킨다.

7. **In contrast, the control group showed no improvement.**
   구조: In contrast(대조 표지) / the control group(주어) / showed(동사) / no improvement(목적어)
   해석: 대조적으로, 대조군은 어떤 개선도 보이지 않았다.
   메모: 두 집단을 비교.

8. **Because the bacteria became resistant, the treatment no longer worked.**
   구조: Because(이유 연결어) / the bacteria(주어) / became(동사) / resistant(보어) / the treatment(주어) / no longer worked(동사: 더 이상 효과가 없었다)
   해석: 세균이 내성을 갖게 되었기 때문에 치료는 더 이상 효과가 없었다.
   메모: because절은 이유, 주절은 결과다.

## 헷갈리는 포인트 / 자주 하는 실수
1. 긴 주어의 끝을 본동사로 착각한다. \`The effect of the drug were strong.\`은 틀리고 \`The effect of the drug was strong.\`이 맞다. effect가 단수이므로 was를 쓴다.
2. however를 추가로 읽는다. \`The drug was cheap. However, it was effective.\`는 앞 내용과 반대되는 새 내용을 예고한다.
3. this가 가장 가까운 명사만 가리킨다고 단정한다. \`The drug reduced pain, but it caused dizziness. This was unexpected.\`에서 This가 가리키는 범위를 앞뒤 의미로 확인한다.
4. 예시를 결론으로 고른다. \`For example\` 뒤는 일반 주장의 사례다.
5. 동의어만 보고 답을 고른다. *reduce*와 *decrease*가 비슷해도 빈칸 뒤 형태를 확인한다.

## 星薬 기출에서는 이렇게 나온다
B方式 독해에서는 약물의 장점 뒤 *However*의 부작용이나, 연구 결과 뒤 *This result*의 지시 대상을 묻는다. “The treatment reduced inflammation. However, it caused stomach pain.”의 핵심은 부작용이다.

빈칸은 먼저 앞뒤를 본다. “The drug was effective, (　　) it caused severe side effects.”라면 반대이므로 *but*이나 *however* 계열을 고른다. 문단 전체에서 지시어를 확인하고 원인, 결과, 대조를 표시한다.

## 3줄 요약
1. 주어와 동사를 먼저 찾아 문장의 뼈대를 만든다.
2. however, therefore, because 같은 연결어로 주장과 근거의 방향을 잡는다.
3. 지시어와 동의어를 앞 문장에 연결하고, 빈칸은 문법과 문맥을 함께 확인한다.
`,
  quiz: [
    {
      prompt: "The new drug lowered the fever; (　　), it caused a skin rash.",
      choices: ["therefore", "however", "for example", "because"],
      answer: 2,
      explanation: `**해석**\n새 약은 열을 낮췄지만, 피부 발진을 일으켰다.\n\n**정답 근거**\n앞의 긍정적 효과와 뒤의 부작용은 반대 관계이므로 **however**가 맞다.\n\n**오답 분석**\n- therefore는 결과라서 뒤가 앞의 결과일 때 쓴다.\n- for example은 구체적 사례를 시작할 때 쓴다.\n- because는 이유를 이끌며 이 자리에 문맥상 맞지 않는다.\n\n**핵심 포인트**\n연결어는 단어 뜻보다 앞뒤 관계를 먼저 확인한다.`
    },
    {
      prompt: "The effect of the treatment on patients (　　) significant.",
      choices: ["were", "are", "was", "be"],
      answer: 3,
      explanation: `**해석**\n그 치료가 환자에게 미친 효과는 중요했다.\n\n**정답 근거**\n주어의 핵심은 단수 명사 **effect**이고, 과거의 상태를 나타내므로 **was**가 정답이다. of the treatment와 on patients는 주어를 꾸미는 말이다.\n\n**오답 분석**\n- were는 복수 주어 또는 과거 be동사의 복수형이다.\n- are는 현재형이며 effect와 수가 맞지 않는다.\n- be는 원형이라 완전한 과거 서술문에 올 수 없다.\n\n**핵심 포인트**\n긴 명사구에서는 of 뒤 명사가 아니라 가장 앞의 핵심 명사로 수를 판단한다.`
    },
    {
      prompt: "The trial produced an unexpected result. (　　) result requires further study.",
      choices: ["This", "These", "Those", "They"],
      answer: 1,
      explanation: `**해석**\n그 시험은 예상 밖의 결과를 냈다. 이 결과는 추가 연구를 필요로 한다.\n\n**정답 근거**\n바로 앞의 단수 명사 result를 다시 가리키므로 단수 지시어 **This**가 맞다.\n\n**오답 분석**\n- These는 가까운 복수 대상을 가리킨다.\n- Those는 먼 복수 대상을 가리킨다.\n- They는 복수 대명사라 단수 result와 수가 맞지 않는다.\n\n**핵심 포인트**\nthis가 나오면 앞 문장의 어떤 내용이나 결과를 가리키는지 찾아 연결한다.`
    },
    {
      prompt: "Because the bacteria became resistant, the treatment no longer (　　).",
      choices: ["work", "worked", "working", "to work"],
      answer: 2,
      explanation: `**해석**\n세균이 내성을 갖게 되었기 때문에 치료는 더 이상 효과가 없었다.\n\n**정답 근거**\n주어 the treatment 뒤의 본동사가 필요하고, 문장 전체가 과거 사건이므로 과거형 **worked**가 알맞다. no longer는 ‘더 이상 ...하지 않다’라는 부사다.\n\n**오답 분석**\n- work는 현재형 원형이라 과거 문장과 맞지 않는다.\n- working은 be동사 없이 본동사가 될 수 없다.\n- to work는 to부정사라 주절의 서술동사 자리에 올 수 없다.\n\n**핵심 포인트**\nbecause절이 앞에 와도 주절의 주어와 동사를 따로 확인한다.`
    },
    {
      prompt: "다음 밑줄 친 부분 중 어법상 틀린 것을 고르시오.\nThe researchers <u>(A) examined</u> a vaccine <u>(B) who</u> protects older adults and <u>(C) reported</u> the result <u>(D) clearly</u>.",
      choices: ["(A)", "(B)", "(C)", "(D)"],
      answer: 2,
      explanation: `**해석**\n연구자들은 고령자를 보호하는 백신을 조사하고 그 결과를 명확하게 보고했다.\n\n**정답 근거**\n선행사(뒤에서 설명을 받는 앞의 명사)가 사람 아닌 vaccine이므로 관계대명사는 **which** 또는 **that**이어야 한다. 따라서 (B)의 who가 틀렸다.\n\n**오답 분석**\n- (A) examined는 연구자들이 백신을 조사했다는 과거 동사로 맞다.\n- (C) reported는 and 뒤에 이어지는 과거 동사로 맞다.\n- (D) clearly는 reported를 꾸미는 부사로 맞다.\n\n**핵심 포인트**\n관계절을 만났을 때 that 뒤의 명사가 사람인지 사물인지 확인한다.`
    },
    {
      prompt: "Although the medicine was effective, it was too expensive for many patients. Which is closest in meaning to **Although**?",
      choices: ["Because", "Even though", "Therefore", "For example"],
      answer: 2,
      explanation: `**해석**\n그 약은 효과가 있었지만, 많은 환자에게 너무 비쌌다.\n\n**정답 근거**\n**Although**는 ‘비록 ...이지만’이라는 양보를 나타내며 **Even though**와 같은 뜻이다. 효과와 비싸다는 한계를 함께 제시한다.\n\n**오답 분석**\n- Because는 이유를 나타내므로 관계가 달라진다.\n- Therefore는 결과를 나타내는 연결어다.\n- For example은 사례를 시작하는 표현이다.\n\n**핵심 포인트**\n동의어 문제도 단어만 바꾸지 말고 문장 안의 논리 관계가 같은지 확인한다.`
    }
  ]
};
