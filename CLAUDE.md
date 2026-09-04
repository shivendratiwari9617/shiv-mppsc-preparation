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
- [x] 28. असमानता आधारित तर्क → `mpsi-syllabus/notes/03-reasoning-analytical-ability/28-inequality-reasoning.md`
- [x] 29. शब्द/वाक्य पुनर्व्यवस्थीकरण → `mpsi-syllabus/notes/03-reasoning-analytical-ability/29-jumbling.md`
- [x] 30. समानता एवं भिन्नता → `mpsi-syllabus/notes/03-reasoning-analytical-ability/30-similarities-differences.md`
- [x] 31. मानचित्र आधारित तर्क → `mpsi-syllabus/notes/03-reasoning-analytical-ability/31-map-based-reasoning.md`
- [x] 32. समय क्रम परीक्षण → `mpsi-syllabus/notes/03-reasoning-analytical-ability/32-time-sequence-test.md`

**Verbal reasoning (1-32) COMPLETE.** Moving into non-verbal/figure reasoning (33-45) next.

**Non-verbal/analytical reasoning (33-45):**
- [x] 33. आकृति श्रृंखला → `mpsi-syllabus/notes/03-reasoning-analytical-ability/33-figure-series.md`
- [x] 34. आकृति सादृश्यता → `mpsi-syllabus/notes/03-reasoning-analytical-ability/34-figure-analogy.md`
- [x] 35. दर्पण व जल प्रतिबिंब → `mpsi-syllabus/notes/03-reasoning-analytical-ability/35-mirror-water-image.md`
- [x] 36. कागज़ मोड़ना/काटना → `mpsi-syllabus/notes/03-reasoning-analytical-ability/36-paper-folding-cutting.md`
- [x] 37. एम्बेडेड आकृतियाँ → `mpsi-syllabus/notes/03-reasoning-analytical-ability/37-embedded-figures.md`
- [x] 38. घन एवं पासा → `mpsi-syllabus/notes/03-reasoning-analytical-ability/38-cubes-and-dice.md`
- [x] 39. पासे का प्रकटन/नेट → `mpsi-syllabus/notes/03-reasoning-analytical-ability/39-cube-net-unfolding.md`
- [x] 40. आकृति गणना → `mpsi-syllabus/notes/03-reasoning-analytical-ability/40-counting-figures.md`
- [x] 41. आकृति वर्गीकरण → `mpsi-syllabus/notes/03-reasoning-analytical-ability/41-figure-classification.md`
- [x] 42. आकृति/पैटर्न पूर्णता → `mpsi-syllabus/notes/03-reasoning-analytical-ability/42-pattern-completion.md`
- [x] 43. आकृतियों का निर्माण/विभाजन → `mpsi-syllabus/notes/03-reasoning-analytical-ability/43-figure-formation-division.md`
- [x] 44. घड़ी एवं कैलेंडर आधारित तर्क → `mpsi-syllabus/notes/03-reasoning-analytical-ability/44-clock-calendar-reasoning.md`
- [x] 45. आरेख/ग्राफ की व्याख्या → `mpsi-syllabus/notes/03-reasoning-analytical-ability/45-graph-interpretation.md`

**Non-verbal/figure reasoning (33-45) COMPLETE.** Moving into analytical/problem-solving (46-55) next.

**Analytical/problem-solving (46-55):**
- [x] 46. जटिल तर्क आधारित समस्या समाधान → `mpsi-syllabus/notes/03-reasoning-analytical-ability/46-complex-problem-solving.md`
- [x] 47. तार्किक व्यंजक/डिसीज़न ट्री → `mpsi-syllabus/notes/03-reasoning-analytical-ability/47-logical-expressions-decision-tree.md`
- [x] 48. निर्णयन — परिस्थितिजन्य प्रश्न → `mpsi-syllabus/notes/03-reasoning-analytical-ability/48-situational-decision-making.md`
- [x] 49. समस्या समाधान → `mpsi-syllabus/notes/03-reasoning-analytical-ability/49-problem-solving-framework.md`
- [x] 50. डेटा व्याख्या — तालिका → `mpsi-syllabus/notes/03-reasoning-analytical-ability/50-data-interpretation-tables.md`
- [x] 51. डेटा व्याख्या — बार/पाई/लाइन चार्ट → `mpsi-syllabus/notes/03-reasoning-analytical-ability/51-data-interpretation-charts.md`
- [x] 52. गद्यांश आधारित तार्किक विश्लेषण → `mpsi-syllabus/notes/03-reasoning-analytical-ability/52-passage-critical-reasoning.md`
- [x] 53. तार्किक निष्कर्षण — गद्यांश आधारित → `mpsi-syllabus/notes/03-reasoning-analytical-ability/53-logical-inference-passages.md`
- [x] 54. सामान्य मानसिक क्षमता → `mpsi-syllabus/notes/03-reasoning-analytical-ability/54-general-mental-ability.md`
- [x] 55. पारस्परिक कौशल एवं संचार कौशल → `mpsi-syllabus/notes/03-reasoning-analytical-ability/55-interpersonal-communication-skills.md`

**File 03 (तर्कशक्ति एवं विश्लेषणात्मक क्षमता) is COMPLETE — all 55 points done.**

### Progress tracker — 04-numerical-aptitude.md (33 substantive points; point 34 is a cross-reference to file 03, already covered, not tracked separately)

User confirmed start on this file. Notes go in `mpsi-syllabus/notes/04-numerical-aptitude/`. Point numbers match `mpsi-syllabus/missing-topics/04-numerical-aptitude.md`. **Math accuracy matters here — verify every formula/worked example, these are objectively checkable facts, not judgment calls.**

**आधार संख्याएं, सांख्यिकी, प्रायिकता (1-5):**
- [x] 1. संख्या पद्धति (पूर्णांक, भिन्न, अभाज्य, HCF/LCM) → `mpsi-syllabus/notes/04-numerical-aptitude/01-number-system.md`
- [x] 2. सरलीकरण (BODMAS) → `mpsi-syllabus/notes/04-numerical-aptitude/02-simplification.md`
- [x] 3. वर्गमूल एवं घनमूल → `mpsi-syllabus/notes/04-numerical-aptitude/03-square-cube-roots.md`
- [x] 4. औसत (Average) → `mpsi-syllabus/notes/04-numerical-aptitude/04-average.md`
- [x] 5. प्रायिकता (Probability) → `mpsi-syllabus/notes/04-numerical-aptitude/05-probability.md`

**आंकड़ों का प्रबंधन एवं व्याख्या (6-14):**
- [x] 6. दंड आरेख (Bar graph) → `mpsi-syllabus/notes/04-numerical-aptitude/06-bar-graph.md`
- [x] 7. रेखा आरेख (Line graph) → `mpsi-syllabus/notes/04-numerical-aptitude/07-line-graph.md`
- [x] 8. पाई चार्ट (Pie chart) → `mpsi-syllabus/notes/04-numerical-aptitude/08-pie-chart.md`
- [x] 9. सारणी आधारित डेटा व्याख्या → `mpsi-syllabus/notes/04-numerical-aptitude/09-tabulation.md`
- [x] 10. मिश्रित/संयुक्त आंकड़ा व्याख्या → `mpsi-syllabus/notes/04-numerical-aptitude/10-combined-data-interpretation.md`
- [x] 11. माध्य (Mean) → `mpsi-syllabus/notes/04-numerical-aptitude/11-mean.md`
- [x] 12. माध्यिका (Median) → `mpsi-syllabus/notes/04-numerical-aptitude/12-median.md`
- [x] 13. बहुलक (Mode) → `mpsi-syllabus/notes/04-numerical-aptitude/13-mode.md`
- [x] 14. विचलन — माध्य/मानक विचलन → `mpsi-syllabus/notes/04-numerical-aptitude/14-deviation.md`

**अनुपात, समानुपात, इकाई विधि (15-22):**
- [x] 15. अनुपात एवं समानुपात → `mpsi-syllabus/notes/04-numerical-aptitude/15-ratio-proportion.md`
- [x] 16. इकाई विधि → `mpsi-syllabus/notes/04-numerical-aptitude/16-unitary-method.md`
- [x] 17. साझेदारी → `mpsi-syllabus/notes/04-numerical-aptitude/17-partnership.md`
- [x] 18. मिश्रण एवं आरोपण → `mpsi-syllabus/notes/04-numerical-aptitude/18-mixture-alligation.md`
- [x] 19. समय एवं कार्य → `mpsi-syllabus/notes/04-numerical-aptitude/19-time-and-work.md`
- [x] 20. पाइप एवं टंकी → `mpsi-syllabus/notes/04-numerical-aptitude/20-pipes-and-cisterns.md`
- [x] 21. समय, चाल एवं दूरी → `mpsi-syllabus/notes/04-numerical-aptitude/21-time-speed-distance.md`
- [x] 22. आयु संबंधी समस्याएं → `mpsi-syllabus/notes/04-numerical-aptitude/22-age-problems.md`

**लाभ-हानि, प्रतिशत, छूट, ब्याज (23-27):**
- [x] 23. प्रतिशत → `mpsi-syllabus/notes/04-numerical-aptitude/23-percentage.md`
- [x] 24. लाभ एवं हानि → `mpsi-syllabus/notes/04-numerical-aptitude/24-profit-and-loss.md`
- [x] 25. छूट → `mpsi-syllabus/notes/04-numerical-aptitude/25-discount.md`
- [x] 26. साधारण ब्याज → `mpsi-syllabus/notes/04-numerical-aptitude/26-simple-interest.md`
- [x] 27. चक्रवृद्धि ब्याज → `mpsi-syllabus/notes/04-numerical-aptitude/27-compound-interest.md`

**क्षेत्रमिति (28-30):**
- [x] 28. क्षेत्रफल → `mpsi-syllabus/notes/04-numerical-aptitude/28-area.md`
- [x] 29. परिमाप → `mpsi-syllabus/notes/04-numerical-aptitude/29-perimeter.md`
- [x] 30. आयतन एवं पृष्ठीय क्षेत्रफल → `mpsi-syllabus/notes/04-numerical-aptitude/30-volume-surface-area.md`

