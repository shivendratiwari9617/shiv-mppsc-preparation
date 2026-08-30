# MPPSC Study Index

Last syllabus verification: 2026-08-30 (Stage 1 COMPLETE — 10 of 10 units) — see [reports/syllabus_coverage_report.md](reports/syllabus_coverage_report.md)
Last PYQ verification: 2026-08-30 (Stage 2 COMPLETE for available paper — 2026 Set C, 100 questions) — see [reports/pyq_coverage_report.md](reports/pyq_coverage_report.md)

Canonical syllabus source: [reports/syllabus_master.md](reports/syllabus_master.md) (extracted from
`Syllabus/*.pdf` — all 3 files share identical Paper-I/GS content; PDFs use a legacy non-Unicode Hindi
font, already rendered to `Syllabus/page_images/*.png` for future re-reads, no need to re-extract).

| Unit | MCQ count | Syllabus: Full/Partial/None | PYQ: Full/Partial/None | Gap file |
|------|-----------|------------------------------|--------------------------|----------|
| Unit 1: मध्यप्रदेश का इतिहास, संस्कृति व साहित्य | 6,664 | 6/2/1 | 4/2/0 | [gaps/unit1_gaps.md](gaps/unit1_gaps.md) |
| Unit 2: भारत का इतिहास (प्राचीन–मध्यकाल–आधुनिक) | 5,240 | 4/2/0 | 10/1/0 | [gaps/unit2_gaps.md](gaps/unit2_gaps.md) |
| Unit 3: भारत व MP का भूगोल | 7,960 | 13/1/0 | 16/0/0 | [gaps/unit3_gaps.md](gaps/unit3_gaps.md) |
| Unit 4: संवैधानिक तंत्र (भारत + MP प्रशासन) | 6,382 | 9/0/0 | 10/0/0 | [gaps/unit4_gaps.md](gaps/unit4_gaps.md) |
| Unit 5: अर्थव्यवस्था (भारत + MP) | 7,366 | 5/1/3 | 7/2/3 | [gaps/unit5_gaps.md](gaps/unit5_gaps.md) |
| Unit 6: विज्ञान, टेक्नोलॉजी और सार्वजनिक स्वास्थ्य | 5,632 | 3/1/3 | 3/3/3 | [gaps/unit6_gaps.md](gaps/unit6_gaps.md) |
| Unit 7: पर्यावरण, जैवविविधता, SDGs व आपदा प्रबंधन | 6,430 | 3/0/0 | 3/0/0 | [gaps/unit7_gaps.md](gaps/unit7_gaps.md) |
| Unit 8: समसामयिकी (अंतरराष्ट्रीय/राष्ट्रीय/MP) | 4,795 | 3/0/0 | 0/8/0 | [gaps/unit8_gaps.md](gaps/unit8_gaps.md) |
| Unit 9: सूचना एवं संचार प्रौद्योगिकी (ICT) | 2,164 | 3/2/0 | 8/3/0 | [gaps/unit9_gaps.md](gaps/unit9_gaps.md) |
| Unit 10: MP की जनजातीय विरासत, लोक-संस्कृति व साहित्य | 4,412 | 4/1/0 | 8/6/0 | [gaps/unit10_gaps.md](gaps/unit10_gaps.md) |

MCQ counts sourced from `SYLLABUS_COVERAGE.md` (content inventory, kept as-is, separate document).

## Folder mapping (verified)
- Study notes: the 10 numbered unit folders in repo root.
- Syllabus: `Syllabus/` (capital S) — 3 PDFs, identical Paper-I content (see syllabus_master.md).
- PYQs: `previus_year_paper/` (note: typo'd folder name, singular) — current workspace contains 1
  available paper: `mp_pcs_2026_gs_paper_1_set_c.pdf`; Stage 2 classified all 100 visible questions.

## Update protocol
- On "update unit X syllabus": re-run Stage 1 only for unit X, refresh its row and
  reports/syllabus_coverage_report.md, update gaps/unitX_gaps.md.
- On "update unit X PYQ": re-run Stage 2 only for unit X, refresh its row and
  reports/pyq_coverage_report.md, update gaps/unitX_gaps.md.
- On "full re-verification": repeat Stage 1 for all units, then Stage 2 for all units.
- On "continue verification" / "next unit": Stage 1 is complete for all 10 units, and Stage 2 is
  complete for the currently available PYQ paper. If more PYQ PDFs are added, run Stage 2 again.
- Never paste raw MCQs or full syllabus text into this file — that detail lives only in the reports
  and gap files.
