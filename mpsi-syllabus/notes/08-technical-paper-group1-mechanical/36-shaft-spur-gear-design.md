# Shaft & Spur Gear Design (शाफ्ट व स्पर गियर डिजाइन)

## Shaft — Basic Definition

A rotating machine element used to **transmit power/torque** from one component to another (e.g., motor to gearbox, engine to wheels) — typically subjected to a combination of **torsion (twisting) and bending**, sometimes with axial load too.

## Types of Shafts

| Type | Description |
|---|---|
| **Transmission Shaft** | Transmits power between source and machines absorbing power (e.g., line shafts, countershafts, motor shafts) — carries torque, may also carry bending loads via mounted pulleys/gears |
| **Machine (Spindle) Shaft** | An integral part of a machine itself (e.g., crankshaft — see point 18) |
| **Axle** | Rotates **or** remains stationary while a wheel rotates on/with it — primarily carries **bending load**, transmits little to no torque (e.g., a non-driven vehicle axle) — an important distinction from a true "shaft" |

**Key distinction: a shaft primarily transmits torque (twisting moment), while an axle primarily carries bending load without significant torque transmission.**

## Shaft Design — Basic Approach

A shaft under combined bending moment (M) and torque (T) is typically designed using one of the following theories:

### Maximum Shear Stress Theory (commonly used — ASME code basis for shaft design)

**Equivalent Torque, Te = √(M² + T²)**

Then the shaft diameter is found from the simple torsion equation (point 8): **Te = (π/16) × τ_max × d³**

### Maximum Principal Stress Theory

**Equivalent Bending Moment, Me = ½[M + √(M² + T²)]**

Then: **Me = (π/32) × σ_max × d³**

(These "equivalent" torque/moment formulas allow a shaft under **combined** bending and torsion to be designed using the simple torsion or bending formulas from point 8, by converting the combined-stress state into a single equivalent value.)

## Design Considerations for Shafts
- **Strength** (as above — must not exceed permissible shear/bending stress).
- **Rigidity/Stiffness** — angle of twist under load must stay within an acceptable limit (excessive twist can cause misalignment/vibration issues, even if strength is adequate) — often the **governing** (more restrictive) criterion for long shafts, even more critical than pure strength.
- **Critical Speed** — a rotating shaft has a natural frequency of lateral vibration (point 32); operating at or near this speed (the shaft's "critical speed") causes resonance and potentially destructive vibration — shafts should be designed to run safely away from their critical speed.

## Keyways & Stress Concentration in Shafts
A **keyway** (a slot cut in a shaft to fit a key, see point 39, for transmitting torque to a mounted component like a gear/pulley) is a significant source of **stress concentration** (point 34) — shaft diameter calculations often need to be increased at keyway locations to compensate.

## Spur Gear Design — Overview

Building on spur gear terminology from point 27 (module, pitch circle, pressure angle, etc.), gear **design** additionally involves checking the gear teeth against failure modes:

### Failure Modes of Gear Teeth

| Failure Mode | Description |
|---|---|
| **Bending Failure (Tooth Breakage)** | Tooth acts like a cantilever beam under the transmitted tangential load — can fracture at the root (fillet) if bending stress exceeds the material's endurance limit — checked using the **Lewis equation** |
| **Surface (Pitting/Wear) Failure** | Repeated contact stress at the tooth surface (Hertzian contact stress) causes fatigue pitting/surface wear over many cycles — checked using contact-stress formulas (e.g., **Buckingham's equation**) |

### Lewis Equation (Beam Strength of Gear Tooth)

**Wt = σ0 × b × Pc × Y** (or an equivalent module-based form: **Wt = σ0 × b × m × Y**)

where:
- Wt = tangential tooth load (the beam-strength limit)
- σ0 = permissible/design bending stress of the gear material
- b = face width of the gear
- Pc (or m) = circular pitch (or module)
- Y = Lewis form factor (depends on the number of teeth and pressure angle — accounts for the tooth's actual shape/geometry as a cantilever beam)

**Key conceptual point: the Lewis equation treats each gear tooth as a cantilever beam fixed at the root, loaded by the tangential component of the transmitted force at the tip** — this is the foundational simplification behind gear-tooth bending-strength design.

### Dynamic Load & Service Factor
Real gears experience additional **dynamic load** beyond the static/nominal tangential load, due to manufacturing/meshing inaccuracies, especially at higher speeds — accounted for using velocity factors (e.g., **Barth's equation**) or service factors in design, applied as a multiplier/correction to the basic Lewis equation result.

## Shaft-Hub Connections (brief link to gear/pulley mounting)
Gears, pulleys, and couplings are commonly mounted on shafts via **keys** (point 39) or **splines** (multiple integral teeth machined on the shaft, mating with matching internal teeth in the hub — used where higher torque capacity or the ability to slide axially under load is needed, e.g., gearbox shafts, universal joint connections).

## Most Important Facts to Remember

- **Shaft**: transmits torque (may also carry bending); **Axle**: primarily carries bending, transmits little/no torque — a frequently tested distinction.
- Combined bending + torsion in shaft design is handled via **Equivalent Torque (Te = √(M²+T²))** [max shear stress theory] or **Equivalent Bending Moment** [max principal stress theory].
- **Rigidity (angle of twist limit)**, not just strength, often governs long-shaft design — and shafts must avoid running at their **critical speed** (resonance with natural frequency).
- **Lewis Equation** treats a gear tooth as a **cantilever beam** to check **bending** failure at the tooth root; **contact/pitting failure** is a separate surface-fatigue failure mode, checked differently (Buckingham/Hertzian contact stress).
- **Keyway cutting is a stress-concentration point** on a shaft — must be accounted for in shaft sizing.

## Practice Questions

1. What is the fundamental difference between a "shaft" and an "axle"? → **A shaft primarily transmits torque; an axle primarily carries bending load with little/no torque transmission**
2. A shaft carries a bending moment M and torque T simultaneously. What formula gives the equivalent torque, per the maximum shear stress theory? → **Te = √(M² + T²)**
3. In the Lewis equation for gear tooth bending strength, what simplified structural model is a gear tooth treated as? → **A cantilever beam, fixed at the root**
4. Besides strength, what other criterion often governs the design of long transmission shafts? → **Rigidity/stiffness (permissible angle of twist)**, and avoidance of the shaft's **critical speed**
