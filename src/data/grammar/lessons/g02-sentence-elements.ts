import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "g02-sentence-elements",
  level: 1,
  title: "문장의 요소",
  summary: "영어 문장에서 주어, 동사, 목적어, 보어, 수식어의 자리를 찾습니다.",
  body: `## 한 줄로 말하면

영어 문장은 먼저 **주어(누가 또는 무엇이)**와 **동사(무엇을 하는지 또는 어떤 상태인지)**를 찾고, 그 뒤에 목적어, 보어, 수식어를 역할에 맞게 붙인 구조입니다.

## 왜 배우나요?

星薬科大学 B方式의 빈칸 문제는 약물이나 환자에 관한 문장을 주고, 빈칸에 들어갈 말의 자리와 형태를 고르게 합니다. 단어 뜻을 모두 몰라도 주어 뒤에 동사가 있는지, 동사 뒤에 행동을 받는 대상이 필요한지 확인하면 선택지를 줄일 수 있습니다. 오류 찾기에서는 목적어와 보어를 바꾸거나, 수식어를 동사처럼 착각한 부분이 함정입니다. 단어 배열 문제에서는 주어와 동사를 먼저 묶고, 목적어와 장소 표현을 뒤에 붙이면 긴 문장도 흔들리지 않습니다. 의약 지문에서도 \\(The drug\\)와 \\(reduces\\)만 먼저 찾으면 약이 무엇을 줄이는지 따라갈 수 있습니다.

## 개념 설명

**주어(subject, 문장의 주인공)**는 누가 행동하거나 어떤 상태인지 나타냅니다. 보통 문장 앞에 오며, 사람뿐 아니라 사물도 주어가 됩니다. The nurse와 A new vaccine은 각각 간호사와 새 백신이라는 주어입니다.

**동사(verb, 행동이나 상태를 나타내는 말)**는 문장의 중심입니다. checks는 확인한다는 행동이고, is는 어떤 상태임을 이어 줍니다. 영어 문장은 동사 없이 완성되기 어렵습니다.

**목적어(object, 동작을 받는 대상)**는 동사가 향하는 대상을 말합니다. The doctor treats the patient.에서 의사가 치료하는 대상인 the patient가 목적어입니다. 한국어의 을, 를에 가까운 자리라고 생각하면 쉽지만, 영어에서는 동사 뒤의 위치도 함께 확인해야 합니다.

**보어(complement, 주어 또는 목적어를 설명해 문장을 완성하는 말)**는 대상의 이름이나 상태를 알려 줍니다. The sample is stable.에서 stable은 표본의 상태를 설명하는 주격보어입니다. The test made the patient calm.에서 calm은 환자의 상태를 설명하는 목적격보어입니다. 목적어는 행동을 받지만 보어는 앞의 대상을 설명한다는 차이가 핵심입니다.

**수식어(modifier, 시간, 장소, 방법 등을 덧붙이는 말)**는 문장의 중심에 정보를 추가합니다. in the laboratory, after lunch, carefully가 수식어입니다. 수식어를 빼도 The researcher checked the sample.처럼 뼈대가 남는 경우가 많습니다. 문장을 읽을 때 수식어를 먼저 해석하느라 주어와 동사를 놓치지 마세요.

한국어 문장을 책상 위의 역할표라고 생각해 보세요. 주어는 일을 맡은 사람, 동사는 일의 종류, 목적어는 그 일을 받는 대상, 보어는 대상의 명찰, 수식어는 시간과 장소 메모입니다. 영어에서는 이 역할표가 조사보다 어순으로 보입니다.

## 형태 정리

| 요소 | 확인 질문 | 자주 오는 형태 | 의약 예시 |
|---|---|---|---|
| 주어 | 누가, 무엇이? | 명사, 대명사, 명사구 | The pharmacist |
| 동사 | 무엇을 하는가, 어떤 상태인가? | 일반동사, be동사 | explains, is |
| 목적어 | 무엇을 받는가? | 명사, 대명사, 명사구 | the dosage |
| 주격보어 | 주어가 무엇인가, 어떤가? | 명사, 형용사 | safe, a treatment |
| 목적격보어 | 목적어가 어떤 상태인가? | 형용사, 명사 | effective, a leader |
| 수식어 | 언제, 어디서, 어떻게? | 부사, 전치사구 | in the clinic |

## 예문으로 익히기

1. **The nurse / checks / the patient's temperature / every morning.**  
The nurse(주어) / checks(동사) / the patient's temperature(목적어) / every morning(수식어: 시간).  
간호사는 매일 아침 환자의 체온을 확인한다.  
메모: every morning을 빼도 주어, 동사, 목적어의 뼈대가 남습니다.

2. **My brother / reads / a novel / on the train.**  
My brother(주어) / reads(동사) / a novel(목적어) / on the train(수식어: 장소).  
내 남동생은 전철에서 소설을 읽는다.  
메모: 읽는 행동을 받는 a novel이 목적어이고, 장소는 수식어입니다.

3. **The new tablet / is / safe.**  
The new tablet(주어) / is(동사) / safe(보어: 주어의 상태 설명).  
새 정제는 안전하다.  
메모: safe는 정제가 안전한 상태라고 설명하므로 목적어가 아니라 보어입니다.

4. **The pharmacist / gave / the patient / clear instructions.**  
The pharmacist(주어) / gave(동사) / the patient(간접목적어: 받는 사람) / clear instructions(직접목적어: 주어진 것).  
약사는 환자에게 명확한 지시를 해 주었다.  
메모: gave 뒤의 사람과 사물을 구별하면 4형식의 기본 구조가 보입니다.

5. **The doctor / found / the treatment / effective.**  
The doctor(주어) / found(동사) / the treatment(목적어) / effective(목적격보어: 치료의 상태 설명).  
의사는 그 치료가 효과적이라고 판단했다.  
메모: effective는 의사를 설명하지 않고 the treatment를 설명합니다.

6. **The patient / became / very tired / after the operation.**  
The patient(주어) / became(동사) / very tired(보어: 주어의 상태 설명) / after the operation(수식어: 시간).  
환자는 수술 후 매우 피곤해졌다.  
메모: became 뒤의 상태 표현은 주어인 환자를 설명하는 보어입니다.

7. **Researchers / carefully / measured / the drug level / in the blood.**  
Researchers(주어) / carefully(수식어: 방법) / measured(동사) / the drug level(목적어) / in the blood(수식어: 범위).  
연구자들은 혈액 속 약물 수치를 주의 깊게 측정했다.  
메모: 동사 앞의 부사도 수식어일 수 있으므로 위치만으로 주어와 혼동하지 않습니다.

8. **The results / made / the safety problem / clear.**  
The results(주어) / made(동사) / the safety problem(목적어) / clear(목적격보어).  
그 결과는 안전성 문제를 분명하게 드러냈다.  
메모: clear는 문제가 어떤 상태가 되었는지 설명하므로 목적격보어입니다.

## 헷갈리는 포인트 / 자주 하는 실수

1. **보어를 목적어로 착각하기**  
틀림: The medicine is **effectively**.  
바름: The medicine is **effective**.  
is 뒤에는 약의 상태를 설명하는 형용사 보어가 필요합니다. effectively는 방법을 나타내는 부사입니다.

2. **목적어와 목적격보어의 순서를 놓치기**  
틀림: The drug made **sick the patient**.  
바름: The drug made **the patient sick**.  
먼저 행동을 받는 목적어가 오고, 그 뒤에 목적어의 상태를 설명하는 보어가 옵니다.

3. **수식어를 주어로 읽기**  
틀림: In the clinic are checks the pharmacist the dosage.  
바름: In the clinic, the pharmacist checks the dosage.  
In the clinic은 장소 수식어입니다. 누가 확인하는지 나타내는 the pharmacist가 주어입니다.

4. **동사 뒤에 목적어가 꼭 필요하다고 생각하기**  
틀림: The patient sleeps the bed.  
바름: The patient sleeps in the bed.  
sleep은 여기서 대상이 필요 없는 동사입니다. 장소를 말하려면 전치사구 수식어를 붙입니다.

## 星薬 기출에서는 이렇게 나온다

B方式의 빈칸에서는 The medicine (　　) the patient's pain.처럼 주어와 목적어 사이의 동사를 고르게 할 수 있습니다. 먼저 The medicine을 주어, the patient's pain을 목적어로 표시한 뒤, 빈칸에는 행동을 나타내는 동사가 와야 한다고 판단합니다. The medicine is effective처럼 be동사 뒤에 상태를 넣는 문제도 같은 방식으로 풉니다.

오류 찾기에서는 The treatment made the patient safely처럼 목적격보어 자리에 부사를 넣은 부분을 찾게 합니다. 정답을 고를 때는 빈칸의 뜻보다 앞말과 뒷말의 관계를 먼저 보세요. 주어와 동사를 묶은 다음, 목적어인지 보어인지 질문하면 의약 전문어를 몰라도 구조를 판별할 수 있습니다.

## 3줄 요약

1. 주어는 주인공, 동사는 행동이나 상태이며 둘이 문장의 중심입니다.
2. 목적어는 동작을 받는 대상이고, 보어는 주어 또는 목적어를 설명합니다.
3. 시간, 장소, 방법을 나타내는 수식어는 중심 뼈대와 분리해 읽습니다.`,
  quiz: [
    {
      prompt: "The pharmacist (　　) the dosage to the patient.",
      choices: ["careful", "explains", "safe", "in the clinic"],
      answer: 2,
      explanation: `**해석**

약사는 환자에게 복용량을 설명한다는 뜻입니다. 문장에는 주어 The pharmacist와 목적어 the dosage가 있으므로 가운데 행동이 필요합니다.

**정답 근거**

정답은 **explains**입니다. 약사가 복용량을 설명한다는 동사가 주어와 목적어를 연결합니다. 현재형 3인칭 단수 주어이므로 explain이 아니라 explains를 씁니다.

**오답 분석**

- **careful**: 형용사라서 행동을 나타내지 못합니다.
- **safe**: 상태를 설명하는 보어이지 동사가 아닙니다.
- **in the clinic**: 장소 수식어라서 문장 중심의 동사가 되지 못합니다.

**핵심 포인트**

주어와 목적어 사이의 빈칸은 먼저 동사 자리인지 확인하고, 주어가 3인칭 단수인지 살핍니다.`,
    },
    {
      prompt: "The new vaccine became (　　) after testing.",
      choices: ["safely", "safety", "safe", "saves"],
      answer: 3,
      explanation: `**해석**

새 백신은 시험 후 안전해졌다라는 뜻입니다. became는 주어의 상태 변화를 이어 주므로 뒤에서 백신의 상태를 설명해야 합니다.

**정답 근거**

정답은 **safe**입니다. safe는 형용사로서 주어 The new vaccine의 상태를 설명하는 주격보어입니다. become 뒤에는 보통 명사나 형용사 보어가 옵니다.

**오답 분석**

- **safely**: 방법을 나타내는 부사라서 백신의 상태를 설명하는 자리에 맞지 않습니다.
- **safety**: 안전이라는 명사이므로 여기서 필요한 형용사 보어가 아닙니다.
- **saves**: 동사이므로 became 뒤에 또 중심 동사를 놓을 수 없습니다.

**핵심 포인트**

be, become, seem 뒤에서는 주어를 설명하는 보어를 찾고, 상태를 나타내는 형용사를 우선 확인합니다.`,
    },
    {
      prompt: "In ‘The nurse checked the patient carefully,’ what is the object?",
      choices: ["The nurse", "checked", "the patient", "carefully"],
      answer: 3,
      explanation: `**해석**

문장은 간호사가 환자를 주의 깊게 확인했다는 뜻입니다. 누가 확인했는지는 The nurse이고, 어떻게 확인했는지는 carefully입니다.

**정답 근거**

정답은 **the patient**입니다. checked라는 행동을 받은 대상이 환자이므로 목적어입니다. 목적어는 동사 뒤에서 무엇을 확인했는지 답해 줍니다.

**오답 분석**

- **The nurse**: 확인하는 주체이므로 주어입니다.
- **checked**: 확인한다는 행동을 나타내는 동사입니다.
- **carefully**: 어떻게 확인했는지 알려 주는 방법 수식어입니다.

**핵심 포인트**

동사에 ‘무엇을, 누구를?’라고 질문하고 답이 되는 명사나 명사구를 목적어로 찾습니다.`,
    },
    {
      prompt: "The results made the safety problem (　　).",
      choices: ["clear", "clearly", "clarity", "clears"],
      answer: 1,
      explanation: `**해석**

그 결과는 안전성 문제를 분명하게 만들었다, 즉 분명하게 드러냈다는 뜻입니다. made 뒤에는 목적어와 그 목적어의 상태를 설명하는 말이 이어집니다.

**정답 근거**

정답은 **clear**입니다. the safety problem이 목적어이고, clear는 그 문제가 어떤 상태가 되었는지 설명하는 목적격보어입니다. 목적격보어 자리에는 형용사가 올 수 있습니다.

**오답 분석**

- **clearly**: 부사라서 문제의 상태를 나타내는 보어 자리에 맞지 않습니다.
- **clarity**: 명사이지만 이 문장에서는 ‘분명한’이라는 형용사가 필요합니다.
- **clears**: 동사 형태라서 made 뒤에 새로운 동사를 놓게 됩니다.

**핵심 포인트**

make, find, keep 뒤에 목적어가 있으면 그 뒤에서 목적어를 설명하는 형용사 보어가 필요한지 확인합니다.`,
    },
    {
      prompt: "다음 밑줄 친 부분 중 문장의 요소 구성이 잘못된 것은? The doctor <u>gave</u> the patient <u>advice</u> <u>careful</u>.",
      choices: ["gave", "the patient", "advice", "careful"],
      answer: 4,
      explanation: `**해석**

의사는 환자에게 조언을 주의 깊게 주었다가 아니라, 문장 끝의 말이 조언을 꾸미려는 뜻으로 보입니다. advice는 셀 수 없는 명사이며, 이를 꾸미는 말은 형용사 careful이 아니라 부사 carefully입니다.

**정답 근거**

정답은 **careful**입니다. careful은 형용사로 명사를 꾸미거나 보어가 될 수 있지만, 여기서는 gave라는 행동의 방법을 설명하는 수식어 자리입니다. 따라서 **carefully**가 맞습니다.

**오답 분석**

- **gave**: 주어가 환자에게 무엇을 주는지 연결하는 올바른 동사입니다.
- **the patient**: 주는 사람을 나타내는 간접목적어입니다.
- **advice**: 주어진 내용을 나타내는 직접목적어로 자연스럽습니다.

**핵심 포인트**

동작을 꾸미면 부사, 명사를 꾸미면 형용사입니다. 문장 끝이라고 무조건 보어라고 판단하지 마세요.`,
    },
    {
      prompt: "단어를 바르게 배열하시오: in the laboratory / the researcher / measured / the drug level",
      choices: ["In the laboratory measured the researcher the drug level.", "The researcher measured the drug level in the laboratory.", "The drug level in the laboratory the researcher measured.", "Measured the researcher in the laboratory the drug level."],
      answer: 2,
      explanation: `**해석**

연구자는 실험실에서 약물 수치를 측정했다는 뜻의 문장을 만들어야 합니다. 먼저 누가 행동하는지와 행동이 무엇인지 묶으면 순서를 쉽게 정할 수 있습니다.

**정답 근거**

정답은 **The researcher measured the drug level in the laboratory.**입니다. 주어 The researcher 뒤에 동사 measured, 목적어 the drug level이 오고, 장소 수식어 in the laboratory가 뒤에 붙습니다.

**오답 분석**

- **In the laboratory measured the researcher the drug level.**: 장소 수식어 뒤의 어순이 부자연스럽고 주어와 동사의 배열이 흐트러졌습니다.
- **The drug level in the laboratory the researcher measured.**: 목적어를 문장 앞에 둔 형태로 기본 어순이 아닙니다.
- **Measured the researcher in the laboratory the drug level.**: 동사가 주어보다 먼저 와서 평서문 뼈대가 깨집니다.

**핵심 포인트**

정렬은 주어 + 동사 + 목적어를 먼저 만들고 시간, 장소, 방법 수식어를 붙이는 순서로 풉니다.`,
    },
  ],
};
