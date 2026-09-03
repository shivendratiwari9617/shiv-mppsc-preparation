# Types of Turbines — Pelton, Francis, Kaplan (टर्बाइन के प्रकार)

## Hydraulic Turbine — Basic Definition

A machine that converts the **hydraulic (kinetic + pressure) energy of flowing/falling water into mechanical (rotational) energy** — the reverse function of a pump. Turbines are broadly classified as **Impulse** or **Reaction** type.

## Impulse vs Reaction Turbine — Fundamental Classification (extremely high-yield)

| | Impulse Turbine | Reaction Turbine |
|---|---|---|
| Working Principle | All available head is converted into **kinetic energy** (velocity) by a **nozzle** before striking the runner; water jet strikes blades **at atmospheric pressure** | Only **part** of the head is converted to velocity before entering the runner; the **remaining pressure energy is converted gradually within the runner** itself as water flows through it |
| Pressure at runner | **Atmospheric** throughout (constant pressure on the runner) | **Above atmospheric** at inlet, drops as water passes through the runner |
| Admission | **Partial** (only some blades in the jet's path receive water at any instant) | **Full/complete** (entire circumference of runner receives water) |
| Casing required | Not essential (open runner, e.g., in air) | **Essential** — a closed casing is required to maintain the pressure difference |
| Draft tube | Not needed | **Needed** — to recover residual kinetic/pressure energy from water leaving the runner and allow the runner to be set above tailwater level |
| Example | **Pelton wheel** | **Francis turbine, Kaplan turbine** |

## Pelton Wheel (Turbine) — Impulse Type

### Working
Water is directed through one or more **nozzles**, converting the entire available head into a high-velocity jet at atmospheric pressure. This jet strikes **spoon-shaped (double-hemispherical) buckets/vanes** mounted on the periphery of a wheel, causing the wheel to rotate.

### Key Features
- Used for **high head, low discharge** applications (typically **head > 250 m**, can go much higher).
- Runner speed regulated by a **spear/needle valve** in the nozzle (controls jet flow rate) — a **deflector** may also be used to quickly divert the jet in emergencies (load rejection) without abrupt valve closure (which could cause water hammer).
- **Jet ratio (m) = D/d** (wheel pitch diameter / jet diameter), typically kept between **11 and 14** for optimum efficiency.
- Maximum hydraulic efficiency is achieved when the **bucket speed is half the jet velocity** (a classic derivable/testable result from impulse-momentum theory).

## Francis Turbine — Reaction Type (Mixed Flow)

### Working
Water enters the runner **radially (inward)** through **guide vanes** (which also control flow rate) and exits **axially** — hence called a "mixed flow" reaction turbine. Both pressure and velocity change as water passes through the runner.

### Key Features
- Used for **medium head, medium discharge** applications (typically head **≈ 60–250 m**, though ranges vary by source).
- **Guide vanes (wicket gates)**: adjustable vanes surrounding the runner that control the quantity and direction of water entering — the primary flow-rate control mechanism (analogous to the spear valve in Pelton).
- Requires a **draft tube** at exit (a gradually expanding passage below the runner) — reduces exit velocity (recovering some kinetic energy as pressure) and allows the runner to be installed above tailwater level while still utilizing the full available head.
- Most widely used turbine type worldwide, suited to the broadest range of hydro sites.

## Kaplan Turbine — Reaction Type (Axial Flow)

### Working
Water flows **parallel to the turbine shaft (axial flow)**, striking runner blades that resemble a ship's propeller.

### Key Features
- Used for **low head, high discharge** applications (typically head **< 30 m** or so, but very large flow rates).
- Distinctive feature: **adjustable (variable-pitch) runner blades**, which can be rotated to match varying flow conditions — gives Kaplan turbines high efficiency even at part-load, unlike fixed-blade propeller turbines.
- Often paired with adjustable guide vanes too — this "double regulation" (adjustable guide vanes + adjustable runner blades) is a hallmark Kaplan feature.

## Head-Discharge Classification Summary (very high-yield memorization table)

| Turbine | Type | Head | Discharge |
|---|---|---|---|
| **Pelton** | Impulse | High (> ~250 m) | Low |
| **Francis** | Reaction (mixed flow) | Medium (~60–250 m) | Medium |
| **Kaplan** | Reaction (axial flow) | Low (< ~30 m) | High |

## Specific Speed (Ns) — Turbine Selection Parameter

A dimensionless (or dimensional, per convention used) parameter combining head, discharge/power, and rotational speed, used to select the most suitable turbine type for given site conditions:

**Ns = N√P / H^(5/4)**

(N = rotational speed, P = power developed, H = head) — **low Ns → Pelton; medium Ns → Francis; high Ns → Kaplan** — a direct consequence of the head-discharge relationship above.

## Efficiencies (definitions relevant across all turbine types)

| Efficiency | Definition |
|---|---|
| **Hydraulic Efficiency** | Power developed by runner / Power supplied by water (jet) |
| **Mechanical Efficiency** | Power available at shaft / Power developed by runner |
| **Overall Efficiency** | Power at shaft / Power supplied by water = Hydraulic × Mechanical efficiency |

## Most Important Facts to Remember

- **Impulse turbine** (Pelton): all head converted to velocity **before** the runner (via nozzle), runner at atmospheric pressure, partial admission, no draft tube needed.
- **Reaction turbine** (Francis, Kaplan): pressure changes **within** the runner, needs a closed casing and a **draft tube**, full admission.
- **Head-discharge ranking: Pelton = high head/low discharge; Francis = medium head/medium discharge; Kaplan = low head/high discharge** — the single most tested fact in this topic.
- Pelton uses **spear valve** for flow control; Francis/Kaplan use **guide vanes (wicket gates)**.
- Kaplan's defining feature: **adjustable-pitch runner blades**, giving good part-load efficiency.
- Maximum Pelton efficiency occurs when **bucket velocity = half the jet velocity**.

## Practice Questions

1. Which turbine type is best suited for high head and low discharge conditions? → **Pelton wheel (impulse turbine)**
2. Which component is essential in a reaction turbine but not needed in an impulse turbine? → **Draft tube (and a closed casing)**
3. What is the distinctive design feature of a Kaplan turbine that allows good efficiency across varying loads? → **Adjustable (variable-pitch) runner blades**
4. At what jet-velocity-to-bucket-velocity ratio does a Pelton wheel achieve maximum efficiency? → **Bucket velocity = half the jet velocity (ratio of 2:1)**
