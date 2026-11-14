# Bending Stress, Torsion & Deflection of Beams (बीम में बंकन प्रतिबल, मरोड़ व विक्षेपण)

## Bending Stress — Theory of Simple Bending (Bernoulli-Euler Theory)

### Assumptions
1. Beam material is homogeneous, isotropic, and obeys Hooke's law.
2. Transverse plane sections remain plane after bending (no warping).
3. The beam is initially straight and of uniform cross-section.
4. Radius of curvature is large compared to the beam's depth.

### The Bending Equation (flexure formula) — most important formula in this topic

**M/I = σ/y = E/R**

where:
- M = Bending moment at the section
- I = Moment of inertia of the section about the neutral axis
- σ = Bending stress at distance y from the neutral axis
- E = Modulus of elasticity
- R = Radius of curvature

### Key Points
- **Neutral Axis (N.A.)**: The layer in the beam cross-section where bending stress is **zero** — passes through the centroid of the section.
- Bending stress **varies linearly** with distance from the neutral axis — maximum at the extreme fibres (top/bottom), zero at N.A.
- **Section Modulus (Z) = I/y_max** → so **σ_max = M/Z** — Z is a direct measure of a section's bending strength.
- Above the N.A. one fibre is in **compression**, below is in **tension** (for a simply-supported beam under sagging moment) — or vice-versa for hogging.

## Torsion of Shafts (मरोड़)

### The Torsion Equation

**T/J = τ/r = Gθ/L**

where:
- T = Applied torque
- J = Polar moment of inertia (J = πd⁴/32 for solid circular shaft)
- τ = Shear stress at radius r
- G = Modulus of rigidity
- θ = Angle of twist (radians)
- L = Length of shaft

### Assumptions in Torsion Theory
1. Shaft material is homogeneous and obeys Hooke's law.
2. Circular cross-section remains circular after twisting (no distortion).
3. Twist is uniform along the shaft length.
4. Shear stress varies linearly from zero at the axis to maximum at the outer surface.

### Power Transmitted by a Shaft

**P = 2πNT / 60** (Watts, where N = rpm, T = torque in N·m)

### Strength/Design Formulas

**Solid shaft**: τ_max = 16T / (πd³)

**Hollow shaft**: τ_max = 16T·D / [π(D⁴ − d⁴)] (D = outer, d = inner diameter)

## Deflection of Beams (विक्षेपण)

### Methods to Find Deflection
| Method | Basis |
|---|---|
| **Double Integration Method** | Integrating the differential equation of the elastic curve (EI d²y/dx² = M) twice |
| **Macaulay's Method** | Modified double integration for beams with discontinuous loading |
| **Moment-Area Method** | Uses area of the M/EI diagram between two points |
| **Castigliano's Theorem** | Based on strain energy, ∂U/∂P = deflection |
| **Unit Load Method** | Uses a virtual unit load applied at the point where deflection is sought |

### Standard Deflection Formulas (most frequently asked)

| Case | Maximum Deflection (δmax) |
|---|---|
| Cantilever, point load W at free end | **WL³/3EI** (at free end) |
| Cantilever, UDL w over entire length L | **wL⁴/8EI** (at free end) |
| Simply supported beam, central point load W | **WL³/48EI** (at midspan) |
| Simply supported beam, UDL w over entire span L | **5wL⁴/384EI** (at midspan) |

(EI = flexural rigidity of the section)

## Most Important Facts to Remember

- Bending equation: **M/I = σ/y = E/R** — the single most tested formula in SOM.
- Torsion equation: **T/J = τ/r = Gθ/L** — the torsional analogue of the bending equation.
- Neutral axis = zero bending stress, passes through centroid.
- Section modulus **Z = I/y_max**; σ_max = M/Z.
- Cantilever point load deflection: **WL³/3EI**; Simply supported central point load: **WL³/48EI** — SSB deflects **16 times less** than an equivalent cantilever (48 vs 3 in denominator) for the same W and L — a classic comparison question.
- SSB with UDL: **5wL⁴/384EI**; Cantilever with UDL: **wL⁴/8EI**.
- Power transmitted by shaft: P = 2πNT/60.

## Practice Questions

1. A cantilever of length 2 m and flexural rigidity EI = 4×10⁶ N·m² carries a 5 kN point load at the free end. Find maximum deflection.
   → δ = WL³/3EI = 5000×2³/(3×4×10⁶) = 40000/1.2×10⁷ = **3.33 × 10⁻³ m = 3.33 mm**
2. What is the ratio of maximum bending stress location relative to the neutral axis? → **Maximum at extreme fibre, zero at neutral axis**
3. Which deflection is larger for identical W, L, EI — a cantilever with end load, or a simply supported beam with central load? → **Cantilever (WL³/3EI > WL³/48EI)**
