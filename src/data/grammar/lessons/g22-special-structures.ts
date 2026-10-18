import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "g22-special-structures",
  level: 3,
  title: "도치, 강조, 생략, 부정",
  summary: "어순이 바뀌거나 일부가 생략된 특수 구문을 원래 문장으로 되돌려 읽는다.",
  body: `## 한 줄로 말하면
도치, 강조, 생략, 부정은 문장의 핵심 정보나 대비를 눈에 띄게 만드는 장치이므로, 낯선 어순을 보면 먼저 평서문으로 되돌려 읽습니다.

## 왜 배우나요?
星薬科大学 B方式 지문은 약물 연구나 환자 치료의 결과를 대조합니다. **Only after the trial did the researchers change the dose.**처럼 부사구가 앞에 오면 조동사와 주어의 순서를 묻습니다. **It was the lower dose that reduced nausea.**는 강조를 보여 줍니다. 부정어 뒤 도치와 do의 유무를 확인하면 빈칸, 오류, 정렬 문제를 함께 풀 수 있습니다.

## 개념 설명
**도치(inversion, 주어와 동사의 순서를 바꾸는 것)**는 질문이 아닌데도 동사가 주어보다 먼저 오는 현상입니다. **The nurse did not leave until midnight.**는 **Not until midnight did the nurse leave.**로 바뀝니다. 부정어 또는 제한어(범위를 좁히는 말)가 앞에 오면 조동사(시제나 가능성을 돕는 동사)가 주어 앞에 옵니다. **Never has the patient missed a dose.**에서 has가 앞선 이유입니다.

**강조(emphasis, 특정 부분을 두드러지게 하는 것)**에는 it-cleft와 do 강조가 자주 나옵니다. **It was the pharmacist who explained the label.**의 it은 형식상의 주어이고, 강조 대상은 the pharmacist입니다. **did explain**처럼 did 뒤에는 동사원형이 옵니다.

**생략(ellipsis, 반복되는 말을 빼는 것)**은 문장을 짧게 합니다. **The first tablet caused dizziness, and the second did, too.**에서 동사 caused dizziness가 생략되었습니다. **When ready**는 **When it is ready**에서 주어와 be동사가 빠진 형태입니다. 문맥으로 빠진 말을 복원합니다.

**부정(negation, 사실이 아님을 나타내는 것)**은 not, never, no, neither로 만듭니다. **no**는 명사 앞에, **not**은 동사나 형용사 앞에 옵니다. 과거 일반동사 부정은 **did not + 동사원형**입니다. **Neither the doctor nor the nurse was available.**처럼 가까운 주어의 수를 확인합니다.

## 형태 정리
| 기능 | 핵심 형태 | 실제 예문 |
|---|---|---|
| 제한 도치 | Only after + 절 + do/did + 주어 + 동사 | Only then did she agree. |
| 부정 도치 | Never/Rarely + 조동사 + 주어 + 동사 | Never has he omitted a dose. |
| it 강조 | It is/was + 대상 + that/who + 절 | It was the nurse who called. |
| do 강조 | do/does/did + 동사원형 | She did follow the advice. |
| 부정 | did not + 동사원형, neither A nor B | The drug did not work. |
| 생략 | When + p.p. + 주절 | When stored cold, the sample lasts longer. |

## 예문으로 익히기
1. **Only after the meal did the patient take the capsule.**  Only after the meal(식사 후에야) / did(도치 조동사) / the patient(주어) / take(동사원형) / the capsule(목적어). 자연스러운 해석: 환자는 식사 후에야 캡슐을 먹었다. 메모: did 뒤 동사는 take입니다.
2. **Never has the doctor ignored a serious symptom.**  Never(결코) / has(조동사) / the doctor(주어) / ignored(과거분사) / a serious symptom(목적어). 자연스러운 해석: 그 의사는 심각한 증상을 결코 무시한 적이 없다. 메모: has가 도치되었습니다.
3. **It was the cold storage that preserved the vaccine.**  It was(강조 틀) / the cold storage(강조 대상) / that(연결어) / preserved(동사) / the vaccine(목적어). 자연스러운 해석: 백신을 보존한 것은 냉장 보관이었다. 메모: it은 강조 틀입니다.
4. **The pharmacist did check the expiration date.**  The pharmacist(주어) / did(강조) / check(동사원형) / the expiration date(목적어). 자연스러운 해석: 약사는 유효기간을 분명히 확인했다. 메모: did 뒤는 원형입니다.
5. **When mixed with water, the powder becomes cloudy.**  When mixed with water(when it is mixed의 생략: 물과 섞이면) / the powder(주어) / becomes(동사) / cloudy(보어). 자연스러운 해석: 물과 섞이면 그 가루는 흐려진다. 메모: 생략된 주어는 주절의 the powder와 같아야 합니다.
6. **Neither the tablet nor the syrup was given to the child.**  Neither the tablet nor the syrup(정말 주어: 정제도 시럽도) / was given(수동태 동사) / to the child(대상). 자연스러운 해석: 그 아이에게 정제도 시럽도 주어지지 않았다. 메모: 가까운 syrup이 단수라 was입니다.
7. **Rarely do people read every warning on a medicine label.**  Rarely(좀처럼, 부정에 가까운 부사) / do(도치 조동사) / people(주어) / read(동사원형) / every warning(목적어). 자연스러운 해석: 사람들은 약 라벨의 모든 경고를 좀처럼 읽지 않는다. 메모: 일반동사 read를 위해 do가 필요합니다.
8. **The first scan showed no lesion, and the second did, too.**  The first scan(주어) / showed(동사) / no lesion(목적어) / and / the second(주어) / did(앞의 showed를 대신하는 생략) / too(또한). 자연스러운 해석: 첫 번째 스캔은 병변을 보이지 않았고 두 번째도 그랬다. 메모: did 뒤에 showed가 반복되지 않았습니다.

## 헷갈리는 포인트 / 자주 하는 실수
1. 부정어 도치에서 조동사를 빼면 안 됩니다. **Never the patient missed a dose.**는 틀리고, **Never did the patient miss a dose.**가 맞습니다.
2. do 강조 뒤에는 동사원형을 씁니다. **The nurse did checked the pulse.**는 틀리고, **The nurse did check the pulse.**가 맞습니다. did가 이미 과거를 표시합니다.
3. 제한어가 문장 앞에 없으면 일반 어순입니다. **Only after the test did he rest.**는 맞지만, **After the test did he rest.**는 보통 틀립니다.
4. neither A nor B의 동사를 무조건 복수로 쓰지 않습니다. **Neither the doctor nor the nurses was ready.**는 틀리고, **Neither the doctor nor the nurses were ready.**가 맞습니다. 가까운 nurses에 맞춥니다.
5. 분사 생략의 주어를 바꾸면 뜻이 어색해집니다. **When stored properly, the technician labels the sample.**은 technician이 보관된 것처럼 읽힙니다. 주절 주어를 보관 대상과 맞춥니다.

## 星薬 기출에서는 이렇게 나온다
B方式 빈칸은 **Only after the results were reviewed (　　) the team approve the new dose.**처럼 제한어와 도치를 한꺼번에 확인하게 합니다. 주어 the team 앞에 did를 넣고, did 뒤에는 approve 원형을 고릅니다. 먼저 Only after를 표시하고, 문장을 **The team approved the new dose only after...**로 되돌리면 흔들리지 않습니다.

오류 찾기에서는 **It was the low dose which reduced nausea**와 같이 강조 대상 뒤의 관계사를 묻거나, **Never has the patient forgot the instruction**처럼 현재완료의 과거분사를 묻습니다. 강조 구조는 it was와 that/who 사이를 한 덩어리로 묶고, 도치는 조동사 뒤 주어를 찾은 뒤 본동사 형태를 점검합니다. 의약 지문에서는 not, no, hardly를 먼저 표시해 결과의 방향을 거꾸로 읽지 않는 것이 핵심입니다.

## 3줄 요약
1. Only, never, rarely, not until 같은 말이 앞에 오면 조동사와 주어를 도치합니다.
2. It was A that/who와 do + 동사원형은 특정 정보를 강조합니다.
3. 생략은 앞의 말을 복원하고, not/no/neither의 범위와 가까운 주어를 확인합니다.

`,
  quiz: [
    {
      prompt: "Only after the safety data were checked (　　) the researchers increase the dose.",
      choices: ["did", "do", "have", "were"],
      answer: 1,
      explanation: `**해석**

안전성 자료를 확인한 후에야 연구자들은 용량을 늘렸다.

**정답 근거**

정답은 ① did입니다. Only after가 앞에 온 도치이고, 원래 문장의 과거동사 increased를 did + increase로 바꿉니다.

**오답 분석**

- ② do는 현재형이라 과거 상황과 맞지 않습니다.
- ③ have는 increase와 현재완료 구조를 만들지 못합니다.
- ④ were는 be동사라 주어 앞 조동사 자리에 맞지 않습니다.

**핵심 포인트**

Only after가 앞에 오면 did + 주어 + 동사원형을 찾습니다.`,
    },
    {
      prompt: "Never (　　) the nurse failed to record the patient's temperature.",
      choices: ["has", "have", "did", "is"],
      answer: 1,
      explanation: `**해석**

그 간호사는 환자의 체온 기록을 빠뜨린 적이 결코 없다.

**정답 근거**

정답은 ① has입니다. 주어 the nurse가 단수이고 failed는 과거분사이므로 has failed가 필요합니다. Never가 앞에 와 has와 주어가 도치됩니다.

**오답 분석**

- ② have는 복수 주어와 어울립니다.
- ③ did 뒤에는 failed가 아니라 fail 원형이 와야 합니다.
- ④ is는 failed와 현재완료를 만들 수 없습니다.

**핵심 포인트**

Never 뒤에서는 이미 있는 조동사를 주어 앞으로 보냅니다.`,
    },
    {
      prompt: "It was the pharmacist (　　) explained the interaction between the two drugs.",
      choices: ["who", "what", "where", "when"],
      answer: 1,
      explanation: `**해석**

두 약물의 상호작용을 설명한 사람은 약사였다.

**정답 근거**

정답은 ① who입니다. It was the pharmacist who explained는 사람 pharmacist를 강조하는 it-cleft 구조입니다. 원래 문장은 The pharmacist explained입니다.

**오답 분석**

- ② what은 사람을 받는 강조 연결어가 아닙니다.
- ③ where는 장소를 나타냅니다.
- ④ when은 시간을 나타냅니다.

**핵심 포인트**

It is 또는 was 뒤에 사람을 강조하면 who, 사물이나 내용을 강조하면 that을 우선 확인합니다.`,
    },
    {
      prompt: "The doctor <u>did recommended</u> that the patient <u>rest</u> after taking the medicine.",
      choices: ["did recommended", "that", "rest", "after taking"],
      answer: 1,
      explanation: `**해석**

의사는 환자가 약을 먹은 뒤 쉬라고 분명히 권했다.

**정답 근거**

정답은 ①입니다. 강조 조동사 did가 이미 과거를 나타내므로 뒤에는 과거형 recommended가 아니라 원형 recommend가 와야 합니다.

**오답 분석**

- ② that은 recommend 뒤 내용을 연결하는 접속사입니다.
- ③ rest는 제안이나 권고의 that절에서 원형으로 쓸 수 있습니다.
- ④ after taking은 약을 먹은 뒤라는 시간 표현입니다.

**핵심 포인트**

do, does, did로 강조하면 뒤 일반동사는 반드시 원형입니다.`,
    },
    {
      prompt: "Neither the tablet nor the capsules (　　) available in the clinic.",
      choices: ["was", "were", "is", "has"],
      answer: 2,
      explanation: `**해석**

그 진료소에는 정제도 캡슐도 준비되어 있지 않았다.

**정답 근거**

정답은 ② were입니다. neither A nor B에서는 보통 동사와 가까운 nor 뒤 주어에 맞춥니다. capsules가 복수이므로 were available입니다.

**오답 분석**

- ① was는 가까운 주어 capsules와 수가 맞지 않습니다.
- ③ is는 단수 현재형이라 capsules와 맞지 않습니다.
- ④ has는 available과 연결되는 be동사가 아닙니다.

**핵심 포인트**

neither A nor B를 보면 nor 뒤 명사의 단복수를 먼저 확인합니다.`,
    },
    {
      prompt: "When (　　) correctly, the specimen remains stable for a week.",
      choices: ["store", "stored", "storing", "stores"],
      answer: 2,
      explanation: `**해석**

올바르게 보관되면 그 검체는 일주일 동안 안정적으로 유지된다.

**정답 근거**

정답은 ② stored입니다. When it is stored correctly에서 it과 is가 생략된 형태입니다. 검체는 보관하는 주체가 아니라 보관되는 대상이므로 과거분사 stored를 씁니다.

**오답 분석**

- ① store는 검체가 보관한다는 능동 뜻이 됩니다.
- ③ storing도 검체가 보관하는 능동 진행 의미입니다.
- ④ stores는 생략 구조와 맞지 않는 현재형입니다.

**핵심 포인트**

생략된 주어가 주절 주어와 같고 그 주어가 동작을 받으면 When + p.p.를 사용합니다.`,
    },
  ],
};
