# Sectional Views & Dimensioning (सेक्शनल व्यू व डायमेंशनिंग)

## Sectional Views — Why Needed

Complex objects often have **internal features** (holes, cavities, internal ribs/webs) that would be shown entirely as confusing hidden (dashed) lines in a normal orthographic view. A **sectional view** imagines the object **cut through by an imaginary cutting plane**, with the portion between the observer and the cutting plane removed — revealing internal detail as clear, solid (visible) lines instead of hidden lines, greatly improving drawing clarity.

## Cutting Plane Line
Indicated on the view **from which the section is taken**, using a **chain thick line (or chain thin line with thick ends)**, with arrows showing the direction of viewing, often labelled with letters (e.g., A-A) to identify the corresponding sectional view.

## Hatching (Section Lining)
The cut (solid material) surface in a sectional view is indicated by **hatching** — thin, parallel, evenly-spaced diagonal lines, typically at **45°** to the main outline.

- **Different parts in an assembly section are hatched in different directions (or spacing)** to visually distinguish them from each other.
- Thin parts/webs, in some conventions, may be shown solid black instead of being hatched, if they'd be too thin to hatch clearly.

## Types of Sectional Views

| Type | Description |
|---|---|
| **Full Section** | Cutting plane passes completely through the entire object |
| **Half Section** | Cutting plane removes only **one quarter** of the object — used for **symmetric** objects, showing one half as a sectional view and the other half as a normal (external) view in the same drawing, giving both internal and external detail simultaneously |
| **Offset Section** | Cutting plane is **bent/stepped** (not a single straight line) to pass through several important features that don't lie on a single straight line — the offsets/steps in the cutting plane are not shown as lines in the resulting sectional view itself |
| **Revolved (Rotated) Section** | A thin cross-sectional slice is revolved 90° **in place**, superimposed directly onto the normal view — used to show the cross-sectional shape of ribs, spokes, arms, without drawing a separate full view |
| **Removed Section** | Similar to a revolved section, but the rotated cross-section is drawn **separately**, outside the main view, rather than superimposed on it |
| **Broken-Out (Partial) Section** | Only a small, localized portion of the view is sectioned (broken out) to reveal a specific internal detail, with an irregular break line delimiting the sectioned area |

## Conventions in Sectioning (important exceptions — frequently tested)

Certain machine elements are, **by drawing convention, NOT hatched even when they lie in the cutting plane** — because sectioning them would not add useful information and would clutter the drawing:

**Solid shafts, bolts, nuts, rivets, keys, pins, spokes of a wheel, ribs/webs (when cut lengthwise along their thin dimension) — these are conventionally shown "in full" (un-hatched) even though the cutting plane technically passes through them.**

## Dimensioning — Basic Elements

| Element | Description |
|---|---|
| **Dimension Line** | A thin, continuous line, terminated by arrowheads, indicating the extent of a dimension |
| **Extension (Projection) Line** | A thin line extending from the object's feature/edge, to which the dimension line connects (does not touch the object outline directly — a small visible gap is left) |
| **Leader Line** | A thin line (often at an angle, with an arrowhead) connecting a dimension/note/label to the specific feature it refers to |
| **Dimension Value/Text** | The actual numerical value, placed above or within a break in the dimension line |

## Systems of Dimensioning

| System | Description |
|---|---|
| **Chain (Continuous) Dimensioning** | Dimensions are placed **end-to-end in a series**, each measured from the end of the previous one — simple, but errors can **accumulate** along the chain |
| **Parallel (Datum) Dimensioning** | All dimensions are measured **from a single common reference (datum) point/line** — avoids error accumulation, generally preferred for precision work |
| **Combined Dimensioning** | A mixture of chain and parallel dimensioning, as needed for a given drawing |

## Methods of Indicating Dimensions

| Method | Description |
|---|---|
| **Aligned System** | Dimension values are written so they can be read from the **bottom or the right-hand side** of the drawing (text is aligned with/parallel to the dimension line) |
| **Unidirectional System** | All dimension values are written **horizontally**, readable from the bottom of the drawing only, regardless of the dimension line's orientation — commonly preferred in modern practice for its consistency and ease of reading |

## General Rules of Good Dimensioning Practice
- Each dimension should be given **only once** in a drawing (avoid duplication, which risks inconsistency if the drawing is later revised).
- Dimensions should be placed on the view that shows the feature **most clearly**.
- Avoid dimensioning to a hidden (dashed) line wherever possible — dimension to a visible-line view instead.
- Overall (total) dimensions should generally be given, in addition to (not instead of) the individual component dimensions.

## Most Important Facts to Remember

- **Sectional views** reveal internal detail by imagining the object cut by a **cutting plane**, replacing confusing hidden lines with clear solid lines.
- **Hatching** is drawn at **45°**, using thin parallel lines; different components in an assembly get **different hatching directions**.
- **Solid shafts, bolts, nuts, keys, rivets, ribs/webs (cut lengthwise), and spokes are conventionally NOT hatched**, even if the cutting plane passes through them — a very frequently tested exception.
- **Half section**: shows one half sectioned, one half external — used for symmetric objects, showing internal AND external detail together.
- **Chain dimensioning**: errors accumulate; **Parallel (datum) dimensioning**: measured from one common reference, avoids accumulated error — a key comparison.

## Practice Questions

1. At what standard angle are hatching lines typically drawn in a sectional view? → **45°**
2. Name at least three machine elements that are conventionally NOT hatched in a sectional view, even when the cutting plane passes through them. → **Solid shafts, bolts/nuts, keys, rivets, spokes, ribs/webs (any three)**
3. Which type of sectional view shows one half of a symmetric object in section and the other half as a normal external view? → **Half section**
4. Which dimensioning system avoids the accumulation of error by measuring all dimensions from a single common reference point? → **Parallel (datum) dimensioning**
