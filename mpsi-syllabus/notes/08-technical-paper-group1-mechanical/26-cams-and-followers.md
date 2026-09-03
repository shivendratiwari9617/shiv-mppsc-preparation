# Cams & Followers (कैम व फॉलोअर)

## Cam-Follower Mechanism — Basic Definition

A **higher pair** mechanism used to convert **rotary (or oscillating) motion of the cam into a desired reciprocating (or oscillating) motion of the follower**, following a prescribed motion pattern — extensively used to operate engine valves (see point 18), in automatic machine tools, printing machinery, textile machines.

## Types of Cams

| Basis | Types |
|---|---|
| Shape | **Radial (Disc/Plate) Cam** — most common, follower moves in a plane perpendicular to cam axis; **Cylindrical Cam** — groove cut on a cylinder's surface, follower moves parallel to cam axis; **Wedge/Translation Cam** — cam itself translates instead of rotating |
| Follower motion | **Uniform velocity, Uniform acceleration/deceleration, Simple Harmonic Motion (SHM), Cycloidal motion** cams |

## Types of Followers

| Basis | Types |
|---|---|
| Shape of contact surface | **Knife-edge follower** (theoretical, high wear, rarely used practically); **Roller follower** (reduces friction/wear, most common); **Flat-faced (Mushroom) follower** (compact, used in high-speed engines, e.g., automotive valve trains); **Spherical-faced follower** |
| Motion of follower | **Reciprocating (Translating) follower** / **Oscillating (Swinging/Pivoted) follower** |
| Line of motion relative to cam | **Radial follower** (line of motion passes through cam centre) / **Offset follower** (line of motion offset from cam centre) |

## Cam Terminology

| Term | Meaning |
|---|---|
| **Base Circle** | The smallest circle drawn tangent to the cam profile, centred on the cam axis |
| **Prime Circle** | The smallest circle drawn from the cam centre, tangent to the locus traced by the follower's tracing point |
| **Pitch Curve** | The curve traced by the tracing point of the follower, as the follower moves relative to a stationary cam |
| **Cam Profile (Working Curve)** | The actual physical outline/surface of the cam, in contact with the follower |
| **Pressure Angle** | The angle between the direction of follower motion and the normal to the cam profile at the point of contact — should be kept small (typically < 30°) to avoid excessive side-thrust and follower jamming |
| **Lift (Stroke)** | The maximum displacement of the follower from its lowest to highest position |
| **Dwell** | A period during which the follower remains **stationary** while the cam continues to rotate |

## Follower Motion Types — Displacement, Velocity, Acceleration Characteristics

| Motion Type | Velocity Diagram | Acceleration Diagram | Key Characteristic |
|---|---|---|---|
| **Uniform Velocity Motion** | Constant (rectangle) | Theoretically **infinite** at start/end (sudden jerks) | Simple to construct, but impractical alone due to abrupt velocity changes at the ends |
| **Uniform Acceleration and Deceleration (UARM)** | Straight lines (triangle shape) | Constant, step-changing (rectangle, +ve then −ve) | Sudden **change** in acceleration at midpoint (still causes some jerk, but less severe than uniform velocity) |
| **Simple Harmonic Motion (SHM)** | Sinusoidal (half sine wave) | Cosine curve, smoothly varies | Follower motion mimics SHM; zero acceleration at start/end is **not** guaranteed, some residual jerk remains at the transition |
| **Cycloidal Motion** | Sine curve (smooth) | Sine curve, **starts and ends at exactly zero** | **Best/smoothest motion** — zero velocity AND zero acceleration at both the start and end of the stroke — eliminates jerk entirely at transitions, hence preferred for high-speed cam applications |

**Key ranking, in terms of smoothness (least to most jerk-free): Uniform velocity (worst) < UARM < SHM < Cycloidal (best, zero jerk at ends)** — a frequently tested conceptual ranking.

## Jerk

The **rate of change of acceleration** — high jerk causes vibration, noise, and wear in high-speed cam mechanisms; cycloidal motion is specifically favoured in high-speed applications because it minimizes jerk at the transition points (though cycloidal motion does have some jerk during the stroke, it avoids the abrupt "infinite jerk" seen in simpler profiles at the boundaries).

## Cam Applications
Engine valve operation (opening/closing per the valve timing diagram, see point 18), automatic lathes/screw machines (feed/tool motion control), textile machinery (shuttle motion), printing presses, sewing machines.

## Most Important Facts to Remember

- Cam-follower is a **higher pair** — motion transmitted through **point/line contact** with relative sliding/rolling.
- **Roller follower** reduces wear (rolling contact) compared to a **knife-edge follower** (theoretical, impractical due to rapid wear); **flat-faced follower** is compact and common in engine valve trains.
- **Pressure angle should be kept small** (< 30° typically) to avoid jamming/side-thrust.
- **Cycloidal motion gives the smoothest follower motion** — zero velocity and zero acceleration at both ends of the stroke, minimizing jerk — preferred for high-speed cams.
- **Dwell** = period of no follower motion while the cam continues rotating.
- Smoothness ranking: **Uniform velocity < UARM < SHM < Cycloidal**.

## Practice Questions

1. Which type of follower motion gives zero velocity and zero acceleration simultaneously at both the beginning and end of the stroke? → **Cycloidal motion**
2. Which type of follower has point contact and is theoretically simplest but suffers from rapid wear? → **Knife-edge follower**
3. What is meant by "dwell" in cam terminology? → **A period during which the follower remains stationary while the cam continues to rotate**
4. Why should the pressure angle in a cam mechanism be kept small? → **To avoid excessive side-thrust on the follower guide, which could cause jamming**
