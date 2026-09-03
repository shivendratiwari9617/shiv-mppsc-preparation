# Stress-Strain Relationship, Hooke's Law (प्रतिबल-विकृति संबंध, हुक का नियम)

## Stress (प्रतिबल)

**Stress (σ) = Force (P) / Cross-sectional Area (A)**
- SI Unit: **N/m² = Pascal (Pa)**; commonly used in **N/mm² = MPa** for engineering values.

### Types of Stress

| Type | Description |
|---|---|
| **Tensile Stress** | Due to a pulling force, tends to elongate the body |
| **Compressive Stress** | Due to a pushing force, tends to shorten the body |
| **Shear Stress (τ)** | Acts tangential/parallel to the cross-section, tends to slide one layer over another |
| **Bending Stress** | Due to bending moment, varies linearly across the section (see point 8) |
| **Torsional/Shear Stress (in shafts)** | Due to twisting moment (see point 8) |

## Strain (विकृति)

**Strain (ε) = Change in dimension / Original dimension** — a **dimensionless** ratio.

| Type | Formula |
|---|---|
| Linear/Tensile Strain | ε = δL / L (change in length / original length) |
| Lateral Strain | Change in lateral dimension / original lateral dimension |
| Shear Strain (φ) | Angular deformation (radians) due to shear stress |
| Volumetric Strain | Change in volume / original volume |

## Hooke's Law

**Within the elastic limit, stress is directly proportional to strain.**

**σ = E × ε** (E = Modulus of Elasticity, a material constant)

This linear relationship holds only up to the **proportional limit** on the stress-strain curve.

## Elastic Constants

| Constant | Symbol | Relates | Formula |
|---|---|---|---|
| **Modulus of Elasticity (Young's Modulus)** | E | Direct/normal stress to linear strain | E = σ/ε |
| **Modulus of Rigidity (Shear Modulus)** | G or C | Shear stress to shear strain | G = τ/φ |
| **Bulk Modulus** | K | Volumetric/hydrostatic stress to volumetric strain | K = σ/(ΔV/V) |
| **Poisson's Ratio** | μ or ν | Lateral strain to linear strain | μ = Lateral strain / Linear strain |

### Relationship Between Elastic Constants

**E = 2G(1 + μ)**

**E = 3K(1 − 2μ)**

**E = 9KG / (3K + G)**

(These relationships are frequently tested — allow computing one constant if the other two are known.)

### Typical Poisson's Ratio range: **0.25 to 0.33** for most metals (e.g., steel ≈ 0.3).

## Stress-Strain Curve for Mild Steel (Ductile Material) — Key Points

| Point on curve | Meaning |
|---|---|
| **Proportional Limit** | Point up to which stress is proportional to strain (Hooke's law valid) |
| **Elastic Limit** | Maximum stress up to which material returns to original shape on unloading |
| **Upper Yield Point** | Sudden drop in stress begins; material starts to deform plastically |
| **Lower Yield Point** | Stress at which plastic deformation continues at roughly constant stress |
| **Ultimate Tensile Strength (UTS)** | Maximum stress the material can withstand — peak of the curve |
| **Breaking/Fracture Point** | Point at which the specimen actually fractures (stress here is lower than UTS due to necking) |

**Note:** Only ductile materials (like mild steel) show a distinct yield point; brittle materials (like cast iron) fracture with little/no plastic deformation and no clear yield point.

## Ductile vs Brittle Materials

| | Ductile | Brittle |
|---|---|---|
| Example | Mild steel, aluminium, copper | Cast iron, glass, concrete |
| Yield point | Distinct | Absent/not well-defined |
| Elongation before fracture | Large (necking occurs) | Very small |
| Failure | Gradual, with warning | Sudden, without warning |

## Factor of Safety (FoS)

**FoS = Ultimate Stress / Permissible (Working/Allowable) Stress**

(also often taken as Yield Stress / Working Stress for ductile materials) — ensures a safety margin against uncertainties in loading, material properties, and manufacturing. (See also point 34.)

## Most Important Facts to Remember

- σ = Eε (Hooke's Law) — valid only within the elastic/proportional limit.
- **E = 2G(1+μ)** and **E = 3K(1−2μ)** — the two key elastic-constant relations, very frequently asked.
- Mild steel's stress-strain curve shows: Proportional limit → Elastic limit → Yield point → UTS → Fracture; cast iron shows no distinct yield point.
- Poisson's ratio for most metals lies between **0.25–0.33**.
- Units: Stress in N/mm² (MPa); Strain is dimensionless.
- FoS = Ultimate stress / Permissible stress.

## Practice Questions

1. For steel, E = 200 GPa and μ = 0.3. Find G. → G = E/[2(1+μ)] = 200/(2×1.3) = **76.9 GPa**
2. Which material shows a distinct yield point on the stress-strain curve — mild steel or cast iron? → **Mild steel** (ductile)
3. What is the SI unit of strain? → **Dimensionless (no unit)**
