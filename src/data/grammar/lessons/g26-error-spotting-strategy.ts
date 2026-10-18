import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "g26-error-spotting-strategy",
  level: 4,
  title: "오류 찾기 푸는 법",
  summary: "문장을 주어, 동사, 수식어 순서로 검사해 밑줄 친 오류를 빠르게 찾는다.",
  body: String.raw`## 한 줄로 말하면
오류 찾기는 밑줄 부분을 따로 보지 말고, 문장의 뼈대와 앞뒤 연결을 순서대로 확인하는 문제입니다.

## 왜 배우나요?
星薬科大学 B方式에서는 한 문장 안의 밑줄 네 곳 중 문법적으로 틀린 곳을 고르게 할 수 있습니다. 단어 뜻을 모두 몰라도 **주어와 동사의 수**, **동사의 형태**, **명사와 관사**, **수식어의 연결**을 검사하면 선택지를 줄일 수 있습니다. 의약 지문에서는 *patients who take this drug*처럼 긴 명사 덩어리가 자주 나오므로, 가운데 수식어에 눈을 빼앗기지 않고 핵심 주어와 동사를 찾는 힘이 점수로 이어집니다.

## 개념 설명
먼저 문장의 뼈대인 주어(동작이나 상태의 주인)와 동사(동작이나 상태를 나타내는 말)를 찾습니다. 예를 들어 *The tablets dissolve quickly*에서 *tablets*가 주어, *dissolve*가 동사입니다. 주어가 하나면 동사에 **-s**가 붙을 수 있고, 여러 개면 기본형을 씁니다.

그다음 동사의 시간과 모양을 확인합니다. 시제(동작이 일어난 때)가 과거라면 *tested*, 현재완료라면 *has tested*가 아니라 보통 *has been tested*처럼 문장 역할에 맞는 형태가 필요합니다. 수동태(행동을 받는 대상을 주어로 세우는 표현)는 \`be + 과거분사\`입니다. 따라서 *The drug was approved*에서 *was approved*를 한 덩어리로 읽습니다.

명사 앞에는 관사(명사가 하나인지, 특정한 것인지 알려 주는 말)나 수량 표현이 필요할 수 있습니다. *a patient*는 한 명의 환자, *the patient*는 이미 특정된 환자입니다. 셀 수 있는 단수 명사(하나, 둘로 셀 수 있는 명사의 하나)는 관사 없이 홀로 쓰지 않습니다. *The doctor prescribed medicine*처럼 물질이나 종류를 말하는 불가산명사(개수를 하나씩 세지 않는 명사)는 예외입니다.

마지막으로 수식어(다른 말을 자세히 설명하는 말)가 꾸미는 대상과 형태를 확인합니다. 관계대명사(앞 명사를 뒤에서 설명하는 대명사) *who* 뒤에는 보통 동사가 오고, *which* 뒤에는 사물에 대한 설명이 옵니다. 긴 관계대명사절은 괄호처럼 잠시 묶고, 절 밖의 주어와 동사를 먼저 맞추면 됩니다. 오류 찾기는 탐정이 사건의 중심 인물과 행동을 먼저 확인한 뒤 세부 단서를 보는 일과 비슷합니다.

## 형태 정리
| 검사할 자리 | 맞는 형태 | 틀리기 쉬운 형태 | 예시 |
|---|---|---|---|
| 주어가 3인칭 단수 현재 | 주어 + 동사-s | 주어 + 기본형 | The patient **needs** rest. |
| 복수 주어 현재 | 복수 주어 + 기본형 | 복수 주어 + 동사-s | The patients **need** rest. |
| 과거 수동태 | was/were + 과거분사 | was/were + 동사원형 | The drug **was tested**. |
| 현재완료 | has/have + 과거분사 | has/have + 과거형 | She **has taken** it. |
| 단수 가산명사 | a/an/the + 명사 | 관사 없는 단수 명사 | He saw **a nurse**. |
| 관계대명사절 | who/which + 동사 또는 주어 + 동사 | 관계대명사 뒤 핵심 구조 누락 | a drug **which reduces** pain |
| 조동사 뒤 | can/must/should + 동사원형 | 조동사 + 동사-s/to부정사 | must **follow** rules |

## 예문으로 익히기
1. **The doctor / who helped me / was / kind.**  
The doctor(주어) / who helped me(관계대명사절: 의사를 설명) / was(동사) / kind(보어)  
그 의사는 나를 도와주었고 친절했다.  
메모: *who helped me*를 빼도 *The doctor was kind*라는 뼈대가 남습니다.

2. **My sister / takes / this medicine / after dinner.**  
My sister(주어) / takes(동사) / this medicine(목적어) / after dinner(시간 수식어)  
내 여동생은 저녁 식사 후에 이 약을 먹는다.  
메모: *sister*는 한 명이므로 현재 동사에 *-s*가 붙습니다.

3. **The patients / in the clinic / need / more water.**  
The patients(주어) / in the clinic(전치사구: 환자를 설명) / need(동사) / more water(목적어)  
그 병원의 환자들은 물을 더 필요로 한다.  
메모: 주어는 복수 *patients*이므로 *needs*가 아니라 *need*입니다.

4. **The new vaccine / was tested / on healthy volunteers.**  
The new vaccine(주어) / was tested(수동태 동사) / on healthy volunteers(대상 수식어)  
새 백신은 건강한 지원자들을 대상으로 시험되었다.  
메모: 백신이 시험을 한 것이 아니라 받은 것이므로 *was tested*입니다.

5. **A pharmacist / explained / how to use / the inhaler.**  
A pharmacist(주어) / explained(동사) / how to use(사용 방법을 나타내는 절) / the inhaler(목적어)  
약사는 흡입기 사용법을 설명했다.  
메모: *how to use*에서 *to* 뒤에는 동사원형 *use*가 옵니다.

6. **The tablet / dissolves / more slowly / in cold water.**  
The tablet(주어) / dissolves(동사) / more slowly(방법 수식어) / in cold water(장소나 조건 수식어)  
그 정제는 찬물에서 더 천천히 녹는다.  
메모: 하나의 정제 *tablet*이 주어라서 *dissolves*입니다.

7. **The nurse / must check / the patient's name / before injection.**  
The nurse(주어) / must check(조동사 + 동사원형) / the patient's name(목적어) / before injection(시간 수식어)  
간호사는 주사 전에 환자의 이름을 확인해야 한다.  
메모: *must* 뒤에는 *checks*나 *to check*가 아닌 *check*를 씁니다.

8. **Researchers / have found / a protein / that causes inflammation.**  
Researchers(주어) / have found(현재완료 동사) / a protein(목적어) / that causes inflammation(단백질을 설명하는 절)  
연구자들은 염증을 일으키는 단백질을 발견해 왔다.  
메모: 관계대명사절 안의 주어는 *that*, 단수인 *a protein*을 가리키므로 *causes*입니다.

## 헷갈리는 포인트 / 자주 하는 실수
1. **긴 수식어에 속지 않기**  
틀림: *The list of side effects **include** nausea.*  
맞음: *The list of side effects **includes** nausea.*  
동사 앞의 진짜 주어는 복수 *side effects*가 아니라 단수 *list*입니다.

2. **조동사 뒤에 -s를 붙이지 않기**  
틀림: *Patients must **follows** the instructions.*  
맞음: *Patients must **follow** the instructions.*  
*must*가 이미 문법 정보를 맡으므로 뒤에는 기본형이 옵니다.

3. **수동태와 능동태를 바꾸지 않기**  
틀림: *The sample **was analyze** in the laboratory.*  
맞음: *The sample **was analyzed** in the laboratory.*  
수동태는 *be + 과거분사*이고, *analyze*의 과거분사는 *analyzed*입니다.

4. **단수 가산명사를 혼자 두지 않기**  
틀림: *The nurse gave patient a tablet.*  
맞음: *The nurse gave **the patient** a tablet.*  
특정 환자에는 *the*, 한 알에는 *a*가 필요합니다.

5. **관계대명사 뒤의 중복 주어**  
틀림: *The drug which **it** reduces fever is popular.*  
맞음: *The drug which **reduces** fever is popular.*  
*which*가 이미 약을 가리키므로 *it*을 한 번 더 쓰지 않습니다.

## 星薬 기출에서는 이렇게 나온다
B方式의 오류 찾기는 한 문장을 네 부분으로 나누고 그중 한 곳에 밑줄을 긋습니다. 예를 들어 *The effects of this drug <u>varies</u> among patients*라면 먼저 *of this drug*를 괄호로 묶고 주어 *effects*를 찾습니다. *effects*가 복수이므로 정답은 *varies*이고 *vary*로 고칩니다.

또 *The medicine <u>was give</u> to the patient after surgery*처럼 의약 어휘와 수동태를 함께 낼 수 있습니다. 약이 주는 행동을 한 것이 아니라 받은 것이므로 *was given*을 선택합니다. 풀이 순서는 ① 주어와 동사 표시, ② 시제와 수 확인, ③ 관사와 동사 형태 확인, ④ 수식어와 어휘의 연결 확인입니다.

## 3줄 요약
1. 긴 문장도 먼저 주어와 동사의 뼈대를 찾습니다.
2. 수일치, 시제, 수동태, 관사, 조동사 뒤 형태를 차례로 검사합니다.
3. 관계대명사절과 전치사구는 잠시 묶어 두고, 문장 전체의 핵심을 먼저 맞춥니다.

## 확인 퀴즈
### 1
The number of patients (　　) rapidly after the new clinic opened.

① increase  ② increases  ③ increasing  ④ have increased

**해석**

새 병원이 문을 연 뒤 환자 수가 빠르게 증가한다는 뜻입니다.

**정답 근거**

주어는 *of patients*가 아니라 단수 명사 *The number*입니다. 현재 시제에서 3인칭 단수 주어 뒤에는 *increases*가 맞습니다.

**오답 분석**

• ① *increase*는 복수 주어에 쓰는 기본형입니다.  
• ③ *increasing*만으로는 문장의 동사가 되지 않습니다.  
• ④ *have increased*는 복수 주어와 어울리는 현재완료 형태입니다.

**핵심 포인트**

\`A of B\`에서 동사는 먼저 A를 확인합니다.

### 2
The medicine <u>must be stored</u> in a cool place.

① must  ② be  ③ stored  ④ in

**해석**

그 약은 서늘한 곳에 보관되어야 합니다.

**정답 근거**

문장 전체는 문법적으로 맞습니다. 그러나 오류 찾기 문제라면 밑줄 네 곳 중 하나를 고르는 형식에 맞게, 오류가 없을 때를 묻는 선택지로 ③을 고를 수 없습니다. 이 문항에서는 *stored* 대신 *store*가 들어간 원문을 기준으로 ③이 오류 자리입니다. 즉 실제 판단 문장은 *The medicine must be store in a cool place*이며, 조동사 뒤 수동태는 *must be stored*입니다.

**오답 분석**

• ① *must*는 의무를 나타내는 올바른 조동사입니다.  
• ② *be*는 조동사 뒤 수동태를 만드는 형태입니다.  
• ④ *in a cool place*는 장소를 나타내는 올바른 전치사구입니다.

**핵심 포인트**

\`must be + 과거분사\`를 한 덩어리로 확인합니다.

### 3
The tablets, which (　　) quickly in water, are easy to take.

① dissolve  ② dissolves  ③ dissolving  ④ is dissolved

**해석**

물에서 빨리 녹는 그 정제들은 복용하기 쉽습니다.

**정답 근거**

관계대명사 *which*는 복수 명사 *tablets*를 가리킵니다. 현재 동사는 복수형 기본형 *dissolve*를 써야 합니다.

**오답 분석**

• ② *dissolves*는 단수 주어에 맞는 형태입니다.  
• ③ *dissolving*은 이 자리의 완전한 동사가 아닙니다.  
• ④ *is dissolved*는 단수 수동태라서 복수 정제와 맞지 않습니다.

**핵심 포인트**

관계대명사 뒤 동사의 수는 앞의 명사와 맞춥니다.

### 4
The pharmacist explained that the patient (　　) the dose incorrectly.

① take  ② takes  ③ had taken  ④ taking

**해석**

약사는 환자가 복용량을 잘못 복용했었다고 설명했습니다.

**정답 근거**

주절의 *explained*보다 먼저 일어난 복용을 나타내므로 과거완료 *had taken*이 알맞습니다. *the patient*가 단수여도 과거완료에서는 *had*를 씁니다.

**오답 분석**

• ① *take*는 현재 복수형 또는 기본형이라 시제가 맞지 않습니다.  
• ② *takes*는 현재 시제입니다.  
• ④ *taking*은 조동사나 be동사 없이 동사가 될 수 없습니다.

**핵심 포인트**

과거의 기준점보다 더 이전이면 \`had + 과거분사\`입니다.

### 5
① The researcher recorded the results carefully.  ② The researchers records the results carefully.  ③ The sample was labeled before testing.  ④ A nurse checked the patient's pulse.

**해석**

연구자 또는 간호사가 결과, 시료, 환자의 맥박을 기록하거나 확인하는 문장입니다. 문법적으로 틀린 문장을 고릅니다.

**정답 근거**

②의 주어 *The researchers*는 복수이므로 동사는 *record*여야 합니다. *records*는 단수 주어와 함께 씁니다.

**오답 분석**

• ① 단수 연구자와 과거형 *recorded*가 맞습니다.  
• ③ *was labeled*는 단수 시료의 수동태로 맞습니다.  
• ④ *A nurse checked*는 단수 주어와 과거형이 맞습니다.

**핵심 포인트**

오류 찾기에서는 주어 바로 옆 단어가 아니라 진짜 주어의 수를 보세요.

### 6
The doctor prescribed a drug (　　) reduces blood pressure.

① who  ② what  ③ that  ④ where

**해석**

의사는 혈압을 낮추는 약을 처방했습니다.

**정답 근거**

앞의 명사 *a drug*는 사물이므로 관계대명사 *that*이 알맞습니다. *that reduces blood pressure*가 약을 설명합니다.

**오답 분석**

• ① *who*는 사람을 설명할 때 씁니다.  
• ② *what*은 앞에 선행사를 두지 않는 명사절 표현입니다.  
• ④ *where*는 장소를 설명하는 관계부사입니다.

**핵심 포인트**

사람은 *who*, 사물은 *which/that*, 장소는 *where*를 우선 떠올립니다.`,
  quiz: [
    {
      prompt: "The number of patients (　　) rapidly after the new clinic opened.",
      choices: ["increase", "increases", "increasing", "have increased"],
      answer: 2,
      explanation: "**해석**\n\n새 병원이 문을 연 뒤 환자 수가 빠르게 증가합니다.\n\n**정답 근거**\n\n주어는 *patients*가 아니라 단수인 *The number*입니다. 현재 시제 3인칭 단수이므로 *increases*가 맞습니다.\n\n**오답 분석**\n\n• ① 복수 주어용 기본형입니다.\n• ③ 동사가 될 수 없는 -ing형입니다.\n• ④ 복수 주어와 어울리는 현재완료입니다.\n\n**핵심 포인트**\n\n\`A of B\`의 수는 A에 맞춥니다."
    },
    {
      prompt: "The medicine must be (　　) in a cool place.",
      choices: ["store", "stored", "storing", "stores"],
      answer: 2,
      explanation: "**해석**\n\n그 약은 서늘한 곳에 보관되어야 합니다.\n\n**정답 근거**\n\n\`must be + 과거분사\`가 수동태입니다. 따라서 *store*의 과거분사 *stored*가 필요합니다.\n\n**오답 분석**\n\n• ① 동사원형이라 수동태가 완성되지 않습니다.\n• ③ -ing형은 이 구조에 맞지 않습니다.\n• ④ 3인칭 단수 현재형입니다.\n\n**핵심 포인트**\n\n조동사와 be동사 뒤의 과거분사를 한 덩어리로 봅니다."
    },
    {
      prompt: "The tablets, which (　　) quickly in water, are easy to take.",
      choices: ["dissolve", "dissolves", "dissolving", "is dissolved"],
      answer: 1,
      explanation: "**해석**\n\n물에서 빨리 녹는 그 정제들은 복용하기 쉽습니다.\n\n**정답 근거**\n\n*which*는 복수 명사 *tablets*를 가리키므로 복수 동사 *dissolve*를 씁니다.\n\n**오답 분석**\n\n• ② 단수 주어용 -s형입니다.\n• ③ 완전한 동사가 아닌 -ing형입니다.\n• ④ 단수 수동태라서 복수 정제와 맞지 않습니다.\n\n**핵심 포인트**\n\n관계대명사절의 동사도 앞 명사의 수를 따릅니다."
    },
    {
      prompt: "The pharmacist explained that the patient (　　) the dose incorrectly.",
      choices: ["take", "takes", "had taken", "taking"],
      answer: 3,
      explanation: "**해석**\n\n약사는 환자가 복용량을 잘못 복용했었다고 설명했습니다.\n\n**정답 근거**\n\n*explained*라는 과거 기준점보다 더 먼저 일어난 일은 과거완료 \`had + 과거분사\`로 나타냅니다. *take*의 과거분사는 *taken*입니다.\n\n**오답 분석**\n\n• ① 현재 기본형이라 시제가 맞지 않습니다.\n• ② 현재형입니다.\n• ④ 동사로 쓸 수 없는 -ing형입니다.\n\n**핵심 포인트**\n\n과거보다 더 이전이면 \`had taken\`을 찾습니다."
    },
    {
      prompt: "다음 중 문법적으로 틀린 문장을 고르세요.",
      choices: ["The researcher recorded the results carefully.", "The researchers records the results carefully.", "The sample was labeled before testing.", "A nurse checked the patient's pulse."],
      answer: 2,
      explanation: "**해석**\n\n연구자나 간호사가 결과, 시료, 맥박을 기록하거나 확인하는 문장입니다.\n\n**정답 근거**\n\n②의 주어 *The researchers*는 복수이므로 동사는 *record*여야 합니다. *records*는 단수 주어에 쓰입니다.\n\n**오답 분석**\n\n• ① 단수 주어와 과거형이 맞습니다.\n• ③ 단수 주어의 수동태가 맞습니다.\n• ④ 단수 주어와 과거형이 맞습니다.\n\n**핵심 포인트**\n\n동사 가까이에 있는 명사가 아니라 문장의 진짜 주어를 확인합니다."
    },
    {
      prompt: "The doctor prescribed a drug (　　) reduces blood pressure.",
      choices: ["who", "what", "that", "where"],
      answer: 3,
      explanation: "**해석**\n\n의사는 혈압을 낮추는 약을 처방했습니다.\n\n**정답 근거**\n\n앞의 명사 *a drug*는 사물이므로 *that*이 이끄는 관계대명사절이 알맞습니다.\n\n**오답 분석**\n\n• ① 사람을 설명하는 *who*입니다.\n• ② 앞 선행사 없이 쓰는 명사절 표현입니다.\n• ④ 장소를 설명하는 관계부사입니다.\n\n**핵심 포인트**\n\n사람은 *who*, 사물은 *which/that*, 장소는 *where*로 구분합니다."
    }
  ]
};
