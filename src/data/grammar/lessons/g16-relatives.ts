import type { Lesson } from "../../types";

const explanations = [
  "**해석**\n\n새 화합물을 발견한 과학자는 상을 받았다.\n\n**정답 근거**\n\n정답은 1번 who입니다. scientist는 사람이고, who 뒤의 discovered에서 발견한 주체이므로 사람 주격이 필요합니다.\n\n**오답 분석**\n\n* 2번 whom은 목적격이라 주체가 될 수 없습니다.\n* 3번 whose는 뒤에 소유되는 명사가 필요합니다.\n* 4번 what은 앞에 선행사를 두지 않습니다.\n\n**핵심 포인트**\n\n사람 선행사가 관계절의 주어이면 who를 씁니다.",
  "**해석**\n\n의사가 처방한 약은 환자의 열을 낮췄다.\n\n**정답 근거**\n\n정답은 2번 which입니다. medicine은 사물이고 the doctor가 이미 주어이므로 prescribed의 목적어인 medicine을 대신합니다.\n\n**오답 분석**\n\n* 1번 who는 사람용입니다.\n* 3번 whose는 소유 표현입니다.\n* 4번 where는 장소용입니다.\n\n**핵심 포인트**\n\n사물 목적격 관계대명사는 which이며 that 또는 생략도 가능합니다.",
  "**해석**\n\n환자의 혈압을 확인한 간호사는 결과를 차트에 기록했다.\n\n**정답 근거**\n\n정답은 1번 which입니다. nurse는 사람이고 checked의 주어이므로 who가 맞습니다.\n\n**오답 분석**\n\n* 2번 recorded는 nurse에 맞는 동사입니다.\n* 3번 in은 차트 안이라는 장소입니다.\n* 4번 carefully는 recorded를 꾸밉니다.\n\n**핵심 포인트**\n\n선행사의 사람·사물과 관계절의 역할을 함께 봅니다.",
  "**해석**\n\n치료 후 증상이 호전된 환자는 집으로 돌아갔다.\n\n**정답 근거**\n\n정답은 3번 whose입니다. patient와 symptoms는 ‘환자의 증상’이라는 소유 관계이고, whose 뒤에 symptoms가 옵니다.\n\n**오답 분석**\n\n* 1번 who는 소유를 만들 수 없습니다.\n* 2번 which는 whose symptoms의 의미가 아닙니다.\n* 4번 whom은 목적격입니다.\n\n**핵심 포인트**\n\n‘누구의 무엇’은 whose + 명사입니다.",
  "**해석**\n\n200명의 환자를 포함한 그 임상시험은 유용한 자료를 냈다.\n\n**정답 근거**\n\n정답은 3번 which입니다. trial은 사물이고 쉼표 사이에서 included의 주어가 됩니다. 쉼표 뒤에는 that을 쓰지 않습니다.\n\n**오답 분석**\n\n* 1번 that은 쉼표 뒤 계속적 용법에 쓸 수 없습니다.\n* 2번 who는 사람용입니다.\n* 4번 whose 뒤에는 소유 명사가 필요합니다.\n\n**핵심 포인트**\n\n쉼표가 있는 사물의 추가 설명은 which입니다.",
  "**해석**\n\n우리가 어제 수집한 샘플들은 낮은 온도에서 보관되었다.\n\n**정답 근거**\n\n정답은 2번 that입니다. samples는 사물이고 we가 관계절의 주어이므로 collected의 목적어를 대신합니다.\n\n**오답 분석**\n\n* 1번 who는 사람용입니다.\n* 3번 whose는 뒤에 명사가 필요합니다.\n* 4번 where는 장소용입니다.\n\n**핵심 포인트**\n\n사물 뒤에 주어가 이미 있으면 목적격 that을 찾습니다."
];

