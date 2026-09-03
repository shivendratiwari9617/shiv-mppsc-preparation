# Thin Cylinders / Pressure Vessels — Basic Principles (पतले सिलेंडर / प्रेशर वेसल के मूल सिद्धांत)

## Thin Cylinder — Definition

A cylindrical shell is classified as **"thin"** when the ratio of wall thickness (t) to internal diameter (d) is small:

**t/d < 1/20 (or 1/15, depending on textbook)**

For thin cylinders, stress is assumed to be **uniformly distributed across the thickness** (unlike thick cylinders, where Lamé's theory with radial stress variation applies).

## Stresses in a Thin Cylindrical Shell Under Internal Pressure

When a thin cylinder is subjected to internal fluid pressure **p**, two types of normal stress develop in the shell wall:

### 1. Circumferential / Hoop Stress (σh or σc)

Acts **tangentially** to the circumference (tends to burst the cylinder along its length, i.e., split it into two half-pipes).

**σh = pd / 2t**

### 2. Longitudinal Stress (σl)

Acts **along the axis** of the cylinder (tends to burst the cylinder across its cross-section, i.e., pull the end caps off).

**σl = pd / 4t**

### Key Relationship — Extremely High-Yield Fact

**σh = 2 × σl**

Hoop stress is always **exactly twice** the longitudinal stress in a thin cylinder — this is why cylindrical pressure vessels (like LPG cylinders, boiler drums, pipes) typically fail by **splitting lengthwise** (along a longitudinal seam) rather than by the end caps blowing off, since hoop stress is the larger of the two.

## Maximum Shear Stress in the Shell

**τ_max = (σh − σl) / 2 = pd / 8t**

## Thin Spherical Shell Under Internal Pressure

A sphere has **only one type of stress** (equal in all directions in the wall, since it's symmetric):

**σ = pd / 4t**

Note this is numerically equal to the *longitudinal* stress of an equivalent cylinder — a sphere is the most efficient pressure-vessel shape because stress is uniform and lower than the hoop stress of a cylinder of the same size.

## Volumetric Strain (change in volume due to pressure)

For a thin cylindrical shell:

**Volumetric strain (δV/V) = (σh/E)(1 − 2μ) + (σl/E)(1 − 2μ)** — more precisely expressed via combined strain formulas involving circumferential strain (2×) and longitudinal strain (1×), since volume change involves both diameter and length change. The commonly used combined form:

**δV/V = εl + 2εc** (εl = longitudinal strain, εc = circumferential/hoop strain)

## Circumferential & Longitudinal Strain Formulas

**εc (hoop strain) = (σh − μσl) / E**

**εl (longitudinal strain) = (σl − μσc) / E**

(μ = Poisson's ratio, using generalized Hooke's law for biaxial stress state)

## Efficiency of Joints (Riveted Pressure Vessels)

Real pressure vessels are often riveted/welded, which weakens the plate. Design must account for **joint efficiency (η)**:

**σh = pd / (2t·η)** — thickness must be increased to compensate for joint efficiency < 100%.

## Applications

Boiler shells, LPG/gas cylinders, pipes carrying pressurized fluid, compressed air receivers, hydraulic cylinders — all designed using thin-cylinder theory when t/d is small.

## Most Important Facts to Remember

- **Hoop stress σh = pd/2t; Longitudinal stress σl = pd/4t; σh = 2σl** — this ratio is the single most frequently asked fact in this topic.
- Thin cylinder criterion: **t/d < 1/20**.
- Cylindrical pressure vessels fail by **longitudinal splitting** (because hoop stress > longitudinal stress).
- Thin sphere: **σ = pd/4t** — same formula as a cylinder's longitudinal stress, and only one stress type exists (not two).
- Maximum shear stress in a thin cylinder: **τmax = pd/8t**.

## Practice Questions

1. A thin cylindrical shell of diameter 1 m and thickness 10 mm carries internal pressure of 2 MPa. Find the hoop stress.
   → σh = pd/2t = 2×1000/(2×10) = **100 MPa**
2. For the same cylinder, find the longitudinal stress. → σl = pd/4t = 2×1000/(4×10) = **50 MPa** (exactly half of hoop stress)
3. Why do cylindrical gas cylinders typically develop cracks running along their length rather than around their circumference? → **Because hoop stress (which resists circumferential/longitudinal splitting) is twice the longitudinal stress — the shell is weaker against the longitudinal-splitting mode**
