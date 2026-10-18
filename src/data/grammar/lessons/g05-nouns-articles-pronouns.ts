import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "g05-nouns-articles-pronouns",
  level: 1,
  title: "명사·관사·대명사, 셀 수 있는/없는",
  summary: "명사에 a, the, 대명사를 알맞게 붙이고 셀 수 있는지 구별한다.",
  body: String.raw`
## 한 줄로 말하면
명사는 이름표, 관사는 그 이름표의 수와 범위, 대명사는 같은 이름을 대신하는 말이다.

## 왜 배우나요?
의약품 독해에서 **a drug**는 약 하나, **the drug**는 이미 정해진 특정 약이다. 빈칸에서는 관사와 복수형을 함께 묻고, 오류 찾기에서는 **informations**, **a equipment** 같은 형태를 찾는다. 긴 문장의 **it, they, this**가 무엇을 가리키는지 아는 것도 핵심이다.

## 개념 설명
**명사(noun, 사람·물건·장소·생각의 이름)**는 *doctor, tablet, hospital, safety* 같은 말이다. **셀 수 있는 명사(countable noun, 하나·둘로 셀 수 있는 명사)**는 *tablet, patient, bottle*처럼 숫자를 붙일 수 있다. 하나면 **a/an + 단수명사**, 둘 이상이면 복수형을 쓴다. *a tablet, two tablets*.

**셀 수 없는 명사(uncountable noun, 덩어리나 개념으로 세는 명사)**는 *water, information, equipment, medicine*처럼 바로 숫자를 붙이지 않는다. 양을 세려면 *a bottle of water, a piece of information*처럼 단위를 쓴다.

**관사(article, 명사 앞에서 수와 범위를 알려 주는 말)**의 **a/an**은 처음 말하는 하나 또는 여러 개 중 하나다. 철자가 아니라 첫소리로 고른다. *an apple*은 모음 소리, *a university*는 자음 소리다. **the**는 이미 나온 것, 상황상 분명한 것, 유일한 것을 가리킨다. 복수와 셀 수 없는 명사에도 특정하면 *the tablets, the water*라고 한다. 일반적인 복수나 물질에는 관사를 쓰지 않는다. *Tablets help. Water is essential.*

**대명사(pronoun, 앞의 명사를 대신하는 말)**는 반복을 줄인다. 대명사가 가리키는 앞의 명사를 **선행사(대명사가 받는 앞의 명사)**라고 한다. *The patient took the tablet. She took it after dinner.*에서 *she*는 patient, *it*은 tablet이다. 주어 자리에는 *I, he, they*, 목적어 자리에는 *me, him, them*을 쓴다.

## 형태 정리
| 종류 | 형태 | 실제 예 |
|---|---|---|
| 셀 수 있는 단수 | a/an + 명사 | a tablet, an assay |
| 셀 수 있는 복수 | 명사 + s/es | tablets, assays |
| 셀 수 없음 | 관사 없이 명사 | water, information |
| 특정한 명사 | the + 단수·복수·불가산 | the tablet, the tablets, the water |
| 주어 대명사 | I, he, she, it, they | They work. |
| 목적어 대명사 | me, him, her, it, them | Take them. |

## 예문으로 익히기
1. **A pharmacist checks a prescription.**  
   A pharmacist(약사 한 명, 주어) / checks(동사) / a prescription(처방전 하나, 목적어)  
   약사 한 명이 처방전 하나를 확인한다.  
   처음 소개한 단수 셀 수 있는 명사다.

2. **The patient took the tablet after dinner.**  
   The patient(그 환자, 주어) / took(동사) / the tablet(그 정제, 목적어) / after dinner(시간)  
   그 환자는 저녁 후 그 정제를 복용했다.  
   이미 정해진 환자와 정제라 the다.

3. **Water is necessary for the body.**  
   Water(물, 셀 수 없는 주어) / is(동사) / necessary(보어) / for the body(몸에)  
   물은 몸에 필요하다.  
   일반적인 water 앞에는 a를 쓰지 않는다.

4. **The nurse gave me some information about the dosage.**  
   The nurse(그 간호사, 주어) / gave(동사) / me(나에게) / some information(정보) / about the dosage(용량에 관해)  
   간호사는 나에게 용량 정보를 주었다.  
   information은 informations나 an information이 아니다.

5. **This medicine is mild, but it works quickly.**  
   This medicine(이 약, 주어) / is mild(순하다) / but / it(그 약, 주어) / works quickly(빠르게 작용한다)  
   이 약은 순하지만 빠르게 작용한다.  
   it은 medicine을 대신한다.

6. **Dr. Kim examined two patients, and they needed different treatments.**  
   Dr. Kim(주어) / examined(진찰했다) / two patients(두 환자, 목적어) / and / they(환자들, 주어) / needed(필요했다) / different treatments(서로 다른 치료)  
   김 박사는 두 환자를 진찰했고 그들은 다른 치료가 필요했다.  
   복수 patients는 they로 받는다.

7. **An antibiotic can kill bacteria, but it may affect the gut.**  
   An antibiotic(항생제 하나, 주어) / can kill(죽일 수 있다) / bacteria(박테리아) / but / it(항생제) / may affect(영향을 줄 수 있다) / the gut(장)  
   항생제는 박테리아를 죽일 수 있지만 장에도 영향을 줄 수 있다.  
   antibiotic의 첫소리가 모음이라 an이다.

8. **These capsules contain iron, and the doctor told her to take them with food.**  
   These capsules(이 캡슐들) / contain(함유한다) / iron(철분) / and / the doctor(그 의사) / told her(그녀에게 말했다) / to take them(그것들을 복용하라고)  
   이 캡슐들은 철분을 함유하고 의사는 그녀에게 음식과 복용하라고 말했다.  
   복수 capsules를 these와 them으로 받았다.

## 헷갈리는 포인트 / 자주 하는 실수
1. ✗ *two informations* → ✓ *two pieces of information*. 불가산명사는 단위 없이 세지 않는다.
2. ✗ *She bought tablet.* → ✓ *She bought a tablet.* 단수 가산명사는 홀로 두지 않는다.
3. 일반적인 복수는 ✓ *Tablets can be divided*, 특정한 복수는 ✓ *The tablets on this shelf can be divided*이다.
4. ✗ *The nurse gave she the form.* → ✓ *The nurse gave her the form.* 목적어 자리에는 목적격을 쓴다.

## 星薬 기출에서는 이렇게 나온다
B方式 빈칸은 명사의 수와 특정성을 함께 본다. “The researcher added (　　) water to the solution.”에서 water는 불가산명사라 **some** 같은 양 표현을 고른다. “The tablets were tested, and (　　) showed no damage.”에서는 복수 선행사를 받는 주어 **they**가 답이다. 오류 찾기는 *a useful equipment*처럼 a와 불가산명사의 충돌을 먼저 찾고, 정렬은 관사와 명사를 한 덩어리로 묶는다.

## 3줄 요약
1. 단수 가산명사는 a/an 또는 the가 필요하다.
2. a/an은 하나 또는 처음 소개, the는 특정 대상을 가리킨다.
3. 대명사는 선행사의 수와 문장 속 자리에 맞춘다.
`,
  quiz: [
    { prompt: "The nurse gave the patient (　　) useful information about the medicine.", choices: ["a", "an", "some", "many"], answer: 3, explanation: "**해석**\n\n간호사는 환자에게 약에 관한 유용한 정보를 주었다. useful은 정보의 성질을 설명할 뿐, information을 셀 수 있게 만들지는 않는다.\n\n**정답 근거**\n\nsome은 셀 수 없는 information 앞에서 정해지지 않은 양을 나타낸다.\n\n**오답 분석**\n\n• 1번 a, 2번 an: 하나를 세는 관사라 불가산명사에 바로 붙지 않는다.\n• 4번 many: 셀 수 있는 복수명사 앞에 쓴다.\n\n**핵심 포인트**\n\ninformation은 *a piece of information*처럼 단위를 붙여야 셀 수 있다.", lessonIds: ["g05-nouns-articles-pronouns"] },
    { prompt: "The doctor prescribed (　　) antibiotic for the infection.", choices: ["a", "an", "the", "no article"], answer: 2, explanation: "**해석**\n\n의사는 감염에 항생제 하나를 처방했다. 문장 앞에 특정 항생제가 언급되지 않아 처음 소개하는 대상을 말한다.\n\n**정답 근거**\n\nantibiotic은 단수 가산명사이고 첫소리가 모음 /애/이므로 an antibiotic이다.\n\n**오답 분석**\n\n• 1번 a: 자음 소리 앞에서만 쓴다.\n• 3번 the: 이미 특정된 항생제라는 단서가 없다.\n• 4번 무관사: 단수 가산명사는 홀로 올 수 없다.\n\n**핵심 포인트**\n\na/an은 철자가 아니라 실제 첫소리로 고른다.", lessonIds: ["g05-nouns-articles-pronouns"] },
    { prompt: "The researcher tested three samples, and (　　) were stable.", choices: ["it", "they", "them", "this"], answer: 2, explanation: "**해석**\n\n연구자는 세 시료를 검사했고 그것들은 안정적이었다. 앞 절의 three samples가 뒤 절에서 다시 가리키는 대상이다.\n\n**정답 근거**\n\nthree samples는 복수이며 빈칸은 were 앞 주어 자리이므로 주격 they다.\n\n**오답 분석**\n\n• 1번 it, 4번 this: 하나를 가리키는 단수 대명사다.\n• 3번 them: 목적어 자리의 목적격이라 were 앞에 올 수 없다.\n\n**핵심 포인트**\n\n복수 선행사는 주어 they, 목적어 them으로 받는다. 동사를 보고 자리도 확인한다.", lessonIds: ["g05-nouns-articles-pronouns"] },
    { prompt: "(　　) tablets on the shelf are for children.", choices: ["A", "An", "The", "No article"], answer: 3, explanation: "**해석**\n\n선반 위의 그 정제들은 어린이용이다. on the shelf가 정제의 위치를 알려 주어 범위를 좁힌다.\n\n**정답 근거**\n\n어느 정제인지 정해져 있으므로 특정 복수인 the tablets가 맞다. 복수명사에는 a나 an을 붙일 수 없다.\n\n**오답 분석**\n\n• 1번 A, 2번 An: 단수 앞에만 쓴다.\n• 4번 무관사: 일반적인 정제라면 가능하지만 여기서는 특정되어 있다.\n\n**핵심 포인트**\n\nthe는 특정한 복수와 특정한 불가산명사에도 붙는다.", lessonIds: ["g05-nouns-articles-pronouns"] },
    { prompt: "The patients took <u>it</u> after the nurse explained the dosage. 다음 중 문맥상 여러 정제를 가리키도록 고칠 말은?", choices: ["it", "they", "them", "this"], answer: 3, explanation: "**해석**\n\n환자들은 간호사가 용량을 설명한 뒤 그것들을 복용했다. 여기서는 복용한 대상이 여러 정제라고 가정한다.\n\n**정답 근거**\n\n여러 정제는 복수이며 took 뒤 목적어 자리이므로 them이다.\n\n**오답 분석**\n\n• 1번 it: 단수 사물을 가리킨다.\n• 2번 they: 복수 주어 자리의 말이라 took 뒤에 맞지 않는다.\n• 4번 this: 가까운 하나를 가리킨다.\n\n**핵심 포인트**\n\n대명사는 선행사의 수와 주어·목적어 자리를 모두 맞춘다.", lessonIds: ["g05-nouns-articles-pronouns"] },
    { prompt: "gave / the pharmacist / me / a bottle of water", choices: ["The pharmacist gave me a bottle of water.", "The pharmacist me gave a bottle of water.", "Me gave the pharmacist a bottle of water.", "A bottle of water gave me the pharmacist."], answer: 1, explanation: "**해석**\n\n약사는 나에게 물 한 병을 주었다.\n\n**정답 근거**\n\n주어 the pharmacist, 동사 gave, 간접목적어 me, 직접목적어 a bottle of water 순서다.\n\n**오답 분석**\n\n• 2번: me를 동사 앞에 둘 수 없다.\n• 3번: me는 목적격이라 주어가 될 수 없다.\n• 4번: 주는 대상과 받는 대상을 뒤집었다.\n\n**핵심 포인트**\n\n관사와 명사를 묶고 누가 무엇을 누구에게 주는지 먼저 찾는다.", lessonIds: ["g05-nouns-articles-pronouns"] }
  ]
};
