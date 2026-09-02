# MP Govt Exam Prep — repo notes for Claude

This repo has two layers:
1. **Existing MPPSC study material** — 10 unit folders at repo root (`"1) मध्यप्रदेश का इतिहास..."` through `"10) MP की जनजातीय..."`), each holding one `.html` file per topic. These are already complete; don't touch them.
2. **mppsc-app** (`mppsc-app/`) — a full-stack tracker (Node/Prisma backend + frontend) that imports those `.html` files at runtime. `mppsc-app/backend/src/import/importContent.ts` walks every top-level directory matching `^(\d+)\)\s*(.+)$` under `CONTENT_DIR`, recurses for `.html` files, and extracts a `const RAW = {...}` JS object from each one.

## Current task: MPSI missing-topics build-out

`mpsi-syllabus/missing-topics/` holds 9 checklist files (`01-hindi-bhasha-bodh.md` … `09-additional-gaps-in-covered-units.md`) — topic titles only, no content yet, for MPSI (Sub-Inspector) syllabus areas the existing 10 units don't cover (see `mpsi-syllabus/missing-topics/README.md`).

We are authoring real content for these, one topic file at a time, **one checklist point at a time**, as deep standalone Markdown notes (not the app's MCQ/HTML format — see "File format" below for why that was tried first and dropped).

### Workflow (important — follow exactly)

- Work through the numbered points inside one missing-topics checklist file **in order**.
- **Within a checklist file, do not stop for per-point confirmation.** Finish a point, report it briefly, and go straight on to the next point — repeat until every point in that file is done. The user can interrupt at any time if they want something changed; absence of an interruption is not a request to pause.
- The user has asked for a literal timed pause ("wait 30 seconds, auto-approve if no response") between points. **There is no tool available that can pause execution for a fixed number of seconds and auto-resume mid-turn** — this was explained to the user directly. The practical equivalent already in place (continue straight through, user interrupts if needed) is what actually runs; don't claim to be "waiting" when nothing is actually pausing.
- **After all points in a checklist file are done, stop and wait for the user to confirm** before starting the next checklist file (02, 03, …). When they confirm the next file, restart this same pattern from point 1 of that file — work straight through all its points, then stop again for confirmation before the file after that.
- Track progress in the table at the bottom of this file so a fresh session can resume without re-deriving anything.

### Content rules

- **Scope: MPSI, broadened to all MP government job exams.** These checklist points are officially MPSI gaps, but the actual content (Hindi/English grammar, reasoning, aptitude) is shared ground across essentially every MP state exam — MPPSC, Vyapam/ESB exams, Patwari, MP Police, etc. Per explicit user instruction, write with enough depth that the note serves any of those exams, not just the narrow MPSI wording — don't artificially trim a rule or sub-type because "would MPSI specifically ask this." Still stay within genuinely examinable competitive-exam ground — don't wander into academic trivia no state exam would ever ask.
- **High-yield, but exhaustive within that scope.** Cover every rule/sub-rule/exception that actually recurs in MPPSC/MPSI-style papers for the point at hand — depth matters more than brevity. Don't cap example counts artificially; give enough examples per rule (5–10+) that the pattern is unmistakable, plus a self-test word list.
- **Double-check factual/grammatical accuracy** (sandhi rules, idioms, formulas, etc.) against standard, uncontroversial textbook sources before writing — these are unambiguous rule-based topics, not areas for invention. Never leave reasoning artifacts ("not sure", "correct?") in the final file — resolve or drop them before writing.
- Prefer well-established textbook rules/examples over obscure named sub-rules with shaky examples — accuracy over exhaustiveness-for-its-own-sake.

### File format — Markdown notes (not the app's MCQ/HTML format)

**First attempt used the existing unit-folder interactive-HTML/MCQ format** (`const RAW = {topic_title, coverage_note, vyakhya, mcqs[]}`, ingested by `mppsc-app/backend/src/import/importContent.ts`) so new content would drop into the existing app pipeline. **The user rejected this**: capping content at ~15 MCQs with short explanations lost too much material — for exam-safe depth on a topic like Sandhi, the actual content (all sub-rules, all exception cases, enough examples to see every pattern) doesn't fit that shape. That attempt (a generator script + one JSON content file + one generated `.html`) was deleted from the repo.

**Current format:** one plain Markdown file per checklist point, as deep and complete as the point warrants — no MCQ count target, no artificial length cap. Structure freely (definitions → sub-rules with rule + example tables → exceptions → a quick-revision chart → a self-test word/example list → an "most important for the exam" closing list). See `mpsi-syllabus/notes/01-hindi-bhasha-bodh/01-sandhi.md` for the worked pattern to follow for every subsequent point.

Location: `mpsi-syllabus/notes/<NN-topic-slug>/<point-number>-<point-slug>.md`, mirroring the numbering in the corresponding `mpsi-syllabus/missing-topics/<NN-topic-slug>.md` checklist.

This content is **not** wired into mppsc-app's importer — it's a separate notes corpus. If MCQ-quiz versions of this material are wanted later, that's a distinct follow-up task, not something to fold back in silently.

### Progress tracker — 01-hindi-bhasha-bodh.md (28 points)

Point numbers match the numbered list in `mpsi-syllabus/missing-topics/01-hindi-bhasha-bodh.md`.

- [x] 1. संधि — स्वर, व्यंजन, विसर्ग संधि → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/01-sandhi.md`
- [x] 2. समास — तत्पुरुष, द्वंद्व, बहुव्रीहि, अव्ययीभाव, द्विगु, कर्मधारय → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/02-samas.md`
- [x] 3. उपसर्ग — संस्कृत, हिंदी व उर्दू-फारसी उपसर्ग सूची → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/03-upsarg.md`
- [x] 4. प्रत्यय — कृत् प्रत्यय व तद्धित प्रत्यय → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/04-pratyay.md`
- [x] 5. संज्ञा — भेद, लिंग, वचन, कारक → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/05-sangya.md`
- [x] 6. सर्वनाम — भेद व प्रयोग → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/06-sarvanam.md`
- [x] 7. विशेषण — भेद व तुलना → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/07-visheshan.md`
- [x] 8. क्रिया — सकर्मक/अकर्मक, काल, वाच्य → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/08-kriya.md`
- [x] 9. वाक्य रचना — सरल/संयुक्त/मिश्र वाक्य; वाक्य-शुद्धि → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/09-vakya-rachna.md`
- [x] 10. मुहावरे व लोकोक्तियाँ → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/10-muhavare-lokoktiyan.md`
- [x] 11. पर्यायवाची शब्द → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/11-paryayvachi.md`
- [x] 12. विलोम शब्द → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/12-vilom.md`
- [x] 13. अनेकार्थी शब्द → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/13-anekarthi.md`
- [x] 14. अनेक शब्दों के लिए एक शब्द → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/14-anek-shabdon-ek-shabd.md`
- [x] 15. शब्द-युग्म → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/15-shabd-yugm.md`
- [x] 16. तत्सम-तद्भव शब्द → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/16-tatsam-tadbhav.md`
- [x] 17. देशज व विदेशी (आगत) शब्द → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/17-deshaj-videshi.md`
- [x] 18. वर्तनी की शुद्ध-अशुद्ध पहचान → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/18-vartani.md`
- [x] 19. विराम चिह्न → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/19-viram-chinh.md`
- [x] 20. मात्रा संबंधी त्रुटियाँ → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/20-matra-truti.md`
- [x] 21. अपठित गद्यांश → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/21-apathit-gadyansh.md`
- [x] 22. अपठित पद्यांश → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/22-apathit-padyansh.md`
- [x] 23. पत्र लेखन के प्रारूप → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/23-patra-lekhan.md`
- [x] 24. सरकारी/कार्यालयीन हिंदी शब्दावली → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/24-karyalayin-shabdavali.md`
- [x] 25. रस, छंद, अलंकार — मूल परिचय → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/25-ras-chhand-alankar.md`
- [x] 26. हिंदी भाषा का इतिहास व बोलियाँ → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/26-hindi-itihas-boliyan.md`
- [x] 27. वाच्य परिवर्तन एवं वाक्य परिवर्तन → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/27-vachya-vakya-parivartan.md`
- [x] 28. शब्द शुद्धि → `mpsi-syllabus/notes/01-hindi-bhasha-bodh/28-shabd-shuddhi.md`

**File 01 (हिंदी भाषायी बोध) is COMPLETE — all 28 points done.**

### Progress tracker — 02-english-language-comprehension.md (26 points)

User confirmed start on this file. Notes go in `mpsi-syllabus/notes/02-english-language-comprehension/`. Point numbers match `mpsi-syllabus/missing-topics/02-english-language-comprehension.md`.

- [x] 1. Parts of speech → `mpsi-syllabus/notes/02-english-language-comprehension/01-parts-of-speech.md`
- [x] 2. Tenses → `mpsi-syllabus/notes/02-english-language-comprehension/02-tenses.md`
- [x] 3. Subject-verb agreement rules → `mpsi-syllabus/notes/02-english-language-comprehension/03-subject-verb-agreement.md`
- [x] 4. Active and Passive voice conversion → `mpsi-syllabus/notes/02-english-language-comprehension/04-active-passive-voice.md`
- [x] 5. Direct and Indirect (Reported) speech → `mpsi-syllabus/notes/02-english-language-comprehension/05-direct-indirect-speech.md`
- [x] 6. Articles → `mpsi-syllabus/notes/02-english-language-comprehension/06-articles.md`
- [x] 7. Prepositions → `mpsi-syllabus/notes/02-english-language-comprehension/07-prepositions.md`
- [x] 8. Conjunctions and connectors → `mpsi-syllabus/notes/02-english-language-comprehension/08-conjunctions-connectors.md`
- [x] 9. Modals → `mpsi-syllabus/notes/02-english-language-comprehension/09-modals.md`
- [x] 10. Synonyms → `mpsi-syllabus/notes/02-english-language-comprehension/10-synonyms.md`
- [x] 11. Antonyms → `mpsi-syllabus/notes/02-english-language-comprehension/11-antonyms.md`
- [x] 12. One-word substitution → `mpsi-syllabus/notes/02-english-language-comprehension/12-one-word-substitution.md`
- [x] 13. Idioms and phrases → `mpsi-syllabus/notes/02-english-language-comprehension/13-idioms-phrases.md`
- [x] 14. Spotting errors → `mpsi-syllabus/notes/02-english-language-comprehension/14-spotting-errors.md`
- [x] 15. Sentence improvement / correction → `mpsi-syllabus/notes/02-english-language-comprehension/15-sentence-improvement.md`
- [x] 16. Fill in the blanks → `mpsi-syllabus/notes/02-english-language-comprehension/16-fill-in-the-blanks.md`
- [x] 17. Spellings — commonly confused/misspelled words → `mpsi-syllabus/notes/02-english-language-comprehension/17-spellings.md`
- [x] 18. Homophones and commonly confused words → `mpsi-syllabus/notes/02-english-language-comprehension/18-homophones-confused-words.md`
- [x] 19. Reading comprehension — unseen passages → `mpsi-syllabus/notes/02-english-language-comprehension/19-reading-comprehension.md`
- [x] 20. Cloze test → `mpsi-syllabus/notes/02-english-language-comprehension/20-cloze-test.md`
- [x] 21. Sentence rearrangement / para jumbles → `mpsi-syllabus/notes/02-english-language-comprehension/21-sentence-rearrangement.md`
- [x] 22. Word formation — prefixes and suffixes → `mpsi-syllabus/notes/02-english-language-comprehension/22-word-formation.md`
- [x] 23. Punctuation rules → `mpsi-syllabus/notes/02-english-language-comprehension/23-punctuation-rules.md`
- [x] 24. Degrees of comparison → `mpsi-syllabus/notes/02-english-language-comprehension/24-degrees-of-comparison.md`
- [x] 25. Common administrative/official English vocabulary → `mpsi-syllabus/notes/02-english-language-comprehension/25-administrative-vocabulary.md`
- [x] 26. Antonym-in-context and synonym-in-context questions → `mpsi-syllabus/notes/02-english-language-comprehension/26-synonym-antonym-in-context.md`

**File 02 (English Language Comprehension) is COMPLETE — all 26 points done.**

### Progress tracker — 03-reasoning-analytical-ability.md (55 points)

User confirmed start on this file. Notes go in `mpsi-syllabus/notes/03-reasoning-analytical-ability/`. Point numbers match `mpsi-syllabus/missing-topics/03-reasoning-analytical-ability.md`. Note: points 33-45 (non-verbal/figure reasoning) are described via rules/text since plain Markdown can't render real figure images — each note explains the underlying logic (rotation rules, cube-face rules, folding rules) that lets you solve any such figure set, and flags that visual practice with an actual figure-set book is still needed alongside the note.

**Verbal reasoning (1-32):**
- [x] 1. कोडिंग-डिकोडिंग → `mpsi-syllabus/notes/03-reasoning-analytical-ability/01-coding-decoding.md`
- [x] 2. रक्त संबंध → `mpsi-syllabus/notes/03-reasoning-analytical-ability/02-blood-relations.md`
- [x] 3. दिशा एवं दूरी परीक्षण → `mpsi-syllabus/notes/03-reasoning-analytical-ability/03-direction-distance-test.md`
- [x] 4. रैंकिंग/क्रम व्यवस्था → `mpsi-syllabus/notes/03-reasoning-analytical-ability/04-ranking-order.md`
- [x] 5. तुलनात्मक तर्क → `mpsi-syllabus/notes/03-reasoning-analytical-ability/05-comparative-reasoning.md`
- [x] 6. वर्णमाला परीक्षण → `mpsi-syllabus/notes/03-reasoning-analytical-ability/06-alphabet-test.md`
- [x] 7. श्रृंखला — अक्षर/संख्या/मिश्रित → `mpsi-syllabus/notes/03-reasoning-analytical-ability/07-series.md`
- [x] 8. श्रृंखला में लुप्त पद → `mpsi-syllabus/notes/03-reasoning-analytical-ability/08-missing-terms.md`
- [x] 9. सादृश्यता (Analogy) → `mpsi-syllabus/notes/03-reasoning-analytical-ability/09-analogy.md`
- [x] 10. वर्गीकरण / विजातीय शब्द → `mpsi-syllabus/notes/03-reasoning-analytical-ability/10-classification-odd-one-out.md`
- [x] 11. शब्द निर्माण → `mpsi-syllabus/notes/03-reasoning-analytical-ability/11-word-formation.md`
- [x] 12. न्याय-निगमन / स्थापन (Syllogism) → `mpsi-syllabus/notes/03-reasoning-analytical-ability/12-syllogism.md`
- [x] 13. कथन-निष्कर्ष → `mpsi-syllabus/notes/03-reasoning-analytical-ability/13-statement-conclusion.md`
- [x] 14. कथन-मान्यता → `mpsi-syllabus/notes/03-reasoning-analytical-ability/14-statement-assumption.md`
- [x] 15. कथन-कार्यवाही → `mpsi-syllabus/notes/03-reasoning-analytical-ability/15-statement-course-of-action.md`
- [x] 16. कथन-तर्क (सशक्त/निर्बल) → `mpsi-syllabus/notes/03-reasoning-analytical-ability/16-statement-argument.md`
- [x] 17. अभिकथन-कारण → `mpsi-syllabus/notes/03-reasoning-analytical-ability/17-assertion-reason.md`
- [x] 18. कारण-प्रभाव → `mpsi-syllabus/notes/03-reasoning-analytical-ability/18-cause-effect.md`
- [x] 19. पात्रता परीक्षण → `mpsi-syllabus/notes/03-reasoning-analytical-ability/19-eligibility-test.md`
- [x] 20. पंक्ति व्यवस्था (seating arrangement) → `mpsi-syllabus/notes/03-reasoning-analytical-ability/20-seating-arrangement.md`
- [x] 21. पहेली (Puzzle test) → `mpsi-syllabus/notes/03-reasoning-analytical-ability/21-puzzle-test.md`
- [x] 22. इनपुट-आउटपुट → `mpsi-syllabus/notes/03-reasoning-analytical-ability/22-input-output.md`
- [x] 23. वेन आरेख → `mpsi-syllabus/notes/03-reasoning-analytical-ability/23-venn-diagrams.md`
- [x] 24. डेटा पर्याप्तता → `mpsi-syllabus/notes/03-reasoning-analytical-ability/24-data-sufficiency.md`
- [x] 25. निर्णयन → `mpsi-syllabus/notes/03-reasoning-analytical-ability/25-decision-making.md`
- [x] 26. शब्दों का तार्किक क्रम → `mpsi-syllabus/notes/03-reasoning-analytical-ability/26-logical-sequence-of-words.md`
- [x] 27. गणितीय संक्रियाएं (प्रतीक प्रतिस्थापन) → `mpsi-syllabus/notes/03-reasoning-analytical-ability/27-mathematical-operations.md`

**Stopped here at user request (2026-09-02) to push to GitHub.** Next point to resume: 28 (असमानता आधारित तर्क).
- [ ] 28. असमानता आधारित तर्क
- [ ] 29. शब्द/वाक्य पुनर्व्यवस्थीकरण
- [ ] 30. समानता एवं भिन्नता
- [ ] 31. मानचित्र आधारित तर्क
- [ ] 32. समय क्रम परीक्षण

**Non-verbal/analytical reasoning (33-45):**
- [ ] 33. आकृति श्रृंखला
- [ ] 34. आकृति सादृश्यता
- [ ] 35. दर्पण व जल प्रतिबिंब
- [ ] 36. कागज़ मोड़ना/काटना
- [ ] 37. एम्बेडेड आकृतियाँ
- [ ] 38. घन एवं पासा
- [ ] 39. पासे का प्रकटन/नेट
- [ ] 40. आकृति गणना
- [ ] 41. आकृति वर्गीकरण
- [ ] 42. आकृति/पैटर्न पूर्णता
- [ ] 43. आकृतियों का निर्माण/विभाजन
- [ ] 44. घड़ी एवं कैलेंडर आधारित तर्क
- [ ] 45. आरेख/ग्राफ की व्याख्या

**Analytical/problem-solving (46-55):**
- [ ] 46. जटिल तर्क आधारित समस्या समाधान
- [ ] 47. तार्किक व्यंजक/डिसीज़न ट्री
- [ ] 48. निर्णयन — परिस्थितिजन्य प्रश्न
- [ ] 49. समस्या समाधान
- [ ] 50. डेटा व्याख्या — तालिका
- [ ] 51. डेटा व्याख्या — बार/पाई/लाइन चार्ट
- [ ] 52. गद्यांश आधारित तार्किक विश्लेषण
- [ ] 53. तार्किक निष्कर्षण — गद्यांश आधारित
- [ ] 54. सामान्य मानसिक क्षमता
- [ ] 55. पारस्परिक कौशल एवं संचार कौशल

### Progress tracker — other checklist files

Not started: 02, 03, 04, 05, 06, 07, 08, 09.
