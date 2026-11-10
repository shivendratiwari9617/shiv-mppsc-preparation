# Columns/Struts & Springs — SOM (स्तंभ एवं स्प्रिंग)

## Column vs Beam — Failure Mode Distinction

A **column/strut** is a long compression member. Unlike short compression blocks (which fail by **crushing**), long columns fail by **buckling** (sudden lateral bending) at a load much lower than the crushing load — this is the key reason columns need separate design theory (Euler's theory) from simple direct-stress calculations.

## Euler's Buckling Formula (extremely high-yield)

**Pcr = π²EI / Le²**

- Pcr = critical (buckling) load
- E = modulus of elasticity, I = least moment of inertia of cross-section
- Le = **effective length** (depends on end conditions, not the actual physical length L)

## Effective Length — End Condition Table (very high-yield memorization)

| End Condition | Effective Length (Le) |
|---|---|
| Both ends hinged/pinned | **Le = L** |
| Both ends fixed | **Le = L/2** |
| One end fixed, other free (cantilever column) | **Le = 2L** |
| One end fixed, other hinged | **Le = L/√2 ≈ 0.707L** |

A fixed-fixed column can carry the **highest** load (smallest Le); a fixed-free column carries the **least** (largest Le) — same physical length, vastly different buckling capacity.

## Slenderness Ratio

**λ = Le / k**, where **k (radius of gyration) = √(I/A)**

- High slenderness ratio → **long column** → fails by Euler buckling (elastic instability)
- Low slenderness ratio → **short column** → fails by **crushing/direct compressive stress**, not buckling
- A commonly-cited dividing threshold: λ ≈ 80 (varies by material/code) separates "short" from "long" column behaviour

## Rankine's Formula — Empirical, Valid Across Short-to-Long Range

Euler's formula overestimates strength for short/intermediate columns (it assumes purely elastic buckling). Rankine's empirical formula bridges crushing and buckling:

**1/Pcr(Rankine) = 1/Pc + 1/Pe**

(Pc = crushing load = σc·A; Pe = Euler's buckling load) — for very short columns Pe is huge so Rankine load ≈ Pc; for very long columns Pc is comparatively large so Rankine load ≈ Pe.

## Springs — Helical Spring Stiffness (very high-yield)

For a close-coiled helical spring under axial load:

**k (spring stiffness) = Gd⁴ / (8D³n)**

- G = modulus of rigidity (shear modulus), d = wire diameter, D = mean coil diameter, n = number of **active** coils
- **Spring index, C = D/d** (typically 4–12 for practical springs; C too low → manufacturing difficulty, C too high → spring buckles/tangles)

## Wahl's Stress Factor

Actual maximum shear stress in a helical spring is higher than the simple torsion formula predicts, due to **curvature effect + direct shear**. **Wahl's factor (Kw)** corrects for this:

**τmax = Kw × (8WD)/(πd³)** (W = axial load)

## Series vs Parallel Spring Combination (classic MCQ trap)

| Combination | Equivalent Stiffness | Effect |
|---|---|---|
| **Series** | 1/keq = 1/k1 + 1/k2 + ... | Combined stiffness is **less** than either individual spring (softer) |
| **Parallel** | keq = k1 + k2 + ... | Combined stiffness is **more** than either individual spring (stiffer) |

## Types of Springs

- **Helical compression/tension spring** — most common, coil form
- **Torsion spring** — resists twisting, ends have arms/hooks (used in clothes-pins, door hinges)
- **Leaf/laminated spring** — flat plates stacked in graduated lengths, classic **automobile suspension** application (absorbs shocks via bending, not torsion)

## Most Important Facts to Remember

- **Pcr = π²EI/Le²** — Euler's formula; effective length table (hinged-hinged = L, fixed-fixed = L/2, fixed-free = 2L, fixed-hinged = 0.707L) is the single most tested fact here.
- Short columns fail by **crushing**; long columns fail by **buckling** — slenderness ratio (λ = Le/k) decides which.
- Rankine's formula is empirical and valid for **both** short and long columns (Euler's alone is not, for short columns).
- Helical spring stiffness **k = Gd⁴/8D³n** — directly proportional to d⁴, inversely to D³ and n.
- **Series springs → softer (lower keq); parallel springs → stiffer (higher keq)** — opposite of the intuitive "more springs = stronger" assumption for series.
- Leaf springs = automobile suspension; helical springs = general compression/tension/torsion use.

## Practice Questions

1. A column with both ends fixed has physical length L. What is its effective length? → **Le = L/2**
2. Which column configuration (same L) can withstand the highest buckling load? → **Both ends fixed** (smallest Le → highest Pcr)
3. Two identical springs of stiffness k are connected in series. What is the equivalent stiffness? → **k/2** (softer than either spring alone)
4. What does the spring index (C = D/d) represent, and what is its typical practical range? → **Ratio of mean coil diameter to wire diameter; typically 4–12**
