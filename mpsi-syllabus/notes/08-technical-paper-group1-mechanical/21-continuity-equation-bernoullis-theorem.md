# Continuity Equation & Bernoulli's Theorem (सांतत्य समीकरण व बर्नूली प्रमेय)

## Types of Fluid Flow — Quick Classification

| Basis | Types |
|---|---|
| Time dependence | **Steady** (properties don't change with time at a point) / **Unsteady** |
| Space dependence | **Uniform** (velocity same at all points at an instant) / **Non-uniform** |
| Compressibility | **Compressible** / **Incompressible** |
| Rotation | **Rotational** / **Irrotational** |
| Flow pattern | **Laminar** (smooth, parallel layers) / **Turbulent** (chaotic, mixing) — see Reynolds Number below |
| Dimension | **1D, 2D, 3D flow** |

## Reynolds Number (Re) — Laminar vs Turbulent Criterion

**Re = ρVD/μ = VD/ν**

(ρ = density, V = velocity, D = characteristic length/diameter, μ = dynamic viscosity, ν = kinematic viscosity) — a **dimensionless number** representing the ratio of inertial forces to viscous forces.

| Flow regime (in a pipe) | Reynolds Number |
|---|---|
| **Laminar** | Re < 2000 |
| **Transitional** | 2000 < Re < 4000 |
| **Turbulent** | Re > 4000 |

## Continuity Equation — Conservation of Mass

For steady, incompressible flow through a pipe/duct of varying cross-section, mass flow rate is constant at every section:

**A1V1 = A2V2 = Constant (Q, the volumetric flow rate)**

where A = cross-sectional area, V = average velocity at that section.

**Key consequence: where the cross-sectional area decreases, velocity increases, and vice versa** — this is the basic principle behind nozzles (area decreases, velocity increases) and diffusers (area increases, velocity decreases).

(General/compressible form: **ρ1A1V1 = ρ2A2V2**)

## Bernoulli's Theorem (Bernoulli's Equation)

**"For an ideal (inviscid), incompressible fluid in steady, continuous flow along a streamline, the total energy (pressure energy + kinetic energy + potential energy) per unit weight remains constant."**

**P/ρg + V²/2g + Z = Constant**

(this form expresses energy **per unit weight**, giving each term the dimension of **length**, called "head"):

| Term | Name |
|---|---|
| P/ρg | **Pressure head** |
| V²/2g | **Kinetic (velocity) head** |
| Z | **Potential (datum/elevation) head** |

### Assumptions in Bernoulli's Equation
1. Flow is **steady**.
2. Fluid is **incompressible**.
3. Flow is **irrotational** (frictionless along the streamline, ideal fluid — no viscosity).
4. Flow is **continuous, along a streamline**.
5. No external energy (pump/turbine) is added or removed between the two sections considered.

### Applying Bernoulli Between Two Points (1 and 2)

**P1/ρg + V1²/2g + Z1 = P2/ρg + V2²/2g + Z2**

### Key Consequence (Venturi Principle)
Where velocity is **high**, pressure is **low**, and vice versa (at the same elevation) — this is the exact principle behind: **Venturi meter, carburetor (see point 19), atomizers, lift generation on an aerofoil.**

## Applications of Bernoulli's Equation

| Application | Principle Used |
|---|---|
| **Venturi Meter** | Flow rate measurement — velocity increases at the throat (narrow section), causing a measurable pressure drop, related to flow rate via Bernoulli + Continuity together |
| **Orifice Meter** | Similar principle, using a plate with a hole instead of a smooth venturi throat — simpler/cheaper but higher energy loss |
| **Pitot Tube** | Measures **local flow velocity** by comparing static pressure to stagnation (total) pressure at a point |
| **Carburetor** | Air accelerating through the venturi throat lowers pressure, drawing in fuel (see point 19) |
| **Aircraft wing lift** | Air moves faster over the curved upper surface (lower pressure) than the flatter lower surface (higher pressure), generating a net upward force |

## Venturi Meter — Discharge Formula

**Qactual = Cd × [A1A2/√(A1² − A2²)] × √(2gh)**

where Cd = coefficient of discharge (accounts for real losses, Cd < 1), h = manometer reading (difference in piezometric head) — combines the continuity equation and Bernoulli's theorem together.

## Most Important Facts to Remember

- **Continuity Equation: A1V1 = A2V2** — smaller area means higher velocity, and vice versa.
- **Bernoulli's Equation: P/ρg + V²/2g + Z = Constant** — sum of pressure head, velocity head, and datum head is constant along a streamline (for ideal, steady, incompressible flow).
- **Where velocity is high, pressure is low** (Bernoulli's key practical consequence) — basis of venturi meter, carburetor, aerofoil lift.
- **Reynolds Number: Re = ρVD/μ**; Re < 2000 → laminar, Re > 4000 → turbulent (in pipe flow).
- Bernoulli's equation assumes an **ideal (inviscid), incompressible, steady, irrotational** flow with no external energy addition — real applications need a correction (coefficient of discharge, Cd) to account for actual losses.
- **Pitot tube** measures local velocity; **Venturi/Orifice meter** measures flow rate.

## Practice Questions

1. Water flows through a pipe that narrows from 20 cm to 10 cm diameter. If velocity in the wider section is 2 m/s, find the velocity in the narrower section.
   → A1V1 = A2V2 → (π/4×0.2²)×2 = (π/4×0.1²)×V2 → V2 = 2×(0.2/0.1)² = **8 m/s**
2. According to Bernoulli's principle, what happens to pressure when fluid velocity increases (at constant elevation)? → **Pressure decreases**
3. What is the critical Reynolds number range that separates laminar from turbulent flow in a pipe? → **Laminar below ~2000, turbulent above ~4000**
4. Which instrument uses the difference between stagnation pressure and static pressure to measure local flow velocity? → **Pitot tube**
