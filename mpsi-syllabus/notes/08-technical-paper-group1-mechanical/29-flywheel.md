# Flywheel (फ्लाईव्हील)

## Flywheel — Basic Definition

A heavy rotating disc/wheel mounted on the crankshaft, which **stores kinetic energy during the power stroke** (when torque/energy input exceeds the mean/demand) and **releases it during other strokes** (when torque input is less than demand) — thereby smoothing out speed fluctuations that occur **within one cycle** of engine operation, due to the fluctuating turning moment on the crankshaft.

(Contrast with the **Governor**, point 28, which handles speed variation due to load changes over a longer time-scale — a frequently paired distinction question.)

## Kinetic Energy of a Flywheel

**K.E. = ½ I ω²**

where I = mass moment of inertia of the flywheel about its axis of rotation, ω = angular velocity.

## Fluctuation of Energy & Fluctuation of Speed

- **Maximum Fluctuation of Energy (ΔE)**: the difference between the maximum and minimum values of energy stored in the flywheel during one cycle — found from the **turning moment diagram** (area between the turning-moment curve and the mean-torque line, at the points of maximum positive and negative energy deviation).
- **Coefficient of Fluctuation of Energy (Ce)**: Ce = ΔE / Work done per cycle.

### Coefficient of Fluctuation of Speed (Cs)

**Cs = (N_max − N_min) / N_mean = (ω_max − ω_min) / ω_mean**

(N_mean or ω_mean is usually taken as the arithmetic mean of max and min values) — a **dimensionless** ratio, indicates how "smoothly" the flywheel maintains speed.

## Relationship Between ΔE and Flywheel Mass/Size

**ΔE = I·ω_mean²·Cs** (derived by relating the K.E. change to the coefficient of fluctuation of speed)

**Key design consequence**: For a required smoothness (a target Cs), a **larger moment of inertia I** (i.e., a heavier flywheel and/or one with mass concentrated further from the axis, since I = mr² for a thin rim) reduces the fluctuation of speed — this is the central design relationship in flywheel sizing.

## Coefficient of Steadiness (m)

**m = 1/Cs** — the reciprocal of the coefficient of fluctuation of speed; a **higher** coefficient of steadiness means **smoother, more uniform** running.

## Flywheel Construction

- Most of the mass is concentrated in the **rim** (outer periphery), connected to the hub via **spokes/arms** — because moment of inertia (I = mr²) is maximized for a given mass when that mass is placed as far as possible from the axis of rotation, giving maximum energy storage for minimum added weight.
- Rim material: typically **cast iron** or **cast steel**, must be checked for adequate strength against the **centrifugal (hoop) stress** generated at operating speed (a critical failure mode — a flywheel spinning too fast can burst due to excessive hoop stress in the rim, analogous to the hoop stress concept in thin cylinders, point 9).

## Turning Moment Diagram

A plot of **crank-effort (turning moment) vs. crank angle** over one complete cycle — for a reciprocating engine, this curve fluctuates significantly (rises sharply during the power stroke, dips or goes negative during compression/exhaust in a 4-stroke engine) rather than being constant, which is exactly *why* a flywheel is needed to smooth the resulting speed variation.

- The **mean torque line** on this diagram represents the constant-load demand torque; areas between the actual curve and this line (above = energy surplus stored, below = energy deficit released) determine the flywheel's required energy-storage capacity.
- **Multi-cylinder engines** (with power strokes overlapping/staggered across cylinders) have a much **smoother turning moment diagram**, requiring a **smaller flywheel** than an equivalent single-cylinder engine — a frequently tested practical consequence.

## Applications
IC engines (crankshaft), punching/shearing presses (where a large but brief energy demand is met by a slowly-charged flywheel), rolling mills, reciprocating compressors.

## Flywheel vs Governor — Quick Comparison (recap, extremely high-yield)

| | Flywheel | Governor |
|---|---|---|
| Speed variation controlled | Within one cycle (cyclic, short-term) | Due to load changes (over many cycles, longer-term) |
| Mechanism | Passive — stores/releases kinetic energy automatically | Active — mechanically adjusts fuel/steam supply |
| Presence in engine | Always present | Present only where automatic speed regulation for load changes is required |

## Most Important Facts to Remember

- Flywheel handles **cyclic (within-one-revolution)** speed fluctuation; Governor handles **load-based (long-term)** speed variation — the core distinguishing fact.
- **K.E. = ½Iω²**; a flywheel stores energy during high-torque phases and releases it during low-torque phases of the cycle.
- **Cs (coefficient of fluctuation of speed) = (ωmax − ωmin)/ωmean**; **Coefficient of steadiness = 1/Cs**.
- **ΔE = I·ωmean²·Cs** — larger I (heavier, larger-radius rim) reduces speed fluctuation for a given energy fluctuation.
- Flywheel mass is concentrated in the **rim** to maximize I for a given mass (I = mr² is greatest when mass is far from the axis).
- **Multi-cylinder engines need smaller flywheels** than single-cylinder engines of equivalent output, due to the overlapping/smoother turning-moment diagram.

## Practice Questions

1. What fundamental physical quantity does a flywheel store and release to smooth out speed fluctuations? → **Kinetic energy (K.E. = ½Iω²)**
2. Why is most of a flywheel's mass concentrated in the rim rather than near the hub? → **Because moment of inertia (I = mr²) is maximized for a given mass when that mass is placed farthest from the axis of rotation**
3. Does a multi-cylinder engine typically require a larger or smaller flywheel than an equivalent single-cylinder engine? → **Smaller** (due to overlapping power strokes giving a smoother turning-moment diagram)
4. Define the coefficient of fluctuation of speed (Cs). → **Cs = (ωmax − ωmin)/ωmean (or the equivalent speed-based ratio)**