**बीजगणित, ज्यामिति, त्रिकोणमिति (31-33):**
- [x] 31. बीजगणित → `mpsi-syllabus/notes/04-numerical-aptitude/31-algebra.md`
- [x] 32. ज्यामिति → `mpsi-syllabus/notes/04-numerical-aptitude/32-geometry.md`
- [x] 33. त्रिकोणमिति → `mpsi-syllabus/notes/04-numerical-aptitude/33-trigonometry.md`

**File 04 (अंकों की व्याख्या) is COMPLETE — all 33 substantive points done.**

### Format change starting at file 05 — Mains-answer-sheet depth (GS-content subjects)

Files 01-04 (Hindi/English/Reasoning/Numerical) were skill/rule-based subjects — depth meant covering every rule, formula, and trap. File 05 onward starts a run of **GS-content subjects** (Indian Society, and likely Internal Security file 06, Computer Knowledge file 07, Mechanical Engineering file 08, Additional Gaps file 09) where the user has set a different, explicit bar:

- **800-1000 lines per point** (not per file) — a large increase from the 150-300 line notes used in files 01-04.
- Written in the **style of a top-rank MPPSC Mains candidate's answer/study material**: proper introduction, thematic sub-headings in the body (concept/theory → data/statistics → examples/case studies → relevant government schemes → sociological/expert perspectives with named thinkers where relevant → challenges/criticism → current-affairs linkage → way forward), and a conclusion — not a quick-reference cheat-sheet like files 01-04.
- **Live web research required before writing each point** (user explicitly confirmed this over "write from existing knowledge") — Census/NFHS figures, scheme names, recent movements/events, and sociological terminology must be verified via WebSearch/WebFetch, not assumed from training knowledge, since this is fact-heavy GS content where staleness or fabrication is a real risk (unlike the stable, derivable rules in files 01-04).
- This format is confirmed for file 05. Whether it also applies to files 06-09 has not been explicitly confirmed yet — ask before assuming it carries over, since those files mix GS-content (internal security) with a highly technical engineering syllabus (mechanical engineering, file 08) where an 800-1000-line "Mains answer" framing may not fit and should be checked with the user first.

### Progress tracker — 05-indian-society.md (22 points)

Notes go in `mpsi-syllabus/notes/05-indian-society/`. Point numbers match `mpsi-syllabus/missing-topics/05-indian-society.md`.

