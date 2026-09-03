# Losses in Pipe Flow (पाइप प्रवाह में हानियाँ)

## Why Losses Occur

Bernoulli's theorem (point 21) assumes an **ideal, frictionless** fluid — real fluids have **viscosity**, so energy is continuously lost to friction (converted to heat) as fluid flows through a pipe, and additional losses occur wherever the flow pattern is disturbed (bends, fittings, sudden area changes).

## Classification of Losses

| Category | Cause |
|---|---|
| **Major Loss** | Loss due to **friction** along the length of a straight pipe |
| **Minor Losses** | Losses due to **local disturbances**: sudden expansion/contraction, bends, fittings (valves, elbows, tees), entry, exit |

## Major Loss — Friction (Darcy-Weisbach Equation)

**hf = 4fLV² / (2gD)** (some textbooks write it as **hf = fLV²/2gD** using a different friction-factor convention — always check which convention a given problem uses)

where:
- hf = head loss due to friction (m)
- f = coefficient of friction (Darcy friction factor)
- L = length of pipe
- V = mean velocity of flow
- D = diameter of pipe
- g = 9.81 m/s²

**Key relationship: friction loss is directly proportional to L and V², and inversely proportional to D** — doubling the velocity **quadruples** the friction loss (V² dependence) — a very frequently tested proportionality fact.

### Chezy's Formula (alternative form for friction loss, often used in open channel flow but applicable to pipes too)

**V = C√(mi)**

(C = Chezy's constant, m = hydraulic mean depth, i = hydraulic gradient/slope)

## Minor Losses — Types & Formulas

| Type of Loss | Formula (in terms of velocity head V²/2g) |
|---|---|
| **Loss due to sudden enlargement** | h = (V1 − V2)²/2g |
| **Loss due to sudden contraction** | h = 0.5 V²/2g (approximate, using coefficient of contraction) |
| **Loss at entrance to pipe (from a reservoir)** | h = 0.5 V²/2g |
| **Loss at exit of pipe (into a reservoir)** | h = V²/2g (entire kinetic energy is lost) |
| **Loss due to bend** | h = k·V²/2g (k = bend loss coefficient, depends on bend angle/radius) |
| **Loss due to obstruction/fittings (valve etc.)** | h = k·V²/2g (k depends on the specific fitting) |

**General pattern: every minor loss is expressed as some coefficient × velocity head (V²/2g)** — this common form is the most important thing to remember about minor losses as a category.

## Hydraulic Gradient Line (HGL) & Total Energy Line (TEL)

| Line | Represents |
|---|---|
| **Total Energy Line (TEL)** | Sum of pressure head + velocity head + datum head at each point — always **above or equal to** HGL, drops only due to losses along the flow direction (in the absence of a pump) |
| **Hydraulic Gradient Line (HGL)** | Sum of pressure head + datum head only (i.e., TEL minus velocity head) |

**TEL is always above HGL by exactly the velocity head (V²/2g) at every section** — both lines slope downward in the direction of flow due to friction losses (for a horizontal pipe of constant diameter, both are straight lines sloping down).

## Equivalent Pipe (Dupuit's Equation)

For pipes in **series** (different diameters, one after another) replaced by a single equivalent pipe of uniform diameter, carrying the same discharge with the same total head loss:

**L/D⁵ = L1/D1⁵ + L2/D2⁵ + L3/D3⁵ + ...**

## Pipes in Series vs Pipes in Parallel

| | Series | Parallel |
|---|---|---|
| Discharge (Q) | Same through each pipe | Total Q = sum of Q in each branch |
| Head loss | Total loss = sum of losses in each pipe | Head loss is **same** across each parallel branch |

(Directly analogous to series/parallel electrical circuits — current↔discharge, voltage drop↔head loss.)

## Most Important Facts to Remember

- **Major loss = friction loss (Darcy-Weisbach: hf = 4fLV²/2gD)**; **Minor losses = local losses** (entry, exit, bends, sudden expansion/contraction, fittings) — each minor loss expressed as a coefficient × V²/2g.
- **Friction loss ∝ V²** — doubling velocity quadruples friction head loss.
- **Exit loss into a reservoir = entire velocity head (V²/2g)** — the full kinetic energy is dissipated; **entrance loss ≈ 0.5V²/2g**.
- **TEL is always above HGL by the velocity head**, and both slope downward in the direction of flow (for a pipe without a pump), due to continuous friction loss.
- **Pipes in series**: same Q through each, head losses add up. **Pipes in parallel**: Q splits between branches, head loss is the same across each branch — same as electrical series/parallel analogy.

## Practice Questions

1. If the velocity of flow in a pipe is doubled, by what factor does the friction head loss increase (all else constant)? → **4 times (since hf ∝ V²)**
2. What is the head loss at the exit of a pipe discharging into a large reservoir, in terms of velocity head? → **Equal to the full velocity head, V²/2g**
3. In pipes arranged in parallel, what remains the same across each branch — the discharge or the head loss? → **Head loss** (discharge splits, but head loss is equal in each branch)
4. What does the vertical gap between the Total Energy Line and the Hydraulic Gradient Line represent at any section? → **The velocity head (V²/2g) at that section**