export const lesson: Lesson = {
  id: "g16-relatives",
  level: 3,
  title: "관계대명사 who, which, that, whose",
  summary: "앞의 명사를 뒤에서 설명하는 절을 붙여 긴 의약 문장의 뼈대를 찾는다.",
  body: String.raw`## 한 줄로 말하면
관계대명사는 앞의 명사인 선행사(뒤에서 설명을 받는 명사)를 뒤의 설명절과 연결하고, 그 절 안에서 선행사의 자리를 대신합니다.

## 왜 배우나요?
星薬科大学 B方式 지문은 약물, 환자, 연구를 한 문장에 겹쳐 설명합니다. 관계대명사절의 시작을 찾으면 긴 문장을 “무엇이 어떤 것인지”와 “무슨 동작을 하는지”로 나눌 수 있습니다. 빈칸에서는 사람인지 사물인지, 관계대명사가 주어인지 목적어인지가 정답을 가릅니다. 오류 찾기와 어순 문제도 관계대명사 뒤에 주어와 동사가 갖춰졌는지 확인하면 풀립니다.

## 개념 설명
관계대명사절(선행사를 자세히 설명하는 작은 문장)은 선행사 뒤에 옵니다. 한국어의 “내가 만난 의사”처럼 영어도 먼저 the doctor를 말하고 뒤에 who I met를 붙입니다. 사람은 who, 사물은 which를 기본으로 하며, 사람과 사물 모두 that을 쓸 수 있습니다. 소유를 나타내는 whose는 사람과 사물 모두에 쓰이고 바로 뒤에 명사가 옵니다.

관계대명사가 절의 주어(동작을 하는 말)이면 생략할 수 없습니다. the nurse who checked the patient에서 who가 checked의 주어입니다. 목적어(동작의 대상)이면 생략할 수 있습니다. the drug which the doctor prescribed에서 the doctor가 주어이고 drug가 prescribed의 대상입니다. 따라서 관계대명사 뒤에 이미 주어와 동사가 있으면 목적격일 가능성이 큽니다.

## 형태 정리

| 선행사 | 관계대명사 | 역할 | 실제 표현 |
|---|---|---|---|
| 사람 | who | 주어·목적어 | the doctor who works here |
| 사물 | which | 주어·목적어 | the drug which reduced pain |
| 사람·사물 | that | 주어·목적어 | the test that we used |
| 사람·사물의 소유 | whose + 명사 | 소유 | the patient whose dose fell |
| 목적어 | who/which/that 생략 가능 | 목적어 | the sample (that) we tested |

쉼표가 있으면 추가 설명입니다. The drug, which was expensive, was effective.처럼 이미 특정된 약에 정보를 덧붙일 때는 that을 쓰지 않습니다. The drug that was expensive was effective.는 여러 약 중 비싼 약을 골라 말하는 제한적 설명입니다.

## 예문으로 익히기

1. **The doctor who helped me was kind.**  
The doctor(선행사·주어) / who helped me(관계대명사절·의사를 설명) / was(동사) / kind(보어)  
나를 도와준 의사는 친절했다.  
주의: who가 helped의 주어입니다.

2. **I bought the book that you recommended.**  
I(주어) / bought(동사) / the book(선행사·목적어) / that you recommended(책을 설명)  
나는 네가 추천한 책을 샀다.  
주의: you가 주어이므로 that은 목적어입니다.

3. **The pharmacist whose advice was clear answered me.**  
The pharmacist(주어) / whose advice was clear(약사를 설명) / answered(동사) / me(목적어)  
조언이 명확했던 약사가 내게 답했다.  
주의: whose 뒤에는 advice라는 명사가 옵니다.

4. **The vaccine which prevents infection is stored cold.**  
The vaccine(주어) / which prevents infection(백신을 설명) / is stored(동사) / cold(상태)  
감염을 예방하는 백신은 차갑게 보관된다.  
주의: 사물 주격은 which입니다.

5. **The patient that the nurse examined had a fever.**  
The patient(주어) / that the nurse examined(환자를 설명) / had(동사) / a fever(목적어)  
간호사가 진찰한 환자는 열이 있었다.  
주의: that은 examined의 목적어입니다.

6. **The tablet, which is easy to swallow, contains iron.**  
The tablet(주어) / which is easy to swallow(추가 설명) / contains(동사) / iron(목적어)  
그 정제는 삼키기 쉽고 철분을 함유한다.  
주의: 쉼표 뒤 추가 설명에는 that을 쓰지 않습니다.

7. **She visited a clinic that treats chronic pain.**  
She(주어) / visited(동사) / a clinic(선행사·목적어) / that treats chronic pain(병원을 설명)  
그녀는 만성 통증을 치료하는 병원을 방문했다.  
주의: that이 treats의 주어라 생략할 수 없습니다.

8. **Researchers tested a compound whose effects lasted six hours.**  
Researchers(주어) / tested(동사) / a compound(목적어) / whose effects lasted six hours(화합물을 설명)  
연구자들은 효과가 6시간 지속된 화합물을 시험했다.  
주의: compound의 효과라는 소유 관계입니다.

## 헷갈리는 포인트 / 자주 하는 실수

1. 사람에게 which를 쓰지 않습니다. The nurse which helped me가 아니라 The nurse who helped me입니다.

2. 관계대명사와 목적어 대명사를 겹치지 않습니다. The drug that the doctor prescribed it은 틀리고, it을 빼야 합니다.

3. 주격은 생략하지 않습니다. the medicine that treats pain에서 that은 treats의 주어입니다. 반면 the medicine that the doctor prescribed는 목적격이라 생략할 수 있습니다.

4. whose 뒤에는 명사가 필요합니다. the patient whose symptoms improved는 맞지만 whose improved는 틀립니다.

5. 쉼표 뒤 that은 피합니다. The drug, which was tested,가 맞습니다.

## 星薬 기출에서는 이렇게 나온다

B方式 빈칸은 The researcher studied the drug (　　) reduced inflammation.처럼 나옵니다. drug는 사물이고 뒤에 동사 reduced가 바로 오므로 주격 which 또는 that을 고릅니다. The drug (　　) the researcher studied라면 researcher가 주어이므로 목적격 which, that, 또는 생략입니다. 오류 찾기에서는 The patient who the nurse examined him처럼 관계대명사와 him이 같은 자리를 두 번 차지한 문장을 잡습니다.

## 3줄 요약

1. 사람은 who, 사물은 which, 둘 다 that, 소유는 whose + 명사입니다.
2. 뒤에 동사가 바로 오면 주격이라 생략하지 않고, 주어가 먼저면 목적격이라 생략할 수 있습니다.
3. 쉼표 뒤에는 that을 쓰지 않고, 관계대명사와 목적어 대명사를 겹치지 않습니다.`,
  quiz: [
    { prompt: "The scientist (　　) discovered the new compound received an award.", choices: ["who", "whom", "whose", "what"], answer: 1, explanation: explanations[0], lessonIds: ["g16-relatives"] },
    { prompt: "The medicine (　　) the doctor prescribed reduced the patient's fever.", choices: ["who", "which", "whose", "where"], answer: 2, explanation: explanations[1], lessonIds: ["g16-relatives"] },
    { prompt: "The nurse <u>which</u> checked the patient's blood pressure recorded the result.", choices: ["which", "checked", "recorded", "result"], answer: 1, explanation: explanations[2], lessonIds: ["g16-relatives"] },
    { prompt: "The patient (　　) symptoms improved after treatment returned home.", choices: ["who", "which", "whose", "whom"], answer: 3, explanation: explanations[3], lessonIds: ["g16-relatives"] },
    { prompt: "The trial, (　　) included 200 patients, produced useful data.", choices: ["that", "who", "which", "whose"], answer: 3, explanation: explanations[4], lessonIds: ["g16-relatives"] },
    { prompt: "The samples (　　) we collected yesterday were stored at low temperature.", choices: ["who", "that", "whose", "where"], answer: 2, explanation: explanations[5], lessonIds: ["g16-relatives"] }
  ]
};
