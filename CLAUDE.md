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

**Update (2026-09-04): this content IS now wired into mppsc-app** — as its own native "MPSI Notes" content type (a Markdown reader with per-note read tracking), not converted into MCQs. See "mppsc-app integration" below for how.

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

**Gap-fill addition (2026-09-13) — points 63-70, added after cross-checking against MP-ESB Group-3 (Sub-Engineer Mechanical, समूह-03) and RRB-JE/SSC-JE Mechanical Engineering syllabi.** Points 1-60 were built solely against the MPSI SI-Ordnance Paper III syllabus; MP-ESB doesn't publish a granular topic list for its Group-3 technical papers (only a 100-mark "तकनीकी ट्रेड पर आधारित" line), so RRB-JE CBT-2/SSC-JE Paper-II — the two most standardized published diploma-level Mechanical objective syllabi — were used as the benchmark. Web-verified via search; 8 genuine, distinctly-named recurring topics found absent from 1-60:
- [x] 63. स्तंभ (Columns/Struts) एवं स्प्रिंग → `63-columns-struts-springs.md` (Euler's Pcr=π²EI/Le², effective-length end-condition table, slenderness ratio, Rankine's empirical formula, helical-spring stiffness k=Gd⁴/8D³n, Wahl's factor, series-softer/parallel-stiffer spring combination)
- [x] 64. धातु फॉर्मिंग प्रक्रियाएं → `64-metal-forming-forging-rolling-extrusion.md` (hot-vs-cold-working recrystallization-temperature distinction, forging types drop/press/upset, rolling-mill configurations two/three/four-high/cluster, direct-vs-indirect extrusion, wire drawing)
- [x] 65. पाउडर मेटलर्जी → `65-powder-metallurgy.md` (process sequence powder-production→blending→compaction→sintering-below-melting-point, self-lubricating-bearings classic application, tungsten-carbide-tool-tips high-melting-point rationale)
- [x] 66. पावर प्लांट इंजीनियरिंग → `66-power-plant-engineering-rankine-cycle-types.md` (power-plant-types table thermal/hydro/nuclear/diesel/gas/combined-cycle, Rankine-cycle 4-process table, reheat+regeneration efficiency-improvement, Brayton cycle, combined-cycle/cogeneration)
- [x] 67. स्टीम नोज़ल एवं कम्प्रेसर → `67-steam-nozzles-compressors.md` (convergent-vs-Laval nozzle, steam critical-pressure-ratio≈0.58, reciprocating-vs-centrifugal-compressor table, multi-staging/intercooling rationale, isothermal-least-work-vs-adiabatic-most-work)
- [x] 68. संक्षारण → `68-corrosion-types-prevention.md` (electrochemical anode/cathode mechanism, 6-type classification uniform/pitting/galvanic/crevice/intergranular/SCC, sacrificial-anode zinc/magnesium cathodic-protection, stainless-steel passive-chromium-oxide-film)
- [x] 69. औद्योगिक अभियांत्रिकी — PERT/CPM/इन्वेंटरी/ब्रेक-ईवन → `69-industrial-engineering-pert-cpm-inventory-breakeven.md` (PERT-probabilistic-vs-CPM-deterministic table, te=(to+4tm+tp)/6, critical-path-zero-float, EOQ=√(2DCo/Ch), break-even-units=FC/(SP-VC))
- [x] 70. उन्नत मेट्रोलॉजी → `70-advanced-metrology-gdt-spc.md` (GD&T 5-category form/orientation/location/runout/profile table, form-needs-no-datum, X-bar-R-variable-vs-p-c-chart-attribute, Cp=(USL-LSL)/6σ-vs-Cpk-accounts-for-centering, CMM/laser-interferometer/sine-bar)

**फ़ाइल 08 (तकनीकी पेपर — मैकेनिकल इंजीनियरिंग) है COMPLETE — मूल 60 सामान्य-बिंदु + 2 Ordnance-विशिष्ट + 8 MP-ESB/RRB-gap-fill बिंदु = कुल 70 बिंदु पूर्ण।**

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

**Final full re-audit (2026-09-04, all 10 units, stricter threshold):** Per explicit user request to verify line-by-line one more time across every unit and to proactively strengthen higher-weightage/trending units, re-ran the cross-reference script at a stricter 0.65 token-match threshold (up from 0.5) across all 10 units, then manually verified every flag via Grep. Units 1, 2, 3, 5, 6, 7, 9, 10 came back fully clean (all flags confirmed as already covered). Three more genuine gaps found and fixed:
- Unit 4 (`06-rashtriya-kshetriya-aayog-sansthayen.md`): added item 7अ — Centrally Sponsored Schemes vs. Central Sector Schemes fund-sharing/expenditure distinction.
- Unit 8 (`02-rashtriya-samsamayik-ghatnayen.md`): added items 68अ-68आ — renewable energy auction/tariff trends, and India's Carbon Credit Trading Scheme (CCTS) 2023 MRV/integrity.

**Weightage-informed enrichment (same session):** Per user's explicit invitation to add topics to units judged higher-yield/trending based on exam-pattern analysis, added (without being prompted by a DB gap — these are informed judgment additions, flagged as such, not fabricated statistics since this is a topic-listing project):
- Unit 5 (`01-mp-ki-vartaman-sthiti.md`): named the MP Economic Survey and MP annual state budget as explicit, flagged "अत्यंत उच्च-प्राथमिकता" recurring annual items — MP-specific exact figures (GSDP, per-capita income, sector growth) are a near-guaranteed yearly MPPSC source.
- Unit 8 (`02-rashtriya-samsamayik-ghatnayen.md`): named the Union Budget and Economic Survey explicitly (were previously folded into a generic line), added Padma Awards/Nobel Prizes/Bharat Ratna as guaranteed-annual recurring items, and added recent state election results + "One Nation One Election" as current high-salience topics.
- Unit 8 (`03-madhyapradesh-samsamayik-ghatnayen.md`): added a new "उच्च-प्राथमिकता आवर्ती MP-विशिष्ट घटनाएँ" section — Global Investors Summit, Ken-Betwa Link Project, cabinet reshuffles, new district/division creation, Simhastha 2028 prep, sports events hosted in MP, and MP by-election results — recurring MP-specific current-affairs categories a state exam disproportionately weights.
- Unit 6 (`03-upgrah-antariksh-praudyogiki.md`): added Bharatiya Antariksh Station (BAS), Shukrayaan, and Chandrayaan-4 as emerging/increasing-trend space-mission topics beyond the already-covered named missions.

This weightage judgment (Current Affairs/Unit 8 and MP-specific recurring events as highest-yield and fastest-moving; Environment/Unit 7 as a trending-up area already very granularly covered; MP Economic Survey as a near-guaranteed annual source) is general pattern-recognition from how Indian state PCS exams (and MPPSC specifically) have trended in recent years, not a statistically verified claim backed by an official year-wise question-paper analysis in this repo — flagged as such rather than presented as certain fact.

**Not yet done (not explicitly requested — ask before starting):**
- `mains/paper-1-...md` through `paper-6-...md` — 6 flat files, official-syllabus transcription only (Hindi Mains source + English restatement cross-checked); headers only partially converted to Hindi (paper-1 only, then abandoned mid-way); not yet expanded/audited since there's no Mains equivalent of `SYLLABUS_COVERAGE.md` to cross-reference against.
- `mppsc-syllabus/README.md` — stale, still describes the deleted `prelims-gaps/` folder instead of the current `prelims/unit-NN-.../` structure.

**Committed/pushed:** all of `mppsc-syllabus/` (2 commits, `feature/mppsc-app` branch — `e847b99` for the initial 10-unit + Paper II build, `bd37dc7` for the final audit fixes and weightage additions).

## mppsc-app integration (2026-09-04) — MPSI Notes + Syllabus Checklist wired into the tracker app

Both `mpsi-syllabus/notes/` (deep Markdown notes) and `mppsc-syllabus/prelims/` (topic checklist) are now imported into and served by `mppsc-app`, as two **new, separate content types** alongside the existing MCQ-practice flow — not converted into MCQs (that was explicitly rejected earlier for the notes; the checklist was never meant to be MCQs either).

**Design decisions** (confirmed via AskUserQuestion before building): full read/checked progress tracking for both (not just browsing); two new top-level nav sections ("MPSI Notes", "Syllabus Checklist") rather than folding into existing Unit pages, since `mpsi-syllabus/notes/`'s 9 categories use the MPSI missing-topics taxonomy and don't map onto the app's existing 10 MCQ units; content imported into Postgres via new importer scripts (mirroring the existing MCQ importer's pattern) rather than read from disk at request time.

**Schema** (`mppsc-app/backend/prisma/schema.prisma`): two new independent model pairs, structurally parallel to the existing `Unit → Topic → Question`:
- `NoteCategory → NoteFile` (notes). `NoteFile.isRead`/`readAt` track progress directly on the row (no join table, matching this app's existing single-user/no-auth design — there's no `User` model anywhere in this schema).
- `ChecklistUnit → ChecklistFile → ChecklistItem` (checklist). `ChecklistFile.groupLabel` holds the Hindi label for nested subfolder cases (currently only unit-03's भारत/MP geography split). `ChecklistItem.isChecked`/`checkedAt`/`heading` (the `##` section a numbered line falls under) track progress and context directly on the row.
- `ImportLog` gained `notesFound`/`checklistItemsFound` columns alongside the existing MCQ counts.

**Importers** (`mppsc-app/backend/src/import/`): `importNotes.ts` walks `${CONTENT_DIR}/mpsi-syllabus/notes/<NN-category>/*.md`, extracting each file's title from its first `# ` heading and using a hardcoded `CATEGORY_NAMES` map for the 9 known category display names (folder slugs are romanized, not display-ready). `importChecklist.ts` walks `${CONTENT_DIR}/mppsc-syllabus/prelims/<unit-NN-... | paper-N-...>/**/*.md` (recursing through nested subfolders like unit-03's two geography sub-groups), parsing numbered lines (`ITEM_RE = /^(\d+[^\s.]*)\.\s+(.+)$/`, matches both `"1."` and `"16अ."` label styles) with their governing `## ` heading, using a hardcoded `UNIT_NAMES` map for proper Hindi unit names. Both are idempotent (upsert by `sourceFile`/`[fileId, orderIndex]`, same pattern as the existing MCQ importer) and both got a real content-shape spot-check (verified via direct Prisma queries and raw HTTP calls against the running containers, not just "it compiled") before being considered done. `runAll.ts` orchestrates all three importers (MCQ + notes + checklist) under one `ImportLog` row — `POST /api/admin/import` and `npm run import` (backend CLI) both now run the full combined import; the old MCQ-only `runImportLogged` was removed from `importContent.ts` since nothing needs MCQ-only import anymore.

**Routes**: `backend/src/routes/notes.ts` (`GET /api/notes`, `GET /api/notes/categories/:id`, `GET /api/notes/files/:id` with prev/next, `PATCH /api/notes/files/:id/read`) and `backend/src/routes/checklist.ts` (`GET /api/checklist/units`, `GET /api/checklist/units/:id`, `GET /api/checklist/files/:id`, `PATCH /api/checklist/items/:id/check`, `PATCH /api/checklist/files/:id/check-all`), registered in `index.ts`.

**Frontend**: 6 new pages (`NotesPage`, `NoteCategoryPage`, `NoteFilePage`, `ChecklistPage`, `ChecklistUnitPage`, `ChecklistFilePage`) under `/notes*` and `/checklist*` routes, added to `Layout.tsx`'s nav. `NoteFilePage` renders Markdown via a newly-added `react-markdown` + `remark-gfm` dependency, styled with a new `.md-content` CSS block in `index.css` (no typography plugin added — hand-written rules for headings/lists/tables/code/blockquotes). `HomePage`/`SettingsPage`'s existing "Import" button and `ImportLog` display were updated to reflect the expanded (3-source) import.

**Verification performed**: both `npx tsc --noEmit` (backend and frontend) pass with zero errors. Full stack built and run via `docker compose up --build`; ran the full import inside the container (took ~5.5 min for ~2100 files total — pre-existing MCQ import is the slow part, not the new code); confirmed via direct Prisma queries and raw HTTP calls against the running containers that all three content types imported with correct counts (10 units/1743 topics/57045 questions unchanged; 9 note categories/273 files; 11 checklist units/78 files/2184 items) and that the new GET/PATCH endpoints return correctly-shaped JSON with working toggle persistence (verified then reset the test toggles back to unchecked/unread so the DB starts clean). One pre-existing importer warning surfaced (unrelated to this change): an `index.html` with no `RAW` payload under the Unit-10 folder.

**Known environment note, not a code issue**: this machine currently has an unrelated Docker Compose project (`sc_frontend` etc., a different "social-commerce-platform" stack) already bound to host port 3000, which collides with `mppsc-app/docker-compose.yml`'s frontend port mapping. `docker-compose.yml` was left unchanged (still `3000:80`, matching the README) — the port was only temporarily remapped during verification and reverted; the currently-running local `mppsc-app-frontend-1` container may still be bound to a temporary port from that test rather than 3000 depending on whether it's been restarted since. If port 3000 is unavailable next time this app is started, that's this other project, not a bug here.

**Not yet done for this integration (not requested):** no way to add/edit MPSI notes or checklist items from the UI (read/check-only, matching the "these are separate corpora, edit the source .md files" model used everywhere else in this repo); no search integration (the existing `/search` page only searches MCQ questions); no stats-page integration for notes/checklist progress (Stats page still only covers MCQ practice).

## Third project: mppsc-syllabus/prelims-notes/ — fact-based MPPSC Prelims content notes (NCERT-primary)

Started 2026-09-05, a **distinct third layer** from both `mpsi-syllabus/notes/` (MPSI/all-govt-exam-scoped deep notes) and `mppsc-syllabus/prelims/` (pure topic-only checklists, no content). This one is genuine explanatory content, but with a much stricter sourcing/accuracy bar than either of the other two.

**Confirmed via AskUserQuestion before starting** (given the scope difference between the two options was ~25x):
- **Granularity — one point = one numbered checklist item** from the existing `mppsc-syllabus/prelims/unit-NN-.../*.md` files (not one whole checklist file). E.g. item "11. दिल्ली सल्तनत — दास/खिलजी/तुगलक/सैयद/लोदी" becomes one note, not the entire multi-topic file it lives in. Total scope: ~2,180 notes (the full checklist item count across all 10 units + Paper II) — a genuinely very long-running project.
- **Location — `mppsc-syllabus/prelims-notes/`**, a sibling of `mppsc-syllabus/prelims/`, mirroring its `unit-NN-.../` folder names. Within each unit, one **sub-folder per existing checklist file** (e.g. `01-pramukh-ghatnayen-rajvansh/`), and inside that, **one `.md` file per numbered item** in that checklist file, named by a slug of the item text (e.g. `01-maurya-shasan-malwa-ashok-laghu-shilalekh.md`).

**Workflow (revised 2026-09-05 — now matches `mpsi-syllabus/notes/` pacing):** the user initially asked for a stop-and-confirm after every single point, then explicitly relaxed this after point 3: *"continue point notes dont wait for permesion, but dont move without permesion when you are moving to next topic."* Current rule: within one checklist file (= one "topic", e.g. `01-pramukh-ghatnayen-rajvansh.md`), work straight through every remaining numbered point without pausing for confirmation — report each briefly and continue. Only stop and wait for explicit permission when the current checklist file's points are exhausted and the next step would be moving to a **different checklist file** (the next "topic"). This now mirrors the `mpsi-syllabus/notes/` pacing rule exactly — don't revert to per-point pausing within a file unless the user asks again.

**Content rules (strict, corrected once already — see memory `mppsc-prelims-notes-fact-density.md`):**
- **100% facts only, zero filler.** Line count (the user's own framing: "100 to 500 lines based on topics") is a *description of the expected range*, not a target — never pad a note toward 100+ lines if the real fact-set for that point is genuinely shorter (e.g. 60-90 lines). Every line must be a real, checkable fact; interpretive/connective prose that isn't itself a fact (drawing a conclusion, bridging two facts with commentary) gets trimmed or converted to a direct factual statement. This was corrected once already after a first draft was padded from 86 lines toward 100 with a semi-interpretive addition — don't repeat that.
- **NCERT (latest editions) is the primary source.** For points NCERT doesn't cover at the required granularity (true for almost anything MP-specific, since NCERT is a national-level text) — cite a genuinely authoritative supplementary source (ASI official records, standard scholarly reference works, state government publications) explicitly in a "स्रोत" line at the top of the note, rather than silently mixing sourcing quality.
- **Verify checkable facts via WebSearch/WebFetch before writing** — this is unambiguous fact-recall content (dates, districts, discoverers, edict classifications), not judgment-call synthesis, so treat it the way file-05/06/07 of the `mpsi-syllabus` project treated fact-heavy GS content: don't write from unverified memory when a fact is checkable. The first note (below) caught and corrected a commonly-repeated stale fact this way (Rupnath's district is Katni, not Jabalpur — Katni split off from Jabalpur in 1998, but older sources still say Jabalpur).
- Framing throughout: "top one rank" depth — exhaustive within the point's actual scope, but scope itself must stay tight to what the point specifically asks about; don't scope-creep into adjacent points' territory.

### Progress tracker — unit-01-mp-history-culture-literature

- [x] `01-pramukh-ghatnayen-rajvansh/` point 1 — मालवा/मध्य भारत में मौर्य शासन — अशोक के लघु शिलालेख (रूपनाथ, गुर्जरा आदि) → `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/01-pramukh-ghatnayen-rajvansh/01-maurya-shasan-malwa-ashok-laghu-shilalekh.md` (96 lines — NCERT Class XII Themes-I framework for edict classification + ASI/Hultzsch CII Vol.I for Rupnath/Gujarra site-specifics, both web-verified; corrects the stale "Rupnath = Jabalpur district" claim to the current Katni district; Gujarra's rare direct "Asoka" name-inscription noted as the point's highest-yield fact)
- [x] `01-pramukh-ghatnayen-rajvansh/` point 2 — शुंग वंश — विदिशा संबंध (हेलियोडोरस स्तंभ पृष्ठभूमि) → `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/01-pramukh-ghatnayen-rajvansh/02-shung-vansh-vidisha-sambandh-heliodorus-stambh.md` (58 lines — genuinely shorter than point 1 since this is a single well-bounded monument/fact-cluster, not padded to match; NCERT Class XII Themes-I Theme 3 "Social Histories: Using the Mahabharata" for the Vasudeva/Bhagavata-tradition framing + ASI/epigraphic sources for the pillar's site-specifics, web-verified; covers both the Agnimitra-as-viceroy-of-Vidisha administrative link and the Heliodorus pillar itself; caught and fixed one of my own interpretive/non-factual summary sentences during self-audit before finalizing, per the strict fact-only standard)
- [x] `01-pramukh-ghatnayen-rajvansh/` point 3 — सातवाहन वंश — दक्षिण MP संपर्क → `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/01-pramukh-ghatnayen-rajvansh/03-satvahan-vansh-dakshin-mp-sampark.md` (43 lines — Satakarni I's conquest of western Malwa/Anupa-Narmada-valley/Vidarbha, Anupa's capital Mahishmati's contested identification [Maheshwar vs Mandhata/Omkareshwar, both in MP], Gautamiputra Satakarni's Nasik cave inscription reconquest from Nahapana, and numismatic finds across MP sites incl. Ujjain/Dewas/Hoshangabad/Jabalpur-Tewar/Besnagar, web-verified)

**Format correction applied to this and retroactively to points 1-2:** the स्रोत (source) line at the top of each note must stay minimal — just the source name(s), no explanatory paragraph about sourcing rationale. User: "in स्रोत: NCERT कक्षा-XII is enough no need axtra explaintion."

- [x] point 4 — वाकाटक वंश — MP में विस्तार → `.../04-vakatak-vansh-mp-vistar.md` (Pravarasena I reaching Narmada/Bundelkhand — noting Purika itself was in Maharashtra not MP, a precision most secondary sources blur; Nachna/Panna district's contested Vakataka-vs-Uchchhakalpa attribution flagged honestly since Uchchhakalpa is point 8's own separate topic; Narendrasena-era Kosala-Mekala-Malava authority, later lost to Skandagupta)
- [x] point 5 — गुप्त साम्राज्य — मालवा शासन (उदयगिरि, एरण गुप्त अभिलेख) → `.../05-gupta-samrajya-malwa-shasan-udayagiri-eran.md` (Udayagiri Cave 6 Chandragupta II inscription 401 CE, Cave 8 minister Virasena, Cave 5 Varaha panel, Tropic-of-Cancer solstice significance; Eran's Samudragupta inscription, Budhagupta-era Vishnu pillar 484 CE, Bhanugupta's 510 CE inscription — earliest dated Sati record — directly connected to Toramana's Hun conquest of Malwa the same year, later reversed by Aulikara king Prakashadharma in 515 CE)
- [x] point 6 — औलिकर वंश (यशोधर्मन — मंदसौर अभिलेख) → `.../06-aulikar-vansh-yashodharman-mandsaur-abhilekh.md` (Dashapura=Mandsaur; two dynastic phases — Gupta-feudatory first house vs. independent Yashodharman line; Yashodharman's defeat of Huna king Mihirakula ~528 CE; twin Sondani victory pillars 532 CE; empire's own rapid 530-540 CE collapse despite grandiose territorial claims)

- [x] point 7 — परिव्राजक राजवंश → `.../07-parivrajak-rajvansh.md` (Dabhala/Dahala + 18 atavi-rajya forest-kingdoms, cross-linked to Samudragupta's Allahabad pillar "atavika rajya" subjugation claim; kings Hastin ~475-517 CE and Samkshobha ~518-528 CE; copper-plates from Khoh/Satna, Majhgawan, Bhumara, Jabalpur, Betul — all in MP)
- [x] point 8 — उच्च कल्प वंश → `.../08-uchch-kalp-vansh.md` (capital Uchchhakalpa=Unchehara, Satna district; neighboring/contemporary with the Parivrajakas per the Bhumara inscription; kings with personal inscriptions Jayanatha ~493-507 CE and Sharvanatha ~508-533 CE; explicitly resolved the Nachna Vyaghradeva identification question left open at point 4 — scholars call it "doubtful", stated plainly rather than asserted as fact)

- [x] point 9 — गर्दभिल्ल वंश → `.../09-gardabhill-vansh.md` (explicitly framed as legend/tradition rather than solid history — main source is the Jain Kalakacharya-Kathanaka, not epigraphy; Gardabhilla-Ujjain, abduction of Kalakacharya's sister, defeat by Shakas ~61 BCE per Merutunga, traditional Vikramaditya/Vikram Samvat 57 BCE connection with its own historicity caveat)
- [x] point 10 — नागवंश (पद्मावती/नरवर) → `.../10-nagvansh-padmavati-narwar.md` (Padmavati=Pawaya/Gwalior vs. Narwar/Shivpuri as two distinct MP sites; 9 Puranic vs. 12 coin-attested kings; Samudragupta's Allahabad pillar inscription naming 4 defeated Naga kings — Nagadatta, Nagasena, Ganapatinaga, Nandi — ending the dynasty)

**Checkpoint: all 10 points of the "प्राचीन राजवंश" (ancient dynasties) sub-section are now complete.** Continuing into "मध्यकालीन राजवंश" (medieval dynasties, points 11-24) without pausing, per the revised workflow — will stop before starting the next checklist file.

- [x] point 11 — कलचुरी — त्रिपुरी/रतनपुर — MP स्पर्श → `.../11-kalchuri-tripuri-ratanpur-mp-sparsh.md` (Tripuri=Tewar/Jabalpur on the Narmada; Kokalla I → Gangeyadeva → Karna [Karnameru temple] → Trailokyamalla [last, to 1212 CE]; Ratanpur branch founded by Kalingaraja ~1000 CE as an offshoot/vassal; Kalachuri/Chedi era ~248 CE correctly attributed to Abhira king Ishwarsena, not the Kalachuris themselves — a common misconception corrected)
- [x] point 12 — गुर्जर-प्रतिहार वंश — MP क्षेत्र → `.../12-gurjar-pratihar-vansh-mp-kshetra.md` (founder Nagabhata I ~730-760 CE ruling from Ujjain/Malwa; Gwalior Prashasti 876 CE [poet Baladitya, Mihira Bhoja's era] as the key MP genealogical source naming Nagabhata I founder; Chaturbhuj Temple Gwalior inscription = world's earliest known inscribed zero, a globally significant fact)
- [x] point 13 — चंदेल — खजुराहो — नागर शैली उत्कर्ष → `.../13-chandel-khajuraho-nagar-shaili-utkarsh.md` (founder Nannuka; dynasty's own inscriptions claim descent from sage Chandratreya/Atri [Lunar dynasty], vs. the later Hemavati-moon-god legend explicitly flagged by scholars as unreliable bardic invention absent from contemporary records — presented with that distinction rather than as settled fact; Yashovarman's Lakshmana temple, Dhanga's Vishvanatha/Parshvanatha temples, Vidyadhara's Kandariya Mahadeva 1029 CE [870+ sculptures]; Khajuraho stats — 85 original temples/~25 surviving, 3 groups, UNESCO 1986, mortise-tenon construction, apex of Nagara style)
- [x] point 14 — परमार — धार/उज्जैन — राजा भोज — संरक्षण → `.../14-parmar-vansh-dhar-ujjain-raja-bhoj-sanrakshan.md` (genealogical founder Upendra vs. earliest self-inscribed king Siyaka II; Siyaka's 972 CE Manyakheta sack; capital sequence Ujjain→Dhar→Mandu; Vakpati Munja's rise and death vs. Western Chalukya Tailapa; Bhoja mentioned only briefly here, deep-dived in point 15; dynasty's 1305 CE end via Alauddin Khalji's general Ayn al-Mulk Multani)
- [x] point 15 — राजा भोज — विद्या/कला/जल प्रबंधन — संरक्षक → `.../15-raja-bhoj-vidya-kala-jal-prabandhan-sanrakshak.md` (80+ attributed works incl. Samarangana Sutradhara [83-chapter vastu-shastra encyclopedia with automata descriptions]; Bhojshala at Dhar; the Bhopal-founding/Bhojtal claim explicitly flagged as disputed folklore vs. the far more solidly documented Bhojpur/Bhojeshwar Temple — largest monolithic Shivling in India [~40 ft incl. platform], deliberately left unfinished after apparent structural collapse)
- [x] point 16 — तोमर वंश — ग्वालियर (मान सिंह तोमर — कला/संगीत) → `.../16-tomar-vansh-gwalior-mansingh-kala-sangeet.md` (founder Virsingh Dev; Man Singh Tomar 1486-1516 CE; Gujari Mahal for queen Mrignayani; Dhrupad patronage, "Man Kautuhal" treatise later reworked as "Sangeet Darpan" 1673 CE; **explicitly corrected a widespread misattribution** — his court musician was Baiju/Bakhshu, not Tansen, who was actually later at Akbar's court; Gwalior gharana connection)
- [x] point 17 — कच्छपघात वंश → `.../17-kachhapaghat-vansh.md` (rose ~950 CE from Gurjara-Pratihara/Chandela vassalage; 3 branches Gwalior-Sihoniya/Narwar/Dubkunda; Sas-Bahu Temple [Mahipala, 1096 CE] and Chausath Yogini Temple Mitaoli [Devapala] — the latter's popular "inspired India's Parliament building" claim explicitly flagged as undocumented folklore, not fact; dynasty ended 1196 CE via Qutb al-Din Aibak)
- [x] point 18 — गोंडवाना — गढ़ — मंडला — रानी दुर्गावती → `.../18-gondwana-garh-mandla-rani-durgavati.md` (biography-focused per plan, deferring kingdom/battle depth to point 19: born 1524 Kalinjar Fort, daughter of Chandela king Salbahan/Kirti Rai of Mahoba [links back to point 13]; married 1542 to Dalpat Shah of Garha-Katanga; regent for son Vir Narayan 1550-1564; capital moved Singorgarh→Chauragarh; died by her own hand 24 June 1564 rather than be captured by Asaf Khan's forces)
- [x] point 19 — गोंडवाना — गढ़ा-मंडला व गढ़ा-कटंगा राज्य — असफ खान से युद्ध → `.../19-gondwana-garha-mandla-garha-katanga-asaf-khan-yuddh.md` (kingdom founder Jadurai ~1440 CE deposing the Kalachuris [cross-ref point 11]; Sangram Shah's 52-garh system with chourasi/barhot sub-administrative units, his own literary work Rasratnamala; Battle of Narrai 1564; important nuance most accounts skip — Akbar restored the kingdom to Sangram Shah's son Chandra Shah as a tributary ceding only 10 garhs, not immediate full annexation)
- [x] point 20 — सल्तनत काल — मालवा सूबा → `.../20-saltanat-kaal-malwa-suba.md` (scoped to the Delhi-Sultanate-provincial period specifically, deferring the independent Sultanate to point 21: Alauddin Khalji's 1305 conquest from last Paramara Mahalakadeva [closes the loop with point 14's ending], first governor Ayn al-Mulk Multani, Paramara remnant surviving to 1310, full Tughluq absorption by 1338, Dilawar Khan governor from 1392 → independence declared 1401-02 ending the ~96-year provincial period)

**Mid-run user check-in (point 20-21 area):** user asked why line counts dropped from point 1's 96 to later points' 34-58. Ran actual `wc -l` across all files to answer with real data rather than impression — confirmed point 1 is the outlier (it covered two separate richly-documented sites), not the later points; research rigor (2-3 verified searches minimum per point) has stayed constant throughout. Answered directly with the numbers rather than getting defensive; this is expected behavior per the standing "length follows facts" rule, not a quality regression.

- [x] point 21 — मालवा सल्तनत — मांडव — होषंग शाह → `.../21-malwa-saltanat-mandav-hoshang-shah.md` (Hoshang Shah's reign, Mandu/Shadiabad capital-move, madrasa patronage, wars incl. Gujarat conflict/Kherla/Odisha/Kalpi; his tomb = India's first marble mausoleum, reportedly studied by Shah Jahan's architect before the Taj Mahal; ends with the 1436 Mahmud Khalji usurpation transitioning Ghurid→Khalji dynasty of Malwa — flagged in progress notes as a real checklist gap since no dedicated point covers Mahmud Khalji's own substantial reign)
- [x] point 22 — मालवा सल्तनत — सिक्का प्रणाली → `.../22-malwa-saltanat-sikka-pranali.md` (the square-shaped tanka as Malwa's distinctive regional feature vs. Delhi's round coins; Hoshang Shah's marginless silver tanka + copper fulus; Mahmud Shah I's four-metal [gold/silver/billon/copper] system at peak, mint at Hazrat Shadiabad/Mandu; unit standard 1 tanka=96 ratti)
- [x] point 23 — मुगल काल में मालवा सूबा — प्रशासनिक ढाँचा → `.../23-mugal-kaal-malwa-suba-prashasnik-dhancha.md` (1562 Mandu conquest from Baz Bahadur via Abdullah Khan Uzbek, first subedar Adham Khan Koka 1561; formal subah status 1568 as one of Akbar's original 12, seat Ujjain; 12 sarkars/301 parganas; standard subah→sarkar[faujdar+amalguzar]→pargana chain and khalsa/jagir/inam land classes; ended 1743 when Peshwa Balaji Baji Rao got the naib-subahdari, marking Maratha takeover)
- [x] point 24 — अकबर की मालवा विजय → `.../24-akbar-ki-malwa-vijay.md` (deliberately deepened the military-campaign narrative that point 23 only summarized, to avoid duplication: Baz Bahadur's reign 1555-1562; two-phase campaign — Adham Khan/Pir Muhammad Khan's 1561 Battle of Sarangpur [29 March] then Pir Muhammad's own defeat/death in Khandesh, followed by Abdullah Khan's decisive 1562 campaign; the Roopmati romance explicitly presented as folklore genuinely hard to disentangle from fact per scholars, not settled history; Baz Bahadur's November 1570 surrender to Akbar)

**Checkpoint: all 24 points of "प्राचीन राजवंश" + "मध्यकालीन राजवंश" are now complete.** Continuing into "आधुनिक/उत्तर-मुगल राजवंश एवं रियासतें" (points 25-35) without pausing.

- [x] point 25 — मराठा काल — मध्यभारत में पेशवा प्रभाव → `.../25-maratha-kaal-madhyabharat-peshwa-prabhav.md` (Bajirao I's 1723-1729 Malwa/Bundelkhand campaign, Chauth/Sardeshmukhi as fiscal basis; the MP-located Battle and Treaty of Bhopal itself — signed 7 Jan 1738 in Bhopal, Nizam ceding Malwa, ₹50 lakh indemnity — deliberately distinguished from the 1743 naib-subahdari grant already covered in point 23; light-cavalry/guerrilla tactics; framed as the umbrella context feeding into points 26-27's Holkar/Scindia founding)
- [x] point 26 — होल्कर राजवंश — इंदौर — स्थापना (मल्हारराव होल्कर) → `.../26-holkar-rajvansh-indore-sthapna-malharrao.md` (shepherd/peasant-caste origin, family name from Hol village near Mathura-to-Deccan migration; 1724 command of 500 horse under Bajirao I; formal Holkar state grant 29 July 1732 [28.5 parganas] — the dynasty's founding date; Malharganj 1734, Rajwada palace begun 1747; died 1766 as de facto ruler of Malwa, one of the Maratha Confederacy's 5 virtually-independent rulers; succession to daughter-in-law Ahilyabai deliberately kept brief, deferred to point 29)

- [x] point 27 — सिंधिया राजवंश — ग्वालियर — स्थापना (महादजी सिंधिया) → `.../27-sindhia-rajvansh-gwalior-sthapna-mahadaji.md` (**explicitly corrected the checklist point's own imprecise framing** — actual dynasty founder was Ranoji Scindia [seat at Ujjain 1731, capital until 1810], not Mahadji; Mahadji's real distinction was the 1783 Gwalior Fort siege/capture from Gohad's Rana Chhatar Singh [18 Feb-21 July 1783] and rebuilding Maratha military power with Benoît de Boigne post-Panipat; Daulat Rao Scindia's 1810 formal capital move to Gwalior, giving rise to the Lashkar cantonment-city)
- [x] point 28 — भोपाल रियासत — स्थापना (दोस्त मोहम्मद खान) → `.../28-bhopal-riyasat-sthapna-dost-mohammad-khan.md` (traced the real gradual multi-stage process rather than the oversimplified "founded 1707" claim some sources give: 1703 Mughal army→1705 Malwa posting→1707 mercenary phase begins→1708 Mangalgarh guardianship→1709 Berasia lease→1715 Mangalgarh seizure→Islamnagar as first capital→1723 Bhopal village itself acquired from Rani Kamlapati, Fatehgarh fort founded 30 Aug 1723→March 1724 Nizam-ul-Mulk's suzerainty imposed; explicitly noted he never held a fully independent state)

- [x] point 29 — अहिल्याबाई होल्कर — धर्म/धरोहर संरक्षण → `.../29-ahilyabai-holkar-dharma-dharohar-sanrakshan.md` (Maheshwar as capital + Maheshwari saree patronage; temple/ghat work at all 12 Jyotirlingas across India incl. Omkareshwar and Mahakaleshwar-Ujjain in MP; Kashi Vishwanath 1780 reconstruction + Manikarnika/Dashashwamedh ghats; Vishnupad Temple Gaya 1787)
- [x] point 30 — भोपाल बेगमात — समाज सुधार/शिक्षा → `.../30-bhopal-begmat-samaj-sudhar-shiksha.md` (scoped to the first 3 of Bhopal's unique 107-year, 4-Begum unbroken female-rule lineage 1819-1926, deferring Sultan Jahan to point 31: Qudsia [1819-1837, Jama Masjid/Gohar Mahal], Sikandar [1844-1868, defied purdah, built customs/secretariat/postal/modern judiciary, first Indian monarch to perform Hajj 1863], Shah Jahan [1868-1901, 78 schools total, newspaper Umdatul 1871, "Tahzib un-Niswan" = India's first women's encyclopaedia] — noted and resolved a source date inconsistency by attributing the postal-service claim to Sikandar rather than the chronologically-inconsistent Shah Jahan attribution one source gave)

- [x] point 31 — बेगम सुल्तान जहाँ — भोपाल — समाज सुधार → `.../31-begum-sultan-jahan-bhopal-samaj-sudhar.md` (4th/last Begum, 1901-1926; AMU founding member and its only-ever female vice-chancellor; Sultan-ul-Madaris women's college; free compulsory primary education 1918; Edward Museum + Hamidia Library; abdicated 29 April 1926 to son Hamidullah Khan, ending the 107-year unbroken female-rule lineage — Bhopal's last Nawab, acceded to India 1 May 1949)
- [x] point 32 — बुन्देलखण्ड एजेंसी — औपनिवेशिक ढाँचा → `.../32-bundelkhand-agency-aupniveshik-dhancha.md` (origin in the 1802 Treaty of Bassein's Maratha cessions → 1811 formal Agency; HQ sequence Banda→Kalpi→Hamirpur→Banda→Nowgong [until 1947]; 1901 composition 9 states/13 estates/Alampur pargana incl. Datia/Orchha/Panna/Chhatarpur-area states; correctly characterized the 1854 relationship to the new Central India Agency [HQ Indore] as supervisory oversight, not a full merger)

- [x] point 33 — होल्कर — इंदौर — नगरीय/शिक्षा सुधार → `.../33-holkar-indore-nagariya-shiksha-sudhar.md` (Tukoji Rao Holkar III [1903-1926] commissioning Patrick Geddes' 1918 first Indore master-plan; successor Yashwant Rao Holkar II [1926-1961, Oxford-educated] continuing it + Yashwant Sagar reservoir; Daly College's actual founding lineage traced precisely — 1870 as "Residency School" by British official Col. Henry Daly, renamed East Rajkumar College 1876, then Daly College 1882, with both Holkar and Scindia houses donating hostels by 1891 — a joint princely patronage, not solely a Holkar institution despite the point's framing)
- [x] point 34 — सिंधिया — ग्वालियर — रेल/कला संरक्षण → `.../34-sindhia-gwalior-rail-kala-sanrakshan.md` (Madho Rao Scindia's Gwalior Light Railway from a 1890s private palace-grounds 2ft-gauge line → 1895 Gwalior-Bhind line → 300+ km, once the world's longest 2ft-gauge railway until its 2020 closure; the famous Bassett-Lowke silver toy train [~1906] that ran cigars/brandy around the Jai Vilas Palace banquet table, still on display there — genuinely fuses the point's "rail" and "art patronage" halves in one artifact; 1942 renamed Scindia State Railway → 1950 Government of India → 1951 Central Railway zone)

- [x] point 35 — 1857 — झाँसी—ओरछा—ग्वालियर रण परिदृश्य → `.../35-1857-jhansi-orchha-gwalior-ran-paridrishya.md` (Rani Lakshmibai's final campaign: rebels take Gwalior 31 May 1858 as Jayajirao Scindia's own contingent defects and he flees to Agra; Rao Sahib proclaimed Nana Sahib's viceroy 3 June; Rani's death at Kotah-ki-Serai 17 June 1858; Hugh Rose's recapture 19 June ending the revolt's last major battle; Orchha's role honestly presented as neither open rebellion nor real British support — nominal loyalty only — rather than force-fitting it into the "battle site" framing its inclusion in the point title might suggest)

**Checkpoint: all 35 of "प्राचीन/मध्यकालीन/आधुनिक-उत्तर-मुगल राजवंश" are complete.** Continuing into the final sections — "स्वतंत्रता-पश्चात एकीकरण" (36-39), "प्रतीक/मुद्रा-संबंधी" (40), "अवसंरचनात्मक इतिहास" (41) — without pausing; will stop before starting `02-swatantrata-andolan-yogdan.md`.

- [x] point 36 — रियासतों का भारत संघ में विलय (1947-49) — ग्वालियर, इंदौर, भोपाल, रीवा आदि → `.../36-riyaston-ka-bharat-sangh-mein-vilay.md` (framed around the key insight that these 4 example states took genuinely different integration paths, not one uniform process: Gwalior+Indore+18 states→Madhya Bharat 28 May 1948 [dual capital, first rajpramukh Jivajirao Scindia]; Rewa+35 states→the separate Vindhya Pradesh union; Bhopal→its own standalone 1 May 1949 accession as a Chief Commissioner's Province, joining neither union; Patel/V.P. Menon's States Ministry role)
- [x] point 37 — मध्य भारत, विंध्य प्रदेश, भोपाल राज्य, महाकोशल — 1956-पूर्व की चार-खंड स्थिति → `.../37-madhya-bharat-vindhya-pradesh-bhopal-mahakoshal-1956-purv.md` (comparative table of all 4 pre-1956 units; **flagged a major, commonly-confused point**: the 1950 "Madhya Pradesh" formed from Central Provinces & Berar had its capital at Nagpur and included Marathi-speaking Berar/Vidarbha — an entirely different entity from today's MP; "Mahakoshal" is the regional name for that old state's Hindi-speaking Jabalpur-Sagar core, not a separate formal state name)
- [x] point 38 — 1956 — राज्यों का पुनर्गठन अधिनियम — मध्यप्रदेश का वर्तमान स्वरूप गठन → `.../38-1956-rajya-punargathan-adhiniyam-mp-vartaman-swaroop.md` (Fazl Ali Commission Dec 1953→Sept 1955 report, 3 members Fazl Ali/Panikkar/Kunzru; States Reorganisation Act 1956, appointed day 1 Nov 1956, resulting in 14 states+6 UTs nationally; MP formed from all 4 of point 37's units minus Marathi Berar [→Bombay State]; Bhopal chosen as capital for administrative neutrality/geographic centrality over any of the 4 units' own former capitals)
- [x] point 39 — 2000 — छत्तीसगढ़ पृथक्करण — प्रभाव → `.../39-2000-chhattisgarh-prithakkaran-prabhav.md` (MP Reorganisation Act 2000 under Vajpayee's NDA govt, 16 districts to the new state, Chhattisgarh became India's 26th state 1 Nov 2000, 90-seat interim assembly; **highest-yield fact**: MP was India's largest state by area until this separation, after which Rajasthan took that rank and MP became 2nd largest — plus the loss of most of MP's mineral-rich/tribal-forest territory)
- [x] point 40 — उज्जयिनी प्राचीन सिक्का — प्रतीक → `.../40-ujjayini-prachin-sikka-pratik.md` (the "Ujjaini symbol" — a cross linking 4 circles/orbs, named after the coin hoard first found at Ujjain; common obverse motifs sun + standing Shiva, reverse "bale mark"; honestly presented the symbol's meaning as scholarly-disputed [solar/cosmic vs. fire-altar theories] rather than asserting one answer; cross-referenced its use across Mauryan punch-marked coins [point 10] and Satavahana coins [point 3] as evidence of pan-Indian spread)
- [x] point 41 — इटारसी/कटनी/बीना — रेल जंक्शन — औपनिवेशिक/स्वतंत्रता-पश्चात आर्थिक भूमिका → `.../41-itarsi-katni-bina-rail-junction-aupniveshik-swatantrata-pashchat-arthik-bhumika.md` (colonial founding sequence: Itarsi-Jabalpur GIPR/EIR link 7 March 1870 forming the first Mumbai-Kolkata rail connection, Bina 1889 [originally "Etawa Junction"], Katni via the Bina-Saugor-Katni branch completed 1898-99; post-independence roles kept genuinely distinct per town — Itarsi now India's 8th-busiest junction and MP's biggest, Katni a cement/marble industrial cluster, Bina home to BPCL's refinery + Jaypee's 500MW thermal plant)

**🎉 CHECKLIST FILE 01 (`01-pramukh-ghatnayen-rajvansh.md`, 41 points) IS FULLY COMPLETE.** All 41 corresponding notes exist under `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/01-pramukh-ghatnayen-rajvansh/`.

### Checklist file 02 — `02-swatantrata-andolan-yogdan.md` (21 points) — user confirmed start

Notes go in `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/02-swatantrata-andolan-yogdan/`. Same workflow (straight through all 21 points, no per-point pause) and same content rules apply.

- [x] point 1 — झाँसी—ओरछा—ग्वालियर रण परिदृश्य (तात्या टोपे — ग्वालियर अभियान) → `.../01-jhansi-orchha-gwalior-ran-paridrishya-tatya-tope-gwalior-abhiyan.md` (deliberately scoped to Tatya Tope's own post-Gwalior story specifically, since the general battle/Rani Lakshmibai/Orchha narrative was already covered in checklist-01 point 35: his ~1-year solo guerrilla campaign after Gwalior fell, betrayal by Raja Man Singh of Narwar [Shivpuri district] over a Gwalior-maharaja dispute, capture 7 April 1859 in Paron forest, execution 18 April 1859 at Sipri/Shivpuri — a major MP-specific fact)
- [x] point 2 — रानी अवंतीबाई — रामगढ़ (मंडला) विद्रोह → `.../02-rani-avantibai-ramgarh-mandla-vidroh.md` (Ramgarh=Dindori, Mandla district; regent during husband Vikramaditya Singh Lodhi's illness; seized the treasury 26 Sept 1857 with a 4,000-strong self-raised army; won the Battle of Kheri; self-immolated with a guard's sword at Devharigarh hills 20 March 1858 rather than face capture)
- [x] point 3 — शंकर शाह व रघुनाथ शाह — जबलपुर 1857 गोंड शहीद → `.../03-shankar-shah-raghunath-shah-jabalpur-1857-gond-shahid.md` (Garha-dynasty descendants, British pensioners in Jabalpur, used poetry to inspire revolt; **explicitly noted the sources' own admission that no incriminating evidence was ever found against them** — an injustice that itself triggered the 52nd Bengal Native Infantry's mutiny; blown from a cannon 18 September 1857 at Jabalpur's cantonment jail)
- [x] point 4 — भोपाल रियासत की 1857 विद्रोह में भूमिका/रुख (शाहजहाँ बेगम का ब्रिटिश समर्थन) → `.../04-bhopal-riyasat-1857-vidroh-bhumika-rukh.md` (**corrected the checklist point's own naming error** — the ruling Begum in 1857 was Sikandar Begum, not Shah Jahan Begum, whose reign only began 1868; centerpiece is the Sehore uprising — 356 Bhopal Contingent sepoys under Risaldar Wali Shah/Kotwal Mahavir revolting against both the British AND the Begum on 6 Aug 1857 after a bone-powder-in-sugar religious-pollution incident, setting up a genuine parallel government "Sipahi Bahadur Sarkar" with its own council and two courts, crushed by Hugh Rose on 14 Jan 1858 with all 356 killed)
- [x] point 5 — टँट्या भील — मालवा/निमाड़ गुरिल्ला (तात्या टोपे से भिन्न व्यक्ति) → `.../05-tantya-bhil-malwa-nimar-guerrilla.md` (explicitly distinguished from Tatya Tope per the checklist's own parenthetical — different person, different era [1878-89 vs 1857-59], different community [Bhil tribal vs Maratha]; born Badada village, East Nimar/Khandwa; 12-year guerrilla campaign, "Robin Hood of India" per a 10 Nov 1889 New York Times piece; betrayed by his sworn brother-in-law Ganpat via a false-pardon ambush; tried and hanged at Jabalpur, sentenced 19 Oct 1889, executed 4 Dec 1889)
- [x] point 6 — इंदौर व महू में 1857 सैन्य विद्रोह की घटनाएँ → `.../06-indore-mhow-1857-sainya-vidroh-ghatnayen.md` (Indore Residency attacked 1 July 1857 by Holkar-army sepoys under Saadat Khan/Bhagirath Silawat/Vansh Gopal, 39 British residents killed, Resident Henry Durand escaped; same-day Mhow cantonment revolt under Murad Ali held out 30+ days; **honestly flagged Tukoji Rao Holkar II's actual stance as historiographically contested** — better-supported version has him aiding Durand's escape to Sehore, vs. a minority claim of indirect revolt support — rather than picking one version to assert as certain)

**Checkpoint: "1857 का विद्रोह — MP में" sub-section (points 1-6) is complete.** Continuing into "राष्ट्रीय आंदोलन के विभिन्न चरणों में MP" (points 7-13).

- [x] point 7 — मध्यप्रदेश में कांग्रेस संगठन की स्थापना/प्रारंभिक गतिविधियाँ → `.../07-mp-mein-congress-sangathan-sthapna-prarambhik-gatividhiyan.md` (Central Provinces Provincial Congress session sequence — Nagpur 1903 → **Jabalpur 1906 [MP's first]** → Raipur 1907; named moderate leaders incl. Hari Singh Gaur of Sagar and extremist-faction leaders incl. Ravishankar Shukla, who later became MP's first Chief Minister — a forward link worth remembering for later post-1956 points. **Retroactively enriched** after the user asked for more facts without filler: added Gaur's full career — Central Legislative Assembly Deputy President, Opposition/Nationalist Party leader 1921-34, Constituent Assembly member, first VC of both Delhi and Nagpur universities, founder of Sagar University 1946 with personal wealth)
- [x] point 8 — मध्यप्रदेश में असहयोग आंदोलन (1920-22) की घटनाएँ → `.../08-mp-mein-asahyog-andolan-1920-22-ghatnayen.md` (Dec 1920 Nagpur AICC session formally endorsing Non-Cooperation, hosted in CP-Berar at Ravishankar Shukla's invitation. **Retroactively enriched** with a second research pass: Gandhi, Kasturba, and the Ali Brothers personally visited Chhindwara and Jabalpur in 1921; Jabalpur's Hitkarini Sabha founded as alternative national education; Seth Govind Das of Jabalpur joined 1920, jailed 5 times/8 years total across multiple movements — first appearance here, full profile deferred to point 20)

- [x] point 9 — मध्यप्रदेश में सविनय अवज्ञा आंदोलन (1930-34) — नमक सत्याग्रह से जुड़ी MP घटनाएँ → `.../09-mp-mein-savinay-avagya-andolan-1930-34-namak-satyagrah.md` (resumed after the WebSearch pause; resolved the open question — **all 4 famous named forest satyagrahas [Rudri/Podi/Tamora/Pakariya] turned out to be in modern Chhattisgarh, not MP**, explicitly flagged as a distinction worth knowing rather than left unresolved; found the two genuinely MP-district ones instead — Betul's Chikhlar village [Sardar Ganjan Singh Korku/Banjari Singh Korku] as the first jungle satyagraha village in modern MP, and Seoni's Turiya village [Durga Shankar Mehta/Mooka Lohar, 9 Oct 1930]; noted the Gond/Korku participants sometimes acted independent of or against Congress direction)
- [x] point 10 — मध्यप्रदेश में भारत छोड़ो आंदोलन (1942) — जबलपुर एवं अन्य जिलों की विशिष्ट घटनाएँ → `.../10-mp-mein-bharat-chhodo-andolan-1942-jabalpur-anya-jile-ghatnayen.md` (Vidisha as the standard exam-answer starting point vs. Jabalpur as the first individual-satyagraha site [Seth Govind Das, arrested]; verified and rejected a false lead — the 1942 Adas shooting turned out to be in Gujarat, not MP, checked before including; Betul's Ghoradongri incident 19 Aug 1942 [Virsa Gond/Jirra Gond burning a timber depot, police firing]; Mandleshwar sub-jail break 2 Oct 1942 [Gandhi Jayanti] freeing ~300 inmates/~100 political prisoners; Bangalore jail internment of Vinoba Bhave/Kaka Kalelkar/Seth Govind Das/Dwarka Prasad Mishra — the latter two cross-referencing forward to points 20-21)

**Checkpoint: 10/21 points of checklist-02 done — halfway through.**

- [x] point 11 — चंद्रशेखर आज़ाद का मध्यप्रदेश संबंध — जन्मस्थली भावरा (झाबुआ) → `.../11-chandrashekhar-azad-mp-sambandh-janmasthali-bhavra-jhabua.md` (**corrected the checklist's own district attribution** — Bhavra/Bhabra is now in Alirajpur district, created 17 May 2008 by splitting Jhabua, not Jhabua itself as the point's own parenthetical states, though the historical Jhabua/Alirajpur-State association was correct at the time; birth name Chandra Shekhar Tiwari, 23 July 1906, parents Sitaram Tiwari/Jagrani Devi, family originally from Unnao/UP; Bhil-community childhood; the famous 1921 "Azad" naming-in-court incident)
- [x] point 12 — सुभाष चंद्र बोस/INA से जुड़े MP संदर्भ (यदि कोई) → `.../12-subhash-chandra-bose-ina-mp-sandarbh.md` (checklist's own "if any" uncertainty resolved decisively — the pivotal **1939 Tripuri Congress session** was held at Tewar/Jabalpur, MP, same site as the ancient Kalachuri capital from checklist-01 point 11; Bose's narrow re-election over Sitaramayya 1580-1377 votes [29 Jan 1939], the Pant Resolution isolating him, resignation 29 April 1939, Forward Bloc founded 3 May 1939 — a major national-history hinge-point that happened to occur on MP soil)
- [x] point 13 — मध्यप्रदेश की देशी रियासतों में प्रजामंडल आंदोलन (ग्वालियर, इंदौर, भोपाल) → `.../13-mp-deshi-riyaston-mein-prajamandal-andolan-gwalior-indore-bhopal.md` (AISPC founded Dec 1927 Bombay; **Bhopal Praja Mandal — 1937**, founders Master Lal Singh/Laxminarayan Singhal/Dr. Jamuna Prasad Mukhariya/Udhav Das Mehta/Chatur Narayan Malviya; **Indore Praja Mandal — refounded 1938** under Jamnalal Bajaj [President]/Hiralal Shastri [Chairman]/Chiranjilal Mishra [Gen. Secy.]; Gwalior — "Gwalior State Sarvajanik Sabha" → renamed "Gwalior State Congress", opposed by the Scindia rulers who backed RSS/Hindu Mahasabha as counter; **high-value fact**: AISPC's own final/closing session was held at Gwalior itself, 17-18 April 1947, presided by Nehru, just before AISPC merged into Congress by 25 April 1948)
- [x] point 14 — भोपाल रियासत का भारत संघ में विलय (1949) — विलय-विरोधी व समर्थक आंदोलन → `.../14-bhopal-riyasat-bharat-sangh-mein-vilay-1949-andolan.md` (Nawab Hamidullah Khan signed the Instrument of Accession Aug 1947 but in March 1948 sought to keep Bhopal independent — merger delayed ~22 months; interim government under Chatur Narain Malviya 1948; Dec 1948 agitation → arrests of Bhai Ratan Kumar Gupta and **Shankar Dayal Sharma** [future 9th President of India, sentenced 23 Jan 1949 to 8 months]; Patel's correspondence with the Nawab → merger agreement 30 April 1949 → formal takeover 1 June 1949, declared a "Part C" state, Nawab's title abolished)
- [x] point 15 — बुन्देलखण्ड एजेंसी — औपनिवेशिक ढाँचा एवं इसका राष्ट्रीय आंदोलन पर प्रभाव → `.../15-bundelkhand-agency-aupniveshik-dhancha-rashtriya-andolan-prabhav.md` (Agency founded 1811 at Banda, HQ eventually settling at Nowgong till 1947, folded into Central India Agency 1854; 8 salute states [Datia/Orchha/Ajaigarh/Baoni/Bijawar/Charkhari/Panna/Samthar] + 13+ non-salute states; 1857 centred on Jhansi/Rani Lakshmibai; the region's 21-types-of-tax exploitative system; **high-value fact — the Chhatarpur firing, 14 Jan 1931, Singhpur village near the Urmil river, called "Bundelkhand's Jallianwala Bagh"**, British officer Lord Fisher, zamindar Thakur Prasad Tiwari fined 1,500 silver coins afterward; 1945-47 Praja Mandal agitation against both Chhatarpur AND Charkhari simultaneously [freedom fighter Rajendra Mahto's "double battle"]; region merged into Vindhya Pradesh 1948 → MP 1956)
- [x] point 16 — रानी दुर्गावती की प्रतिरोध-परंपरा (मुगल-पूर्व, प्रेरणा-स्रोत के रूप में) → `.../16-rani-durgavati-pratirodh-parampara-prerna-strot.md` (**clarified the checklist's own "मुगल-पूर्व" phrasing** — her actual battle was against Akbar's own general Asaf Khan in 1564, not against a pre-Mughal power; the phrase instead marks the end of Gondwana's pre-annexation independent status; battle at Narrai valley [Gaur-Narmada rivers], self-immolation 24 June 1564 = "Balidan Diwas"; focus of this note is her **post-independence commemoration as a resistance symbol** — Jabalpur University renamed Rani Durgavati Vishwavidyalaya 7 June 1983, her museum established 1976, a 1988 postal stamp, and the 2024 500th-birth-anniversary ₹100 crore memorial approved for Madan Mahal hill)
- [x] point 17 — चंद्रशेखर आज़ाद — जीवन व क्रांतिकारी गतिविधियाँ → `.../17-chandrashekhar-azad-jivan-krantikari-gatividhiyan.md` (deliberately scoped away from point 11's birthplace focus, to his revolutionary career: HRA Oct 1924 Kanpur [Bismil/Sanyal/Chatterjee] → Kakori 9 Aug 1925 [Azad the only major conspirator never caught] → **high-value MP fact: hid out training shooters in Orchha forest, 15 km from Jhansi, disguised as "Pandit Harishankar Brahmachari" in a hut by the Satar river, teaching the children of Dhimarpura village — a nearby village was later renamed "Azadpura" by the MP government in his honour** → HSRA formed Sept 1928 Feroz Shah Kotla [Azad = commander-in-chief] → Saunders assassination 17 Dec 1928 Lahore [Lala Lajpat Rai revenge] → martyrdom at Alfred Park, Allahabad, 27 Feb 1931)
- [x] point 18 — भवानी प्रसाद मिश्र — स्वतंत्रता आंदोलन में भागीदारी → `.../18-bhavani-prasad-mishra-swatantrata-andolan-bhagidari.md` (born 29 March 1913, Tigaria village, Hoshangabad district; opened a Gandhian-education-principles school ~1934-35; arrested for Quit India Movement 1942, 3-year sentence, released 1945; post-release taught ~4-5 years at the Wardha Mahila Ashram — deliberately kept scoped to the pre-1947 freedom-struggle timeline, not his later literary/AIR career which belongs to a different subject)
- [x] point 19 — माखनलाल चतुर्वेदी — राष्ट्रीय आंदोलन में भूमिका → `.../19-makhanlal-chaturvedi-rashtriya-andolan-bhumika.md` (born 4 April 1889, Babai village, Hoshangabad; pen-name "Ek Bharatiya Atma"; editor of nationalist papers Prabha/Pratap/Karmaveer; **high-value literature-history crossover fact: wrote the immortal poem "Pushp Ki Abhilasha" on 5 July 1921 in Barrack No. 9 of Bilaspur Central Jail** during his Non-Cooperation-era [1921-22] imprisonment; also active in the 1923 Nagpur Flag Satyagraha alongside Sardar Patel, and later in Civil Disobedience and Quit India; first-ever Hindi Sahitya Akademi Award 1955 for Him Tarangini, Padma Bhushan 1963)
- [x] point 20 — सेठ गोविंद दास — जबलपुर के स्वतंत्रता सेनानी → `.../20-seth-govind-das-jabalpur-swatantrata-senani.md` (full life profile, cross-referencing rather than repeating his partial appearances in points 7/8/10; born 16 Oct 1896 Jabalpur Maheshwari merchant family; elected to the Central Legislative Assembly in 1923; joined Congress/Non-Cooperation 1920, jailed 5 times/8 years total across Non-Cooperation, Simon Commission protests, Civil Disobedience, and Quit India; AICC member since 1920, Congress Working Committee member at the 1939 Tripuri session; post-independence Lok Sabha MP for Jabalpur 1951-1974, pro-tem Speaker of the 2nd-5th Lok Sabhas; Padma Bhushan 1961 for literature/education)
- [x] point 21 — द्वारका प्रसाद मिश्र — मध्यप्रदेश के स्वतंत्रता सेनानी व प्रथम मुख्यमंत्रियों में → `.../21-dwarka-prasad-mishra-swatantrata-senani-mukhyamantri.md` (**corrected the checklist's own error** — he was NOT among MP's "first" Chief Ministers; Ravishankar Shukla was MP's actual first CM in 1956, Mishra was the 4th CM [after Bhagwantrao Mandloi]; born 5 Aug 1901, Padari village, Unnao district/UP; joined Non-Cooperation at age 19 in 1920, later interned in Bangalore jail during Quit India alongside Vinoba Bhave/Kaka Kalelkar/Seth Govind Das [cross-ref point 10]; wrote the "Krishnayan" mahakavya while imprisoned; MP Chief Minister 30 Sept 1963 – 29 July 1967; ~13 years of political exile from differences with Nehru)

**🎉 CHECKLIST FILE 02 (`02-swatantrata-andolan-yogdan.md`, 21 points) IS FULLY COMPLETE.** All 21 corresponding notes exist under `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/02-swatantrata-andolan-yogdan/`.

### Checklist file 03 — `03-pramukh-kala-murtikala.md` (111 points — largest file yet) — user confirmed start

By far the largest checklist file (vs. 41 and 21 for files 01-02) — MP's art/sculpture/monuments, organized in sub-sections: शैलचित्र/प्रागैतिहासिक कला (1-5), सांची स्तूप एवं संबद्ध स्थल (6-17), विदिशा-उदयगिरि-बेसनागर (18-26), खजुराहो मंदिर समूह (27-43), ओरछा (44-55), ग्वालियर किला (56-66), मांडव (67-79), धार/चंदेरी/बुरहानपुर/भोपाल/misc (80-111). Notes go in `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/03-pramukh-kala-murtikala/`. Same lean-note format/workflow as files 01-02 (title → स्रोत → sections → quick revision → self-test → footer), notes running ~35-70 lines depending on genuine fact-density per point — no padding.

**शैलचित्र/प्रागैतिहासिक कला (1-5) — COMPLETE:**
- [x] point 1 — आदमगढ़/बाघ गुफाएँ — रॉक/भित्ति कला → `01-adamgarh-bagh-guphayen-rock-bhitti-kala.md` (clarified these are two distinct art forms/periods despite being grouped in one checklist point: Adamgarh = Hoshangabad/Narmadapuram, 22 Mesolithic rock-shelters ~5500 BCE, giraffe painting in shelter 10; Bagh Caves = Dhar district, 9 Buddhist vihara-caves 4th-6th century CE Gupta period, only 5 survive, Cave 4 "Rang Mahal" dancing-girls mural closest sister to Ajanta murals, discovered 1818 by Lt. Dangerfield)
- [x] point 2 — भीमबेटका शैलाश्रय — कालक्रम/चित्र — थीम/महत्त्व → `02-bhimbetka-shailashray-kalakram-chitra-thim-mahatva.md` (Raisen district, discovered 1957-58 by V.S. Wakankar, UNESCO 2003; ~750 shelters/~700 identified/~400 painted; full 7-period chronology Upper Paleolithic→Mesolithic→Chalcolithic→Early Historic (IV-V)→Medieval (VI-VII, artistic decline); colors black-manganese/red-hematite/charcoal; UNESCO criteria iii+v)
- [x] point 3 — लाखगाँव/ईश्वरपुरा — भीमबेटका उप-समूह → `03-lakhagaon-ishwarpura-bhimbetka-upsamuh.md` (Bhimbetka's 7 hills named, Lakha Juar = 178 shelters + small Buddhist stupa remains found there/nearby; **honestly flagged "Ishwarpura" as unverifiable in standard sources** despite appearing in the checklist wording — told reader to prioritize the well-confirmed Lakha Juar fact instead)
- [x] point 4 — कायथा — संक्रमण चरण/पॉटरी → `04-kayatha-sankraman-charan-pottery.md` (Ujjain district, discovered 1964/excavated 1965-67 by Wakankar, re-excavated 1968 by Dhavalikar-Ansari; type-site for 3 successive chalcolithic cultures — Kayatha 2450-2000 BCE → Ahar 1950-1700 BCE → Malwa 1700-1400 BCE — the "transition" the point asks about; chocolate-slipped ware, copper cache, 40,000+ steatite beads, Harappan-influenced seals)
- [x] point 5 — पचमढ़ी — शैलचित्र/औपनिवेशिक हिल स्टेशन → `05-pachmarhi-shailchitra-aupniveshik-hill-station.md` (Narmadapuram district, Dhupgarh 1352m = MP's highest point; rock art Mesolithic-Historic ~10,000 years, scientific attention 1940s Gordon/Hunter couples; colonial discovery 1857 Captain James Forsyth → hill station/sanatorium, Bison Lodge 1862 oldest building, Christ Church ~1875; UNESCO Biosphere Reserve May 2009, 4981.72 km²)

**सांची स्तूप एवं संबद्ध स्थल (6-17) — COMPLETE:**
- [x] point 6 — सांची स्तूप — तोरण/रेलिंग/अलंकृत पैनल → `06-sanchi-stupa-toran-railing-alankrit-panel.md` (general Great Stupa overview: Ashoka's original brick stupa 3rd c. BCE → Sunga stone enlargement to current size [~16.5m high/36.5m diameter] + vedika railing → Satavahana-period toranas ~1st c. BCE carved by Vidisha ivory-workers per inscription; aniconic Buddha representation)
- [x] point 7 — सांची — अशोक स्तंभ/चार तोरण — घटक पहचान → `07-sanchi-ashok-stambh-char-toran-ghatak-pehchan.md` (identification-level overview: Ashoka pillar east of south gateway with Sarnath-like 4-lion capital + schism edict; 4 toranas construction order South→North→East→West, ~10.6m each)
- [x] point 8 — सांची तोरण — जातक पैनल — चादंत → `08-sanchi-toran-jataka-panel-chhaddant.md` (South gateway middle architrave; six-tusked elephant king Chhaddanta, jealous queen Chullasubhadda's revenge via hunter, elephant's self-sacrifice of own tusks)
- [x] point 9 — सांची तोरण — जातक पैनल — महाकपि → `09-sanchi-toran-jataka-panel-mahakapi.md` (West gateway pillar; monkey-king Bodhisattva forms living bridge with own body across Ganges to save 80,000-strong troop)
- [x] point 10 — सांची तोरण — जातक पैनल — वेसन्तर → `10-sanchi-toran-jataka-panel-vessantar.md` (West gateway; Bodhisattva's last human birth before Buddha, ultimate generosity — gives away elephant/chariot/clothes/children/wife, tested by gods, everything restored)
- [x] point 11 — सांची तोरण — जातक पैनल — शिबि → `11-sanchi-toran-jataka-panel-shibi.md` (**honestly flagged** — could not independently verify Shibi Jataka's specific Sanchi torana/panel location despite 2 targeted searches; noted it's well-documented at Bharhut/Amaravati instead; covered both story-versions [hawk-pigeon flesh-gift; blind Brahmin eye-gift] as the verifiable content)
- [x] point 12 — सांची — घटक/सह-समूह — अशोक स्तंभ → `12-sanchi-ghatak-sah-samuh-ashok-stambh.md` (deep-dive beyond point 7: full schism-edict content/purpose, pillar's current broken state — lower part in situ, two pieces under shed, capital in Sanchi Archaeological Museum)
- [x] point 13 — सांची — घटक/सह-समूह — छत्र/धान्य प्रतीक → `13-sanchi-ghatak-sah-samuh-chhatra-dhanya-pratik.md` (harmika + triple-chhatra/chhatraveli = Triratna symbol; kalasha/swastika as prosperity/auspiciousness motifs in torana carvings)
- [x] point 14 — सांची — घटक/सह-समूह — तोरण (उत्तर/दक्षिण/पूर्व/पश्चिम) → `14-sanchi-ghatak-sah-samuh-toran-char-disha.md` (deep-dive: per-gateway content table, South=Chhaddanta+Ashoka's Ramagrama visit, West=Mahakapi+Vessantara; sculptor Balamitra pupil of Aya Cuda named in inscription)
- [x] point 15 — सांची — घटक/सह-समूह — महाविहार/मठ → `15-sanchi-ghatak-sah-samuh-mahavihar-math.md` (~51 monasteries on the hill; Temple 17 [early Gupta, simplicity] vs Temple 18 [larger, mostly lost]; Monastery 45 & 51)
- [x] point 16 — सांची — घटक/सह-समूह — सतधारा/सोनारी लिंक → `16-sanchi-ghatak-sah-samuh-satdhara-sonari-link.md` (the linking evidence itself: Sariputta-Moggallana relics found at BOTH Sanchi Stupa 3 and Satdhara Stupa 2 in 1851 by Cunningham-Maisey; same 5 monk-names on Sonari and Andher caskets proving relic-sharing across a single network; relics' 1866 England→1947 Ceylon→1952 permanent Yangon/Colombo/Sanchi enshrinement journey)
- [x] point 17 — सोनारी/सतधारा/अंधेर — सांची उप-समूह → `17-sonari-satdhara-andher-sanchi-upsamuh.md` (individual site facts: Satdhara 9km W, Sonari ~10km SW [2 stupas, Cunningham's 1854 "The Bhilsa Topes"], Andher ~17km SE — distances/discovery per site, cross-referencing point 16 for the shared-relic significance)

**विदिशा-उदयगिरि-बेसनागर क्षेत्र (18-26) — COMPLETE:**
- [x] point 18 — उदयगिरि — वराह/नरसिंह — गुप्त संरक्षक → `18-udayagiri-varaha-narasimha-gupta-sanrakshak.md` (art-focused, cross-referencing checklist-01's administrative note: Cave 5 nara-varaha panel ~4m, Bhudevi-rescue scene with Brahma/Shiva/Aditya/Agni/Vayu/rishis; **Cave 12 Narasimha = India's earliest known depiction of the Narasimha avatar**)
- [x] point 19 — एरत (Eran) — गुप्त स्तंभ/वराह/शिलालेख → `19-eran-gupta-stambh-varaha-shilalekh.md` (Sagar district, Bina river; colossal 13.83×11.17×5.125 ft **theriomorphic** [pure-animal-form, not nara-varaha] boar — earliest known such depiction in India, Toramana's inscription on its chest; 43-ft Garuda pillar, Gupta year 165=484-85 CE Budhagupta era, dedicated to Janardana; Samudragupta + Bhanugupta [510 CE sati] inscriptions cross-referenced to checklist-01 note)
- [x] point 20 — बेसनागर — हेलियोडोरस — तिथि निर्धारण → `20-besnagar-heliodorus-tithi-nirdharan.md` (~113 BCE via 3 convergent proofs: Bhagabhadra's 14th regnal year + Antialkidas' reign 115-80 BCE + paleography; Heliodorus pillar itself used as the dating-anchor for Sanchi Stupa 2's railing)
- [x] point 21 — बेसनागर — हेलियोडोरस — ब्राह्मी लिपि विशेष → `21-besnagar-heliodorus-brahmi-lipi-vishesh.md` (Sunga-era Brahmi, Central-western epigraphic Prakrit with Sanskritized spellings; paleographic benchmark significance)
- [x] point 22 — बेसनागर — हेलियोडोरस — यवन दूत का आशय → `22-besnagar-heliodorus-yavan-doot-ashay.md` (Taxila-based ambassador of Antialkidas sent to Bhagabhadra's Shunga court — solid archaeological evidence of formal Indo-Greek/Shunga diplomatic relations, alongside personal religious dimension)
- [x] point 23 — बेसनागर — हेलियोडोरस — वैष्णव समर्पण → `23-besnagar-heliodorus-vaishnav-samarpan.md` (full inscription translation, "Bhagavata" self-identification, Garuda-standard to Vasudeva; second inscription's "three immortal precepts" [self-control/charity/vigilance] from a Mahabharata verse; honestly presented the conversion-vs-not scholarly debate, traditional view vs. Harry Falk's counter-view)
- [x] point 24 — हेलियोडोरस स्तंभ (बेसनागर) → `24-heliodorus-stambh-besnagar.md` (general monument facts: ~17.7ft on 12ft platform, octagonal/16-facet/32-facet sections, Garuda capital never recovered; discovered 1877 by Cunningham; 1963-65 excavation revealed it was part of a full temple complex)
- [x] point 25 — विदिशा — उदयगिरि/बेसनागर — एपिग्राफिक परिदृश्य → `25-vidisha-udayagiri-besnagar-epigraphic-paridrishya.md` (ties the ~8-century-long epigraphic continuity together: Shunga Heliodorus pillar [earliest archaeological evidence of Vasudeva-Krishna devotion in India] → Gupta Udayagiri/Eran records; **distinctive living-heritage fact: the pillar is worshipped today as "Khamba Baba" by local Bhoi/Dhimar fishing communities**)
- [x] point 26 — अशापुरी/उदयपुर (विदिशा) मंदिर अवशेष → `26-ashapuri-udaypur-vidisha-mandir-avshesh.md` (Ashapuri: 32km S of Bhopal, ~26 ruined temples, Pratihara-Paramara 9th-12th c., Temple-5/Bhootnath in Bhumija style, 2010 excavation; Udaypur/Neelkantheshwar-Udayeshwar Temple: built by Paramara king **Udayaditya** [Raja Bhoj's brother] 1059-1080 CE, sole surviving Paramara royal temple, finest example of Bhumija-style stellate shikhara)

**खजुराहो मंदिर समूह (27-43, 17 points) — COMPLETE:**
- [x] 27 आलंबन नायिका → `27-khajuraho-aalamban-nayika-iconography.md` (clarified "आलंबन" = Rasa-theory's shringara aalambana-vibhava concept, not a fixed iconographic category; standard classification Apsara/Surasundari/Nayika/Salabhanjika; 16 Alasa-Kanya sub-types from Shilpa Prakasha text)
- [x] 28 गणपति/सूर्य/विष्णु आइकनोग्राफी सूक्ष्म → `28-khajuraho-ganapati-surya-vishnu-iconography-sukshma.md` (Ganesha attributes; **Chitragupta = Khajuraho's only Surya temple**, ~1023 CE, 2.1m Surya statue on 7-horse chariot with boots+armor [Central Asian influence]; Vishnu's multi-forms, Lakshmana temple's dashavatara panel, Chitragupta's rare "para rupa" Vishnu)
- [x] 29 दिक्पाल प्रतिमा पहचान → `29-khajuraho-dikpal-pratima-pehchan.md` (all 8 dikpalas with direction+vahana+attribute identification table)
- [x] 30 आदिनाथ मंदिर (पूर्वी समूह) → `30-khajuraho-adinath-mandir-purvi-samuh.md` (Digambara Jain, late 11th c./1158 CE inscription, yakshinis Ambika/Chakreshvari/Padmavati)
- [x] 31 कंदरिया महादेव मंदिर → `31-khajuraho-kandariya-mahadev-mandir.md` (largest/tallest at Khajuraho, King Vidyadhara ~1025-1050 CE, possibly a Mahmud-of-Ghazni-victory monument, 31m/102ft, ~800 sculptures)
- [x] 32 घंटई मंदिर → `32-khajuraho-ghantai-mandir.md` (named for bell-chain pillar motif, Dhanga-era ~995 CE, dedicated to Rishabhanatha, similar plan to Parshvanatha but grander, only porch+mahamandapa survive)
- [x] 33 चित्रगुप्त मंदिर → `33-khajuraho-chitragupta-mandir.md` (cross-refs point 28; Khajuraho's only Surya temple, ~1023 CE, rare Vishnu "para rupa" with dashavatara)
- [x] 34 जावरी मंदिर → `34-khajuraho-javari-mandir.md` (~975-1100 CE; **honestly flagged source self-contradiction** on Shiva-vs-Vishnu dedication, main idol is broken/headless Vishnu; distinctive Makara Torana, navagraha)
- [x] 35 देवी जगदंबा मंदिर → `35-khajuraho-devi-jagadamba-mandir.md` (~1000-1025 CE, originally Vishnu-dedicated, later transformed to Parvati/Jagadamba worship)
- [x] 36 पार्श्वनाथ मंदिर (checklist said "परशुराम मंदिर") → `36-khajuraho-parshvanath-mandir.md` (**corrected checklist's own naming error** — no such "Parshuram temple" exists at Khajuraho, clearly meant Parshvanatha; Khajuraho's largest Jain temple, Dhanga-era ~960 CE, originally Adinatha-dedicated; 954 CE inscription bearing a "most-perfect magic square" — high-value math-history fact; Vaishnavite exterior themes despite Jain dedication)
- [x] 37 बीजामंडल (अवशेष) → `37-khajuraho-bijamandal-avshesh.md` (**explicitly distinguished from the far more famous Vidisha Bijamandal/Alamgir-Mosque site** — a separate, unrelated ruin; Khajuraho's own Bijamandal is in the Southern Group at Jatkari village, 10th-11th c., 34.6m — bigger than Kandariya Mahadev, excavated 1998-2000/2002-03, still one of 18 unexcavated mounds)
- [x] 38 लक्ष्मण मंदिर → `38-khajuraho-lakshman-mandir.md` (built by 7th Chandela ruler Yashovarman ~930-950 CE, dedicated to Vaikuntha Vishnu, central dashavatara panel)
- [x] 39 वामन मंदिर → `39-khajuraho-vaman-mandir.md` (~1050-75 CE, dedicated to Vishnu's 5th avatar Vamana, relatively few erotic carvings)
- [x] 40 विश्वनाथ मंदिर → `40-khajuraho-vishwanath-mandir.md` (built by King Dhanga, ~999-1002 CE, Shiva as "Vishvanatha")
- [x] 41 शांतिनाथ मंदिर (पूर्वी समूह) → `41-khajuraho-shantinath-mandir-purvi-samuh.md` (present structure only ~1870 CE [Gajarath-festival rebuild by Kanchhedilal of Nagaur] but the 4.3m/12ft main idol's pedestal inscription dates to Samvat 1085/1027-28 CE — image ~8 centuries older than the structure housing it)
- [x] 42 सलंकृत नायिका/शालभञ्जिका → `42-khajuraho-salankrit-nayika-shalabhanjika.md` (etymology "sala-branch-breaker"; the "dohada" fertility-ritual concept behind the motif; evolution from 2nd-c.-BCE Buddhist art [Maya Devi's birth-scene sal-branch pose] to 12th-c. Hindu/Jain temple "madanika" bracket-figures)
- [x] 43 नागर बनाम द्रविड़ — MP मंदिर शैली — तुलना → `43-nagar-dravid-mp-mandir-shaili-tulna.md` (comparison table; MP's 3 Nagara sub-styles Latina/Phamsana/**Bhumija** [Malwa-origin, 10th c., Paramara-era — cross-ref point 26's Udayeshwar temple as finest example])

**ओरछा किला/मंदिर/भित्ति चित्र (44-55, 12 points) — COMPLETE (all files correctly located directly under `03-pramukh-kala-murtikala/`, not a sub-folder — caught and fixed a misplacement of points 44-45 into a wrongly-created `04-orchha.../` folder before it compounded):**
- [x] 44 जहांगीर महल → `44-orchha-jahangir-mahal.md` (Bir Singh Deo, commemorating Jahangir's visit, Mughal-Rajput fusion)
- [x] 45 फूलबाग → `45-orchha-phoolbagh.md` (courtyard garden, fountains, ancient cooling system)
- [x] 46 भित्ति चित्र कथ्य/शैली → `46-orchha-bhitti-chitra-kathya-shaili.md` ("Bundeli Kalam" — independent regional school, elongated eyes/cool palette/uncrowded compositions, painted with fingers/twigs/matchsticks; main sites Lakshminarayan Temple + Raj Mahal, 17th-19th c.)
- [x] 47 राजमहल → `47-orchha-rajmahal.md` (Raja Madhukar Shah, 1554-91, stone jali work, mythological ceiling paintings)
- [x] 48 राम राजा मंदिर → `48-orchha-ram-raja-mandir.md` (legend of the immovable idol meant for Chaturbhuj temple; **India's only temple where Ram is worshipped as king** — daily guard of honour + armed salutation)
- [x] 49 लक्ष्मीनारायण मंदिर → `49-orchha-lakshminarayan-mandir.md` (Bir Singh Deo, 1622/1662 date-discrepancy noted honestly, restored 1793 by Prithvi Singh; fort-temple fusion with cannon slots; **the famous 1857 Rani Lakshmibai battle-leadership mural**)
- [x] 50 बुन्देला किला/भित्ति चित्र → `50-orchha-bundela-kila-bhitti-chitra.md` (Rudra Pratap Singh, capital shifted Garhkundar→Orchha 1531; fort layout incl. Oontkhana/Yajnashala/Barudkhana [now Saket Ramayana Museum]; Chaturbhuj Temple 105m/344ft cruciform-Vishnu-symbolic design, 67 steps)
- [x] 51 भित्ति चित्र — मुगल दरबार दृश्य → `51-orchha-bhitti-chitra-mugal-darbar-drishya.md`
- [x] 52 भित्ति चित्र — युद्ध दृश्य → `52-orchha-bhitti-chitra-yuddh-drishya.md` (mythological Ram-Ravana battle scenes + the marquee 1857 Rani Lakshmibai mural at Lakshminarayan Temple)
- [x] 53 भित्ति चित्र — रामचरितमानस प्रसंग → `53-orchha-bhitti-chitra-ramcharitmanas-prasang.md` (Tulsidas-inspired scenes, tied to Orchha's unusual Ram-bhakti prominence in an otherwise Krishna-bhakti-dominant Bundelkhand)
- [x] 54 भित्ति चित्र — ललित अलंकरण → `54-orchha-bhitti-chitra-lalit-alankaran.md` (dancers/musicians/wrestlers/folk-tales/floral motifs)
- [x] 55 ओरछा बनाम ग्वालियर — भित्ति चित्र शैली — भेद → `55-orchha-vs-gwalior-bhitti-chitra-shaili-bhed.md` (Orchha = single codified "Bundeli Kalam" school vs. Gwalior's Gujari Mahal museum = multi-style collection [Mughal/Rajput/Kangra/Pahari/Gwalior] without one defining independent local school)

**ग्वालियर किला एवं स्मारक (56-66, 11 points) — COMPLETE:**
- [x] 56 उरवाई गुफाएँ/गोपाचल जैन मूर्तियाँ → `56-gwalior-kila-urwahi-guphayen-gopachal-jain-murtiyan.md` (1000+ rock-cut Jain figures, mainly Tomar-era 15th-16th c. [kings Viramdev/Dungar Singh/Kirti Singh]; colossal Rishabhanatha 58'4" [tallest], Parshvanatha 47', Suparshvanatha 35' padmasana)
- [x] 57 गुजराती महल → `57-gwalior-kila-gujarati-mahal.md` (Man Singh Tomar, 15th c., built as a love-token for Gujar queen Mrignayani)
- [x] 58 तानसेन समाधि/मोहम्मद गौस मकबरा → `58-gwalior-kila-tansen-samadhi-mohammad-ghaus-maqbara.md` (Ghaus = Sufi teacher of both Humayun and Tansen, Akbar-era tomb with jali work; Tansen's own works "Sri Ganesh Stotra"/"Sangita Sara", annual Nov/Dec Tansen Music Festival)
- [x] 59 मान मंदिर महल → `59-gwalior-kila-man-mandir-mahal.md` (Man Singh Tomar 1486-1516, India's only surviving pre-Mughal Rajputana palace, "Chit Mandir" colored tiles, 4 floors [2 underground]; underground prison where Aurangzeb poisoned brother Murad with opium)
- [x] 60 सास-बहू मंदिर → `60-gwalior-kila-sas-bahu-mandir.md` (11th c., Kachchhapaghata king Mahipala, dedicated to Aniruddha [Krishna's grandson] + Shiva)
- [x] 61 गुर्जरी महल संग्रहालय → `61-gwalior-gujari-mahal-sangrahalaya.md` (archaeological museum housed in Gujari Mahal — sculptures/pottery/inscriptions)
- [x] 62 जय विलास पैलेस → `62-gwalior-jai-vilas-palace.md` (Maharaja Jayajirao Scindia 1874 for the Prince of Wales's 1875 visit, architect Michael Filose, Tuscan/Italian-Doric/Corinthian 3-storey mix; Durbar Hall's 2 Vienna chandeliers — 3.5 tonnes/40ft/250 bulbs each, among the world's 3 largest — tested by hanging 8 elephants from the ceiling)
- [x] 63 जैन तीर्थंकर पहचान चिह्न → `63-gopachal-jain-tirthankar-pehchan-chinh.md` (lanchhana concept + examples table; srivatsa as the universal chest-mark)
- [x] 64 जैन मुद्रा/आसन → `64-gopachal-jain-mudra-asan.md` (Padmasana vs Kayotsarga, symbolic meaning)
- [x] 65 जैन शिरोभूषण/उष्णीष लक्षण → `65-gopachal-jain-shirobhushan-ushnish-lakshan.md` (Digambara nude form, coiled-hair ushnisha, elongated earlobes as a residual-royalty marker)
- [x] 66 जैन समूह विन्यास/प्रमाण → `66-gopachal-jain-samuh-vinyas-praman.md` (5 clusters — Urvahi/Siddhanchal, SE "Ek Patthar ki Bawadi" [26 caves], Trishalagiri, + 2 more; 1000+ total figures, ~100 of monumental scale)

**मांडव (इंडो-इस्लामिक स्थापत्य) (67-79, 13 points) — COMPLETE:**
- [x] 67 विशिष्टताएँ → `67-indo-islamic-mandav-vishishtayen.md` (1405 capital shift Dhar→Mandu by Hoshang Shah, renamed Shadiabad; "Malwa style" — airy arched pavilions, local stone/marble, Hindu-Islamic roof fusion)
- [x] 68 चम्पा बावड़ी → `68-mandav-champa-baoli.md` (octagonal-below/circular-above stepwell, underground tehkhana rooms, subterranean passage to Munja Talao level)
- [x] 69 जहाज़ महल → `69-mandav-jahaz-mahal.md` (Ghiyas-ud-din Khilji, between Munj+Kapur lakes, royal harem, 2-storey)
- [x] 70 जामा मस्जिद → `70-mandav-jama-masjid.md` (begun ~1406 Hoshang Shah modeled on Damascus's Umayyad Mosque, completed 1454 by Mahmud Khilji, finest/largest Afghan-architecture example in India)
- [x] 71 दिलावर खाँ का महल → `71-mandav-dilawar-khan-ka-mahal.md` (Dilawar Khan's Mosque 1405 — Mandu's earliest Indo-Islamic structure, built with reused Hindu-temple pillars bearing lotus carvings; adjoining Nahar Jharokha "Tiger Balcony" + genuine palace-courtyard complex behind it, confirmed as a real distinct structure not a checklist error)
- [x] 72 नीलकंठ महल → `72-mandav-nilkanth-mahal.md` (Mughal-era water-palace, now a Shiva temple)
- [x] 73 रानी रूपमती मंडप → `73-mandav-rani-roopmati-mandap.md` (fort-edge, Narmada view, Rewa Kund reservoir)
- [x] 74 हिंडोला महल → `74-mandav-hindola-mahal.md` (77°-angled battered walls creating swing-illusion + earthquake resistance; Hoshang Shah-era durbar hall modified by Ghiyas-ud-din Khilji; dry construction, no cement, T-shaped plan)
- [x] 75 होषंगशाह का मक़बरा → `75-mandav-hoshangshah-ka-maqbara.md` (India's first marble mausoleum, possible Taj Mahal architectural template studied by Shah Jahan's architects — cross-ref checklist-01 point 21 for reign history)
- [x] 76 ओवरफ्लो आउटलेट डिज़ाइन → `76-mandav-overflow-outlet-design.md` (full-tank auto-diversion to underground cisterns; door-blocked channels going underground and re-emerging; Kamal Kund's sinuous channel — slows water to let suspended solids settle, natural filtration)
- [x] 77 कुंड/बावड़ी जल संचयन → `77-mandav-kund-baoli-jal-sanchayan.md` (groundwater-free plateau town, ~1200 original tanks[~700 remain]/18 lakes/~125 baolis; Andheri Baori [cooling] vs. 265-ft-deep Ujala Baori [drinking water, kept separate from residential area])
- [x] 78 जल संरचना — तहखाने व निकास → `78-mandav-jal-sanrachna-tehkhane-nikas.md` (Champa Baoli's tehkhana cooling rooms; **Hamam Ghar's 3-tunnel system** — heating-over-stove/steam/cold-water tunnels for temperature-controlled royal bath water)
- [x] 79 नहर/चैनल आपूर्ति तंत्र → `79-mandav-nahar-channel-aapurti-tantra.md` (Munj-Kapur lake balancing canal; underground channels linking main tank directly to in-building cisterns; rooftop pulley-and-silver-basket system during insufficient rainfall)

**धार (80-82), चंदेरी (83-85), बुरहानपुर (86-90) — all COMPLETE (11 points):**
- [x] 80 धार किला → `80-dhar-kila.md` (Muhammad bin Tughlaq 1344; Peshwa Bajirao II born here 1775; 1857 revolt, 6-day British bombardment to recapture)
- [x] 81 भोजशाला — शिलालेख — कॉन्सेप्ट → `81-dhar-bhojshala-shilalekh-concept.md` (Raja Bhoj's Sanskrit-learning center + Vagdevi/Saraswati temple; **unique "Sarpabandha" serpentine pillar inscriptions are literal Sanskrit grammar teaching-charts carved in stone**; Vagdevi idol taken to Britain 1875 by Kincaid, now British Museum Gallery 33; 2024 ASI survey + MP High Court verdict declaring it a Saraswati temple — fully current/2026 fact)
- [x] 82 लाट मस्जिद → `82-dhar-lat-masjid.md` (Dilawar Khan 1405, built from Jain-temple remains marking Malwa Sultanate's independence; named for the toppled 13th-c. Iron Pillar [43'4", ~2x Delhi's], Akbar's 1598 visit inscription, attribution dispute folk-Raja Bhoja vs. ASI's Cousens-Arjunavarman 1210 CE, broken 1531 by Gujarat's Bahadur Shah, now 3 pieces)
- [x] 83 चंदेरी किला → `83-chanderi-kila.md` (**Battle of Chanderi 1528 — Babur vs. Medini Rai** [Rana Sanga's vassal], post-Khanwa 1527, Jauhar, fort annexed to Mughal empire)
- [x] 84 कोशक महल → `84-chanderi-koshak-mahal.md` (Mahmud Shah Khilji 1445, Battle-of-Kalpi victory monument, planned 7 storeys/only 4 built, 4 identical symmetric mansions)
- [x] 85 चंदेरी जामा मस्जिद → `85-chanderi-jama-masjid.md` (1251 CE, Ghiyasuddin Balban, Delhi Sultanate — predates Mandu's Jama Masjid by 1.5 centuries)
- [x] 86 अहुखाना उद्यान → `86-burhanpur-ahukhana-udyan-mugal-shahri-virasat.md` (Prince Daniyal's hunting-lodge → Shah Jahan's walled garden; **Mumtaz Mahal died in Burhanpur 1631, buried here 6 months before remains moved to the Taj Mahal at Agra** — "the city where the Taj was originally meant to be built")
- [x] 87 कुंडी भंडारा जल सुरंग → `87-burhanpur-kundi-bhandara-jal-surang.md` (built 1615 by **Abdur Rahim Khan-e-Khana — the same "Rahim" of Hindi-literature dohas fame**; 103 interconnected kundis + ~3.9km underground tunnel tapping Satpura groundwater; UNESCO tentative list)
- [x] 88 बुरहानपुर जामा मस्जिद → `88-burhanpur-jama-masjid.md` (city founded 1388 by Faruqi's Malik Nasir Khan, Khandesh Sultanate capital; mosque by Adil Shah IV, 1588-90; **rare Sanskrit+Arabic bilingual construction inscription** — syncretic-culture evidence)
- [x] 89 दर्गाह-ए-हकीमी → `89-burhanpur-dargah-e-hakimi.md` (Bohra pilgrimage site, Syedna Abdul Tayeb Zakiuddin's [d.1787] tomb, white marble)
- [x] 90 शाही किला/दीवान-ए-आम → `90-burhanpur-shahi-qila-diwan-e-aam.md` (Faruqi-built on Tapti, Mughal-expanded; Shah Jahan's Diwan-e-Aam/Khas [now roofless ruins] + a hammam built for Mumtaz Mahal)

**भोपाल (91-95) + misc single-points (96-103) — all COMPLETE (13 points):**
- [x] 91 गोहर महल → `91-bhopal-gohar-mahal.md` (Qudsia Begum ~1820, Bhopal's first female ruler, unusually direct Mughal-Hindu style fusion)
- [x] 92 ताज-उल-मसाजिद → `92-bhopal-taj-ul-masajid.md` (started 1871 Shah Jahan Begum → continued Sultan Jahan Begum → halted for funds → resumed 1971 → completed 1985, 100+ years total; India's largest mosque, ~175,000 capacity, 62m minarets)
- [x] 93 मोती मस्जिद → `93-bhopal-moti-masjid.md` (Sikandar Begum, mid-19th c.)
- [x] 94 शौकत महल → `94-bhopal-shaukat-mahal.md` (Qudsia Begum for daughter Sikandar Jehan Begum, 1830s, Indo-Islamic+European Gothic fusion with a French architect)
- [x] 95 सदर मंज़िल → `95-bhopal-sadar-manzil.md` (Shah Jahan Begum 1898 palace → Sultan Jahan Begum's post-1901 Darbar Hall conversion; **Feb 2025 — converted into "Sadar Manzil Heritage by Atmosphere" couples-only hotel**, a fully current fact)
- [x] 96 दातिया महल (बादल महल) → `96-datia-mahal-badal-mahal.md` (Bir Singh Deo 1614, built for Jahangir's welcome like Orchha's Jahangir Mahal, **never actually inhabited by any ruler**; 7 storeys/2 underground, 440 rooms, no wood/iron used)
- [x] 97 जबलपुर मदन महल किला → `97-jabalpur-madan-mahal-kila.md` (**resolved a real source conflict** — Wikipedia's more authoritative 14th-century/Raja Madan Singh dating vs. popular-source claims of 11th century or direct construction by Durgavati's son; correctly framed as pre-dating Durgavati by ~200 years but becoming strongly associated with her and son Veer Narayan during her reign)
- [x] 98 नचन (पन्ना) मंदिर समूह → `98-nachna-panna-mandir-samuh.md` (among central India's oldest stone temples with Bhumara/Deogarh, 5th-6th c. Gupta [Chaumukhnath 9th c.]; Parvati temple most-studied; earliest known stone friezes narrating Ramayana scenes)
- [x] 99 महेश्वर घाट/किला → `99-maheshwar-ghat-kila.md` (Ahilya Fort 1766 by Ahilyabai Holkar, ruled from here 1767-95; one of India's biggest Narmada ghats, Holkar-dynasty cenotaphs)
- [x] 100 महेश्वर नवदातोली मालवा चाल्कोलिथिक → `100-maheshwar-navdatoli-malwa-chalcolithic.md` (excavated 1957-59 by H.D. Sankalia, published 1971; **type-site for the Malwa Culture** [cross-ref point 4's Kayatha sequence], ~1600-1300 BCE)
- [x] 101 ओंकारेश्वर ममलेश्वर मंदिर → `101-omkareshwar-mamleshwar-mandir.md` (ancient name Amareshwar, 4th Jyotirlinga; Omkareshwar-on-island + Mamleshwar-on-mainland framed correctly as one complementary split-linga pair, not a contradiction)
- [x] 102 सीहोर सारू-मारू लघु शिलालेख → `102-sehore-saru-maru-laghu-shilalekh.md` (Pangoraria village, 120km S of Sanchi; Ashoka's 2 inscriptions incl. a rare one describing his own pre-coronation pleasure-visit here **with his unwedded consort** during his Vidisha viceroyalty)
- [x] 103 कटनी रूपनाथ शिला लेख → `103-katni-rupnath-shilalekh.md` (cross-refs the fuller existing checklist-01 note; new content here: the "256" numeral scholarly puzzle — era-year vs. 256 messengers[Bhandarkar/Smith/Senart] vs. 256-night pilgrimage — unique to this edict among all Ashokan inscriptions)

**किले जल प्रबंधन/रक्षा series (104-108) + final 3 points (109-111) — all COMPLETE:**
- [x] 104 आटर (भिंड) → `104-kile-jal-prabandhan-raksha-ater-bhind.md` (Bhadauria kings Badan Singh/Maha Singh/Bakhat Singh, 1644-68; 17 bastions; "Khooni Darwaza" execution-gate)
- [x] 105 आसिरगढ़ (बुरहानपुर) → `105-kile-jal-prabandhan-raksha-asirgarh-burhanpur.md` ("Key to the Deccan"; Akbar's 1601 conquest, Jahangir imprisoned blinded son Khusrau here, Aurangzeb's 26-year Deccan-campaign base, British captured 1803+1819; volcanic-rock construction, huge natural water tank + carved rain-cisterns)
- [x] 106 धार किला (जल/रक्षा कोण) → `106-kile-jal-prabandhan-raksha-dhar-kila.md` (cross-refs point 80's political history; here: ~9th-c. earthen ramparts, circular city plan ringed by tanks+moats resembling Warangal, multi-period stepwells)
- [x] 107 नरवर (शिवपुरी) → `107-kile-jal-prabandhan-raksha-narwar-shivpuri.md` (Kachhwaha Rajputs 10th c., pre-12th-c. name "Nalapura" tied to Mahabharata's Raja Nala; **8 wells + 9 stepwells built in the 8th century held ~1600 women drawing water simultaneously**; 500-year-old palace bath-tubs with separate hot/cold water piping)
- [x] 108 रायसेन → `108-kile-jal-prabandhan-raksha-raisen.md` (Paramara-origin 11th-13th c. → Mandu Sultans → Rajputs; ~800 acres, 9 gates; **40+ wells** water system; 4 palaces — Badal/Rohini/Itradaan/Hawa Mahal)
- [x] 109 शिवपुरी सिंधिया छतरियाँ → `109-shivpuri-sindhiya-chhatriyan.md` (Scindias' summer capital; Madhav Rao's chhatri 1926-32 — first all-marble AND last grand Scindia chhatri; Hindu-shikhara+Mughal-dome fusion, silver doors; Jivajirao Scindia built it over his predecessor's ashes)
- [x] 110 जैन/हिंदू/बौद्ध आइकनोग्राफी तुलना → `110-jain-hindu-bauddh-iconography-tulna.md` (synthesizing point tying together 6-17/63-66/28-29: **Buddha and Jina both have ushnisha but Buddha is robed vs. Digambara Jina fully nude — the key visual differentiator**; identification-method contrast — Buddhist mudras vs. Jain lanchhana vs. Hindu multi-arm+weapon+vahana; early aniconic-to-anthropomorphic Buddhist art transition)
- [x] 111 भारत भवन → `111-bharat-bhavan-bahu-vidh-kala-manch.md` (opened 13 Feb 1982, architect Charles Correa, Shamla Hills overlooking Upper Lake; the one lasting success of a nationwide late-1970s state-capital cultural-institution scheme; "Empty Space" architectural philosophy via terraced levels/sunken courtyards)

**🎉 CHECKLIST FILE 03 (`03-pramukh-kala-murtikala.md`, 111 points) IS FULLY COMPLETE.** All 111 corresponding notes exist under `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/03-pramukh-kala-murtikala/` (file count verified = 111).

### Checklist file 04 — `04-pramukh-janjatiyan-boliyan.md` (18 points) — user confirmed start, COMPLETE

Much smaller file (18 vs. 111 points) — MP's major tribes, regional Hindi dialects, and tribal languages. The checklist file's own header note says deep tribal coverage lives in Unit 10 and this is meant to be a basic/introductory list — **but partway through, the user explicitly pushed back twice ("you are not covering all facts", "revisit all points of 04... add the missing facts") and directed full top-rank-depth coverage here too, overriding the file's own "basic list" framing.** Notes go in `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/04-pramukh-janjatiyan-boliyan/`. Points 1-14 were each revisited and rewritten a second time with substantially more verified facts after this correction; points 15-18 were written directly at the enriched depth. **Lesson for all future checklist files in this project: default to thorough/exhaustive depth from the first pass, even when a checklist file's own header suggests a lighter/introductory treatment — confirm scope explicitly with the user rather than assuming brevity is wanted.**

**प्रमुख जनजातियाँ (1-10) — COMPLETE (all enriched after user correction):**
- [x] 1 गोंड जनजाति → `01-gond-janjati.md` (largest tribe nationally [1.3 cr] but 2nd-largest within MP [50.9 lakh] after Bhil; 4 sub-groups Raj Gond/Madia/Dhurve/Khatulwar; Gondi=Dravidian; **Jangarh Singh Shyam of Patangarh village [Dindori] — pioneer of Gond painting's "Jangarh Kalam" school, first internationally-acclaimed Adivasi artist**)
- [x] 2 भील जनजाति → `02-bhil-janjati.md` (**largest tribe in MP [37.7% of ST population] but 3rd-largest nationally** after Gond+Santhal — a frequently-tested contrast with point 1; Alirajpur 89%/Jhabua 87% tribal-population districts; **Bhagoria Utsav** pre-Holi courtship-fair; **Pithora painting** ritual art with white-horse central motif)
- [x] 3 कोरकू जनजाति → `03-korku-janjati.md` (Austro-Asiatic North Munda branch; "Korku Panchayat" social structure headed by Patel+Padihar+Kotwar+Panch; **Khamb Swang festival** — Meghnad-pillar drama festival, Kwar month)
- [x] 4 बैगा जनजाति (PVTG) → `04-baiga-janjati-pvtg.md` (one of MP's 3 PVTGs; **Karma dance** = root dance of all Baiga dance forms; **Baigachak** [Dindori, 7 villages] — first area in India to receive Habitat Rights under FRA, 9 Dec 2015)
- [x] 5 सहरिया जनजाति (PVTG) → `05-sahariya-janjati-pvtg.md` (Gwalior-Chambal division; headman="Patel", "Khutiya" lineage-prefix; **only 3-4% literacy** — among MP's lowest; community grain/seed banks reviving traditional varieties)
- [x] 6 भरिया जनजाति (PVTG) → `06-bharia-janjati-pvtg.md` (Patalkot valley, Chhindwara; **naming legend traces to Sita vanishing into the earth in the Ramayana** — "Sita's Patal Pradesh"; traditional healers called **"Bhumka"**, deep medicinal-plant/Ayurveda knowledge)
- [x] 7 कोल जनजाति → `07-kol-janjati.md` (MP's 3rd-largest tribe, 22 sub-tribes, mentioned in Ramayana/Mahabharata; **Karma festival/dance** — Bhadrapad month, circular dance around a revered Karma tree)
- [x] 8 पारधी जनजाति (घुमंतू) → `08-pardhi-janjati-ghumantu-samuday.md` ("hunter" etymology; many regional sub-names — Phanse Pardhi/Bahelia/Chita Pardhi/Shikari etc.; British "Criminal Tribe" tag 1871 → denotified 1952)
- [x] 9 सौर जनजाति → `09-saur-janjati.md` (**corrected an overly-scattered first-draft district list** — genuinely centered on Bundelkhand [with a secondary Shahdol-Anuppur-Sidhi-Singrauli pocket], fully assimilated into Bundeli culture/Hinduism; distinctive traditional crafts — painting, pottery, metal/wood/comb/bamboo/chhipa-craft)
- [x] 10 कमार जनजाति → `10-kamar-janjati.md` (**honestly flagged as now almost entirely a Chhattisgarh tribe** post-2000 split — Gariaband/Dhamtari/Mahasamund districts; Chhattisgarh's first PVTG to receive FRA habitat rights; origin village Devdongar)

**प्रमुख बोलियाँ (11-15) + जनजातीय भाषाएँ (16-18) — COMPLETE:**
- [x] 11 मालवी बोली → `11-malvi-boli.md` (Ujjain/Indore/Bhopal divisions; **Grierson's LSI classifies it as South Rajasthani** [vs. some scholars' Western Hindi view] — a genuine classification debate; Devanagari, ~54 lakh speakers (2011); sub-dialects Sondhwari/Rangdi/Umathwari; **"Maach" — Malwa's ~200-year-old folk theatre, founded by Guru Gopalji [adapted Rajasthani Khyal], centered in Ujjain**, noted exponents incl. Omprakash Sharma)
- [x] 12 निमाड़ी बोली → `12-nimadi-boli.md` (**frequently-tested fact: Nimadi is linguistically classified as a sub-dialect of Malvi** [with Rangdi]; ~23.1 lakh speakers; **Sant Singaji [15th c., Khargone] — central devotional-poetry figure**; modern writers incl. Ramnarayan Upadhyay)
- [x] 13 बुंदेली बोली → `13-bundeli-boli.md` (Grierson: Western Hindi, Sauraseni Apabhramsha-derived; ~56 lakh speakers; Grierson's 4 sub-dialect groups [Standard/NE-mixed/NW-mixed-Braj-influenced/Southern-broken]; Alha-Khand epic [Alha-Udal vs. Prithviraj Chauhan/Chandelas], sung in "Banaphari" style; **poet Isuri [1838-1909] — 1000+ Phaag folk songs, "Chaukaria Phag"**)
- [x] 14 बघेली बोली → `14-bagheli-boli.md` (**Grierson classifies it as Eastern Hindi — the only one of MP's 4 major dialects in that group**, rest being Western Hindi/Rajasthani; ~26.9 lakh speakers; naming from 11th-12th c. Vyaghradev Baghel; Rewa king Vishwanath Singh's own works "Param Dharm Vijay"/"Vishwanath Prakash"; poets incl. Srinivas Shukla "Saras")
- [x] 15 मालवी/निमाड़ी लोकगीत → `15-malvi-nimadi-lokgeet-krishi-ritu-aadharit.md` (16-sanskara life-cycle songs incl. Sohar/Banna-Banni; **monsoon-season songs — "Sanja Geet" [Malwa's signature Sawan song], Kajari, Hindoli**; **festival songs — Gangaur geet, sung in Chaitra month for the Nimar-region Gangaur festival [married women's Shiva-Parvati worship for marital wellbeing]**)
- [x] 16 गोंडी भाषा → `16-gondi-bhasha.md` (Central Dravidian, not in 8th Schedule — **ranks 15th by speaker count among all non-8th-Schedule languages, ~1.2 crore speakers across 6 states**, also excluded from Sahitya Akademi's 24 recognized languages; **CGNet Swara [founder Shubhranshu Choudhary] + IGNCA standardized a Gondi dictionary [3000+ words, 4 years, ~100 community members]**; Gunjala Gondi script — abugida discovered 2006 by Prof. Jayadheer Tirumala Rao in Adilabad, ~1750 CE manuscripts, added to Unicode 2018, ~80 people now learning it)
- [x] 17 कोरकू भाषा → `17-korku-bhasha.md` (revisited a 2nd time when user asked "are you covering all points in very depth only?" while this file was open — added precise MP+Maharashtra district list [Betul/Hoshangabad/East Nimar; Akola/Amravati/Buldhana], the >1%-of-non-scheduled-speakers stat, and — the genuinely new analytical fact — **the language's endangerment is driven not just by generational non-transmission but by the Korku community's own internalized view of their language as "inferior," with even educated Korkus discouraging their children from learning it**; Devanagari/Balbodh script; 7.27 lakh speakers (2011); not in 8th Schedule → also outside Sahitya Akademi's 24 languages, same pattern as Gondi/Bhili; UNESCO "vulnerable" status; Living Tongues Institute's talking dictionary + 2018 New Testament translation)
- [x] 18 भीली भाषा → `18-bhili-bhasha.md` (revisited a 2nd time for more depth per user request — added alternate names [Bhilboli/Bhagoria/Bhilala/Wagdi], related Bhil-language varieties [Bhilodi, Wagdi, Rathwi Bareli-3.59 lakh speakers, Vasavi], and the **superlative fact: Bhili is the single largest language in India not included in the 8th Schedule**; also excluded from Sahitya Akademi's 24 languages; Western Indo-Aryan Bhil-languages group; 32.06 lakh speakers (2011); Bhilori-English dictionary 2002; no indigenous script historically — purely oral literary tradition)

**Cross-file note:** points 16-18 were each revisited a second time to add a parallel "excluded from Sahitya Akademi's 24 recognized languages" fact (a direct consequence of 8th-Schedule exclusion) for consistency, plus superlative/ranking facts (Gondi's #15 rank, Bhili's #1 rank by speakers among non-Schedule languages) and recent preservation initiatives (CGNet Swara's Gondi dictionary) — reflecting the user's repeated real-time pushes during this file ("all points must be covered deep only") to keep researching even after a point looked reasonably complete.

**🎉 CHECKLIST FILE 04 (`04-pramukh-janjatiyan-boliyan.md`, 18 points) IS FULLY COMPLETE.** All 18 corresponding notes exist under `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/04-pramukh-janjatiyan-boliyan/` (file count verified = 18).

### Checklist file 05 — `05-parv-lok-sangeet-lok-kala-lok-sahitya.md` (43 points) — user confirmed start, explicitly asked for full depth from point 1 (no repeat of file-04's "basic first pass" mistake)

43 points across 8 sub-sections: प्रमुख पर्व/उत्सव (1-11), शास्त्रीय संगीत घराने (12-18), लोक नृत्य (19-24), लोक नाट्य (25-28), नदी-संस्कृति/तीर्थ-नगर (29-34), लोक हस्तकला/वस्त्र-GI (35-39), खान-पान (40-42), खेल-संस्कृति (43). Notes go in `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/05-parv-lok-sangeet-lok-kala-lok-sahitya/`. Applying full research depth from point 1 this time per explicit user instruction — no "basic list" assumption.

**प्रमुख पर्व/उत्सव (1-11) — COMPLETE:**
- [x] 1 सिंहस्थ/कुंभ — अखाड़ा व्यवस्था → `01-simhastha-kumbh-ujjain-akhara-vyavastha.md` (name="in Leo," Jupiter-in-Leo + Sun-in-Aries ~12yr cycle; 4 Kumbh sites' distinct planetary conditions; Samudra Manthan origin myth at Shipra; **13 akharas = 7 Shaiva+3 Vaishnav+3 Udasin**, Juna Akhara largest; bathing order Naga sadhus/Mahamandaleshwars first; Ujjain's Dutt Akhara Ghat[Shaiva]/Ram Ghat[Vaishnav]; next Simhastha 27 Mar-27 May 2028)
- [x] 2 शाही स्नान — सिंहस्थ → `02-ujjain-shahi-snan-simhastha.md` ("Shahi" naming origin ~19th c. Peshwa era; auspicious dates incl. Mauni Amavasya; **2025 UP govt renamed "Shahi Snan"→"Amrit Snan" for Prayagraj Mahakumbh specifically — honestly flagged as not confirmed to extend to Ujjain's Simhastha**; 2016 Simhastha 22 Apr-21 May, ~5-7.5 crore pilgrims)
- [x] 3 कालिदास परंपरा/उत्सव → `03-ujjain-kalidas-parampara-samaroh.md` (founded 1958, inaugurated by Dr. Rajendra Prasad; 7-day winter festival; Kalidas Akademi+Vikram University since 1979; honors Kalidas/Vatsyayana/Bhartrihari + Hindi writers Suman/Machwe/Muktibodh; **enriched with the co-located Hastshilp Mela [since 2001, Nov, ~12 days] — a fact more accurately tied to this festival than to Kumbh**)
- [x] 4 कुंभ इकोनॉमी — हस्तकला/पर्यटन → `04-ujjain-kumbh-economy-hastkala-paryatan.md` (**explicitly corrected the point-3 overlap**: budget escalation 2004 ₹262cr → 2016 ₹2500-3500cr → 2028 ~₹18,000cr discussed; **India's first permanent "Kumbh Nagri" for 2028 — ₹2000cr, 2378 hectares, land-pooling from ~1806 farmers**)
- [x] 5 नर्मदा जयंती → `05-narmada-jayanti-nadi-lok-aastha.md` (Magh Shukla Saptami; Shiva-tandava-sweat origin myth; Amarkantak birthplace; **Narmada = India's only river with a source-to-mouth-and-back circumambulation tradition** — Narmada Parikrama ~2600-3800km, traditional duration 3yr-3mo-13days, river always kept on the right, crossed only at source/mouth)
- [x] 6 महेश्वर — अहिल्या उत्सव/घाट संस्कृति → `06-maheshwar-ahilya-utsav-ghat-sanskriti.md` (three distinct events disambiguated: Devi Ahilya Jayanti Parv [Indore, MP Culture Dept], Nimar Utsav [Maheshwar, Kartik Purnima/Nov, 3-day, boating], Sacred River Festival [Maheshwar, 21+ years, Ahilyabai Holkar Trust + Mary McFadden])
- [x] 7 मालवा उत्सव → `07-malwa-utsav-kshetriya-kala-shilp.md` (25+ years, May, Ujjain[2 days]→Indore[5 days], 350+ artisans)
- [x] 8 खजुराहो नृत्य उत्सव → `08-khajuraho-nritya-utsav.md` (founded 1975, MP Kala Parishad, Feb 20-26; **performed against Chitragupta+Vishwanath temple backdrops** — cross-ref checklist-03 points 33/40; Kathak/Bharatanatyam/Odissi/Kuchipudi/Manipuri/Gaudiya/Kathakali)
- [x] 9 भगोरिया पर्व → `09-bhagoria-parv-bhil-janjati-holi-purv.md` (given full dedicated depth beyond the file-04 mention: Raja Bhoj-era origin under Bhil kings Kasumar-Balun in capital "Bhagor," name from "Bhav-Gauri"; haat spans Jhabua+Alirajpur villages; **"Bhag"=run/elope — mass-swayamvar gulal-exchange courtship ritual**; traditional instruments dhol/mandal/flute/thali; **2025 — CM Dr. Mohan Yadav declared it a "state-level event"** — added after user pushed for a completeness re-check on this specific file)
- [x] 10 तानसेन समारोह → `10-tansen-samaroh-gwalior.md` (originated as tomb-side "urs" tradition [~1920s, 101st edition in 2025]; nationalized by Union I&B Minister B.V. Keskar 1952-62; now Dec, Behat village Gwalior, 4-day; **"Rashtriya Tansen Samman" award since 1985**)
- [x] 11 लोकरंग महोत्सव → `11-lokrang-mahotsav-bhopal.md` (20+ years, Directorate of Culture + MP Tribal Museum, 5-day, 26-30 January starting Republic Day)

**शास्त्रीय संगीत घराने एवं परंपराएँ (12-18) — COMPLETE:**
- [x] 12 ग्वालियर घराना → `12-gwalior-gharana-dhrupad-khyal.md` (Hindustani music's **oldest gharana**, "Gangotri" of Khyal; 15th-c. Man Singh Tomar's Dhrupad school [Baiju Bawra/Haridas/Tansen]; Khyal-founder Ustad Nathan Peer Baksh, spread nationally by grandsons Haddu-Hassu-Natthu Khan; open-throated singing, Dhrupad-ang, straightforward taans avoiding avirbhav/tirobhava)
- [x] 13 तानसेन — ध्रुपद परंपरा → `13-tansen-gwalior-dhrupad-parampara.md` (born Ramtanu Pandey, Behat village; guru Swami Haridas; career arc Man Singh Tomar→**Raja Ramchandra Singh Baghel of Rewa [1555-92] before Akbar's court**→Navaratna; **ragas created: Miyan ki Todi, Miyan ki Malhar, Megh Malhar, Todi Thaat, Sarang Thaat, Raag Deepak**; died 26 Apr 1589)
- [x] 14 मैहर घराना — उस्ताद अलाउद्दीन खान → `14-maihar-gharana-ustad-alauddin-khan.md` (b. ~1862 Bangladesh; guru Wazir Khan of Rampur/Senia-Rampur lineage; Maihar court musician 1918-1972; combined bass sitar+bass sarod with traditional instruments, built an orchestra; disciples Ali Akbar Khan[son]/Ravi Shankar/Ashish Khan/Nikhil Banerjee, daughter Annapurna Devi)
- [x] 15 सेनिया घराना → `15-seniya-gharana.md` (collective name for all Tansen-descended lineages; **two branches — vocal via son Bilas Khan [Dhrupad-Dhamar] vs. instrumental via daughter Saraswati Devi+husband beenkar Misri Singh** [seeded rudra-veena/rabab/sitar traditions]; Masid Khan = first sitar-baj inventor; Rampur-Senia branch's Wazir Khan directly links to point 14's Alauddin Khan)
- [x] 16 ग्वालियर संगीत संस्थान/घराना संस्थानीकरण → `16-gwalior-sangeet-sansthan-manch-gharana-sansthanikaran.md` (**Madhav Sangeet Mahavidyalaya 1918 — MP's oldest music college**; **Raja Mansingh Tomar Music & Arts University 2008 — MP's first university combining music+fine arts+dance+theatre faculties, 170 affiliated colleges**, tellingly named after the same Man Singh Tomar who founded the Gwalior gharana in point 12)
- [x] 17 संगीत/नाट्य अकादमी — राज्य मंच → `17-sangeet-natya-akademi-rajya-manch.md` (**clarified that points 8 and 10's "MP Kala Parishad" and "Ustad Alauddin Khan Sangeet evam Kala Academy" are the SAME body under different name-eras**, originally founded 1952 as MP Kala Parishad; runs both the Khajuraho Dance Festival and Tansen Samaroh; one of 13 state cultural bodies; sister institution Dhrupad Kendra Bhopal)
- [x] 18 कालिदास अकादमी — अनुसंधान/उत्सव → `18-kalidas-akademi-anusandhan-utsav.md` (founded 1978 [1977 variant noted], multi-disciplinary Kalidasa-centered institution for Sanskrit classical research/translation/critical editions and performing-arts adaptation; runs the Samaroh from point 3 jointly with Vikram University since 1979)

**लोक नृत्य (19-24) — COMPLETE:**
- [x] 19 राई नृत्य → `19-rai-nritya-bundelkhand.md` (name from mustard-seed swirl; originally a court dance; **Bedia community** women, 17-yard lehenga; "scorpion pose" drummer acrobatics; **Ram Sahay Pandey [Sagar] — Brahmin who dignified this Bedia-caste dance against social prejudice, recognition in 24 countries, Padma Shri 2022, founded Bundelkhandi Lok Nritya Natya Kala Parishad**)
- [x] 20 करमा नृत्य → `20-karma-nritya-gond-baiga-janjati.md` (cross-refs checklist-04; new content — two Karam-Devta myths [Karma-Dharma brothers; Oraon-Munda seven-brothers-wives tale]; dancers circle a planted Karam branch all night to mandar-drum beats; performed mainly by Kharwar + Gond/Baiga/Kol)
- [x] 21 सैला नृत्य → `21-saila-nritya-gond-janjati.md` (Gond male competitive village-vs-village stick dance, post-harvest; also performed by Baiga pre-Diwali)
- [x] 22 तेरहताली नृत्य → `22-terahtali-nritya.md` (**honestly flagged as primarily a Rajasthani Kamad-community dance** [Baba Ramdev devotional tradition, Pokhran/Nagaur/Pali] — its stated "MP" link likely stems from a name-confusion between Rajasthan's "Kamad" and the unrelated Chhattisgarh-based "Kamar" tribe from checklist-04 point 10; 13 manjiras tied to the body, performed sitting)
- [x] 23 गणगौर नृत्य/पर्व → `23-gangaur-nritya-parv-malwa-nimar.md` (full dedicated treatment beyond checklist-04's brief song-mention: Chaitra Shukla Tritiya, Isar[Shiva]+Gauri[Parvati] idol procession to water sources; **Nimar's distinctive 9-day dance devoted to deities Ranubai and Dhaniyer Suryadev**)
- [x] 24 मटकी नृत्य → `24-matki-nritya-malwa.md` (Malwa women's solo pot-balancing dance, circular formation, dhol; developed from nomadic tribes' daily water-carrying routine; sub-types Aada/Khada Nach)

**Mid-file correction applied:** user flagged interpretive/connective filler creeping into recent notes (re-checked while point 13 was open); found and removed two clear violations in point 16 (an editorializing sentence + an entire non-factual "significance" section that was my own synthesis, not a sourced fact) — reinforces the standing zero-filler rule for this whole note series.

**लोक नाट्य (25-28) — COMPLETE:**
- [x] 25 मांच (Maach) → `25-maach-malwa-lok-natya.md` (cross-refs checklist-04's founder/artist list; new depth: ~200-250 years old [not 1000], began early 18th c.; **terminology — "bol"=dialogue, "vanag"=rhyme-structure, "rangat"=melodies, "tek jhelna"=choir dialogue-reinforcement technique**; sarangi/dhol/harmonium; male performers play female roles too; local saying "more to listen to than watch")
- [x] 26 गम्मत/स्वांग → `26-gammat-swang-lok-natya.md` (**Gammat** = Nimar-region Navdurga-festival theatre in Nimadi, harmonium/dholak/tabla; **Swang** = dialogue-driven [not dance-driven] Malwa form built on "nakal"/mimicry, men play sharp-tongued dominant female characters, comparison table vs. Maach)
- [x] 27 नौटंकी परंपरा → `27-nautanki-parampara.md` (revisited/enriched a 2nd time after user flagged it for a completeness check: **honestly scoped as primarily a UP tradition** [19th c., Hathras+Kanpur centers, poet Indarman], present in MP only as one of 5 secondary states; grouped with regional-equivalent forms incl. MP's own Maach; **flagged a genuine naming trap — Nautanki's pre-1920s name was also "Swang" [Hathras/Braj, UP], a completely different tradition from Malwa's own "Swang" in point 26 despite the identical name**; added on 2nd pass: instruments [nakkara/shehnai/harmonium/dholak] + poetic forms [doha/chaubola/sher/qawwali/ghazal/dadra/thumri/lavani]; **Gulab Bai [1926-96] — Nautanki's first female performer, Padma Shri 1990, own troupe "Great Gulab Theatre Company"**; traditional repertoire Raja Harishchandra/Laila-Majnu/Heer-Ranjha)
- [x] 28 नया थिएटर — हबीब तनवीर → `28-naya-theatre-habib-tanvir.md` (b. 1923 Raipur [now Chhattisgarh, not current MP] — d. 2009 Singrauli MP; **Naya Theatre founded 1959 in Bhopal with wife Moneeka Mishra**, blending trained direction with Chhattisgarhi folk actors trained in the "Nacha" tradition; Charandas Chor [1975] gained international recognition at Edinburgh Festival 1982; Padma Shri 1983, Padma Bhushan 2002)

**नदी-संस्कृति एवं तीर्थ-नगर (29-34) — COMPLETE:**
- [x] 29 चंबल — मुरैना → `29-nadi-sanskriti-chambal-morena.md` (प्राचीन नाम "चर्मण्वती"/राजा रंतिदेव यज्ञ-कथा; डकैत-इतिहास मान सिंह/मलखान सिंह/फूलन देवी; राष्ट्रीय चंबल अभयारण्य 5400 वर्ग किमी घड़ियाल/कछुआ/डॉल्फिन; बटेश्वर मंदिर परिसर 400 मंदिर, चौंसठ योगिनी मितावली, ककनमठ)
- [x] 30 ताप्ती — बुरहानपुर → `30-nadi-sanskriti-tapti-burhanpur.md` (सूर्य-छाया पुत्री/पति संवरण/पुत्र कुरु; उद्गम मुलताई-बैतूल "मूलतापी"; बुरहानपुर राजघाट/बालाजी शोभायात्रा-सतियारा घाट मेला/गुरु नानक गुरुद्वारा; गंगा-समकक्ष धार्मिक महत्व + पृथक "तापी पुराण")
- [x] 31 नर्मदा — होशंगाबाद/जबलपुर घाट → `31-nadi-sanskriti-narmada-hoshangabad-jabalpur-ghat.md` (शिव-स्वेद उत्पत्ति अमरकंटक, नाम शांकरी/रेवा/पूर्वगंगा; सेठानी घाट 19वीं शती जानकीबाई सेठानी; ग्वारीघाट; तिलवारा घाट — गांधीजी अस्थि-विसर्जन 12 फरवरी 1948 + 1100+ वर्ष पुराना मकर संक्रांति मेला)
- [x] 32 बेतवा — ओरछा → `32-nadi-sanskriti-betwa-orchha.md` (प्राचीन नाम वेत्रवती/शुक्तिमती-चेदि राजधानी; उद्गम झिरी गाँव रायसेन; कांचन घाट — ~14 बुंदेला छत्रियाँ, सर्वोत्कृष्ट राजा वीरसिंह देव की छत्री)
- [x] 33 शिप्रा — उज्जैन → `33-nadi-sanskriti-shipra-ujjain.md` (नाम "क्षिप्रा"/वराह-हृदय उत्पत्ति/समुद्र-मंथन अमृत-बूँद कथा; उद्गम काकरी बरड़ी-इंदौर; राम घाट/सांदीपनि आश्रम; नर्मदा-शिप्रा-सिंहस्थ लिंक परियोजना 2012-15 — नर्मदा-मालवा लिंक ₹8000cr का प्रथम चरण)
- [x] 34 नर्मदा घाटी — मानव/जीवाश्म परिदृश्य → `34-narmada-ghati-manav-jivashm-paridrishya.md` (नर्मदा मानव — हथनोरा 5 दिसंबर 1982, डॉ. अरुण सोनकिया, "होमो इरेक्टस नर्मदेंसिस," वर्गीकरण-विवाद इरेक्टस/हाइडलबर्गेंसिस/सेपियंस; डायनासोर-जीवाश्म — बाघ/कुक्षी-धार 92 नेस्टिंग-स्थल/265 अंडे टाइटेनोसॉर, राष्ट्रीय उद्यान स्थापना 2011)

**लोक हस्तकला/वस्त्र-GI (35-39) — COMPLETE:**
- [x] 35 चंदेरी बुनाई → `35-chanderi-bunai-vastra-gi.md` (उद्गम चंदेरी नगर-अशोकनगर ज़िला; GI टैग 2005, भारत का चौथा GI-उत्पाद; 3 प्रकार शुद्ध रेशम/रेशम-सूती/शुद्ध सूती; ज़री-आकृतियाँ अशरफ़ी बूटी/दंडीदार/बूटीदार)
- [x] 36 महेश्वरी साड़ी → `36-maheshwari-saree-vastra-gi.md` (रानी अहिल्याबाई होल्कर 1760 सूरत-मांडू बुनकर आमंत्रण; रीहवा सोसाइटी 1978 रिचर्ड+सैली होल्कर; GI टैग 8 फरवरी 2010; प्रतिवर्ती किनारी + पाँच-धारीदार पल्लू)
- [x] 37 बाघ प्रिंट (धार) → `37-bagh-print-dhar-vastra-gi.md` (बाघ गाँव-धार ज़िला; सिंधु-घाटी/खत्री समुदाय मूल ~500 वर्ष, 1962 मनावर से प्रवास; बाघिनी नदी ताँबा-युक्त जल; GI टैग 2008; संरक्षक मोहम्मद यूसुफ़ खत्री)
- [x] 38 बांस/टेराकोटा शिल्प → `38-bans-terracotta-shilp.md` (बांस — शहडोल/बालाघाट/मंडला/सिवनी, बसोर/बसोड़ जाति+बैगा/गोंड/टुरी/कोरकू; टेराकोटा — मंडला "प्रजापति" कुम्हार, झाबुआ भील/भिलाला मन्नती घोड़ा-आकृतियाँ+"ढाबा", मंडला गोंड/बैगा विशिष्ट मानव-आकृतियाँ)
- [x] 39 घंटनाद धातु शिल्प (ढोकरा से संबद्ध) → `39-ghantanad-dhatu-shilp-dhokra.md` (दतिया+टीकमगढ़ बेल-मेटल, ताँबा-टिन मिश्रातु, ढोकरा लॉस्ट-वैक्स तकनीक, दतिया जाली-कार्य बनाम टीकमगढ़ ठोस-डिज़ाइन, GI टैग 2007/2008)

**खान-पान (40-42) — COMPLETE:**
- [x] 40 इंदौर — दाल-बाफला → `40-indore-dal-baffla.md` (उद्गम मालवा, राजस्थानी दाल-बाटी-चूरमा से प्रेरित; बाफला = हल्दी-पानी में उबालकर सेंकी बाटी; राजस्थान के "कट-बाफला" कोटा-बूँदी से भेद स्पष्ट किया)
- [x] 41 इंदौर — भुट्टे का कीस → `41-indore-bhutte-ka-kees.md` (नाम हिंदी+मराठी संमिश्रण; महाराष्ट्रीयन-गुजराती-राजस्थानी मालवा-पाककला प्रभाव; मानसून स्ट्रीट-फ़ूड; सराफा बाज़ार+छप्पन दुकान सांदर्भिक)
- [x] 42 मालवा — पोहा-जलेबी → `42-malwa-poha-jalebi.md` (18वीं शती होल्कर वंश से महाराष्ट्र-आगमन; जीरावन मसाला विस्तृत संघटन; इंदौर की "प्रातःकालीन अनुष्ठान" पहचान)

- [x] 43 (अंतिम बिंदु) मल्लखंब — MP का पारंपरिक खेल, राज्य खेल पुरस्कार संबंध → `43-mallakhamb-mp-parivardhit-khel-rajya-khel-puraskar.md` ("मानसोल्लास" 1135 ई. चालुक्य सोमेश्वर तृतीय, बालम्भट्ट दादा देवधर पुनरुद्धार; मल्लखंब फेडरेशन ऑफ़ इंडिया स्थापना 29 नवंबर 1980 उज्जैन-MP; **9 अप्रैल 2013 — मल्लखंब को राज्य-खेल घोषित करने वाला भारत का प्रथम राज्य**; राज्य खेल पुरस्कार विक्रम/एकलव्य/विश्वामित्र + मल्लखंब-विशेष "स्व. प्रभाष जोशी पुरस्कार" 2013 से ₹2 लाख)

**🎉 checklist-फ़ाइल 05 (`05-parv-lok-sangeet-lok-kala-lok-sahitya.md`, 43 बिंदु) पूर्ण रूप से समाप्त।** सभी 8 उप-खंड (प्रमुख पर्व/उत्सव, शास्त्रीय संगीत घराने, लोक नृत्य, लोक नाट्य, नदी-संस्कृति/तीर्थ-नगर, लोक हस्तकला/वस्त्र-GI, खान-पान, खेल-संस्कृति) पूर्ण।

### Checklist file 06 — `06-sahityakar-krityan.md` (20 points) — user confirmed start (IN PROGRESS)

मध्यप्रदेश के महत्वपूर्ण साहित्यकार एवं उनकी साहित्यिक कृतियाँ — 20 points (9 already-noted-in-other-files figures whose *literary/creative-work* angle is new here, + 11 additional figures for 100% coverage). Notes go in `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/06-sahityakar-krityan/`. Where a person already has a note in an earlier checklist file (e.g. freedom-struggle angle in file 02), this file's note cross-references it and covers only the literary-works/style angle to avoid duplication. User pushed mid-file for "must cover all facts... go deeper" — applying richer research depth (2-3+ targeted searches per point) from here on, and retroactively enriched point 2's Chhayavad-era characterization for precision.

- [x] 1 भवानी प्रसाद मिश्र — नर्मदा क्षेत्र से संबद्ध कवि → `01-bhavani-prasad-mishra-narmada-kshetra-kavi.md` (cross-ref checklist-02 point 18; works — गीत फ़रोश/बुनी हुई रस्सी/खुशबू के शिलालेख; बोलचाल-भाषा शैली; साहित्य अकादमी 1972 + पद्म भूषण 1973; मृत्यु नरसिंहपुर MP)
- [x] 2 माखनलाल चतुर्वेदी — राष्ट्रीयत्व/भाषा-शिल्प → `02-makhanlal-chaturvedi-rashtriyatva-bhasha-shilp.md` (cross-ref checklist-02 point 19; उपनाम "एक भारतीय आत्मा"; हिम तरंगिणी — हिंदी का प्रथम साहित्य अकादमी पुरस्कार 1955; छायावाद-युग में रचना किंतु "राष्ट्रीय भावना/ओज के कवि" पृथक पहचान; पद्म भूषण 1963)
- [x] 3 गजानन माधव मुक्तिबोध — आधुनिक कविता/विचार → `03-gajanan-madhav-muktibodh-aadhunik-kavita-vichar.md` (जन्म श्योपुर MP 1917, राजनांदगाँव में अध्यापन; प्रयोगवाद+नई कविता, 1943 "तार सप्तक"; मार्क्सवादी/अस्तित्ववादी प्रभाव; चाँद का मुँह टेढ़ा है, अंधेरे में; साहित्य अकादमी 1964 मरणोपरांत "चिदंबरा")
- [x] 4 राहत इंदौरी — उर्दू मंच/कविता → `04-rahat-indori-urdu-manch-kavita.md` (मूल नाम राहत क़ुरैशी, जन्म-मृत्यु इंदौर 1950-2020; DAVV प्राध्यापक; प्रसिद्ध शे'र "सभी का ख़ून है शामिल यहाँ की मिट्टी में"; ग़ज़ल-संग्रह नाराज़/दो क़दम और सही/चाँद पागल है; बॉलीवुड गीत — मुन्नाभाई MBBS/मिशन कश्मीर/ख़ुद्दार)
- [x] 5 शरद जोशी — समसामयिक व्यंग्य → `05-sharad-joshi-samsamayik-vyangya.md` (जन्म उज्जैन 1931/होल्कर कॉलेज इंदौर, मृत्यु मुंबई 1991; परिक्रमा/यथासंभव; शैली परसाई से तुलना — सहानुभूतिपूर्ण बनाम तीखी; "ये जो है ज़िंदगी" 1984 दूरदर्शन धारावाहिक; पद्मश्री 1990)
- [x] 6 सुभद्रा कुमारी चौहान — नारी स्वर/देशभक्ति काव्य → `06-subhadra-kumari-chauhan-nari-swar-deshbhakti-kavya.md` (विवाह 1919 खंडवा-निवास जबलपुर; 1921 नागपुर गिरफ़्तारी वरण करने वाली प्रथम महिला सत्याग्रही; "झाँसी की रानी"; मृत्यु 1948 सिवनी सड़क-दुर्घटना; सेकसरिया पुरस्कार दो बार — मुकुल 1931+बिखरे मोती 1933)

- [x] 7 हरिशंकर परसाई — व्यंग्य/प्रमुख निबंध → `07-harishankar-parsai-vyangya-nibandh.md` (जन्म जमानी-होशंगाबाद 1924, निवास जबलपुर, पत्रिका "वसुधा"; इंस्पेक्टर मातादीन चाँद पर/सदाचार का तावीज़ (भोलाराम का जीव)/विकलांग श्रद्धा का दौर; साहित्य अकादमी 1982)
- [x] 8 बशीर बद्र — भोपाल-संबद्ध ग़ज़लकार → `08-bashir-badr-bhopal-sambadh-ghazalkar.md` (मूल नाम सैयद मुहम्मद बशीर; 1987 मेरठ दंगों में घर-पांडुलिपि नष्ट → भोपाल स्थानांतरण; देवनागरी संग्रह "उजाले अपनी यादों के"; पद्मश्री+साहित्य अकादमी 1999 "आस"; मृत्यु 28 मई 2026 भोपाल, डिमेंशिया)
- [x] 9 हबीब तनवीर — नया थिएटर, लोक-आधुनिक नाट्य लेखन → `09-habib-tanvir-naya-theatre-lok-aadhunik-natya-lekhan.md` (cross-ref checklist-05 point 28; AIR बंबई गीतकार-प्रारंभ; "आगरा बाज़ार" 1954 — कवि नज़ीर अकबराबादी पर आधारित; नाट्य-शैली ब्रेख्त+लोक-मुहावरे संगम)

**"मौजूदा कवरेज" (बिंदु 1-9) पूर्ण।**

**"अतिरिक्त आवश्यक साहित्यकार" (10-20) — IN PROGRESS:**
- [x] 10 शिवमंगल सिंह सुमन — प्रगतिशील कवि → `10-shivmangal-singh-suman-pragatishil-kavi.md` (विक्रम विश्वविद्यालय उज्जैन कुलपति 1968-78; मिट्टी की बारात; साहित्य अकादमी 1974+पद्मश्री 1974+पद्म भूषण 1999; मृत्यु उज्जैन 2002)
- [x] 11 बालकवि बैरागी — कवि, राजनेता → `11-balkavi-bairagi-kavi-rajneta.md` (मूल नाम नंदराम दास, जन्म-मृत्यु मनासा-मंदसौर; मालवी गीत "पणिहारी"; फ़िल्म-गीत "तू चंदा मैं चांदनी"; विधायक/MP मंत्री/लोकसभा-राज्यसभा सांसद)
- [x] 12 विनोद कुमार शुक्ल — उपन्यासकार/कवि → `12-vinod-kumar-shukla-upanyaskar-kavi.md` (जन्म राजनांदगाँव, शिक्षा JNKVV जबलपुर, मुक्तिबोध से प्रेरित; जादुई यथार्थवाद शैली; नौकर की कमीज़; साहित्य अकादमी 1999+ज्ञानपीठ 2024+PEN/नाबोकोव 2023; मृत्यु दिसंबर 2025)
- [x] 13 नर्मदा प्रसाद उपाध्याय — लोक-संस्कृति एवं साहित्य के विद्वान → `13-narmada-prasad-upadhyay-lok-sanskriti-vidwan.md` (जन्म हरदा 1952; ललित निबंधकार/समीक्षक/संस्कृतिविद्/कला-इतिहासकार; कृतियाँ लोक और शास्त्र, जैन चित्रांकन परंपरा)
- [x] 14 केदारनाथ अग्रवाल — प्रगतिशील कवि → `14-kedarnath-agrawal-pragatishil-kavi.md` (**तथ्यात्मक-स्पष्टीकरण: मूलतः बांदा उ.प्र.-बुंदेलखंड से संबद्ध, MP से नहीं** — साझा बुंदेलखंडी क्षेत्र के आधार पर उल्लेख; प्रगतिशील लेखक संघ; साहित्य अकादमी 1986)

- [x] 15 रामेश्वर शुक्ल "अंचल" — कवि → `15-rameshwar-shukla-anchal-kavi.md` (जन्म फ़तेहपुर उ.प्र., **जबलपुर के महाविद्यालय में हिंदी-प्राध्यापक** — यही MP-सम्बन्ध; छायावाद→प्रगतिवाद यात्रा; मध्यप्रदेश का "चक्रधर पुरस्कार" — "मधुलिका" हेतु)
- [x] 16 भवभूति — शास्त्रीय संस्कृत नाटककार → `16-bhavabhuti-shastriya-sanskrit-natakkar.md` (जन्म पद्मपुर-विदर्भ, उच्च-शिक्षा हेतु उज्जयिनी प्रस्थान+"कालप्रियनाथ" उत्सव में नाट्य-मंचन — यही उज्जैन/MP-सम्बन्ध; मालतीमाधव की "पद्मावती" = पावाया-ग्वालियर cross-ref checklist-01 point 10; कालिदास-समकक्ष माने जाते हैं)
- [x] 17 केशवदास — रीतिकालीन कवि (ओरछा दरबार) → `17-keshavdas-ritikalin-kavi-orchha-darbar.md` (जन्म-मृत्यु ओरछा ~1555-1617; 3 ओरछा-नरेशों की दरबारी-सेवा — मधुकर शाह→इंद्रजीत सिंह→वीर सिंह देव; "रीतिकाल का जनक"; रसिकप्रिया=रीतिकाव्य मूल-ग्रंथ; रामचंद्रिका)
- [x] 18 पद्माकर — रीतिकालीन कवि → `18-padmakar-ritikalin-kavi.md` (जन्म 1753 **सागर (MP)**, मृत्यु 1833 कानपुर; दरबार — पन्ना/**ग्वालियर (दौलतराव सिंधिया, भाषा-हितोपदेश रचना)**/नागपुर/जयपुर/बूंदी; रीतिकाल में बिहारी के बाद सर्वप्रिय कवि माने जाते हैं)
- [x] 19 मुल्ला रमूज़ी — शैली/कृति → `19-mulla-ramuzi-shaili-kriti.md` (मूल नाम सिद्दीक़ इरशाद, जन्म-मृत्यु भोपाल 1896-1952; **"गुलाबी उर्दू" शैली के आविष्कारक** — क्रिया को कर्ता/कर्म से पहले रखने वाली उलटी वाक्य-रचना, 1921 कृति)
- [x] 20 अमृतलाल वेगड़ — नर्मदा परिक्रमा यात्रा-साहित्य, पद्मश्री सम्मानित → `20-amritlal-vegad-narmada-parikrama-yatra-sahitya.md` (**तथ्यात्मक-स्पष्टीकरण: पद्मश्री का दावा 3 स्वतंत्र खोजों में असत्यापित/अपुष्ट पाया गया** — वास्तविक सम्मान साहित्य अकादमी 2004+MP राज्य साहित्य पुरस्कार+राष्ट्रपति पुरस्कार+महापंडित राहुल सांकृत्यायन पुरस्कार+शिखर सम्मान; जन्म गुजरात, मृत्यु जबलपुर; 25+ वर्ष नर्मदा-परिक्रमा; शांतिनिकेतन नंदलाल बोस के शिष्य)

**🎉 checklist-फ़ाइल 06 (`06-sahityakar-krityan.md`, 20 बिंदु) पूर्ण रूप से समाप्त।** दोनों खंड ("मौजूदा कवरेज" बिंदु 1-9 + "अतिरिक्त आवश्यक साहित्यकार" बिंदु 10-20) पूर्ण। इस फ़ाइल में तीन checklist-वर्तनी/तथ्य-सुधार दर्ज हुए: केदारनाथ अग्रवाल (मूलतः UP-बुंदेलखंड, MP से नहीं), बशीर बद्र की मृत्यु-तिथि अद्यतन (28 मई 2026), एवं अमृतलाल वेगड़ का पद्मश्री-दावा अपुष्ट।

### Checklist file 07 — `07-paryatan-sthal-dharmik-sanskritik-puratatvik.md` (61 points, largest file after 03) — user confirmed start, explicit "very strict on facts verification, cover all facts" instruction

61 points across 5 sub-sections: धार्मिक तीर्थ स्थल (1-15, mostly Ujjain 1-9), नगर-केंद्रित सांस्कृतिक/पुरातात्विक पर्यटन — museums (16-27), प्राकृतिक/भूगर्भीय पर्यटन (28-31), वन्यजीव/राष्ट्रीय उद्यान (32-35, explicitly cross-linked to Unit 3/7 for depth — lighter here), हेरिटेज-पर्यटन रुझान — contemporary management trends (36-61, 26 points, inherently thin/concept-level, no artificial padding per standing fact-density rule). Notes go in `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/07-paryatan-sthal-dharmik-sanskritik-puratatvik/`. Cross-referencing existing notes where sites already covered elsewhere (e.g. Omkareshwar temple itself already in checklist-03 point 101; Sandipani Ashram/Shipra already in checklist-05 point 33) rather than duplicating.

**धार्मिक तीर्थ स्थल — उज्जैन (1-9), IN PROGRESS:**
- [x] 1 उज्जैन — महाकालेश्वर मंदिर (ज्योतिर्लिंग) → `01-ujjain-mahakaleshwar-mandir-jyotirlinga.md` (12 ज्योतिर्लिंगों में एकमात्र "काल का स्वामी" रूप; स्वयंभू+दक्षिणमुखी; भस्म-आरती; त्रि-स्तरीय गर्भगृह — महाकाल/ओंकारेश्वर/नागचंद्रेश्वर [केवल नाग पंचमी को दर्शन]; कालिदास मेघदूत-वर्णन; 1235 इल्तुतमिश विध्वंस→रुद्रसागर विसर्जन→18वीं शती सिंधिया-सेनापति रामचंद्र बाबा शेणवी पुनर्निर्माण) — user ने "add more facts" कहा, त्रि-स्तरीय गर्भगृह+मेघदूत जोड़कर enrich किया गया
- [x] 2 उज्जैन — काल भैरव मंदिर → `02-ujjain-kal-bhairav-mandir.md` (राजा भद्रसेन मूल-निर्माण; परमार-कालीन प्रतिमाएँ+भक्त; उज्जैन के "कोतवाल"; मदिरा-प्रसाद तांत्रिक पंचमकार परंपरा; 1761 पानीपत-पराजय पश्चात महादजी सिंधिया पुनरुद्धार)
- [x] 3 उज्जैन — काल भैरव/महाकाल — रीति/प्रतीक → `03-ujjain-kal-bhairav-mahakal-riti-pratik.md` (ब्रह्मा-अहंकार-नाश कथा; उज्जैन="भारत का ग्रीनविच"/प्राचीन प्राइम-मेरिडियन, हिंदू पंचांग आज भी उज्जैन-समय पर आधारित; पंचक्रोशी यात्रा — 4 द्वारपाल पिंगलेश्वर/कायावरुणेश्वर/बिल्केश्वर/दुर्दुरेश्वर)
- [x] 4 उज्जैन — महाकाल कॉरिडोर — कला-व्याख्या → `04-ujjain-mahakal-corridor-kala-vyakhya.md` (उद्घाटन 11 अक्टूबर 2022 मोदी, 900m, रुद्रसागर, ₹351cr/कुल ₹856cr; 108 स्तंभ आनंद-तांडव-स्वरूप+200 प्रतिमाएँ+53 भित्ति-चित्र शिव पुराण; मई 2023 आँधी से 6/7 सप्तर्षि-प्रतिमाएँ क्षतिग्रस्त — राजनैतिक-विवाद)
- [x] 5 उज्जैन — गोपाल मंदिर → `05-ujjain-gopal-mandir.md` (द्वारकाधीश, उज्जैन का दूसरा सबसे बड़ा मंदिर, निर्माण 1848-56 बायज़ाबाई; **चाँदी के द्वार मूलतः सोमनाथ के — महमूद ग़ज़नवी→लाहौर (अब्दाली)→महादजी सिंधिया द्वारा वापसी**; हरिहर पर्व)

- [x] 6 उज्जैन — सांदीपनि आश्रम → `06-ujjain-sandipani-ashram.md` (कृष्ण-बलराम-सुदामा — 64 दिन में 64 कला+14 विद्या; गोमती कुंड कथा; शुंग-कालीन नंदी-प्रतिमा पुरातात्विक-प्रमाण)
- [x] 7 उज्जैन — सिद्धवट → `07-ujjain-siddhavat.md` (शिप्रा-तट प्राचीन वट, पार्वती-रोपित; **भारत के 4 पवित्र वट-वृक्षों में से एक — अक्षयवट-प्रयाग/बौद्धवट-गया/वंशीवट-मथुरा/सिद्धवट-उज्जैन**; पितृ-तर्पण केंद्र, राम-दशरथ तर्पण कथा; मुग़ल-कालीन काटे जाने पर पुनः-अंकुरण किंवदंती)
- [x] 8 उज्जैन — हरसिद्धि मंदिर → `08-ujjain-harsiddhi-mandir.md` (51 शक्तिपीठों में एक — सती की बाईं कोहनी; निर्माण राजा विक्रमादित्य, जीर्णोद्धार अहिल्याबाई होल्कर; **दो दीप-स्तंभ, 726 दीपक-छिद्र**, नवरात्रि प्रज्ज्वलन)
- [x] 9 उज्जैन — अखाड़ा प्रणाली — इतिहास → `09-ujjain-akhara-pranali-itihas.md` (cross-ref checklist-05 point 1 के 13-अखाड़ा सूची से; **उद्भव आदि शंकराचार्य 8वीं शती**, जैन-बौद्ध प्रतिकार हेतु; महानिर्वाणी अखाड़ा 748 ई./जूना अखाड़ा 1145 ई. कर्णप्रयाग; 16वीं शती मधुसूदन सरस्वती पुनः-सैन्यीकरण मुग़ल-काल)

**"उज्जैन" उप-समूह (बिंदु 1-9) पूर्ण।** मध्य-टर्न user-फ़ीडबैक: "facts missing, cost my top one rank" (बिंदु 3 खुला था) → बिंदु 3 में सप्तपुरी (7 मोक्षदायिनी नगरी) + विक्रम संवत् (57 BCE, नवरत्न, कालिदास) + कर्क-रेखा-प्रतिच्छेदन जोड़कर enrich किया; बिंदु 1 में भी पूर्व में त्रि-स्तरीय गर्भगृह (ओंकारेश्वर/नागचंद्रेश्वर)+मेघदूत जोड़ा गया था — आगे के सभी बिंदुओं में शुरू से ही यह गहराई बनाए रखी जा रही है (2-3+ सत्यापित खोज प्रति-बिंदु)।

- [x] 10 ओंकारेश्वर — ज्योतिर्लिंग एवं परिक्रमा पथ/घाट → `10-omkareshwar-jyotirlinga-parikrama-path-ghat.md` (खंडवा ज़िला; मांधाता द्वीप "ॐ"-आकार 2×1km; राजा मांधाता-इक्ष्वाकु कथा; श्रावण-यात्रा — केवरी संगम घाट→झूला पुल→~7km मांधाता परिक्रमा; अहिल्याबाई संरक्षण)
- [x] 11 ओंकारेश्वर — ममलेश्वर मंदिर → `11-omkareshwar-mamleshwar-mandir.md` (cross-ref checklist-03 point 101 का संक्षिप्त परिचय; यहाँ गहन — **10वीं-11वीं शती परमार वंश, नागर शैली, लाल बलुआ-पत्थर बिना-गारे "इंटरलॉकिंग" तकनीक**; महिम्न स्तोत्र शिलालेख; ~1000 शिवलिंग काष्ठ-फलक; ASI राष्ट्रीय-महत्व संरक्षित स्मारक)
- [x] 12 अमरकंटक — नर्मदा एवं सोन नदी का उद्गम, धार्मिक महत्व → `12-amarkantak-narmada-son-udgam-dharmik-mahatva.md` (अनूपपुर ज़िला; सतपुड़ा+विंध्य+मैकाल संगम; **3 नदियाँ उद्गमित — नर्मदा/सोन/जोहिला**; नर्मदा कुंड बनाम चरणोदक कुंड विवाद; सोनमुड़ा 100ft जलप्रपात; **कलचुरी राजा कर्णदेव 1042-1072 ई. मंदिर-समूह**)

- [x] 13 चित्रकूट — मध्यप्रदेश-भाग का धार्मिक/पौराणिक महत्व → `13-chitrakoot-mp-bhag-dharmik-pauranik-mahatva.md` (सतना ज़िला+UP सीमा; **11.5/14 वर्ष वनवास यहीं**, भरत-मिलाप; MP-पक्ष — सीता रसोई/अत्रि-अनुसूया आश्रम/गुप्त गोदावरी/हनुमान धारा/स्फटिक शिला)
- [x] 14 पीताम्बरा पीठ — दतिया → `14-pitambara-peeth-datia.md` (स्थापना 1929 स्वामी जी महाराज; बगलामुखी-स्थापना 1935+धूमावती पृथक मंदिर; समाधि 2 जून 1979; **1962 भारत-चीन युद्ध बगलामुखी यज्ञ** — युद्ध-विराम लोक-मान्यता)
- [x] 15 सलकनपुर — देवी मंदिर → `15-salkanpur-devi-mandir.md` (सीहोर ज़िला, ~800ft पहाड़ी; विंध्यवासिनी बीजासन देवी — **रक्तबीज-वध कथा से नामकरण**; संरचना ~1100 ई. गोंड-निर्मित; ~1000-1400 सीढ़ियाँ/रोपवे 2001)

**🎉 "धार्मिक तीर्थ स्थल" उप-खंड (बिंदु 1-15) पूर्ण।**

**"नगर-केंद्रित सांस्कृतिक/पुरातात्विक पर्यटन" (16-27) — IN PROGRESS:**
- [x] 16 इंदौर — राजवाड़ा → `16-indore-rajwada.md` (निर्माण 1747 मल्हारराव होल्कर; 7-मंज़िला मराठा+मुग़ल+फ़्रेंच शैली; **3 आग — 1801/1834/1984**; जीर्णोद्धार उषा राजे होल्कर)
- [x] 17 इंदौर — लाल बाग पैलेस → `17-indore-lal-bagh-palace.md` (निर्माण 1886-1926, 3 पीढ़ियाँ तुकोजीराव II→शिवाजीराव→तुकोजीराव III; इतालवी पुनर्जागरण शैली, वास्तुकार बर्नार्ड ट्रिग्स; **बकिंघम पैलेस-द्वार प्रतिकृति, दोगुना आकार**)
- [x] 18 इंदौर — सेंट्रल म्यूज़ियम → `18-indore-central-museum.md` (उत्पत्ति 1923 "नवरत्न मंदिर", 1929 औपचारिक घोषणा, 1965 नवलखा चौराहा स्थानांतरण; गुप्त+परमार-कालीन प्रतिमाएँ 11वीं-12वीं शती)
- [x] 19 इंदौर — कांच मंदिर (जैन) → `19-indore-kanch-mandir-jain.md` (निर्माण ~1903 सेठ हुकुमचंद जैन "कपास-सम्राट"; संपूर्ण आंतरिक कांच-मोज़ेक; जयपुर+ईरान कारीगर; 50+ भित्ति-चित्र, विशिष्ट स्वर्ग-नरक 7-7 स्तर; देवता शांतिनाथ)

- [x] 20 इंदौर — गांधी हॉल → `20-indore-gandhi-hall.md` (मूल नाम "किंग एडवर्ड हॉल" 1904→"यशवंतराव होल्कर हॉल" 1926-48→"गांधी हॉल"; इंडो-गॉथिक, वास्तुकार चार्ल्स फ़्रेडरिक स्टीवंस; ~90ft घड़ी-मीनार 100+ वर्ष पुरानी)
- [x] 21 इंदौर — छत्री बाग छतरियाँ → `21-indore-chhatri-bagh-chhatriyan.md` (खान नदी-तट, होल्कर राजसी दाह-संस्कार-स्थल; मल्हारराव होल्कर प्रथम की सबसे बड़ी छतरी+भित्ति-चित्र, अहिल्याबाई होल्कर, कृष्णापुरा छतरी)
- [x] 22 IGRMS — इंदिरा गांधी राष्ट्रीय मानव संग्रहालय, भोपाल → `22-igrms-bhopal-open-air-sangrahalaya.md` (स्थापना 21 मार्च 1977 दिल्ली→1979 भोपाल स्थानांतरण 200 एकड़ श्यामला हिल्स; भारत का सबसे बड़ा एथ्नोग्राफ़िक संग्रहालय; 9 ओपन-एयर खंड)
- [x] 23 Tribal Museum, भोपाल — थीमैटिक गैलरी → `23-tribal-museum-bhopal-thematic-gallery.md` (स्थापना 6 जून 2013 राष्ट्रपति प्रणब मुखर्जी; वास्तुकार रेवती कामथ — मिट्टी-स्थापत्य अग्रणी; 6 थीमैटिक गैलरी)

**"इंदौर" उप-समूह (16-21) पूर्ण।**

- [x] 24 ग्वालियर/इंदौर — राज्य संग्रहालय → `24-gwalior-indore-rajya-sangrahalaya.md` (गुर्जरी महल संग्रहालय 1922 ब्रिटिश-स्थापित; **सालभंजिका प्रतिमा — "भारत की मोनालिसा" — ग्यारसपुर-विदिशा 10वीं शती**; गजासुरवध; 60+ अभिलेख; checklist-03 point 61 को भी cross-ref से enrich किया)
- [x] 25 दुबेला (बुन्देलखण्ड) संग्रहालय → `25-dubela-bundelkhand-sangrahalaya.md` (आधिकारिक नाम "महाराजा छत्रसाल संग्रहालय," स्थापना सितंबर 1955, दुबेला झील-तट; **मस्तानी महल 1696 छत्रसाल-निर्मित → मस्तानी-बाजीराव विवाह 1729 मराठा-सम्बन्ध**; 8 दीर्घाएँ)
- [x] 26 प्रदेश पुस्तकालय/अभिलेखागार — सांस्कृतिक स्मृति → `26-pradesh-pustakalaya-abhilekhagar-sanskritik-smriti.md` (निदेशालय स्थापना 1956/1974/विलय 1994, ग्वालियर-इंदौर-भोपाल-रीवा-मध्य भारत रियासतों का अभिरक्षक, ~6.88 करोड़ दस्तावेज़; **मौलाना आज़ाद केंद्रीय पुस्तकालय — मूल "एडवर्ड म्यूज़ियम" 1908 सुल्तान जहाँ बेगम** — cross-ref checklist-01 point 31)

- [x] 27 ग्वालियर — जय विलास पैलेस — प्रदर्शनी क्यूरेशन → `27-gwalior-jai-vilas-palace-pradarshani-curation.md` (cross-ref checklist-03 point 62; संग्रहालय नाम "जीवाजीराव सिंधिया संग्रहालय," उद्घाटन 12 दिसंबर 1964 राष्ट्रपति राधाकृष्णन; 35 कक्ष — दरबार हॉल परिसर+7 भूतल-दीर्घाएँ+प्रथम-तल पीरियड-रूम्स; शाहजहाँ/औरंगज़ेब तलवारें, रानी लक्ष्मीबाई की ढाल)

**🎉 "नगर-केंद्रित सांस्कृतिक/पुरातात्विक पर्यटन" उप-खंड (बिंदु 16-27) पूर्ण।** मध्य-टर्न user-फ़ीडबैक दो बार आया ("facts missing" — बिंदु 26 पर): माइक्रोफ़िल्म भंडार (1997, 13950 रील्स) + संरक्षण-प्रक्रिया जोड़कर enrich किया।

- [x] 28 जबलपुर — भेड़ाघाट/धुआँधार जलप्रपात → `28-jabalpur-bhedaghat-dhuandhar-jalprapat.md` (**विश्व के 3 शुद्ध-संगमरमर नदी-कण्ठों में एक** — ताइवान-तारोको/बुल्गारिया-त्रिग्राद सहित; ~30m जलप्रपात; **1828 विलियम स्लीमैन — भारत का प्रथम डायनासोर-जीवाश्म (लामेटा शैय्या)**; **2021 UNESCO तात्कालिक-सूची**)
- [x] 29 दिंडोरी — घुघवा राष्ट्रीय जीवाश्म उद्यान → `29-dindori-ghughua-rashtriya-jivashm-udyan.md` (1998 मंडला से पृथक इसी कारण "मंडला प्लांट फ़ॉसिल्स पार्क" वैकल्पिक नाम; एशिया के सबसे बड़े वनस्पति-जीवाश्म उद्यानों में एक; डॉ. धर्मेंद्र प्रसाद खोज→5 मई 1983 घोषणा; **यूकेलिप्टस-जीवाश्म गोंडवाना-प्रमाण**)
- [x] 30 पचमढ़ी — शैलचित्र/औपनिवेशिक हिल स्टेशन (MP की एकमात्र हिल स्टेशन) → `30-pachmarhi-shailchitra-aupniveshik-hill-station-paryatan.md` (cross-ref checklist-03 point 5; यहाँ पर्यटन-आकर्षण — बी फॉल्स ~35m, रजत प्रपात ~350ft, पांडव गुफाएँ 5-गुफा समूह, जटाशंकर, रीछगढ़)
- [x] 31 बुरहानपुर — कुंडी भंडारा जल-इंजीनियरिंग → `31-burhanpur-kundi-bhandara-jal-engineering.md` (cross-ref checklist-03 point 87; यहाँ फ़ारसी **"क़नात (Qanat)" मूल-तकनीक**; वर्तमान बुरहानपुर की ~15% जल-आपूर्ति आज भी इसी से; MANIT भोपाल संरक्षण-पहल)

**🎉 "प्राकृतिक/भूगर्भीय पर्यटन स्थल" उप-खंड (बिंदु 28-31) पूर्ण।**

- [x] 32 कान्हा राष्ट्रीय उद्यान → `32-kanha-rashtriya-udyan.md` (1933 बंजर वैली अभयारण्य→1955 राष्ट्रीय उद्यान→1973 प्रोजेक्ट टाइगर; मंडला+बालाघाट; **हार्ड-ग्राउंड बारहसिंगा** विलुप्ति-बचाव; रुडयार्ड किपलिंग "जंगल बुक" प्रेरणा)
- [x] 33 बांधवगढ़ राष्ट्रीय उद्यान → `33-bandhavgarh-rashtriya-udyan.md` (1968→1993 प्रोजेक्ट टाइगर; बांधवगढ़ क़िला 2000+ वर्ष, 1617 रीवा-स्थानांतरण, रीवा-शिकारगढ़; विश्व में सर्वाधिक बाघ-सघनता ~1/8 वर्ग किमी; **श्वेत बाघ "मोहन" 1951 महाराजा मार्तंड सिंह — विश्व के समस्त बंदी श्वेत-बाघों का पूर्वज**)
- [x] 34 पेंच राष्ट्रीय उद्यान → `34-pench-rashtriya-udyan.md` (1983→1993 प्रोजेक्ट टाइगर; सिवनी+छिंदवाड़ा; **"मोगली" प्रेरणा — 1831 सिवनी भेड़िया-बालक, विलियम स्लीमैन दस्तावेज़ीकरण** [वही स्लीमैन जिसने जबलपुर डायनासोर-जीवाश्म खोजा — बिंदु 28 cross-ref]; किपलिंग ने कभी पेंच नहीं देखा)
- [x] 35 पन्ना राष्ट्रीय उद्यान (हीरा खनन क्षेत्र से भी संबद्ध) → `35-panna-rashtriya-udyan.md` (1981→1994 भारत का 22वाँ बाघ-अभयारण्य; **2009 तक बाघों का पूर्ण स्थानीय-विलोपन — भारत में एकमात्र मामला**→NTCA+MP वन विभाग+WII पुनर्स्थापन 2009 [2 मादा बांधवगढ़-कान्हा+1 नर पेंच]; NMDC-संचालित भारत की एकमात्र हीरा-खान; UNESCO जैवमंडल रिज़र्व — MP का तीसरा)

**🎉 "वन्यजीव/राष्ट्रीय उद्यान पर्यटन" उप-खंड (बिंदु 32-35) पूर्ण।**

**IMPORTANT source-priority correction (user, mid-file-07):** "as source your first priority is NCERT books" — saved as a 6th correction to memory `mppsc-prelims-notes-fact-density.md`. Retroactively fixed 17 of the 35 already-written notes in this file to cite NCERT first wherever a genuine curricular hook exists (Jyotirlinga/temple-architecture/Bhakti-tradition → NCERT XI Indian Art; river-origins/geomorphology → NCERT IX/X Geography; Gondwana/continental-drift → NCERT XI Geography; Project Tiger/wildlife → NCERT X Geography; Mughal water-management → NCERT VII History; Ramayana/guru-shishya → NCERT VI; colonial architecture/tribal society → NCERT VIII) — left genuinely NCERT-absent hyper-regional notes (Pitambara Peeth, Salkanpur, Indore's Rajwada/Lal Bagh/Central Museum/Kanch Mandir/Chhatri Bagh, IGRMS, Mahakal Corridor [2022 news], Gwalior/Indore state museum, Dubela, Archives, Jai Vilas curation) honestly non-NCERT-sourced since forcing a false NCERT citation would misrepresent the source. Apply NCERT-first-check to every remaining point in this file and all future files.

- [x] 36 हेरिटेज टूरिज्म — लाइट एंड साउंड शो (खजुराहो/मांडव) → `36-heritage-tourism-light-sound-show-khajuraho-mandav.md` (खजुराहो — 50 मिनट, अमिताभ बच्चन-कथावाचन; मांडव — उद्घाटन 10 फरवरी 2019, जहाज़ महल/हिंडोला महल)

- [x] 37 हेरिटेज वॉक/सिटी टूर — नागरिक भागीदारी → `37-heritage-walk-city-tour-nagarik-bhagidari.md` (INTACH-मॉडल; भोपाल मार्ग — चौक→मोती मस्जिद→इक़बाल मैदान→गौहर महल→सदर मंज़िल→शौकत महल, cross-ref checklist-03 points 91-95)
- [x] 38 ओरछा — हेरिटेज वॉक — थीम मैपिंग → `38-orchha-heritage-walk-theme-mapping.md` (**समसामयिक: ओरछा UNESCO दस्तावेज़ विश्व धरोहर समिति को प्रस्तुत, संभावित घोषणा 2028**; **"श्री राम राजा लोक" परियोजना — महाकाल लोक मॉडल पर, अगस्त 2026 CM मोहन यादव निरीक्षण**)
- [x] 39 डिजिटल गाइड/QR-कोड व्याख्या — पर्यटन स्थलों पर → `39-digital-guide-qr-code-vyakhya-paryatan-sthal.md` (ASI "इंडियन हेरिटेज" ऐप — 4 सितंबर 2023, 143 स्मारक; खजुराहो 2024 रात्रि-भ्रमण+डिजिटल-गाइड)

- [x] 40 डिजिटल आर्काइव/वर्चुअल टूर — संग्रहालय → `40-digital-archive-virtual-tour-sangrahalaya.md` (संस्कृति मंत्रालय "वर्चुअल म्यूज़ियम्स" पोर्टल; खजुराहो पुरातत्व संग्रहालय — स्थापना 1910, 5 दीर्घाएँ, ~1500 प्रतिमाएँ)
- [x] 41 GI टैग उत्पाद — ई-कॉमर्स एवं पर्यटन कड़ी → `41-gi-tag-utpad-ecommerce-paryatan-kadi.md` (ONDC+इंडियाहैंडमेड प्लेटफ़ॉर्म; चंदेरी ~3600 हथकरघे/~11000 बुनकर)
- [x] 42 भक्ति पथ/कॉरिडोर विकास परियोजनाएँ (महाकाल कॉरिडोर मॉडल) → `42-bhakti-path-corridor-vikas-pariyojnayen-mahakal-model.md` (काशी विश्वनाथ मूल-मॉडल 2019-2021, ₹1.25 लाख करोड़ आर्थिक-लाभ; महाकाल-काशी से 4 गुना बड़ा, तीसरा ज्योतिर्लिंग-उन्नयन; विष्णुपद/महाबोधि/भोरमदेव/बांके बिहारी अन्य कॉरिडोर)

- [x] 43 GI क्लस्टर ब्रांडिंग — सहकारी मॉडल → `43-gi-cluster-branding-sahakari-model.md` ("चंदेरी-ग्वालियर क्लस्टर"; होलोग्राम+सिल्क-मार्क+बुनकर-सहकारी-टैग प्रामाणीकरण; रीहवा सोसाइटी cross-ref)
- [x] 44 PPP/CSR कंज़रवेशन परियोजनाएँ — धरोहर संरक्षण में निजी भागीदारी → `44-ppp-csr-conservation-pariyojnayen.md` ("अडॉप्ट अ हेरिटेज" 2017→2.0 2023; "मॉन्यूमेंट मित्र"+"विज़न बिडिंग"; MP participating states में सम्मिलित)

- [x] 45 ई-टिकटिंग/कैशलेस व्यवस्था — पर्यटन स्थल/उत्सव → `45-e-ticketing-cashless-vyavastha-paryatan-utsav.md` (ASI 170+ स्मारक ONDC पर; UPI 123PAY+हाइवे डिलाइट/पीलोकल WhatsApp-बुकिंग; छूट ₹5 भारतीय/₹50 विदेशी)
- [x] 46 ऑडियो-विजुअल डॉक्यूमेंट्री — लोक/धरोहर संरक्षण → `46-audio-visual-documentary-lok-dharohar-sanrakshan.md` (**समसामयिक — CORRECTED 2026-09-06: MP की वास्तविक-3 राष्ट्रीय ICH सूची धरोहरें [30 अप्रैल 2025, CM डॉ. मोहन यादव घोषणा] — भगोरिया जनजातीय नृत्य, गोंड जनजातीय चित्रकला, माँ नर्मदा परिक्रमा; मैहर बैंड पृथक/अतिरिक्त-सम्मिलन। पूर्व-दावा ["मैहर बैंड, अगरिया लौह-प्रगलन प्रथा, निमाड़ पाककला-धरोहर"] असत्यापित पाया गया एवं सुधारा गया — checklist-02(Unit 10) बिंदु 12 [अगरिया] लिखते समय पुनः-सत्यापन में यह त्रुटि पकड़ी गई**)

- [x] 47 कंटेंट लोकलाइज़ेशन — बहुभाषी पर्यटन-सूचना → `47-content-localization-bahubhashi-paryatan-suchna.md` (**"आदि वाणी" AI अनुवाद-ऐप — भीली/गोंडी/संताली/मुंडारी, IIT-दिल्ली नेतृत्व**)
- [x] 48 कैफ़े/क्रिएटिव क्वार्टर — धरोहर-शहरों में → `48-cafe-creative-quarter-dharohar-shahron-mein.md` (ओरछा शीश महल हेरिटेज होटल; महेश्वर अहिल्या फ़ोर्ट — रिचर्ड होल्कर, 6 भवन)

- [x] 49 क्राफ्ट फेयर से ऑनलाइन प्लेटफ़ॉर्म — बाघ/चंदेरी उत्पाद → `49-craft-fair-online-platform-bagh-chanderi.md` (सरस आजीविका मेला — ग्रामीण विकास मंत्रालय+NIRDPR; DAY-NRLM SHG नेटवर्क से ऑनलाइन-विस्तार)

**User re-flagged "missing facts" on point 47 (आदि वाणी) — substantially re-enriched with exact launch date (1 सितंबर 2025), lead ministry (जनजातीय कार्य मंत्रालय), full 4-institution consortium, and all 5 app features (real-time translation, TTS/STT, OCR, cultural-preservation module, NCERT/scheme-access). Lesson: even in the thin "trend" sub-section, do 2-3+ searches per point before finalizing, not just one.**

- [x] 50 क्रिएटिव रेजिडेंसी — कला-धरोहर कार्यक्रम → `50-creative-residency-kala-dharohar-karyakram.md` (भारत भवन आर्टिस्ट-रेजिडेंसी; **जनगढ़ सिंह श्याम फरवरी 1982 उद्घाटन-प्रदर्शनी में प्रथम-प्रदर्शन → ग्राफ़िक-विभाग नियुक्ति**; राष्ट्रपति भवन आर्टिस्ट्स-इन-रेजिडेंस राष्ट्रीय-सन्दर्भ)
- [x] 51 भाषा ऐप/डिजिटल शब्दकोश — स्थानीय बोलियाँ → `51-bhasha-app-digital-shabdkosh-sthaniya-boliyan.md` (भारतवाणी पोर्टल — शिक्षा मंत्रालय+CIIL मैसूर; 50 भाषा/262 शब्दकोश, 121 भाषा-सामग्री)

- [x] 52 म्यूज़ियम शॉप — क्राफ्ट क्यूरेशन → `52-museum-shop-craft-curation.md` (Tribal Museum भोपाल — **"चिन्हारी" रिटेल-आउटलेट**; बाह्य-भित्ति-कृति गोंड-कलाकार **दुर्गा बाई**; IGRMS केंद्रीय भारतीय जनजाति दीर्घा)
- [x] 53 युवा स्वयंसेवक — हेरिटेज वॉक कार्यक्रम → `53-yuva-swayamsevak-heritage-walk-karyakram.md` (INTACH "परंपरा" कार्यक्रम नवंबर 2012, 2017 तक 12 शहर/1400+ स्वयंसेवक; CBSE "अडॉप्ट अ हेरिटेज" कक्षा-X तक)

- [x] 54 संगीत फेस्टिवल/युवा बैंड — लोक-फ्यूजन → `54-sangeet-festival-yuva-band-lok-fusion.md` (लोकरंग महोत्सव का "लोकरंग" अनुभाग; उस्ताद अलाउद्दीन ख़ाँ समारोह मैहर — 2025 51वाँ संस्करण, लोक-शास्त्रीय फ्यूजन)

**User re-flagged points 50 and 53 for missing facts (twice each) — both substantially re-enriched: point 50 got J. Swaminathan's founder-director role + the real "discovered Jangarh painting on mud walls in 1981" origin story + Charles Correa architect cross-ref; point 53 got the "MY Bharat"/Swachhata Hi Seva youth-cleanliness-campaign (Sept-Oct 2024, 7000+ villages/2000+ community centres/450+ Amrit Sarovars) addition. Also retroactively enriched the existing checklist-05 point 11 (Lokrang Mahotsav) note with its 8 named thematic sections (Ramayni/Darohar/Lokrang/Deshantar/Aakar/Ullas/Swad/Lokwarta), which had been sitting thin since file 05. Reinforced lesson: do 2-3+ genuinely separate searches per point BEFORE finalizing, even in this "thin trend" sub-section — don't stop at one search result.**

- [x] 55 समकालीन रंगमंच — लोक-मोटिफ का रूपांतरण → `55-samkalin-rangmanch-lok-motif-rupantaran.md` (नया थिएटर — 1990 के दशक में दिल्ली→भोपाल पुनः-स्थानांतरण; "नाचा" तकनीकी-संरचना+आधुनिक-दृष्टिकोण संमिश्रण)
- [x] 56 स्थानीय इतिहास क्लब — स्कूल/विश्वविद्यालय स्तर → `56-sthaniya-itihas-club-school-university-star.md` (**IGNTU अमरकंटक — स्थापना 20 दिसंबर 2007**; "पलाश जनजातीय रंगमंच समूह"; इनोवेशन क्लब; परिसर का अपना जनजातीय संग्रहालय)

- [x] 57 स्मार्ट साइनेज/यूनिवर्सल एक्सेस — धरोहर स्थलों पर → `57-smart-signage-universal-access-dharohar-sthalon-par.md` (सुगम्य भारत अभियान 3 दिसंबर 2015; **सांची स्तूप — स्पर्शनीय-मार्ग+ब्रेल+व्हीलचेयर-पथ**; खजुराहो पुनर्कल्पना; MP पर्यटन बोर्ड परियोजना — महेश्वर/मांडू/धार/ओरछा; अमृत भारत स्टेशन योजना ग्वालियर)

- [x] 58 हेरिटेज फोटोग्राफी/ओपन आर्काइव पहल → `58-heritage-photography-open-archive-pahal.md` (**"इंडिया लॉस्ट एंड फ़ाउंड" — 2018, अमित पसरीचा**, क्राउडसोर्स्ड फ़ोटो-आर्काइव; "द हेरिटेज लैब" 1000+ खुले-लाइसेंस चित्र)
- [x] 59 हेरिटेज इवेंट कैलेंडर — एकीकृत → `59-heritage-event-calendar-ekikrit.md` (**"सिंगल विंडो" पोर्टल tourismevents.mponline.gov.in — ऑनलाइन "परफ़ॉर्मेंस लाइसेंस"**; एकीकृत-कैलेंडर — जल/मांडू/ओरछा महोत्सव, हेरिटेज रन, राष्ट्रीय श्री अन्न महोत्सव आदि)

- [x] 60 हेरिटेज एजुकेशन किट — स्कूलों हेतु → `60-heritage-education-kit-schools-hetu.md` (**NCERT "Knowledge Traditions and Practices of India" कक्षा-XI — 9 ज्ञान-परंपराएँ**; NEP 2020/NCF-SE 2023 कक्षा 1-8 धरोहर-एकीकरण; INTACH किट)
- [x] 61 हेरिटेज-क्राफ्ट-टूरिज्म कॉरिडोर विकास → `61-heritage-craft-tourism-corridor-vikas.md` (**स्वदेश दर्शन योजना — MP हेरिटेज सर्किट: ग्वालियर-ओरछा-खजुराहो-चंदेरी-भीमबेटका-मांडू, ~₹100cr**; "क्राफ्ट ट्रेल" इंदौर-केंद्रित)

**🎉 checklist-फ़ाइल 07 (`07-paryatan-sthal-dharmik-sanskritik-puratatvik.md`, 61 बिंदु) पूर्ण रूप से समाप्त।** सभी 5 उप-खंड (धार्मिक तीर्थ स्थल 1-15, नगर-केंद्रित सांस्कृतिक/पुरातात्विक पर्यटन 16-27, प्राकृतिक/भूगर्भीय पर्यटन स्थल 28-31, वन्यजीव/राष्ट्रीय उद्यान पर्यटन 32-35, हेरिटेज-पर्यटन रुझान 36-61) पूर्ण। महत्वपूर्ण कार्यप्रणाली-सुधार: (1) उपयोगकर्ता के "NCERT प्राथमिकता स्रोत" निर्देश पर 17 नोट्स में NCERT-सन्दर्भ पुनः-जोड़े गए (स्मृति-फ़ाइल में 6ठा-सुधार दर्ज); (2) उपयोगकर्ता की बार-बार "तथ्य छूट रहे हैं" प्रतिक्रिया पर बिंदु 3, 26, 47, 50, 53 अतिरिक्त-गहन शोध से समृद्ध किए गए, तथा retroactively checklist-05 बिंदु 11 (लोकरंग) भी। ### Checklist file 08 — `08-vishwa-dharohar-sthal.md` (5 points) — user confirmed start, COMPLETE

MP's UNESCO World Heritage angle specifically (inscription year/criteria/hectare-area for the 3 confirmed sites, tentative-list specifics for Orchha, and a synthesizing comparative overview) — distinct from the deep architectural coverage of these same monuments already done in checklist-03. Notes go in `mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/08-vishwa-dharohar-sthal/`.

- [x] 1 खजुराहो स्मारक समूह → `01-khajuraho-smarak-samuh-unesco.md` (पंजीकरण 1986, मानदंड (i)+(iii), ~6 वर्ग किमी, निषिद्ध-क्षेत्र 100m/विनियमित 200m)
- [x] 2 सांची के बौद्ध स्मारक → `02-sanchi-bauddh-smarak-unesco.md` (पंजीकरण 1989, **5 मानदंड (i,ii,iii,iv,vi) — MP में सर्वाधिक**, 132.15 हेक्टेयर)
- [x] 3 भीमबेटका के शैलाश्रय → `03-bhimbetka-shailashray-unesco.md` (पंजीकरण 2003 — MP का सबसे नवीनतम पुष्ट-स्थल, मानदंड (iii)+(v), संरक्षित-क्षेत्र 1893 हेक्टेयर+बफ़र 10280 हेक्टेयर)
- [x] 4 ओरछा — ऐतिहासिक नगर (अस्थायी-सूची) → `04-orchha-aitihasik-nagar-tentative-list.md` (**15 अप्रैल 2019 ASI-प्रस्ताव**; निवाड़ी ज़िला [2018 टीकमगढ़ से पृथक]; "सांस्कृतिक भू-दृश्य" औचित्य; cross-ref checklist-07 point 38 के 2028-प्रगति-अद्यतन से)
- [x] 5 UNESCO — MP साइट्स — ओवरव्यू/तुलनात्मक अध्ययन → `05-unesco-mp-sites-overview-tulnatmak-adhyayan.md` (भारत — 45 पुष्ट/69 अस्थायी, विश्व-रैंक 6; MP पुष्ट-स्थलों में द्वितीय-स्थान; **समसामयिक बड़ी खोज: 8 फरवरी 2024 को MP के 6 नए अस्थायी-सूची स्थल — ग्वालियर क़िला, धामनार, भोजेश्वर महादेव मंदिर [cross-ref checklist-01 point 15 भोजपुर], चंबल-घाटी शैलचित्र, कुंडी भंडारा बुरहानपुर, रामनगर-मंडला गोंड-स्मारक — MP कुल 3 पुष्ट+7 अस्थायी**)

**🎉 checklist-फ़ाइल 08 पूर्ण रूप से समाप्त — सभी 5 बिंदु।** User पुनः-निर्देश ("all facts + NCERT प्राथमिकता + top-1-rank फ़ोकस") पर सभी 5 नोट्स में सुधार: (1) बिंदु 1-3 में NCERT कक्षा-VI/XI को प्राथमिक-स्रोत जोड़ा गया (नागर-स्थापत्य/बौद्ध-स्तूप/प्रागैतिहासिक-शैलचित्र हेतु); (2) बिंदु 1 में UNESCO-घटक-स्तरीय क्षेत्रफल (पश्चिमी समूह 11.307ha, चौंसठ योगिनी 0.2347ha)+"खजुराहो हेरिटेज ज़ोन" (14,000ha/12 गाँव) जोड़े गए; (3) **महत्वपूर्ण सुधार पकड़ा गया**: शुरू में खजुराहो को "बफ़र-ज़ोन-रहित, सांची-भीमबेटका से भिन्न" लिखा था — पुनः-जाँच में पता चला **सांची का भी आधिकारिक बफ़र-ज़ोन "0 हेक्टेयर" ही है** (1980 के दशक के पुराने-नामांकन-पैटर्न, 2005-पश्चात के दिशानिर्देशों से पूर्व) — केवल भीमबेटका (2003) में स्पष्ट 10,280ha बफ़र-ज़ोन — बिंदु 1 एवं 2 दोनों में यह सही किया गया; (4) बिंदु 4 (ओरछा) में **भारत द्वारा प्रस्तावित सटीक 2 मानदंड — (ii) एवं (iv) — शब्दशः औचित्य सहित** जोड़े गए (पहले सामान्य "सांस्कृतिक भू-दृश्य" तक सीमित था)।

### Checklist file 09 — `09-mahatvapurn-janjatiya-vyaktitva.md` (13 points) — user confirmed start (IN PROGRESS)

मध्यप्रदेश के महत्वपूर्ण जनजातीय व्यक्तित्व। Header note itself says detailed coverage also lives in Unit 10 — per standing "fifth correction" lesson, applying full depth regardless. Points 1-3 ("मौजूदा कवरेज") already have deep notes elsewhere (checklist-01/02) — writing cross-referencing notes here focused specifically on the "जनजातीय व्यक्तित्व" (tribal-identity) angle rather than re-covering full biography. Points 4-13 are new, full research.

**"मौजूदा कवरेज" (1-3) — COMPLETE:**
- [x] 1 रानी दुर्गावती — गोंडवाना की गोंड रानी, बलिदान → `01-rani-durgavati-gondwana-gond-rani-balidan.md` (**तथ्यात्मक-स्पष्टीकरण: जन्म से गोंड नहीं, चंदेल राजपूत** — पिता राजा कीरत राय/सालबाहन महोबा, जन्म कालिंजर क़िला बांदा उ.प्र.; 1542 दलपत शाह विवाह से गोंड-राजवंश-प्रवेश — "गोंड रानी" पहचान अर्जित, जन्मजात नहीं)
- [x] 2 टँट्या भील (टंट्या मामा) → `02-tantya-bhil-malwa-nimar-bhil-guerrilla-neta.md` (भील जनजाति — MP की सबसे बड़ी ~40%/59.93 लाख; "टंट्या मामा" अर्ध-दैवीय श्रद्धा; **23 नवंबर 2021 पातालपानी रेलवे स्टेशन नाम-परिवर्तन**; 4 दिसंबर "बलिदान दिवस", अष्टधातु-प्रतिमा, ₹4.55cr नवतीर्थ स्थल — user-फ़ीडबैक पर enrich किया गया)
- [x] 3 रानी अवंतीबाई लोधी — रामगढ़ विद्रोह (जनजाति-निकट) → `03-rani-avantibai-lodhi-ramgarh-vidroh-janjati-nikat.md` (**"जनजाति-निकट" का सटीक-आधार खोजा: लोधी/लोधा समुदाय MP सहित अधिकांश राज्यों में OBC, केवल पश्चिम बंगाल-ओडिशा में ST/PVTG** — राज्य-दर-राज्य भिन्न-वर्गीकरण; डाक टिकट 1988+2001; लखनऊ प्रतिमा-अनावरण राजनाथ सिंह)

- [x] 4 राजा शंकर शाह → `04-raja-shankar-shah-gond-shasak-jabalpur-1857-shahid.md` (गढ़-मंडला राजवंश, निज़ाम शाह के प्रपौत्र, राजा संग्राम शाह [48वें शासक] की शृंखला; **समसामयिक: 15 नवंबर 2024 PM मोदी वर्चुअल-उद्घाटन "राजा शंकर शाह-रघुनाथ शाह संग्रहालय जबलपुर" — जनजातीय गौरव दिवस, उसी DFO-परिसर में जहाँ बंदी बनाए गए, 6 दीर्घाएँ/25 सेनानी, एक दीर्घा रानी दुर्गावती को समर्पित**)
- [x] 5 रघुनाथ शाह (पुत्र) → `05-raghunath-shah-shankar-shah-putra-jabalpur-1857-shahid.md` (उपाधि "कुँवर"; विद्रोह-आयोजन में अधिक सक्रिय भूमिका; 18 सितंबर 1857 संयुक्त-फाँसी)

**"मौजूदा कवरेज" cross-referencing (बिंदु 1-5) पूर्ण।**

- [x] 6 भीमा नायक — भील स्वतंत्रता सेनानी नेता → `06-bhima-naik-bhil-swatantrata-senani-neta.md` (जन्म 1840 पंचमोहली-बड़वानी; **माता "सुरसी" भी स्वतंत्र क्रांतिकारी-दल-नेता**; अंबापानी युद्ध 11 अप्रैल 1858; **तात्या टोपे को नर्मदा पार कराने में सहायता**; फाँसी 29 दिसंबर 1876 पोर्ट ब्लेयर; **समसामयिक — "शहीद भीमा नायक सागर परियोजना" NVDA, 15686 हेक्टेयर सिंचाई**)

- [x] 7 हीरासिंह देशमुख — गोंड स्वतंत्रता सेनानी → `07-hirasingh-deshmukh-gond-swatantrata-senani.md` (**ईमानदार-गैप-फ्लैग: विस्तृत बहु-स्रोत खोज पर भी कोई सत्यापित जीवनी नहीं मिली** — यहाँ तक कि एक प्रामाणिक MPPSC जनजातीय-व्यक्तित्व-संकलन में भी अनुपस्थित; "हीरा सिंह मरकाम" [1942-जन्म, गोंडवाना गणतंत्र पार्टी संस्थापक 1990-91] से भ्रमित न हों — भिन्न, 20वीं-शती-उत्तरार्ध राजनैतिक-व्यक्ति)

**महत्वपूर्ण खोज:** एक प्रामाणिक MPPSC-केंद्रित जनजातीय-व्यक्तित्व-संकलन (testbook.com) मिला जो checklist-09 के लगभग सभी शेष नामों (खाज्या नायक, गंजनसिंह कोरकू, बादल भोई, पेमा फाल्या सहित) को सत्यापित-तिथियों सहित सूचीबद्ध करता है — इसे आगामी बिंदुओं 10-13 हेतु प्राथमिक क्रॉस-सत्यापन-स्रोत के रूप में उपयोग किया जा रहा है।

- [x] 8 रानी कमलापति — गोंड रानी, भोपाल क्षेत्र → `08-rani-kamlapati-gond-rani-bhopal-kshetra.md` (गिन्नौरगढ़ निज़ाम शाह की पत्नी, भतीजा आलम शाह हत्या-षड्यंत्र → दोस्त मोहम्मद ख़ाँ सहायता ₹1 लाख पुरस्कार → भोपाल-रियासत-स्थापना 1723 अप्रत्यक्ष-परिणाम cross-ref checklist-01 point 28; कमलापति महल 1722; **समसामयिक 15 नवंबर 2021 हबीबगंज→रानी कमलापति रेलवे स्टेशन, भारत का प्रथम वर्ल्ड-क्लास स्टेशन ₹100cr**)

**महत्वपूर्ण खोज:** एक प्रामाणिक MPPSC-केंद्रित जनजातीय-व्यक्तित्व-संकलन (testbook.com) मिला जो checklist-09 के लगभग सभी शेष नामों को सत्यापित-तिथियों सहित सूचीबद्ध करता है — आगामी बिंदुओं हेतु प्राथमिक क्रॉस-सत्यापन-स्रोत। **महत्वपूर्ण सुधार**: gondwanasamay.com स्रोत ने बादल भोई की मृत्यु "1981" बताई थी जो जन्म-1845 के साथ असंभव (136 वर्ष); testbook.com का "1940" कहीं अधिक विश्वसनीय — बिंदु 12 में इसी का उपयोग होगा।

**User ने बिंदु 7 (हीरासिंह देशमुख) पर "cover in depth" दोहराया — मूल-व्यक्ति असत्यापित रहने पर (5-6 खोज-दृष्टिकोण असफल), नोट को "देशमुख" उपाधि-व्याख्या + सम्बद्ध-व्यक्तियों (हिरदेशाह — लोधी-राजा बुंदेलखंड 1841-43) के सत्यापित-तथ्यों + पूर्ण खोज-पद्धति-दस्तावेज़ीकरण से समृद्ध किया — बिना तथ्य गढ़े गहराई प्रदर्शित की।**

- [x] 9 भभूत सिंह गौर — जनजातीय सामाजिक सुधारक/नेता → `09-bhabhut-singh-gaur-janjatiya-samajik-sudharak-neta.md` (सत्यापित-नाम **"राजा भभूत सिंह"**; कोरकू-सम्बद्ध, सतपुड़ा गुरिल्ला-नेता, **तात्या टोपे से घनिष्ठ सम्बन्ध**; फाँसी 1860 मद्रास इन्फैंट्री; **समसामयिक: जून 2025 पचमढ़ी अभयारण्य नाम-परिवर्तन "राजा भभूत सिंह पचमढ़ी अभयारण्य"**)

- [x] 10 खाज्या नायक → `10-khajya-naik-janjatiya-swatantrata-senani.md` (संगरी गाँव निमाड़, भील; 1831-51 ब्रिटिश-सिपाही सेंधवा-जामली गश्त; **भीमा नायक के बहनोई/साढ़ू**; 11 अप्रैल 1858 अंबापानी-युद्ध में शहादत; 11 अप्रैल "खाज्या नायक दिवस")
- [x] 11 गंजनसिंह कोरकू → `11-ganjansingh-korku-korku-janjatiya-neta.md` (cross-ref checklist-02 point 9; कोरकू, घोड़ाडोंगरी वन-सत्याग्रह 1930 चिखलार-बेतुल नेतृत्व; मृत्यु 1963)
- [x] 12 बादल भोई → `12-badal-bhoi-janjatiya-swatantrata-senani.md` (डुंगरिया टीटरा-परासिया-छिंदवाड़ा, गोंड, "छिंदवाड़ा के गांधी"; 1923 कलेक्टर-बंगला प्रदर्शन; 21 अगस्त 1930 रामाकोना वन-उल्लंघन चांदा जेल; **मृत्यु 1940 महाराष्ट्र जेल विष-प्रयोग** [gondwanasamay के गलत "1981" दावे को सुधारा]; छिंदवाड़ा संग्रहालय 1954→1997 पुनर्नामित)

- [x] 13 पेमा फाल्या (अंतिम बिंदु) → `13-pema-falya-janjatiya-swatantrata-senani.md` (**पुष्ट: checklist का "स्वतंत्रता सेनानी" वर्णन त्रुटिपूर्ण — वास्तव में विश्व-विख्यात पिथौरा-चित्रकार**, भील "लखेंद्र"-वंशानुगत परंपरा, अलीराजपुर/झाबुआ; **1980s J. स्वामीनाथन द्वारा जनगढ़ सिंह श्याम के साथ खोजे गए** cross-ref checklist-07 point 50; शिखर सम्मान 1986+तुलसी सम्मान; मृत्यु अप्रैल 2020)

**🎉 checklist-फ़ाइल 09 (`09-mahatvapurn-janjatiya-vyaktitva.md`, 13 बिंदु) पूर्ण रूप से समाप्त।** तीन महत्वपूर्ण तथ्यात्मक-सुधार दर्ज: (1) रानी दुर्गावती जन्म से चंदेल राजपूत, गोंड नहीं; (2) "हीरासिंह देशमुख" विस्तृत खोज पर भी असत्यापित; (3) पेमा फाल्या स्वतंत्रता-सेनानी नहीं, पिथौरा-चित्रकार।

---

## 🎉🎉🎉 MAJOR MILESTONE: सम्पूर्ण Unit 1 (मध्यप्रदेश का इतिहास, संस्कृति एवं साहित्य) की सभी 9 checklist-फ़ाइलें अब पूर्ण रूप से समाप्त 🎉🎉🎉

`mppsc-syllabus/prelims/unit-01-mp-history-culture-literature/` में कुल **9 checklist-फ़ाइलें** हैं (01 से 09 तक) — **सभी 9 अब mppsc-syllabus/prelims-notes/unit-01-mp-history-culture-literature/ में गहन, तथ्य-सत्यापित नोट्स के साथ पूर्ण**:
- 01-pramukh-ghatnayen-rajvansh (41 बिंदु) ✅
- 02-swatantrata-andolan-yogdan (21 बिंदु) ✅
- 03-pramukh-kala-murtikala (111 बिंदु) ✅
- 04-pramukh-janjatiyan-boliyan (18 बिंदु) ✅
- 05-parv-lok-sangeet-lok-kala-lok-sahitya (43 बिंदु) ✅
- 06-sahityakar-krityan (20 बिंदु) ✅
- 07-paryatan-sthal-dharmik-sanskritik-puratatvik (61 बिंदु) ✅
- 08-vishwa-dharohar-sthal (5 बिंदु) ✅
- 09-mahatvapurn-janjatiya-vyaktitva (13 बिंदु) ✅

**कुल = 333 बिंदु/नोट्स, संपूर्ण Unit 1 के लिए।**

**उपयोगकर्ता ने Unit 2 के बजाय Unit 10 (मध्यप्रदेश की जनजातीय विरासत/लोक-संस्कृति) से आगे बढ़ने का निर्णय लिया** — तार्किक-चयन क्योंकि यह पहले से कवर की गई सामग्री (जनजातीय-व्यक्तित्व/भाषा/लोक-कला) से सर्वाधिक-सम्बद्ध है।

## Unit 10 — mp-tribal-heritage-folk-culture — prelims-notes (शुरू)

`mppsc-syllabus/prelims/unit-10-mp-tribal-heritage-folk-culture/` में **5 checklist-फ़ाइलें**:
- 01-bhaugolik-vistar-samvidhanik-pravdhan (5 बिंदु — प्राकृतिक-संसाधन-सम्बन्ध, PESA, FRA, 5वीं अनुसूची, भौगोलिक-वितरण)
- 02-pramukh-janjatiyan-pvtg-kalyan-karyakram
- 03-janjatiya-sanskriti-riti-riwaj-kala-parv-boli-sahitya
- 04-swatantrata-andolan-yogdan-vyaktitva-sansthan
- 05-mp-lok-sanskriti-sahitya (user का यह फ़ाइल खुली थी)

Notes जाएंगे `mppsc-syllabus/prelims-notes/unit-10-mp-tribal-heritage-folk-culture/<NN-checklist-slug>/`। सभी standing-rules यथावत (NCERT-प्राथमिकता स्रोत, तथ्य-सघनता बिना padding, cross-referencing checklist-01/04/05/07/09 की पहले से मौजूद जनजातीय-सामग्री से, MCQ-योग्य सटीक तथ्य)।

### Checklist file 01 — `01-bhaugolik-vistar-samvidhanik-pravdhan.md` (5 points) — COMPLETE

- [x] 1 प्राकृतिक संसाधन एवं जनजाति — वन/जल सम्बन्ध → `01-prakritik-sansadhan-janjati-van-jal-sambandh.md` (**MP भारत का सर्वाधिक वन-क्षेत्रफल राज्य — 77,073 वर्ग किमी/30.71%/12.4% राष्ट्रीय**; 21.1% ST जनसंख्या, 43 जनजातियाँ, 6 प्रमुख=90%+; **तेंदू पत्ता राष्ट्रीयकरण करने वाला भारत का प्रथम राज्य, ~25% राष्ट्रीय-उत्पादन**)

- [x] 2 PESA अधिनियम — ग्राम सभा सशक्तिकरण → `02-pesa-adhiniyam-gram-sabha-sashaktikaran-mp-sandarbh.md` (24 दिसंबर 1996, 10 राज्य; **समसामयिक: MP PESA नियम अधिसूचना 15 नवंबर 2022 जनजातीय गौरव दिवस शहडोल**, राज्यपाल मंगूभाई पटेल→राष्ट्रपति नियमावली-भेंट)
- [x] 3 वन अधिकार अधिनियम (FRA) → `03-van-adhikar-adhiniyam-fra-vyaktigat-samudayik-adhikar.md` (पारित 18 दिसंबर 2006/अनुमति 29 दिसंबर/प्रवर्तन 31 दिसंबर 2007; धारा 3(1) — IFR [4 हेक्टेयर, कट-ऑफ़ 13.12.2005]/CFR/CFRR; **MP — CFRR 14 लाख+ एकड़ स्वीकृत**, अग्रणी-राज्य। **User ने "100% deeper facts" हेतु पुनः-बल दिया — retroactively enriched with: FDST-बनाम-OTFD पात्रता-भेद [75 वर्ष/3 पीढ़ी नियम, धारा 2(o)], धारा 6 समिति-संरचना [ग्राम सभा→SDLC→DLC, 60-दिन अपील], landmark मामला "वाइल्डलाइफ फर्स्ट बनाम भारत संघ" [13 फरवरी 2019 बेदखली-आदेश/~18 लाख परिवार→28 फरवरी 2019 स्थगन→FRA संवैधानिक-वैधता बरकरार], MP-विशिष्ट दावे 5,85,326 दाखिल/3,18,425 अस्वीकृत, तथा MP वन ग्राम नियम 1976 [2.5 हेक्टेयर/परिवार — FRA की 4-हेक्टेयर IFR-सीमा से भिन्न, MCQ-ट्रैप]**)
- [x] 4 पाँचवीं अनुसूची — अनुसूचित क्षेत्र प्रशासन → `04-panchvi-anusuchi-anusuchit-kshetra-prashasan.md` (अनुच्छेद 244(1), 10 राज्य; राष्ट्रपति-क्षेत्र-घोषणा/राज्यपाल-वार्षिक-रिपोर्ट; TAC अधिकतम 20 सदस्य/3-4 ST-विधायक; **MP — 20 अनुसूचित-ज़िले पूर्ण-सूची सहित** [झाबुआ, मंडला, डिंडोरी, बड़वानी, अलीराजपुर, धार, खरगोन, खंडवा, रतलाम, बैतूल, सिवनी, बालाघाट, होशंगाबाद, शहडोल, उमरिया, श्योपुर, छिंदवाड़ा, सीधी, अनूपपुर, बुरहानपुर], 89 जनजातीय-विकास-खंड)
- [x] 5 MP में जनजातीय बहुल जिलों का भौगोलिक वितरण → `05-mp-janjatiya-bahul-jilon-ka-bhaugolik-vitran.md` (कुल ST जनसंख्या 153.16 लाख/21.1%; **दो प्रमुख पेटियाँ — भील-पेटी [पश्चिम: झाबुआ/अलीराजपुर/धार/बड़वानी] बनाम गोंड-पेटी [महाकौशल: मंडला/डिंडोरी/छिंदवाड़ा/बैतूल/सिवनी/बालाघाट/शहडोल]**; तीसरा पॉकेट — सहरिया [ग्वालियर-चंबल]/बैगाचक-डिंडोरी/पातालकोट-छिंदवाड़ा; **प्रतिशत में शीर्ष अलीराजपुर [89%] बनाम निरपेक्ष-संख्या में शीर्ष धार [~12.2 लाख] — MCQ-ट्रैप**; न्यूनतम भिंड [0.36%])

**🎉 checklist-फ़ाइल 01 (Unit 10, 5 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 02 — `02-pramukh-janjatiyan-pvtg-kalyan-karyakram.md` (21 points, Unit 10) — COMPLETE

User ने स्पष्ट स्वीकृति दी तथा बार-बार "very in depth, top one rank" बल दिया। Notes गए `mppsc-syllabus/prelims-notes/unit-10-mp-tribal-heritage-folk-culture/02-pramukh-janjatiyan-pvtg-kalyan-karyakram/`। 3 उप-खंड: प्रमुख जनजातियाँ (1-9), जनजातीय उप-समूह (10-15), जनजातीय कल्याण एवं संस्थागत सहयोग (16-21)।

**प्रमुख जनजातियाँ (1-9):**
- [x] 1 भील — उपसमूह/भौगोलिक फैलाव → भिलाला(राजपूत-मिश्रण)/भील नायक/रठवा; भील-पट्टी MP+गुजरात+राजस्थान त्रि-राज्यीय
- [x] 2 गोंड — कुल/गोत्र/कथाएँ → पहांदी कुपार लिंगाल संस्थापक-कथा, 4 सगा (ग्रिग्सन)→पारी गोत्र, बारादेव/पर्सा पेन
- [x] 3 बैगा — जीवन-शैली/वर्तमान आजीविका → बेवर स्थानांतरी-कृषि ब्रिटिश-प्रतिबंध, वर्तमान दैनिक-मजदूरी-संकट, MP जैविक-खेती पहल
- [x] 4 कोरकू — कृषि/वन-आजीविका → भौगोलिक (छिंदवाड़ा/बैतूल/होशंगाबाद/हरदा), कोदो-कुटकी, महुआ-चिरौंजी-तेंदू निर्भरता
- [x] 5 सहरिया — वंचना/पोषण/जीवन-निर्वाह → श्योपुर करहल विरोधाभास (औषधि-केंद्र→अब सर्वाधिक-कुपोषित); **PM-JANMAN 15 नवंबर 2023, 75 PVTG/18+1 राज्य, ₹24,104cr**
- [x] 6 कोल — इतिहास/लोक-आस्था → **महत्वपूर्ण-स्पष्टीकरण: "कोल" के दो भिन्न अर्थ — छोटानागपुर हो-भूमिज-मुंडा (मुंडा-भाषा/1831-32 कोल-विद्रोह) बनाम MP का कोल-ST (बघेली-भाषी/हिंदू-आस्था)**; गोहिया पंचायत
- [x] 7 भीलाला/पाटीदार भील — संकर संस्कृति → **"पाटीदार भील" असत्यापित पाया गया, भिलाला (वास्तविक भील-राजपूत मिश्रण) पर केंद्रित**; जनजाति-से-जाति रूपांतरण की शैक्षणिक-अवधारणा
- [x] 8 भरिया — रहवास/जीविका → पातालकोट (1200-3000 फीट, 12 गाँव, जैव-विविधता विरासत स्थल); ~220 औषधीय-पौध-प्रजाति, भूमका
- [x] 9 पारधी — घुमंतू समुदाय — रूपांतरण → 1871 आपराधिक-जनजाति-अधिनियम→1952 विमुक्ति; **रूपांतरण कानूनी-स्तर पर पूर्ण किंतु सामाजिक-स्तर पर आज भी अधूरा** (पुलिस-निगरानी/कलंक जारी)

**जनजातीय उप-समूह (10-15):**
- [x] 10 मुरिया/माड़िया गोंड — नृत्य/ढोल-परंपरा → **ईमानदार-स्पष्टीकरण: मुख्यतः बस्तर-छत्तीसगढ़ (2000 में MP से पृथक), वर्तमान-MP-विशिष्ट नहीं**; घोटुल युवागृह, डिटोंग गीत-रहित-नृत्य
- [x] 11 धनुका/धांक — भील संबंधी समूह → राजस्थान(जयपुर/अलवर)-गुजरात केंद्रित, भील/मीणा-निकट, धनुर्विद्या-मूल
- [x] 12 अगरिया — लौह-धातु कर्म परंपरा → मंडला/डिंडोरी/बालाघाट/सीधी; **वेरियर एल्विन "The Agaria" (1942, OUP) मंडला-केंद्रित शास्त्रीय-अध्ययन**; **checklist-07 बिंदु 46 की ICH-सूची त्रुटि यहीं शोध के दौरान पकड़ी गई एवं सुधारी गई (नीचे देखें)**
- [x] 13 पनिका/बुनकर समुदाय — लोक-वस्त्र → विंध्य-बघेलखंड केंद्रित; **कबीर स्वयं जुलाहा थे→पनिका ने कबीर-निर्गुण-दर्शन अपनाया**, कबीरपंथी बागत/साकट उपसमूह
- [x] 14 माझी/केवट — नदी-आधारित समुदाय → पर्याय मल्लाह/भोई/कहार/निषाद आदि; 31 मार्च 1949 ST-घोषणा; पुल/मोटर-बोट से पारंपरिक नाविक-व्यवसाय क्षीण→कृषि-मजदूरी
- [x] 15 किरार/बारेला — कृषि-आधारित समूह → किरार=धाकड़-शाखा (मूल राजस्थान मेवाड़), बारेला=भील-सम्बद्ध

**जनजातीय कल्याण एवं संस्थागत सहयोग (16-21):**
- [x] 16 TRIFED/लघु वनोपज — मूल्य-शृंखला → MSP for MFP 87 वस्तुएँ; राष्ट्रीय 4,172 वन धन विकास केंद्र/12.48 लाख सदस्य; MPMFP संघ
- [x] 17 जनजातीय छात्रावास/शिक्षा/स्वास्थ्य — परिसंस्थाएँ → 89 जनजातीय-विकास-खंडों में शिक्षा, निःशुल्क आश्रम-व्यवस्था
- [x] 18 आदिवासी सहकारी/FPO — लघु वनोपज मूल्य-वर्धन → प्रति-VDVK 15 SHG/300 सदस्य; **MP में 2021 वन धन विकास केंद्र स्थापित**
- [x] 19 जनजातीय शिक्षा — एकलव्य मॉडल/भाषा-समर्थ शिक्षा → **EMRS स्थापना 1997-98, क्षमता 480/कक्षा VI-XII, अनुच्छेद 275(1)**, राष्ट्रीय-लक्ष्य 740; MLE मातृभाषा-शिक्षा (गोंडी/भीली), BharatGen AI 22 भाषा
- [x] 20 स्वास्थ्य/पोषण — महिला/बाल केंद्रित पहल → **राष्ट्रीय सिकल सेल एनीमिया उन्मूलन मिशन — 1 जुलाई 2023 PM मोदी द्वारा शहडोल (MP) से शुभारंभ**, लक्ष्य 3 वर्ष/7 करोड़ स्क्रीनिंग/17 राज्य; PM-JANMAN ₹1000/माह पूरक
- [x] 21 हाट-बाज़ार आधुनिकीकरण — कनेक्टिविटी/डिजिटल भुगतान → MPMFP "अपनी दुकान" मॉडल; राष्ट्रीय 5,000+ हाट-बाज़ार आधुनिकीकरण-अधीन; डिजिटल-भुगतान-एकीकरण अभी अपूर्ण (ईमानदार-सीमा)

**महत्वपूर्ण सुधार इस फ़ाइल में पकड़ा गया (बिंदु 12 शोध के दौरान):** checklist-फ़ाइल 07 (Unit 1) के बिंदु 46 (`46-audio-visual-documentary-lok-dharohar-sanrakshan.md`) में पूर्व-दर्ज दावा **"MP की 3 ICH-परंपराएँ — मैहर बैंड, अगरिया लौह-प्रगलन प्रथा, निमाड़ पाककला-धरोहर" असत्यापित/त्रुटिपूर्ण पाया गया** — पुनः-सत्यापन में वास्तविक तथ्य मिला: **30 अप्रैल 2025 को CM डॉ. मोहन यादव द्वारा घोषित MP की 3 राष्ट्रीय-ICH-धरोहरें — भगोरिया जनजातीय नृत्य, गोंड जनजातीय चित्रकला, माँ नर्मदा परिक्रमा** (मैहर बैंड एक पृथक/अतिरिक्त-सम्मिलन है, इन 3 का भाग नहीं) — नोट सुधार दिया गया है।

### Checklist file 03 — `03-janjatiya-sanskriti-riti-riwaj-kala-parv-boli-sahitya.md` (45 points, Unit 10) — COMPLETE

User ने स्पष्ट स्वीकृति दी तथा बार-बार "top one rank, cover all facts" बल दिया। Notes गए `mppsc-syllabus/prelims-notes/unit-10-mp-tribal-heritage-folk-culture/03-janjatiya-sanskriti-riti-riwaj-kala-parv-boli-sahitya/`। 9 उप-खंड: सामाजिक संरचना एवं रीति-रिवाज (1-10), जनजातीय नृत्य (11-16), जनजातीय वाद्य एवं संगीत (17), जनजातीय चित्रकला एवं शिल्प (18-26), जनजातीय पर्व एवं मेले (27-31), जनजातीय बोलियाँ एवं वाचिक परंपरा (32-34), जनजातीय औषध ज्ञान एवं लोक-कथाएँ (35-37), जनजातीय खेल एवं जीवनशैली (38), जनजातीय हस्तकला का आधुनिक जुड़ाव-रुझान (39-45)।

**सामाजिक संरचना एवं रीति-रिवाज (1-10):**
- [x] 1 पंचायत/परंपरागत न्याय → भील गमेती/भोपा/भगत, कोरकू/सहरिया पटेल, कोल गोहिया — तुलनात्मक तालिका
- [x] 2 गोत्र/टोटेम/वर्जनाएँ → **गोंड "दूधलौटवाँ विवाह" (ममेरे-फुफेरे)**, "सेवा-विवाह"
- [x] 3 जीवन-चक्र — जन्म/विवाह/मृत्यु → **गोंड 6 विवाह-प्रकार (चढ़/लमसेना/भगेली/पैठुल-ढूकु/गुरांवट/उढ़रिया)**; दफन/दाह दोनों प्रचलित, ईमानदार-सीमा
- [x] 4 वस्त्र/आभूषण/शरीर-आलंकरण → गोदना (भील पहचान-चिन्ह)+भगोरिया-अवसर; महिला/पुरुष आभूषण-सूची
- [x] 5 पारंपरिक आवास → मिट्टी-भूसा/बांस, बाड़ी-आंगन योजना, जलवायु-अनुकूल
- [x] 6 भोजन/पेय → कोदो-कुटकी/पेज/भाजी; **समसामयिक "ट्रॉईबल कैफेटेरिया" CM डॉ. मोहन यादव**
- [x] 7 कोदो-कुटकी/मिलेट → "ऋषि अन्न", 12x कैल्शियम; **MP जुलाई 2017 आंगनवाड़ी-अधिसूचना**
- [x] 8 लोक-शपथ/देव-स्थान → देवगुड़ी (मुरिया/माड़िया/गोंड), सरना (कोल)
- [x] 9 बाघ/पशु-टोटेम → **checklist का "बाज़" सम्भवतः "बाघ" टंकण-भेद — बाघ देव/Baghan Deo (बैगा-गोंड-कोरकू-कोल साझा), बैगा स्वयं को बाघ-वंशज मानते हैं**
- [x] 10 लोक-पर्यावरण नैतिकता → "पुकराल" पंचतत्व-अवधारणा, टोटम+वन-देव+बाघ-देव=समग्र लोक-पर्यावरण-नैतिकता

**जनजातीय नृत्य (11-16):**
- [x] 11 गौर नृत्य → **ईमानदार-स्पष्टीकरण: बाइसन हॉर्न माड़िया, मुख्यतः बस्तर-छत्तीसगढ़**
- [x] 12 सैला/सैला-सरहुल → **checklist-त्रुटि सुधार: सरहुल उरांव-जनजाति का नृत्य है, गोंड का नहीं**; सैला एक-पैर-सन्तुलन-कोरियोग्राफ़ी
- [x] 13 कर्मा/करमा → "कर्म"(श्रम)-प्रेरित नाम; **विंध्य-सतपुड़ा की कुछ जनजातियाँ कर्म-पूजा नहीं करतीं (अपवाद)**; महाकालेश्वर पंचमी-सवारी 2024
- [x] 14 मातकी/गुड़ी/झेलना → चैत्र-मास; निमाड़ी नृत्य-सूची (गणगौर/आड़ा-खड़ा/डंडा/काठी/फेफरिया/मांडल)
- [x] 15 मैना/भवाई/गावली → **ईमानदार-स्पष्टीकरण: मुख्यतः राजस्थान-मेवाड़-भील (गवरी/भवाई); "मैना" असत्यापित**
- [x] 16 तेरहताली → **पुनः-पुष्टि: राजस्थान "कामड़"-सम्बद्ध, "कामर"(छत्तीसगढ़) से नाम-भ्रम**

**जनजातीय वाद्य एवं संगीत (17):**
- [x] 17 वाद्य — मांदर/ढोलक/पावा/बांसुरी → **"बाना"/"किंगरी" — परधान (गोंड-उपजाति) का बांस+घोड़े-बाल तंतु-वाद्य, "वाद्य भी देव भी"; जनगढ़ सिंह श्याम स्वयं परधान थे — संगीत-चित्रकला अंतर-कड़ी**

**जनजातीय चित्रकला एवं शिल्प (18-26):**
- [x] 18 गोंड आर्ट — डॉट वर्क → परधान-रचित, बिंदु-रेखा-तकनीक; **अप्रैल 2023 GI टैग**; "1400+ वर्ष" का सही-अर्थ स्पष्ट किया
- [x] 19 भील पेंटिंग — डॉट पैटर्न/देव-प्रतीक → पिठोरा विस्तृत-प्रतीक-सूची (गणेश/काठिया घोड़ा/नाहर/सांप-बिच्छू आदि)
- [x] 20 भड़िया/रॉक आर्ट → **"भड़िया" असत्यापित, भीमबेटका-केंद्रित प्रस्तुति**; प्रागैतिहासिक-बनाम-जीवंत भेद
- [x] 21 टेराकोटा/लकड़ी/धातु शिल्प → **पूनिया/अरहरिया जनजाति — "बड़ी देवी"/"फुलवारी देवी" प्रतिमाएँ**
- [x] 22 चर्म/बांस शिल्प → **"चर्मपादत्रा" संगठन — ग्वालियर 181 मोची स्थायी कार्य-स्थल**; बालाघाट बांस-केंद्र
- [x] 23 धातु/घंटनाद कला → दतिया-टीकमगढ़ ढोकरा, GI 2007/2008
- [x] 24 लकड़ी शिल्प — बस्तर-सीमा प्रभाव → **ईमानदार-स्पष्टीकरण: प्रत्यक्ष-प्रभाव अस्पष्ट, MP की अपनी काष्ठ-परंपरा स्वतंत्र**
- [x] 25 गोंड/भील आर्ट आइकनोग्राफी तुलना → तुलनात्मक-तालिका (रचयिता/तकनीक/माध्यम/व्यावसायीकरण)
- [x] 26 लोक-हस्तकला — मोती/घुंघरू/काष्ठ → **अत्यंत-समसामयिक: "भरेवा-शिल्प" — 10 दिसंबर 2025 बैतूल के बलदेव वाघमारे को राष्ट्रपति-राष्ट्रीय-सम्मान**

**जनजातीय पर्व एवं मेले (27-31):**
- [x] 27 भगोरिया → भील+भिलाला+पटलिया+रणथ सहभागी
- [x] 28 तीज/राखी/दशहरा स्थानीय-रूपांतर → गोंचो (वर्षा-प्रार्थना), दशहरे में करमा-नृत्य
- [x] 29 हरियाली अमावस्या/एकादशी → सावन-अमावस्या, मालवा-निमाड़ प्रचलन; समसामयिक शिवराज सिंह चौहान वृक्षारोपण
- [x] 30 ज्योत/जल-विहार नर्मदा → श्रावण-जल-यात्रा ओंकारेश्वर-ममलेश्वर; जबलपुर 18-वर्ष तिरंगा-तैराकी-परंपरा
- [x] 31 चोटका देव/कर्मा पूजन → **"चोटका देव" असत्यापित — "बड़ा देव"(=लिंगो/बारापेन, साल-वृक्ष-प्रतीक) पर केंद्रित, गुट्टी पूजा**

**जनजातीय बोलियाँ एवं वाचिक परंपरा (32-34):**
- [x] 32 गोंडी/कोरकू वाचिक परंपरा → परधान = गोंडी की वाचिक-परंपरा के मुख्य-वाहक; दोनों 8वीं अनुसूची-बहिष्कृत
- [x] 33 गोंडी लिप्यंतरण → 1928 पृथक-लिपि; गुंजाला गोंडी 2006/यूनिकोड 2018; शब्दकोश-अभियान
- [x] 34 भाषाई-संरक्षण ऐप्स → आदि वाणी (6 भाषा); **कोरकू — खालवा(खंडवा) "स्पंदन समिति" 500-शब्द शब्दकोश + आदिवासी लोक कला अकादमी**

**जनजातीय औषध ज्ञान एवं लोक-कथाएँ (35-37):**
- [x] 35 वन-औषध ज्ञान → **"बैगा" नाम स्वयं "वैद्य"→"वैद्य-विग्य"→"बैगा" व्युत्पत्ति** — पहचान-ही-ज्ञान-क्षेत्र
- [x] 36 लोक-नीति कथाएँ → बाघ-देव/बड़ा-देव/टोटम-वर्जना = नैतिक-पर्यावरण-कथाओं का संश्लेषण
- [x] 37 लोक-कथा नायक — तेजाजी/देव नारायण → **तेजाजी वंश-मूल "खिचलीपुर"(MP); देव नारायण बचपन देवास(MP)+विवाह धार(MP)-राजकुमारी पीपलदे से — कहीं अधिक प्रत्यक्ष MP-सम्बन्ध**

**जनजातीय खेल एवं जीवनशैली (38):**
- [x] 38 मल्लखम्भ/रस्साकशी/कुश्ती → **अत्यंत-नवीनतम: प्रथम खेलो इंडिया जनजातीय खेल 25 मार्च-3 अप्रैल 2026 छत्तीसगढ़ (रायपुर/जगदलपुर/सरगुजा), 60,000+ खिलाड़ी/30 राज्य/338 पदक**

**जनजातीय हस्तकला का आधुनिक जुड़ाव-रुझान (39-45):**
- [x] 39 GI/क्लस्टर विपणन → **अप्रैल 2023 — 6 MP-उत्पाद एक साथ GI (गोंड-पेंटिंग-डिंडोरी+ग्वालियर कालीन+डिंडोरी लोह-शिल्प+जबलपुर पत्थर+वारासिवनी हैंडलूम+उज्जैन बटिक)**; भील-पिठोरा अभी अप्राप्त
- [x] 40 गोंड/भील राष्ट्रीय/वैश्विक बाज़ार → PM-कार्यालय प्रदर्शन; **पाटनगढ़(डिंडोरी) Amazon Karigar — 157 कलाकार-परिवार**
- [x] 41 हस्तशिल्प ई-कॉमर्स/मेले→ऑनलाइन → शहडोल हैंडलूम-प्रशिक्षण-केंद्र
- [x] 42 युवा/महिला कलाकार कलेक्टिव → **कलावती श्याम — प्रथम गोंड-महिला-कैनवास-चित्रकार, अंतरराष्ट्रीय-प्रदर्शनी, APJ अब्दुल कलाम-क्रय**; समसामयिक जनगढ़ सिंह श्याम संग्रहालय (पाटनगढ़, 8 दीर्घाएँ)
- [x] 43 महिला शिल्पकार भूमिका/नेतृत्व → व्यक्तिगत(कलावती) बनाम सामूहिक("बिहान" NRLM — कात्यायनी/भारत माता SHG) दो मॉडल
- [x] 44 आजीविका विविधीकरण → त्रि-स्तंभ मॉडल (कला+पर्यटन+NTFP)
- [x] 45 इको-टूरिज्म समुदाय मॉडल → **बालाघाट टेकाड़ी/केरा/पीपरटोला 6 होमस्टे**; विस्तार 1000 नए होमस्टे/100 गाँव; अगस्त 2026 CM मोहन यादव वन-पर्यटन-बल; 98 गाँव-1वर्ष-करोड़ों-आय

**🎉 checklist-फ़ाइल 03 (Unit 10, 45 बिंदु) पूर्ण रूप से समाप्त।** महत्वपूर्ण-सुधार/स्पष्टीकरण इस फ़ाइल में: (1) सरहुल गोंड नहीं उरांव का नृत्य; (2) गौर-नृत्य/मुरिया-माड़िया मुख्यतः बस्तर-छत्तीसगढ़; (3) मैना/भवाई/गावली/तेरहताली मुख्यतः राजस्थान-सम्बद्ध; (4) "पाटीदार भील"(checklist-02) एवं "चोटका देव"/"भड़िया"(यह फ़ाइल) असत्यापित पाए गए।

### Checklist file 04 — `04-swatantrata-andolan-yogdan-vyaktitva-sansthan.md` (12 points, Unit 10) — COMPLETE

**नया कार्यप्रणाली-नियम इस फ़ाइल में स्थापित (user का स्पष्ट-निर्देश): "source must be NCERT or other relevant authenticated book only"** — इस फ़ाइल के लगभग सभी 12 बिंदु Unit-1 के checklist-09 (जनजातीय-व्यक्तित्व) एवं checklist-07 (संग्रहालय) का सीधा-दोहराव थे (checklist अपने-आप यह स्वीकार करती है — फ़ाइल के शीर्ष पर "शून्य-कवरेज-गैप, Unit-01 में भी यही गैप दर्ज है" नोट)। **हर बिंदु पर सक्रिय रूप से जाँचा गया कि NCERT (कक्षा-VIII "हमारे अतीत-3" अध्याय 4 सहित) में उल्लेख है या नहीं — पुष्टि हुई कि यह सभी अत्यंत-क्षेत्रीय MP-विशिष्ट-इतिहास NCERT में कहीं नहीं है** (NCERT का 1857/जनजातीय-अध्याय केवल संथाल-विद्रोह/बिरसा मुंडा तक सीमित) — प्रत्येक नोट में यह सत्यापन-टिप्पणी स्पष्ट रूप से दर्ज की गई, तथा Wikipedia जैसे स्रोतों को भी वरीयता दी गई जब वे स्वयं ब्रिटिश-न्यायिक-अभिलेख/प्रामाणिक-द्वितीयक-इतिहास उद्धृत करते हों (बनाम सामान्य blog-aggregator साइटें)। **साथ ही user ने बार-बार "missing facts, cover deeper" बल दिया** — अतः प्रत्येक cross-reference-नोट को केवल संक्षिप्त-पॉइंटर न रखकर, अतिरिक्त गहन-शोध से नई-सत्यापित-गहराई के साथ पुनः-लिखा गया।

**जनजातीय व्यक्तित्व (1-8) — सभी Unit-1 checklist-09 के दोहराव, अतिरिक्त-गहन शोध सहित:**
- [x] 1 राजा शंकर शाह → **नया: साक्ष्य-रहित हत्या-षड्यंत्र-आरोप (वास्तविक-कारण देशभक्ति-कविताएँ), 19 सितंबर 1857 को 13 अनुयायियों की भी फाँसी, फाँसी ने स्वयं 52वीं बंगाल नेटिव इन्फैंट्री में विद्रोह भड़काया (कार्यकारण स्पष्ट)**
- [x] 2 रघुनाथ शाह → उपनाम "माडवी/मरावी"
- [x] 3 रानी दुर्गावती → **नया: नर्रई-युद्ध पूर्ण-वृत्तांत — "पैजनी" भेजना(युद्ध-चुनौती)→आसफ ख़ान 10,000 घुड़सवार-आक्रमण; रानी की पहाड़ी-उलझाव+छिपी-सेना रणनीति; वीर नारायण 3-बार पीछे धकेलना; रानी कान-तीर→गर्दन-तीर→बेहोशी क्रम**
- [x] 4 टँट्या भील → **नया: जन्म 26 जनवरी 1842, वास्तविक-नाम "टंड्रा"; 1888-89 राजद्रोह-मुक़दमा; न्यूयॉर्क टाइम्स 10 नवंबर 1889 "भारत का रॉबिन हुड"**
- [x] 5 भीमा नायक → **नया: कैप्टन कीटिंग से संघर्ष कर बचे; 1861 गिरफ़्तारी→अंडमान 15-वर्षीय कारावास→1876 फाँसी (कालानुक्रम); उपाधि "निमाड़ का रॉबिन हुड़" (टंट्या से पृथक); 21 जनवरी 2017 CM शिवराज सिंह चौहान स्मारक-अनावरण ढाबा बावड़ी**
- [x] 6 हीरासिंह देशमुख → **असत्यापित — NCERT/प्रामाणिक-पुस्तक में भी नहीं मिला, यह गैर-सत्यापन ही मुख्य-तथ्यात्मक-स्थिति है**
- [x] 7 रानी कमलापति → **नया: निज़ाम शाह की 7 पत्नियों में सर्वप्रिय; भतीजा आलम शाह (बाड़ी-शासक) 1720 ई. विष-हत्या; दोस्त मोहम्मद ख़ान से 1 लाख अशर्फ़ी-वादा/केवल 50 चुकाई; ख़ान की 100-सैनिक महिला-वेश-चाल गिन्नौर-क़िले हेतु**
- [x] 8 खाज्या नायक/गंजनसिंह कोरकू/बादल भोई/पेमा फाल्या → **नया: खाज्या — पिता भी ब्रिटिश-सेवक, नौकरी त्यागकर भील-सेना; पुत्र दौलतसिंह सहित संयुक्त-शहादत (एक और पिता-पुत्र-बलिदान); बादल भोई — "भोई"=ज़मींदार-उपाधि (जातिगत नहीं), 6 जनवरी 1921 गांधी-मुलाक़ात छिंदवाड़ा (विशिष्ट-तिथि)→सक्रियता; पेमा फाल्या — स्वतंत्रता-सेनानी नहीं, पिथौरा-चित्रकार (checklist-त्रुटि, दोहराई गई)**

**संस्थान, संग्रहालय एवं प्रकाशन (9-12):**
- [x] 9 MP राज्य जनजातीय संग्रहालय → **नया: परिकल्पना 2004→औपचारिक-उद्घाटन 6 जून 2013 (दो पृथक-तिथियाँ स्पष्ट); वास्तुकार रेवती कामथ→हरचंदन सिंह भाटी; 7 एकड़, प्रवेश-योग्य वास्तविक-आकार जनजातीय-घर**
- [x] 10 IGRMS → **नया: 9 खुले-क्षेत्र-अनुभागों की पूर्ण-नामावली (जनजातीय-रहवास/तटीय/मरुस्थलीय/हिमालयी-गाँव/रॉक-आर्ट/पौराणिक-मार्ग/नदी-घाटी/अय्यनार-संकुल/पारंपरिक-प्रौद्योगिकी); जनजातीय-रहवास में 50+ समुदाय-निर्मित वास्तविक-आवास**
- [x] 11 भारत भवन → **नया: 13 फरवरी 1982 PM इंदिरा गांधी उद्घाटन; 4 घटक-इकाइयाँ पूर्ण-विवरण — रूपांकर(लोक+जनजातीय-कला, एकमात्र-भारतीय-संग्रहालय)/रंगमंडल(रंगमंच)/वागर्थ(काव्य, 13,000+ पुस्तकें)/अनहद(संगीत)**
- [x] 12 जनजातीय अनुसंधान एवं विकास संस्थान (TRI) → **पूर्णतः-नया: स्थापना 1954 छिंदवाड़ा→भोपाल स्थानांतरण; ST-वर्गीकरण-विवादों में सरकार को "विचारित-मत" देने की अर्ध-सलाहकार-भूमिका; गोंडी/कोरकू/भीली तीनों शब्दकोश-निर्माण पर कार्यरत — checklist-03(Unit-10) की भाषा-संरक्षण-कड़ी से सीधा-जुड़ाव**

**🎉 checklist-फ़ाइल 04 (Unit 10, 12 बिंदु) पूर्ण रूप से समाप्त।** इस फ़ाइल में स्थापित नया कार्यप्रणाली-नियम (NCERT/प्रामाणिक-पुस्तक-सत्यापन-आवश्यकता, तथा दोहराव-बिंदुओं को भी संक्षिप्त-पॉइंटर के बजाय अतिरिक्त-शोध से समृद्ध करना) आगामी सभी checklist-फ़ाइलों में यथावत लागू रहेगा।

### Checklist file 05 — `05-mp-lok-sanskriti-sahitya.md` (61 points, Unit 10, LARGEST file in project after checklist-03/Unit-1's 111) — IN PROGRESS

User ने स्पष्ट स्वीकृति दी। **यह फ़ाइल MP की सामान्य (गैर-जनजातीय) लोक-संस्कृति/साहित्य कवर करती है — लगभग आधे बिंदु Unit-1 के checklist-05 (पर्व-लोकसंगीत-कला), checklist-06 (साहित्यकार), checklist-03 (कला-मूर्तिकला), checklist-08 (UNESCO) से दोहराव-में हैं** — checklist-04(Unit-10) में स्थापित नियम अनुसार हर दोहराव-बिंदु को भी संक्षिप्त-पॉइंटर के बजाय अतिरिक्त-गहन-शोध से समृद्ध किया जा रहा है (user ने बार-बार "missing facts" फ़ीडबैक दी — बिंदु 1 माच एवं बिंदु 4 पर विशेष रूप से)। 10 उप-खंड: लोक-नाट्य (1-5), क्षेत्रीय लोक-नृत्य (6-8), शास्त्रीय संगीत परंपराएँ (9-13), लोक-संगीत एवं गायन (14-16अ), बोलियाँ (17-25), MP के साहित्यकार (26-34), सांस्कृतिक-भौगोलिक धरोहर (35-44), वस्त्र एवं हस्तशिल्प (45-48), पर्व एवं मेले (49-53), समकालीन प्रवृत्तियाँ (54-61)।

**लोक-नाट्य (1-5) — COMPLETE:**
- [x] 1 मांच → **User-फ़ीडबैक पर 2 बार समृद्ध किया गया: गुरु गोपालजी(प्रवर्तक, राजस्थान-मूल)→बालमुकुंद जी जयसिंहपुरा(उत्तराधिकारी, 16 नाटक); उस्ताद कालूरामजी(20)/सिद्धेश्वर सेन(25, आधुनिक); मंच 10-12फ़ीट पूर्व-मुखी; ढोलक="प्राण"; राग कालिंगड़ा-आसावरी-सोरठ-मांड+होली-कजरी-मामेरा; "टेक झेलना" त्रि-उद्देश्य; ~150 रचनाएँ (धार्मिक/प्रणय/सामाजिक-भूदान-परिवार-नियोजन तक); संरक्षण-आधार "लोकाश्रय" न कि राजकीय**
- [x] 2 नौटंकी/रामलीला बुंदेलखंड → **कोंच(झाँसी-निकट) रामलीला — प्रत्येक-परिवार सहभागी, अंतरराष्ट्रीय-सैलानी/शोध-विषय; तुलसीदास की बहु-स्थल-मंचन-तकनीक (अयोध्या/जनकपुर/चित्रकूट/लंका पृथक-स्थल)**
- [x] 3 नया थिएटर हबीब तनवीर → संक्षिप्त-सन्दर्भ (Unit-1 दोहराव)
- [x] 4 हिंदी नाटक लोक-प्रेरित → **User-फ़ीडबैक पर समृद्ध: भारत भवन न्यास अधिनियम 1982; बी.वी. करंत — NSD दिल्ली+भारत भवन रंगमंडल दोनों के प्रथम-निर्देशक, कन्नड़-हिंदी अनुवाद+यक्षगान; रतन थियम-भारत भवन सम्बन्ध (2025 निधन)**
- [x] 5 माच समकालीन रूपांतरण (रुझान) → **ओमप्रकाश शर्मा(उज्जैन)-पद्मश्री 2024; "श्री महाकाल महोत्सव"-"माच शिव बारात" 14 जनवरी; संगीत नाटक अकादमी में MP के 5 कलाकार सम्मानित**

**क्षेत्रीय लोक-नृत्य (6-8) — COMPLETE:**
- [x] 6 चकरी/सेरा बुंदेली → **checklist-सुधार: "चकरी नृत्य" मुख्यतः राजस्थान-हाड़ौती (कोटा/बूँदी/झालावाड़/बारां) की परंपरा, बुंदेली नहीं**; सेरा = वास्तविक बुंदेली-नृत्य; **राजा गंगाधर राव(झाँसी, रानी लक्ष्मीबाई के पति) — मराठा-काल बुंदेली-नृत्य-संरक्षक, नृत्य-विद्यालय-स्थापना**
- [x] 7 खजराना/मालवी गरबा → **ईमानदार-flag: "खजराना गरबा"/"मालवी गरबा" पृथक-नामित-शैली असत्यापित** — खजराना मुख्यतः गणेश-मंदिर हेतु प्रसिद्ध; गरबा मालवी-लोकगीत/फाग/आल्हा के साथ साझा-लोक-भूमि
- [x] 8 राई नृत्य बुंदेलखंड → **समृद्ध: उत्पत्ति सैन्य-विजय-उत्सव से (सैनिक-मनोबल-वर्धन); बेड़िया-महिलाएँ सामाजिक-प्रतिष्ठा-प्राप्त; वाद्य नगाड़ा-ढोलक-झीका-रामतुला; मयूर-अनुकरण+"बिच्छू"-मुद्रा; कृष्ण-जन्माष्टमी-होली कालावधि; समसामयिक — राजनैतिक-प्रचार-अभियानों में भी प्रयुक्त**

**शास्त्रीय संगीत परंपराएँ (9-13) — COMPLETE:**
- [x] 9 ग्वालियर घराना ख्याल → नत्थन पीर बख्श(जन्मदाता)→क़ादिर बख्श के पुत्र हद्दू-हस्सू-नत्थू खाँ(व्यावहारिक-संस्थापक); विलंबित-तिलवाड़ा/एकताल, मध्य-तीनताल; मान सिंह तोमर — लोक-का-शास्त्रीयकरण
- [x] 10 मैहर घराना सरोद → अलाउद्दीन खान — "भीष्म पितामह", बहु-वाद्य-निपुण; अली अकबर खान — "सुर सम्राट"
- [x] 11 तानसेन समारोह → **101वाँ संस्करण 15-19 दिसंबर 2025; 2024-सम्मान राजा काले(गायन), 2025-सम्मान तरुण भट्टाचार्य(संतूर); 114 कलाकार+10 राष्ट्रीय-चित्रकार लाइव-पेंटिंग**
- [x] 12 ग्वालियर किला/संगीत सांस्कृतिक-प्रभाव → मान मंदिर महल = ध्रुपद भौतिक-पोषण-केंद्र; लोक-शास्त्रीयकरण-प्रयोगशाला
- [x] 13 कथक/ध्रुपद ग्वालियर-भोपाल कड़ी → **महत्वपूर्ण-सुधार: कथक-नृत्य में "ग्वालियर घराना" अस्तित्वहीन (कथक = केवल लखनऊ/जयपुर/बनारस+रायगढ़); "ग्वालियर घराना" शब्द विशुद्ध हिंदुस्तानी-गायन(ख्याल)-विशिष्ट; वास्तविक कड़ी — ध्रुपद-केंद्र भोपाल-ग्वालियर**

**लोक-संगीत एवं गायन (14-16अ) — COMPLETE:**
- [x] 14 लोक-संगीत निमाड़ी/मालवी/बुंदेली राग-रूप → फाग/होली-गीत साझा-अंतर-क्षेत्रीय-परंपरा; ईमानदार-सीमा — लोक-संगीत में कठोर-राग-वर्गीकरण नहीं
- [x] 15 काव्य-गायन आल्हा/लोरिक → **आल्हा-खंड 52 लड़ाइयाँ, कवि जगनिक; मूल-गायकी "बनाफरी बुंदेली"+समानांतर बहु-बोली-वर्णन-शैलियाँ (बैसवाड़ी/कन्नौजी/अवधी/भोजपुरी/बघेली/ब्रजी/कौरवी)**
- [x] 16 लोक-संगीत फ्यूजन ग्वालियर/मालवा (रुझान) → संगीत नाटक अकादमी 2024-25 युवा-आवेदन; विशिष्ट-फ्यूजन-बैंड असत्यापित
- [x] 16अ लोक-संगीत फेस्ट/युवा बैंड (रुझान) → संक्षिप्त-सन्दर्भ (Unit-1 दोहराव)

**बोलियाँ (17-25) — COMPLETE:**
- [x] 17 मालवी ध्वन्यात्मक/शब्द-भंडार → मालवी पर राजस्थानी-प्रभाव, झालावाड़-कोटा-प्रतापगढ़(राजस्थान) तक विस्तार
- [x] 18 निमाड़ी लोकगीत/किसानी-शब्दावली → **"भोला मानवई"/"भोला घणियेर" — निमाड़ी-सरलता-प्रतीक-शब्द**; लोकगीत="लोक-कंठों की धरोहर"
- [x] 19 बुंदेली वीर/श्रृंगार-छंद → **जोगीदास "दलपति रायसा" — रासो-काव्य, वीर-रस-प्रधान**; ~700-वर्षीय परंपरा
- [x] 20 बुंदेली अलंकार/छंद → चौपाई=16-मात्रा मात्रिक-सम-छंद, हिंदी का सर्वप्रिय-छंद; कहावत-मुहावरा=भाषा-सशक्तीकरण
- [x] 21 बघेली दरबारी/लोक दोहा-कवित्त → रीतिकाल-सामान्य-सिद्धांत (कवित्त/सवैया/दोहा); रीवा-नरेश विश्वनाथ सिंह स्वयं-कवि
- [x] 22 निमाड़ी/मालवी समांतर-कहावतें → ईमानदार-flag: शब्दशः-तुलनात्मक-सूची असत्यापित, विषयगत-समांतरता का भाषिक-तर्क दिया
- [x] 23 बुंदेली/मालवी/बघेली लोक-साहित्य-रूप → संश्लेषणात्मक तुलनात्मक-तालिका (लोकगाथा/रंगमंच-फाग/दरबारी-दोहा)
- [x] 24 लोक-कथा संकलन बघेली/बुंदेली → **महत्वपूर्ण-सुधार: "छत्रप्रकाश" के रचयिता जगनिक नहीं "लाल कवि" (एक स्रोत का गलत-संयोजन सुधारा गया), रामचंद्र शुक्ल द्वारा ऐतिहासिक-सत्यता-प्रशंसित**; 19वीं शती ओरछा-महाराज-संरक्षित "मधुकर"+"लोकवार्ता" पत्रिकाएँ
- [x] 25 भाषा ऐप/शब्दकोश (रुझान) → अखिल भारतीय बुंदेलखण्ड साहित्य-संस्कृति परिषद; हाइब्रिड-बोली-रूप ("बुंदेली-प्रभावित मालवी")

**MP के साहित्यकार (26-34) — COMPLETE:**
- [x] 26 माखनलाल चतुर्वेदी → संक्षिप्त-सन्दर्भ (Unit-1 दोहराव)
- [x] 27 सुभद्रा कुमारी चौहान → संक्षिप्त-सन्दर्भ
- [x] 28 हरिशंकर परसाई → संक्षिप्त-सन्दर्भ
- [x] 29 शरद जोशी → संक्षिप्त-सन्दर्भ
- [x] 30 निर्मल वर्मा (MP संदर्भ) → **checklist-सुधार: जन्म शिमला(हिमाचल), MP से कोई सत्यापित-सम्बन्ध नहीं मिला**; User-फ़ीडबैक पर समृद्ध: "नई कहानी" सह-संस्थापक राजेंद्र यादव/मोहन राकेश/कमलेश्वर/भीष्म साहनी/अमरकांत; **1959 प्राग(चेकोस्लोवाकिया) प्रवास, चेक-साहित्य हिंदी-अनुवाद**; ज्ञानपीठ 1999
- [x] 31 रहात इंदौरी → संक्षिप्त-सन्दर्भ
- [x] 32 बशीर बद्र → संक्षिप्त-सन्दर्भ
- [x] 33 दुर्गा सिंह पंवार/कैलाश चंद्र बुंदेली कवि → **कुँवर दुर्ग सिंह (सम्भावित-नाम-साम्य) — 1931-41 ईसुरी-फाग-संकलन; "कैलाश चंद्र" असत्यापित**
- [x] 34 ग्वालियर-इंदौर-भोपाल साहित्यिक संस्थान/पत्रिकाएँ → **MP साहित्य परिषद भोपाल स्थापना 1954; MP हिंदी ग्रंथ अकादमी 56वाँ स्थापना-दिवस(2024-25)→स्थापना ~1968-69; MP साहित्य अकादमी**

**MP सांस्कृतिक-भौगोलिक धरोहर (35-44) — COMPLETE:**
- [x] 35-38 भीमबेटका/सांची/खजुराहो/ओरछा → संक्षिप्त-सन्दर्भ (Unit-1 checklist-03/08 दोहराव)
- [x] 39 मालवा → मालवी-भाषा+माच+मटकी+दाल-बाफला/भुट्टे का कीस/पोहा-जलेबी संश्लेषण
- [x] 40 निमाड़ → नर्मदा-केंद्रित समग्र-पहचान (ओंकारेश्वर+महेश्वर+परिक्रमा-द्वार+संत सिंगाजी+गणगौर)
- [x] 41 महाकौशल → **"महाकौशल" = पूर्व-MP(1950) हिंदी-भाषी जबलपुर-सागर-कोर (मराठी बरार से भिन्न) — पुनः-पुष्टि**; गोंड(बैतूल-छिंदवाड़ा-मंडला-जबलपुर)/बैगा(मंडला-बालाघाट-शहडोल-सीधी) भौगोलिक-विभाजन
- [x] 42 बुंदेलखंड → वीर-रस-प्रधानता का संश्लेषण (राई-नृत्य+आल्हा-खंड+दलपति रायसा/छत्रप्रकाश — साझा योद्धा-सांस्कृतिक-मूल)
- [x] 43 बघेलखंड → **बघेली = MP की एकमात्र "पूर्वी हिंदी" बोली (शेष 3 पश्चिमी-हिंदी/राजस्थानी)** — भाषिक-विशिष्टता
- [x] 44 चंबल → **डकैत/बागी — भिंड-मुरैना की विशिष्ट सामाजिक-सांस्कृतिक-पहचान, गाथा-गीत-संरक्षित**; लोकगीत के 5 प्रकार (संस्कार/गाथा/पर्व/जीविका/जातीय)

**वस्त्र एवं हस्तशिल्प (45-48) — COMPLETE:** 45-47 (चंदेरी/महेश्वरी/बाघ-प्रिंट, Unit-1 दोहराव); **48 (ब्रांड-सहयोग रुझान) → समसामयिक: भारत टैक्स ग्लोबल एक्सपो 2025(बाघ-प्रिंट+गोंड-चित्रकला); सेंट्रल इंडिया फैब्रिक एंड फैशन एक्सपो 2025 भोपाल — ODOP+NIFT/उमंग श्रीधर/प्रतिभा/वर्धमान**

**पर्व एवं मेले (49-53) — COMPLETE:**
- [x] 49 नर्मदा परिक्रमा → **User-फ़ीडबैक पर 2 बार समृद्ध: काशी-यात्रा/मेरु-प्रदक्षिणा समकक्ष-पुण्य; नर्मदा="रेवा", केवल "दर्शन" से पवित्रकारी (अद्वितीय-मान्यता); उद्गम स्कंद पुराण "रेवाखंड"; प्रथम-परिक्रमी ऋषि मार्कंडेय; दक्षिण-तट(जाते)→उत्तर-तट(लौटते) मार्ग-संरचना; चातुर्मास-वर्जित**
- [x] 50 नर्मदा जयंती/महाशिवरात्रि → संक्षिप्त-सन्दर्भ
- [x] 51 खजराना/रालामंडल इंदौर → **खजराना गणेश — 1735 अहिल्याबाई होल्कर, सिंदूर-निर्मित-मूर्ति (विशिष्ट)**; रालामंडल-पृथक-उत्सव असत्यापित
- [x] 52 लोक-धार्मिक समन्वय पीर-देवी → **शिवपुरी-सांवरा पीर बुधन मेला ~250 वर्ष हिंदू-मुस्लिम साझा; नीमच बाबा शहाबुद्दीन औलिया उर्स (फरवरी 4-दिन)**
- [x] 53 कुशवाहा/कुम्हार लोक-मेला → **checklist-नाम असत्यापित**; MP ~1400 मेला-स्थल; सूरजकुंड शिल्प मेला MP थीम-स्टेट

**समकालीन प्रवृत्तियाँ (54-61) — COMPLETE:**
- [x] 54-57 डिजिटल-आर्काइव/फिल्म-डॉक्यूमेंट्री/म्यूज़ियम-डिजिटाइज़ेशन/फेस्टिवलाइज़ेशन → संक्षिप्त-सन्दर्भ (Unit-1 दोहराव); **55 में checklist-07(Unit-1) बिंदु 46 का सुधारित-संस्करण दोहराया (भगोरिया+गोंड-चित्रकला+नर्मदा-परिक्रमा — वास्तविक-3 ICH-धरोहर)**
- [x] 58 शहरी दीवार-भित्ति पब्लिक आर्ट → **इंदौर — म्यूरल/ग्रैफ़िटी/वर्ली-पेंटिंग से सड़क-चारदीवारी-कॉलेज-सार्वजनिक-भवन-शौचालय तक सुसज्जित**
- [x] 59 कच्ची बस्ती/शिल्प ग्राम → पाटनगढ़(डिंडोरी)-मॉडल; **शिल्प-भूगोल-तालिका (इंदौर-उज्जैन-रतलाम-मंदसौर-महेश्वर=लाख; सीहोर=काष्ठ-खिलौने; बैतूल=ढोकरा)**; समसामयिक GIS 2025 भोपाल "कल्चरल विलेज"
- [x] 60 नदी-घाटी बस्तियाँ संस्कृति-भूगोल → नदी-वार बस्ती-तालिका (नर्मदा/चंबल/बेतवा/शिप्रा/ताप्ती); नर्मदा-मानव जीवाश्म-प्रमाण
- [x] 61 शहरी-ग्रामीण सांस्कृतिक आदान-प्रदान → द्वि-दिशीय-प्रवाह-संश्लेषण (ग्रामीण→शहरी कला-प्रवेश बनाम शहरी→ग्रामीण डिज़ाइन-बाज़ार-प्रवाह); भारत भवन=मूल "लोक-आधुनिक सेतु"; GI-टैग=प्रामाणिकता-संरक्षण

**🎉🎉 checklist-फ़ाइल 05 (Unit 10, 61 बिंदु — Unit 10 की सबसे बड़ी फ़ाइल) पूर्ण रूप से समाप्त 🎉🎉** — इस फ़ाइल में स्थापित/पुनः-पुष्ट प्रमुख-सुधार: (1) "चकरी नृत्य" मुख्यतः राजस्थान-हाड़ौती की परंपरा; (2) "खजराना/मालवी गरबा" पृथक-नामित-शैली असत्यापित; (3) कथक-नृत्य में "ग्वालियर घराना" अस्तित्वहीन (केवल हिंदुस्तानी-गायन-विशिष्ट शब्द); (4) "छत्रप्रकाश" के रचयिता जगनिक नहीं लाल कवि; (5) निर्मल वर्मा का MP से कोई सत्यापित-सम्बन्ध नहीं (जन्म शिमला); (6) "दुर्गा सिंह पंवार"/"कैलाश चंद्र"/"रालामंडल-पृथक-उत्सव"/"कुशवाहा-कुम्हार-मेला" असत्यापित पाए गए।

---

## 🎉🎉🎉 MAJOR MILESTONE: सम्पूर्ण Unit 10 (मध्यप्रदेश की जनजातीय विरासत/लोक-संस्कृति) की सभी 5 checklist-फ़ाइलें अब पूर्ण रूप से समाप्त 🎉🎉🎉

`mppsc-syllabus/prelims/unit-10-mp-tribal-heritage-folk-culture/` में कुल **5 checklist-फ़ाइलें** — **सभी अब `mppsc-syllabus/prelims-notes/unit-10-mp-tribal-heritage-folk-culture/` में गहन, तथ्य-सत्यापित नोट्स के साथ पूर्ण**:
- 01-bhaugolik-vistar-samvidhanik-pravdhan (5 बिंदु) ✅
- 02-pramukh-janjatiyan-pvtg-kalyan-karyakram (21 बिंदु) ✅
- 03-janjatiya-sanskriti-riti-riwaj-kala-parv-boli-sahitya (45 बिंदु) ✅
- 04-swatantrata-andolan-yogdan-vyaktitva-sansthan (12 बिंदु) ✅
- 05-mp-lok-sanskriti-sahitya (61 बिंदु) ✅

**कुल = 144 बिंदु/नोट्स, संपूर्ण Unit 10 के लिए।**

**इस सत्र में स्थापित स्थायी कार्यप्रणाली-सुधार (checklist-04 से आरंभ, शेष सभी फ़ाइलों में यथावत लागू):** (1) checklist-फ़ाइल का कोई भी बिंदु — चाहे वह किसी अन्य-Unit की पहले से मौजूद गहन-note का सीधा-दोहराव ही क्यों न हो — कभी भी मात्र संक्षिप्त-पॉइंटर तक सीमित नहीं रखा गया, प्रत्येक में अतिरिक्त-सत्यापित-शोध से नई-गहराई जोड़ी गई; (2) "source must be NCERT or other relevant authenticated book only" — हर बिंदु पर सक्रिय NCERT-जाँच, तथा NCERT-अनुपस्थिति की स्थिति में यह स्पष्ट-टिप्पणी दर्ज करना; (3) checklist के अपने शब्दों में भी कई वास्तविक-त्रुटियाँ/असत्यापित-दावे पकड़े एवं ईमानदारी से सुधारे गए, कभी गढ़े नहीं गए।

**पोस्ट-कम्प्लीशन गुणवत्ता-सुधार-पास (2026-09-06, user-फ़ीडबैक: "degrading quality... not fully covered"):** checklist-फ़ाइल 05 (61-बिंदु) की गति बढ़ने के साथ इसके उत्तरार्ध (बिंदु 35-61) में कई बिंदु पहली-बार में केवल संक्षिप्त-cross-reference-स्टब के रूप में लिखे गए थे, बिना उतने ताज़ा-शोध के जितना फ़ाइल के पूर्वार्ध में हुआ था — user ने इसे सही पकड़ा। **निम्नलिखित 20 बिंदुओं को अतिरिक्त-गहन-शोध से पुनः-समृद्ध किया गया** (सभी में नए, सत्यापित, विशिष्ट-तिथि/नाम/आँकड़े वाले तथ्य जोड़े गए, पुरानी सामग्री हटाई नहीं गई):
- **26 माखनलाल चतुर्वेदी** — पूर्ण-जन्म-मृत्यु-तिथि, "प्रभा"/"कर्मवीर"/"प्रताप" सम्पादन, 1959 सागर-विश्वविद्यालय डी.लिट्, 16-17 जनवरी 1965 खंडवा-सम्मान
- **27 सुभद्रा कुमारी चौहान** — जन्म 16 अगस्त 1904 निहालपुर(इलाहाबाद), 2 काव्य+3 कथा-संग्रह, निधन 15 फरवरी 1948
- **28 हरिशंकर परसाई** — "व्यंग्य को विधा का दर्जा दिलाने वाले प्रथम हिंदी-रचनाकार", 10 निबंध-संग्रहों की पूर्ण-सूची
- **29 शरद जोशी** — "अंधों का हाथी"/"एक था गधा उर्फ़ अलादाद ख़ाँ" (आज भी मंचित), 10 रचनाओं की सूची
- **31 रहात इंदौरी** — निधन का विस्तृत-कालानुक्रम (10-11 अगस्त 2020, कोविड-पश्चात हृदयाघात)
- **32 बशीर बद्र** — निधन 28 मई 2026 का विस्तृत-विवरण (डिमेंशिया, ~20 लोग जनाज़े में)
- **35 भीमबेटका** — MP-पर्यटन 2023 आँकड़े (11.21cr बनाम 2022 3.41cr), विस्तृत संरक्षण-चुनौतियाँ, 21-गाँव सामुदायिक-अध्ययन
- **36 सांची** — सर जॉन मार्शल 1912-1919 पुनरुद्धार, उज्जैन "वैश्य टेकरी" में सांची से बड़े सम्भावित-स्तूप (समसामयिक)
- **37 खजुराहो** — 51वाँ नृत्य-समारोह (20-26 फरवरी 2025) पूर्ण-विवरण, "दिल खोल के घूमो" महिला-सुरक्षित-पर्यटन-मैराथन
- **38 ओरछा** — अक्टूबर 2024 UNESCO-डोज़ियर-स्वीकृति (2027-28 चक्र), "भारत का प्रथम राज्य-संरक्षित UNESCO-दावेदार" बनने की सम्भावना
- **39 मालवा** — मालवा उत्सव 2025 (6-12 मई, इंदौर लालबाग) + विक्रमोत्सव 2025 (उज्जैन)
- **42 बुंदेलखंड** — 2024-25 पृथक-बुंदेलखंड-राज्य-आंदोलन (राजा बुंदेला/रमेश चंद्र दुबे, 50+ प्रदर्शन)
- **45 चंदेरी** — 1930s जापानी-रेशम-समावेश, 2017 एशिया का प्रथम हैंडलूम-पार्क, "CHANDERIYAAN" डिजिटल-कार्यक्रम
- **46 महेश्वरी** — महेश्वर 5वीं शताब्दी से हथकरघा-केंद्र (अहिल्याबाई का योगदान पुनरुद्धार मात्र), अंसारी-बुनकर-परिवार 3-पीढ़ी
- **47 बाघ प्रिंट** — यूसुफ़ खत्री "शिल्प गुरु"+2 राष्ट्रीय+7 UNESCO-पुरस्कार, राष्ट्रपति मुर्मू 'एट होम' रिसेप्शन में बाघ-प्रिंट, MP कुल 27 GI-टैग
- **49 नर्मदा परिक्रमा** — काशी-यात्रा/मेरु-प्रदक्षिणा समकक्ष, "केवल दर्शन से पवित्रकारी" अद्वितीय-मान्यता, दक्षिण-तट/उत्तर-तट मार्ग-संरचना, चातुर्मास-वर्जन
- **50 महाशिवरात्रि** — शिव-नवरात्र-महोत्सव विवरण, 10 लाख+ श्रद्धालु, विशेष दिन-कालीन भस्म-आरती
- **54 डिजिटल-आर्काइव** — Sahapedia का छत्तीसगढ़-मॉडल (तुलनात्मक-सन्दर्भ)
- **56 म्यूज़ियम-डिजिटाइज़ेशन** — खजुराहो 2024 नाइट-टूर, सांची नई मौर्य-दीर्घा
- **60 नदी-घाटी-बस्तियाँ** — नवदाटोली का विस्तृत पुरातात्विक बस्ती-पैटर्न (सांकलिया-उत्खनन)
- **61 शहरी-ग्रामीण आदान-प्रदान** — शहरीकरण से आदिवासी-कला की "मौलिकता-क्षरण" शोध-तथ्य (रेखा धीमान), त्रिविध-कारीगर-संकट (बाज़ार-प्रतिस्पर्धा+बिचौलिया+युवा-पलायन)

**लेखा:** checklist-04(Unit-10) में स्थापित नियम ("कोई भी दोहराव-बिंदु मात्र संक्षिप्त-पॉइंटर नहीं") को checklist-05 के पूर्वार्ध (1-34 में से अधिकांश) में सही लागू किया गया था, किंतु उत्तरार्ध (35-61) में गति के दबाव में यह ढीला पड़ गया — अब यह सुधार-पास इसे पुनः-सुसंगत बनाता है। **भावी-सभी checklist-फ़ाइलों में यह मानक शुरू-से-अंत तक एक-समान बनाए रखा जाना है, गति चाहे जो भी हो।**

## Unit 9 — ict — prelims-notes (शुरू)

उपयोगकर्ता ने Unit 10 के पश्चात Unit 9 (सूचना एवं संचार प्रौद्योगिकी) पर आगे बढ़ने का निर्देश दिया। `mppsc-syllabus/prelims/unit-09-ict/` में **5 checklist-फ़ाइलें**:
- 01-computer-adharbhoot-gyan (11 बिंदु — कम्प्यूटिंग-आधार से बैकअप/DR तक)
- 02-electronics-ict
- 03-robotics-ai-cyber-suraksha
- 04-e-governance
- 05-internet-social-networking

**फ़ॉर्मेट-निर्णय (AskUserQuestion द्वारा शुरुआत में तय):** उपयोगकर्ता ने **"Lean fact/formula sheet (mpsi file-08 Mechanical Engineering जैसा)"** चुना — GS-विषयों की 800+-पंक्ति Mains-answer-शैली नहीं, अपितु mpsi-syllabus file-08 (मैकेनिकल इंजीनियरिंग)/file-04 (संख्यात्मक अभियोग्यता) जैसी सघन तथ्य/फ़ॉर्मूला-शीट — क्योंकि कंप्यूटर-विज्ञान-मूल-सिद्धांत स्थिर/सार्वभौमिक-तकनीकी-ज्ञान हैं (करेंट-अफेयर्स-निर्भर नहीं), अतः भारी live-web-सत्यापन आवश्यक नहीं — NCERT कक्षा-XI/XII कंप्यूटर-विज्ञान पाठ्यक्रम + मानक/स्थिर CS-अवधारणाओं के विरुद्ध सत्यापन पर्याप्त, ठीक जैसे mpsi file-08/file-04 में हुआ था। **उपयोगकर्ता ने मध्य-टर्न स्पष्ट किया** — "lean" का अर्थ उथला नहीं: "make sure you are covering in depth I dont want to loss even single number from this unit" — प्रत्येक परीक्षा-योग्य उप-तथ्य/फ़ॉर्मूला/तुलना अवश्य कवर हो, बिना कृत्रिम-पैडिंग के।

Notes जाएंगे `mppsc-syllabus/prelims-notes/unit-09-ict/<NN-checklist-slug>/`।

### Checklist file 01 — `01-computer-adharbhoot-gyan.md` (11 points) — COMPLETE

- [x] 1 कम्प्यूटिंग — बिट/बाइट/बाइनरी-हेक्साडेसिमल — आधार → `01-computing-bit-byte-binary-hexadecimal-aadhar.md` (bit/byte/nibble+पूर्ण KB-YB इकाई-शृंखला; **1000-बनाम-1024 KB MCQ-ट्रैप [KiB/MiB IEC-प्रीफ़िक्स]**; सभी अंतर-रूपांतरण दिशाएँ दशमलव/बाइनरी/ऑक्टल/हेक्स सहित worked-उदाहरण; बाइनरी-अंकगणित/1's-2's-कॉम्प्लीमेंट; ASCII[7-bit/128]/Unicode UTF-8/UTF-16)
- [x] 2 CPU आर्किटेक्चर — ALU/कंट्रोल यूनिट/रजिस्टर — आधार → `02-cpu-architecture-alu-control-unit-register-aadhar.md` (ALU/CU/रजिस्टर 3-घटक; रजिस्टर-तालिका PC/IR/MAR/MDR/AC; फ़ेच-डिकोड-एक्ज़ीक्यूट चक्र; क्लॉक-स्पीड Hz/GHz/MIPS; बस-3-प्रकार डेटा/एड्रेस/कंट्रोल; मल्टी-कोर)
- [x] 3 मेमोरी — SRAM/DRAM/फ्लैश — पदानुक्रम → `03-memory-sram-dram-flash-hierarchy.md` (पदानुक्रम रजिस्टर>कैश-L1-L2-L3>RAM>SSD/HDD; SRAM-बनाम-DRAM पूर्ण-तुलनात्मक-तालिका; ROM-प्रकार PROM/EPROM/EEPROM; फ्लैश=EEPROM-उन्नत-रूप, NAND-बनाम-NOR; वर्चुअल-मेमोरी)
- [x] 4 ऑपरेटिंग सिस्टम — प्रोसेस/थ्रेड/शेड्यूलिंग → `04-operating-system-process-thread-scheduling.md` (5-प्रोसेस-अवस्थाएँ New→Ready→Running→Waiting→Terminated+PCB; थ्रेड-बनाम-प्रोसेस; शेड्यूलिंग-एल्गोरिदम-तालिका FCFS/SJF/RR/Priority/SRTF; प्रीएम्प्टिव-बनाम-नॉन; डेडलॉक-4-Coffman-शर्तें; OS-प्रकार)
- [x] 5 वर्चुअलाइजेशन — हाइपरवाइज़र — Type-1/Type-2 → `05-virtualization-hypervisor-type1-type2.md` (Type-1-बेयर-मेटल-बनाम-Type-2-होस्टेड पूर्ण-तुलनात्मक-तालिका+उदाहरण ESXi/Hyper-V/Xen बनाम VirtualBox/VMware-Workstation; वर्चुअलाइजेशन-4-प्रकार; कंटेनर[Docker]-बनाम-VM कर्नेल-साझाकरण-भेद)
- [x] 6 डेटाबेस — RDBMS/NoSQL — अंतर → `06-database-rdbms-nosql-antar.md` (RDBMS-तालिका/प्राइमरी-फ़ॉरेन-की/नॉर्मलाइज़ेशन/ACID; NoSQL-4-प्रकार डॉक्यूमेंट/की-वैल्यू/कॉलम/ग्राफ़ [MongoDB/Redis/Cassandra/Neo4j]; RDBMS-बनाम-NoSQL पूर्ण-तुलनात्मक-तालिका)
- [x] 7 SQL — SELECT/JOIN/एग्रीगेशन — आधार → `07-sql-select-join-aggregation-adhar.md` (DDL/DML/DCL/TCL-4-श्रेणियाँ; क्लॉज़-क्रम SELECT→FROM→WHERE→GROUP BY→HAVING→ORDER BY; WHERE-बनाम-HAVING MCQ-ट्रैप; JOIN-4-प्रकार INNER/LEFT/RIGHT/FULL तालिका; एग्रीगेट-फ़ंक्शन COUNT/SUM/AVG/MAX/MIN)
- [x] 8 बिग डेटा — 4V/डिस्ट्रिब्यूटेड सिस्टम → `08-big-data-4vs-distributed-systems.md` (4V's Volume/Velocity/Variety/Veracity तालिका+5वाँ-V Value; डिस्ट्रिब्यूटेड-सिस्टम-अवधारणा; Hadoop[HDFS+MapReduce]/Spark)
- [x] 9 डेटा गुणवत्ता/वैधीकरण — गवर्नेंस → `09-data-quality-validation-governance.md` (डेटा-गुणवत्ता-6-आयाम सटीकता/पूर्णता/संगति/समयबद्धता/विशिष्टता/वैधता; वैधीकरण-तकनीकें रेंज/टाइप/फ़ॉर्मेट/प्रेज़ेंस/कंसिस्टेंसी-चेक; डेटा-गवर्नेंस-घटक+डेटा-स्टीवार्ड; मेटाडेटा/MDM)
- [x] 10 एल्गोरिदम — समय/स्थान जटिलता — बिग-O नोटेशन → `10-algorithm-time-space-complexity-big-o.md` (एल्गोरिदम-विशेषताएँ; समय/स्थान-जटिलता; बिग-O-तालिका O(1)/O(log n)/O(n)/O(n log n)/O(n²)/O(2ⁿ)+उदाहरण; क्रम-वृद्धि; बिग-Ω/बिग-θ; खोज-छँटाई-एल्गोरिदम-जटिलता-सारांश)
- [x] 11 बैकअप/डिज़ास्टर रिकवरी — RPO/RTO अवधारणा → `11-backup-disaster-recovery-rpo-rto.md` (बैकअप-3-प्रकार पूर्ण/वृद्धिशील/डिफ़रेंशियल तालिका; DR-अवधारणा; RPO-बनाम-RTO पूर्ण-तुलनात्मक-तालिका+स्मरण-सूत्र [डेटा-बनाम-समय]; 3-2-1-बैकअप-नियम)

**🎉 checklist-फ़ाइल 01 (Unit 9, 11 बिंदु) पूर्ण रूप से समाप्त।**

**उपयोगकर्ता ने मध्य-सत्र पुनः-बल दिया:** "maintan the quality of notes, and cover all the facts of point" — इसके पश्चात फ़ाइल 02 के प्रारम्भिक-3 बिंदुओं (5Gi-मानक, सैटेलाइट-स्पेक्ट्रम-प्रशासनिक-आबंटन-विवाद, भारत की 3G/2G-ऐतिहासिक-तिथियाँ) को अतिरिक्त-वेब-खोज से सक्रिय-रूप से समृद्ध किया गया — केवल संक्षिप्त-तकनीकी-परिभाषा तक सीमित न रहकर, प्रत्येक-बिंदु में कम-से-कम 1-2 अतिरिक्त वेब-सत्यापित समसामयिक/ऐतिहासिक-तथ्य जोड़े गए, यह मानक शेष-सभी-24-बिंदुओं में बनाए रखा गया।

### Checklist file 02 — `02-electronics-ict.md` (24 points) — COMPLETE

8 उप-खंड: दूरसंचार/मोबाइल-नेटवर्क (1-4), नेविगेशन/भू-स्थानिक (5-8), क्लाउड कम्प्यूटिंग (9-13), IoT (14-18), सेमीकंडक्टर (19), डिजिटल भुगतान (20-21), डिजिटल स्वास्थ्य (22), डिजिटल पब्लिक इंफ्रास्ट्रक्चर (23-24)। "(रुझान)" चिह्नित-बिंदु समसामयिक/भारत-विशिष्ट होने के कारण WebSearch से सक्रिय-सत्यापित; शुद्ध-तकनीकी-बिंदु NCERT/मानक-CS-संदर्भ से।

**दूरसंचार/मोबाइल-नेटवर्क (1-4):**
- [x] 1 5G आर्किटेक्चर — RAN/कोर/स्लाइसिंग → `01-5g-architecture-ran-core-slicing.md` (RAN[CU/DU/RU]+कोर[SBA]; नेटवर्क-स्लाइसिंग; eMBB/URLLC/mMTC; भारत 1 अक्टूबर 2022 शुभारंभ+Jio-SA-बनाम-Airtel-NSA[2026 SA-संक्रमण]; **5Gi — भारत का TSDSI/ITU-स्वीकृत LMLC-मानक, बाद में 3GPP Rel-17 में विलय**)
- [x] 2 स्पेक्ट्रम — लाइसेंस्ड/अनलाइसेंस्ड/शेयर्ड → `02-spectrum-licensed-unlicensed-shared.md` (3-श्रेणी-तालिका; 2G-घोटाला 2008→SC-2012; 5G-नीलामी जुलाई-अगस्त 2022; **सैटेलाइट-स्पेक्ट्रम-विवाद — दूरसंचार अधिनियम 2023 अंतर्गत प्रशासनिक-आबंटन[नीलामी नहीं], TRAI 4%-AGR-शुल्क-अनुशंसा, Jio-नीलामी-पक्ष बनाम Starlink/Airtel-प्रशासनिक-पक्ष**)
- [x] 3 सेल्युलर विकास — 2G→5G → `03-cellular-evolution-2g-se-5g-mukhya-visheshtayen.md` (पीढ़ी-तुलनात्मक-तालिका; **भारत 1G:31जुलाई1995[कोलकाता]; 3G:MTNL 11दिसंबर2008[प्रथम]→BSNL फरवरी2009→निजी-कम्पनियाँ सितंबर2010 — सरकारी-निजी 2-वर्ष-अंतराल MCQ-ट्रैप**; Tata Indicom जनवरी2005 CDMA-अग्रणी; VoLTE)
- [x] 4 5G प्राइवेट नेटवर्क — उद्योग 4.0 (रुझान) → `04-5g-private-network-udyog-4-0-rujhan.md` (CNPN-2-मार्ग; **Telecommunications[Authorisation for Captive Telecommunication Services] Rules 2025 — ₹100cr नेट-वर्थ पात्रता-शर्त**; टेलिकॉम-बनाम-उद्यम नीति-विवाद)

**नेविगेशन/भू-स्थानिक तकनीक (5-8):**
- [x] 5 GPS/GNSS/NavIC — पोजिशनिंग अवधारणा → `05-gps-gnss-navic-positioning-avdharna.md` (GNSS-छत्री/GPS-अमेरिका; त्रिकोणासन; NavIC[पूर्व-IRNSS, 7-उपग्रह-मूल-डिज़ाइन, SPS/RS]; GAGAN-SBAS; **अत्यंत-समसामयिक-संकट — मार्च 2026 तक सक्रिय-उपग्रह घटकर मात्र 3[न्यूनतम-4-से-कम], NVS-02 प्रणोदन-विफलता से कक्षा-असफल, NVS-03[स्वदेशी-iRAFS-घड़ी]/04/05 वर्ष 2026-अंत प्रक्षेपण-योजना**)
- [x] 6 रिमोट सेंसिंग — रेज़ोल्यूशन/बैंड → `06-remote-sensing-resolution-band.md` (सक्रिय/निष्क्रिय; 4-रेज़ोल्यूशन[स्थानिक/वर्णक्रमीय/रेडियोमेट्रिक/कालिक]; NIR/NDVI; भारत IRS/Cartosat/RISAT)
- [x] 7 GIS — डेटा/प्रोजेक्शन/विश्लेषण → `07-gis-data-projection-vishleshan.md` (वेक्टर-बनाम-रैस्टर; प्रोजेक्शन-3-प्रकार[समक्षेत्र/यथाकृतिक-मर्केटर/यथादूरिक]+UTM; बफ़र/ओवरले/नेटवर्क-विश्लेषण)
- [x] 8 GIS-आधारित योजना — गति शक्ति → `08-gis-aadharit-yojana-gati-shakti.md` (13 अक्टूबर 2021 शुभारंभ, BISAG-N विकसित, साइलो-समाप्ति-उद्देश्य; **समसामयिक — बजट 2026-27 तक ~1700+ डेटा-परतें/57 मंत्रालय; फ़रवरी 2026 तक 352 परियोजना-मूल्यांकन/₹16.10 लाख करोड़**; 6-स्तम्भ)

**क्लाउड कम्प्यूटिंग (9-13):**
- [x] 9 क्लाउड मॉडल — IaaS/PaaS/SaaS — अंतर → `09-cloud-model-iaas-paas-saas-antar.md` (3-मॉडल-तुलनात्मक-तालिका+उदाहरण; उपमा-स्मरण-सूत्र)
- [x] 10 डिप्लॉयमेंट — पब्लिक/प्राइवेट/हाइब्रिड/मल्टी-क्लाउड → `10-cloud-deployment-public-private-hybrid-multicloud.md` (4-मॉडल-तालिका; हाइब्रिड-बनाम-मल्टी-क्लाउड-भेद; **भारत — "MeghRaj/GI Cloud" राष्ट्रीय-नीति, NIC प्राथमिक-प्रदाता**)
- [x] 11 कंटेनर — Docker/Kubernetes — आधार → `11-container-docker-kubernetes-adhar.md` (कंटेनर-पुनर्स्मरण[checklist-01/बिंदु-5]; Docker[Image/Dockerfile/Hub]; Kubernetes[Pod/Node/Cluster, स्व-उपचार]; Docker-बनाना-बनाम-K8s-प्रबंधित MCQ-ट्रैप)
- [x] 12 क्लाउड सुरक्षा — साझा उत्तरदायित्व मॉडल → `12-cloud-suraksha-sajha-uttardayitva-model.md` ("Security OF"-प्रदाता-बनाम-"Security IN"-ग्राहक; IaaS/PaaS/SaaS-अनुसार-उत्तरदायित्व-तालिका; अधिकांश-उल्लंघन ग़लत-कॉन्फ़िगरेशन-से)
- [x] 13 क्लाउड-नेटिव/कंटेनर — DevOps संस्कृति (रुझान) → `13-cloud-native-container-devops-sanskriti-rujhan.md` (CI/CD; माइक्रोसर्विसेज़-बनाम-मोनोलिथिक; **MeghRaj — 2015-16:342→2023-24:1730[~400% वृद्धि], कुल 2170+; e-Hospital-स्थानांतरण ₹12cr-बचत**; DevSecOps)

**IoT (14-18):**
- [x] 14 IoT — सेंसर/एक्चुएटर/माइक्रोकंट्रोलर — स्टैक → `14-iot-sensor-actuator-microcontroller-stack.md` (4-घटक-तालिका; माइक्रोकंट्रोलर-बनाम-माइक्रोप्रोसेसर; 3-स्तरीय-वास्तुकला)
- [x] 15 प्रोटोकॉल — MQTT/CoAP/HTTP — अंतर → `15-protocol-mqtt-coap-http-antar.md` (3-प्रोटोकॉल-तुलनात्मक-तालिका; पब्लिश-सब्सक्राइब-मॉडल+QoS-3-स्तर; CoAP-REST-जैसा-UDP-आधारित)
- [x] 16 एज बनाम क्लाउड — लेटेंसी/गोपनीयता → `16-edge-vs-cloud-latency-gopniyata.md` (तुलनात्मक-तालिका; स्वायत्त-वाहन-उदाहरण; एज-क्लाउड-हाइब्रिड)
- [x] 17 एज/IoT — रीयल-टाइम एनालिटिक्स (रुझान) → `17-edge-iot-real-time-analytics-rujhan.md` (**भारत — फ़रवरी 2025 तक 99.6% ज़िले 5G-कवर्ड/4.69 लाख 5G-BTS; एज-बाज़ार $1.4bn[2025]→$8.3bn[2032]; 450+ एज-डेटा-सेंटर[2026]; टाटा स्टील प्रेडिक्टिव-मेंटेनेंस-उदाहरण**)
- [x] 18 स्मार्ट सिटी — सेंसर/कमांड सेंटर → `18-smart-city-sensor-command-center.md` (सेंसर-प्रकार-सूची; ICCC-केंद्रीय-भूमिका; भोपाल/इंदौर-ICCC[checklist-05/Unit-1/बिंदु-15 से क्रॉस-रेफ]; पूर्ण-डेटा-प्रवाह-संश्लेषण)

**सेमीकंडक्टर (19):**
- [x] 19 सेमीकंडक्टर इकोसिस्टम — डिज़ाइन/ATMP (रुझान) → `19-semiconductor-ecosystem-design-atmp-rujhan.md` (3-चरण-मूल्य-शृंखला[डिज़ाइन/फ़ैब/ATMP-OSAT]; ISM-MeitY-नोडल-एजेंसी, 10-परियोजना/₹18,000cr-वितरित; **Tata-PSMC Dholera फ्रंट-एंड-फ़ैब $10bn/2026-अंत-लक्ष्य; Tata-जगीरोड[असम]/Micron-साणंद/CG Power-साणंद परिचालन**)

**डिजिटल भुगतान तकनीक (20-21):**
- [x] 20 UPI/QR — संपर्करहित भुगतान — वित्तीय समावेशन (रुझान) → `20-upi-qr-samparkrahit-bhugtan-vittiya-samaveshan-rujhan.md` (11अप्रैल2016-शुभारंभ; **FY2025-26 — 24,162cr+-लेन-देन/₹314-लाख-करोड़; भारत की 75-85%-खुदरा-डिजिटल-भुगतान; वैश्विक-49%**; UPI-123PAY[फ़ीचर-फ़ोन]/UPI-Lite[₹500-सीमा]/UPI-Lite-X[वास्तविक-NFC-ऑफ़लाइन]; अंतरराष्ट्रीय-9-देश)
- [x] 21 ONDC/OCEN — डिजिटल मार्केटप्लेस (रुझान) → `21-ondc-ocen-digital-marketplace-rujhan.md` (29अप्रैल2022-DPIIT-शुभारंभ; **5-पायलट-शहर सम्मिलित भोपाल[MP] — उच्च-प्राथमिकता MP-तथ्य**; अनबंडलिंग-सिद्धांत; OCEN-AA+DigiLocker+eNACH+eSign-श्रृंखला, ~6-मिनट-ऋण-दावा)

**डिजिटल स्वास्थ्य तकनीक (22):**
- [x] 22 डिजिटल स्वास्थ्य — ABDM/EMR — एकीकरण (रुझान) → `22-digital-swasthya-abdm-emr-ekikaran-rujhan.md` (27सितंबर2021-शुभारंभ; **ABHA-वृद्धि-तालिका 2021:14.7cr→...→जुलाई2026:93.95cr+**; राज्य-अग्रणी UP>राजस्थान/महाराष्ट्र>बिहार; HPR/HFR/UHI)

**डिजिटल पब्लिक इंफ्रास्ट्रक्चर (23-24):**
- [x] 23 डिजिटल पब्लिक इंफ्रास्ट्रक्चर — स्केल/इंटरऑपरेबिलिटी (रुझान) → `23-digital-public-infrastructure-scale-interoperability-rujhan.md` (इंडिया-स्टैक-3-परत[पहचान-आधार/भुगतान-UPI/डेटा-DigiLocker-API-सेतु-UMANG-AA]; आधार 144cr+; **G20-2023-प्रेरित वैश्विक-विस्तार — जुलाई 2026 तक 25-देश-पायलट/24-देश-समझौता; फ़्रांस/सिंगापुर/ओमान/ऑस्ट्रेलिया**)
- [x] 24 AI-ऐज़-ए-सर्विस — लोकतंत्रीकरण (रुझान) → `24-ai-as-a-service-loktantrikaran-rujhan.md` (**IndiaAI मिशन ₹10,300cr+; फ़रवरी 2026 तक 38,000 GPU[+20,000 योजनाबद्ध]@₹65/घंटा**; भाषिणी — जुलाई2022-शुभारंभ/20+भाषा/350+AI-मॉडल/SabhaSaar-2.5लाख+पंचायत/15.6cr+बातचीत)

**🎉 checklist-फ़ाइल 02 (Unit 9, 24 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 03 — `03-robotics-ai-cyber-suraksha.md` (19 points) — COMPLETE

3 उप-खंड: कृत्रिम बुद्धिमत्ता/AI (1-3), रोबोटिक्स (4-6), साइबर सुरक्षा (7-19)। **उपयोगकर्ता ने बिंदु-13 (घटना-प्रतिक्रिया) खुला होने पर मध्य-टर्न पुनः-बल दिया: "you must need to cover facts that must help to crack mppsc and mpsi"** — इसके पश्चात बिंदु-13 को MP-राज्य-विशिष्ट साइबर-अवसंरचना-तथ्यों (State Cyber Police HQ, 52-ज़िला साइबर-सेल, e-Zero FIR 25दिसंबर2025/1,413 दर्ज-31मई2026तक, शिकायत-वृद्धि-आँकड़े) से सक्रिय-रूप से समृद्ध किया गया — यह पैटर्न (शुद्ध-तकनीकी-अवधारणा के साथ-साथ, जहाँ भी सम्भव हो, India/MP-विशिष्ट-नियामक/संस्थागत-तथ्य जोड़ना) शेष-बिंदुओं में भी लागू रहा जहाँ प्रासंगिक (बिंदु 3/14/17/18 पहले-से MeitY/UIDAI/RBI-सन्दर्भ सहित; बिंदु 19 में MPSDC-भोपाल तथ्य जोड़ा गया)।

**कृत्रिम बुद्धिमत्ता/AI (1-3):**
- [x] 1 AI बेसिक्स — सुपरवाइज्ड/अनसुपरवाइज्ड/रीइन्फोर्समेंट लर्निंग → `01-ai-basics-supervised-unsupervised-reinforcement-learning.md` (AI⊃ML⊃DL पदानुक्रम; 3-प्रकार-तुलनात्मक-तालिका; वर्गीकरण/प्रतिगमन; RL-शब्दावली एजेंट/वातावरण/पुरस्कार)
- [x] 2 मॉडल गुणवत्ता — ओवरफिटिंग/जनरलाइज़ेशन → `02-model-gunwatta-overfitting-generalization.md` (ओवरफिटिंग-बनाम-अंडरफिटिंग-तालिका; रोकथाम-तकनीकें रेगुलराइज़ेशन/क्रॉस-वैलिडेशन/ड्रॉपआउट; ट्रेन-वैलिडेशन-टेस्ट-विभाजन)
- [x] 3 उत्तरदायी AI — पूर्वाग्रह/निष्पक्षता/व्याख्येयता → `03-uttardayi-ai-responsible-ai-bias-nishpakshta-vyakhyeyata.md` (GIGO-सिद्धांत; ब्लैक-बॉक्स-समस्या; **India AI Governance Guidelines — 5 नवंबर 2025 MeitY, RBI-FREE-AI-रिपोर्ट-अनुकूलित 7-सूत्र, AI Governance Group+AISI**)

**रोबोटिक्स (4-6):**
- [x] 4 रोबोट के प्रकार — औद्योगिक/सेवा/स्वायत्त → `04-robot-ke-prakar-audyogik-seva-svayatt-robot.md` (3-प्रकार-तालिका; कार्य-क्षेत्र-बनाम-स्वायत्तता-स्तर द्वि-आयामी-वर्गीकरण)
- [x] 5 सेंसर/एक्चुएटर — रोबोटिक्स में भूमिका → `05-sensor-actuator-robotics-mein-bhumika.md` (धारणा-क्रिया-चक्र[checklist-फ़ाइल-02/बिंदु-14 से सम्बद्ध]; सेंसर-6-प्रकार; एक्चुएटर-4-प्रकार; क्लोज़्ड-बनाम-ओपन-लूप)
- [x] 6 रोबोटिक्स के शासन/उद्योग में अनुप्रयोग → `06-robotics-ke-shasan-udyog-mein-anuprayog.md` (Draft National Strategy on Robotics MeitY-2023, 4-क्षेत्र, CAMRAS-ARTPARK-IISc-2800-प्रशिक्षण; **भारत का औद्योगिक-रोबोट-बाज़ार $2.14bn/17%-वृद्धि[2026]/विश्व-6वाँ-स्थान**; कृषि-अनुप्रयोग; घटक-आयात-निर्भरता-चुनौती)

**साइबर सुरक्षा (7-19):**
- [x] 7 खतरों के प्रकार — मैलवेयर/फिशिंग/रैनसमवेयर → `07-khatron-ke-prakar-malware-phishing-ransomware.md` (मैलवेयर-5-उप-प्रकार तालिका; फिशिंग-उप-प्रकार स्पीयर/व्हेलिंग/स्मिशिंग/विशिंग; DDoS/ज़ीरो-डे/MITM)
- [x] 8 प्रमाणीकरण/प्राधिकरण — MFA/SSO → `08-pramanikaran-pradhikaran-authn-authz-mfa-sso.md` (AuthN-बनाम-AuthZ-क्रम; 3-प्रमाणीकरण-कारक; MFA/2FA; SSO-लाभ-जोखिम; RBAC)
- [x] 9 क्रिप्टोग्राफी — सममित/असममित/हैश → `09-cryptography-symmetric-asymmetric-hash.md` (सममित[AES/DES]-बनाम-असममित[RSA/ECC]-तालिका; HTTPS-हाइब्रिड-प्रयोग; हैशिंग-एक-दिशीय[SHA-256/MD5], एन्क्रिप्शन-बनाम-हैशिंग MCQ-ट्रैप)
- [x] 10 PKI/डिजिटल हस्ताक्षर/प्रमाणपत्र → `10-pki-digital-hastakshar-pramanpatra.md` (डिजिटल-हस्ताक्षर-प्रामाणिकता+अखंडता+अस्वीकृति-निषेध; X.509; PKI-घटक CA/RA/CRL; **भारत — IT Act 2000, CCA-MeitY-अंतर्गत नियामक**)
- [x] 11 नेटवर्क सुरक्षा — IDS/IPS/VPN → `11-network-suraksha-ids-ips-vpn.md` (IDS[passive-चेतावनी]-बनाम-IPS[active-अवरोधन] MCQ-ट्रैप; VPN-एन्क्रिप्टेड-टनल; नेटवर्क-सेगमेंटेशन)
- [x] 12 एप्लिकेशन सुरक्षा — OWASP टॉप-10 → `12-application-suraksha-owasp-top-10.md` (OWASP-टॉप-10(2021)-पूर्ण-सूची A01-A10; SQL-Injection-विस्तृत+पैरामीटराइज़्ड-क्वेरी-समाधान)
- [x] 13 घटना प्रतिक्रिया — पहचान/नियंत्रण/पुनर्प्राप्ति → `13-ghatna-pratikriya-incident-response-pehchan-niyantran-punarprapti.md` (NIST-6-चरण-जीवनचक्र; CERT-In-6-घंटे-नियम+1930-हेल्पलाइन+I4C; **MP-गहन — State Cyber Police HQ/52-ज़िला-साइबर-सेल, e-Zero FIR[25दिसंबर2025 शुभारंभ/1,413 दर्ज-31मई2026तक], शिकायत-2021-25-में-~5गुना-वृद्धि/~80%-वित्तीय-धोखाधड़ी — user-फ़ीडबैक पर समृद्ध**)
- [x] 14 गोपनीयता — डेटा न्यूनीकरण/सहमति/अनामीकरण → `14-gopniyata-data-nyunikaran-sahmati-anamikaran.md` (3-सिद्धांत+छद्मीकरण-भेद; डेटा-प्रिंसिपल-बनाम-फ़िड्यूशियरी; **DPDP अधिनियम 2023+नियम 2025[13नवंबर2025 अधिसूचित]+DPBI-गठन+₹250cr-अधिकतम-दंड**)
- [x] 15 ज़ीरो-ट्रस्ट सुरक्षा — पहचान-केंद्रित (रुझान) → `15-zero-trust-suraksha-pehchan-kendrit-rujhan.md` ("Never Trust Always Verify"+assume-breach; 4-आयाम-सत्यापन; **भारत — CERT-In-6घंटे-नियम अप्रत्यक्ष-चालक**; वैश्विक $48.43bn[2026]→$102.01bn[2031], 61%-अपनाव)
- [x] 16 प्राइवेसी-बाय-डिज़ाइन — डेटा संरक्षण (रुझान) → `16-privacy-by-design-data-sanrakshan-rujhan.md` (कैवुकियन-7-सिद्धांत पूर्ण-सूची; **DPDP-अनुरूप किंतु कानूनी-रूप-से-अनिवार्य-नहीं — सूक्ष्म-MCQ-भेद**; NeGD-सरकारी-तकनीक-क्रियान्वयन)
- [x] 17 डिजिटल पहचान — आधार ऑफलाइन/KUA → `17-digital-pehchan-aadhaar-offline-kua.md` (AUA/Sub-AUA/KUA-भेद-तालिका; **UIDAI जनवरी-2026-हैंडबुक — 4-ऑफ़लाइन-सत्यापन-प्रकार Secure-QR/पेपरलेस-XML/e-Aadhaar-PDF/W3C-Verifiable-Credentials**; VID; परिपत्र 2/2025+1/2026)
- [x] 18 भुगतान सुरक्षा — टोकनाइज़ेशन/3-DS → `18-bhugtan-suraksha-tokenization-3ds.md` (टोकनाइज़ेशन-कार्यप्रणाली; **RBI-समयरेखा 30जून2022-डेटा-प्रतिबंध→1अक्टूबर2022-अनिवार्य**; **अत्यंत-समसामयिक — RBI 2FA-नया-अधिदेश 1अप्रैल2026-प्रभावी, गतिशील-लेन-देन-विशिष्ट-प्रमाणीकरण-आवश्यकता**)
- [x] 19 ISMS — ISO 27001 — जोखिम/नियंत्रण → `19-isms-iso-27001-jokhim-niyantran.md` (ISO/IEC 27001:2022; जोखिम-आधारित-दृष्टिकोण-चक्र; Annex-A-नियंत्रण; PDCA-चक्र; **MP — MPSDC-भोपाल Tier-III-समकक्ष, Go-Live-पूर्व Security-Audit-Certificate-अनिवार्य**)

**🎉 checklist-फ़ाइल 03 (Unit 9, 19 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 04 — `04-e-governance.md` (12 points) — COMPLETE

4 उप-खंड: डिजिटल पब्लिक इंफ्रास्ट्रक्चर/राष्ट्रीय (1-3), स्वास्थ्य/सामाजिक ई-गवर्नेंस (4), **MP-विशिष्ट ई-गवर्नेंस (5-10, इस फ़ाइल का सर्वाधिक-मूल्यवान/अद्वितीय-भाग — 6 समर्पित MP-राज्य-पोर्टल/पहल)**, अतिरिक्त-आवश्यक-टॉपिक (11-12)। बिंदु 1-3/11-12 का checklist-02/03(Unit-9)-सामग्री से क्रॉस-रेफ, दोहराव-न्यूनतम रखते हुए नई-गहराई जोड़ी गई (checklist-04/Unit-10 में स्थापित मानक अनुसार)।

**डिजिटल पब्लिक इंफ्रास्ट्रक्चर/राष्ट्रीय (1-3):**
- [x] 1 DPI — आधार/UPI/ABDM/ONDC — इंटरऑपरेबिलिटी → `01-dpi-aadhaar-upi-abdm-ondc-interoperability.md` (checklist-02/बिंदु-23 का पूरक; इंटरऑपरेबिलिटी-केंद्रित-फ़ोकस; आधार-पहचान-परत की 3-सेवाओं में "पुनः-उपयोग-योग्यता"; खुले-API-तकनीकी-आधार)
- [x] 2 डिजिटल लॉकर/e-Sign/e-KYC → `02-digital-locker-esign-ekyc.md` (**e-Sign — आधार-OTP-आधारित तात्कालिक-हस्ताक्षर, DSC-टोकन-रहित**; **e-KYC — "डेटा" लौटाती है बनाम DigiLocker "दस्तावेज़" — MCQ-भेद**; RBI-2025-KYC-निर्देश-DigiLocker-OVD-मान्यता)
- [x] 3 ओपन APIs/ओपन डेटा — मानक/गवर्नेंस → `03-open-apis-open-data-standard-governance.md` (API Setu-मार्च-2020-MeitY; NDSAP-9फरवरी2012-कैबिनेट-अनुमोदित, data.gov.in; ओपन-API-बनाम-ओपन-डेटा-भेद)

**स्वास्थ्य/सामाजिक ई-गवर्नेंस (4):**
- [x] 4 MIS/HMIS/IDSP — सार्वजनिक स्वास्थ्य आईटी → `04-mis-hmis-idsp-sarvajanik-swasthya-it.md` (HMIS-2008-NHM/G2G/2लाख+सुविधाएँ; IDSP-2004-विश्व-बैंक/साप्ताहिक-S-P-L-रिपोर्टिंग; IHIP-रीयल-टाइम-पोर्टल; HMIS-बनाम-IDSP-भेद)

**MP-विशिष्ट ई-गवर्नेंस (5-10) — इस फ़ाइल का मुख्य-मूल्य:**
- [x] 5 MP — समग्र पोर्टल/नागरिक डैशबोर्ड → `05-mp-samagra-portal-nagarik-dashboard.md` (**SSSM-अंतर्गत 2010-शुरू; समग्र-ID — 8-अंकीय-परिवार+9-अंकीय-सदस्य द्वि-स्तरीय-प्रणाली**)
- [x] 6 MP — नागरिक सेवा पोर्टल — सिंगल-विंडो → `06-mp-nagarik-seva-portal-single-window.md` (**MP लोक सेवा गारंटी अधिनियम 2010 — भारत का प्रथम-ऐसा-कानून, 52-सेवाएँ, UNPSA-2012-पुरस्कार**; 430 लोक सेवा केंद्र[प्रति-ब्लॉक]; CM हेल्पलाइन 181; e-District mpedistrict.gov.in जनवरी2023-548-सेवाएँ; त्रि-स्तरीय-मॉडल)
- [x] 7 MP — समग्र/एनालिटिक्स — डेटा-चालित गवर्नेंस → `07-mp-samagra-analytics-data-chalit-governance.md` (**CM डैशबोर्ड — MP 2017 का "अग्रणी"-राज्य, वर्तमान 33-विभाग/~200-डैशबोर्ड**; AI-प्रिडिक्टिव-एनालिटिक्स[कुपोषण/भू-जल-तनाव] समसामयिक-विस्तार)
- [x] 8 MP — ई-अनुज्ञा (e-ANUGYA) — राज्य e-governance सिस्टम/NOC → `08-mp-e-anugya-state-e-governance-noc.md` (खनिज-राज्य-सीमा-बाहर-परिवहन-NOC; NIC-भोपाल-विकसित; e-MANDI-एकीकृत)
- [x] 9 MP — e-MARG — e-governance समाधान → `09-mp-e-marg-e-governance-samadhan.md` (**"electronic Maintenance of Rural Roads under PMGSY", NIC-मध्यप्रदेश-विकसित [राष्ट्रीय-उपयोग हेतु]**; 5-वर्ष DLP+प्रदर्शन-गारंटी; National eGovernance Awards 2021 रजत-पुरस्कार)
- [x] 10 MP — सुमन सखी चैटबॉट — डिजिटल पहल → `10-mp-suman-sakhi-chatbot-digital-pahal.md` (**अत्यंत-समसामयिक — PM मोदी-शुभारंभित AI-चैटबॉट, NHM-MP+MPSeDC-विकसित, WhatsApp-आधारित[9770905942], हिंदी/24×7, प्रारम्भिक-फ़ोकस मातृ-स्वास्थ्य**)

**अतिरिक्त-आवश्यक-टॉपिक (11-12):**
- [x] 11 डिजी लॉकर — दस्तावेज़ भंडारण एवं सत्यापन → `11-digilocker-dastavez-bhandaran-satyapan.md` (checklist-बिंदु-2 का विस्तृत-कवरेज; **अगस्त2025 तक 990cr+दस्तावेज़/57cr+उपयोगकर्ता/2131-इशूअर/2611-रिक्वेस्टर**; इशूअर-बनाम-रिक्वेस्टर; शिक्षा-42.1cr+रिकॉर्ड)
- [x] 12 उमंग (UMANG) ऐप — एकीकृत सरकारी सेवा मंच → `12-umang-app-ekikrit-sarkari-seva-manch.md` (**23नवंबर2017 PM मोदी-शुभारंभ[5वाँ वैश्विक साइबरस्पेस-सम्मेलन]; वृद्धि ~162सेवा/33विभाग→31जुलाई2026तक ~2575सेवाएँ[केंद्र880+राज्य1695]; अगस्त2026तक 11.66cr+उपयोगकर्ता/~798cr-लेन-देन**; UMANG-सेवा-वितरण-बनाम-DigiLocker-दस्तावेज़-भंडारण)

**🎉 checklist-फ़ाइल 04 (Unit 9, 12 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 05 — `05-internet-social-networking.md` (9 points, Unit 9 की अंतिम फ़ाइल) — COMPLETE

**उपयोगकर्ता ने बिंदु-1 खुला होने पर पुनः-बल दिया: "must cover only mppsc and mpsi axam focused fact notes"** — इस फ़ाइल के "इंटरनेट-मूल-ढाँचा" उप-खंड (1-5, OSI/IP/रूटिंग/DNS-HTTP/NAT) में शुद्ध-MCQ-योग्य-तथ्य/तुलनात्मक-तालिका-केंद्रित-शैली बनाए रखी गई (कोई generic-narrative-padding नहीं); "सोशल-नेटवर्किंग" उप-खंड (6-9) में प्रत्येक-बिंदु को भारत/MP-विशिष्ट वेब-सत्यापित-आँकड़ों से समृद्ध किया गया।

2 उप-खंड: इंटरनेट-मूल-ढाँचा (1-5, स्थिर-नेटवर्किंग-सिद्धांत), सोशल नेटवर्किंग प्लेटफॉर्म्स (6-9, भारत/MP-सन्दर्भ अनिवार्य)।

**इंटरनेट — मूल ढाँचा (1-5):**
- [x] 1 OSI बनाम TCP/IP मॉडल → `01-osi-tcp-ip-model-layer-protocol-mapping.md` (OSI-7-स्तर+स्मरण-सूत्र; TCP/IP-4-स्तर-मैपिंग; सैद्धांतिक-बनाम-व्यावहारिक-भेद)
- [x] 2 IP एड्रेसिंग — IPv4/IPv6/सबनेटिंग → `02-ip-addressing-ipv4-ipv6-subnetting.md` (IPv4-32बिट/~4.29अरब बनाम IPv6-128बिट/~3.4×10³⁸-तालिका; सबनेट-मास्क/CIDR)
- [x] 3 रूटिंग — डिस्टेंस वेक्टर/लिंक स्टेट → `03-routing-distance-vector-link-state.md` (डिस्टेंस-वेक्टर[Bellman-Ford/RIP/"अफ़वाह-आधारित"] बनाम लिंक-स्टेट[Dijkstra/OSPF/पूर्ण-टोपोलॉजी] तुलनात्मक-तालिका)
- [x] 4 DNS/HTTP/HTTPS → `04-dns-http-https-web-ki-reedh.md` (DNS="इंटरनेट-फ़ोन-बुक"; HTTP-पोर्ट80-असुरक्षित बनाम HTTPS-पोर्ट443-SSL/TLS; वेब-पृष्ठ-लोडिंग-पूर्ण-प्रक्रिया-संश्लेषण)
- [x] 5 NAT/फ़ायरवॉल/प्रॉक्सी → `05-nat-firewall-proxy-network-suraksha.md` (NAT-निजी↔सार्वजनिक-IP; फ़ॉरवर्ड-बनाम-रिवर्स-प्रॉक्सी; 3-तकनीकों का OSI-स्तर-भेद)

**सोशल नेटवर्किंग प्लेटफॉर्म्स (6-9):**
- [x] 6 प्रमुख सोशल नेटवर्किंग प्लेटफॉर्म — प्रकार एवं उपयोग → `06-pramukh-social-networking-platform-prakar-upyog.md` (**भारत जुलाई2026 — Facebook~70.3cr>Instagram~55.1cr>WhatsApp~53.1cr>YouTube~50cr>Telegram~38.4cr; विश्व-दूसरा-सबसे-बड़ा-बाज़ार(चीन-बाद)**; पहुँच-बनाम-पसंदीदा MCQ-भेद)
- [x] 7 सोशल मीडिया — उपयोग रुझान (भारत/MP संदर्भ) → `07-social-media-upyog-rujhan-bharat-mp-sandarbh.md` (**भारत मार्च2026 — 109.28cr इंटरनेट-सब्सक्राइबर; शहरी126.80-बनाम-ग्रामीण48.31-प्रति-100**; **महत्वपूर्ण-MP-सूक्ष्मता — TRAI "MP"-सर्किल में छत्तीसगढ़-भी-सम्मिलित, मार्च2025-8.10cr कुल**)
- [x] 8 सोशल मीडिया जोखिम — डिजिटल साक्षरता/सुरक्षित उपयोग → `08-social-media-jokhim-digital-saksharta-surakshit-upyog.md` (**आर्थिक सर्वेक्षण 2025-26 — डिजिटल-एडिक्शन सार्वजनिक-स्वास्थ्य-चुनौती चिह्नित, अत्यंत-समसामयिक**; ASER2024-57%-शिक्षा-बनाम-76%-सोशल-मीडिया; PMGDISHA-विश्व-सबसे-बड़ी-डिजिटल-साक्षरता-योजना)
- [x] 9 सोशल मीडिया विनियमन — IT नियम 2021 → `09-social-media-viniyaman-it-niyam-2021-dayitva.md` (SSMI-50लाख-सीमा; शिकायत-24घंटे-स्वीकृति/15दिन-समाधान/36घंटे-सामग्री-हटाना; **अत्यंत-समसामयिक — IT संशोधन नियम 2026, 10फ़रवरी2026 अधिसूचित/20फ़रवरी2026 प्रभावी, डीपफ़ेक/SGI-विनियमन**)

**🎉 checklist-फ़ाइल 05 (Unit 9, 9 बिंदु) पूर्ण रूप से समाप्त।**

---

## 🎉🎉🎉 MAJOR MILESTONE: सम्पूर्ण Unit 9 (सूचना एवं संचार प्रौद्योगिकी) की सभी 5 checklist-फ़ाइलें अब पूर्ण रूप से समाप्त 🎉🎉🎉

`mppsc-syllabus/prelims/unit-09-ict/` में कुल **5 checklist-फ़ाइलें** — **सभी अब `mppsc-syllabus/prelims-notes/unit-09-ict/` में पूर्ण**:
- 01-computer-adharbhoot-gyan (11 बिंदु) ✅
- 02-electronics-ict (24 बिंदु) ✅
- 03-robotics-ai-cyber-suraksha (19 बिंदु) ✅
- 04-e-governance (12 बिंदु) ✅
- 05-internet-social-networking (9 बिंदु) ✅

**कुल = 75 बिंदु/नोट्स, संपूर्ण Unit 9 के लिए।**

**Unit 9 का फ़ॉर्मेट-निर्णय (शुरुआत में AskUserQuestion से तय, पूरे-Unit में सुसंगत-रूप से लागू)** — "Lean fact/formula sheet" शैली (mpsi file-08/file-04 जैसी) — GS-विषयों की भारी 800+-पंक्ति Mains-answer-शैली नहीं। स्थिर/सार्वभौमिक CS-अवधारणाएँ (नंबर-सिस्टम/OSI-मॉडल/एल्गोरिदम/क्रिप्टोग्राफ़ी आदि) NCERT कक्षा-XI/XII कंप्यूटर-विज्ञान-पाठ्यक्रम से; समसामयिक/भारत-नीति-विषय (5G-रोलआउट/DPDP-अधिनियम/UPI-आँकड़े/DigiLocker/UMANG/IT-नियम-2021-संशोधन आदि) WebSearch से सक्रिय-सत्यापित। **उपयोगकर्ता ने सत्र-भर बार-बार गहराई/तथ्य-पूर्णता पर बल दिया** ("don't lose even a single number," "cover facts that help crack mppsc and mpsi," "maintain the quality of notes") — इसके परिणाम-स्वरूप कई बिंदुओं को प्रारम्भिक-लेखन के तुरंत-बाद अतिरिक्त-शोध से समृद्ध किया गया (checklist-02/बिंदु-1-3 5G/स्पेक्ट्रम/सेल्युलर-इतिहास; checklist-03/बिंदु-13 MP-साइबर-अवसंरचना)।

## Unit 6 — science-technology-public-health — prelims-notes (शुरू)

उपयोगकर्ता ने Unit 6 पर आगे बढ़ने का निर्देश दिया। `mppsc-syllabus/prelims/unit-06-science-technology-public-health/` में **7 checklist-फ़ाइलें**: 01-vigyan-shakhayen-pratham-gyan (64 बिंदु — देखें नीचे "checklist-सफ़ाई"), 02-vaigyanik-sansthayen, 03-upgrah-antariksh-praudyogiki, 04-manav-sharir-sanrachna, 05-poshan-ahar-poshak-tatva-kuposhan, 06-anuvanshik-rog-sickle-cell-anemia, 07-swasthya-niti-sankramak-rog-swasthya-sanketak।

**checklist-सफ़ाई (Unit 9 पूर्ण होने के तुरंत-बाद, इस-यूनिट-शुरू-होने-से-पहले):** उपयोगकर्ता ने checklist-फ़ाइल 01 के "कंप्यूटिंग एवं आधुनिक तकनीक" उप-खंड (मूल-बिंदु 22-37, 16 बिंदु) को Unit 9 (ICT) की सद्यः-सम्पूर्ण-सामग्री से क्रॉस-चेक करवाया — 11 बिंदु (बिट/बाइट, क्लाउड-IaaS-PaaS-SaaS, AI-सुपरवाइज्ड/अनसुपरवाइज्ड, ओवरफिटिंग, IoT, साइबर-सुरक्षा, क्रिप्टोग्राफी, डेटा-गोपनीयता, एज-कंप्यूटिंग, ज़ीरो-ट्रस्ट, PKI) Unit-9 में समर्पित-रूप से पहले-से-कवर पाए गए — इन्हें checklist से हटाकर, केवल 5 वास्तविक-गैप-बिंदु (ब्लॉकचेन/कंप्यूटर-विज़न/NLP/फेडरेटेड-लर्निंग/क्वांटम-तकनीक) रखे गए, तथा पूरी फ़ाइल (मूल 75 बिंदु → अब 64) क्रमिक-रूप से पुनःक्रमांकित की गई (कोई प्रीलिम्स-नोट्स तब-तक इस-यूनिट-हेतु अस्तित्व में नहीं थे, अतः पुनःक्रमांकन सुरक्षित था)।

**फ़ॉर्मेट — Unit 9 के समान "Lean fact/formula sheet"** (पुनः-पुष्टि की आवश्यकता नहीं समझी गई, चूँकि भौतिकी/रसायन/जीव-विज्ञान-मूल-सिद्धांत भी NCERT-फ़ॉर्मूला/परिभाषा-केंद्रित-सामग्री हैं, ICT जितनी ही स्थिर) — NCERT कक्षा-XI/XII प्राथमिक-स्रोत; समसामयिक/नीतिगत-बिंदुओं (जैसे BEE-स्टार-लेबल-2026-संशोधन, e-Waste Rules 2022, बायो-मेडिकल-वेस्ट-रंग-कोड) हेतु WebSearch-सत्यापन। **उपयोगकर्ता ने बिंदु-2 (ऊर्जा-के-रूप) खुला होने पर पुनः-बल दिया** ("must cover all the points...in very depth facts") — बिंदु-2 को कार्य-ऊर्जा-प्रमेय/जूल-नियतांक/दक्षता-सूत्र से समृद्ध किया गया, यह मानक शेष-बिंदुओं में बनाए रखा जा रहा है।

### Checklist file 01 — `01-vigyan-shakhayen-pratham-gyan.md` (64 points, अब तक की सबसे बड़ी फ़ाइल इस यूनिट में) — IN PROGRESS

**भौतिकी (1-8) — COMPLETE:**
- [x] 1 यांत्रिकी — बल/घर्षण/टॉर्क → `01-yantriki-mool-siddhant-bal-gharshan-torque.md` (न्यूटन-3-नियम, F=ma; स्थैतिक>गतिज-घर्षण, μ=F/N; टॉर्क τ=F×r×sinθ)
- [x] 2 ऊर्जा के रूप → `02-urja-ke-roop-gatij-sthitij-ushmiya-vaidyut.md` (KE=½mv²/PE=mgh; **user-फ़ीडबैक पर समृद्ध — कार्य-ऊर्जा-प्रमेय W=ΔKE, जूल-नियतांक 1cal=4.186J, दक्षता=आउटपुट/इनपुट**; 1HP=746W)
- [x] 3 ओम का नियम → `03-vidyut-dhara-voltage-pratirodh-ohm-ka-niyam.md` (V=IR, R=ρL/A; श्रेणी/समानांतर-संयोजन; P=VI=I²R; जूल-ऊष्मन-नियम)
- [x] 4 चुम्बकत्व/EMI → `04-chumbaktva-vidyut-chumbakiya-preran.md` (फ़ैराडे EMF=-dΦ/dt; लेंज़-नियम; जनरेटर-बनाम-मोटर; ट्रांसफ़ॉर्मर केवल-AC)
- [x] 5 तरंग/डॉप्लर → `05-tarang-dhwani-avritti-aayam-doppler-prabhav.md` (v=fλ; अनुदैर्घ्य-बनाम-अनुप्रस्थ; डॉप्लर-प्रभाव रडार/रेड-शिफ़्ट)
- [x] 6 प्रकाशिकी/TIR → `06-prakashiki-paravartan-apvartan-purna-antarik-paravartan.md` (स्नेल-नियम; TIR-2-शर्तें; ऑप्टिकल-फ़ाइबर/हीरे-की-चमक)
- [x] 7 आधुनिक-भौतिकी/अर्ध-आयु → `07-aadhunik-bhautiki-parmanu-nabhik-ardh-aayu.md` (α/β/γ-विकिरण-भेदन-क्षमता; अर्ध-आयु-घातांकी-क्षय; कार्बन-14-डेटिंग; विखंडन-बनाम-संलयन)
- [x] 8 अर्धचालक → `08-ardhchalak-p-n-junction-diode-transistor.md` (n/p-प्रकार-डोपिंग; डायोड-अग्र/पश्च-अभिनति; ट्रांजिस्टर-एमिटर-बेस-कलेक्टर)

**रसायन विज्ञान (9-13) — COMPLETE:**
- [x] 9 बंधन/संकरण → `09-rasayanik-bandhan-sankaran-hybridization-aadhar.md` (4-बंधन-प्रकार; sp/sp²/sp³-कोण-तालिका; जल-104.5°-अपवाद)
- [x] 10 अम्ल-क्षार/pH/बफर → `10-amla-kshar-ph-buffer-anumapan-titration.md` (3-सिद्धांत अरहेनियस/ब्रॉन्स्टेड-लॉरी/लुईस; बफर-रक्त-pH-7.35-7.45; अनुमापन-सूचक)
- [x] 11 रेडॉक्स/सेल → `11-redox-electrochemistry-cell-battery.md` (OIL-RIG; गैल्वेनिक-बनाम-इलेक्ट्रोलाइटिक; एनोड-ऑक्सीकरण/कैथोड-अपचयन)
- [x] 12 पॉलिमर/कम्पोजिट → `12-polymer-composite-rozmarra-upyog.md` (थर्मोप्लास्टिक-बनाम-थर्मोसेटिंग; फ़ाइबरग्लास/कार्बन-फ़ाइबर/RCC)
- [x] 13 हरित-रसायन → `13-harit-rasayan-kachra-nyunikaran-utprerak.md` (परमाणु-अर्थव्यवस्था; कैटेलिटिक-कन्वर्टर; 3R)

**जीव विज्ञान (14-18) — COMPLETE:**
- [x] 14 कोशिका-संरचना → `14-koshika-sanrachna-angak-dna-rna.md` (प्रोकैरियोटिक-बनाम-यूकैरियोटिक; माइटोकॉन्ड्रिया/लाइसोसोम; DNA-बनाम-RNA-तालिका; वाटसन-क्रिक)
- [x] 15 एंज़ाइम → `15-enzyme-kriya-taap-ph-santulan.md` (कुंजी-ताला/प्रेरित-अनुकूलन-मॉडल; इष्टतम-37°C; पेप्सिन-pH2-अपवाद)
- [x] 16 जेनेटिक्स/मेंडल → `16-genetics-mendel-ke-niyam-vansh-aalekh-aadhar.md` (मेंडल-3-नियम; मोनोहाइब्रिड-3:1/डाइहाइब्रिड-9:3:3:1; वंश-आलेख)
- [x] 17 इम्यूनोलॉजी → `17-immunology-antigen-antibody-tikakaran.md` (सहज-बनाम-उपार्जित[सक्रिय/निष्क्रिय]; टीकाकरण; हर्ड-इम्युनिटी; B-बनाम-T-कोशिका)
- [x] 18 माइक्रोबायोलॉजी → `18-microbiology-bacteria-virus-fungus-aadhar.md` (बैक्टीरिया-बनाम-वायरस-तालिका; एंटीबायोटिक-अप्रभावी-वायरस-पर; फंगस-काइटिन-भित्ति)

**पर्यावरणीय विज्ञान/प्रारंभिक (19-21) — COMPLETE:**
- [x] 19 वायु/जल/मृदा-प्रदूषण → `19-vayu-jal-mrida-pradushan-strot-prabhav.md` (SO₂/NOx/CO/PM2.5; यूट्रोफ़िकेशन/BOD; जैव-आवर्धन-DDT — नोट: विस्तृत-नीतिगत-गहराई Unit-7 में)
- [x] 20 कचरा-प्रबंधन → `20-kachra-prabandhan-thos-biomedical-e-waste.md` (**बायो-मेडिकल-4-रंग-कोड पीला/लाल/सफ़ेद/नीला**; **e-Waste Rules 2022, नवंबर2022/1अप्रैल2023-प्रभावी, EPR**)
- [x] 21 ऊर्जा-दक्षता/BEE → `21-urja-dakshata-bee-star-label.md` (**अत्यंत-समसामयिक — 1जनवरी2026-अनिवार्य-कवरेज-विस्तार; 2026-मानक-कठोर, पूर्व-5-स्टार-AC अब 4-स्टार**)

**कंप्यूटिंग-गैप-बिंदु (22-26) — COMPLETE:**
- [x] 22 ब्लॉकचेन → `22-blockchain-distributed-ledger.md` (वितरित-बहीखाता, अपरिवर्तनीयता, PoW-बनाम-PoS, ब्लॉकचेन-बनाम-क्रिप्टोकरेंसी MCQ-भेद)
- [x] 23 कंप्यूटर विज़न → `23-computer-vision-image-classification-object-detection.md` (CNN; क्लासिफिकेशन "क्या-है" बनाम डिटेक्शन "क्या+कहाँ"; YOLO/R-CNN)
- [x] 24 NLP → `24-nlp-prakritik-bhasha-prasanskaran-token-embedding.md` (टोकनाइज़ेशन-प्रथम-चरण; एम्बेडिंग-वेक्टर-अर्थपूर्ण-निकटता)
- [x] 25 फेडरेटेड लर्निंग → `25-federated-learning-data-gopniyata-avdharna.md` (4-चरण-प्रक्रिया; "डेटा-को-मॉडल-तक-नहीं,मॉडल-को-डेटा-तक"; मोबाइल-कीबोर्ड-उदाहरण)
- [x] 26 क्वांटम तकनीक (रुझान) → `26-quantum-taknik-compute-sanchar-rujhan.md` (**NQM 19अप्रैल2023/₹6003.65cr; क्वांटम-संचार मार्च2026-1000km-मील-का-पत्थर; QpiAI-Indus भारत-प्रथम-25-क्यूबिट-कंप्यूटर; अमरावती क्वांटम वैली फ़रवरी2026**)

**ऊर्जा प्रौद्योगिकी (27-35अ/आ) — COMPLETE:**
- [x] 27 सौर फोटोवोल्टिक → `27-saur-photovoltaic-p-n-bandgap-aadhar.md` (checklist-बिंदु-8-p-n-जंक्शन-प्रत्यक्ष-अनुप्रयोग; सिलिकॉन-बैंडगैप~1.1eV)
- [x] 28 पवन ऊर्जा → `28-pawan-urja-cut-in-rated-speed-kshamta-karak.md` (शक्ति∝वेग³; कट-इन/रेटेड/कट-आउट; क्षमता-कारक~25-35%)
- [x] 29 हाइड्रोजन ऊर्जा → `29-hydrogen-urja-green-blue-grey-bhandaran-suraksha.md` (**NGHM 4जनवरी2023, 2030-लक्ष्य 5MMT/125GW/$1.5किग्रा**; भंडारण/सुरक्षा-चुनौती)
- [x] 30 बैटरी तकनीक → `30-battery-taknik-li-ion-lfp-solid-state.md` (Li-ion-द्वितीयक-सेल; LFP-बनाम-NMC; सॉलिड-स्टेट-अगली-पीढ़ी)
- [x] 31 सुपरकैपेसिटर → `31-supercapacitor-tatva-anuprayog.md` (विद्युत-क्षेत्र-भंडारण; ऊर्जा-घनत्व-बनाम-शक्ति-घनत्व; पुनर्योजी-ब्रेकिंग)
- [x] 32 रेफ्रिजरेंट → `32-refrigerant-cfc-hfc-hfo-paryavaran-prabhav.md` (**किगाली-संशोधन-अनुसमर्थन 21सितंबर2021; HFC-फ़्रीज़ 1जनवरी2028; 4-चरण-न्यूनीकरण 2032-2047**)
- [x] 33 LED → `33-led-urja-kushal-prakash-aadhar.md` (checklist-बिंदु-8-डायोड-अनुप्रयोग; UJALA-योजना)
- [x] 34 बायोगैस/वेस्ट-टू-एनर्जी → `34-biogas-waste-to-energy.md` (अवायवीय-पाचन; GOBARdhan-योजना)
- [x] 35 EV/बैटरी/ग्रीन-हाइड्रोजन (रुझान) → `35-ev-battery-green-hydrogen-urja-sankraman-rujhan.md` (**PM E-DRIVE ₹10,900cr/28लाख-लक्ष्य; FY2025-26 25लाख+EV-पंजीकरण+24%; चार्जिंग 52,718-स्टेशन**)
- [x] 35अ नाभिकीय ऊर्जा — रिएक्टर-प्रकार → `35a-nabhikiya-urja-reactor-prakar-phwr-bwr-fast-breeder.md` (PHWR/BWR/FBR-तालिका; **कल्पक्कम-PFBR 6अप्रैल2026-प्रथम-क्रांतिकता, दिसंबर2026-लक्ष्य**)
- [x] 35आ भारत का त्रि-चरणीय नाभिकीय कार्यक्रम → `35b-bharat-ka-tri-charniya-nabhikiya-karyakram-homi-bhabha-yojana.md` (होमी भाभा; 3-चरण-यूरेनियम→प्लूटोनियम→थोरियम; थोरियम-अविखंडनीयता-स्पष्टीकरण)

**भौतिक/औद्योगिक प्रौद्योगिकी (36-42) — COMPLETE:**
- [x] 36 3D प्रिंटिंग → `36-3d-printing-fdm-sla-swasthya-udyog-upyog.md` (एडिटिव-बनाम-सबट्रैक्टिव; FDM-बनाम-SLA; कृत्रिम-अंग/बायोप्रिंटिंग)
- [x] 37 नैनोमटेरियल → `37-nanomaterial-carbon-nanotube-graphene.md` (CNT-बेलनाकार-बनाम-ग्रैफ़ीन-समतल; 2010-नोबेल गेम+नोवोसेलोव)
- [x] 38 ड्रोन → `38-drone-sensor-mapping-delivery.md` (**Drone Rules 2021, 25अगस्त2021; PLI-₹120cr; नमो ड्रोन दीदी ₹1,261cr/15,000-SHG/80%-सब्सिडी**)
- [x] 39 ऑटोमेशन RPA/कॉग्निटिव → `39-automation-rpa-cognitive-seva-dakshata.md` ("क्या-दिखे-वही-करो"(RPA)-बनाम-"समझो-निर्णय-लो"(कॉग्निटिव))
- [x] 40 जल शुद्धिकरण → `40-jal-shuddhikaran-ro-uv-uf-antar.md` (RO-लवण-हटाना/UV-सूक्ष्मजीव-मात्र/UF-मध्यवर्ती — संश्लेषणात्मक-तालिका)
- [x] 41 एयर प्यूरीफिकेशन → `41-air-purification-filter-hepa.md` (HEPA-0.3-माइक्रोन-99.97%-मानक-परिभाषा; एक्टिवेटेड-कार्बन-गैस-पूरक)
- [x] 42 स्मार्ट वेयरेबल → `42-smart-wearable-heart-spo2-swasthya-nigrani.md` (PPG-हृदय-गति; SpO2-95-100%-सामान्य/2-तरंगदैर्घ्य-सिद्धांत)

**जैव-प्रौद्योगिकी/उन्नत (43-57) — COMPLETE (उपयोगकर्ता ने बिंदु-51 खुला होने पर पुनः-बल दिया "must maitain the quality of facts" — बिंदु-51 को भारतीय-Human-Microbiome-Initiative[NCCS+DBT,3400+व्यक्ति,99-जातीय-समूह] से समृद्ध किया गया, यह मानक शेष-बिंदुओं में बनाए रखा गया):**
- [x] 43 जैव प्रौद्योगिकी rDNA/CRISPR → `43-jaiv-praudyogiki-rdna-crispr.md` (प्रतिबंधन-एंज़ाइम+वेक्टर+लाइगेज़; मानव-इंसुलिन-E.coli 1982; CRISPR-Cas9 डाउडना+शारपेंटियर 2020-नोबेल)
- [x] 44 बायोइन्फॉर्मेटिक्स → `44-bioinformatics-sequencing-database.md` (सेंगर-बनाम-NGS; GenBank/EMBL/DDBJ=INSDC; मानव-जीनोम-परियोजना 1990-2003)
- [x] 45 स्टेम सेल/टिश्यू इंजीनियरिंग → `45-stem-cell-tissue-engineering.md` (टोटीपोटेंट>प्लूरिपोटेंट>मल्टीपोटेंट; iPSC-यामानाका-2012-नोबेल)
- [x] 46 बायोसेंसर/POC → `46-biosensor-poc-diagnostics.md` (ग्लूकोमीटर-उदाहरण; लेटरल-फ़्लो-असे)
- [x] 47 वायरल वेक्टर → `47-viral-vector-adeno-lenti.md` (एडेनोवायरल-DNA-अस्थायी-कोविशील्ड बनाम लेंटिवायरल-RNA-स्थायी-CAR-T)
- [x] 48 मोनोक्लोनल एंटीबॉडी → `48-monoclonal-antibody-diagnostics-therapy.md` (हाइब्रिडोमा-तकनीक कोहलर+मिलस्टीन-1984-नोबेल; "-mab"-नामकरण)
- [x] 49 ELISA/RT-PCR → `49-elisa-rt-pcr-siddhant-upyog.md` (PCR केरी मुलिस 1993-नोबेल, Taq-पॉलीमरेज़; **RT="Reverse Transcription" न-कि-"Real-Time"-भ्रम-स्पष्टीकरण**)
- [x] 50 फ्लो साइटोमेट्री → `50-flow-cytometry-koshika-vishleshan.md` (फ़ॉरवर्ड/साइड-स्कैटर; FACS; HIV-CD4-गणना)
- [x] 51 मेटाजेनोमिक्स → `51-metagenomics-microbial-vividhata.md` (**user-फ़ीडबैक पर समृद्ध — Indian Human Microbiome Initiative NCCS+DBT, 10-अंतर्विवाही+7-जनजातीय-समुदाय, 3400+व्यक्ति, आयुर्वेदिक-"प्रकृति"-एकीकरण, AnSI-UoH-2024-PVTG-अध्ययन**)
- [x] 52 प्रोटीन इंजीनियरिंग → `52-protein-engineering-enzyme-biopharma.md` (तर्कसंगत-डिज़ाइन-बनाम-निर्देशित-विकासवाद, फ्रांसिस-अर्नोल्ड-2018-नोबेल)
- [x] 53 बायोफार्मास्यूटिकल/बायोरिएक्टर → `53-biopharmaceutical-utpadan-bioreactor-aadhar.md` (upstream-downstream-processing; GMP-मानक)
- [x] 54 ओमिक्स (रुझान) → `54-omics-genome-proteome-metabolome-sarvajanik-swasthya-rujhan.md` (आयुर्जीनोमिक्स; NIDAN Kendra-2019; Indian Cancer Genome Atlas)
- [x] 55 जीनोमिक सीक्वेंसिंग (रुझान) → `55-genomic-sequencing-sarvajanik-swasthya-rujhan.md` (**Genome India Project — IISc-नेतृत्व, 10,074-नमूने/99-जातीय-समूह/5.5करोड़+विविधताएँ, फ़रवरी2024-पूर्णता/जनवरी2025-डेटा-सार्वजनिक, IBDC**)
- [x] 56 mRNA/वेक्टर-टीका (रुझान) → `56-mrna-vector-platform-vaccine-taknik-rujhan.md` (**GEMCOVAC-19 — Gennova, भारत-प्रथम-mRNA-टीका; CLNE-तकनीक 2-8°C-स्थिरता, LNP-भिन्न**)
- [x] 57 CRISPR/जीन-थेरेपी-नैतिकता (रुझान) → `57-crispr-gene-therapy-naitikta-viniyaman-rujhan.md` (**BIRSA 101 — भारत-प्रथम-स्वदेशी-CRISPR-थेरेपी[सिकल-सेल], CSIR-IGIB, नवंबर2025; ट्रायल MP/छत्तीसगढ़/झारखंड-से — MP-प्रत्यक्ष-सम्बद्ध; अक्टूबर2025-Drug-Rules-संशोधन-DCGI-नियंत्रण**)

**विज्ञान-नैतिकता एवं नीति (58-61) — COMPLETE:**
- [x] 58 विज्ञान-समाज/साक्ष्य-नीति → `58-vigyan-samaj-sakshya-aadharit-niti.md` (PSA-कार्यालय; DST/DBT/CSIR)
- [x] 59 बायोएथिक्स → `59-bioethics-clinical-trial-suchit-sahmati.md` (4-सिद्धांत स्वायत्तता/हितकारिता/अ-हानिकारिता/न्याय; ICMR/IEC/CDSCO; न्यूरेमबर्ग-कोड1947→हेलसिंकी1964)
- [x] 60 डेटा/AI नैतिकता → `60-data-ai-naitikta-purvagrah-javabdehi.md` (checklist-Unit-9/file-03/बिंदु-3-पुनर्स्मरण+जवाबदेही-अंतराल-नया-पहलू)
- [x] 61 IPR → `61-ipr-patent-copyright-taknik-swasthya-kshetra.md` (पेटेंट-3-शर्त; अनिवार्य-लाइसेंसिंग-धारा84; **नैट्को-बेयर(2012)/नोवार्टिस-बनाम-भारत(2013,धारा3(d),evergreening)**; TRIPS)

**रक्षा तकनीक (62-64) — COMPLETE:**
- [x] 62 रडार/सोनार/इन्फ्रारेड → `62-raksha-taknik-radar-sonar-infrared.md` (checklist-बिंदु-5-डॉप्लर-प्रत्यक्ष-अनुप्रयोग; सक्रिय-बनाम-निष्क्रिय-सोनार; हीट-सीकिंग-मिसाइल)
- [x] 63 SAR → `63-synthetic-aperture-radar-sar-aadhar-upyog.md` (**NISAR — 30जुलाई2025-GSLV-F16-प्रक्षेपण, विश्व-प्रथम-दोहरी-आवृत्ति(L+S-बैंड)-उपग्रह; RISAT-1B/EOS-09 18मई2025-प्रक्षेपण-विफलता**)
- [x] 64 हाइपरस्पेक्ट्रल इमेजिंग → `64-hyperspectral-imaging-band-upyog.md` (मल्टीस्पेक्ट्रल-बनाम-हाइपरस्पेक्ट्रल; वर्णक्रमीय-हस्ताक्षर; छद्मावरण-भेदन)

**🎉🎉 checklist-फ़ाइल 01 (Unit 6, 64 बिंदु — इस-सत्र-की-सबसे-बड़ी-एकल-checklist-फ़ाइल) पूर्ण रूप से समाप्त 🎉🎉** — सभी 9 उप-खंड (भौतिकी 1-8, रसायन 9-13, जीव-विज्ञान 14-18, पर्यावरण-प्रारंभिक 19-21, कंप्यूटिंग-Unit9-गैप 22-26, ऊर्जा-प्रौद्योगिकी 27-35अ/आ, भौतिक/औद्योगिक 36-42, जैव-प्रौद्योगिकी-उन्नत 43-57, विज्ञान-नैतिकता 58-61, रक्षा-तकनीक 62-64) पूर्ण। इस फ़ाइल में उपयोगकर्ता ने सत्र-भर बार-बार गहराई/तथ्य-पूर्णता पर बल दिया (बिंदु-2/13/51 पर विशेष-रूप-से समृद्ध किए गए) — हर-बार वेब-सत्यापित, विशिष्ट-तिथि/संख्या-युक्त नए-तथ्य जोड़े गए, कभी सतही-सुधार नहीं।

### Checklist file 02 — `02-vaigyanik-sansthayen.md` (11 points) — COMPLETE

11 भारतीय वैज्ञानिक-संस्थानों की प्रोफ़ाइल (स्थापना/जनक/मुख्यालय/जनादेश/प्रमुख-उपलब्धियाँ-सहित)। **उपयोगकर्ता ने checklist-फ़ाइल-03 खुला होने पर पुनः-बल दिया "use ncrt as source"** — प्रत्येक-संस्थान हेतु सक्रिय-NCERT-जाँच की गई: ISRO के लिए नया NCERT कक्षा-VIII "Curiosity" पाठ्यपुस्तक (अध्याय "Keeping Time with the Skies") में वास्तविक-ISRO-सन्दर्भ मिला एवं उद्धृत किया गया; शेष-10-संस्थानों (DRDO/CSIR/BARC/DBT/ICMR/ICAR/NPL/IISc/TIFR) हेतु विस्तृत-खोज के बावजूद कोई-विशिष्ट-NCERT-अध्याय-कवरेज नहीं मिला (ये विशुद्ध-संस्थागत-प्रोफ़ाइल-विषय हैं, NCERT के सामान्य-विज्ञान/राजनीति-विज्ञान-अवधारणा-आधारित-पाठ्यक्रम के दायरे से बाहर) — प्रत्येक-नोट में यह सत्यापन-स्थिति ईमानदारी-से दर्ज की गई, फ़र्ज़ी-NCERT-उद्धरण नहीं गढ़ा गया — आधिकारिक-संस्थागत-स्रोत उपयोग किए गए।

- [x] 1 ISRO → `01-isro-bharatiya-antariksh-anusandhan-sangathan.md` (**NCERT-कक्षा-VIII-"Curiosity"-सन्दर्भ**; 1969-स्थापना/विक्रम साराभाई; मंगलयान-प्रथम-प्रयास-विश्व-प्रथम; चंद्रयान-3-दक्षिणी-ध्रुव-विश्व-प्रथम; गगनयान-2027-विलंबित)
- [x] 2 DRDO → `02-drdo-raksha-anusandhan-vikas-sangathan.md` (1958-स्थापना-नेहरू-काल; IGMDP-APJ-कलाम-5-मिसाइल; ब्रह्मोस-भारत-रूस; तेजस-2016-वायुसेना-सम्मिलन)
- [x] 3 CSIR प्रयोगशालाएँ → `03-csir-vaigyanik-audyogik-anusandhan-parishad-prayogshalayen.md` (26सितंबर1942; 37-लैब/39-आउटरीच; **CSIR-IGIB checklist-Unit-6/file-01/बिंदु-57-BIRSA101-क्रॉस-रेफ**; मेथाक्वालोन1950/स्वराज-ट्रैक्टर1967)
- [x] 4 BARC → `04-barc-bhabha-parmanu-anusandhan-kendra.md` (जनवरी1954-AEET→20जनवरी1957-नेहरू-उद्घाटन→22जनवरी1967-भाभा-नाम-पुनर्नामित; ट्रॉम्बे-मुंबई; भाभा-24जनवरी1966-मॉन्ट-ब्लांक-विमान-दुर्घटना-मृत्यु)
- [x] 5 DBT → `05-dbt-jaiv-praudyogiki-vibhag.md` (1986-राजीव-गांधी-काल; स्वायत्त-संस्थान NCCS/NII/NBRC/NIPGR/THSTI/CDFD; Genome-India/Microbiome-Initiative/NIDAN-Kendra-सभी-checklist-Unit-6/file-01-क्रॉस-रेफ)
- [x] 6 ICMR → `06-icmr-bharatiya-ayurvigyan-anusandhan-parishad.md` (1911-IRFA[सर हरकोर्ट बटलर]→1949-ICMR-पुनर्नामित; बायोएथिक्स-दिशा-निर्देश-जारीकर्ता; 1959-TB-घर-आधारित-उपचार-सिद्धि)
- [x] 7 ICAR → `07-icar-bharatiya-krishi-anusandhan-parishad.md` (16जुलाई1929; **1950-51-से-वृद्धि: खाद्यान्न4x/मत्स्य9x[अंतर्देशीय17x]/अंडा27x-सर्वाधिक**)
- [x] 8 CSIR-NGRI सहित प्रमुख इकाइयाँ → `08-csir-pramukh-vishesh-ikaiyan-ngri-adi.md` (checklist-बिंदु-3-से-भिन्न-संस्थान; NGRI-भू-भौतिकी/CCMB1977-हैदराबाद/NAL1959-वैमानिकी/CFTRI1950-मैसूर/**CLRI1948-विश्व-का-सबसे-बड़ा-चमड़ा-अनुसंधान-संस्थान**)
- [x] 9 NPL → `09-npl-rashtriya-bhautik-prayogshala.md` (4जनवरी1947-शिलान्यास-नेहरू→21जनवरी1950-उद्घाटन-पटेल; **"National Measurement Institute"-संसद-अधिनियम; IST-संरक्षक**)
- [x] 10 IISc बेंगलुरु → `10-iisc-bharatiya-vigyan-sansthan-bengaluru.md` (जमशेदजी टाटा-परिकल्पना1896→मृत्यु1904-संस्थान-से-पूर्व; 27मई1909-स्थापना/24जुलाई1911-शुभारंभ-एशिया-प्रथम; Genome-India-Project-नेतृत्व)
- [x] 11 TIFR → `11-tifr-tata-moolbhoot-anusandhan-sansthan.md` (1जून1945-भाभा+JRD-टाटा; **बेंगलुरु-में-शुरुआत→6माह-बाद-बॉम्बे-स्थानांतरण**-रोचक-तथ्य; 15जनवरी1962-नेहरू-नेवी-नगर-उद्घाटन; TIFRAC-भारत-प्रथम-डिजिटल-कंप्यूटर)

**🎉 checklist-फ़ाइल 02 (Unit 6, 11 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 03 — `03-upgrah-antariksh-praudyogiki.md` (18 points) — COMPLETE

2 उप-खंड: मौजूदा सामान्य अवधारणाएँ (1-8, कुछ checklist-Unit-9/file-02 एवं checklist-Unit-6/file-01/बिंदु-63-64 से क्रॉस-रेफ, दोहराव-न्यूनतम रखते हुए), अतिरिक्त आवश्यक टॉपिक/नामित-भारतीय-मिशन (9-18, अत्यंत-समसामयिक)। **उपयोगकर्ता ने बिंदु-3 खुला होने पर पुनः-बल दिया** — Cartosat/OceanSat/ResourceSat की विशिष्ट-प्रक्षेपण-तिथियाँ/पेलोड-भार जोड़कर समृद्ध किया गया।

**मौजूदा सामान्य अवधारणाएँ (1-8):**
- [x] 1 उपग्रह कक्षाएँ LEO/MEO/GEO/GSO → `01-upgrah-kaksha-leo-meo-geo-gso-antar.md` (**GEO-बनाम-GSO सूक्ष्म-भेद — सभी-GEO=GSO, सभी-GSO≠GEO MCQ-ट्रैप**)
- [x] 2 लॉन्च वाहन ईंधन → `02-launch-vahan-thos-dravya-cryogenic-eendhan-aadhar.md` (ठोस-नियंत्रण-रहित/द्रव-throttleable/क्रायोजेनिक-उच्चतम-दक्षता-अति-निम्न-तापमान)
- [x] 3 रिमोट सेंसिंग बैंड/रेज़ोल्यूशन → `03-remote-sensing-band-resolution-anuprayog.md` (**user-फ़ीडबैक-पर-समृद्ध — Cartosat-2[2007]/2C[2016]/2E[2017], OceanSat-1[1999]/2[2009], ResourceSat-1[2003]-विशिष्ट-तिथि/भार**)
- [x] 4 GPS/IRNSS(NavIC) उपयोग → `04-navigation-pranaliyan-gps-irnss-navic-upyog.md` (checklist-Unit-9/file-02/बिंदु-5-क्रॉस-रेफ; मत्स्य-सुरक्षा/सामरिक-महत्व नया-फ़ोकस)
- [x] 5 अंतरिक्ष मौसम/सौर धब्बे/CME → `05-antariksh-mausam-saur-dhabbe-cme-prabhav.md` (11-वर्षीय-सौर-चक्र; उपग्रह/GPS/विद्युत-ग्रिड-प्रभाव; Aditya-L1-पूर्व-आधार)
- [x] 6 क्यूबसैट/स्मॉलसैट → `06-cubesat-smallsat-low-cost-mission.md` (**SSLV ₹30-35cr/प्रक्षेपण; जून2025-HAL-हस्तांतरण; आज़ादीसैट/हैदराबाद-छात्र-क्यूबसैट-जनवरी2026; 2025-निजी-पेलोड+40%**)
- [x] 7 GNSS संवर्धन SBAS → `07-gnss-samvardhan-sbas-satikta-sudhar.md` (GAGAN-ISRO+AAI; वैश्विक-समकक्ष WAAS/EGNOS/MSAS)
- [x] 8 SAR उपग्रह अनुप्रयोग → `08-sar-upgrah-anuprayog.md` (InSAR-सिद्धांत; भू-पर्पटी-विरूपण/बाढ़-मानचित्रण/वन-बायोमास/समुद्री-निगरानी अनुप्रयोग-तालिका)

**अतिरिक्त आवश्यक टॉपिक — नामित मिशन (9-18):**
- [x] 9 चंद्रयान 1/2/3 → `09-chandrayaan-mission-1-2-3-uddeshya-uplabdhiyan.md` (चंद्रयान-1-2008-जल-अंश-खोज; चंद्रयान-2-2019-आंशिक; **चंद्रयान-3-14जुलाई2023→23अगस्त2023-दक्षिणी-ध्रुव-लैंडिंग-राष्ट्रीय-अंतरिक्ष-दिवस**)
- [x] 10 गगनयान → `10-gaganyaan-mission-manav-antariksh-udan-karyakram.md` (4-यात्री; व्योममित्र; **शुभांशु शुक्ला-2025-Axiom-Mission-4-ISS-यात्रा, राकेश-शर्मा-पश्चात-द्वितीय-भारतीय-अंतरिक्ष-यात्री**)
- [x] 11 मंगलयान → `11-mangalyaan-mars-orbiter-mission-uplabdhiyan.md` (**5नवंबर2013→24सितंबर2014-विश्व-प्रथम-प्रथम-प्रयास-सफलता; ₹450cr=NASA-MAVEN-का-1/7वाँ; डिज़ाइन-6माह-बनाम-वास्तविक-10वर्ष**)
- [x] 12 आदित्य-L1 → `12-aditya-l1-surya-adhyayan-mission.md` (2सितंबर2023-प्रक्षेपण/6जनवरी2024-L1-प्रवेश; 7-पेलोड-VELC-मुख्य; 31दिसंबर2023-SUIT-प्रथम-निकट-UV-ज्वाला-अवलोकन)
- [x] 13 INSAT/GSAT → `13-insat-gsat-shrinkhala-sanchar-upgrah.md` (**INSAT-1A[1982]-असफल→INSAT-1B[1983]-वास्तविक-शुरुआत MCQ-ट्रैप**; GSAT-1-2001-GSLV-D1)
- [x] 14 PSLV/GSLV/LVM3 → `14-pslv-gslv-lvm3-prakshepan-vahan-kshamtayen.md` (**GSLV-Mk-I-रूसी-KVD-1 बनाम Mk-II-स्वदेशी-CE-7.5[5जनवरी2014-GSLV-D5-प्रथम-सफलता] — वेब-सत्यापन-से-गलत-प्रारम्भिक-दावा-सुधारा**; LVM3-LEO-10,000kg)
- [x] 15 अंतरिक्ष नीति/निजीकरण/IN-SPACe → `15-bharat-ki-antariksh-niti-isro-nijikaran-in-space.md` (IN-SPACe-2020/जून2022-परिचालन; **FDI-2024 21फ़रवरी-स्वीकृति/16अप्रैल-प्रभावी — 3-स्तर घटक-100%/उपग्रह-74%/प्रक्षेपण-यान-49%**)
- [x] 16 BAS भारतीय अंतरिक्ष स्टेशन → `16-bharatiya-antariksh-station-bas-yojana-lakshya-varsh.md` (**BAS-01-2028-लक्ष्य→पूर्ण-2035; 5-मॉड्यूल/52टन/400km-कक्षा; POEM-4-रोबोटिक-भुजा-जनवरी2025**)
- [x] 17 शुक्रयान → `17-shukrayaan-venus-orbiter-mission-prastavit-uddeshya.md` (**29मार्च2028-प्रक्षेपण-लक्ष्य/19जुलाई2028-शुक्र-पहुँच; 19-पेलोड[रूस-VIRAL/स्वीडन-VISWAS/जर्मनी-RAVI]; ₹1,236cr**)
- [x] 18 चंद्रयान-4/नमूना-वापसी → `18-chandrayaan-4-bhavi-chandra-mission-namuna-vapasi-yojana.md` (**विश्व-चौथा-नमूना-वापसी-देश[US/रूस/चीन-पश्चात]; 2028-लक्ष्य; 5-मॉड्यूल/2-प्रक्षेपण/कक्षीय-असेंबली; ~3kg-नमूना**)

**🎉 checklist-फ़ाइल 03 (Unit 6, 18 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 04 — `04-manav-sharir-sanrachna.md` (11 points) — user confirmed start, COMPLETE

छोटी फ़ाइल — checklist अपने-आप स्वीकार करती है कि पूर्व-गैप-विश्लेषण में इस-बिंदु को शून्य-कवरेज चिह्नित किया गया था (मौजूदा-कवरेज में केवल कोशिका-जीव-विज्ञान मिला, अंग-तंत्र नहीं)। Notes गए `mppsc-syllabus/prelims-notes/unit-06-science-technology-public-health/04-manav-sharir-sanrachna/`। स्रोत — NCERT कक्षा-XI/XII जीव-विज्ञान (Digestion/Breathing/Body Fluids-Circulation/Excretory Products/Locomotion/Neural Control/Chemical Coordination/Human Reproduction अध्याय), सभी संख्यात्मक-तथ्य (फेफड़ा-आयतन/हड्डी-गणना/नेफ्रॉन-संख्या/मासिक-धर्म-चक्र आदि) वेब-सत्यापित। उपयोगकर्ता ने मध्य-टर्न "notes must be mppsc prelime and mpsi focused" + "must cover all facts" दोहराया — बिंदु-5 (तंत्रिका-तंत्र) को मेरु-तंत्रिका-क्षेत्रीय-विभाजन/न्यूरॉन-कार्यात्मक-प्रकार/माइलिन-आवरण/मस्तिष्कावरण-CSF जैसे अतिरिक्त MCQ-योग्य-तथ्यों से समृद्ध किया गया।

- [x] 1 कोशिका-संरचना (क्रॉस-रेफ) → `01-koshika-sanrachna-cross-ref.md` (checklist-फ़ाइल-01/बिंदु-14 का पूर्ण-नोट पहले-से-मौजूद; यहाँ केवल कोशिका→ऊतक→अंग→तंत्र पदानुक्रम+4-ऊतक-प्रकार जोड़े गए)
- [x] 2 पाचन तंत्र → `02-pachan-tantra-ang-evam-karya.md` (आहार-नाल-पूर्ण-क्रम, 3-पाचक-ग्रंथियाँ+एंज़ाइम-तालिका, यकृत=सबसे-बड़ी-ग्रंथि, पीलिया/अल्सर)
- [x] 3 श्वसन तंत्र → `03-shwasan-tantra-ang-evam-karya.md` (दायाँ-3-पालि/बायाँ-2-पालि, फेफड़ा-आयतन-तालिका TV/IRV/ERV/RV/VC, O₂-ऑक्सीहीमोग्लोबिन/CO₂-बाइकार्बोनेट)
- [x] 4 परिसंचरण तंत्र → `04-parisancharan-tantra-hriday-rakt-parisancharan.md` (रक्त-संरचना, ABO+Rh-रक्त-समूह-लैंडस्टाइनर, हृदय-4-कक्ष, दोहरा-परिसंचरण, रक्तचाप-120/80)
- [x] 5 तंत्रिका तंत्र → `05-tantrika-tantra-kendriya-paridhiya-sanrachna-karya.md` (CNS/PNS, 31-मेरु-तंत्रिका-क्षेत्रीय-विभाजन, न्यूरॉन-3-कार्यात्मक-प्रकार, मस्तिष्क-3-भाग, प्रतिवर्त-चाप, मस्तिष्कावरण-CSF — user-फ़ीडबैक-पर समृद्ध)
- [x] 6 कंकाल तंत्र → `06-kankal-tantra-pramukh-haddiyan-jod.md` (कुल-206-हड्डियाँ अक्षीय-80/उपांगी-126, फीमर-सबसे-बड़ी/स्टेपीज़-सबसे-छोटी, जोड़-4-प्रकार)
- [x] 7 मांसपेशी तंत्र → `07-mansapeshi-tantra-prakar-evam-karya.md` (3-प्रकार कंकाल/हृदय/चिकनी, स्लाइडिंग-फ़िलामेंट-सिद्धांत, ग्लूटियस-मैक्सिमस-सबसे-बड़ी/स्टेपीडियस-सबसे-छोटी)
- [x] 8 उत्सर्जन तंत्र → `08-utsarjan-tantra-vrikk-mutra-tantra.md` (नेफ्रॉन=मूल-इकाई प्रति-वृक्क~10लाख, मूत्र-निर्माण-3-चरण, GFR~125mL/मिनट, यूरियोटेलिक)
- [x] 9 अंतःस्रावी तंत्र → `09-antahsravi-tantra-pramukh-granthiyan-hormone.md` (पीयूष="मास्टर-ग्रंथि", ग्रंथि-हार्मोन-तुलनात्मक-तालिका, इंसुलिन-ग्लूकागॉन-परस्पर-विरोधी)
- [x] 10 प्रजनन तंत्र → `10-prajanan-tantra-mool-sanrachna.md` (पुरुष/स्त्री-तंत्र-मार्ग, मासिक-धर्म-चक्र~28दिन, लिंग-निर्धारण X/Y)
- [x] 11 संवेदी अंग → `11-sanvedi-ang-aankh-kaan-tvacha-mool-sanrachna.md` (आँख-3-परत+शलाका-शंकु, कान-3-भाग+मैलियस-इंकस-स्टेपीज़, त्वचा=सबसे-बड़ा-अंग)

**🎉 checklist-फ़ाइल 04 (Unit 6, 11 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 05 — `05-poshan-ahar-poshak-tatva-kuposhan.md` (10 points) — user confirmed start, COMPLETE

पोषण/कुपोषण-केंद्रित फ़ाइल — 2 उप-खंड: मौजूदा-कवरेज (1-5: ICDS/पोषण-ट्रैकर, RDA-कैलोरी-प्रोटीन, आयोडीन-आयरन-विटामिन-A, MP-कुपोषण-एनीमिया, प्रिसीजन-न्यूट्रिशन-रुझान) + अतिरिक्त-आवश्यक-टॉपिक (6-10: संतुलित-आहार, PEM-क्वाशियोरकोर-मरास्मस, विटामिन-तालिका, खनिज-तालिका, राष्ट्रीय-पोषण-अभियान)। Notes गए `mppsc-syllabus/prelims-notes/unit-06-science-technology-public-health/05-poshan-ahar-poshak-tatva-kuposhan/`। स्रोत — WCD-मंत्रालय/ICMR-NIN/MoHFW आधिकारिक-तथ्य, सभी संख्यात्मक-आँकड़े (RDA-2020, NFHS-5/6 MP-डेटा, NIDDCP-मानक, पोषण अभियान-लक्ष्य) वेब-सत्यापित। उपयोगकर्ता ने शोध-चरण में "not covering facts in depth" फ़ीडबैक दी — इसके पश्चात प्रत्येक-बिंदु हेतु अतिरिक्त-लक्षित-खोज (कुल ~14 वेब-खोज) करके प्रत्येक-नोट में तुलनात्मक-तालिकाएँ/सटीक-संख्याएँ/तिथियाँ जोड़ी गईं, विशेषकर बिंदु-4 (NFHS-6 — **MP भारत में सर्वाधिक-दुर्बलता-प्रसार-दर वाला राज्य, 18.9%→23.8%** — इस फ़ाइल का सर्वोच्च-मूल्य-तथ्य)।

- [x] 1 पोषण — ICDS/पोषण ट्रैकिंग — आधार → `01-poshan-icds-poshan-tracking-aadhar.md` (ICDS-2अक्टूबर1975/विश्व-सबसे-बड़ा; 6-सेवाएँ-तालिका; अब "सक्षम आंगनवाड़ी एवं पोषण 2.0"-अंतर्गत 5-योजना-एकीकृत; पोषण ट्रैकर-मार्च2026-14.03लाख-AWC/8.95cr+लाभार्थी; Poshan Bhi Padhai Bhi-10मई2023)
- [x] 2 कैलोरी/प्रोटीन/सूक्ष्म-पोषक तत्व — सिफारिशें → `02-kalori-protein-sukshma-poshak-tatva-sifarishen.md` (ICMR-NIN RDA2020-पहली-बार-EAR+RDA, प्रोटीन0.83g/kg[2010-1g/kg-से-कम], कैलोरी-तालिका-गतिहीन/मध्यम/भारी-पुरुष-महिला, मैक्रो-अनुपात50-60/20-30/10-15%)
- [x] 3 आयोडीन/आयरन/विटामिन A — सार्वजनिक स्वास्थ्य महत्व → `03-iodine-iron-vitamin-a-sarvajanik-swasthya-mahatva.md` (कांगड़ा-परीक्षण1956-72→NGCP1962→NIDDCP1992, मानक15/30ppm; AMB-"6×6×6"-रणनीति-पूर्ण-विवरण, IFA-सिरप-अनुसूची; विटामिन-A-9माह-5वर्ष-9खुराकें)
- [x] 4 MP — कुपोषण/एनीमिया — ICDS/पोषण अभियान क्रियान्वयन → `04-mp-kuposhan-anemia-icds-poshan-abhiyan-kriyanvayan.md` (विश्व-बैंक-11-फ़ोकस-राज्य; NFHS-5-महिला-एनीमिया52.5%→54.7%; **NFHS-6-दुर्बलता18.9%→23.8%-भारत-सर्वाधिक**, कम-वज़न33%→39.7%, विशिष्ट-स्तनपान74%→56.4%, न्यूनतम-स्वीकार्य-आहार-केवल12%)
- [x] 5 प्रिसीजन न्यूट्रिशन — डिजिटल डाइट (रुझान) → `05-precision-nutrition-digital-diet-rujhan.md` (वैश्विक-बाज़ार$19.06bn[2025]→$22.12bn[2026]/CAGR16.1%; AI-उप-क्षेत्र-CAGR20.10%; एशिया-प्रशांत-सबसे-तेज़-क्षेत्र)
- [x] 6 संतुलित आहार — अवधारणा एवं घटक → `06-santulit-ahar-avdharna-evam-ghatak.md` (ICMR-NIN "My Plate for India"-न्यूनतम8-खाद्य-समूह, आधी-थाली-सब्ज़ी-फल; छिपी-भूख-रोकथाम+NCD-जोखिम-कमी)
- [x] 7 कुपोषण के प्रकार — PEM (क्वाशियोरकोर, मरास्मस) → `07-kuposhan-ke-prakar-protein-urja-kuposhan-kwashiorkor-marasmus.md` (मरास्मस-सभी-मैक्रोपोषक-कमी-शोफ़-रहित बनाम क्वाशियोरकोर-प्रोटीन-विशिष्ट-कमी-शोफ़-फूला-उदर, पूर्ण-तुलनात्मक-तालिका)
- [x] 8 विटामिन — प्रकार, स्रोत एवं अभाव-जनित रोग → `08-vitamin-prakar-strot-abhav-janit-rog.md` (वसा-घुलनशील-A/D/E/K बनाम जल-घुलनशील-B-कॉम्प्लेक्स+C; पूर्ण-12-विटामिन-अभाव-रोग-तालिका; विटामिन-D-सूर्य-संश्लेषण)
- [x] 9 खनिज लवण — कमी से रोग → `09-khanij-lavan-calcium-iron-iodine-kami-rog.md` (वृहत्-बनाम-सूक्ष्म-खनिज; कैल्शियम-ऑस्टियोपोरोसिस/आयरन-एनीमिया/आयोडीन-घेंघा+संज्ञानात्मक-हानि/ज़िंक-प्रतिरक्षा-दमन तालिका)
- [x] 10 पोषण अभियान (राष्ट्रीय) — लक्ष्य एवं रणनीति → `10-poshan-abhiyan-rashtriya-lakshya-evam-rananiti.md` (8मार्च2018-झुंझुनू-शुभारंभ; 4-वार्षिक-लक्ष्य-तालिका; 5-स्तम्भ-पूर्ण-सूची; पोषण2.0-इनपुट→आउटपुट-बदलाव)

**🎉 checklist-फ़ाइल 05 (Unit 6, 10 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 06 — `06-anuvanshik-rog-sickle-cell-anemia.md` (8 points) — user confirmed start, COMPLETE

अनुवांशिक-रोग-केंद्रित फ़ाइल, MP-अत्यंत-प्रासंगिक (राष्ट्रीय सिकल सेल एनीमिया उन्मूलन मिशन का शुभारंभ-स्थल शहडोल, MP)। Notes गए `mppsc-syllabus/prelims-notes/unit-06-science-technology-public-health/06-anuvanshik-rog-sickle-cell-anemia/`। स्रोत — मानक-चिकित्सा/आनुवंशिकी-सन्दर्भ+PIB/ICMR-शोध, सभी संख्यात्मक-तथ्य वेब-सत्यापित। उपयोगकर्ता ने बिंदु-2 (सिकल-सेल-कारण/लक्षण) लिखे-जाने के तुरंत-बाद पुनः "not covering facts in depth" फ़ीडबैक दी — बिंदु-2 को वाहक-बनाम-रोग(AS-बनाम-SS)-भेद, प्रमुख-जटिलताएँ (तीव्र-वक्ष-संलक्षण/प्लीहा-पृथक्करण-संकट/स्ट्रोक/प्रायपिज़्म), जीवन-प्रत्याशा-आँकड़े एवं भारत-प्रसार-दर से अतिरिक्त-शोध द्वारा समृद्ध किया गया — यह गहराई-मानक शेष-सभी-बिंदुओं में शुरू-से बनाए रखा गया।

- [x] 1 जेनेटिक्स — मेंडल के नियम (क्रॉस-रेफ) → `01-genetics-mendel-ke-niyam-cross-ref.md` (checklist-फ़ाइल-01/बिंदु-16 का पूर्ण-नोट पहले-से-मौजूद; यहाँ केवल फ़ाइल-सम्बन्ध+वंश-आलेख-प्रासंगिकता जोड़ी गई)
- [x] 2 सिकल सेल एनीमिया — कारण, लक्षण, प्रभाव → `02-sickle-cell-anemia-karan-lakshan-prabhav.md` (HBB-जीन-गुणसूत्र-11-बिंदु-उत्परिवर्तन Glu6Val/HbS; वाहक(AS)-बनाम-रोग(SS)-भेद; जटिलताएँ तीव्र-वक्ष-संलक्षण/प्लीहा-पृथक्करण-संकट/स्ट्रोक/प्रायपिज़्म; जीवन-प्रत्याशा~52.6वर्ष; भारत-SCD~1.17%/SCT~5.9%)
- [x] 3 सिकल सेल एनीमिया — निदान विधियाँ (स्क्रीनिंग टेस्ट) → `03-sickle-cell-anemia-nidan-vidhiyan-screening-test.md` (सिकलिंग-टेस्ट/घुलनशीलता-टेस्ट/हीमोग्लोबिन-इलेक्ट्रोफ़ोरेसिस-स्वर्ण-मानक/HPLC; **"Gazelle"-point-of-care-डिवाइस — MP+छत्तीसगढ़-जनजातीय-क्षेत्र-मूल्यांकित**)
- [x] 4 राष्ट्रीय सिकल सेल एनीमिया उन्मूलन मिशन — लक्ष्य एवं रणनीति → `04-rashtriya-sickle-cell-anemia-unmoolan-mission-lakshya-rananiti.md` (**1जुलाई2023-शुभारंभ PM मोदी-शहडोल(MP)**; लक्ष्य2047; 7करोड़+स्क्रीनिंग-लक्ष्य/6करोड़-स्क्रीनिंग-में18.85लाख+चिह्नित; 17राज्य/278ज़िले)
- [x] 5 थैलेसीमिया — कारण, प्रकार, प्रभाव → `05-thalassemia-karan-prakar-prabhav.md` (ग्लोबिन-शृंखला-अपर्याप्त-उत्पादन बनाम सिकल-सेल-संरचना-दोष-भेद; अल्फ़ा-4-एलील-विलोपन-तालिका; बीटा-माइनर/इंटरमीडिया/मेजर; भारत-वाहक-दर~3-4%)
- [x] 6 सिकल सेल रोग का वंशानुक्रम पैटर्न (ऑटोसोमल रिसेसिव) → `06-sickle-cell-rog-vanshanukram-pattern-autosomal-recessive.md` (गुणसूत्र-11-ऑटोसोमल-रिसेसिव; AS×AS→25%रोग/50%वाहक/25%सामान्य-क्रॉस-तालिका; एंडोगैमी-भूमिका)
- [x] 7 अन्य सामान्य अनुवांशिक रोग — हीमोफीलिया, डाउन सिंड्रोम → `07-anya-samanya-anuvanshik-rog-hemophilia-down-syndrome.md` (हीमोफीलिया-X-लिंग्ड-रिसेसिव-A/B-फ़ैक्टर-VIII/IX; डाउन-सिंड्रोम-गुणसूत्र-21-अनियोजन-Trisomy21; 4-रोग-4-भिन्न-आनुवंशिक-तंत्र-संश्लेषणात्मक-तालिका)
- [x] 8 जनजातीय समुदायों में सिकल सेल एनीमिया की व्यापकता (MP संदर्भ) → `08-janjatiya-samudayon-mein-sickle-cell-anemia-vyapakta-mp-sandarbh.md` (**MP-भारत-में-सर्वाधिक-बोझ — 9.61लाख+वाहक/67,861रोग-ग्रस्त, 45-में-27-ज़िले-सिकल-बेल्ट, HbS10-33%**; भरिया~20%/कोरकू~15%-समान-ज़िले-भिन्न-दर; शहडोल-उच्च-घटना-क्षेत्र)

**🎉 checklist-फ़ाइल 06 (Unit 6, 8 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 07 — `07-swasthya-niti-sankramak-rog-swasthya-sanketak.md` (74 points, Unit 6 की सबसे-बड़ी फ़ाइल — 64-बिंदु checklist-01 से भी बड़ी) — user confirmed start, COMPLETE

Unit 6 की अंतिम एवं सबसे-विशाल checklist-फ़ाइल — 13 उप-खंड: स्वास्थ्य-तंत्र-ढाँचा(1-5), टीकाकरण(6-8), संक्रामक-रोग-नियंत्रण(9-19), नशा/तम्बाकू(19अ), असंचारी-रोग/NCDs(20-25), मातृ-शिशु-स्वास्थ्य(26-28), महामारी-विज्ञान/निगरानी(29-33), व्यावसायिक-स्वास्थ्य/स्वच्छता/जल(34-39), अस्पताल/प्रयोगशाला-प्रबंधन(40-48), चिकित्सा-उपकरण/तकनीक(49-54), डिजिटल-स्वास्थ्य(55-61), समुदाय-स्वास्थ्य-कार्यकर्ता(62-63), आपदा-सम्बद्ध-स्वास्थ्य-जोखिम(64-73, checklist-द्वारा-स्वयं "क्रॉस-रेफ Unit-7" चिह्नित — यहाँ केवल-स्वास्थ्य-पक्ष-केंद्रित, विस्तृत-आपदा-प्रबंधन-ढाँचा Unit-7 हेतु आरक्षित)। Notes गए `mppsc-syllabus/prelims-notes/unit-06-science-technology-public-health/07-swasthya-niti-sankramak-rog-swasthya-sanketak/`। उपयोगकर्ता ने शुरुआत में ही "cover all facts in very depth, nothing should miss" स्पष्ट-निर्देश दिया — सत्र-भर बार-बार "not covering facts in depth"/"missing facts"/"dont add filler lines" फ़ीडबैक दोहराई — इसके अनुक्रम में बिंदु-17(नाइट्रेट-अनुभाग-से-interpretive-filler-हटाई), बिंदु-21(NCD-सेल-स्तरीय-संरचना+निःशुल्क-दवा-प्रावधान जोड़ा), बिंदु-43(मानक-सावधानियाँ+संचरण-आधारित-3-प्रकार+PPE-पहनना-उतारना-क्रम जोड़ा), बिंदु-59(DHIS2-2-मॉड्यूल+RCH-पोर्टल-सम्बन्ध जोड़ा) — सभी अतिरिक्त-वेब-खोज से समृद्ध किए गए, यही गहराई-मानक शेष-सभी-70+-बिंदुओं में शुरू-से बनाए रखा गया।

**स्वास्थ्य-तंत्र-ढाँचा (1-5):**
- [x] 1 स्वास्थ्य तंत्र — प्राथमिक/द्वितीयक/तृतीयक — ढाँचा → `01-swasthya-tantra-prathmik-dwitiyak-tritiyak-dhancha.md` (SC-3000-5000जन/PHC-20000-30000जन/CHC-80000-1,20,000जन; CHC-4-विशेषज्ञ+21-पैरामेडिकल; IPHS-2007→2012→2022-संशोधन)
- [x] 2 राष्ट्रीय स्वास्थ्य मिशन — विज़न/घटक → `02-rashtriya-swasthya-mission-vision-ghatak.md` (NRHM-12अप्रैल2005→NUHM-1मई2013→NHM-2013; 3-घटक-स्वास्थ्य-तंत्र-सुदृढ़ीकरण/RMNCH+A/संचारी-असंचारी-रोग)
- [x] 3 आयुष्मान भारत — AB-PMJAY → `03-ayushman-bharat-pmjay-swasthya-bima.md` (सितंबर2018-राँची; ₹5लाख/परिवार/वर्ष; **आयुष्मान-भारत-70+ — 11सितंबर2024-स्वीकृति/12सितंबर2024-प्रभावी**)
- [x] 4 आयुष्मान भारत स्वास्थ्य एवं कल्याण केंद्र (AB-HWC) → `04-ayushman-bharat-hwc-sc-phc-unnayan.md` (आयुष्मान आरोग्य मंदिर-लक्ष्य1.5लाख/प्रगति1.7लाख+; 12-सेवा-पैकेज पूर्ण-सूची)
- [x] 5 MP — स्वास्थ्य ढाँचा: जिलावार SC/PHC/CHC → `05-mp-swasthya-dhancha-jilavar-sc-phc-chc-overview.md` (MP-2005-2022-1,413-उप-केंद्र-वृद्धि; ईमानदार-सीमा-स्वीकार जहाँ सटीक-वर्तमान-कुल-आँकड़ा उपलब्ध-नहीं)

**टीकाकरण (6-8):**
- [x] 6 टीकाकरण कार्यक्रम — UIP/कोल्ड-चेन → `06-tikakaran-karyakram-uip-cold-chain-aadhar.md` (UIP-12-रोग[राष्ट्रीय-9+उप-राष्ट्रीय-3]; मिशन-इंद्रधनुष-दिसंबर2014→IMI-2017; 2023-12-चरण/765-ज़िले/5.46cr-शिशु)
- [x] 7 वैक्सीन कोल्ड-चेन — VVM → `07-vaccine-cold-chain-vvm-tapman-monitoring.md` (VVM-समय-तापमान-संकेतक, भारत-1998-OPV-प्रथम-प्रयोग; eVIN)
- [x] 8 mRNA/वेक्टर प्लेटफॉर्म (क्रॉस-रेफ) → `08-mrna-vector-platform-vaccine-taknik-cross-ref.md` (checklist-फ़ाइल-01/बिंदु-56 पूर्ण-नोट-क्रॉस-रेफ)

**संक्रामक रोग एवं नियंत्रण कार्यक्रम (9-19):**
- [x] 9 TB उन्मूलन — रणनीति → `09-kshay-rog-tb-unmoolan-rananiti-aadhar.md` (NTEP-2025-लक्ष्य; DTPB-4-स्तंभ; PM-TB-मुक्त-भारत-अभियान-9सितंबर2022, "निक्षय मित्र")
- [x] 10 राष्ट्रीय टीबी उन्मूलन — निदान एल्गोरिद्म → `10-rashtriya-tb-unmoolan-nidan-algorithm.md` (स्मियर+CXR→CBNAAT/Truenat[भारत-स्वदेशी]; सार्वभौमिक-DST)
- [x] 11 MP — TB उन्मूलन — जिला-लिंक्ड रणनीति → `11-mp-tb-unmoolan-jila-linked-rananiti.md` (MP-2023-28,299-मामले; Ni-kshay-पोर्टल-MP-ज़िला-अध्ययन)
- [x] 12 मलेरिया/डेंगू — वेक्टर नियंत्रण → `12-malaria-dengue-vector-niyantran.md` (NVBDCP-2003-04, 6-रोग, 3-उन्मूलन-लक्षित)
- [x] 13 MP — मलेरिया/डेंगू — हॉटस्पॉट → `13-mp-malaria-dengue-hotspot-mausami-rujhan.md` (**मंडला-MEDP — 87%-गिरावट(2017-20); बालाघाट-डिंडोरी-जबलपुर-सिवनी पुनरुत्थान-जोखिम**)
- [x] 14 वेक्टर-जनित रोग निगरानी — GIS/डैशबोर्ड → `14-vector-janit-rog-nigrani-gis-dashboard.md` (IDSP-डेटा-आधारित मानचित्रण, डेंगू-चिकनगुनिया-सिंडेमिक-विश्लेषण)
- [x] 15 HIV/STD — ART → `15-hiv-std-rokthaam-art-aadhar.md` (NACP-V "95-95-95"-लक्ष्य-2025; "Treat All"-नीति-2017; 740-ART-केंद्र)
- [x] 16 जलजनित रोग — WASH लिंक → `16-jaljanit-rog-diarrhea-typhoid-wash-link.md` (भारत-3.77cr/वर्ष-प्रभावित; 15लाख-बाल-मृत्यु/डायरिया)
- [x] 17 जल गुणवत्ता — फ्लोराइड/आर्सेनिक/नाइट्रेट → `17-jal-gunvatta-fluoride-arsenic-nitrate-swasthya-prabhav.md` (फ्लोराइड-20/29-राज्य/41.1cr-जनसंख्या; आर्सेनिक-गंगा-मैदान-पूर्वी-राज्य — user-फ़ीडबैक-पर filler-हटाई)
- [x] 18 AMR — स्टीवर्डशिप (रुझान) → `18-antimicrobial-resistance-amr-stewardship-rujhan.md` (**NAP-AMR2.0 — 18नवंबर2025-शुभारंभ, 2025-2029**; रेड-लाइन-अभियान; जयपुर-घोषणा-पत्र-2011)
- [x] 19 वन हेल्थ (रुझान) → `19-van-health-manav-pashu-paryavaran-interface-rujhan.md` (राष्ट्रीय-वन-हेल्थ-मिशन-2022, ₹383cr; 75%-नए-रोग-पशु-मूल)

**नशा/तम्बाकू नियंत्रण (19अ):**
- [x] 19अ तम्बाकू/मादक द्रव्य नियंत्रण → `19a-tambaku-madak-dravya-niyantran-niti-karyakram.md` (COTPA-2003-पूर्ण-धारा-तालिका; NTCP-2007-08)

**असंचारी रोग/NCDs (20-25):**
- [x] 20 NCDs — जोखिम कारक → `20-ncd-hriday-rog-madhumeh-cancer-jokhim-karak.md` (भारत-65%+मृत्यु-NCD-कारण; NPCDCS)
- [x] 21 NCD क्लिनिक/HWC — प्रबंधन → `21-ncd-clinic-hwc-uchch-raktchap-madhumeh-prabandhan.md` (5-NCD-स्क्रीनिंग-30+आयु; **NCD-सेल[राष्ट्रीय/राज्य/ज़िला]-बनाम-NCD-क्लिनिक[ज़िला/CHC/SDH]-स्तरीय-संरचना+न्यूनतम1माह-निःशुल्क-दवा — user-फ़ीडबैक-पर समृद्ध**)
- [x] 22 आहार/जीवनशैली — NCD रोकथाम → `22-ahar-jivanshaili-ncd-rokthaam.md` (checklist-Unit-6/file-05-क्रॉस-रेफ; निष्क्रियता45.8%/मोटापा46.1%)
- [x] 23 मानसिक स्वास्थ्य → `23-mansik-swasthya-samuday-aadharit-dekhbhal.md` (DMHP-767-ज़िले; **Tele MANAS — बजट2022-23, हेल्पलाइन14416, 20-भाषा**)
- [x] 24 दंत स्वास्थ्य → `24-dant-swasthya-fluoride-mukh-swachchta.md` (पेरियोडोंटल-रोग90-95%; दंत-क्षय-बच्चे60-80%; फ्लोराइड-द्वैत-भूमिका[checklist-बिंदु-17-से-भेद])
- [x] 25 विकलांगता समावेशन → `25-viklangta-samaveshan-screening-punarvas.md` (RPwD-2016-15जून2017-प्रवर्तन; UDID-सितंबर2024-अनिवार्य)

**मातृ-शिशु स्वास्थ्य (26-28):**
- [x] 26 मातृ-शिशु स्वास्थ्य — ANC/PNC → `26-matra-shishu-swasthya-anc-pnc-imnci.md` (PMSMA-2016-प्रति-माह-9तारीख; JSSK-1जून2011; LaQshya-2017)
- [x] 27 स्कूल स्वास्थ्य/आयुष्मान स्कूल कार्यक्रम → `27-school-swasthya-ayushman-school-karyakram.md` (AB-SHWP-फरवरी2020; प्रति-स्कूल-2-"स्वास्थ्य-कल्याण-दूत")
- [x] 28 MP — स्कूल स्वास्थ्य/डेंगू जागरूकता → `28-mp-school-swasthya-dengue-jagrukta-shivir.md` (**AIIMS-भोपाल-बड़खेड़ी-स्कूल-डेंगू-मलेरिया-चिकनगुनिया-जागरूकता**)

**महामारी विज्ञान एवं निगरानी (29-33):**
- [x] 29 महामारी विज्ञान — Incidence/Prevalence/R0 → `29-mahamari-vigyan-incidence-prevalence-r0-avdharnayen.md` (प्रसार=घटना×अवधि; R0>1/=1/<1)
- [x] 30 स्क्रीनिंग — संवेदनशीलता/PPV/NPV → `30-screening-sanvedansheelta-vishishtata-ppv-npv.md` (सूत्र-तालिका; PPV/NPV-प्रसार-निर्भर)
- [x] 31 स्वास्थ्य सूचना प्रणाली — HMIS/IDSP → `31-swasthya-suchna-pranali-hmis-idsp.md` (IDSP-नवंबर2004-विश्व-बैंक; S-P-L-प्रारूप; IHIP)
- [x] 32 IDSP — प्रकोप जाँच के चरण → `32-idsp-prakop-janch-charan.md` (10-चरण-पूर्ण-तालिका)
- [x] 33 डेटा गुणवत्ता/इंटरऑपरेबिलिटी → `33-data-gunvatta-interoperability-swasthya-suchna-vinimay.md` (checklist-Unit-9-क्रॉस-रेफ; IHIP+ABDM)

**व्यावसायिक स्वास्थ्य, स्वच्छता एवं जल-प्रबंधन (34-39):**
- [x] 34 व्यवसायजन्य स्वास्थ्य/सुरक्षा → `34-vyavsayjanya-swasthya-suraksha-ppe-ergonomics.md` (कारखाना-अधिनियम1948+खान-अधिनियम1952; BIS-PPE-मानक)
- [x] 35 हाथ धुलाई — 5 मोमेंट्स → `35-hath-dhulai-5-moments-sabun-sanitizer.md` (WHO-5-क्षण-तालिका; ABHR-न्यूनतम60%-अल्कोहल)
- [x] 36 फीकल स्लज मैनेजमेंट → `36-fecal-sludge-management-vikendrikrit-pranali.md` (FSSM-नीति-फरवरी2017; 24+राज्य-अपनाई)
- [x] 37 ग्रामीण स्वच्छता — ODF→ODF+/++ → `37-gramin-swachchta-odf-odf-plus-avdharna.md` (3-स्तरीय-परिभाषा-तालिका)
- [x] 38 MP — जल/स्वच्छता — FHTC → `38-mp-jal-swachchta-gramin-piped-jal-fhtc.md` (**MP-JJM-पिछड़ता-राज्य**; राष्ट्रीय-81.57%[जनवरी2026])
- [x] 39 पेयजल — डिज़ाइन/क्लोरीनेशन → `39-peyjal-design-chlorination-aadhar.md` (IS-10500; अवशिष्ट-क्लोरीन0.2mg/L; विषाणु-निष्क्रियकरण0.5mg/L/1घंटा)

**अस्पताल एवं प्रयोगशाला प्रबंधन (40-48):**
- [x] 40 प्रयोगशाला — बायोसेफ्टी BSL-1-4 → `40-prayogshala-biosafety-star-bsl-1-se-4.md` (4-स्तर-तालिका, TB-BSL3/इबोला-BSL4)
- [x] 41 बायोमेडिकल कचरा — पृथक्करण → `41-biomedical-kachra-prathakkaran-upchar.md` (BMW-नियम2016-10→4-श्रेणी; 4-रंग-कोड-तालिका)
- [x] 42 मेडिकल वेस्ट — शार्प/पैथोलॉजिकल → `42-medical-waste-sharp-pathological-handling.md` (पंचर-प्रूफ़-कंटेनर; पुनः-कैपिंग-निषेध)
- [x] 43 हॉस्पिटल इन्फेक्शन कंट्रोल → `43-hospital-infection-control-hand-hygiene-antisepsis.md` (**मानक-सावधानियाँ+संचरण-आधारित-3-प्रकार[संपर्क/बूँद/वायु-जनित]+PPE-पहनना-उतारना-क्रम — user-फ़ीडबैक-पर समृद्ध**)
- [x] 44 क्लीन रूम/नकारात्मक दाब → `44-clean-room-negative-pressure-sankraman-niyantran.md` (नकारात्मक-दाब[TB-आइसोलेशन] बनाम धनात्मक-दाब[OT])
- [x] 45 टिश्यू बैंकिंग/ब्लड बैंक → `45-tissue-banking-blood-bank-suraksha.md` (5-अनिवार्य-TTI-जाँच; NAT; NBTC)
- [x] 46 स्टरलाइजेशन — ऑटोक्लेव/ETO → `46-sterilization-autoclave-eto.md` (121°C/15psi/15-20मिनट; ETO-ऊष्मा-संवेदनशील-उपकरण)
- [x] 47 फार्माकोविजिलेंस — AEFI/ADR → `47-pharmacovigilance-aefi-adr-nigrani.md` (PvPI-जुलाई2010→IPC-ग़ाज़ियाबाद-अप्रैल2011; Vigibase/Vigiflow)
- [x] 48 फार्मास्यूटिक्स — डोज़-फ़ॉर्म → `48-pharmaceutics-dose-form-jaivupalabdhata.md` (IV=100%-जैवउपलब्धता; प्रथम-पास-चयापचय)

**चिकित्सा उपकरण एवं तकनीक (49-54):**
- [x] 49 रेडियोलॉजी — X-ray/CT/MRI → `49-radiology-xray-ct-mri-aadhar.md` (आयनकारी[X-ray/CT] बनाम गैर-आयनकारी[MRI])
- [x] 50 अल्ट्रासाउंड/डॉप्लर → `50-ultrasound-doppler-clinical-upyog.md` (PCPNDT-1994-लिंग-निर्धारण-प्रतिबंध)
- [x] 51 एनेस्थीसिया — जनरल/लोकल → `51-anesthesia-general-local-suraksha-aadhar.md` (3-प्रकार-तालिका)
- [x] 52 पल्स ऑक्सिमीटर/ECG → `52-pulse-oximeter-ecg-karya-siddhant.md` (PPG-प्रकाशिक बनाम ECG-विद्युतीय; P-QRS-T)
- [x] 53 इन्फ्यूजन पम्प/सिरिंज पम्प → `53-infusion-pump-syringe-pump-safety-alert.md` (वायु-बुलबुला/अवरोध/मुक्त-प्रवाह-अलार्म)
- [x] 54 मेडिकल ऑक्सीजन — PSA/क्रायोजेनिक → `54-medical-oxygen-psa-cryogenic-logistics.md` (**PM CARES — 1,224-प्लांट-स्वीकृत/1,100+चालू/1,750+MT/दिन**)

**डिजिटल स्वास्थ्य (55-61):**
- [x] 55 डिजिटल हेल्थ — टेलीमेडिसिन (रुझान) → `55-digital-health-telemedicine-ehr-rujhan.md` (eSanjeevani-नवंबर2019→OPD-अप्रैल2020; 2025-43cr+टेलीकंसल्टेशन)
- [x] 56 MP — दूरदराज़ टेलीमेडिसिन लाभ → `56-mp-doordaraj-kshetra-telemedicine-labh.md` (**MP-शीर्ष-10-राज्य, 40.16लाख-टेलीकंसल्टेशन**; eSanjeevani2.0-मार्च2023)
- [x] 57 AI-रेडियोलॉजी/पैथोलॉजी (रुझान) → `57-ai-radiology-pathology-clinical-nirnay-sahayata-rujhan.md` (**qXR-भारत-मूल-TB-AI, नागपुर-15.8%-यील्ड-वृद्धि**)
- [x] 58 वियरेबल/रिमोट मॉनिटरिंग (रुझान) → `58-wearable-remote-monitoring-chronic-care-rujhan.md` (10cr+मधुमेह-ग्रस्त-भारत; RPM-बाज़ार-CAGR14.74%)
- [x] 59 ओपन-सोर्स प्लेटफ़ॉर्म (रुझान) → `59-jan-swasthya-open-source-platform-rujhan.md` (**DHIS2-73-देश/भारत-2006-से-22-राज्य; एग्रीगेट-बनाम-ट्रैकर-मॉड्यूल+RCH-पोर्टल — user-फ़ीडबैक-पर समृद्ध**)
- [x] 60 एयर क्वालिटी सेंसर्स (रुझान) → `60-air-quality-sensors-low-cost-network-rujhan.md` (CAAQMS[CPCB]+SAFAR[IITM-पुणे])
- [x] 61 GIS/स्थानिक विश्लेषण → `61-gis-sthanik-vishleshan-swasthya-aapda-upyog.md` (checklist-बिंदु-14/Unit-9-संश्लेषण)

**समुदाय-स्तरीय स्वास्थ्य कार्यकर्ता (62-63):**
- [x] 62 MP — ASHA/आंगनवाड़ी — समुदाय लिंक → `62-mp-asha-anganwadi-samuday-link.md` (**MP-₹4,000/माह-राज्य-टॉप-अप**; बजट2024-25-25%-प्रोत्साहन-वृद्धि)
- [x] 63 स्वास्थ्य व्यवहार — Nudge/IEC/SBCC → `63-swasthya-vyavhar-nudge-iec-sbcc-sanchar-rananiti.md` (IEC→BCC→SBCC-विकास-क्रम; JEEViKA-बिहार-उदाहरण)

**आपदा-संबंधित स्वास्थ्य जोखिम (64-73, Unit-7-क्रॉस-रेफ, स्वास्थ्य-पक्ष-केंद्रित):**
- [x] 64 आपदा प्रबंधन — जोखिम/भेद्यता/क्षमता → `64-aapda-prabandhan-jokhim-bhedyata-kshamta-aadhar.md` (NDMA-PM-अध्यक्षता)
- [x] 65 भूकंप — पैमाना/निर्माण कोड → `65-bhukamp-paimana-nirman-code-suraksha.md` (IS1893:2025-नया-ज़ोन-6; भारत-61%-भूभाग-मध्यम-उच्च-जोखिम)
- [x] 66 चक्रवात/बाढ़ — अलर्ट → `66-chakravat-baad-alert-pratikriya.md` (IMD-4-रंग-कोड-तालिका; पोस्ट-लैंडफ़ॉल-आउटलुक)
- [x] 67 औद्योगिक आपदा — MSDS → `67-audyogik-aapda-rasayanik-hazmat-msds.md` (**भोपाल गैस-त्रासदी — 3दिसंबर1984, 15,000-20,000-मृत्यु — विश्व-सबसे-बड़ी-औद्योगिक-आपदा, MP-प्रत्यक्ष**)
- [x] 68 वायु गुणवत्ता — PM2.5/NOx/SO2 → `68-vayu-gunvatta-pm25-nox-so2-swasthya-jokhim.md` (AQI-2014-CPCB; 6-श्रेणी; 8-प्रदूषक)
- [x] 69 हीट वेव — प्रारंभिक चेतावनी → `69-heat-wave-prarambhik-chetavani-cooling-rananiti.md` (2024-459-मृत्यु; हीट-वेव-"अधिसूचित-आपदा"-नहीं; HAP-23राज्य/130+शहर)
- [x] 70 कोल्ड वेव/पाला → `70-cold-wave-pala-swasthya-jokhim.md` (IMD-मानदंड-तालिका; हाइपोथर्मिया-फ़्रॉस्टबाइट)
- [x] 71 एलर्जेन/वायुजनित कण → `71-allergen-vayujanit-kan-asthma-allergy.md` (PM2.5+एलर्जेन-संयुक्त-प्रभाव)
- [x] 72 खाद्य सुरक्षा — कोल्ड चेन ब्रेक → `72-khadya-suraksha-cold-chain-break-khadyajanit-jokhim.md` (डेंजर-ज़ोन4-60°C; 2-घंटे-नियम)
- [x] 73 फूड सेफ्टी — FSSAI/लेबलिंग → `73-food-safety-fssai-labelling-aadhar.md` (FSS-अधिनियम2006; 3-स्तरीय-लाइसेंसिंग-2026-संशोधित-सीमा; लेबलिंग-अनिवार्य-तत्व)

**🎉🎉 checklist-फ़ाइल 07 (Unit 6, 74 बिंदु) पूर्ण रूप से समाप्त 🎉🎉**

---

## 🎉🎉🎉 MAJOR MILESTONE: सम्पूर्ण Unit 6 (विज्ञान, प्रौद्योगिकी एवं लोक स्वास्थ्य) की सभी 7 checklist-फ़ाइलें अब पूर्ण रूप से समाप्त 🎉🎉🎉

`mppsc-syllabus/prelims/unit-06-science-technology-public-health/` में कुल **7 checklist-फ़ाइलें** — **सभी अब `mppsc-syllabus/prelims-notes/unit-06-science-technology-public-health/` में गहन, तथ्य-सत्यापित नोट्स के साथ पूर्ण**:
- 01-vigyan-shakhayen-pratham-gyan (64 बिंदु) ✅
- 02-vaigyanik-sansthayen (11 बिंदु) ✅
- 03-upgrah-antariksh-praudyogiki (18 बिंदु) ✅
- 04-manav-sharir-sanrachna (11 बिंदु) ✅
- 05-poshan-ahar-poshak-tatva-kuposhan (10 बिंदु) ✅
- 06-anuvanshik-rog-sickle-cell-anemia (8 बिंदु) ✅
- 07-swasthya-niti-sankramak-rog-swasthya-sanketak (74 बिंदु) ✅

**कुल = 196 बिंदु/नोट्स, संपूर्ण Unit 6 के लिए।**

इस-यूनिट में उपयोगकर्ता ने सत्र-भर बार-बार गहराई/तथ्य-पूर्णता पर बल दिया ("not covering facts in depth," "missing facts," "dont add filler lines," "must cover all facts nothing should miss") — प्रत्येक-फ़ीडबैक पर तुरंत खुले-बिंदु को अतिरिक्त-लक्षित-वेब-खोज से समृद्ध किया गया, तथा एक-अवसर पर वास्तविक-interpretive-filler (गैर-तथ्यात्मक-हेज़िंग-वाक्य) पहचानकर हटाया गया — दोनों-दिशा (गहराई-बढ़ाना + filler-हटाना) की प्रतिक्रिया को समान-गंभीरता से लिया गया।

## Unit 7 — environment-biodiversity-sdg-disaster — prelims-notes (शुरू)

उपयोगकर्ता ने Unit 6 पूर्ण होने के पश्चात Unit 7 (पर्यावरण/जैवविविधता/SDG/आपदा) पर आगे बढ़ने का निर्देश दिया। `mppsc-syllabus/prelims/unit-07-environment-biodiversity-sdg-disaster/` में **3 checklist-फ़ाइलें** — कुल **153 बिंदु** — Unit 6 से भी बड़ा यूनिट:
- 01-satat-vikas-sdg (12 बिंदु — SDG-1-17-फ़्रेमवर्क/लोकलाइजेशन/इंटरलिंक)
- 02-paryavaraniya-karak-jaivvividhata-paristhitiki-tantra (57 बिंदु — पारिस्थितिकी-तंत्र/जैवविविधता/संरक्षण/संधियाँ)
- 03-pradushan-prakritik-aapdayen-prabandhan (84 बिंदु — प्रदूषण/जलवायु-परिवर्तन/आपदा-प्रबंधन/अपशिष्ट)

**फ़ॉर्मेट-निर्णय (AskUserQuestion द्वारा शुरुआत में तय):** Units 6/9 के समान **"Lean fact/formula sheet"** — घना MCQ-केंद्रित-प्रारूप, परिभाषाएँ/मुख्य-संख्या-तिथियाँ/तुलनात्मक-तालिकाएँ, स्थिर-अवधारणाओं हेतु NCERT-प्राथमिकता, नीतिगत/समसामयिक-बिंदुओं हेतु वेब-सत्यापन — कोई 800+-पंक्ति Mains-उत्तर-गहराई नहीं। Notes जाएंगे `mppsc-syllabus/prelims-notes/unit-07-environment-biodiversity-sdg-disaster/<NN-checklist-slug>/`। सभी standing-rules यथावत (NCERT-प्राथमिकता, तथ्य-सघनता बिना-padding, cross-referencing checklist-Unit-1/checklist-05/checklist-06/07/09 एवं checklist-Unit-6 की पहले-से-मौजूद-सम्बद्ध-सामग्री से)।

### Checklist file 01 — `01-satat-vikas-sdg.md` (12 points) — user confirmed start, COMPLETE

SDG-फ़्रेमवर्क-केंद्रित लघु-फ़ाइल। Notes गए `mppsc-syllabus/prelims-notes/unit-07-environment-biodiversity-sdg-disaster/01-satat-vikas-sdg/`। कई-बिंदु checklist-Unit-1/mpsi-file-05 (गरीबी/महिला-भूमिका/शहरीकरण) एवं checklist-Unit-6 (पोषण/WASH/ऊर्जा-प्रौद्योगिकी/स्वास्थ्य-नीति) की पहले-से-मौजूद-गहन-सामग्री से क्रॉस-रेफ, साथ-ही MP-विशिष्ट NITI Aayog SDG India Index 2023-24 आँकड़े वेब-सत्यापित।

- [x] 1 SDGs — 17 लक्ष्य/169 टारगेट — फ्रेमवर्क → `01-sdg-17-lakshya-169-target-framework.md` (25सितंबर2015-अपनाया/193-देश; MDGs[8-लक्ष्य]-से-उत्तराधिकारी; NITI Aayog-भारत-नोडल-एजेंसी)
- [x] 2 SDG-1/2/3 — गरीबी/शून्य भूख/स्वास्थ्य → `02-sdg-1-2-3-garibi-shunya-bhookh-swasthya-core-link.md` (mpsi-file-05-बिंदु-11-12+checklist-Unit-6/file-05/07-क्रॉस-रेफ)
- [x] 3 SDG-4/5 — शिक्षा/लैंगिक समानता → `03-sdg-4-5-shiksha-laingik-samanta-manav-punji.md` (mpsi-file-05-बिंदु-8/10-क्रॉस-रेफ; **MP-SDG-Index-लैंगिक-समानता-सबसे-कमज़ोर-क्षेत्र<50**)
- [x] 4 SDG-6 — जल/स्वच्छता — WASH → `04-sdg-6-jal-swachchta-wash-ekikaran.md` (checklist-Unit-6/file-07-बिंदु-16/37-39-क्रॉस-रेफ; MP-स्वच्छ-जल-स्कोर87)
- [x] 5 SDG-7 — स्वच्छ ऊर्जा → `05-sdg-7-swachchh-urja-pahunch-vitta.md` (checklist-Unit-6/file-01-ऊर्जा-अनुभाग-क्रॉस-रेफ; **MP-स्वच्छ-ऊर्जा-स्कोर90-MP-का-सबसे-मज़बूत-क्षेत्र**)
- [x] 6 SDG-11 — सतत शहर → `06-sdg-11-satat-shahar-kachra-parivahan-hariyali.md` (mpsi-file-05-बिंदु-14-15-क्रॉस-रेफ; MP-सतत-शहर-स्कोर86)
- [x] 7 SDG-12 — उत्तरदायी उपभोग — सर्कुलर अर्थव्यवस्था → `07-sdg-12-uttardayi-upbhog-circular-arthvyavastha.md` (checklist-Unit-7/file-03-3R/EPR-आगे-क्रॉस-रेफ)
- [x] 8 SDG-13/14/15 — जलवायु/समुद्री/स्थलीय → `08-sdg-13-14-15-jalvayu-samudri-sthaliya-jivan.md` (SDG-14: 300cr+आजीविका-निर्भर/$3ट्रिलियन-बाज़ार/महासागर-90%+ऊष्मा-अवशोषण)
- [x] 9 SDG-16/17 — शासन/साझेदारी → `09-sdg-16-17-shasan-sajhedari-data-vitta.md` (SDG-17="सक्षमकारी"-लक्ष्य, 5-स्तंभ)
- [x] 10 SDG लोकलाइजेशन — इंडेक्स/डैशबोर्ड → `10-sdg-localization-index-dashboard.md` (**NITI Aayog-4-श्रेणी-तालिका; भारत2023-24-स्कोर71; MP-स्कोर67(Front-Runner)/15-अंक-सुधार**)
- [x] 11 SDG-इंटरलिंक — ट्रेड-ऑफ/तालमेल → `11-sdg-interlink-trade-off-talmel-synergy.md` (तालमेल>ट्रेड-ऑफ; CO2-कमी-उदाहरण)
- [x] 12 क्लाइमेट-SDG सह-लाभ — मूल्यांकन → `12-climate-sdg-sah-labh-mulyankan.md` (पेरिस-समझौता+2030-एजेंडा-परस्पर-प्रबलक; सह-लाभ>ट्रेड-ऑफ)

**🎉 checklist-फ़ाइल 01 (Unit 7, 12 बिंदु) पूर्ण रूप से समाप्त।**

### Checklist file 02 — `02-paryavaraniya-karak-jaivvividhata-paristhitiki-tantra.md` (57 points, largest file in Unit 7) — user confirmed start, COMPLETE

पारिस्थितिकी-तंत्र-मूल-अवधारणा से MP-विशिष्ट-जैवविविधता तक — Unit 7 की सबसे-बड़ी checklist-फ़ाइल, 6 उप-खंड। Notes गए `mppsc-syllabus/prelims-notes/unit-07-environment-biodiversity-sdg-disaster/02-paryavaraniya-karak-jaivvividhata-paristhitiki-tantra/`। स्रोत — NCERT कक्षा-XII जीव-विज्ञान "पारितंत्र"/जैवविविधता-अध्याय स्थिर-अवधारणाओं हेतु प्राथमिक, समसामयिक/नीतिगत-बिंदुओं हेतु व्यापक-वेब-सत्यापन।

**पारिस्थितिकी तंत्र — मूल अवधारणाएँ (1-8) + जैवविविधता (9-20) — COMPLETE:** ऊर्जा-प्रवाह/लिंडेमन-10%-नियम, GPP/NPP/NEP-सूत्र, जैव-भू-रासायनिक-चक्र, अनुक्रमण, निकेत, लॉजिस्टिक-वृद्धि; जैवविविधता-3-स्तर, भारत-4-हॉटस्पॉट, IUCN-8-श्रेणी, वन्यजीव-गलियारे(150-हाथी-गलियारे/2023-WII), की-स्टोन/फ्लैगशिप, आक्रामक-प्रजाति; संरक्षित-क्षेत्र-नेटवर्क(1,014/~5.32%), प्रोजेक्ट-टाइगर1973/एलिफेंट1992/IRV2020/समुद्री-कछुआ1999, रामसर-भारत101(2026), बायोस्फीयर-रिज़र्व18(13-UNESCO), ESZ(10km-मानक, **user-फ़ीडबैक-पर समृद्ध: 3-श्रेणी-गतिविधि-वर्गीकरण+ज़ोनल-मास्टर-प्लान, SC-जून2022-1km-आदेश→अप्रैल2023-संशोधन, MP-बफ़र-ज़ोन-कान्हा/पेंच/बांधवगढ़-आँकड़े**)।

**पारिस्थितिकी तंत्र के प्रकार (21-29) — COMPLETE:** घासभूमि(भारत-24%-भौगोलिक-क्षेत्र, तराई/शोला/स्टेप)/मरुस्थल(थार-भारत-सबसे-बड़ा); उष्णकटिबंधीय-पर्णपाती-वन(65-70%-भारत-वन-आवरण, **user-फ़ीडबैक-पर समृद्ध: आर्थिक-महत्व+वन्यजीव-आवास+MP-सतपुड़ा-साल-सागौन-इको-टोन**); आर्द्रभूमि-सेवाएँ(MEA-4-श्रेणी, बाढ़-बफर-मैंग्रोव50-70%); कोरल-रीफ(ज़ूज़ैन्थेली-सहजीविता, भारत-4-क्षेत्र, 2024-25-वैश्विक-84%-ब्लीचिंग-संकट); मैंग्रोव/सीग्रास-ब्लू-कार्बन(भारत~67.35TgC, MISHTI-योजना540वर्गkm/9राज्य+3UT); घासभूमि-गिरावट(GIB-जनसंख्या~130-150, वृक्षारोपण-विरोधाभास); हिमालयी/तटीय/शुष्क-भंगुर-क्षेत्र(CRZ-4-श्रेणी); बायोल्यूमिनेसेंस(गहरे-समुद्र76%-जीव, भारत-गहरा-समुद्र-मिशन/मत्स्य-6000); उभयचर/सरीसृप-संकेतक-प्रजाति(पश्चिमी-घाट77%+-स्थानिकता)।

**संरक्षण प्रबंधन एवं समुदाय (30-45) — COMPLETE:** JFM(1971-72-अराबारी-बंगाल, MP-5वर्ष-समिति-अवधि)/वन-अधिकार-समुदाय-वानिकी(JFM-बनाम-FRA-CFR-स्वामित्व-भेद, उत्तराखंड-वन-पंचायत1931); WCCB(2007, भोपाल-क्षेत्रीय-कार्यालय); वन्यजीव-सड़क-टकराव(कान्हा-पेंच-कॉरिडोर-NH7-MP-भारत-प्रथम-समर्पित-अंडरपास); मानव-वन्यजीव-सह-अस्तित्व(बाघ-मित्र/वाइल्ड-सेवे, **MP-मुआवज़ा-आँकड़े 2019-22: 66-मृत्यु+11182-चोट/वर्ष**); परागण-सेवाएँ($84.57अरब-भारत); शहरी-जैवविविधता(नगर-वन-योजना, **MP-94-नगर-वन/3141-हेक्टेयर**); रेस्टोरेशन-इकोलॉजी(बॉन-चैलेंज-भारत26mha-लक्ष्य/21.76mha-प्राप्त, MP-शीर्ष-5-राज्य); NbS/30×30(भारत~5.32%-बनाम-30%-लक्ष्य-बड़ा-अंतराल); ब्लू-इकॉनॉमी(GDP~4%, सागरमाला); इनवेसिव-मैपिंग(कान्हा-लैंटाना-अध्ययन); नेचर-पॉज़िटिव/जैवविविधता-क्रेडिट(भारत-विश्व-प्रथम-VCS-I-ABS); इकोलॉजिकल-फुटप्रिंट(भारत-"डेफ़िसिट-डे"-17अप्रैल2026); हरित-लेखांकन(SEEA, MoSPI-दासगुप्ता-समिति); PES(पालमपुर-HP-भारत-प्रथम, वित्त-आयोग-वन-भारांश7.5%→10%); CSR-इको-रेस्टोरेशन(**MP-समर्पित-CSR-CER-वन-पुनर्स्थापन-मसौदा-नीति, शाहडोल-कॉर्बेट-फ़ाउंडेशन-उदाहरण**)।

**अंतरराष्ट्रीय संधियाँ (46-49) — COMPLETE:** CBD(1992-रियो, भारत-अनुसमर्थन1994, कार्टाजेना+नागोया-प्रोटोकॉल); CITES(1973, भारत1976, WPA-2022-संशोधन-4-अनुसूची); रामसर-मापदंड/wise-use(9-मापदंड, मॉन्ट्रो-रिकॉर्ड-भारत-2-वर्तमान[केवलादेव+लोकटक]+चिल्का-हटाई-गई); CMS/AEWA(**⚠️MCQ-ट्रैप: भारत-CMS-पक्षकार1983 किंतु AEWA-सदस्य-नहीं**, CMS-COP13-गांधीनगर2020)।

**संस्थागत ढाँचा (50-51) — COMPLETE:** NBA-SBB-BMC-त्रि-स्तरीय(NBA2003-चेन्नई, संशोधन-अधिनियम2023-AYUSH-छूट); ZSI(1916)/BSI(1890)/FSI(1981-ISFR)(**MP-सर्वोच्च-वन-आवरण77,073वर्गkm किंतु-सर्वाधिक-हानि-भी**)।

**MP-विशिष्ट (52-54) — COMPLETE:** वन-प्रकार(सागौन17.88%+साल16.54%+मिश्रित65.58%, RFA-आरक्षित65.36%/संरक्षित32.84%); संरक्षित-क्षेत्र-नेटवर्क(**12-राष्ट्रीय-उद्यान+24-अभयारण्य; 9-बाघ-अभयारण्य-सर्वाधिक[रातापानी-दिसंबर2024/वीरांगना-दुर्गावती2023/माधव-मार्च2025]; बाघ-जनसंख्या526-सर्वाधिक; 3-बायोस्फीयर-रिज़र्व**); वेटलैंड-रामसर(**5-रामसर-साइट, भोज-वेटलैंड-भोपाल-40%-पेयजल-आपूर्ति**)।

**अनुसंधान एवं निगरानी तकनीक (55-57) — COMPLETE:** नागरिक-विज्ञान(Bird Count India/SeasonWatch, State of India's Birds-867प्रजाति); GIS/रिमोट-सेंसिंग(AHP+न्यूनतम-लागत-पथ-गलियारा-मानचित्रण); NDVI/NDWI(सूत्र+मान-सीमा−1-से+1, ISRO-सूखा-आकलन-PMFBY)।

**कार्यप्रणाली-नोट:** user ने इस फ़ाइल में 2 बार सीधा-गुणवत्ता-फ़ीडबैक दिया ("downgrading quality"/point-20 खुला; "must cover all facts for top-one-rank"/point-22 खुला) — दोनों-बार तत्काल पूर्व-लिखित-नोट्स (बिंदु 20, 22) को अतिरिक्त-वेब-शोध से सक्रिय-रूप-से समृद्ध किया गया, आगे बढ़ने-से-पहले।

**🎉 checklist-फ़ाइल 02 (Unit 7, 57 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (57)।**

### Checklist file 03 — `03-pradushan-prakritik-aapdayen-prabandhan.md` (84 points + 1 lettered sub-point 14अ = 85 notes, largest file in the entire project) — user confirmed start, COMPLETE

प्रदूषण/जलवायु-परिवर्तन/आपदा-प्रबंधन-केंद्रित — Unit 7 की सबसे-बड़ी एवं पूरे-प्रोजेक्ट की सबसे-बड़ी checklist-फ़ाइल, 12 उप-खंड। Notes गए `mppsc-syllabus/prelims-notes/unit-07-environment-biodiversity-sdg-disaster/03-pradushan-prakritik-aapdayen-prabandhan/`। फ़ाइल-गणना सत्यापित — 85 (84 अंकित-बिंदु + 14अ)।

**पर्यावरण विधिक ढाँचा (1-8) — COMPLETE:** EIA-2006 (4-चरण Screening/Scoping/Public Consultation/Appraisal, Category A/B/B1/B2); Environment Protection Act 1986 (4-अध्याय/26-धारा, भोपाल-गैस-त्रासदी-पश्चात); Water Act 1974/Air Act 1981/Forest (Conservation) Act 1980 (2023-पुनर्नामकरण "Van Sanrakshan Evam Samvardhan Adhiniyam", 100km-सीमा/LWE-ज़िला-छूट); प्लास्टिक/ई-वेस्ट/खतरनाक-कचरा-नियम (SUP-प्रतिबंध1जुलाई2022, E-Waste Rules 2022); CAMPA (T.N.Godavarman-केस-मूल, CAF Act 2016/Rules 2018, 90%राज्य/10%केंद्र); CRZ-2019-संशोधन; CPCB/SPCB-भूमिका; NGT (18अक्टूबर2010, Central Bench-**भोपाल**, Schedule-I-7-अधिनियम)।

**जलवायु परिवर्तन — विज्ञान एवं नीति (9-20+14अ) — COMPLETE:** मौसम-बनाम-जलवायु; GHG-रेडिएटिव-फ़ोर्सिंग(CO2-66%/CH4-16%)+GWP-तालिका; कार्बन-चक्र-सिंक(महासागर10.5GtCO2/वर्ष); एरोसोल/ब्लैक-कार्बन; अनुकूलन-बनाम-शमन+NAPCC-8-मिशन; कार्बन-बाज़ार(PAT+CCTS2023); पर्यावरण-अर्थशास्त्र(14अ — पिगोवियन-कर, भारत-स्वच्छ-पर्यावरण-सेस); जलवायु-स्मार्ट-कृषि(CSA-3-स्तंभ, NICRA); ENSO/IOD-मानसून-प्रभाव; हिमालयी-हिमनद-तापन(HI-WISE2023); शहरी-जलवायु-UHI(तेलंगाना-कूल-रूफ़); कार्बन-फ़ार्मिंग/ब्लू-ग्रीन-कार्बन; ओज़ोन-परत/मॉन्ट्रियल-प्रोटोकॉल(वियना1985/मॉन्ट्रियल1987/किगाली-संशोधन)।

**अंतरराष्ट्रीय जलवायु संधियाँ (21-25) — COMPLETE:** UNFCCC(रियो1992, CBDR-सिद्धांत); पेरिस-समझौता(COP21-2015, भारत-NDC-पंचामृत-2070-नेट-ज़ीरो); क्योटो-प्रोटोकॉल(1997/2005, 3-flexibility-mechanisms); बासेल/रॉटरडैम/स्टॉकहोम-कन्वेंशन(POPs, "Dirty Dozen"→21-रसायन); मिनामाता-कन्वेंशन(पारा-प्रदूषण, भारत-2018-अनुसमर्थन)।

**आपदा प्रबंधन — मूल अवधारणा एवं संस्थागत ढाँचा (26-36) — COMPLETE:** UNDRR जोखिम=हैज़र्ड×एक्सपोज़र×वल्नरेबिलिटी; NDMA/SDMA/DDMA (DM Act 2005, **user-फ़ीडबैक-पर समृद्ध — DM(Amendment)Bill2024: UDMA, NEC/SEC-bypass, SDRF-सशक्तिकरण**); IRS/ICS; वल्नरेबिलिटी-एटलस; CAP/SACHET-चेतावनी; CDRI(2019); आपदा-मित्र; आपदा-बीमा/PMFBY; NDRF(16-बटालियन); डिज़ास्टर-स्कोर-कार्ड।

**प्राकृतिक आपदाएँ (37-50) — COMPLETE:** भूकंप(IS1893:2016, 4-ज़ोन); चक्रवात(IMD-6-श्रेणी); बाढ़(4-प्रकार); सूखा(4/6-सप्ताह-कृषि-मानदंड); भूस्खलन(NLSM-GSI); हीट-वेव(HAP); वज्रपात(Damini-ऐप); वनाग्नि(FSI-MODIS/FAST3.0); सुनामी(2004, INCOIS); हिमस्खलन(DGRE); GLOF(दक्षिण-ल्होनाक-2023); धूल-आँधी; मानवजनित-आपदाएँ(भोपाल-गैस-त्रासदी1984); CBRN।

**वायु प्रदूषण (51-56) — COMPLETE:** AQI(8-प्रदूषक); उत्सर्जन-नियंत्रण(BS-VI); डिस्पर्शन-मॉडलिंग(SAFAR); NCAP(2019, संशोधित-लक्ष्य40%PM10-कटौती-2025-26); फ़सल-अवशेष-दहन; ध्वनि-प्रदूषण(2000-नियम)।

**जल एवं मृदा प्रदूषण (57-61) — COMPLETE:** BOD/COD/DO+3-चरण-सीवेज-उपचार; भूजल-आर्सेनिक/नाइट्रेट(ब्लैक-फ़ुट-रोग/ब्लू-बेबी-सिंड्रोम); मृदा-लवणता(67.4लाख-हेक्टेयर, 2050-प्रक्षेपण); **एंडोक्राइन-डिसरप्टर्स/माइक्रोप्लास्टिक(60 — user-फ़ीडबैक-पर समृद्ध: गंगा-माइक्रोप्लास्टिक-सांद्रता2.99कण/L, PE/PP-बहुलक-वितरण, थायरॉयड/प्रजनन/कैंसर-अंग-तंत्र-वार-प्रभाव)**; जल-हार्वेस्टिंग(अटल भूजल योजना-MP-सम्मिलित, धारा-विकास-सिक्किम)।

**अपशिष्ट प्रबंधन (62-67) — COMPLETE:** SWM Rules2016(3-स्ट्रीम-स्रोत-पृथक्करण, अपशिष्ट-पदानुक्रम); बायोमेडिकल/ई-वेस्ट-ट्रेसेबिलिटी(CPCB-बारकोड); लैंडफिल-बायोमाइनिंग(SBM-U2.0, 16करोड़टन-लक्ष्य); बायो/फाइटोरेमेडिएशन(Pistia/Eichhornia-हाइपर-एक्युमुलेटर); निर्मित-आर्द्रभूमि(NEERI-Phytorid); प्लास्टिक-EPR/SUP(16फ़रवरी2022-दिशा-निर्देश)।

**दक्षता एवं समुदाय-आधारित समाधान (68-76) — COMPLETE:** जल/ऊर्जा-ऑडिट(MEA-18माह/3वर्ष-चक्र); ECBC(3-स्तर); LCA/कार्बन-फुटप्रिंट(ISO14040); इको-लेबल(इकोमार्क/BEE-स्टार); हरित-वित्त/ESG(SEBI-ESG-बॉन्ड-ढाँचा-5जून2025); BRSR(2023-प्रभावी); शहरी-वृक्ष(नगर-वन-योजना, MP-94/3141हेक्टेयर); वॉटरशेड(IWMP, रिज-टू-वैली); लो-कॉस्ट-वायु-सेंसर।

**स्वास्थ्य-पर्यावरण अंतर्संबंध (77-79) — COMPLETE:** AQI/ताप/जल-रोग-लिंक-संश्लेषण; प्रदूषण-हॉटस्पॉट(CEPI, अंकलेश्वर-सर्वाधिक-प्रदूषित); वन-जल-जलवायु-संबंध(बुड्यको-ढाँचा, हिमालयी-वन-वाष्पोत्सर्जन-चरम-वर्षा-लिंक)।

**भूमि-उपयोग एवं पर्यटन प्रबंधन (80-82) — COMPLETE:** LULC-परिवर्तन(39.14%शहरी-विस्तार/9.76%वन-हानि, वनोन्मूलन-मानसून-कमज़ोरी); वहन-क्षमता(कोर-बफ़र-भेद, बफ़र1000-3000वर्गकिमी); इको-टूरिज्म(नीति2018-मसौदा→2024-क्रियान्वित)।

**MP-विशिष्ट आपदा एवं पर्यावरण प्रबंधन (83-84) — COMPLETE:** वनाग्नि/मानव-वन्यजीव-संघर्ष(जूनियर-फ़ायर-वॉचर्स2024, **मुआवज़ा₹8लाख→₹25लाख-2024-वृद्धि**); MP-सूखा/हीट(बुंदेलखंड-6-ज़िले, **⚠️MP-हीटवेव-को-प्राकृतिक-आपदा-घोषित-करने-वाला-राज्य, 2025-ग्रीष्म-से-प्रभावी**)।

**कार्यप्रणाली-नोट:** user ने इस फ़ाइल में बिंदु-60 (एंडोक्राइन-डिसरप्टर्स/माइक्रोप्लास्टिक) पर "missing facts" फ़ीडबैक दी — तत्काल अतिरिक्त-वेब-शोध से समृद्ध किया गया (गंगा-नदी-विशिष्ट-आँकड़े+थायरॉयड/प्रजनन/कैंसर-अंग-तंत्र-वार-प्रभाव जोड़े गए) — मानक "quality feedback → तुरंत-खुले-बिंदु-को-समृद्ध-करना" पैटर्न पुनः-सफलतापूर्वक-लागू।

**🎉🎉🎉 checklist-फ़ाइल 03 (Unit 7, 84 बिंदु/85 नोट्स) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (85)।**

---

## 🎉🎉🎉 MAJOR MILESTONE: सम्पूर्ण Unit 7 (पर्यावरण, जैवविविधता, SDG एवं आपदा प्रबंधन) की सभी 3 checklist-फ़ाइलें अब पूर्ण रूप से समाप्त 🎉🎉🎉

`mppsc-syllabus/prelims/unit-07-environment-biodiversity-sdg-disaster/` में कुल **3 checklist-फ़ाइलें** — **सभी अब `mppsc-syllabus/prelims-notes/unit-07-environment-biodiversity-sdg-disaster/` में गहन, तथ्य-सत्यापित नोट्स के साथ पूर्ण**:
- 01-satat-vikas-sdg (12 बिंदु) ✅
- 02-paryavaraniya-karak-jaivvividhata-paristhitiki-tantra (57 बिंदु) ✅
- 03-pradushan-prakritik-aapdayen-prabandhan (84 बिंदु/85 नोट्स) ✅

**कुल = 153 बिंदु/154 नोट्स, संपूर्ण Unit 7 के लिए — यह `mppsc-syllabus/prelims/` का सबसे-बड़ा यूनिट था (Unit 6 के 196 नोट्स से भी अधिक बिंदु-घनत्व-वाली फ़ाइल-03 सहित)।**

इस-यूनिट में उपयोगकर्ता ने कई-बार सीधा-गुणवत्ता-फ़ीडबैक दिया (checklist-02 के बिंदु 20/22 पर "downgrading quality"/"top-one-rank"; checklist-03 के बिंदु 60 पर "missing facts") — हर-बार तुरंत खुले-बिंदु को अतिरिक्त-लक्षित-वेब-खोज से समृद्ध किया गया, कभी आगे बढ़ने या अस्पष्ट-आश्वासन देने से काम नहीं चलाया गया — यह इस पूरी परियोजना का सबसे-सुसंगत-रूप-से-दोहराया-गया व्यवहार-पैटर्न रहा है।

उपयोगकर्ता ने Unit 5 (अर्थव्यवस्था) पर आगे बढ़ने का निर्देश दिया।

## Unit 5 — economy — prelims-notes (शुरू)

`mppsc-syllabus/prelims/unit-05-economy/` में **9 checklist-फ़ाइलें** — कुल **~224 बिंदु** — अब-तक का सबसे-बड़ा यूनिट (Unit-7 के 153-बिंदु से भी बड़ा):
- 01-mp-ki-vartaman-sthiti (6 बिंदु)
- 02-jansankhya-manav-sansadhan-shiksha-swasthya-kaushal (9 बिंदु)
- 03-mp-sdg-pragati (4 बिंदु)
- 04-mp-krishi-udyog-msme-adhosanrachna (26 बिंदु)
- 05-atmanirbhar-mp-odop (3 बिंदु)
- 06-mp-ipr-pragati (3 बिंदु)
- 07-bhartiya-arthavyavastha-haliya-rujhan (**127 बिंदु — पूरे-प्रोजेक्ट की अब-तक की सबसे-बड़ी एकल-checklist-फ़ाइल**, checklist-Unit-1-file-03 के 111-बिंदु का रिकॉर्ड तोड़ते हुए)
- 08-vittiya-sansthayen-rbi-banks-sebi-nbfc (29 बिंदु)
- 09-videsh-vyapar-niti-g20-saarc-asean (17 बिंदु)

**फ़ॉर्मेट — Units 6/7/9 के समान "Lean fact/formula sheet"** — स्थिर/सार्वभौमिक-अर्थशास्त्र-अवधारणाएँ (GDP/GNP/राजकोषीय-घाटा/मुद्रास्फीति/कराधान-प्रकार/RBI-उपकरण) हेतु NCERT कक्षा-XI/XII अर्थशास्त्र-प्राथमिक-स्रोत; MP-विशिष्ट-आँकड़े+समसामयिक-योजनाएँ (बजट-आँकड़े/PLI/RoDTEP/G20) हेतु सक्रिय-वेब-सत्यापन। Notes जाएंगे `mppsc-syllabus/prelims-notes/unit-05-economy/<NN-checklist-slug>/`।

### Checklist file 01 — `01-mp-ki-vartaman-sthiti.md` (6 points) — COMPLETE

- [x] 1 MP — क्षेत्रीय अर्थव्यवस्था: मालवा/निमाड़/बुंदेलखंड/महाकौशल/बघेलखंड → `01-mp-kshetriya-arthavyavastha-malwa-nimar-bundelkhand-mahakoshal-baghelkhand.md` (5-क्षेत्र-भौगोलिक-अवस्थिति; मालवा-काली-मृदा-उच्च-आय बनाम महाकौशल-वन-जनजातीय-निम्न-आय; **डिंडोरी~₹55,000 बनाम इंदौर~₹1,50,000+ प्रति-व्यक्ति-ज़िला-घरेलू-उत्पाद**)
- [x] 2 MP — राजस्व स्रोत — SOTR/अनुदान → `02-mp-rajasva-strot-sotr-anudan.md` (राज्य-राजस्व-3-स्रोत; SOTR-घटक-तालिका SGST>VAT>उत्पाद-शुल्क>स्टाम्प-ड्यूटी; **MP-2025-26 राजस्व-प्राप्तियाँ₹3.22लाख-करोड़/SOTR-लक्ष्य₹1.08लाख-करोड़**)
- [x] 3 MP — बजट/राजकोषीय प्रबंधन → `03-mp-budget-rajkoshiya-prabandhan.md` (**बजट2026-27 — ₹4.38लाख-करोड़; राजकोषीय-घाटा2025-26:4.6%→2026-27:3.9%GSDP; राजस्व-अधिशेष2026-27:₹44करोड़**)
- [x] 4 MP का GSDP व प्रति व्यक्ति आय — राष्ट्रीय तुलना → `04-mp-gsdp-prati-vyakti-aay-rashtriya-tulna.md` (**⚠️MCQ-ट्रैप — GSDP-रैंक10वाँ बनाम प्रति-व्यक्ति-आय-रैंक25वाँ; MP-5-सबसे-कम-प्रति-व्यक्ति-आय-राज्यों-में**; 2025-26 प्रति-व्यक्ति-आय₹1,69,050)
- [x] 5 मध्यप्रदेश आर्थिक सर्वेक्षण (नवीनतम वर्ष) → `05-mp-arthik-sarvekshan-navintam-varsh.md` (**2025-26-संस्करण 17फ़रवरी2026-प्रस्तुत; क्षेत्रवार-वृद्धि — प्राथमिक7.31%/द्वितीयक9.93%/तृतीयक15.80%(सर्वाधिक-तेज़)**)
- [x] 6 मध्यप्रदेश वार्षिक राज्य बजट (नवीनतम वर्ष) → `06-mp-varshik-rajya-budget-navintam-varsh.md` (**GYANII-ढाँचा — Garib+Yuva+Annadata+Nari+Industry&Infrastructure; लाड़ली-बहना₹24,000करोड़/सिंहस्थ-2028~₹13,851करोड़/कृषि₹11,513करोड़(1लाख-सौर-पंप)**)

**🎉 checklist-फ़ाइल 01 (Unit 5, 6 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (6)।**

**कार्यप्रणाली-नोट:** user ने बिंदु-6 (MP वार्षिक बजट) पर "missing facts" फ़ीडबैक दी — तत्काल अतिरिक्त-वेब-शोध से समृद्ध किया गया: वित्त-मंत्री(जगदीश देवड़ा)+प्रस्तुति-तिथि(18फ़रवरी2026)+कर-प्रस्ताव जोड़े गए; राजस्व-बनाम-पूँजीगत-व्यय-वर्गीकरण नया-अनुभाग जोड़ा गया; शिक्षा/स्वास्थ्य/ग्रामीण-विकास की राष्ट्रीय-औसत-तुलनात्मक-हिस्सेदारी जोड़ी गई; महिला-योजना-आवंटन का पूर्ण-विस्तार (₹1.27लाख-करोड़ कुल, 5700-छात्रावास सहित) जोड़ा गया; युवा-ऋण+शिक्षक-भर्ती जोड़े गए; **सिंहस्थ-2028-आवंटन में स्रोत-असंगति (₹3,600करोड़-2026-27-विशिष्ट बनाम पूर्व-दर्ज ₹13,851करोड़-बहु-वर्षीय-कुल) ईमानदारी-से चिह्नित** — मानक "quality feedback → तुरंत-खुले-बिंदु-को-समृद्ध-करना" पैटर्न पुनः-सफलतापूर्वक-लागू।

उपयोगकर्ता ने checklist-फ़ाइल 02 आरम्भ करने की पुष्टि की।

### Checklist file 02 — `02-jansankhya-manav-sansadhan-shiksha-swasthya-kaushal.md` (9 points) — COMPLETE

2 उप-खंड: मौजूदा-कवरेज (1-6), अतिरिक्त-आवश्यक-टॉपिक — MP-विशिष्ट-परिणाम-संकेतक (7-9)। Notes गए `mppsc-syllabus/prelims-notes/unit-05-economy/02-jansankhya-manav-sansadhan-shiksha-swasthya-kaushal/`।

- [x] 1 MP — कौशल/रोजगार: जिला-स्तर कौशल पार्क/ITI → `01-mp-kaushal-rozgar-jila-star-kaushal-park-iti.md` (285सरकारी+5PARAM+17निजी-ITI; **user-फ़ीडबैक-पर समृद्ध — ग्लोबल स्किल्स पार्क(भोपाल) ADB-समर्थित-भारत-प्रथम, कुल-लागत₹1,548करोड़[ADB-ऋण₹967.50करोड़+MP-अंशदान₹580.50करोड़], क्षमता~20,000प्रशिक्षु; 10-संभागों-में-10-ITI-उन्नयन[10,252-सीटें]; MMKSY-2017-18-से-प्रति-वर्ष2.5लाख-युवा-लक्ष्य; सीखो-कमाओ-योजना; रोज़गार-मेले**)
- [x] 2 कौशल विकास — NSQF/अप्रेंटिसशिप — जॉब लिंक → `02-kaushal-vikas-nsqf-apprenticeship-job-link.md` (NSQF-8-स्तर, दिसंबर2013-शुभारंभ/जून2023-पुनः-अधिसूचित; Level-4=ट्रेड-अप्रेंटिस/Level-5=टेक्निशियन-अप्रेंटिस; NAPS-वजीफ़ा-वित्तीय-सहायता)
- [x] 3 शिक्षा व्यय — स्कूल/उच्च शिक्षा — रिटर्न टू एजुकेशन → `03-shiksha-vyay-school-uchch-shiksha-return-to-education.md` (भारत-कुल-शिक्षा-व्यय~6.6%GDP[सार्वजनिक~4%+निजी~2.7%]; कोठारी-आयोग-6%-सार्वजनिक-व्यय-लक्ष्य-अभी-अप्राप्त)
- [x] 4 स्वास्थ्य — प्राथमिक/द्वितीयक/तृतीयक — फाइनेंसिंग → `04-swasthya-prathmik-dwitiyak-tritiyak-financing.md` (checklist-Unit-6/file-07-बिंदु-1-क्रॉस-रेफ; OOPE-62.6%(2016-17)→47.1%(2019-20); NHP2017-लक्ष्य2.5%GDP-अपूर्ण)
- [x] 5 जनसांख्यिकीय लाभांश (Demographic Dividend) — खिड़की/शर्तें → `05-jansankhyiye-labhansh-demographic-dividend-khidki-sharten.md` (mpsi-file-05-बिंदु-6-क्रॉस-रेफ; भारत-खिड़की2005-06→2055-56; निर्भरता-अनुपात64.6%[2011]→53.7%[2031-न्यूनतम]→54%[2036])
- [x] 6 स्किल इंडिया/डिजिटल स्किल — रोजगार गुणवत्ता (रुझान) → `06-skill-india-digital-skill-rozgar-gunvatta-rujhan.md` (India Skills Report2026-रोज़गार-योग्यता56.35%, पहली-बार5-वर्षों-में महिलाएँ-आगे; गिग-श्रमिक1.2करोड़[FY2025]→2.35करोड़[2030]; Code on Social Security2020-गिग-मान्यता)
- [x] 7 MP-विशिष्ट शिक्षा परिणाम संकेतक → `07-mp-vishisht-shiksha-parinam-sanketak-saksharta-dropout-ger.md` (साक्षरता70.6%[2011, ~20.5pp-लैंगिक-अंतराल]; ⚠️NER-प्राथमिक63.9%[राष्ट्रीय76.9%]/माध्यमिक37.3%[राष्ट्रीय47.5%]-दोनों-राष्ट्रीय-औसत-से-कम)
- [x] 8 MP-विशिष्ट स्वास्थ्य परिणाम संकेतक → `08-mp-vishisht-swasthya-parinam-sanketak-mmr-imr-kuposhan.md` (checklist-Unit-6/file-05-बिंदु-4-क्रॉस-रेफ; MMR175[2019-21]-भारत-सर्वाधिक-उच्च-में-से-एक; NFHS-5-IMR41.3-राष्ट्रीय-औसत-से-अधिक)
- [x] 9 MP कौशल विकास मिशन — संस्थागत ढाँचा → `09-mp-kaushal-vikas-mission-sansthagat-dhancha.md` (MPSSDEGB-26जुलाई2010-स्थापित; 3-स्तरीय-ढाँचा DoSD/तकनीकी-शिक्षा-निदेशालय/मूल-विभाग; NSDC-सहयोग-PMKVY)

**🎉 checklist-फ़ाइल 02 (Unit 5, 9 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (9)।**

**कार्यप्रणाली-नोट:** user ने बिंदु-1 (MP कौशल/रोज़गार) पर "missing facts" फ़ीडबैक दी — तत्काल अतिरिक्त-वेब-शोध से समृद्ध किया गया (ग्लोबल स्किल्स पार्क का पूर्ण-वित्त-पोषण-विवरण+क्षमता, ITI-उन्नयन-सीट-संख्या, MMKSY/सीखो-कमाओ/रोज़गार-मेला-योजनाएँ जोड़ी गईं) — मानक "quality feedback → तुरंत-खुले-बिंदु-को-समृद्ध-करना" पैटर्न पुनः-सफलतापूर्वक-लागू।

उपयोगकर्ता ने checklist-फ़ाइल 03 आरम्भ करने की पुष्टि की।

### Checklist file 03 — `03-mp-sdg-pragati.md` (4 points) — COMPLETE

MP-विशिष्ट SDG-प्रगति — checklist-Unit-7/file-01 (SDG-सामान्य-अवधारणा, पहले-से-पूर्ण) से क्रॉस-रेफ करते हुए MP-गहराई जोड़ी गई। Notes गए `mppsc-syllabus/prelims-notes/unit-05-economy/03-mp-sdg-pragati/`।

- [x] 1 MP का SDG इंडिया इंडेक्स — रैंकिंग/स्कोर → `01-mp-sdg-india-index-ranking-score.md` (checklist-Unit-7/file-01/बिंदु-10-क्रॉस-रेफ; **स्कोर67"फ्रंट-रनर", 2018-से15-अंक-सुधार-सबसे-तेज़-राज्यों-में; 10-नए-2023-24-फ्रंट-रनर-प्रवेशी-राज्यों-में-से-एक**; राष्ट्रीय-संदर्भ शीर्ष-उत्तराखंड-केरल79/न्यूनतम-बिहार57)
- [x] 2 MP — लक्ष्य-वार (Goal-wise) SDG प्रगति → `02-mp-lakshya-var-goal-wise-sdg-pragati.md` (सशक्त-क्षेत्र स्वच्छ-ऊर्जा90>स्वच्छ-जल87>सतत-शहर86; ⚠️कमज़ोर-क्षेत्र लैंगिक-समानता<50; योजना-मैपिंग SDG-1[सेवा-संकल्प-योजना+MGNREGA]/SDG-2[PDS+मध्याह्न-भोजन+पोषण-मिशन])
- [x] 3 मध्यप्रदेश राज्य SDG विज़न दस्तावेज़ — मुख्य बिंदु → `03-mp-rajya-sdg-vision-dastavez-mukhya-bindu.md` ("विज़न2018"-सहभागी-प्रक्रिया; **"विज़न-टू-डिलीवरी रोडमैप2020-2025" — MP-मानव-विकास-शीर्ष-प्रदर्शक-लक्ष्य**; State Planning Commission-केंद्रीय-भूमिका)
- [x] 4 SDG स्थानीयकरण (Localization) — MP में जिला-स्तरीय क्रियान्वयन → `04-sdg-sthaniyakaran-localization-mp-jila-stariya-kriyanvayan.md` (त्रि-स्तरीय राज्य/ज़िला/विकास-खंड; **⚠️2025-2030-SDG-मूल्यांकन-योजना ₹19.10करोड़[5-वर्ष]; ज़िला-रैंकिंग-डैशबोर्ड-शीर्ष-2-ज़िलों-को-पुरस्कार-राशि**; SDGCC-SPC-अंतर्गत-समन्वयक-निकाय)

**🎉 checklist-फ़ाइल 03 (Unit 5, 4 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (4)।**

उपयोगकर्ता ने checklist-फ़ाइल 04 आरम्भ करने की पुष्टि की।

### Checklist file 04 — `04-mp-krishi-udyog-msme-adhosanrachna.md` (26 points) — COMPLETE

4 उप-खंड: कृषि एवं संबद्ध क्षेत्र (1-9), उद्योग एवं MSME (10-16), पर्यटन अर्थव्यवस्था (17-19), अधोसंरचना/ऊर्जा/शहरी अर्थव्यवस्था (20-26)। Notes गए `mppsc-syllabus/prelims-notes/unit-05-economy/04-mp-krishi-udyog-msme-adhosanrachna/`।

**कृषि एवं संबद्ध क्षेत्र (1-9) — COMPLETE:** फ़सल-पैटर्न(सोयाबीन-भारत-सर्वाधिक/मक्का-चना-गेहूँ-दलहन-प्रथम-द्वितीय-रैंक); बागवानी(संतरा/मसाले/लहसुन/अदरक/धनिया-5-में-राष्ट्रीय-प्रथम, 20-वर्ष-में-क्षेत्रफल~500%/उत्पादन~1000%वृद्धि); मंडी(259-कुल, ⚠️e-मंडी-राज्य-योजना-बनाम-e-NAM-केंद्र-योजना-भेद); सहकारी-संरचना(अपेक्स-बैंक→DCCB→PACS, MP-4,536-PACS-100%-कम्प्यूटरीकृत); डेयरी("साँची"-ब्रांड, ⚠️NDDB-5-वर्षीय-संचालन-समझौता-2025, MP-तीसरा-सबसे-बड़ा-दुग्ध-उत्पादक); सोयाबीन-प्रोसेसिंग(SOPA-1979-मुख्यालय-इंदौर); कृषि-निर्यात(बुरहानपुर-भारत-केला-उत्पादन~15%); सिंचाई(⚠️2003-3लाख→वर्तमान~50लाख-हेक्टेयर, केन-बेतवा-लिंक-10-ज़िले/8.11लाख-हेक्टेयर); औषधीय-पौध(नीमच-मंदसौर-अश्वगंधा-हब, ~20,000टन/₹70करोड़-व्यापार)

**उद्योग एवं MSME (10-16) — COMPLETE:** पिथमपुर("भारत-का-डेट्रॉइट", ~25,000-रोज़गार)/सतना-रीवा-सीमेंट(MP-भारत-सीमेंट-14%)/इंदौर-IT(क्रिस्टल-IT-पार्क+Infosys-TCS-Impetus); लाइमस्टोन(भंडार~10%/उत्पादन~14%, सतना-5मिलियन-टन/वर्ष); हस्तशिल्प-क्लस्टर(चंदेरी-महेश्वर-जबलपुर-श्योपुर, सारंगपुर-हैंडलूम-मल्टीप्लायर); चंदेरी-महेश्वर(3,600/11,000-बुनकर-₹15करोड़-कारोबार बनाम 3,120/9,360-बुनकर); इलेक्ट्रॉनिक्स-IT-पार्क(ESDM-लक्षित); सिंगल-विंडो(MPIDC-2004-से, 2025-में-7-नई-नीतियाँ); स्टार्टअप(⚠️MP-स्टार्टअप-नीति-24फ़रवरी2025, 5000+स्टार्टअप-47%-महिला-नेतृत्व, ₹100करोड़-कैपिटल-फंड)

**पर्यटन अर्थव्यवस्था (17-19) — COMPLETE:** पर्यटन-अर्थव्यवस्था(2024-14करोड़-आगमन+25%, GDP-योगदान~3-3.5%); इको-टूरिज्म(MPEDB-2005-स्थापना, वानिकी-300लाख-मानव-दिवस/वर्ष); टूरिज्म-गुणक(⚠️भारत-TSA-गुणक-2.1, MP-हेरिटेज-सर्किट/महाकाल-कॉरिडोर-काशी-मॉडल-₹1.25लाख-करोड़-लाभ)

**अधोसंरचना/ऊर्जा/शहरी (20-26) — COMPLETE:** ऊर्जा(कुल28,141.99MW-थर्मल57%+नवीकरणीय10,366.76MW; रीवा-सोलर-750MW; नीमच431/आगर-मालवा550/शाजापुर450MW-2024); लॉजिस्टिक्स-नीति2025(2030-वैश्विक-मानक-लक्ष्य, ₹50-75करोड़-पार्क-सहायता); वेयरहाउस(⚠️MP-368-WDRA-पंजीकृत-गोदाम-अधिकांश-राज्यों-से-अधिक); डिस्कॉम(3-डिस्कॉम MPMKVVCL/MPPaKVVCL/MPPoKVVCL, राष्ट्रीय-AT&C-हानि21.91%→16.16%, MPPaKVVCL-100%-संग्रहण-दक्षता); शहरी(इंदौर-MP-सबसे-बड़ी-अर्थव्यवस्था-GSDP-का~8%, सुपर-कॉरिडोर-IT); रीटेल-होलसेल(सराफ़ा-बाज़ार-194-दुकान-दिन-आभूषण/रात-स्ट्रीट-फ़ूड); पंचायती-नगरीय-वित्त(⚠️PRI-राजस्व~80%-केंद्रीय-अनुदान-निर्भर, 15वाँ-वित्त-आयोग-2021-26-₹2.8लाख-करोड़+)

**🎉 checklist-फ़ाइल 04 (Unit 5, 26 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (26)।**

उपयोगकर्ता ने checklist-फ़ाइल 05 आरम्भ करने की पुष्टि की।

### Checklist file 05 — `05-atmanirbhar-mp-odop.md` (3 points) — COMPLETE

Notes गए `mppsc-syllabus/prelims-notes/unit-05-economy/05-atmanirbhar-mp-odop/`।

- [x] 1 आत्मनिर्भर मध्यप्रदेश (ANMP) — योजना का उद्देश्य एवं ढाँचा → `01-atmanirbhar-madhyapradesh-anmp-yojana-uddeshya-dhancha.md` (रोडमैप2023 — 12नवंबर2020-जारी शिवराज सिंह चौहान, NITI-Aayog-सहयोग; **4-स्तंभ — भौतिक-अवसंरचना/शासन/स्वास्थ्य-शिक्षा/अर्थव्यवस्था-रोज़गार**; 3-वर्षीय-क्रियान्वयन)
- [x] 2 एक जिला एक उत्पाद (ODOP) कार्यक्रम — जिला-उत्पाद मैपिंग → `02-ek-jila-ek-utpad-odop-karyakram-jila-utpad-mapping.md` (राष्ट्रीय-1,241-उत्पाद/777-ज़िले-DPIIT-संचालित; **MP-उदाहरण — इंदौर(आलू)/अशोकनगर(चंदेरी)/धार(बाघ-प्रिंट)/जबलपुर(मटर-औषधीय-पौधे)/भोपाल(ज़री-ज़रदोज़ी)**; ⚠️MP-नीति-2023-24-मसौदा-चरण)
- [x] 3 ODOP — निर्यात प्रोत्साहन से संबंध → `03-odop-niryat-protsahan-se-sambandh.md` (⚠️ODOP-DGFT-DEH-पहल-से-परिचालनात्मक-विलय; ODOP-GeM-बाज़ार-29अगस्त2022-शुभारंभ-200+उत्पाद-श्रेणियाँ; भारतीय-दूतावास-वैश्विक-प्रचार)

**🎉 checklist-फ़ाइल 05 (Unit 5, 3 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (3)।**

उपयोगकर्ता ने checklist-फ़ाइल 06 आरम्भ करने की पुष्टि की।

### Checklist file 06 — `06-mp-ipr-pragati.md` (3 points) — COMPLETE

Notes गए `mppsc-syllabus/prelims-notes/unit-05-economy/06-mp-ipr-pragati/`।

- [x] 1 MP के GI-टैग प्राप्त उत्पाद → `01-mp-gi-tag-prapt-utpad-chanderi-maheshwari-bagh-print.md` (checklist-Unit-1/file-05-क्रॉस-रेफ; **⚠️2025-26 — MP-26-नए-GI-भारत-सर्वाधिक>पश्चिम-बंगाल24; भारत-कुल822-GI**; चंदेरी-2005-06(MP-प्रथम-GI)/महेश्वरी-2010/गोंड-पेंटिंग-अप्रैल2023)
- [x] 2 MP में पेटेंट/ट्रेडमार्क फाइलिंग की प्रगति → `02-mp-patent-trademark-filing-pragati.md` (राष्ट्रीय-IP-फ़ाइलिंग2024-25-7,49,946+19.75%; **⚠️MP-MSME-नीति2025 — पेटेंट/IPR-100%-प्रतिपूर्ति-अधिकतम₹10लाख/पेटेंट**; ईमानदार-सीमा-MP-राज्य-वार-फ़ाइलिंग-डेटा-अनुपलब्ध)
- [x] 3 राज्य IPR नीति/सेल → `03-rajya-ipr-niti-cell.md` (राष्ट्रीय-IPR-नीति2016-DPIIT-नोडल-CIPAM; **⚠️MP-कोई-पृथक-राज्य-IPR-नीति-नहीं, MSME-नीति2025-अंतर्गत-एकीकृत-प्रोत्साहन**; NID-MP-IPR-सेल-संस्थान-स्तरीय)

**🎉 checklist-फ़ाइल 06 (Unit 5, 3 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (3)।**

उपयोगकर्ता ने checklist-फ़ाइल 07 आरम्भ करने की पुष्टि की।

### Checklist file 07 — `07-bhartiya-arthavyavastha-haliya-rujhan.md` (127 points — पूरे-प्रोजेक्ट की अब-तक की सबसे-बड़ी एकल-checklist-फ़ाइल, checklist-Unit-1/file-03 के 111-बिंदु का रिकॉर्ड तोड़ते हुए) — COMPLETE

11 उप-खंड: आधारभूत अवधारणाएँ (1-10), राजकोषीय नीति एवं बजट (11-21), कराधान (22-28), मुद्रास्फीति एवं मूल्य (29-31), कृषि अर्थव्यवस्था (32-58), औद्योगिक अर्थव्यवस्था (59-74), सेवा क्षेत्र (75-80), अवसंरचना अर्थव्यवस्था (81-93), ऊर्जा अर्थव्यवस्था एवं पर्यावरण अर्थशास्त्र (94-98), रोजगार-गरीबी-सामाजिक क्षेत्र अर्थशास्त्र (99-112), डिजिटल अर्थव्यवस्था एवं समसामयिक रुझान (113-127)। Notes गए `mppsc-syllabus/prelims-notes/unit-05-economy/07-bhartiya-arthavyavastha-haliya-rujhan/`। इस फ़ाइल में बहुत-से-बिंदु checklist-Unit-1(इतिहास-संस्कृति)/Unit-6(विज्ञान-स्वास्थ्य)/Unit-7(पर्यावरण)/Unit-9(ICT)/mpsi-file-05 की पहले-से-मौजूद-गहन-सामग्री से **cross-ref** करते हुए लिखे गए, दोहराव-न्यूनतम रखते हुए नई-गहराई जोड़ी गई — यह पूरे-प्रोजेक्ट में सबसे-सघन-अंतर-यूनिट-cross-referencing वाली फ़ाइल रही।

**आधारभूत अवधारणाएँ (1-10) — COMPLETE:** GDP/GNP/NNP/NDP; मूल्य-संवर्धन-बनाम-व्यय-पद्धति; क्षेत्रीय-योगदान-सांरचनात्मक-बदलाव; HDI/MPI; व्यापार-चक्र; हरित-नीला-सहभागी-विकास; CSO/NSS; ⚠️आधार-वर्ष-परिवर्तन(WPI-2022-23/CPI-2024=100-12फ़रवरी2026); समावेशी-विकास (**बिंदु-9 — user-फ़ीडबैक-पर सुधारा गया: मूल-रूप-से NITI Aayog "Sabka Vikas" पेपर का ग़लत-3-स्तंभ[वित्तीय-भौतिक-मानव-पूँजी]-फ़्रेमवर्क लिखा था, वास्तविक-फ़्रेमवर्क[Market Economics/Empowerment/Pragmatism] जोड़कर सुधारा, checklist की पूँजी-भाषा को वास्तविक-आँकड़ों[RBI FI-Index 43.4→70.0/PMJDY 55.98cr] से समर्थित रखा**); जनसांख्यिकीय-लाभांश।

**राजकोषीय नीति एवं बजट (11-21) — COMPLETE:** बजट-दस्तावेज़(अनुच्छेद-110/112/113/114); राजकोषीय-प्राथमिक-राजस्व-घाटा(बजट2025-26-आँकड़े); आउटकम-बजटिंग(2005-06-से); सरकारी-ऋण-बॉन्ड(⚠️सॉवरेन-गोल्ड-बॉन्ड-नई-जारी-बंद-फ़रवरी2024); राजस्व-पूँजीगत-व्यय-वर्गीकरण(⚠️प्लान-नॉन-प्लान-वर्गीकरण-समाप्त2017-18); अनुदान-सब्सिडी-कार्यकुशलता; सब्सिडी-खाद्य-उर्वरक-ईंधन; विनिवेश(DIPAM, FY2025-26); सार्वजनिक-उद्यम(महारत्न-नवरत्न-मिनीरत्न); PPP/BOT/HAM; **बिंदु-21 — user-फ़ीडबैक-पर समृद्ध — RBI-पूँजीगत-व्यय-गुणक(2.2-2.5), सड़क(₹2,72,241.15cr)/रेल(₹2,52,000cr)-आबंटन-सपाट, TFP-अवधारणा**।

**कराधान (22-28) — COMPLETE:** पत्यक्ष-अप्रत्यक्ष-कर-प्रगतिशीलता; ⚠️GST2.0(22सितंबर2025, नया4-स्लैब-संरचना); GST-अनुपालन(ITC/GSTR); उत्पाद-शुल्क-से-GST-संक्रमण(101वाँ-संविधान-संशोधन); e-way-bill/e-invoice; प्रत्यक्ष-कर(नई-व्यवस्था-7-स्लैब, ₹12लाख-कर-मुक्त); कस्टम्स(BCD/ADD/CVD, DGTR-2018)।

**मुद्रास्फीति एवं मूल्य (29-31) — COMPLETE:** ⚠️RBI-4%±2%-लक्ष्य-नवीनीकरण(1अप्रैल2026-31मार्च2031); खाद्य-मुद्रास्फीति-आपूर्ति-शृंखला; मूल्य-स्थिरीकरण-कोष(₹500cr-कॉर्पस)।

**कृषि अर्थव्यवस्था (32-58, 27 points) — COMPLETE:** कृषि-संरचना(सीमांत-जोत68.5%, SMAM-CHC); MSP-खरीद(22-अनिवार्य-फ़सलें14+6+2, ⚠️FCI-NAFED-खरीद-असंतुलन); फ़सल-पैटर्न(खरीफ़-रबी-ज़ैद-जोखिम-अनुकूलन); बागवानी-डेयरी-मत्स्य(⚠️बागवानी-उत्पादन-मूल्य>खाद्यान्न); ICAR-AER(⚠️3-भिन्न-वर्गीकरण-प्रणालियाँ योजना-आयोग15/ICAR-NARP127/NBSS&LUP20-AER); PMFBY(प्रीमियम2%/1.5%/5%, 2025-13.48करोड़-आवेदन); KCC(बजट2025-26-सीमा₹3लाख→₹5लाख); APMC-e-NAM-FPO(1,389+मंडी); उत्पादकता-तकनीक(SMAM-21.61लाख-मशीन, किसान-ड्रोन); FPO-कॉन्ट्रैक्ट-फ़ार्मिंग-बाज़ार-लिंक; कृषि-प्रसंस्करण(PMFME-₹10,000cr); उर्वरक-अर्थशास्त्र(⚠️यूरिया-NBS-से-बाहर-MRP₹242-स्थिर, DAP-सब्सिडी-वृद्धि); बीज-प्रणाली(**बिंदु-44 — user-फ़ीडबैक-पर समृद्ध — बीज-अधिनियम1966-प्रमाणन-संरचना+राष्ट्रीय-बीज-नीति2002+फ़सल-वार-SRR-भिन्नता जोड़ी गई**); जैविक-प्राकृतिक-खेती(⚠️MP-सर्वाधिक-जैविक-प्रमाणित-क्षेत्र); मिलेट्स(2023-अंतरराष्ट्रीय-मिलेट-वर्ष, "श्री अन्न"); डेयरी-वैल्यू-चेन(ऑपरेशन-फ़्लड1970); मत्स्य-पालन(PMMSY-₹20,050cr); कृषि-विस्तार(KVK1974-पुडुचेरी/ATMA2005); पोस्ट-हार्वेस्ट-लॉस(₹92,651cr-वार्षिक); दलहन-तिलहन-आत्मनिर्भरता(दलहन-मिशन-₹11,440cr/NMEO-तिलहन-₹10,103cr); GM-हाइब्रिड-बीज(⚠️केवल-Bt-कपास-स्वीकृत); कस्टम-हायरिंग-सेंटर; Agri-Derivatives(NCDEX-SEBI-FMC-विलय2015); Cold-Chain(AIF-₹1लाख-करोड़); जल-कृषि-उत्पादकता(कृषि-80%+जल-उपयोग); जलवायु-जोखिम(⚠️तापमान1%वृद्धि→खाद्यान्न6.5%गिरावट); Agri-स्टार्टअप-एग्रीटेक(DeHaat/AgroStar)।

**औद्योगिक अर्थव्यवस्था (59-74, 16 points) — COMPLETE:** औद्योगिक-नीति(1991-नई-औद्योगिक-नीति); MSME(2020-निवेश+टर्नओवर-द्वैत-मानदंड); स्टार्टअप-FoF2.0(यूनिकॉर्न4→125); PLI(14-सेक्टर-₹1.91लाख-करोड़); PLI-क्षेत्रीय-प्रभाव(मोबाइल-विनिर्माण-₹18,900cr→₹6.27लाख-करोड़); औद्योगिक-कॉरिडोर(DMIC/AKIC-11-कॉरिडोर-90%-विनिर्माण); स्टील-सीमेंट(ऊर्जा-गहन-चुनौती); टेक्सटाइल(PM-MITRA-7-पार्क, ⚠️कॉटन→MMF-शिफ्ट); फार्मास्यूटिकल्स(⚠️"विश्व-फ़ार्मेसी"-जेनेरिक~20%-वैश्विक-हिस्सेदारी); इलेक्ट्रॉनिक्स(EMS-Dixon-19%-हिस्सा); खादी-हस्तशिल्प(⚠️KVIC-FY2025-26-रिकॉर्ड-बिक्री₹1.87लाख-करोड़); CSR-ESG(धारा135-विश्व-प्रथम-अनिवार्य-CSR); कमोडिटी-फ्यूचर्स-हेजिंग(SEBI-FMC-विलय); WDRA(eNWR-26सितंबर2018); प्रतिस्पर्धा-कानून(प्रतिस्पर्धा-अधिनियम2002-MRTP-प्रतिस्थापन); RE-EV-वैल्यू-चेन(ACC-बैटरी-PLI-₹18,100cr/50GWh, ⚠️लिथियम-90%+वैश्विक-संकेंद्रण)।

**सेवा क्षेत्र (75-80) — COMPLETE:** IT-ITeS-GCC(1,700-केंद्र/19लाख-कर्मचारी/$64bn-निर्यात); टूरिज्म(GDP-5.22%/रोज़गार-13.34%, ⚠️2025-विदेशी-पर्यटक-आगमन-9.4%गिरावट); टूरिज्म-मल्टीप्लायर; टूरिज्म-कैरींग-कैपेसिटी(स्मार्ट-परमिट-सिस्टम); ONDC(अनबंडलिंग-सिद्धांत); गिग-इकॉनमी(⚠️NITI-प्रक्षेपण2020-77लाख→2029-30-2.35करोड़)।

**अवसंरचना अर्थव्यवस्था (81-93) — COMPLETE:** लॉजिस्टिक्स-गति-शक्ति(⚠️लागत~14-15%GDP→2030-लक्ष्य~8%); समेकित-योजना(गति-शक्ति-बनाम-NLP-भेद); DFC(⚠️EDFC-पूर्ण/WDFC-31मार्च2026-पूर्ण); भारतमाला(मार्च2025-20,378km); मल्टीमॉडल-पार्क्स; सागरमाला(7-तटीय-बर्थ-9.84MTPA); UDAN(649-मार्ग/93-हवाई-अड्डे); शहरी-परिवहन-मेट्रो(⚠️23→26शहर, फेयरबॉक्स-रेश्यो<100%); AMRUT-स्मार्ट-सिटी(⚠️91%-पूर्णता); PMAY-आर्थिक-प्रभाव; जल-जीवन-मिशन-आर्थिक-लाभ; स्वच्छता-सर्कुलर-इकॉनॉमी; DPI-बाज़ार-प्रभाव।

**ऊर्जा अर्थव्यवस्था एवं पर्यावरण अर्थशास्त्र (94-98) — COMPLETE:** ऊर्जा-मिश्रण(⚠️नवीकरणीय-51.5%-विद्युत-माँग-पूर्ति-जुलाई2025); सौर-पार्क-टैरिफ-खोज(⚠️₹10.95→₹1.99/यूनिट); पर्यावरण-अर्थशास्त्र-बाह्यता(पिगोवियन-कर); कार्बन-बाज़ार(CCTS-28जून-अधिसूचित); **बिंदु-98 — user-फ़ीडबैक-पर समृद्ध — PM-KUSUM-3-घटक+NITI-Aayog-समग्र-जल-प्रबंधन-सूचकांक+⚠️20%-इथेनॉल-मिश्रण-खाद्य-भूमि-ट्रेडऑफ़ जोड़े गए — Water-Energy-Food-Nexus (पंजाब-मुफ़्त-बिजली-MSP-भूजल-दोहन-क्लासिक-उदाहरण)**।

**रोजगार-गरीबी-सामाजिक क्षेत्र अर्थशास्त्र (99-112) — COMPLETE:** गरीबी-मापन(MPI-29.17%→11.28%); बेरोज़गारी-PLFS(⚠️LFPR56.2%, बेरोज़गारी5.0%→4.9%); लैंगिक-क्षेत्रीय-असमानता-नीति-उपकरण; श्रम-संहिताएँ(⚠️4-संहिता-21नवंबर2025-लागू, गिग-वर्कर्स-पहली-बार-कवरेज); उत्पादकता-रोज़गार-लचक(⚠️कृषि-55.8%-रोज़गार-हिस्सेदारी); शहरीकरण-अर्थशास्त्र; MGNREGA(⚠️"VB-G RAM G"-पुनर्नामकरण-125दिन); PM-KISAN(⚠️20वीं-किस्त-₹20,500cr/9.7करोड़); TPDS-ONORC(⚠️35राज्य/77करोड़-लाभान्वित); आयुष्मान-भारत-आर्थिक-प्रभाव; पेंशन-बीमा(जन-सुरक्षा-3-योजना-9मई2015); शिक्षा-व्यय(⚠️<4%GDP-बनाम-6%-लक्ष्य); स्वास्थ्य-फाइनेंसिंग(⚠️1.9%GDP-बनाम-2.5%-लक्ष्य); कौशल-विकास-NSQF।

**डिजिटल अर्थव्यवस्था एवं समसामयिक रुझान (113-127) — COMPLETE:** JAM-DBT-क्रांति; UPI-फिनटेक; IBC(⚠️रिकवरी-दर28.3%→36.6%, NCLT-30,600-लंबित); NBFC-IL&FS(⚠️सितंबर2018-पतन-₹91,000cr-ऋण); शिक्षा-स्वास्थ्य-व्यय-प्राथमिकताएँ; विमुद्रीकरण(⚠️8नवंबर2016-86%-मुद्रा-वापसी); कोविड-मैक्रो(⚠️FY2020-21-अंतिम-GDP-संकुचन6.6%, V-आकार-रिकवरी); डेटा-अर्थव्यवस्था(⚠️DPDP-नियम2025-18माह-चरणबद्ध); डिजिटल-क्रेडिट-एग्रीगेटर(RBI-डिजिटल-ऋण-निर्देश2025); रोज़गार-पैटर्न-शिफ्ट; Mudra-Standup(⚠️PMMY-10वर्ष-52करोड़+खाते); SHG-बैंक-लिंकेज-NRLM(मार्च2025-84.94लाख-क्रेडिट-लिंक्ड-SHG); District-Credit-Plan(लीड-बैंक-योजना); Venture-Debt-Angel(⚠️एंजल-टैक्स-समाप्ति-1अप्रैल2025-से); Cluster-Development(Hard-बनाम-Soft-हस्तक्षेप — checklist-फ़ाइल-07 का अंतिम-127वाँ-बिंदु)।

**कार्यप्रणाली-नोट:** इस विशाल-127-बिंदु-फ़ाइल में उपयोगकर्ता ने 2 बार सीधा "missing facts" फ़ीडबैक दी (बिंदु-44-बीज-प्रणाली, बिंदु-98-WEF-नेक्सस) — दोनों-बार तुरंत खुले-बिंदु को अतिरिक्त-लक्षित-वेब-खोज से समृद्ध किया गया, कभी आगे बढ़ने या अस्पष्ट-आश्वासन देने से काम नहीं चलाया गया — यही इस पूरी परियोजना का सबसे-सुसंगत-रूप-से-दोहराया-गया व्यवहार-पैटर्न रहा है। फ़ाइल की विशालता (127 बिंदु, प्रोजेक्ट-रिकॉर्ड) के बावजूद हर-बिंदु में checklist-Unit-1/6/7/9/mpsi-file-05 की मौजूदा-सामग्री से सक्रिय-cross-referencing की गई ताकि दोहराव-न्यूनतम रहे और हर-नोट में नई-गहराई जुड़े।

**🎉🎉🎉 checklist-फ़ाइल 07 (Unit 5, 127 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (127)।**

उपयोगकर्ता ने checklist-फ़ाइल 08 आरम्भ करने की पुष्टि की।

### Checklist file 08 — `08-vittiya-sansthayen-rbi-banks-sebi-nbfc.md` (29 points) — COMPLETE

5 उप-खंड: रिज़र्व बैंक एवं मौद्रिक नीति (1-6), बैंकिंग संरचना (7-14), NBFC एवं माइक्रोफाइनेंस (15-16), भुगतान प्रणाली एवं वित्तीय समावेशन (17-21), पूँजी बाज़ार एवं नियामक संस्थाएँ (22-29)। Notes गए `mppsc-syllabus/prelims-notes/unit-05-economy/08-vittiya-sansthayen-rbi-banks-sebi-nbfc/`।

**रिज़र्व बैंक एवं मौद्रिक नीति (1-6) — COMPLETE:** मुद्रा-आपूर्ति(M0-M4, M3-सबसे-व्यापक-प्रयुक्त); CRR/SLR/रेपो/रिवर्स-रेपो/MSF(⚠️वर्तमान-2026-दरें CRR3%/SLR18%/रेपो5.25%); **MPC — user-फ़ीडबैक-पर समृद्ध — 27जून2016-स्थापना/उर्जित-पटेल-समिति-सिफ़ारिश/वित्त-अधिनियम2016-RBI-अधिनियम1934-संशोधन, बाह्य-सदस्य-4वर्ष-कार्यकाल-पुनर्नियुक्ति-अपात्र-कैबिनेट-सचिव-खोज-सह-चयन-समिति, ⚠️3-3-टाई-पर-गवर्नर-निर्णायक-मत जोड़े गए**; LAF/OMO/SDF(⚠️SDF-अप्रैल2022); SLR-CRR-तुलनात्मक-भूमिका; Basel-III(⚠️RBI-9%-आधार-बनाम-Basel-8%-अधिक-रूढ़िवादी)।

**बैंकिंग संरचना (7-14) — COMPLETE:** SCB(~135)/RRB(अधिनियम1976,28RRB/22,000+शाखाएँ)/सहकारी-बैंक(त्रि-स्तरीय); सहकारी-बनाम-वाणिज्यिक(दोहरा-नियंत्रण); NPA(⚠️GNPA-2.1%-दशक-निम्नतम)/IBC; NARCL-IDRCL(⚠️₹2लाख-करोड़-ख़रीद-प्रस्ताव/15%नकद+85%SR); Payment-Banks-बनाम-SFB(₹2लाख-जमा-सीमा-बनाम-कोई-सीमा-नहीं); BC/BF-मॉडल(2006-परिपत्र,⚠️96.6%-ग्रामीण-आउटलेट); शाखा-डिजिटल-लागत-अर्थशास्त्र; PSL(40%-कुल/18%-कृषि,⚠️1अप्रैल2025-नए-दिशा-निर्देश)।

**NBFC एवं माइक्रोफाइनेंस (15-16) — COMPLETE:** NBFC-MFI(⚠️2025-निर्देश-60%-न्यूनतम-परिसंपत्ति-पूर्व75%-से-कम); NaBFID(अधिनियम2021,⚠️PCE-सीमा2025-20%→50%)/NIIF(इक्विटी-फंड-मैनेजर)।

**भुगतान प्रणाली एवं वित्तीय समावेशन (17-21) — COMPLETE:** IMPS/AEPS(⚠️2025-निकासी-सीमा₹10,000→₹25,000/दिन); JAM-BC-PMJDY-त्रि-स्तंभ(NSFI2019-24→2025-30); Financial-Inclusion-Index(⚠️Access35%/Usage45%/Quality20%,मार्च2025-स्कोर67); NCFE(4-नियामक-संयुक्त); एकीकृत-ओम्बुड्समैन-योजना(⚠️12नवंबर2021,3-योजना-एकीकरण,मुआवज़ा₹20लाख/₹1लाख)।

**पूँजी बाज़ार एवं नियामक संस्थाएँ (22-29) — COMPLETE:** पूँजी-बाज़ार(प्राथमिक-द्वितीयक,इक्विटी-डेब्ट); SEBI(⚠️1988-गैर-सांविधिक→1992-सांविधिक); IRDAI(1999-अधिनियम/2000-प्रवर्तन)/PFRDA(2013-अधिनियम); म्यूचुअल-फंड(ओपन-क्लोज़-एंडेड,⚠️NAV-सूत्र); बॉन्ड-बाज़ार(गिल्ट-कॉर्पोरेट,⚠️₹17.5→₹53.6लाख-करोड़-वृद्धि); सूक्ष्म-फ़सल-बीमा(PMFBY-checklist-Unit-5/file-07/बिंदु-37-क्रॉस-रेफ); NPS(2004,⚠️Tier-I-अनिवार्य-बनाम-Tier-II-वैकल्पिक); AIF-IFSC(⚠️3-कैटेगरी-I/II/III,IFSCA-2020-GIFT-City — checklist-फ़ाइल-08 का अंतिम-29वाँ-बिंदु)।

**कार्यप्रणाली-नोट:** user ने बिंदु-3 (MPC) पर "missing facts" फ़ीडबैक दी — तत्काल अतिरिक्त-वेब-शोध से समृद्ध किया गया (स्थापना-इतिहास/उर्जित-पटेल-समिति/बाह्य-सदस्य-चयन-प्रक्रिया-कार्यकाल/मतदान-टाई-नियम जोड़े गए) — मानक "quality feedback → तुरंत-खुले-बिंदु-को-समृद्ध-करना" पैटर्न पुनः-सफलतापूर्वक-लागू।

**🎉🎉 checklist-फ़ाइल 08 (Unit 5, 29 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (29)।**

उपयोगकर्ता ने checklist-फ़ाइल 09 आरम्भ करने की पुष्टि की।

### Checklist file 09 — `09-videsh-vyapar-niti-g20-saarc-asean.md` (17 points, Unit 5 की अंतिम checklist-फ़ाइल) — COMPLETE

3 उप-खंड: भुगतान संतुलन एवं विनिमय दर (1-4), विदेशी निवेश एवं व्यापार नीति (5-14), अंतरराष्ट्रीय संगठन एवं समूह (15-17)। Notes गए `mppsc-syllabus/prelims-notes/unit-05-economy/09-videsh-vyapar-niti-g20-saarc-asean/`।

**भुगतान संतुलन एवं विनिमय दर (1-4) — COMPLETE:** BoP-संरचना(चालू+पूँजी+त्रुटियाँ-चूक-खाता, CAD2025-26 $25.2bn/0.6%GDP, Q4-अधिशेष $7.1bn/0.7%GDP); प्रबंधित-फ़्लोट-प्रणाली(RBI-अप्रैल2025-$3.6bn-बिक्री-रुपया-अवमूल्यन-रोकने-हेतु); विदेशी-मुद्रा-भंडार(4-घटक FCA/स्वर्ण/SDR/IMF-रिज़र्व-स्थिति, $785.7bn-सर्वकालिक-उच्च[सितंबर2026], बंध्याकरण-द्वैत-क्रियाविधि); **रुपया-अंतरराष्ट्रीयकरण — 2-बार-समृद्ध(user-फ़ीडबैक "must cover all the facts") — SRVA-जुलाई2022/RBI-परिपत्र-19जुलाई2026-समेकन, तारापोर-समिति-I[1997,3-चरण-रोडमैप,1999-2000-लक्ष्य,1997-98-एशियाई-वित्तीय-संकट-से-पटरी-से-उतरा]/II[2006,अधिक-व्यावहारिक-पुनर्मूल्यांकन], वर्तमान-चालू/पूँजी-खाता-परिवर्तनीयता-स्थिति, देश-विस्तार[रूस/श्रीलंका/UAE/मॉरीशस/~18-देश]**।

**विदेशी निवेश एवं व्यापार नीति (5-14) — COMPLETE:** FDI-बनाम-FPI(स्वचालित-बनाम-सरकारी-मार्ग, क्षेत्रीय-सीमाएँ — अंतरिक्ष100%/रक्षा74-100%/बीमा74%→2025-में100%); SEZ/EPCG/RoDTEP(SEZ-अधिनियम2005/नियम2006, RoDTEP-1जनवरी2021-MEIS-प्रतिस्थापन-WTO-गैर-अनुपालन-कारण); स्वर्ण/तेल/इलेक्ट्रॉनिक्स-आयात-निर्भरता(कच्चा-तेल~85-88%, स्वर्ण+82%YoY-अप्रैल2026, FY2025-26-व्यापार-घाटा~$119.30bn); WTO-कृषि-करार/व्यापार-सुविधा(AoA-उरुग्वे-राउंड-1जनवरी1995, Peace-Clause-बाली2013-10%-सब्सिडी-सीमा-सुरक्षा, भारत-2020/21/22-आह्वान, TFA-बाली-दिसंबर2013/भारत-11अगस्त2016-अनुसमर्थन/22फ़रवरी2017-वैश्विक-प्रवर्तन); FTA/CEPA/मूल-नियम(भारत-14-परिचालित-FTA, UK/ओमान/न्यूज़ीलैंड-2025, भारत-EU-FTA-27जनवरी2026, UAE-CEPA-18फ़रवरी2022-हस्ताक्षर/1मई2022-प्रभावी-$100.06bn-व्यापार, ऑस्ट्रेलिया-ECTA-29दिसंबर2022, CAROTAR-अधिसूचना14/2025); निर्यात-संवर्धन-परिषदें/SEZ-भूमिका(EPC-क्षेत्र-विशिष्ट-RCMC, APEDA-1986-PFEPC-प्रतिस्थापन, FIEO/EEPC); **विप्रेषण(भारत-2024-विश्व-सर्वाधिक-प्राप्तकर्ता $129bn/14.3%-वैश्विक-हिस्सा, स्रोत-बदलाव-खाड़ी54%→28%/उच्च-आय-देश26%→36%, 18मिलियन+-डायस्पोरा)**; निर्यात-प्रतिस्पर्धा(लॉजिस्टिक्स-लागत7.97%GDP-2023-24-पुनरीक्षित-विकसित-देश-स्तर-निकट, BIS-679+उत्पाद-श्रेणी-$4,000+परीक्षण-लागत, भारत-वियतनाम-चीन-श्रम-लागत-तुलना); एंटी-डंपिंग/सेफगार्ड(checklist-Unit-5/file-07/बिंदु-28-क्रॉस-रेफ, DGTR-जाँच-प्रक्रिया-चरण, धारा-8B-सेफगार्ड-भेद); **एक्सपोर्ट-क्रेडिट/ECGC — user-फ़ीडबैक-पर समृद्ध("I think you are missing the facts") — ERIC-जुलाई1957→ECGC-1964→1983-पुनर्नामकरण, वाणिज्यिक/राजनैतिक-जोखिम-कवर, सितंबर2021-IPO-मंत्रिमंडल-स्वीकृति+₹4,400करोड़-निवेश(अभी-लंबित), NIRVIK-योजना-बजट2020-21[90%-मूलधन+ब्याज-कवर], देश-जोखिम-वर्गीकरण-A1-से-D, ST/MLT-पॉलिसी-प्रकार, 2025-24-देश-रेटिंग-उन्नत-MSE-हेतु**।

**अंतरराष्ट्रीय संगठन एवं समूह (15-17) — COMPLETE:** G-20(1999-वित्तीय-संकट-पश्चात-स्थापना→2007-08-संकट-पश्चात-राष्ट्राध्यक्ष-स्तर, भारत-अध्यक्षता1दिसंबर2022-30नवंबर2023-थीम"वसुधैव-कुटुम्बकम्", 18वाँ-शिखर-सम्मेलन9-10सितंबर2023-भारत-मंडपम-नई-दिल्ली-घोषणा-पत्र, अफ़्रीकी-संघ-सितंबर2023-स्थायी-सदस्य, ट्रोइका-इंडोनेशिया-भारत-ब्राज़ील); SAARC(8दिसंबर1985-ढाका-स्थापना/सचिवालय-काठमांडू1987, 8-सदस्य[मूल7+अफ़ग़ानिस्तान2007], ⚠️19वाँ-शिखर-सम्मेलन-इस्लामाबाद2016-उरी-हमले-पश्चात-रद्द-तब-से-"डीप-फ़्रीज़", भारत-झुकाव-BIMSTEC-ओर, कार्यात्मक-सहयोग-जारी[मालदीव-करेंसी-स्वैप-2026]); ASEAN(1992-क्षेत्रीय-संवाद→1995-पूर्ण-संवाद→2002-प्रथम-शिखर-सम्मेलन-नोम-पेन्ह→2012-रणनीतिक-भागीदारी→2022-व्यापक-रणनीतिक-भागीदारी, AIFTA-अक्टूबर2003-रूपरेखा/AITIGA-1जनवरी2010-प्रभावी, 2024-व्यापार$106.83bn-भारत-8वाँ-व्यापारिक-भागीदार, भारत-RCEP-से-नवंबर2020-बाहर)।

**कार्यप्रणाली-नोट:** उपयोगकर्ता ने इस फ़ाइल में 2 बार मिड-फ़ाइल गुणवत्ता-फ़ीडबैक दी — बिंदु-4(रुपया-अंतरराष्ट्रीयकरण, "must cover all the facts") तथा बिंदु-14(ECGC, "I think you are missing the facts") — दोनों-बार तत्काल खुले-नोट को अतिरिक्त-लक्षित-वेब-शोध से समृद्ध किया गया, फिर आगे बढ़ा गया — मानक व्यवहार-पैटर्न पुनः-सफलतापूर्वक-लागू। दोनों-बार Edit के पश्चात सेक्शन-नंबरिंग/स्वयं-परीक्षण-प्रश्न भी पुनः-सत्यापित/विस्तारित किए गए।

**🎉 checklist-फ़ाइल 09 (Unit 5, 17 बिंदु) पूर्ण रूप से समाप्त — फ़ाइल-गणना सत्यापित (17)।**

---

## 🎉🎉🎉 MAJOR MILESTONE: सम्पूर्ण Unit 5 (अर्थव्यवस्था) की सभी 9 checklist-फ़ाइलें अब पूर्ण रूप से समाप्त 🎉🎉🎉

`mppsc-syllabus/prelims/unit-05-economy/` में कुल **9 checklist-फ़ाइलें** — **सभी अब `mppsc-syllabus/prelims-notes/unit-05-economy/` में गहन, तथ्य-सत्यापित नोट्स के साथ पूर्ण**:
- 01-mp-ki-vartaman-sthiti (6 बिंदु) ✅
- 02-jansankhya-manav-sansadhan-shiksha-swasthya-kaushal (9 बिंदु) ✅
- 03-mp-sdg-pragati (4 बिंदु) ✅
- 04-mp-krishi-udyog-msme-adhosanrachna (26 बिंदु) ✅
- 05-atmanirbhar-mp-odop (3 बिंदु) ✅
- 06-mp-ipr-pragati (3 बिंदु) ✅
- 07-bhartiya-arthavyavastha-haliya-rujhan (127 बिंदु) ✅
- 08-vittiya-sansthayen-rbi-banks-sebi-nbfc (29 बिंदु) ✅
- 09-videsh-vyapar-niti-g20-saarc-asean (17 बिंदु) ✅

**कुल = 224 बिंदु/नोट्स (6+9+4+26+3+3+127+29+17), संपूर्ण Unit 5 के लिए — यह `mppsc-syllabus/prelims/` का अब-तक-का सबसे-बड़ा यूनिट रहा (Unit 7 के 153-बिंदु/Unit 6 के 196-बिंदु से भी अधिक बिंदु-गणना)।**

इस-यूनिट में उपयोगकर्ता ने बार-बार सीधा-गुणवत्ता-फ़ीडबैक दिया (file-07/बिंदु-9/21/44/98; file-08/बिंदु-3; file-09/बिंदु-4/14) — हर-बार तुरंत खुले-नोट को अतिरिक्त-लक्षित-वेब-शोध से समृद्ध किया गया, कभी आगे बढ़ने या अस्पष्ट-आश्वासन देने से काम नहीं चलाया गया — यही इस पूरी परियोजना का सबसे-सुसंगत-रूप-से-दोहराया-गया व्यवहार-पैटर्न बना रहा।

**स्थायी कार्यप्रणाली-नियम अनुसार, किसी नई यूनिट पर आगे बढ़ने से पूर्व उपयोगकर्ता की स्पष्ट स्वीकृति की प्रतीक्षा है — रुका जा रहा है।** शेष अभी-तक-शुरू-न-हुई इकाइयाँ (Unit 7 के मील-के-पत्थर-नोट में दर्ज पुरानी-सूची के अनुसार): Unit 2 (भारत का इतिहास), Unit 3 (भारत/MP भूगोल), Unit 4 (संवैधानिक व्यवस्था), Unit 8 (समसामयिक घटनाएँ), Paper-II (सामान्य अभियोग्यता — पहले-से पूर्ण, केवल सन्दर्भ)। (Unit 1, 5, 6, 7, 9, 10 अब पूर्ण।)