- [x] 1. भारतीय समाज की मुख्य विशेषताएं — बहुलवाद, विविधता में एकता → `mpsi-syllabus/notes/05-indian-society/01-features-pluralism-unity-in-diversity.md` (736 lines — confirmed as template for remaining points in this file: भूमिका → सैद्धांतिक पृष्ठभूमि → ऐतिहासिक विकास → विस्तृत विवेचन (bullet-heavy) → संवैधानिक आधार → सरकारी पहल → चुनौतियाँ → अंतरराष्ट्रीय तुलना → समसामयिक प्रासंगिकता → आगे की राह → निष्कर्ष → 7 मॉडल उत्तर → अतिरिक्त प्रश्न → MP-विशिष्ट संदर्भ → mind-map → glossary → परीक्षा-केंद्रित सार → स्रोत)
- [x] 2. सामाजिक-सांस्कृतिक विविधता — भाषा, धर्म, क्षेत्र → `mpsi-syllabus/notes/05-indian-society/02-sociocultural-diversity-language-religion-region.md` (711 lines — 3 parts: भाग A भाषा (नीति-इतिहास, त्रिभाषा सूत्र, तमिलनाडु विरोध, शास्त्रीय भाषाएं, लुप्तप्राय भाषाएं), भाग B धर्म (जनसांख्यिकी रुझान, सकारात्मक पंथनिरपेक्षता, समन्वयवाद), भाग C क्षेत्र (6 सांस्कृतिक क्षेत्र, ZCC, शास्त्रीय नृत्य) — हर भाग में अंतरराष्ट्रीय तुलना (स्विट्ज़रलैंड/कनाडा, लेबनान/अमेरिका, स्पेन/यूके) + असम NRC, मणिपुर 2023, कावेरी विवाद केस-स्टडी + 7 मॉडल उत्तर + MP उप-क्षेत्र तालिका)
- [x] 3. सामाजिक संरचना — जाति व्यवस्था, वर्ण व्यवस्था → `mpsi-syllabus/notes/05-indian-society/03-caste-varna-system-historical-evolution.md` (620 lines — वर्ण-जाति सैद्धांतिक ढाँचा, घुर्ये की 6 विशेषताएं, समाजशास्त्रीय दृष्टिकोण (घुर्ये/आंबेडकर/ड्यूमों/श्रीनिवास/बेती), औपनिवेशिक कठोरीकरण, जाति-विरोधी सुधार आंदोलन, जाति vs जनजाति भेद, आरक्षण-नीति इतिहास (मंडल→इंद्रा साहनी→EWS→रोहिणी आयोग→2024 SC/ST उप-वर्गीकरण), जाति-जनगणना गहन कवरेज (बिहार सर्वेक्षण 2023 + राष्ट्रीय जनगणना 2027 — नवीनतम समसामयिक), अंतरराष्ट्रीय तुलना (अपार्थाइड/बुराकुमिन/अफर्मेटिव एक्शन/रवांडा), 8 मॉडल उत्तर, MP-विशिष्ट संदर्भ)
- [x] 4. संयुक्त परिवार से एकल परिवार में परिवर्तन → `mpsi-syllabus/notes/05-indian-society/04-joint-family-to-nuclear-family-transition.md` (464 lines — संयुक्त/न्यूक्लियर/विस्तारित परिवार संरचना, NFHS-5 आँकड़े, देसाई की "जॉइंटनेस की मात्रा" व शाह की गृहस्थी-परिवार भेद, हिंदू उत्तराधिकार अधिनियम 2005 व विनीता शर्मा वाद, वृद्धजन कल्याण कानून/योजनाएं (2007 अधिनियम, AVYAY, एल्डरलाइन), अंतरराष्ट्रीय तुलना (चीन 4-2-1, जापान-कोरिया कोडोकुशी), 6 मॉडल उत्तर, MP-विशिष्ट संदर्भ)
- [x] 5. भारत/MP जनसांख्यिकी — जनगणना, लिंगानुपात, आयु-संरचना → `mpsi-syllabus/notes/05-indian-society/05-india-mp-demographics-census-sex-ratio-age-structure.md` (377 lines — जनगणना इतिहास व 2027 योजना, लिंगानुपात जनगणना vs NFHS पद्धतिगत भेद, बाल लिंगानुपात/PCPNDT/बेटी बचाओ बेटी पढ़ाओ, आयु-संरचना व जनसंख्या पिरामिड, निर्भरता अनुपात व जनसांख्यिकीय लाभांश खिड़की 2036, MP आँकड़े, उत्तर-दक्षिण परिसीमन विवाद, अंतरराष्ट्रीय तुलना (चीन/जापान/अफ्रीका), 5 मॉडल उत्तर)
- [x] 6. जनसंख्या वृद्धि व जनसांख्यिकीय लाभांश → `mpsi-syllabus/notes/05-indian-society/06-population-growth-demographic-dividend.md` (289 lines — लाभांश की सैद्धांतिक शर्तें, भारत 68% कार्यशील-आयु/2036 शिखर, राज्य-वर्गीकरण: वृद्ध होती सीमा (केरल-तमिलनाडु-पंजाब) बनाम युवा इंजन (**MP**-बिहार-यूपी) — MP सीधे प्रासंगिक, कौशल-अंतराल (43% रोजगार-योग्य) व महिला भागीदारी (24%) चुनौती, स्किल इंडिया/PM इंटर्नशिप योजना, अंतरराष्ट्रीय तुलना (पूर्वी एशिया सफल बनाम लैटिन अमेरिका असफल बनाम चीन दोहन-पश्चात संकुचन), 4 मॉडल उत्तर)
- [x] 7. प्रवास (Migration) → `mpsi-syllabus/notes/05-indian-society/07-migration-internal-international-causes-effects.md` (280 lines — आंतरिक प्रवास आँकड़े (45.36 करोड़ जनगणना vs ~60 करोड़ वास्तविक अनुमान, 85% राज्य के भीतर), लिंग-आधारित कारण-भिन्नता (महिला-विवाह 86.8%/पुरुष-रोजगार 49.6%), ली का प्रवास सिद्धांत, अंतर्राष्ट्रीय प्रेषण ($135bn 2025, विश्व में सर्वाधिक, खाड़ी→अमेरिका संरचनात्मक बदलाव), कोविड-19 प्रवासी श्रमिक संकट केस-स्टडी, e-Shram/ONORC, MP स्रोत-राज्य संदर्भ, 3 मॉडल उत्तर)
- [x] 8. महिलाओं की सामाजिक-आर्थिक भूमिका → `mpsi-syllabus/notes/05-indian-society/08-women-socioeconomic-role-education-employment-leadership.md` (272 lines — शिक्षा (साक्षरता अंतराल 14.4pp, उच्च शिक्षा GER महिला अब पुरुष से आगे 28.5%>28.3%), रोजगार (FLFPR 23.3%→41.7% पर गुणवत्ता-चिंता — अनौपचारिक/अवैतनिक केंद्रण, अवैतनिक कार्य 363 बनाम 123 मिनट), नेतृत्व पिरामिड-संकुचन (कॉर्पोरेट बोर्ड 18.67%/CEO 5.1%, SC न्यायाधीश केवल 3.1%, पंचायत 46%/14 लाख+ प्रतिनिधि), नारी शक्ति वंदन अधिनियम 2023 व विलंबित क्रियान्वयन (2029 तक), अंतरराष्ट्रीय तुलना (नॉर्डिक/रवांडा), 3 मॉडल उत्तर)
- [x] 9. महिला संगठन — SHG, महिला आयोग, आंदोलन → `mpsi-syllabus/notes/05-indian-society/09-women-organizations-shg-commission-movements.md` (253 lines — DAY-NRLM SHG आँकड़े (10.05 करोड़ महिलाएँ/90.90 लाख SHG, ₹10 लाख करोड़+ ऋण, 96%+ चुकौती, लखपति दीदी 1.48/3 करोड़), NCW शक्तियाँ व MP राज्य महिला आयोग (1998), 5 ऐतिहासिक आंदोलन (चिपको/सेवा/शराब-विरोधी/विशाखा/निर्भया) तुलनात्मक तालिका सहित, MP आजीविका मार्ट, 3 मॉडल उत्तर)
- [x] 10. लैंगिक असमानता के मुद्दे → `mpsi-syllabus/notes/05-indian-society/10-gender-inequality-wage-gap-representation-domestic-violence.md` (253 lines — अवैतनिक कार्य-अंतराल (Time Use Survey 2024: 289 बनाम 88 मिनट, GDP में संभावित 7%+), प्रतिनिधित्व-अंतराल संक्षिप्त पुनरावलोकन, घरेलू हिंसा गहन कवरेज (NFHS-6 22.3%/5.6 करोड़ बनाम NCRB दर्ज केवल 4.4 लाख — विशाल अंडर-रिपोर्टिंग गैप, ₹4.6 लाख करोड़ आर्थिक लागत), PWDVA 2005/निर्भया कोष (76% उपयोग)/OSC/हेल्पलाइन 181, अंतरराष्ट्रीय तुलना (आइसलैंड/स्पेन/रवांडा), 3 मॉडल उत्तर)
- [x] 11. गरीबी — परिभाषा, मापन, प्रकार → `mpsi-syllabus/notes/05-indian-society/11-poverty-definition-measurement-types.md` (245 lines — निरपेक्ष/सापेक्ष गरीबी भेद, अमर्त्य सेन क्षमता उपागम, मापन-इतिहास (कैलोरी→तेंदुलकर 2005→रंगराजन 2014 कभी न अपनाई गई), वर्तमान NITI Aayog MPI (अल्काइर-फॉस्टर, 29.17%→11.28%, 24.82 करोड़ बाहर निकले), MP गहन कवरेज (36.57%→20.63%, देश में दूसरा सर्वश्रेष्ठ सुधार, 2.3 करोड़ बाहर निकले), अंतरराष्ट्रीय तुलना, 3 मॉडल उत्तर)
- [x] 12. गरीबी उन्मूलन कार्यक्रम — सामाजिक प्रभाव → `mpsi-syllabus/notes/05-indian-society/12-poverty-alleviation-programs-social-context.md` (239 lines — मनरेगा (100 दिन गारंटी, प्रवासन-कमी/महिला-भागीदारी सामाजिक प्रभाव), PMAY (3.21 करोड़ स्वीकृत, महिला संपत्ति-स्वामित्व गरिमा), NFSA/AAY/PMGKAY (81.35 करोड़ लाभार्थी=57% जनसंख्या, 2028 तक विस्तारित), NRLM बिंदु 9 से जोड़, समेकित प्रभाव (41.5 करोड़ बाहर निकले — वैश्विक MPI 2024), समावेशन/बहिष्करण त्रुटि व आश्रय-बनाम-सशक्तिकरण बहस, अंतरराष्ट्रीय तुलना (ब्राज़ील बोल्सा फैमिलिया), 3 मॉडल उत्तर)
- [x] 13. विकास एवं गरीबी का अंतर्संबंध → `mpsi-syllabus/notes/05-indian-society/13-development-poverty-interrelationship.md` (238 lines — ट्रिकल-डाउन/कुज़नेट्स वक्र/समावेशी विकास सिद्धांत, भारत साक्ष्य (2004-12 गरीबी 3x तेज़ कमी, अत्यंत गरीबी 16.2%→2.3%), जॉबलेस ग्रोथ विरोधाभास (बिंदु 6 से जोड़), असमानता की परस्पर-विरोधी गिनी बहस गहन विवेचन (विश्व बैंक 25.5 "समान" बनाम शीर्ष 10%=77% संपत्ति — पद्धतिगत भेद ईमानदारी से प्रस्तुत), अंतरराष्ट्रीय तुलना (चीन/ब्राज़ील/पूर्वी एशिया), 3 मॉडल उत्तर)
- [x] 14. शहरीकरण — कारण, रुझान, सामाजिक समस्याएं → `mpsi-syllabus/notes/05-indian-society/14-urbanization-causes-trends-social-problems.md` (261 lines — आधिकारिक दर 36.87% बनाम आर्थिक सर्वेक्षण 2025-26 का "छिपा हुआ शहरीकरण" रहस्योद्घाटन (उपग्रह-डेटा अनुसार वास्तविक ~82.6%, परिधि-से-केंद्र वृद्धि अनुपात >1), राज्यवार असमानता, सामाजिक समस्याएं (मलिन बस्ती/अवसंरचना-दबाव/सामाजिक अलगाव/अपराध), स्मार्ट सिटीज़ मिशन, MP गहन केस-स्टडी (भोपाल विस्तार 26.3→185.19 वर्ग किमी बनाम इंदौर स्वच्छता-मॉडल), अंतरराष्ट्रीय तुलना, 3 मॉडल उत्तर)
- [x] 15. शहरीकरण समाधान — नियोजन, स्मार्ट सिटी → `mpsi-syllabus/notes/05-indian-society/15-urbanization-planning-solutions-smart-cities.md` (233 lines — बिंदु 14 के "समस्या" फोकस से अलग "समाधान" फोकस: 74वाँ संविधान संशोधन व असमान क्रियान्वयन/वित्तीय निर्भरता, मास्टर प्लान (दिल्ली 2047 TOD उदाहरण), RERA 2024-25 संशोधन, स्मार्ट सिटीज़ मिशन ABD मॉडल गहन विश्लेषण (उपलब्धियाँ/द्वीप-सदृश सीमा), AMRUT/GIS-नियोजन/इन-सीटू पुनर्विकास, MP भोपाल-इंदौर ICCC संदर्भ, 3 मॉडल उत्तर)
- [x] 16. वैश्वीकरण का भारतीय समाज पर प्रभाव → `mpsi-syllabus/notes/05-indian-society/16-globalization-impact-on-indian-society.md` (233 lines — 1991 LPG सुधार पृष्ठभूमि, सांस्कृतिक प्रभाव (उपभोक्तावाद/मैकडॉनल्डीकरण +25% फास्ट-फूड, पारिवारिक संरचना बिंदु 4 से जोड़), ग्लोकलाइज़ेशन (मैकडॉनल्ड्स भारतीय-अनुकूलन उदाहरण), योगेंद्र सिंह का सैद्धांतिक योगदान गहन विवेचन (समरूपीकरण नहीं बल्कि बहुलवाद-संकरता-पहचान-सुदृढ़ीकरण, चयनात्मक अनुकूलन व प्रतिरोध), अंतरराष्ट्रीय तुलना (जापान/फ्रांस/दक्षिण कोरिया हैलियू), 3 मॉडल उत्तर)
- [x] 17. सामाजिक स्तरीकरण एवं सामाजिक गतिशीलता → `mpsi-syllabus/notes/05-indian-society/17-social-stratification-mobility.md` (245 lines — वेबर त्रि-आयामी मॉडल (वर्ग-प्रतिष्ठा-शक्ति), गतिशीलता प्रकार व संस्कृतीकरण सामूहिक मॉडल, 2024 नवीनतम अनुभवजन्य शोध गहन विवेचन (ग्रेट गैट्सबी वक्र भारत में पुष्ट, SC/ST 33.28% निरंतरता-गिरावट व आरक्षण-नीति सफलता प्रमाणित, मुस्लिम समुदाय 1960 से निरंतर गिरावट — चिंताजनक विरोधाभास, लैंगिक अंतराल), अंतरराष्ट्रीय तुलना (अमेरिका/नॉर्डिक), 3 मॉडल उत्तर)
- [x] 18. सामाजिक आंदोलन — दलित, आदिवासी, किसान → `mpsi-syllabus/notes/05-indian-society/18-social-movements-dalit-adivasi-farmer.md` (230 lines — भीम आर्मी (2015, आधुनिक दलित मुखरता), आदिवासी "जल-जंगल-ज़मीन" गहन कवरेज (FRA 2006 छत्तीसगढ़ खराब क्रियान्वयन/1लाख+ विस्थापित, पत्थलगड़ी आंदोलन 2016→MP विस्तार, नर्मदा बचाओ आंदोलन **MP-केंद्रित** मेधा पाटकर), किसान आंदोलन 2020-21 (कानून-निरस्तीकरण दिसंबर 2021, MSP-गारंटी लंबित), तुलनात्मक तालिका, अंतरराष्ट्रीय तुलना (ब्राज़ील MST), 3 मॉडल उत्तर)
- [x] 19. साम्प्रदायिकता, क्षेत्रवाद व भाषावाद → `mpsi-syllabus/notes/05-indian-society/19-communalism-regionalism-linguism.md` (234 lines — बिंदु 2 के "सकारात्मक बहुलवाद" फ्रेम से अलग "विभाजनकारी खतरा" विश्लेषणात्मक फ्रेम: साम्प्रदायिकता 3 प्रकार+कारण+2024 डेटा (59 दंगे, 84% वृद्धि — CSSS), क्षेत्रवाद सन-ऑफ-द-सॉइल सिद्धांत (शिवसेना-महाराष्ट्र, असम आंदोलन 1979-85→असम समझौता), भाषावाद संक्षिप्त पुनर्स्थापन, अंतरराष्ट्रीय तुलना (यूगोस्लाविया विघटन/श्रीलंका गृहयुद्ध/बेल्जियम सफल), 3 मॉडल उत्तर)
- [x] 20. सामाजिक न्याय की अवधारणा → `mpsi-syllabus/notes/05-indian-society/20-concept-of-social-justice.md` (218 lines — संश्लेषणात्मक बिंदु जोड़ता बिंदु 3/8-10/11-13/18: जॉन रॉल्स सिद्धांत गहन विवेचन (मूल स्थिति/अज्ञानता का पर्दा/भिन्नता सिद्धांत/सुधार सिद्धांत — आरक्षण का सैद्धांतिक आधार), अमर्त्य सेन/अरस्तू/मार्क्स तुलना, संवैधानिक ढाँचा (प्रस्तावना में न्याय प्रथम), समानता-बनाम-समता बहस, अंतरराष्ट्रीय तुलना (दक्षिण अफ्रीका BEE/अमेरिका 2023 SC निर्णय), 3 मॉडल उत्तर)
- [x] 21. बाल विवाह, दहेज प्रथा, अस्पृश्यता व सुधार आंदोलन → `mpsi-syllabus/notes/05-indian-society/21-child-marriage-dowry-untouchability-reform-movements.md` (230 lines — बाल विवाह गहन डेटा (47%→23.3%→20.1% NFHS-6, शारदा अधिनियम 1929→PCMA 2006), दहेज प्रथा (धारा 498A/304B, NCRB 2024: 5737 हत्या/1693 आत्महत्या +6.7%), अस्पृश्यता सुधार आंदोलन विस्तार (बिंदु 3 से आगे — वायकोम सत्याग्रह 1924-25, मंदिर-प्रवेश उद्घोषणा 1936), साझा "कानून-प्रथा अंतराल" पैटर्न विश्लेषण, 3 मॉडल उत्तर)
- [x] 22. वृद्धजन कल्याण एवं दिव्यांगजन समावेशन → `mpsi-syllabus/notes/05-indian-society/22-elderly-welfare-disability-inclusion.md` (224 lines — बिंदु 4 को अद्यतन करता: वृद्धजन जनसंख्या प्रक्षेपण (2050 तक 30 करोड़+), आयुष्मान भारत 70+ विस्तार अक्टूबर 2024 (सबसे नवीनतम पहल), वृद्धजन-दुर्व्यवहार डेटा-विसंगति (LASI 5.22% बनाम अन्य अध्ययन 44.6%), दिव्यांगजन समावेशन नया विषय (RPwD अधिनियम 2016: 7→21 श्रेणियाँ, सुगम्य भारत अभियान, UDID, जनगणना 2011 2.68 करोड़ बनाम WHO अनुमान 7-10 करोड़ भारी अंडर-काउंटिंग व जनगणना 2027 श्रेणी-विवाद), दोनों में साझा डेटा-अंतराल पैटर्न विश्लेषण, अंतरराष्ट्रीय तुलना (जापान/UNCRPD/स्वीडन), 3 मॉडल उत्तर)

