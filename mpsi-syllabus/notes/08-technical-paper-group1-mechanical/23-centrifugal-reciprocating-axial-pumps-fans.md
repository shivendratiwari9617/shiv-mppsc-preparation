# Centrifugal, Reciprocating & Axial Pumps/Fans (केन्द्रापसारी व रेसीप्रोकेटिंग पंप, अक्षीय पंप व पंखे)

## Pump — Basic Classification

A pump is a machine that converts **mechanical energy into hydraulic (fluid) energy**, used to move liquid from a lower to a higher level/pressure. Broadly classified as:

| Category | Working Principle |
|---|---|
| **Rotodynamic (Centrifugal/Axial) Pumps** | Fluid gains energy through the action of a **rotating impeller** — continuous, steady flow |
| **Positive Displacement Pumps (e.g., Reciprocating)** | Fluid is **trapped in a fixed volume** and mechanically pushed/displaced — pulsating flow |

## Centrifugal Pump

### Working Principle
A rotating **impeller** imparts kinetic energy to the liquid by centrifugal action (liquid enters at the centre/eye of the impeller and is flung outward by rotation); this kinetic energy is then converted into **pressure energy** as the liquid passes through the **volute casing** (or diffuser), which gradually increases in cross-sectional area, slowing the flow (per continuity + Bernoulli).

### Main Parts
| Part | Function |
|---|---|
| **Impeller** | Rotating component with curved vanes, imparts energy to the fluid |
| **Casing (Volute)** | Collects fluid from the impeller and converts velocity into pressure (gradually expanding passage) |
| **Suction Pipe & Foot Valve** | Draws liquid from the sump/source; foot valve (non-return) prevents backflow, keeps the pump primed |
| **Delivery Pipe** | Carries liquid from the pump to the required point/height |

### Priming
The process of filling the pump casing and suction pipe **completely with liquid** before starting, to remove air — essential because a centrifugal pump **cannot start pumping if air is present** (air is far less dense, so the centrifugal force generated is insufficient to lift/deliver liquid).

### Key characteristics
- Suited for **large discharge, low-to-moderate head**.
- Gives **continuous (non-pulsating), steady flow**.
- **Cavitation**: a critical operational problem — occurs when local pressure at the impeller eye/suction side falls below the liquid's vapour pressure, causing vapour bubbles to form and then violently collapse downstream, causing noise, vibration, and pitting damage to the impeller — avoided by limiting suction lift (NPSH — Net Positive Suction Head — must be maintained above a minimum value).
- **Specific Speed (Ns)**: a parameter used to classify/select pump type for given head-discharge conditions.

## Reciprocating Pump

### Working Principle
A **positive displacement** pump — a piston/plunger reciprocates inside a cylinder; on the **suction stroke** it draws liquid in through a suction valve, and on the **delivery stroke** it pushes liquid out through a delivery valve — both valves are **non-return (one-way) valves**.

### Types
| Type | Description |
|---|---|
| **Single-acting** | Delivers liquid only on one stroke (either forward or backward) per revolution |
| **Double-acting** | Delivers liquid on **both** strokes (uses both sides of the piston), giving roughly double the discharge of an equivalent single-acting pump per revolution |
| **Simplex** | Single cylinder |
| **Duplex/Triplex** | Two/three cylinders, used to reduce flow pulsation and provide more uniform delivery |

### Key characteristics
- Suited for **low discharge, high head/pressure**.
- Gives **pulsating (non-uniform) flow** — a significant disadvantage compared to centrifugal pumps, often smoothed using an **air vessel** fitted on suction/delivery pipe.
- **Slip**: the difference between theoretical discharge and actual discharge, due to leakage past valves/piston — expressed as a percentage; **negative slip** can occur under specific conditions (rare, delivery valve opens before end of suction stroke).

## Centrifugal vs Reciprocating Pump — Comparison (very high-yield)

| | Centrifugal Pump | Reciprocating Pump |
|---|---|---|
| Type | Rotodynamic | Positive displacement |
| Flow | Continuous, steady | Pulsating |
| Discharge | High | Comparatively low |
| Head | Low to moderate | High |
| Handling viscous/solid-laden liquids | Poor (not suited) | Better suited |
| Mechanical complexity/maintenance | Simple, fewer moving parts, low maintenance | More complex, more maintenance (valves, packing) |
| Speed | Can run at high speed | Limited to lower speeds (inertia of reciprocating parts) |

## Axial Flow Pump

Fluid flows **parallel to the pump shaft axis** (unlike centrifugal, where flow is radial/outward) — the impeller resembles a ship's propeller. Suited for **very high discharge at low head** applications — e.g., flood control/irrigation drainage pumps, large-scale water circulation.

## Fans, Blowers & Compressors — Classification by Pressure Ratio

| Device | Pressure ratio (outlet/inlet) | Typical use |
|---|---|---|
| **Fan** | Up to ~1.11 | Moving large volumes of air/gas at very low pressure rise — ventilation, cooling |
| **Blower** | ~1.11 to 1.20 | Moderate pressure rise — industrial ventilation, combustion air supply |
| **Compressor** | > 1.20 (can be very high) | Significant pressure rise — compressed air systems, refrigeration |

### Types of Fans (by flow direction — parallel classification to pumps)
- **Centrifugal (Radial) Fan**: air enters axially, discharged radially via a rotating impeller in a casing.
- **Axial Fan**: air flows parallel to the shaft axis (like a simple propeller/table fan) — suited for high volume, low pressure rise (typical ceiling/exhaust fans).

## Most Important Facts to Remember

- **Centrifugal pump**: rotodynamic, continuous flow, high discharge/low head, must be **primed** before starting, susceptible to **cavitation**.
- **Reciprocating pump**: positive displacement, pulsating flow, low discharge/high head, has **suction & delivery non-return valves**, uses an **air vessel** to smooth flow.
- Double-acting reciprocating pump delivers on **both strokes**, roughly double the discharge of single-acting for the same size/speed.
- **Axial pump**: flow parallel to shaft, very high discharge at low head.
- **Fan (lowest pressure rise) < Blower < Compressor (highest pressure rise)** — classified purely by pressure ratio achieved.
- Cavitation occurs when local pressure drops below vapour pressure — a critical centrifugal pump failure mode, controlled by maintaining adequate **NPSH**.

## Practice Questions

1. Why must a centrifugal pump be "primed" before starting? → **Because air in the casing/suction pipe cannot generate sufficient centrifugal force to lift/deliver liquid — the pump won't function with air present**
2. Which type of pump gives a pulsating flow — centrifugal or reciprocating? → **Reciprocating**
3. What device is commonly fitted to a reciprocating pump to smooth out its pulsating flow? → **Air vessel**
4. Rank fan, blower, and compressor in order of increasing pressure ratio achieved. → **Fan < Blower < Compressor**
