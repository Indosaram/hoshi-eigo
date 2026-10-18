import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "g03-five-patterns",
  level: 1,
  title: "문장의 5형식",
  summary: "동사의 뒤에 무엇이 필요한지 보고 영어 문장의 뼈대를 읽는다.",
  body: `## 한 줄로 말하면
영어 문장은 동사가 요구하는 자리를 기준으로 1형식부터 5형식까지 나뉘며, 동사 뒤에 목적어가 있는지와 목적어를 설명하는 말이 있는지를 먼저 확인하면 된다.

## 왜 배우나요?
星薬科大学 B方式의 빈칸 문제에서는 동사 뒤에 명사 하나가 필요한지, 목적어 뒤에 설명하는 말이 필요한지를 알아야 선택지를 좁힐 수 있다. 의약 지문에서도 \`The drug reduced pain\`처럼 약이 무엇을 줄였는지 읽고, \`The drug made patients sleepy\`처럼 환자를 어떤 상태로 만들었는지 읽어야 한다. 단어를 하나씩 번역하기보다 문장의 뼈대를 먼저 잡으면 긴 문장의 주체와 영향을 받는 대상을 놓치지 않는다.

## 개념 설명
문장 성분은 문장 안에서 맡은 자리이다. 주어(동작이나 상태의 주인), 동사(동작이나 상태를 나타내는 말), 목적어(동작의 대상), 보어(주어 또는 목적어를 설명해 완성하는 말)를 찾는다. 수식어(시간, 장소, 방법처럼 뼈대에 덧붙는 말)는 5형식의 핵심 자리에 들어가지 않는다.

1형식은 주어와 동사만으로 끝난다. \`The patient slept.\`에서 환자가 잔다는 뜻이 완성된다. 2형식은 주어, 동사, 주격보어의 순서이다. 주격보어(주어가 무엇인지 설명하는 말)는 주어와 같은 대상을 가리킨다. \`The tablet is small.\`에서 tablet과 small은 같은 대상을 설명한다.

3형식은 주어, 동사, 목적어이다. 목적어는 동작을 받으므로 주어와 다른 대상이다. \`The nurse checked the label.\`에서 간호사가 확인한 대상은 label이다. 4형식은 주어, 동사, 간접목적어, 직접목적어이다. 간접목적어(무엇을 받는 사람)와 직접목적어(전달되는 것)가 함께 온다. \`The pharmacist gave the patient advice.\`에서 patient가 받는 사람이고 advice가 전달되는 내용이다.

5형식은 주어, 동사, 목적어, 목적격보어의 순서이다. 목적격보어(목적어가 어떤 것인지 설명하는 말)는 목적어를 설명한다. \`The medicine made him sleepy.\`에서 him과 sleepy는 같은 사람을 가리킨다. 한국어로는 조사와 어순이 비교적 자유롭지만, 영어는 동사 뒤 자리의 순서가 의미를 결정한다. 따라서 먼저 동사를 동그라미 치고, 뒤의 명사가 목적어인지 보어인지 묻는다.

## 형태 정리
| 형식 | 뼈대 | 뒤의 자리 | 핵심 질문 | 예문 |
|---|---|---|---|---|
| 1형식 | S + V | 없음, 수식어는 가능 | 누가 무엇을 했나? | The patient recovered. |
| 2형식 | S + V + C | 주격보어 | 주어는 어떤가, 무엇인가? | The sample is pure. |
| 3형식 | S + V + O | 목적어 | 동작의 대상은 무엇인가? | We measured the dose. |
| 4형식 | S + V + IO + DO | 받는 사람 + 전달물 | 누구에게 무엇을 주나? | She sent me the report. |
| 5형식 | S + V + O + OC | 목적어 설명 | 목적어를 어떤 상태로 만드나? | The drug kept him calm. |

여기서 S는 주어(subject), V는 동사(verb), O는 목적어(object), C는 보어(complement)라는 약자이다. 전치사(명사 앞에서 관계를 보여 주는 말)가 있는지도 살핀다. \`She gave the report to me.\`는 \`to me\`가 전치사구이므로 학교 문법에서는 3형식으로 보는 경우가 많고, \`She gave me the report.\`는 4형식이다.

## 예문으로 익히기
1. **The patient recovered quickly.**  
The patient(주어) / recovered(동사) / quickly(수식어)  
환자는 빠르게 회복했다.  
Note: quickly를 빼도 문장의 뼈대가 남으므로 1형식이다.

2. **The capsule is safe.**  
The capsule(주어) / is(동사) / safe(주격보어: 캡슐 설명)  
그 캡슐은 안전하다.  
Note: safe는 행동의 대상이 아니라 capsule의 상태를 설명한다.

3. **The researcher recorded the temperature.**  
The researcher(주어) / recorded(동사) / the temperature(목적어)  
연구자는 온도를 기록했다.  
Note: recorded의 대상이 the temperature이므로 3형식이다.

4. **The pharmacist gave the customer a receipt.**  
The pharmacist(주어) / gave(동사) / the customer(간접목적어: 받는 사람) / a receipt(직접목적어: 전달물)  
약사는 고객에게 영수증을 주었다.  
Note: 사람 뒤에 물건이 오면 누구에게 무엇을 주는지 확인한다.

5. **The treatment made the patient comfortable.**  
The treatment(주어) / made(동사) / the patient(목적어) / comfortable(목적격보어: 환자 설명)  
그 치료는 환자를 편안하게 했다.  
Note: comfortable은 treatment가 아니라 patient의 상태를 설명한다.

6. **The doctor found the result unusual.**  
The doctor(주어) / found(동사) / the result(목적어) / unusual(목적격보어: 결과 설명)  
의사는 그 결과가 특이하다고 판단했다.  
Note: find가 여기서 발견하다가 아니라 목적어를 어떤 상태라고 판단하다라는 5형식이다.

7. **The nurse opened the window after lunch.**  
The nurse(주어) / opened(동사) / the window(목적어) / after lunch(수식어)  
간호사는 점심 식사 후에 창문을 열었다.  
Note: 시간 표현은 뼈대에 덧붙은 수식어이며 목적격보어가 아니다.

8. **The study showed that the drug reduced inflammation.**  
The study(주어) / showed(동사) / that the drug reduced inflammation(목적어인 명사절: 연구가 보여 준 내용)  
그 연구는 그 약물이 염증을 줄였다는 것을 보여 주었다.  
Note: 목적어가 한 단어가 아니라 절이어도 동사의 대상이면 3형식이다.

## 헷갈리는 포인트 / 자주 하는 실수
1. 보어와 목적어를 바꾸지 않는다. **The medicine is effective**에서 effective는 주어 설명인 보어이다. **The medicine affected the liver**에서 the liver는 영향을 받은 목적어이다.
2. 4형식의 두 목적어 순서를 지킨다. **The nurse gave the patient the dose**는 맞지만 **The nurse gave the dose the patient**는 틀리다. 물건을 먼저 쓰면 **gave the dose to the patient**처럼 to가 필요하다.
3. 5형식의 보어는 목적어를 설명한다. **The news made the patient worried**가 맞고, worried가 news를 설명하는 것으로 읽으면 안 된다.
4. 수식어를 보어로 세지 않는다. **The patient stayed in bed**의 in bed는 장소 수식어이다. stay는 여기서 환자가 침대에 있었다는 1형식으로 읽는다.

## 星薬 기출에서는 이렇게 나온다
B方式 빈칸에서는 먼저 주어와 동사를 찾은 뒤, 동사 뒤 명사의 수를 세면 된다. 예를 들어 **The new drug made the symptoms (　　).**에서는 symptoms가 목적어이고, made가 목적어 뒤 설명을 요구하므로 **less severe** 같은 목적격보어가 들어간다. **The pharmacist gave the patient (　　).**에서는 patient가 받는 사람이므로 그 뒤에는 a leaflet처럼 전달물이 온다. 선택지의 품사를 보기 전에 이 자리부터 정하면 해석 실수가 줄어든다.

## 3줄 요약
1. 1형식은 S+V, 2형식은 S+V+C, 3형식은 S+V+O이다.
2. 4형식은 누구에게 무엇을, 5형식은 목적어를 어떤 상태로이다.
3. 동사 뒤 명사를 찾고, 뒤의 말이 목적어인지 설명인지 확인한다.
`,
  quiz: [
    {
      prompt: "The medicine (　　) the patient's pain.",
      choices: ["reduced", "was reduced", "sleepy", "to the patient"],
      answer: 1,
      explanation: `**해석**\n\n그 약은 환자의 통증을 줄였다.\n\n**정답 근거**\n\n문장의 주어는 The medicine, 목적어는 the patient's pain이다. 동작의 대상이 있으므로 3형식이며, 빈칸에는 동사 reduced가 필요하다.\n\n**오답 분석**\n\n• 2번 was reduced는 수동태라 뒤의 pain을 주어처럼 만들며 문장 뜻이 어색하다.\n• 3번 sleepy는 형용사라 동사 자리에 올 수 없다.\n• 4번 to the patient는 전치사구라 통증을 줄이는 동사가 되지 못한다.\n\n**핵심 포인트**\n\nS+V+O에서 V 뒤에 동작의 대상을 찾는다.`,
      lessonIds: ["g03-five-patterns"]
    },
    {
      prompt: "The sample remained (　　) after storage.",
      choices: ["stable", "the technician", "the sample", "stabilize"],
      answer: 1,
      explanation: `**해석**\n\n그 시료는 보관 후에도 안정된 상태로 남았다.\n\n**정답 근거**\n\nremain은 주어의 상태를 이어 주는 2형식 동사이다. 따라서 주어 The sample을 설명하는 주격보어 stable이 필요하다. after storage는 시간 수식어이다.\n\n**오답 분석**\n\n• 2번 the technician은 사람 명사라 시료의 상태를 설명하지 않는다.\n• 3번 the sample은 주어를 반복할 뿐 보어가 아니다.\n• 4번 stabilize는 동사 원형이라 remain 뒤의 보어 자리에 맞지 않는다.\n\n**핵심 포인트**\n\nbe, become, remain처럼 상태를 잇는 동사 뒤에는 주어를 설명하는 말이 온다.`,
      lessonIds: ["g03-five-patterns"]
    },
    {
      prompt: "The pharmacist gave the patient (　　).",
      choices: ["a dosage chart", "carefully", "healthy", "to recover"],
      answer: 1,
      explanation: `**해석**\n\n약사는 환자에게 복용량 표를 주었다.\n\n**정답 근거**\n\ngave는 사람에게 물건을 주는 4형식으로 쓸 수 있다. the patient는 간접목적어, 빈칸의 a dosage chart는 직접목적어가 된다.\n\n**오답 분석**\n\n• 2번 carefully는 방법을 나타내는 부사라 전달되는 물건이 아니다.\n• 3번 healthy는 형용사라 gave 뒤의 물건 자리에 맞지 않는다.\n• 4번 to recover는 목적을 나타내는 to부정사로 영수증이나 표가 아니다.\n\n**핵심 포인트**\n\nS+V+사람+물건은 누구에게 무엇을 주는지 나타내는 4형식이다.`,
      lessonIds: ["g03-five-patterns"]
    },
    {
      prompt: "The treatment made the patient (　　).",
      choices: ["comfortable", "a nurse", "to the clinic", "comfort"],
      answer: 1,
      explanation: `**해석**\n\n그 치료는 환자를 편안하게 했다.\n\n**정답 근거**\n\nmade 뒤의 the patient는 목적어이고, 그 뒤에는 환자의 상태를 설명하는 목적격보어가 필요하다. comfortable은 형용사로 patient의 상태를 설명하므로 5형식이 완성된다.\n\n**오답 분석**\n\n• 2번 a nurse는 환자를 간호사로 만들었다는 뜻이 되어 문맥상 맞지 않다.\n• 3번 to the clinic은 장소 전치사구라 환자의 상태를 설명하지 않는다.\n• 4번 comfort는 동사 또는 명사라 이 자리의 상태 설명에 적절하지 않다.\n\n**핵심 포인트**\n\nmake+목적어+형용사는 목적어를 어떤 상태로 만든다는 5형식이다.`,
      lessonIds: ["g03-five-patterns"]
    },
    {
      prompt: "다음 밑줄 친 부분 중 문법적으로 틀린 것을 고르시오. The report <u>gave</u> <u>the doctor</u> <u>useful information</u> <u>yesterdayly</u>.",
      choices: ["gave", "the doctor", "useful information", "yesterday"],
      answer: 4,
      explanation: `**해석**\n\n그 보고서는 어제 의사에게 유용한 정보를 주었다.\n\n**정답 근거**\n\n문장은 The report가 주어, gave가 동사, the doctor가 받는 사람, useful information이 전달물인 4형식이다. 시간을 나타내는 부사는 yesterday라고 써야 하므로 yesterdayly가 틀렸다.\n\n**오답 분석**\n\n• 1번 gave는 과거 동사로 문장에 맞다.\n• 2번 the doctor는 간접목적어로 자연스럽다.\n• 3번 useful information은 직접목적어이며 information은 셀 수 없는 명사이다.\n• 4번 yesterdayly는 영어에서 쓰지 않는 부사 형태이다. yesterday가 올바른 표현이다.\n\n**핵심 포인트**\n\n4형식의 뼈대가 맞아도 수식어의 단어 형태를 확인한다. yesterday는 자체로 시간 부사이다.`,
      lessonIds: ["g03-five-patterns"]
    },
    {
      prompt: "The researchers found the new compound (　　) in water.",
      choices: ["soluble", "a bottle", "to the laboratory", "solubility"],
      answer: 1,
      explanation: `**해석**\n\n연구자들은 새로운 화합물이 물에 녹는다고 판단했다.\n\n**정답 근거**\n\nfound는 여기서 발견했다가 아니라 목적어를 어떤 상태라고 판단했다는 뜻이다. the new compound가 목적어이므로 그 상태를 설명하는 형용사 soluble이 목적격보어로 온다. in water는 용해되는 조건을 덧붙인다.\n\n**오답 분석**\n\n• 2번 a bottle은 화합물을 설명하는 상태가 아니라 용기 명사이다.\n• 3번 to the laboratory는 장소 이동을 나타내며 목적어의 상태를 설명하지 않는다.\n• 4번 solubility는 용해도라는 명사라 found 뒤의 목적격보어로 의미가 맞지 않는다.\n\n**핵심 포인트**\n\nfind+목적어+형용사는 목적어를 어떤 상태라고 판단하는 5형식 표현이다.`,
      lessonIds: ["g03-five-patterns"]
    }
  ]
};
