import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "g25-ordering-strategy",
  level: 4,
  title: "정렬 문제 푸는 법",
  summary: "동사와 덩어리를 먼저 찾아 영어 문장의 뼈대를 세운 뒤, 남은 말을 알맞은 자리에 넣는다.",
  body: String.raw`## 한 줄로 말하면
단어를 한국어 순서로 하나씩 옮기지 말고, **동사 중심의 뼈대와 붙어 다니는 덩어리**를 먼저 찾아 문장을 완성한다.

## 왜 배우나요?
星薬科大学 B方式의 정렬 문제는 주어진 단어를 모두 사용해 자연스러운 영어 문장을 만드는 문제다. 단어 뜻을 전부 몰라도 주어와 동사, 전치사 뒤의 명사, to부정사 같은 고정 덩어리를 찾으면 선택지를 빠르게 줄일 수 있다. 의약 문장에서는 *patients with asthma*, *should be taken after meals*처럼 긴 명사 덩어리와 수동태가 자주 이어진다. 정렬 감각은 빈칸 문제의 앞뒤 판단과 짧은 의학 지문 해석에도 그대로 쓰인다.

## 개념 설명
영어 문장은 먼저 **주어(행동하는 사람이나 대상)**와 **동사(행동이나 상태를 나타내는 말)**를 세운다. 예를 들어 *The nurse checks the dose.*에서 *The nurse*가 주어이고 *checks*가 동사다. 주어와 동사를 찾으면 문장의 중심 기둥이 생긴다.

그다음 **목적어(동작의 대상)**와 **보어(주어나 목적어의 상태를 설명하는 말)**를 붙인다. *The nurse checks the dose*에서 *the dose*가 목적어다. 영어의 기본 순서는 보통 주어, 동사, 목적어다. 한국어처럼 목적어를 동사 앞에 두면 안 된다.

단어 몇 개가 하나처럼 움직이는 **덩어리(문장에서 함께 쓰이는 말의 묶음)**도 통째로 찾는다. *after meals*는 식후라는 전치사구(전치사와 그 뒤 명사가 합쳐진 수식 덩어리)이고, *to reduce pain*은 통증을 줄이기 위해라는 to부정사(to와 동사원형의 묶음)다. *patients with diabetes*는 당뇨병이 있는 환자들이라는 명사구(명사를 중심으로 한 묶음)다.

정렬 순서는 다음처럼 잡으면 된다. 첫째, 동사원형 또는 조동사 뒤의 동사를 표시한다. 둘째, 그 동사의 주어를 찾는다. 셋째, 동사 뒤에 목적어와 보어를 놓는다. 넷째, 전치사구와 부사(동사나 문장 전체를 꾸미는 말)를 의미가 맞는 위치에 붙인다. 마지막으로 시제, 수일치, 관사와 대문자를 확인한다. 한국어 번역을 먼저 만들면 영어 어순이 뒤집히기 쉬우므로, 뼈대를 세운 뒤 번역한다.

## 형태 정리
| 확인할 덩어리 | 실제 형태 | 문장 속 역할 | 정렬 때 확인할 점 |
|---|---|---|---|
| 주어 + 동사 | The doctor / explains | 문장 뼈대 | 명사 뒤에 동사가 오는지 |
| 동사 + 목적어 | measures / blood pressure | 행동과 대상 | 목적어를 동사 뒤에 둠 |
| be + 보어 | The result / is reliable | 상태 설명 | be 뒤에 형용사나 명사 |
| 조동사 + 동사원형 | Patients should / rest | 가능, 의무, 조언 | should 뒤에 rests를 쓰지 않음 |
| 수동태 | The tablet / is taken | 대상 중심 행동 | be + 과거분사 뒤에 목적어를 두지 않음 |
| 전치사 + 명사 | after / meals | 시간, 장소, 관계 | after 뒤에 meals처럼 명사 |
| to + 동사원형 | to / prevent infection | 목적 | to 뒤에 prevents를 쓰지 않음 |
| 명사 + 전치사구 | patients / with asthma | 명사 구체화 | with asthma를 patients 뒤에 붙임 |

## 예문으로 익히기
1. **The doctor / who helped me / was / kind.**  
The doctor(주어) / who helped me(관계대명사절: 의사를 설명) / was(동사) / kind(보어)  
그 의사는 나를 도와준 분이 친절했다.  
관계대명사절은 설명받는 명사 바로 뒤에 둔다.

2. **My sister / takes / this medicine / after meals.**  
My sister(주어) / takes(동사) / this medicine(목적어) / after meals(시간 전치사구)  
내 여동생은 식후에 이 약을 복용한다.  
동사 뒤에 약을 놓고, 복용 시점은 뒤에 붙인다.

3. **The pharmacist / explained / the dosage / to the patient.**  
The pharmacist(주어) / explained(동사) / the dosage(목적어) / to the patient(설명 대상)  
약사는 환자에게 용량을 설명했다.  
explain은 보통 설명할 내용을 먼저, 사람은 to 뒤에 둔다.

4. **Patients / with asthma / should avoid / this inhaler.**  
Patients(주어) / with asthma(환자를 설명하는 전치사구) / should avoid(조동사와 동사) / this inhaler(목적어)  
천식이 있는 환자들은 이 흡입제를 피해야 한다.  
with asthma는 patients 뒤에 붙어 어느 환자인지 좁힌다.

5. **The tablet / is stored / in a cool place.**  
The tablet(주어) / is stored(수동태 동사) / in a cool place(장소 전치사구)  
그 정제는 서늘한 곳에 보관된다.  
수동태는 be와 과거분사를 한 덩어리로 먼저 찾는다.

6. **The nurse / checked / whether the patient / had a fever.**  
The nurse(주어) / checked(동사) / whether the patient had a fever(목적어인 명사절)  
간호사는 환자에게 열이 있는지 확인했다.  
whether가 이끄는 절은 checked의 목적어이므로 checked 뒤에 온다.

7. **We / visited / a clinic / to receive / a vaccine.**  
We(주어) / visited(동사) / a clinic(목적어) / to receive a vaccine(방문 목적)  
우리는 백신을 맞기 위해 병원을 방문했다.  
to receive는 병원을 방문한 목적을 설명하므로 기본 문장 뒤에 둔다.

8. **The study / found / that the new drug / reduced / pain.**  
The study(주어) / found(동사) / that the new drug reduced pain(목적어인 명사절)  
그 연구는 새 약이 통증을 줄였다는 것을 밝혀냈다.  
that 뒤에도 주어와 동사가 있는 완전한 절이 온다.

## 헷갈리는 포인트 / 자주 하는 실수
1. 목적어를 동사 앞에 두지 않는다. *The dose the nurse checked.*는 질문에 따라 가능한 관계절이지만, 단순히 간호사가 용량을 확인했다는 뜻이면 **The nurse checked the dose.**가 맞다.

2. 조동사 뒤에는 동사원형을 쓴다. 틀린 문장 *Patients should takes water.*를 **Patients should take water.**로 고친다. should가 이미 조언의 기능을 맡으므로 takes를 쓰지 않는다.

3. 전치사 뒤에 동사를 바로 두지 않는다. *after take the medicine*은 틀리고 **after taking the medicine** 또는 **after you take the medicine**이 맞다. after 뒤에 명사 덩어리나 주어와 동사가 필요하다.

4. 수동태를 능동태처럼 배열하지 않는다. *The drug was prescribed the doctor*는 틀리고 **The drug was prescribed by the doctor.**가 맞다. 처방받은 대상 뒤에는 행위자를 by로 표시한다.

5. 명사를 꾸미는 말은 대체로 명사 뒤에 붙인다. *with diabetes patients*는 뜻이 달라지거나 부자연스럽고, **patients with diabetes**가 당뇨병 환자라는 정확한 덩어리다.

## 星薬 기출에서는 이렇게 나온다
B方式에서는 괄호 안 단어를 알맞게 배열하고, 네 번째 단어를 답으로 고르는 유형을 생각하면 된다. 예를 들어 (A) **should** (B) **be** (C) **taken** (D) **after meals**처럼 주어 뒤에 조동사, be, 과거분사를 세우면 수동태 뼈대가 보인다. 먼저 *The medicine (　　) meals.*에서 **should be taken after**를 만들고, 답을 고른 뒤 약은 식후에 복용해야 한다고 확인한다.

또 다른 문장인 *The doctor (A) patients (B) advised (C) to rest (D) the*에서는 사람이 조언하는 구조인 **The doctor advised the patients to rest.**를 만든다. 동사 advised 뒤에 사람 목적어, 그 뒤에 to부정사가 온다는 순서를 이용하면 단어 뜻을 모두 몰라도 풀 수 있다. 답을 정한 뒤 주어, 동사, 목적어가 모두 있는지 소리 내어 점검한다.

## 3줄 요약
1. 주어와 동사를 먼저 찾아 영어 문장의 기둥을 세운다.
2. 조동사 뒤 동사원형, be와 과거분사, 전치사 덩어리는 통째로 붙인다.
3. 목적어와 수식어를 넣은 뒤 수일치, 시제, 의미를 마지막에 확인한다.
`,
  quiz: [
    {
      prompt: "Choose the correct order. The medicine (　　) before breakfast.\n(A) should (B) taken (C) be (D) by the patient",
      choices: ["A-B-C-D", "A-C-B-D", "D-A-C-B", "D-C-A-B"],
      answer: 2,
      explanation: `**해석**\n그 약은 환자에 의해 아침 식사 전에 복용되어야 한다.\n\n**정답 근거**\n정답은 2번, A-C-B-D이다. 조동사 should 뒤에는 be, 그 뒤에는 과거분사 taken이 와서 수동태 should be taken을 만든다. 행위자를 나타내는 by the patient가 마지막에 온다.\n\n**오답 분석**\n- 1번 A-B-C-D: should taken be가 되어 be와 과거분사 순서가 바뀐다.\n- 3번 D-A-C-B: by the patient가 조동사보다 먼저 와서 뼈대가 끊긴다.\n- 4번 D-C-A-B: 행위자 덩어리가 문장 첫머리에 와서 수동태 순서가 무너진다.\n\n**핵심 포인트**\n수동태 조동사 문형은 주어 + should + be + 과거분사이며, by 덩어리는 뒤에 붙인다.`,
      lessonIds: ["g25-ordering-strategy"]
    },
    {
      prompt: "Choose the correct order. The nurse (　　) the patient.\n(A) carefully (B) examined (C) yesterday (D) the",
      choices: ["B-D-A-C", "D-B-A-C", "B-A-D-C", "A-B-C-D"],
      answer: 1,
      explanation: `**해석**\n간호사는 어제 그 환자를 주의 깊게 진찰했다.\n\n**정답 근거**\n정답은 1번 B-D-A-C이다. examined가 동사이고 the patient가 목적어이므로 동사 뒤에 목적어를 둔다. carefully는 동작을 꾸미는 부사라 examined 뒤 또는 문장 끝에 올 수 있지만, 제시 배열에서는 examined the patient carefully yesterday가 자연스럽다.\n\n**오답 분석**\n- 2번 D-B-A-C: the가 문장 첫머리에 와서 목적어 덩어리가 깨진다.\n- 3번 B-A-D-C: carefully the가 되어 관사와 명사가 떨어진다.\n- 4번 A-B-C-D: 부사로 시작하고 the가 홀로 남는다.\n\n**핵심 포인트**\n관사 the는 뒤의 명사 patient와 붙이고, 동사 examined 뒤에 목적어를 놓는다.`,
      lessonIds: ["g25-ordering-strategy"]
    },
    {
      prompt: "Choose the correct order. The tablet (　　) in a dry place.\n(A) stored (B) is (C) safely (D) kept",
      choices: ["B-A-C", "B-C-A", "A-B-C", "C-B-A"],
      answer: 2,
      explanation: `**해석**\n그 정제는 건조한 곳에 안전하게 보관된다.\n\n**정답 근거**\n정답은 2번 B-C-A이다. is stored가 수동태의 뼈대이고, safely는 그 동작을 꾸미는 부사이므로 *is safely stored*가 된다.\n\n**오답 분석**\n- 1번 B-A-C: is stored safely는 문법상 가능하지만, 제시한 시험형 배열에서 정답 문장으로 설정한 위치와 다르다.\n- 3번 A-B-C: stored is가 되어 be동사와 과거분사 순서가 뒤집힌다.\n- 4번 C-B-A: safely is stored가 되어 주어 뒤의 수동태 뼈대가 부자연스럽게 시작한다.\n\n**핵심 포인트**\n수동태 is stored를 먼저 묶고, 빈도나 방법을 나타내는 부사는 그 사이에 넣을 수 있다.`,
      lessonIds: ["g25-ordering-strategy"]
    },
    {
      prompt: "Choose the correct order. The pharmacist advised (　　) after meals.\n(A) to take (B) the patient (C) the medicine",
      choices: ["B-A-C", "A-B-C", "C-B-A", "B-C-A"],
      answer: 1,
      explanation: `**해석**\n약사는 환자에게 식후에 그 약을 복용하라고 조언했다.\n\n**정답 근거**\n정답은 1번 B-A-C이다. advise 뒤에 조언을 받는 사람 the patient를 놓고, to take라는 to부정사 뒤에 목적어 the medicine을 둔다. 따라서 *advised the patient to take the medicine after meals*가 된다.\n\n**오답 분석**\n- 2번 A-B-C: to take 뒤에 사람이 와서 advise + 사람 + to동사 구조가 끊긴다.\n- 3번 C-B-A: the medicine이 사람 목적어보다 먼저 와서 문형이 흐트러진다.\n- 4번 B-C-A: to take의 목적어 뒤에 to부정사가 와 의미 연결이 어색하다.\n\n**핵심 포인트**\nadvise + 사람 + to동사원형을 먼저 만들고, to동사 뒤에 행동의 대상을 붙인다.`,
      lessonIds: ["g25-ordering-strategy"]
    },
    {
      prompt: "Find the underlined error. Patients <u>with diabetes</u> should <u>takes</u> this drug <u>after meals</u>.",
      choices: ["Patients", "with diabetes", "takes", "after meals"],
      answer: 3,
      explanation: `**해석**\n당뇨병이 있는 환자들은 식후에 이 약을 복용해야 한다.\n\n**정답 근거**\n정답은 3번 takes다. 조동사 should 뒤에는 동사원형 take가 와야 하므로 *should take*로 고친다. with diabetes는 patients를 설명하는 전치사구이고, after meals는 복용 시간을 나타내므로 올바르다.\n\n**오답 분석**\n- 1번 Patients: 문장의 주어로 올바른 복수 명사다.\n- 2번 with diabetes: 어떤 환자인지 설명하는 자연스러운 덩어리다.\n- 4번 after meals: 식후라는 시간 표현으로 적절하다.\n\n**핵심 포인트**\n조동사는 뒤 동사의 모양을 바꾼다. should 뒤에는 주어가 단수여도 takes가 아니라 take를 쓴다.`,
      lessonIds: ["g25-ordering-strategy"]
    },
    {
      prompt: "Choose the correct order. The study found (　　) pain.\n(A) that (B) reduced (C) the new drug (D)",
      choices: ["A-B-C", "C-A-B", "A-C-B", "B-C-A"],
      answer: 3,
      explanation: `**해석**\n그 연구는 새 약이 통증을 줄였다는 것을 발견했다.\n\n**정답 근거**\n정답은 3번 A-C-B이다. found 뒤에는 that이 이끄는 명사절이 목적어로 온다. that 뒤에는 주어 the new drug가 오고, 그 뒤에 동사 reduced가 온다. 따라서 *found that the new drug reduced pain*이 된다.\n\n**오답 분석**\n- 1번 A-B-C: that reduced가 먼저 와서 주어가 뒤로 밀린다.\n- 2번 C-A-B: the new drug가 found 바로 뒤에 와서 that절의 시작이 흐려진다.\n- 4번 B-C-A: reduced가 found 뒤에 바로 와서 주어가 없다.\n\n**핵심 포인트**\nthat절은 that + 주어 + 동사 순서다. 절 전체가 found의 목적어가 된다.`,
      lessonIds: ["g25-ordering-strategy"]
    }
  ]
};
