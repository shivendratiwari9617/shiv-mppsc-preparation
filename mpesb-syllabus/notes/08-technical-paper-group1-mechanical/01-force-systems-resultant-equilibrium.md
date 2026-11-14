# Force Systems, Resultant & Equilibrium (बल तंत्र, परिणामी बल एवं संतुलन)

Part of **Engineering Mechanics (Statics)** — the foundational topic for the entire Mechanical Engineering paper. Relevant for MPESB SI-Ordnance (Paper III) and equally core to RRB JE/ALP/Technician mechanical papers.

## Force — Basic Definitions

- **Force**: An agent that changes or tends to change the state of rest or motion of a body. SI unit: **Newton (N)** = kg·m/s².
- **Characteristics of a force**: Magnitude, direction, point of application, line of action.
- **Scalar vs Vector**: Force is a **vector** quantity (has both magnitude and direction), unlike mass/time/speed which are scalars.

## Types of Force Systems

| System | Description |
|---|---|
| **Coplanar** | All forces lie in the same plane |
| **Non-coplanar / Spatial** | Forces act in 3D space |
| **Collinear** | Forces act along the same line of action |
| **Concurrent** | Lines of action of all forces meet at one point |
| **Parallel** | Lines of action are parallel to each other |
| **Non-concurrent, non-parallel (General)** | Neither meet at a point nor are parallel |
| **Like parallel forces** | Parallel forces acting in the same direction |
| **Unlike parallel forces** | Parallel forces acting in opposite directions |

## Resultant Force (परिणामी बल)

The single force that produces the same effect as a system of several forces acting together.

### Parallelogram Law of Forces
If two forces P and Q act at a point, inclined at angle θ, the resultant R:

**R = √(P² + Q² + 2PQ cos θ)**

Direction (angle α from P): **tan α = Q sin θ / (P + Q cos θ)**

### Special Cases
| Angle θ | Resultant R |
|---|---|
| 0° (same direction) | P + Q (maximum) |
| 180° (opposite direction) | P − Q (minimum) |
| 90° (perpendicular) | √(P² + Q²) |

### Triangle Law of Forces
If two forces acting at a point are represented in magnitude and direction by two sides of a triangle taken in order, their resultant is represented by the third side taken in the opposite order.

### Polygon Law of Forces
Extension of triangle law to more than two concurrent forces — if forces are represented in order by sides of a polygon, the resultant is the closing side taken in the opposite order.

### Resolution of Forces (Components)
Any force F can be resolved into two mutually perpendicular components:
- **Fx = F cos θ** (horizontal component)
- **Fy = F sin θ** (vertical component)

### Resultant of Coplanar Concurrent Forces (analytical method)
R = √[(ΣFx)² + (ΣFy)²], direction: **tan θ = ΣFy / ΣFx**

## Moment of a Force (बल आघूर्ण)

**Moment (M) = Force (F) × Perpendicular distance (d) from the point/axis to the line of action of force.**
- SI unit: **N·m**
- Sign convention: Anticlockwise moment is generally taken as **positive**, clockwise as **negative** (convention may vary by textbook, but must stay consistent within a problem).

### Varignon's Theorem (Principle of Moments)
The algebraic sum of moments of a system of coplanar forces about a point is equal to the moment of their resultant about the same point.

## Couple (बल-युग्म)

Two equal, unlike (opposite direction), parallel, non-collinear forces form a **couple**.
- **Moment of a couple = Force × perpendicular distance between the two forces** — independent of the point about which moment is taken.
- A couple can be balanced only by another couple, not by a single force.

## Equilibrium (संतुलन)

A body is in equilibrium when the resultant of all forces acting on it is zero.

### Conditions of Equilibrium

**For coplanar concurrent forces (2 conditions):**
- ΣFx = 0
- ΣFy = 0

**For coplanar non-concurrent forces (3 conditions):**
- ΣFx = 0
- ΣFy = 0
- ΣM = 0 (sum of moments about any point = 0)

### Lami's Theorem
When **three coplanar, concurrent, and coplanar forces** keep a body in equilibrium, each force is proportional to the sine of the angle between the other two forces:

**P/sin α = Q/sin β = R/sin γ**

(where α, β, γ are the angles opposite to forces P, Q, R respectively)

### Free Body Diagram (FBD)
A diagram showing a body in isolation with all external forces (including reactions) acting on it — the essential first step for solving any equilibrium problem.

### Types of Supports & Reactions

| Support type | Reaction |
|---|---|
| Roller support | One reaction, perpendicular to the rolling surface |
| Hinged/Pin support | Two reactions (horizontal + vertical), no moment resistance |
| Fixed support | Two force reactions + one moment reaction |

## Most Important Facts to Remember

- Resultant of two equal forces P at 120° = P (a special case worth memorizing: R = P when θ = 120° and both forces equal).
- Moment = Force × perpendicular distance — always the *perpendicular* distance, not the direct distance.
- Lami's theorem applies **only** to three concurrent, coplanar forces in equilibrium.
- A single force cannot balance a couple — only an equal and opposite couple can.
- Equilibrium conditions: 2 equations for concurrent force systems, 3 for general coplanar systems (2 force + 1 moment).

## Practice Questions

1. Two forces of 10 N and 15 N act at 60° to each other. Find the resultant.
   → R = √(10² + 15² + 2×10×15×cos60°) = √(100+225+150) = √475 ≈ **21.79 N**
2. What is the moment of a couple formed by two 20 N forces separated by 0.5 m? → **10 N·m**
3. State Lami's theorem's applicability condition. → **Three coplanar, concurrent forces in equilibrium**
