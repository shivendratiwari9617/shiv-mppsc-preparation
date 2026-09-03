# Kinematics of Plane Mechanisms — Slider-Crank Mechanism (समतल यंत्रों का विस्थापन, वेग व त्वरण विश्लेषण)

## Basic Terminology (Theory of Machines)

| Term | Definition |
|---|---|
| **Link (Element)** | A rigid (or resistant) body having relative motion with respect to another body — the basic building block of a mechanism |
| **Kinematic Pair** | A joint between two links that permits relative motion |
| **Kinematic Chain** | A series of links connected by kinematic pairs, such that relative motion between links is possible |
| **Mechanism** | A kinematic chain in which **one link is fixed** — used to transmit or transform motion |
| **Machine** | A mechanism (or group of mechanisms) that transmits/transforms motion and also does useful **work**, transmitting force |

## Types of Kinematic Pairs

| Basis | Types |
|---|---|
| Nature of relative motion | **Lower pair** (surface contact, e.g., pin joint, sliding pair) / **Higher pair** (point or line contact, e.g., cam-follower, gear teeth, ball bearing) |
| Nature of mechanical constraint | **Closed pair** (elements held together by geometry) / **Open pair** (held together by external force, e.g., spring) |
| Type of relative motion | **Sliding pair, Turning (Revolute) pair, Rolling pair, Screw pair, Spherical pair** |

## Degrees of Freedom (DOF) — Grübler's Equation

For a planar mechanism:

**F = 3(n − 1) − 2j₁ − j₂**

where n = number of links, j₁ = number of lower pairs (1 DOF pairs), j₂ = number of higher pairs (2 DOF pairs).

- **F = 1**: constrained mechanism (definite, single-DOF motion — most useful mechanisms, like the slider-crank, are designed this way).
- **F = 0**: a structure (locked, no motion possible).
- **F > 1**: unconstrained (multiple independent motions possible).

## Four-Bar Chain — Foundation Mechanism

The simplest closed kinematic chain with 4 links (1 fixed) and 4 turning pairs — the "parent" mechanism from which many practical mechanisms (including the slider-crank) are derived by fixing different links or replacing a turning pair with a sliding pair.

### Grashof's Law
A four-bar chain has at least one fully-rotating link if: **sum of shortest and longest link lengths ≤ sum of the other two link lengths.**

## Slider-Crank Mechanism — the Key Focus of This Point

### Description
Converts **rotary motion into reciprocating motion** (or vice versa) — the fundamental mechanism inside every IC engine (crank-connecting rod-piston) and reciprocating pump/compressor.

### Components
- **Crank (r)**: rotates about a fixed centre (connected to the crankshaft).
- **Connecting Rod (l)**: connects crank pin to the slider (piston).
- **Slider (Piston)**: reciprocates in a straight line.
- **n = l/r** (ratio of connecting rod length to crank radius) — a key design parameter, typically **n = 4 to 5** in real IC engines.

### Displacement of Piston (from TDC), as a function of crank angle θ

**x = r(1 − cos θ) + (r²/2l) sin²θ** (approximate form, using a binomial expansion for l >> r)

### Velocity of Piston (approximate, high-yield form)

**V = ωr [sin θ + (sin 2θ)/(2n)]**

where ω = angular velocity of crank, n = l/r.

**Key fact: velocity is maximum NOT exactly at θ = 90° (mid-stroke), but slightly before it**, due to the obliquity of the connecting rod — a classic conceptual/numerical exam point (for an infinitely long connecting rod, i.e., n → ∞, maximum velocity would occur exactly at θ=90°).

### Acceleration of Piston (approximate, high-yield form)

**a = ω²r [cos θ + (cos 2θ)/n]**

**Key fact: maximum acceleration occurs at the dead centres (θ = 0° and θ = 180°)** — at TDC, acceleration is maximum in magnitude (this is why inertia forces are largest at the dead centres, critical to engine balancing, see point 30).

## Klein's Construction & Analytical vs Graphical Methods

- **Analytical Method**: uses the displacement/velocity/acceleration equations above directly (or their exact trigonometric forms without approximation).
- **Graphical/Relative Velocity Method**: velocity/acceleration diagrams are drawn to scale using vector relationships between links — commonly used in exam-style problems for other (non-slider-crank) mechanisms too, applying **relative velocity/acceleration equations**: V_B = V_A + V_BA (vector sum).

## Instantaneous Centre of Rotation (I-Centre) Method

An alternative velocity-analysis technique: at any instant, a rigid body in plane motion can be considered to be rotating about a single point (the **instantaneous centre**), which may not be a fixed physical pivot — velocity of any point = (angular velocity) × (distance from I-centre). Number of instantaneous centres in a mechanism with n links = **n(n−1)/2** (Kennedy's theorem governs how they're located for indirectly-connected links).

## Most Important Facts to Remember

- **Slider-crank mechanism**: converts rotary ↔ reciprocating motion; **n = l/r**, typically 4–5 in real engines.
- **Maximum piston acceleration occurs at the dead centres** (TDC/BDC, θ = 0°/180°) — critical for understanding inertia forces in engine balancing.
- **Maximum piston velocity occurs slightly before θ = 90°** (not exactly at mid-stroke), due to connecting-rod obliquity.
- **Grübler's equation: F = 3(n−1) − 2j₁ − j₂**; a useful (constrained) mechanism has **F = 1**.
- **Lower pair** = surface contact (pin, slider); **Higher pair** = point/line contact (cam-follower, gear teeth).
- Number of instantaneous centres in an n-link mechanism = **n(n−1)/2**.

## Practice Questions

1. In a slider-crank mechanism, at what crank angle(s) does the piston experience maximum acceleration? → **At the dead centres, θ = 0° and θ = 180°**
2. What does the ratio "n" typically represent in slider-crank kinematics, and what is its typical value in IC engines? → **n = l/r (connecting rod length / crank radius), typically 4 to 5**
3. For a mechanism with 4 links, all connected by turning (lower) pairs, and one link fixed, find the degrees of freedom using Grübler's equation. → F = 3(4−1) − 2(4) − 0 = 9 − 8 = **1 (a constrained mechanism)**
4. How many instantaneous centres exist for a mechanism with 5 links? → n(n−1)/2 = 5×4/2 = **10**
