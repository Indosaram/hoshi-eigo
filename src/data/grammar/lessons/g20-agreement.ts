import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "g20-agreement",
  level: 3,
  title: "수일치·시제일치",
  summary: "주어의 수에 맞춰 동사를 고르고, 주절의 시계에 맞춰 종속절의 시제를 읽는다.",
  body: String.raw`## 한 줄로 말하면
주어의 수에 동사를 맞추고, 과거 주절 뒤에서는 종속절의 시점을 맞춥니다.

## 왜 배우나요?
星薬科大学 B方式의 빈칸과 오류 찾기에서는 긴 명사구 사이에 주어를 숨기고 동사의 단복수를 묻습니다. 의약 지문에서는 *The results of the experiment show*처럼 주어와 동사가 떨어진 문장이 나옵니다. 과거 보고를 읽을 때는 *The paper stated that the drug was safe*처럼 시제일치로 사건 순서를 확인합니다.

## 개념 설명
수일치(주어의 수와 동사의 형태를 맞추는 규칙)부터 봅니다. 단수 주어이면 현재 일반동사에 보통 **s**, 복수이면 동사 원형을 씁니다. *The patient takes*, *The patients take*처럼 구별합니다. be동사는 단수 현재 **is**, 복수 현재 **are**, 단수 과거 **was**, 복수 과거 **were**입니다.

전치사구(명사 뒤에 붙어 관계를 알려 주는 말)나 관계대명사절(앞 명사를 설명하는 절)에 속지 마세요. *The level of glucose is high*에서 주어는 level입니다. *The tablets that contain iron are useful*에서는 tablets입니다.

집합명사(여러 사람이나 사물을 한 덩어리로 부르는 명사)는 문맥을 봅니다. *The team is ready*처럼 한 조직이면 단수입니다. each, every, either, neither 뒤도 단수입니다. **a number of + 복수명사**는 복수, **the number of + 복수명사**는 단수 동사를 씁니다.

시제일치(주절과 종속절의 시점을 맞추는 규칙)는 주절이 과거인지 먼저 확인합니다. 주절(문장의 중심 절)이 과거이고 that절(말하거나 생각한 내용을 담은 절)이 당시 사실을 전하면 현재가 과거로 한 칸 물러납니다. *The doctor says that the medicine works*는 *The doctor said that the medicine worked*가 됩니다. 과거완료(과거보다 더 앞선 일, had + 과거분사)는 기준 시점보다 먼저 일어난 일에 씁니다. 지금도 변하지 않는 과학적 사실은 현재형을 유지할 수 있습니다. *The textbook explained that water boils at 100°C*가 그 예입니다.

## 형태 정리

| 주어 또는 시점 | 올바른 형태 | 예문 |
|---|---|---|---|
| 단수 주어, 현재 일반동사 | 동사 + s | The nurse checks the dose. |
| 복수 주어, 현재 일반동사 | 동사 원형 | The nurses check the dose. |
| 단수 be동사 | is / was | The sample is stable. |
| 복수 be동사 | are / were | The samples are stable. |
| each, every, neither | 단수 동사 | Each tablet contains zinc. |
| a number of + 복수명사 | 복수 동사 | A number of patients report pain. |
| the number of + 복수명사 | 단수 동사 | The number of patients is rising. |
| 과거 주절 뒤의 과거 사실 | 과거형 | She said that he was ill. |
| 더 먼저 일어난 일 | had + 과거분사 | She said that he had left. |

## 예문으로 익히기

1. **The pharmacist checks the prescription carefully.**  
The pharmacist(주어) / checks(동사) / the prescription(목적어) / carefully(부사)  
약사는 처방전을 주의 깊게 확인한다.  
한 명인 pharmacist가 주어이므로 check가 아니라 checks입니다.

2. **The effects of this drug are mild.**  
The effects(주어) / of this drug(전치사구) / are(동사) / mild(보어)  
이 약의 효과들은 가볍다.  
of 뒤의 drug가 아니라 주어 effects가 복수라서 are를 씁니다.

3. **Each of the volunteers receives one capsule.**  
Each(주어) / of the volunteers(전치사구) / receives(동사) / one capsule(목적어)  
지원자들은 한 명씩 캡슐 하나를 받는다.  
volunteers는 복수지만 Each가 한 명씩을 가리켜 receives가 됩니다.

4. **A number of patients report nausea after treatment.**  
A number of patients(주어) / report(동사) / nausea(목적어) / after treatment(시간을 나타내는 말)  
많은 환자가 치료 후 메스꺼움을 보고한다.  
a number of는 여러 명이라는 뜻이므로 복수 동사 report를 씁니다.

5. **The study that examines blood pressure is useful.**  
The study(주어) / that examines blood pressure(관계대명사절: 연구를 설명) / is(동사) / useful(보어)  
혈압을 검사하는 그 연구는 유용하다.  
주어 study가 단수라서 is입니다.

6. **The doctor said that the patient had taken the wrong dose.**  
The doctor(주어) / said(동사) / that the patient had taken the wrong dose(의사가 말한 내용)  
의사는 환자가 잘못된 용량을 복용했다고 말했다.  
복용이 먼저 끝났으므로 had taken입니다.

7. **The textbook explains that bacteria can become resistant.**  
The textbook(주어) / explains(동사) / that bacteria can become resistant(설명 내용)  
교과서는 세균의 내성을 설명한다.  
일반적 과학 사실은 현재형이 자연스럽습니다.

8. **The researchers found that the compound was stable at room temperature.**  
The researchers(주어) / found(동사) / that the compound was stable at room temperature(발견 내용)  
연구자들은 그 화합물이 실온에서 안정적이었다고 했다.  
과거에 얻은 결과를 보고하므로 found 뒤의 당시 상태는 was로 한 칸 물립니다.

## 헷갈리는 포인트 / 자주 하는 실수

1. **The list of ingredients contain sugar.**는 틀립니다. **The list of ingredients contains sugar.**가 맞습니다. 주어는 ingredients가 아니라 단수인 list입니다.

2. **Each patients receives a label.**는 틀립니다. **Each patient receives a label.**처럼 each 뒤 명사는 단수입니다.

3. **The number of errors are small.**는 틀립니다. **The number of errors is small.**에서 number가 하나의 수입니다. *A number of errors are found*와 구별하세요.

4. **She said that the test is completed yesterday.**는 틀립니다. **She said that the test was completed the day before.**처럼 과거 보고와 yesterday의 기준을 맞춥니다. 단, 변하지 않는 과학 법칙은 현재형을 유지할 수 있습니다.

## 星薬 기출에서는 이렇게 나온다

먼저 주어의 중심 명사를 찾습니다. *The concentration of active ingredients (　　) higher in this sample than in the control.*에서는 ingredients가 아니라 concentration이 주어이므로 **is**입니다. *The researcher reported that the patients (　　) recovered after the treatment.*에서는 회복이 보고보다 먼저라는 단서가 있으면 **had recovered**를 고릅니다. 오류 찾기에서는 each, the number of, 전치사구를 표시하세요.

## 3줄 요약

1. 동사는 주어의 중심 명사와 수를 맞춥니다.
2. each와 every는 단수, a number of는 복수, the number of는 단수입니다.
3. 과거 주절 뒤에서는 당시의 사실을 과거로, 그보다 앞선 일은 과거완료로 읽습니다.
`,
  quiz: [
    {
      prompt: "The number of patients with asthma (　　) increasing every year.",
      choices: ["are", "is", "were", "have"],
      answer: 2,
      explanation: `**해석**\n천식이 있는 환자의 수는 매년 증가하고 있다.\n\n**정답 근거**\n주어는 patients가 아니라 ‘환자의 수’라는 하나의 개념인 **The number**입니다. 따라서 단수 동사 is가 필요하고, 뒤의 increasing과 함께 현재진행형 **is increasing**을 만듭니다.\n\n**오답 분석**\n1. are는 복수 주어에 씁니다.\n3. were는 과거형이라 every year와 맞지 않습니다.\n4. have는 복수 주어용이며 increasing 앞에 올 수 없습니다.\n\n**핵심 포인트**\n**the number of + 복수명사**는 단수 동사를 취합니다.`,
    },
    {
      prompt: "Each of the tablets (　　) a different color.",
      choices: ["have", "are having", "has", "contain"],
      answer: 3,
      explanation: `**해석**\n그 정제들은 각각 다른 색을 가지고 있다.\n\n**정답 근거**\n주어의 중심은 tablets가 아니라 각각을 뜻하는 **Each**입니다. Each는 단수 취급하므로 현재형 동사 have에 s를 붙인 **has**가 정답입니다. a different color는 has의 목적어입니다.\n\n**오답 분석**\n1. have는 복수 주어에 쓰므로 Each와 맞지 않습니다.\n2. are having은 진행형이며 색처럼 상태를 말하는 문장에도 맞지 않습니다.\n4. contain은 복수 동사이고 뜻도 ‘포함하다’라서 문맥에 맞지 않습니다.\n\n**핵심 포인트**\n**each of + 복수명사**의 동사는 each에 맞춥니다.`,
    },
    {
      prompt: "The pharmacist explained that the medicine (　　) safe at the recommended dose.",
      choices: ["is", "was", "has", "will"],
      answer: 2,
      explanation: `**해석**\n약사는 그 약이 권장 용량에서 안전했다고 설명했다.\n\n**정답 근거**\n주절의 explained가 과거입니다. that절은 약사가 설명한 당시의 상태를 나타내므로 현재형 is가 과거형 **was**로 한 칸 물러납니다. safe는 형용사라서 be동사가 필요합니다.\n\n**오답 분석**\n1. is는 지금도 변하지 않는 사실이라는 문맥이 있을 때 가능하지만, 이 문장은 당시 설명을 묻습니다.\n3. has 뒤에 safe만 올 수 없고 완료형도 되지 않습니다.\n4. will은 미래 의미라 과거 보고와 맞지 않습니다.\n\n**핵심 포인트**\n과거 주절 뒤의 당시 상태는 보통 과거형으로 씁니다.`,
    },
    {
      prompt: "다음 밑줄 친 부분 중 어법상 틀린 것을 고르시오.\nThe results of the clinical trial <u>shows</u> that the treatment <u>reduces</u> pain and <u>improves</u> sleep.",
      choices: ["shows", "reduces", "improves", "틀린 부분 없음"],
      answer: 1,
      explanation: `**해석**\n임상시험 결과는 그 치료가 통증을 줄이고 수면을 개선한다는 것을 보여 준다.\n\n**정답 근거**\n주어는 results로 복수입니다. of the clinical trial은 results를 설명하는 전치사구이므로 동사의 수를 바꾸지 않습니다. 따라서 show가 맞고 shows는 틀립니다. reduces와 improves는 that절의 주어 treatment가 단수라서 올바릅니다.\n\n**오답 분석**\n2. treatment가 단수이므로 reduces가 맞습니다.\n3. treatment가 단수이고 and로 연결된 동사이므로 improves가 맞습니다.\n4. shows에 분명한 수일치 오류가 있어 해당하지 않습니다.\n\n**핵심 포인트**\n**of + 명사**에 시선을 빼앗기지 말고 주어의 중심 명사를 찾습니다.`,
    },
    {
      prompt: "The scientist said that the samples (　　) before the machine was repaired.",
      choices: ["freeze", "have frozen", "had frozen", "will freeze"],
      answer: 3,
      explanation: `**해석**\n과학자는 기계가 수리되기 전에 샘플들이 얼었다고 말했다.\n\n**정답 근거**\nsaid가 과거이고, 샘플이 언 것은 기계가 수리된 것보다도 먼저입니다. 과거 기준점보다 앞선 일을 나타내는 과거완료 **had frozen**이 알맞습니다. samples가 복수여도 had는 모든 주어에 같은 형태입니다.\n\n**오답 분석**\n1. freeze는 현재형이라 과거 보고와 시간 관계를 나타내지 못합니다.\n2. have frozen은 현재완료라 said의 과거 기준과 어울리지 않습니다.\n4. will freeze는 미래 의미로 before절의 과거 사건과 맞지 않습니다.\n\n**핵심 포인트**\n과거 사건 두 개 중 더 먼저 일어난 사건에는 **had + 과거분사**를 씁니다.`,
    },
    {
      prompt: "A number of volunteers (　　) nausea after taking the new capsule.",
      choices: ["reports", "report", "is reporting", "has reported"],
      answer: 2,
      explanation: `**해석**\n많은 지원자가 새 캡슐을 복용한 뒤 메스꺼움을 보고한다.\n\n**정답 근거**\n**a number of + 복수명사**는 여러 명 또는 여러 개라는 뜻입니다. 실제 주어는 volunteers이므로 복수 동사 **report**를 씁니다. after taking은 복용한 뒤라는 시간 표현이고, 동사의 수를 결정하지 않습니다.\n\n**오답 분석**\n1. reports는 단수 주어용입니다.\n3. is reporting은 단수 be동사라 volunteers와 맞지 않습니다.\n4. has reported도 단수 주어용이며 이 문장의 일반적 보고와 시제도 다릅니다.\n\n**핵심 포인트**\n**a number of**는 복수, **the number of**는 단수라는 짝을 기억합니다.`,
    },
  ],
};