**फ़ाइल 05 (भारतीय समाज) है COMPLETE — सभी 22 बिंदु पूर्ण।**

Point 34 (तार्किक शक्ति...) — not a separate note, already covered in file 03.

### Progress tracker — other checklist files

**All 9 checklist files are now COMPLETE** (01 हिंदी भाषायी बोध, 02 English, 03 तर्कशक्ति, 04 अंकों की व्याख्या, 05 भारतीय समाज, 06 आंतरिक सुरक्षा एवं पुलिस की भूमिका, 07 बुनियादी कंप्यूटर ज्ञान, 08 तकनीकी पेपर — मैकेनिकल इंजीनियरिंग, 09 Additional Gaps in Covered Units). **The MPSI/MP-govt missing-topics note-authoring project is finished** — every checklist point across all 9 files has a corresponding deep-dive Markdown note. Any further work here would be revision/expansion of existing notes, not new checklist points.

### Progress tracker — 09-additional-gaps-in-covered-units.md (3 items, 20 sub-topics)

**Format:** Same lean/fact-dense, web-verified style as files 06-08 (not the heavy 800-1000-line file-05 style) — user said "must cover facts." Unlike files 01-08, this checklist isn't numbered 1-N flat points; it has **3 named gap-items** (each a specific missing sub-clause inside an otherwise-covered Mains Paper-I unit), each with a "topics to add" sub-list. One file was written per item (not per sub-topic), since each item's sub-topics form one cohesive subject. This is **MPPSC Mains-level GS content** (history/polity), not MPSI-technical — web-verified all checkable facts (Act years, founding dates of organisations, traveller dates) via WebSearch rather than assuming from memory, consistent with the file-05/06/07 rule for fact-heavy GS content.

