# Mechanical Properties of Metals — Hardness, Ductility, Toughness (धातुओं के यांत्रिक गुण)

## Core Mechanical Properties — Definitions & Distinctions

| Property | Definition | Typical Test |
|---|---|---|
| **Strength** | Ability to withstand applied load/stress without failure | Tensile testing |
| **Elasticity** | Ability to regain original shape after removal of load | Stress-strain test (elastic limit) |
| **Plasticity** | Ability to undergo permanent deformation without fracture | Tensile/compression test |
| **Ductility** | Ability to be drawn into thin wires under tensile load | % elongation, % reduction in area |
| **Malleability** | Ability to be hammered/rolled into thin sheets under compressive load | Rolling/forging tests |
| **Brittleness** | Tendency to fracture with little/no plastic deformation (opposite of ductility) | Impact test |
| **Toughness** | Ability to absorb energy (impact) before fracture — area under stress-strain curve | Izod/Charpy impact test |
| **Hardness** | Resistance to indentation, scratching, abrasion, or wear | Brinell, Rockwell, Vickers tests |
| **Stiffness** | Resistance to elastic deformation — measured by Young's Modulus (E) | Slope of stress-strain curve |
| **Resilience** | Ability to absorb energy within the **elastic** range and release it on unloading | Modulus of resilience = σ²/2E |
| **Fatigue Strength** | Ability to withstand repeated/cyclic loading without failure | Fatigue (S-N curve) testing |
| **Creep** | Slow, time-dependent plastic deformation under sustained load, especially at high temperature | Creep test |

## Hardness Testing Methods — Comparison (very high-yield)

| Test | Indenter | Measures | Typical Use |
|---|---|---|---|
| **Brinell Hardness Test (BHN)** | Hardened steel/tungsten carbide ball (10 mm dia.) | BHN = Load / Surface area of indentation | Softer/coarser-grain metals, castings |
| **Rockwell Hardness Test (HRC/HRB)** | Diamond cone (Rockwell C) or steel ball (Rockwell B) | Depth of penetration, direct dial reading | Fast, common workshop test — HRC for hardened steel |
| **Vickers Hardness Test (VHN/HV)** | Square-based diamond pyramid | VHN = Load / Surface area of indentation | Very hard materials, thin sections, precise/small-area testing |
| **Shore Scleroscope Test** | Diamond-tipped hammer, measures rebound height | Dynamic hardness (rebound) | Large components, non-destructive quick check |

## Impact Testing — Toughness Measurement

| Test | Specimen notch | Method |
|---|---|---|
| **Izod Test** | V-notch, specimen held **vertically** (cantilever), notch facing the hammer | Pendulum hammer strikes above the notch |
| **Charpy Test** | V-notch or U-notch, specimen held **horizontally** (simply supported at both ends) | Pendulum hammer strikes opposite the notch, at midspan |

Both measure **energy absorbed to fracture** (in Joules) — an indicator of toughness and notch sensitivity (especially important in brittle-fracture and low-temperature applications).

## Ductility Measures

- **Percentage Elongation** = [(Final length − Original length) / Original length] × 100
- **Percentage Reduction in Area** = [(Original area − Final area) / Original area] × 100

## Fatigue

Failure of a material under **repeated/cyclic stress**, at a stress level **lower than its ultimate tensile strength** (and often lower than yield strength) — the primary cause of failure in rotating machine components (shafts, gears, springs, bearings).

- **Endurance Limit (Fatigue Limit)**: The maximum stress below which a material can withstand an **infinite number of stress cycles** without failure (clearly defined for ferrous metals like steel; non-ferrous metals like aluminium typically show no true endurance limit — fatigue strength is instead specified at a given number of cycles, e.g., 10⁷).
- **S-N Curve (Stress vs. Number of cycles)**: Standard graphical representation of fatigue behaviour.

## Creep

Time-dependent permanent deformation under **constant stress**, significant mainly at **high temperatures** (typically above 0.4 × melting point in absolute temperature) — critical in boiler tubes, gas turbine blades, and steam turbine components.

### Three Stages of Creep
1. **Primary (Transient) Creep** — decreasing creep rate.
2. **Secondary (Steady-state) Creep** — constant, minimum creep rate (most important for design life estimation).
3. **Tertiary Creep** — increasing creep rate, leading rapidly to fracture.

## Most Important Facts to Remember

- **Ductility** = drawn into wires (tension); **Malleability** = hammered into sheets (compression) — a very common confusion pair.
- **Toughness** = energy absorbed before fracture (area under σ-ε curve); **Hardness** = resistance to indentation/wear — different properties, not synonyms.
- **Izod test**: specimen vertical, notch faces the striker. **Charpy test**: specimen horizontal, struck opposite the notch. Both measure impact toughness in Joules.
- **Brinell** uses a ball indenter (BHN); **Rockwell** gives a direct depth-based reading (HRC/HRB); **Vickers** uses a diamond pyramid, suited to very hard/thin materials.
- **Fatigue** = failure under repeated stress below UTS; **Endurance limit** = stress below which infinite cycles are survived (steel has one, aluminium generally does not).
- **Creep** = time-dependent deformation under constant stress at high temperature; secondary/steady-state stage is used for design.

## Practice Questions

1. Which property allows a metal to be drawn into thin wire? → **Ductility**
2. Which property allows a metal to be rolled into a thin sheet? → **Malleability**
3. In the Izod impact test, how is the specimen held? → **Vertically, as a cantilever, with the notch facing the striking hammer**
4. Which hardness test uses a diamond pyramid indenter, suited for very hard/thin materials? → **Vickers**
