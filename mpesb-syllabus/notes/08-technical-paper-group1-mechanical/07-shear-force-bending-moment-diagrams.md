# Shear Force & Bending Moment Diagrams — SFD & BMD (अपरूपण बल व बंकन आघूर्ण आरेख)

Note: This topic is inherently graphical (diagrams of shear force/bending moment variation along a beam). Since this is a plain-text note, each standard case below is described by its **shape and key values** rather than drawn — pair this note with visual practice from a standard SOM diagram set. The underlying rules given here let you sketch/verify any such diagram yourself.

## Basic Definitions

- **Shear Force (SF)** at a section: the algebraic sum of all vertical forces acting on either side of that section (usually taken as sum of forces to the left of the section).
- **Bending Moment (BM)** at a section: the algebraic sum of moments of all forces acting on one side of that section, taken about that section.

## Sign Convention (standard convention)

| Quantity | Positive (+) | Negative (−) |
|---|---|---|
| Shear Force | Left portion tends to move **up** relative to right (clockwise shear) | Left portion tends to move **down** relative to right |
| Bending Moment | **Sagging** (concave upward, beam curves like a "smile" ∪) | **Hogging** (concave downward, beam curves like a "frown" ∩) |

## Relationship Between Load, Shear Force & Bending Moment (calculus relations — high-yield)

**dV/dx = −w** (rate of change of shear force = − intensity of loading, w)

**dM/dx = V** (rate of change of bending moment = shear force)

Consequences used constantly in sketching diagrams:
- Where SF = 0, BM is **maximum or minimum** (turning point of the BMD).
- Under a UDL (uniformly distributed load), SFD is a **straight sloping line**, BMD is a **parabola**.
- Under a point load, SFD has a **sudden jump (step)** equal to the load, BMD has a **straight-line slope change (kink)**.
- With no load (only between point loads, on an unloaded span), SFD is **horizontal (constant)**, BMD is a **straight line**.
- Under a uniformly varying load (UVL/triangular load), SFD is **parabolic**, BMD is a **cubic curve**.

## Standard Case 1 — Cantilever with a Point Load (W) at Free End

- **SFD**: Constant value = W throughout the span (rectangle shape).
- **BMD**: Straight line, zero at free end, increasing linearly to maximum **−WL** at the fixed end (hogging, triangular shape).
- Maximum BM = WL, occurs at the **fixed support**.

## Standard Case 2 — Cantilever with UDL (w per unit length) over entire span L

- **SFD**: Straight line, zero at free end, increasing linearly to **wL** at fixed end (triangular shape).
- **BMD**: Parabolic curve, zero at free end, maximum **−wL²/2** at fixed end.

## Standard Case 3 — Simply Supported Beam with Central Point Load (W), span L

- Reactions: RA = RB = W/2.
- **SFD**: Constant **+W/2** from A to midspan, then jumps to **−W/2** from midspan to B (rectangle, step at center).
- **BMD**: Triangular shape, zero at both supports, **maximum at midspan = WL/4** (sagging, positive).

## Standard Case 4 — Simply Supported Beam with UDL (w) over entire span L

- Reactions: RA = RB = wL/2.
- **SFD**: Straight line from **+wL/2** at A to **−wL/2** at B, crossing zero exactly at midspan.
- **BMD**: Parabolic curve, zero at both supports, **maximum at midspan = wL²/8** (sagging) — this is the single most frequently used formula in beam problems.

## Standard Case 5 — Simply Supported Beam with Eccentric (off-center) Point Load

- Reactions found by taking moments about one support.
- **SFD**: Two constant-value rectangles (different magnitudes on each side of the load), with a step-jump at the load point.
- **BMD**: Two straight-line segments, maximum BM occurs **under the point load** (not at midspan), value = (W·a·b)/L, where a, b are distances of the load from the two supports.

## Point of Contraflexure

A point on the BMD where the bending moment changes sign (from sagging to hogging or vice versa) — the beam has **zero curvature/zero bending moment** at this point. Occurs in **overhanging beams** and **continuous beams**, not in simple cantilever or simply-supported beams with loads only within the span.

## Most Important Facts to Remember

- **dM/dx = V** and **dV/dx = −w** — the calculus relations that generate every diagram shape rule above.
- Where SF = 0 (or changes sign), BM is **maximum**.
- Simply supported beam, central point load: **Mmax = WL/4** at midspan.
- Simply supported beam, UDL over full span: **Mmax = wL²/8** at midspan — the most commonly asked SFD/BMD numerical.
- Cantilever with end point load: **Mmax = WL** at the fixed end (hogging).
- Point load → SFD jump/step; UDL → SFD sloped straight line, BMD parabola.
- Sagging BM = positive (convention); Hogging BM = negative.

## Practice Questions

1. A simply supported beam of span 6 m carries a central point load of 12 kN. Find the maximum bending moment.
   → Mmax = WL/4 = 12×6/4 = **18 kN·m**
2. A simply supported beam of span 4 m carries a UDL of 5 kN/m over its entire length. Find the maximum bending moment.
   → Mmax = wL²/8 = 5×4²/8 = **10 kN·m**
3. A cantilever of length 3 m carries a point load of 10 kN at its free end. Find the maximum bending moment and where it occurs.
   → Mmax = WL = 10×3 = **30 kN·m, at the fixed support**