- [x] 1. औपनिवेशिक नगरीकरण तथा नगर योजना → `mpsi-syllabus/notes/09-additional-gaps-in-covered-units/01-colonial-urbanization-town-planning.md` (all 7 sub-topics: presidency towns, civil lines vs native town, cantonments, Bombay Municipal Corporation Act 1888, hill stations incl. MP's पचमढ़ी, railway towns Jamalpur/Kharagpur, Jamshedpur — web-verified Act year, TISCO 1912/naming 1919)
- [x] 2. दबाव समूह एवं औपचारिक/अनौपचारिक संघ → `mpsi-syllabus/notes/09-additional-gaps-in-covered-units/02-pressure-groups-formal-informal-associations.md` (all 7 sub-topics: pressure group types, lobbying methods, FICCI 1927/CII roots-1895-renamed-1992, AITUC 1920/INTUC 1947/BMS 1955 with party affiliations, civil society/NGO/FCRA, formal vs informal association, media as informal pressure group, pressure group vs political party distinction — all founding dates web-verified)
- [x] 3. मध्यकालीन यात्री विवरण — विस्तार (thin, not absent) → `mpsi-syllabus/notes/09-additional-gaps-in-covered-units/03-medieval-travellers-al-biruni-marco-polo.md` (sub-topics 8-10: Al-Biruni/Kitab-ul-Hind methodology, Marco Polo Deccan/Malabar merchant account, comparative analysis with Ibn Battuta/Abdur Razzaq across 4 travellers' era/role/focus — web-verified)

**फ़ाइल 09 (अतिरिक्त सूक्ष्म अंतराल) है COMPLETE — सभी 3 आइटम, 20 उप-विषय पूर्ण।**

### Progress tracker — 08-technical-paper-group1-mechanical.md (62 points)

**Format for this file (confirmed by user, differs from files 06/07):** User explicitly asked for **stricter rules** than files 06/07, given this content is also shared with RRB (Railway) technical-paper syllabus, not just MPSI. Confirmed via AskUserQuestion at file start:
- **Language**: English-primary, with Hindi terms given once per concept for syllabus-matching — not Hindi-primary with English in parentheses (the style used in files 01-07). Matches how mechanical engineering is actually taught/tested even in Hindi-medium prep.
- **Depth**: "Lean formula+fact sheet" — key definitions, formulas, standard values/units, and the 3-5 facts that actually recur in objective (MCQ, -ve marking) papers; no derivations/proofs, no artificial padding. User reinforced mid-file ("all points must be deeply covered based on facts and importancy") — interpreted as full, non-compressed coverage of every sub-topic *within* a point's stated scope, not padding beyond it.
- **Points 61-62** (vague, post-specific "Ordnance/weapon-system mechanical concepts" and "Ordnance maintenance & inspection," not standard ME curriculum): user chose "best-effort from general ordnance/small-arms engineering knowledge, flagged as unverified" over skipping — both files carry an explicit ⚠️ caveat banner stating there is no confirmed official SI-Ordnance syllabus/paper source, and recommending official department material be prioritized if available.
- Every point verified against standard, stable undergraduate mechanical-engineering textbook knowledge (statics, SOM, thermo, fluid mechanics, TOM, machine design, manufacturing, metrology are universal/stable content not requiring live web search, same treatment as file 04's numerical aptitude) — no numeric/factual web-verification was needed for this file, unlike files 05-07.
- Location: `mpsi-syllabus/notes/08-technical-paper-group1-mechanical/<NN-topic-slug>.md`. Point numbers match `mpsi-syllabus/missing-topics/08-technical-paper-group1-mechanical.md`.
- **Scope note**: This paper (Paper III) is only for the SI-Ordnance post specifically (300 marks, 100 objective questions, -1/3 negative marking) — not general MPSI/MPPSC. Per user, the content is written to serve RRB JE/ALP/Technician and other PSC technical papers too, since they draw from the same standard mechanical engineering objective syllabus.

**Engineering Mechanics (1-5):**
- [x] 1. बल तंत्र, परिणामी बल एवं संतुलन → `01-force-systems-resultant-equilibrium.md` (parallelogram/triangle/polygon law, moments, couples, Lami's theorem)
- [x] 2. घर्षण के नियम → `02-laws-of-friction.md` (laws of static/kinetic friction, μ=tanφ, angle of repose, cone of friction)
- [x] 3. केन्द्रक, गुरुत्व केन्द्र व जड़त्व आघूर्ण → `03-centroid-centre-of-gravity-moment-of-inertia.md` (standard I formulas, parallel/perpendicular axis theorems)
- [x] 4. ट्रस व फ्रेम विश्लेषण → `04-analysis-of-trusses-frames.md` (m=2j-3, method of joints/sections, zero-force member rules)
- [x] 5. संवेग व आघात → `05-momentum-impact-linear-angular.md` (coefficient of restitution, elastic/inelastic collision, angular momentum conservation)

**Strength of Materials (6-9):**
- [x] 6. प्रतिबल-विकृति संबंध, हुक का नियम → `06-stress-strain-hookes-law.md` (E=2G(1+μ)=3K(1-2μ), stress-strain curve, ductile vs brittle)
- [x] 7. SFD व BMD → `07-shear-force-bending-moment-diagrams.md` (dM/dx=V, standard cases: cantilever/SSB with point load/UDL)
- [x] 8. बंकन प्रतिबल, मरोड़ व विक्षेपण → `08-bending-stress-torsion-deflection-of-beams.md` (M/I=σ/y=E/R, T/J=τ/r=Gθ/L, standard deflection formulas)
- [x] 9. पतले सिलेंडर / प्रेशर वेसल → `09-thin-cylinders-pressure-vessels.md` (σh=pd/2t, σl=pd/4t, σh=2σl)

**Material Science (10-12):**
- [x] 10. धातुओं के यांत्रिक गुण → `10-mechanical-properties-of-metals.md` (ductility vs malleability, Brinell/Rockwell/Vickers, Izod/Charpy, fatigue/creep)
- [x] 11. मिश्रधातु व इस्पात के प्रकार → `11-alloys-types-of-steel.md` (steel vs CI carbon-content boundary, grey/white/malleable/SG cast iron, stainless steel Cr role)
- [x] 12. ताप उपचार प्रक्रियाएं → `12-heat-treatment-processes.md` (annealing/normalizing/hardening/tempering comparison table, case hardening methods)

**Thermodynamics (13-16):**
- [x] 13. ऊष्मागतिकी के नियम → `13-laws-of-thermodynamics.md` (Zeroth/First/Second law, Kelvin-Planck/Clausius statements, PMM1/PMM2, entropy)
- [x] 14. वायु मानक चक्र → `14-air-standard-cycles.md` (Carnot/Otto/Diesel cycle efficiency formulas, η_Carnot>η_Otto>η_Diesel)
- [x] 15. ताप अंतरण → `15-heat-transfer-conduction-convection-radiation.md` (Fourier's law, Newton's law of cooling, Stefan-Boltzmann law)
- [x] 16. ऊष्मा विनिमायक → `16-heat-exchangers.md` (parallel vs counter flow, LMTD, shell-and-tube/plate types)

**IC Engines (17-19):**
- [x] 17. पेट्रोल व डीजल इंजन कार्यप्रणाली → `17-working-of-ic-engines.md` (4-stroke vs 2-stroke, SI vs CI comparison)
- [x] 18. इंजन के भाग → `18-engine-components.md` (piston/crankshaft/camshaft, valve timing, valve overlap)
- [x] 19. कार्बुरेटर व ईंधन इंजेक्शन प्रणाली → `19-carburetor-fuel-injection-system.md` (venturi principle, A:F ratio 14.7:1, CRDI)

**Fluid Mechanics (20-24):**
- [x] 20. द्रव के गुण व दाब मापन → `20-fluid-properties-pressure-measurement.md` (Newton's law of viscosity, Pascal's law, P=ρgh, manometers)
- [x] 21. सांतत्य समीकरण व बर्नूली प्रमेय → `21-continuity-equation-bernoullis-theorem.md` (A1V1=A2V2, Bernoulli's equation, Reynolds number)
- [x] 22. पाइप प्रवाह में हानियाँ → `22-losses-in-pipe-flow.md` (Darcy-Weisbach, major vs minor losses, HGL/TEL)
- [x] 23. केन्द्रापसारी व रेसीप्रोकेटिंग पंप → `23-centrifugal-reciprocating-axial-pumps-fans.md` (priming, cavitation, single/double-acting, fan/blower/compressor)
- [x] 24. टर्बाइन के प्रकार → `24-types-of-turbines.md` (impulse vs reaction, Pelton/Francis/Kaplan head-discharge table)

**Theory of Machines (25-33):**
- [x] 25. समतल यंत्रों का विस्थापन, वेग व त्वरण विश्लेषण → `25-kinematics-slider-crank-mechanism.md` (Grübler's equation, n=l/r, max velocity/acceleration points)
- [x] 26. कैम व फॉलोअर → `26-cams-and-followers.md` (follower/cam types, cycloidal motion = smoothest)
- [x] 27. गियर व गियर ट्रेन → `27-gears-and-gear-trains.md` (module matching requirement, simple/compound/epicyclic trains)
- [x] 28. गवर्नर → `28-governors.md` (governor vs flywheel distinction, Watt/Porter/Proell/Hartnell, hunting/isochronism)
- [x] 29. फ्लाईव्हील → `29-flywheel.md` (K.E.=½Iω², Cs, ΔE=Iω²mean·Cs)
- [x] 30. घूर्णन भागों का संतुलन → `30-balancing-of-rotating-masses.md` (static vs dynamic balancing, Σmr=0 and Σmrl=0)
- [x] 31. गायरोस्कोपिक गति → `31-gyroscopic-motion.md` (Cg=Iωωp, ship pitch/yaw cross-coupling)
- [x] 32. यांत्रिक कंपन → `32-mechanical-vibrations.md` (ωn=√(k/m), resonance, damping ratio classification)
- [x] 33. बेल्ट, रस्सी व चेन ड्राइव → `33-belt-rope-chain-drives.md` (T1/T2=e^μθ, chordal action, belt vs chain vs gear comparison)

**Machine Design (34-39):**
- [x] 34. मशीन डिजाइन के मूल सिद्धांत — सुरक्षा गुणांक → `34-machine-design-basics-factor-of-safety.md` (FoS definition, stress concentration, failure theories)
- [x] 35. वेल्डेड व रिवेटेड जोड़ों का डिजाइन → `35-design-of-welded-riveted-joints.md` (riveted failure modes, fillet weld throat=0.707h)
- [x] 36. शाफ्ट व स्पर गियर डिजाइन → `36-shaft-spur-gear-design.md` (shaft vs axle, equivalent torque/moment, Lewis equation)
- [x] 37. क्लच व ब्रेक → `37-clutches-and-brakes.md` (clutch types, self-energizing/self-locking, drum vs disc brake)
- [x] 38. मशीन तत्व — बेयरिंग व कपलिंग → `38-bearings-and-couplings.md` (rolling vs sliding bearing, hydrodynamic lubrication, coupling vs clutch, L10 life)
- [x] 39. चाबी, कील व फास्टनर → `39-keys-cotter-joints-fasteners.md` (key vs cotter distinction, feather key, minor diameter for bolt strength)

**Manufacturing & Engineering Drawing (40-51):**
- [x] 40. ऑर्थोग्राफिक प्रोजेक्शन → `40-orthographic-projection.md` (First-angle = India/BIS standard, line types)
- [x] 41. सेक्शनल व्यू व डायमेंशनिंग → `41-sectional-views-dimensioning.md` (hatching conventions, non-hatched elements, dimensioning systems)
- [x] 42. कास्टिंग प्रक्रिया → `42-casting-process.md` (cope/drag, riser vs core, pattern allowances, casting defects)
- [x] 43. वेल्डिंग के प्रकार → `43-types-of-welding.md` (SMAW/MIG/TIG, resistance welding, brazing vs soldering 450°C threshold)
- [x] 44. मशीनिंग प्रक्रियाएं → `44-machining-turning-milling-drilling.md` (lathe parts, up vs down milling, reaming vs boring, drill point angle 118°)
- [x] 45. धातु काटने का सिद्धांत, टूल ज्यामिति व टूल लाइफ → `45-mechanics-of-metal-cutting-tool-geometry-tool-life.md` (chip types, Taylor's tool life equation VTⁿ=C)
- [x] 46. ग्राइंडिंग व फिनिशिंग प्रक्रियाएं → `46-grinding-finishing-processes.md` (Al2O3 vs SiC abrasive, self-sharpening, honing/lapping)
- [x] 47. जिग व फिक्सचर डिजाइन के मूल सिद्धांत → `47-jigs-fixtures-design-basics.md` (jig guides tool vs fixture holds work, 3-2-1 principle)
- [x] 48. अपारंपरिक मशीनिंग — EDM, ECM → `48-non-conventional-machining-edm-ecm.md` (dielectric vs electrolyte, tool wear comparison, USM for non-conductive)
- [x] 49. CAD/CAM के बुनियादी सिद्धांत → `49-basics-of-cad-cam.md` (wireframe/surface/solid model, G-code vs M-code)
- [x] 50. मापन उपकरण → `50-measuring-instruments.md` (vernier LC=1MSD-1VSD=0.1mm, micrometer LC=pitch/divisions=0.01mm)
- [x] 51. सीमा, फिट व सहनशीलता → `51-limits-fits-tolerances.md` (clearance/interference/transition fit, hole basis system standard)

**Thermal Engineering (52-55):**
- [x] 52. बॉयलर के प्रकार व माउंटिंग्स → `52-types-of-boilers-mountings.md` (fire-tube vs water-tube, mountings vs accessories distinction)
- [x] 53. स्टीम टर्बाइन के मूल सिद्धांत → `53-steam-turbine-basics.md` (impulse vs reaction, velocity vs pressure compounding)
- [x] 54. रेफ्रिजरेशन चक्र — वाष्प संपीड़न चक्र → `54-vapour-compression-refrigeration-cycle.md` (4 components/processes, cooling happens at evaporator, COP>1, COP_HP=COP_ref+1)
- [x] 55. वातानुकूलन के मूल सिद्धांत → `55-basics-of-air-conditioning.md` (DBT≥WBT≥DPT, psychrometry, sensible vs latent load)

**Automobile Engineering (56-57):**
- [x] 56. ऑटोमोबाइल ट्रांसमिशन व चेसिस → `56-automobile-transmission-chassis.md` (body-on-frame vs unitary, gearbox/differential/synchromesh)
- [x] 57. ब्रेकिंग सिस्टम व स्टीयरिंग → `57-braking-system-steering.md` (hydraulic braking via Pascal's law, ABS, Ackermann steering — inner wheel turns more)

**Industrial Management (58-60):**
- [x] 58. औद्योगिक प्रबंधन के मूल सिद्धांत → `58-basics-of-industrial-management.md` (Taylor scientific management vs Fayol 14 principles)
- [x] 59. उत्पादन योजना व नियंत्रण → `59-production-planning-control.md` (routing→scheduling→loading→dispatching→follow-up→inspection, job/batch/mass/continuous production)
- [x] 60. प्लांट लेआउट व कार्य अध्ययन → `60-plant-layout-work-study.md` (process vs product vs fixed-position layout, method study + time study)

**Ordnance-specific — post-specific, unverified against official syllabus (flagged with ⚠️ caveat in both files, per user decision):**
- [x] 61. आयुध/हथियार प्रणाली से संबंधित मैकेनिकल अवधारणाएं → `61-ordnance-weapon-system-mechanical-concepts.md` (recoil=momentum conservation, rifling=gyroscopic stabilization, firearm operating mechanism types — general engineering knowledge, NOT sourced from an official SI-Ordnance paper)
- [x] 62. आयुध रखरखाव व निरीक्षण से जुड़े तकनीकी पहलू → `62-ordnance-maintenance-inspection-technical-aspects.md` (preventive maintenance, NDT methods, Go/No-Go gauging — general engineering knowledge, NOT sourced from an official SI-Ordnance paper)

**फ़ाइल 08 (तकनीकी पेपर — मैकेनिकल इंजीनियरिंग) है COMPLETE — सभी 62 बिंदु पूर्ण।**

### Progress tracker — 07-basic-computer-knowledge-gap.md (17 points)

**Format for this file:** Lean, fact-dense (same family as file 06) but with two explicit refinements the user gave mid-file — (1) prefer English technical terms directly (Home/Insert tabs, SUM/AVERAGE, Impact/Non-Impact Printer, LAN/WAN) rather than forcing Hindi translations with English only in parentheses, and (2) add explanatory prose (how/why something works) around the fact-tables, not just bare bullet facts — applied retroactively to points 1-4 after the user flagged point 4 (output devices) as too table-only. No artificial 800-1000-line padding — length follows content. Numeric/current-specific facts (storage capacities, UPI/NEFT/RTGS/IMPS limits, MP Online/e-District portal history) web-verified; stable universal facts (generations, device classifications, shortcut keys) written from verified textbook knowledge. Location: `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/<NN-topic-slug>.md`. Point numbers match `mpsi-syllabus/missing-topics/07-basic-computer-knowledge-gap.md`. Unit 9 (ICT) already covers CPU/OS internals/networking protocols/cybersecurity fundamentals in depth — this file stays strictly at the "everyday computer/office use" layer, not duplicating those.

- [x] 1. कंप्यूटर की पीढ़ियाँ (Generations I-V) → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/01-computer-generations.md`
- [x] 2. कंप्यूटर के प्रकार — सुपर, मेनफ्रेम, मिनी, माइक्रो → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/02-types-of-computers.md`
- [x] 3. इनपुट डिवाइस → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/03-input-devices.md` (कीबोर्ड/माउस/स्कैनर/OMR/OCR/MICR सहित)
- [x] 4. आउटपुट डिवाइस → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/04-output-devices.md` (मॉनिटर प्रकार, Impact/Non-Impact प्रिंटर, प्लॉटर)
- [x] 5. स्टोरेज डिवाइस — क्षमता व अंतर → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/05-storage-devices.md` (HDD/SSD/पेन ड्राइव/CD-DVD, वेब-सत्यापित क्षमताएं)
- [x] 6. सॉफ्टवेयर के प्रकार → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/06-types-of-software.md` (System बनाम Application, Compiler/Interpreter)
- [x] 7. Windows GUI बेसिक्स → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/07-windows-gui-basics.md` (फाइल/फोल्डर प्रबंधन, कंट्रोल पैनल, टास्कबार)
- [x] 8. MS Word → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/08-ms-word.md` (रिबन टैब, मेल मर्ज, शॉर्टकट)
- [x] 9. MS Excel → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/09-ms-excel.md` (SUM/AVERAGE/IF/VLOOKUP, सेल फॉर्मेटिंग, चार्ट, शॉर्टकट)
- [x] 10. MS PowerPoint → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/10-ms-powerpoint.md` (Transition बनाम Animation अंतर, Views, शॉर्टकट)
- [x] 11. इंटरनेट व ईमेल → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/11-internet-email.md` (Browser बनाम Search Engine, CC/BCC, अटैचमेंट)
- [x] 12. सामान्य कीबोर्ड शॉर्टकट → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/12-common-keyboard-shortcuts.md` (Universal shortcuts, Clipboard अवधारणा)
- [x] 13. कंप्यूटर वायरस व एंटीवायरस → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/13-computer-virus-antivirus.md` (बुनियादी स्तर — Unit 9 के गहन cybersecurity से अलग, Virus/Worm/Trojan/Ransomware वर्गीकरण)
- [x] 14. फाइल एक्सटेंशन → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/14-file-extensions.md` (.docx/.xlsx/.pdf/.jpg आदि वर्गीकृत सूची)
- [x] 15. नेटवर्किंग शब्दावली — दैनिक-उपयोग स्तर → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/15-networking-terminology.md` (LAN/MAN/WAN/PAN, Modem बनाम Router)
- [x] 16. डिजिटल भुगतान — UPI, नेट बैंकिंग, मोबाइल बैंकिंग → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/16-digital-payments.md` (NPCI/UPI सीमा ₹1 लाख/दिन वेब-सत्यापित, NEFT/RTGS/IMPS तुलना)
- [x] 17. सरकारी ई-सेवाएं — MP ऑनलाइन, e-District → `mpsi-syllabus/notes/07-basic-computer-knowledge-gap/17-mp-egovernance-portals.md` (MP देश का प्रथम Lok Seva Guarantee Act 2010 राज्य — वेब-सत्यापित, MPOnline 2006 MPSEDC+TCS JV)

**फ़ाइल 07 (बुनियादी कंप्यूटर ज्ञान) है COMPLETE — सभी 17 बिंदु पूर्ण।**

### Progress tracker — 06-internal-security-police-role.md (27 points)

**Format for this file (confirmed by user, differs from file 05):** NOT the 800-1000-line Mains-answer-sheet format. User's explicit instruction: "explain in depth and focused on mpsi and mppsc, alway add highyeald contant only. point must be covered fact based not just filling space." So — thorough, fact-dense, MPSI/MPPSC-focused coverage (acts, agencies, strategies, case facts, current data) with live web research per point, but no artificial padding or line-count target. Length follows the content, not the other way around. Location: `mpsi-syllabus/notes/06-internal-security-police-role/<NN-topic-slug>.md`. Point numbers match `mpsi-syllabus/missing-topics/06-internal-security-police-role.md` (grouped under items viii-xiii).

**लोकतंत्र में पुलिस की भूमिका (item viii):**
- [x] 1. लोकतांत्रिक शासन में पुलिस की भूमिका एवं जवाबदेही → `mpsi-syllabus/notes/06-internal-security-police-role/01-police-role-accountability-democratic-governance.md` (संवैधानिक आधार, बहु-स्तरीय जवाबदेही ढाँचा, NPC 1977-81 8 रिपोर्ट, मॉडल पुलिस अधिनियम 2006/सोराबजी समिति — राज्य सुरक्षा आयोग+PCA, केवल 17 राज्यों में क्रियान्वयन)
- [x] 2. पुलिस सुधार — प्रकाश सिंह वाद (2006) व सर्वोच्च न्यायालय के निर्देश → `mpsi-syllabus/notes/06-internal-security-police-role/02-prakash-singh-case-supreme-court-directives.md` (7 निर्देश शब्दशः तालिका, K.T. थॉमस निगरानी समिति, 2024 CHRI मूल्यांकन — कोई राज्य पूर्ण अनुपालक नहीं, केरल/मेघालय/त्रिपुरा बेहतर बनाम बिहार/झारखंड/UP कमज़ोर)
- [x] 3. सामुदायिक पुलिसिंग (Community policing) — अवधारणा व मॉडल → `mpsi-syllabus/notes/06-internal-security-police-role/03-community-policing-concept-models.md` (राज्य-मॉडल तालिका — MP 1999 अधिनियम भारत का एकमात्र विधायी मॉडल+पुलिस मित्र योजना [उच्च-प्राथमिकता MP-विशिष्ट तथ्य], केरल जनमैत्री, महाराष्ट्र मोहल्ला समितियाँ/सुरेश खोपड़े, मीरा पैबी)
- [x] 4. मानवाधिकार एवं पुलिस आचरण — संवैधानिक दायित्व → `mpsi-syllabus/notes/06-internal-security-police-role/04-human-rights-police-conduct-constitutional-obligations.md` (अनुच्छेद 20-21-22, DK बसु वाद 11 दिशा-निर्देश शब्दशः, NHRC 24-घंटे सूचना नियम, 2024: 2739 हिरासती मृत्यु, यातना-विरोधी कानून का अभाव)
- [x] 5. महिला सुरक्षा में पुलिस की भूमिका — हेल्पलाइन, महिला थाना, वन-स्टॉप सेंटर → `mpsi-syllabus/notes/06-internal-security-police-role/05-women-safety-police-role-helpline-mahila-thana-osc.md` (भोपाल महिला थाना = भारत का प्रथम ISO-प्रमाणित महिला थाना [MP सर्वोच्च-प्राथमिकता तथ्य], दिल्ली में एक भी महिला थाना नहीं विरोधाभास, हेल्पलाइन 181/112, OSC 704+36 हेल्पलाइन=70 लाख महिलाओं को सहायता)

**लोकतंत्र में पुलिस की भूमिका (item viii) — COMPLETE, सभी 5 बिंदु पूर्ण।**

**विकास-उग्रवाद संबंध (item ix):**
- [x] 6. वामपंथी उग्रवाद (Left-Wing Extremism/Naxalism) — कारण, प्रभावित क्षेत्र, सरकारी रणनीति → `mpsi-syllabus/notes/06-internal-security-police-role/06-left-wing-extremism-naxalism.md` (उद्गम नक्सलबाड़ी 1967, प्रभावित जिले 182→18→11→**शून्य अप्रैल 2026 आधिकारिक घोषणा** [अत्यंत नवीनतम, बड़ी खबर], हिंसा 1936→374→33/मृत्यु 1005→150→11, बस्तर "लगभग मुक्त", 9 फरवरी 2025 बीजापुर अभियान 31 माओवादी ढेर, 2026 उन्मूलन लक्ष्य समय पर प्राप्त, SAMADHAN 8-अक्षर रणनीति पूर्ण विवरण)
- [x] 7. विकास और उग्रवाद के बीच सहसंबंध — SAMADHAN रणनीति, आकांक्षी जिला कार्यक्रम → `mpsi-syllabus/notes/06-internal-security-police-role/07-development-extremism-correlation-samadhan-aspirational-districts.md` ("विकास-विरोधाभास" सिद्धांत, SCA ₹30cr/₹10cr, RCPLWE 2016, मोबाइल टावर 10505 योजनाबद्ध/7768 चालू, आकांक्षी जिला कार्यक्रम 2018-112 जिले-49 KPI, संपूर्णता अभियान 2.0)
- [x] 8. जनजातीय क्षेत्रों में असंतोष के सामाजिक-आर्थिक कारण → `mpsi-syllabus/notes/06-internal-security-police-role/08-tribal-discontent-socioeconomic-causes.md` (आदिवासी जनसंख्या 8.6% परंतु विस्थापितों में 40-55% हिस्सा, कुल 6-6.5 करोड़ विस्थापित, हसदेव अरण्य केस-स्टडी, PESA 1996 — 40% राज्यों में नियम अपूर्ण, "परामर्श बनाम सहमति" बहस)

**विकास-उग्रवाद संबंध (item ix) — COMPLETE, सभी 3 बिंदु पूर्ण।**

**आंतरिक सुरक्षा को चुनौती देने वाले कारक (item x):**
- [x] 9. सीमा पार आतंकवाद व घुसपैठ → `mpsi-syllabus/notes/06-internal-security-police-role/09-cross-border-terrorism-infiltration.md` (पहलगाम हमला 22 अप्रैल 2025, ऑपरेशन सिंदूर 7 मई 2025 — 9 स्थान/बहावलपुर-मुरीदके, घुसपैठ 138→14→शून्य, ~90 सक्रिय आतंकी J&K, CIBMS 2400km स्मार्ट फेंस)
- [x] 10. गैर-राजकीय सशस्त्र समूह (Non-state actors) — प्रकार व गतिविधियाँ → `mpsi-syllabus/notes/06-internal-security-police-role/10-non-state-actors-types-activities.md` (4-प्रकार वर्गीकरण, UAPA 67 प्रतिबंधित संगठन मार्च 2025, 2019 संशोधन व्यक्तिगत आतंकवादी-घोषणा, "प्रहार" रणनीति 23 LeT/JeM कार्यकर्ता)
- [x] 11. सीमा प्रबंधन एजेंसियाँ — BSF, SSB, ITBP, असम राइफल्स — भूमिका → `mpsi-syllabus/notes/06-internal-security-police-role/11-border-management-agencies-bsf-ssb-itbp-assam-rifles.md` ("एक सीमा एक बल" नीति, तुलनात्मक तालिका — BSF 1965 पाक-बांग्ला, SSB 1963 नेपाल-भूटान, ITBP 1962 चीन, असम राइफल्स 1835 सबसे पुराना+म्यांमार+द्वैत-नियंत्रण संरचना)
- [x] 12. तस्करी नेटवर्क — हथियार, नशीले पदार्थ, मानव तस्करी → `mpsi-syllabus/notes/06-internal-security-police-role/12-smuggling-networks-arms-drugs-human-trafficking.md` (स्वर्ण अर्धचंद्र/स्वर्ण त्रिभुज, म्यांमार अफीम-उदय 2022 तालिबान-प्रतिबंध बाद, मणिपुर जब्ती 9x वृद्धि, NCB जब्ती ₹25,330cr/2024, ड्रोन-हथियार तस्करी पंजाब, मानव तस्करी राज्यवार डेटा, NDPS/ITPA कानून)

**आंतरिक सुरक्षा को चुनौती देने वाले कारक (item x) — COMPLETE, सभी 4 बिंदु पूर्ण।**

**साइबर सुरक्षा, संचार नेटवर्क, सोशल मीडिया, धन-शोधन (item xi):**
- [x] 13. साइबर अपराध के प्रकार — फ़िशिंग, रैंसमवेयर, पहचान चोरी → `mpsi-syllabus/notes/06-internal-security-police-role/13-cybercrime-types-phishing-ransomware-identity-theft.md` (मामले 10.29→22.68→28.15 लाख, निवेश-धोखाधड़ी 76% हानि, "डिजिटल गिरफ्तारी" घोटाला नवीनतम खतरा, 459 साइबर थाने बनाम केवल 47% दोषसिद्धि दर)
- [x] 14. साइबर सुरक्षा नीति व संस्थाएं — CERT-In, राष्ट्रीय साइबर सुरक्षा नीति → `mpsi-syllabus/notes/06-internal-security-police-role/14-cybersecurity-policy-institutions-certin.md` (बहु-एजेंसी तालिका CERT-In/NCIIPC/I4C/NSCS/DCyA, CERT-In धारा 70B 2009, 6-घंटे अनिवार्य रिपोर्टिंग 2022, I4C जुलाई 2024 MHA संलग्न, हेल्पलाइन 1930, राष्ट्रीय नीति 2013→2025)
- [x] 15. सोशल मीडिया व फेक न्यूज़ — आंतरिक सुरक्षा पर प्रभाव, नियमन के प्रयास → `mpsi-syllabus/notes/06-internal-security-police-role/15-social-media-fake-news-internal-security-regulation.md` (साम्प्रदायिक हिंसा/भीड़-हिंसा/कट्टरपंथीकरण प्रभाव, IT नियम 2021→2023 FCU संशोधन→कुणाल कामरा वाद 20 सितंबर 2024 बॉम्बे HC असंवैधानिक घोषित→SC अपील विचाराधीन 2026→IT नियम 2026 डीपफेक-विनियमन)
- [x] 16. संचार नेटवर्क का सुरक्षा हेतु दुरुपयोग — एन्क्रिप्टेड ऐप्स, डार्क वेब → `mpsi-syllabus/notes/06-internal-security-police-role/16-communication-network-misuse-encrypted-apps-dark-web.md` (Signal/Telegram/डार्क वेब दिसंबर 2024 सरकारी चुनौती-वक्तव्य, बांग्लादेश-अल-कायदा Telegram नेटवर्क 2025 दोषसिद्धि, मुरारका डार्कनेट क्रिप्टो-केस, IT नियम 2021 ट्रेसेबिलिटी [50 लाख+ उपयोगकर्ता, प्रथम-प्रवर्तक पहचान], WhatsApp कानूनी चुनौती)
- [x] 17. धन-शोधन (Money Laundering) — प्रक्रिया (Placement-Layering-Integration) → `mpsi-syllabus/notes/06-internal-security-police-role/17-money-laundering-process-placement-layering-integration.md` (3-चरण विस्तृत विवेचन, सहारा समूह केस-स्टडी — 34,000 शेल कंपनियाँ, ग्रॉसवेनर हाउस/प्लाज़ा होटल इंटीग्रेशन उदाहरण, FATF)
- [x] 18. निवारण अधिनियम व संस्थाएं — PMLA 2002, ED, FIU-IND → `mpsi-syllabus/notes/06-internal-security-police-role/18-pmla-ed-fiu-ind-prevention-institutions.md` (PMLA धारा 5/17/19/45 तालिका, 2024 SC निर्णय — अरविंद केजरीवाल वाद गिरफ्तारी मापदंड, संज्ञान-पश्चात गिरफ्तारी-शक्ति सीमित, धारा 45 अग्रिम जमानत में भी लागू, FIU-IND 18 नवंबर 2004 स्थापना+STR/CTR कार्य)
- [x] 19. हवाला लेनदेन एवं इसका नियमन → `mpsi-syllabus/notes/06-internal-security-police-role/19-hawala-transactions-regulation.md` (परिभाषा/कार्यप्रणाली — कोई वास्तविक धन गति नहीं करता, FEMA 1999+PMLA 2002 दोनों के अंतर्गत अवैध, RBI अविनियमित, 2024-25 ED दिल्ली-गोवा दुबई संपत्ति कार्रवाई)

**साइबर सुरक्षा, संचार नेटवर्क, सोशल मीडिया, धन-शोधन (item xi) — COMPLETE, सभी 7 बिंदु पूर्ण।**

**बाह्य एवं आंतरिक सुरक्षा के मुद्दे (item xii):**
- [x] 20. भारत की सुरक्षा चुनौतियाँ — पड़ोसी देशों से संबंधित मुद्दे → `mpsi-syllabus/notes/06-internal-security-police-role/20-security-challenges-neighboring-countries.md` (चीन: गलवान 2020/डोकलाम 2017/21 अक्टूबर 2024 गश्त-समझौता अत्यंत नवीनतम, पाकिस्तान: बिंदु 9 क्रॉस-रेफ, बांग्लादेश: 2015 भूमि समझौता 111/51 परिक्षेत्र+पशु-तस्करी, नेपाल: कालापानी-लिपुलेख, म्यांमार: FMR समाप्ति फरवरी 2024)
- [x] 21. आंतरिक विद्रोह/अलगाववाद — पूर्वोत्तर भारत के उग्रवादी संगठन → `mpsi-syllabus/notes/06-internal-security-police-role/21-northeast-insurgency-separatism-afspa-peace-accords.md` (त्रिपुरा शांति समझौता 4 सितंबर 2024 अत्यंत नवीनतम — 34 वर्ष उग्रवाद अंत, AFSPA अप्रैल 2025 स्थिति 4 राज्य/37 जिले/194 थाना, असम 246→6 घटनाएँ, मणिपुर 2024: 258 मृत्यु/60000 विस्थापित, मिज़ो/बोडो समझौते)
- [x] 22. सांप्रदायिक हिंसा व दंगा नियंत्रण — कानूनी ढांचा एवं पुलिस भूमिका → `mpsi-syllabus/notes/06-internal-security-police-role/22-communal-violence-riot-control-legal-framework-police-role.md` (BNS धारा 189/190/191=पूर्व IPC 141/149/146-148, BNSS धारा 163=पूर्व CrPC 144, दंगा सज़ा 2/5 वर्ष, सांप्रदायिक हिंसा विधेयक 2005 कभी पारित नहीं हुआ, MPSI-हेतु सर्वोच्च-प्राथमिकता व्यावहारिक विषय)
- [x] 23. आपातकालीन प्रतिक्रिया तंत्र — NDRF, राज्य आपदा प्रतिक्रिया बल → `mpsi-syllabus/notes/06-internal-security-police-role/23-emergency-response-ndrf-sdrf.md` (आपदा प्रबंधन अधिनियम 2005 धारा 44, NDRF 16 बटालियन/6 CAPF से गठित/1149 कार्मिक प्रति बटालियन, NDMA अध्यक्ष PM, MP सभी 52 जिलों में SDRF विस्तार योजना)

**बाह्य एवं आंतरिक सुरक्षा के मुद्दे (item xii) — COMPLETE, सभी 4 बिंदु पूर्ण।**

**संगठित अपराध व आतंकवाद के बीच संबंध (item xiii):**
- [x] 24. संगठित अपराध के स्वरूप — माफिया नेटवर्क, आर्थिक अपराध → `mpsi-syllabus/notes/06-internal-security-police-role/24-organized-crime-forms-mafia-economic-crime.md` (रेत/भूमि माफिया $17mn/माह-₹150 अरब बाज़ार, MCOCA 1999→दिल्ली 2002, BNS धारा 111 पहली बार राष्ट्रीय स्तर पर संगठित अपराध परिभाषा [सर्वोच्च-प्राथमिकता] मृत्युदंड/3-10वर्ष, धारा 112 नई "छोटे स्तर" श्रेणी, राजस्थान 392 मामले उदाहरण)
- [x] 25. आतंकी वित्तपोषण में संगठित अपराध की भूमिका → `mpsi-syllabus/notes/06-internal-security-police-role/25-terror-financing-organized-crime-role.md` (FICN नेक्सस — D-कंपनी/दाऊद इब्राहिम दुबई-संचालन, वितरण-मार्ग 7 देश, FCORD+TFFC सेल NIA, FICN अब UAPA/BNS अंतर्गत आतंकवादी-कृत्य अभियोजन-योग्य, FY24-25: 1,17,722 जाली नोट/+37%, गिरफ्तारी 21→41)
- [x] 26. प्रमुख कानून — UAPA, NIA अधिनियम → `mpsi-syllabus/notes/06-internal-security-police-role/26-uapa-nia-act-key-laws.md` (UAPA 1967→2004 संशोधन संगठन-प्रतिबंध→2019 संशोधन धारा 35 व्यक्तिगत आतंकवादी-घोषणा [सर्वोच्च-प्राथमिकता]+SC 2024-25 HC को निर्देश, NIA अधिनियम 31 दिसंबर 2008 26/11-पश्चात+2019 विदेश-क्षेत्रीय अधिकार-क्षेत्र)
- [x] 27. अंतर्राष्ट्रीय सहयोग तंत्र — INTERPOL, FATF → `mpsi-syllabus/notes/06-internal-security-police-role/27-international-cooperation-interpol-fatf.md` (FATF 1989 स्थापना, भारत पूर्ण सदस्य 25 जून 2010/34वाँ देश, भारत पहली बार उपाध्यक्ष जुलाई2026-जून2027 अत्यंत नवीनतम, पाकिस्तान ग्रे-लिस्ट इतिहास+2025 पुनः-सूचीकरण माँग, INTERPOL रेड नोटिस 100→107→56)

**फ़ाइल 06 (आंतरिक सुरक्षा एवं पुलिस की भूमिका) है COMPLETE — सभी 27 बिंदु पूर्ण, सभी 6 विषय-समूह (item viii-xiii) पूर्ण।**

## Separate project: mppsc-syllabus/ — pure topic-listing of the full official MPPSC syllabus

This is a **distinct project** from `mpsi-syllabus/` above — not deep content, a pure **topic checklist** (titles only, no explanations/answers) of the complete official MPPSC syllabus, organized unit-wise, one file per official syllabus sub-bullet, **Hindi only**. Source: `Syllabus/Exam_Plan_and_Syllabus_State_Service_Examination_2026_Dated_05_01_2026.pdf` (text layer is corrupted/unusable for Hindi — pages were rendered to PNGs via `pypdfium2`+`Pillow` and read visually; Prelims Paper I/II syllabus, pages 7-10, is English-only in the source and was translated to Hindi for these files).

**Scope corrections learned the hard way (see memory `mppsc-syllabus-list-vs-content.md`):** list only — no MCQ/explanation content; cover the **complete** official syllabus regardless of what's already in the existing 10-unit DB (don't filter down to only "gaps"); **Hindi only** for all topic/point text; folder-per-unit with one file per official syllabus bullet, not a flat per-unit file; each unit expanded to genuine topper-level granularity (not just the ~9 broad official bullet lines) by cross-referencing `SYLLABUS_COVERAGE.md` (the existing 1,743-item MCQ inventory), the `gaps/unitN_gaps.md` files, and additional standard-knowledge topics a top-rank candidate would need even if absent from both.

**Workflow per unit (established and repeated for Units 1-10):** (1) read the unit's line range in `SYLLABUS_COVERAGE.md`; (2) categorize every existing DB item into the unit's official syllabus bullets, one file per bullet; (3) fold in known gaps from `gaps/unitN_gaps.md`; (4) add extra general-knowledge topics a topper needs beyond the DB; (5) audit — full manual line-by-line cross-check for Units 1-3, Grep spot-check + full line-by-line for Unit 10 — to catch omissions, fixing any found.

**Status: `prelims/` — all 10 units COMPLETE** (~1,960 numbered topic lines total):
- `prelims/unit-01-mp-history-culture-literature/` — 9 files
- `prelims/unit-02-india-history/` — 6 files
- `prelims/unit-03-india-mp-geography/` — 14 files (`bharat-ka-bhugol/` 7 + `mp-ka-bhugol/` 7)
- `prelims/unit-04-constitutional-system/` — 9 files
- `prelims/unit-05-economy/` — 9 files
- `prelims/unit-06-science-technology-public-health/` — 7 files
- `prelims/unit-07-environment-biodiversity-sdg-disaster/` — 3 files
- `prelims/unit-08-current-affairs/` — 3 files
- `prelims/unit-09-ict/` — 5 files
- `prelims/unit-10-mp-tribal-heritage-folk-culture/` — 5 files (full line-by-line audit against all 134 DB items done; one gap found and fixed — U10-129 लोक-संगीत फेस्ट/युवा बैंड फ्यूजन added to file 05 as item 16अ)

**Post-completion audit (2026-09-04):** Ran an automated cross-reference script (token-match) comparing every DB item in `SYLLABUS_COVERAGE.md` against the authored files for Units 2-10, then manually verified every flagged candidate. Most flags were false positives (Hindi files transliterate English DB terms, e.g. "Supervised/Unsupervised" → "सुपरवाइज्ड/अनसुपरवाइज्ड", so literal-string matching missed them). Units 2, 3, 9 came back completely clean; Unit 8's ~101 flags were all traced to genuine coverage elsewhere (schemes like Smart City/AMRUT/Jal Jeevan Mission correctly live under Economy/Geography/Health units, not duplicated into Current Affairs). Four genuine gaps found and fixed:
- Unit 4 (`02-sangheeya-karyapalika-rashtrapati-sansad.md`): added item 35 — the three Parliamentary financial committees compared (Estimates Committee, Committee on Public Undertakings vs. PAC; only PAC existed before).
- Unit 4 (`08-tristariya-panchayati-raj-nagarik-prashasan.md`, serving a Unit-5-flagged item): added item 25अ — municipal property tax Annual Rateable Value (ARR) basis and collection efficiency.
- Unit 6 (`01-vigyan-shakhayen-pratham-gyan.md`): added items 46अ-46आ — nuclear reactor types (PHWR/BWR/Fast Breeder) and India's three-stage nuclear programme (Homi Bhabha plan) — was entirely missing, a high-yield GS gap.
- Unit 7 (`03-pradushan-prakritik-aapdayen-prabandhan.md`): added item 14अ — environmental economics (externalities, Pigouvian tax, polluter-pays principle).

**Prelims Paper II (General Aptitude Test / CSAT-style) — DONE.** Converted from the old flat `paper-2-general-aptitude-test.md` (deleted) into `prelims/paper-2-general-aptitude-test/` with one file per official syllabus bullet (all 8 bullets from the official 2026 syllabus, page 10):
- `01-bodh-comprehension.md`, `02-jivan-shailee-pratikari-shakti.md`, `03-sanchar-kaushal.md`, `04-tarkik-tarkashakti-vishleshanatmak-kshamata.md`, `05-nirnayan-samasya-samadhan.md`, `06-samanya-mansik-kshamata.md`, `07-sankhyatmakta-aankada-vyakhya.md`, `08-hindi-bhasha-bodh-kaushal.md`.
- Files 04 (reasoning) and 07 (numeracy/DI) are reference-lists that point into the already-complete `mpsi-syllabus/notes/03-reasoning-analytical-ability/` (55 points) and `mpsi-syllabus/notes/04-numerical-aptitude/` (33 points) rather than duplicating content, since those topics are already deep-covered there.
- File 02 ("जीवन शैली एवं प्रतिकारी शक्ति / Life Style and Counter Force") carries an explicit ⚠️ caveat: this exact phrasing appears verbatim in the official 2026 syllabus PDF but has no standard/established CSAT meaning in any secondary source — a WebSearch surfaced a conflicting claim that this topic was "removed" from the 2026 syllabus, which contradicts the primary-source PDF already in this repo (dated 2026-01-05) that was read visually page-by-page; the primary source was trusted over the secondary summary, and the file's topic list is flagged as best-effort literal interpretation pending confirmation closer to exam time.
- File 08 (Hindi bhasha bodh, Class-10 level) cross-references `mpsi-syllabus/notes/01-hindi-bhasha-bodh/` rather than duplicating.

**Not yet done (not explicitly requested — ask before starting):**
- `mains/paper-1-...md` through `paper-6-...md` — 6 flat files, official-syllabus transcription only (Hindi Mains source + English restatement cross-checked); headers only partially converted to Hindi (paper-1 only, then abandoned mid-way); not yet expanded/audited since there's no Mains equivalent of `SYLLABUS_COVERAGE.md` to cross-reference against.
- `mppsc-syllabus/README.md` — stale, still describes the deleted `prelims-gaps/` folder instead of the current `prelims/unit-NN-.../` structure.
- Nothing in `mppsc-syllabus/` has been committed/pushed yet.
