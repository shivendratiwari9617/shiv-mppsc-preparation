# SQL — SELECT/JOIN/एग्रीगेशन — आधार

**स्रोत:** NCERT कक्षा-XII कंप्यूटर विज्ञान/इन्फॉर्मेटिक्स प्रैक्टिसेज़ (SQL — Structured Query Language)

## 1. SQL — परिभाषा एवं भाषा-श्रेणियाँ

- **SQL (Structured Query Language)** — रिलेशनल-डेटाबेस से डेटा-प्रबंधन/पुनर्प्राप्ति हेतु मानक-भाषा।
- **SQL कमांड की 4 श्रेणियाँ:**
  1. **DDL (Data Definition Language)** — संरचना-परिभाषा — CREATE, ALTER, DROP।
  2. **DML (Data Manipulation Language)** — डेटा-हेरफेर — SELECT, INSERT, UPDATE, DELETE।
  3. **DCL (Data Control Language)** — अनुमति-नियंत्रण — GRANT, REVOKE।
  4. **TCL (Transaction Control Language)** — लेन-देन-नियंत्रण — COMMIT, ROLLBACK, SAVEPOINT।

## 2. SELECT — मूल-क्वेरी-संरचना

- **मूल-वाक्य-रचना:** `SELECT column1, column2 FROM table_name WHERE condition;`
- **खंड (Clauses) क्रम (महत्वपूर्ण — निष्पादन-क्रम भी इसी अनुरूप):** `SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY`।
- **DISTINCT** — दोहराव-रहित-पंक्तियाँ प्राप्त करने हेतु; **ORDER BY** — क्रमबद्ध-परिणाम (ASC/DESC)।
- **WHERE बनाम HAVING** — **WHERE पंक्ति-स्तर पर फ़िल्टर करता है (GROUP BY से पूर्व)**, जबकि **HAVING समूहीकृत-परिणामों पर फ़िल्टर करता है (GROUP BY के पश्चात)** — यह एक अत्यंत सामान्य MCQ-ट्रैप है।

## 3. JOIN — तालिकाओं को जोड़ना (अत्यंत उच्च-प्राथमिकता, तुलनात्मक)

| JOIN प्रकार | परिणाम |
|---|---|
| **INNER JOIN** | दोनों-तालिकाओं में मेल-खाने वाली पंक्तियाँ ही (डिफ़ॉल्ट JOIN) |
| **LEFT (OUTER) JOIN** | बाईं-तालिका की सभी-पंक्तियाँ + दाईं से मेल-खाने वाली (न मिलने पर NULL) |
| **RIGHT (OUTER) JOIN** | दाईं-तालिका की सभी-पंक्तियाँ + बाईं से मेल-खाने वाली (न मिलने पर NULL) |
| **FULL (OUTER) JOIN** | दोनों-तालिकाओं की सभी-पंक्तियाँ (मेल न होने पर सम्बंधित-पक्ष में NULL) |

## 4. एग्रीगेट फ़ंक्शन (Aggregate Functions) — समूह-गणना

- **COUNT()** — पंक्तियों की गणना; **SUM()** — योग; **AVG()** — औसत; **MAX()/MIN()** — अधिकतम/न्यूनतम मान।
- **GROUP BY** — निर्दिष्ट-स्तंभ के आधार पर पंक्तियों को समूहों में विभाजित कर, प्रत्येक-समूह पर एग्रीगेट-फ़ंक्शन लागू करना (उदा. प्रत्येक-विभाग का औसत-वेतन)।

## 5. अन्य महत्वपूर्ण SQL-कीवर्ड

- **LIKE** — पैटर्न-मिलान (wildcard `%` कोई-भी-वर्ण-शृंखला, `_` एकल-वर्ण); **IN** — मानों की सूची में जाँच; **BETWEEN** — परिसर-जाँच; **NULL** — रिक्त/अज्ञात-मान, `IS NULL`/`IS NOT NULL` से जाँचा जाता है (`= NULL` से नहीं)।

## 6. परीक्षा-केंद्रित सार (Quick Revision)

- **DDL(CREATE/ALTER/DROP) — संरचना; DML(SELECT/INSERT/UPDATE/DELETE) — डेटा; DCL(GRANT/REVOKE) — अनुमति; TCL(COMMIT/ROLLBACK) — लेन-देन**।
- **क्लॉज़-क्रम — SELECT→FROM→WHERE→GROUP BY→HAVING→ORDER BY**; **WHERE=पंक्ति-फ़िल्टर, HAVING=समूह-फ़िल्टर**।
- **JOIN — INNER(मेल-मात्र)/LEFT(बाएँ-सभी)/RIGHT(दाएँ-सभी)/FULL(दोनों-सभी)**।
- **एग्रीगेट — COUNT/SUM/AVG/MAX/MIN, GROUP BY के साथ प्रयुक्त**।

## 7. स्वयं-परीक्षण हेतु प्रश्न

1. WHERE एवं HAVING में क्या अंतर है?
2. INNER JOIN एवं LEFT JOIN के परिणाम में क्या भेद है?
3. SQL कमांड की 4 श्रेणियाँ कौन-सी हैं?
4. GROUP BY का प्रयोग किसके साथ किया जाता है, और क्यों?

---
*नोट: यह नोट checklist-फ़ाइल 01 (Unit 9) का सप्तम बिंदु है।*
