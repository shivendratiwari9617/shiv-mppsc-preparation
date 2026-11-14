# Momentum & Impact — Linear & Angular (संवेग व आघात — रैखिक व कोणीय)

## Linear Momentum

**Momentum (p) = Mass (m) × Velocity (v)**
- SI Unit: **kg·m/s**
- Vector quantity — direction same as velocity.

### Newton's Second Law (in terms of momentum)
Rate of change of momentum is proportional to the applied force and takes place in the direction of the force:

**F = d(mv)/dt = ma** (for constant mass)

### Law of Conservation of Linear Momentum
In the absence of external forces, the total momentum of a system of bodies remains constant.

**m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂**

(u = initial velocity, v = final velocity) — the foundational equation for all collision problems.

## Impulse

**Impulse (J) = Force × time = F × Δt = Change in momentum = m(v − u)**
- SI Unit: **N·s** (equivalent to kg·m/s)
- Impulse is used when force acts for a very short duration (impact, collision).

## Impact (Collision) — Types

| Type | Description |
|---|---|
| **Direct Impact** | Line of impact coincides with the line joining the centres of the two colliding bodies, and both velocities are along this line |
| **Oblique Impact** | Velocities are inclined to the line joining centres |
| **Central Impact** | Line of impact passes through the centre of mass of both bodies |
| **Eccentric Impact** | Line of impact does not pass through the centre of mass |

## Coefficient of Restitution (e)

**e = (Relative velocity of separation) / (Relative velocity of approach) = (v₂ − v₁) / (u₁ − u₂)**

- **0 ≤ e ≤ 1**
- **e = 1** → **Perfectly elastic collision** (kinetic energy conserved, no energy loss)
- **e = 0** → **Perfectly plastic/inelastic collision** (bodies stick together after collision, move with common velocity, maximum energy loss)
- **0 < e < 1** → Partially elastic (real-world) collision — most practical collisions fall here.

## Elastic vs Inelastic Collision — Key Comparison

| | Elastic Collision | Inelastic Collision |
|---|---|---|
| Momentum | Conserved | Conserved |
| Kinetic Energy | Conserved | **Not** conserved (some converts to heat/sound/deformation) |
| Coefficient of restitution | e = 1 | e < 1 (e = 0 for perfectly plastic) |

## Angular Momentum

**Angular Momentum (L) = Moment of Inertia (I) × Angular velocity (ω) = Iω**
- SI unit: **kg·m²/s**
- Rotational analogue of linear momentum (mass → I, velocity → ω).

### Law of Conservation of Angular Momentum
In the absence of external torque, angular momentum of a system remains constant:

**I₁ω₁ = I₂ω₂**

(Classic example: a spinning ice-skater/diver pulling limbs inward — I decreases, so ω increases to keep Iω constant.)

## Torque-Angular Momentum Relation
**Torque (T) = dL/dt = I·α** (α = angular acceleration), the rotational analogue of F = ma.

## Angular Impulse
**Angular Impulse = Torque × time = Change in angular momentum**

## Most Important Facts to Remember

- Momentum = mv; Impulse = Ft = change in momentum — these two are directly linked (impulse-momentum theorem).
- Momentum is **always conserved** in a collision (no external force); Kinetic Energy is conserved **only in elastic collisions**.
- Coefficient of restitution: e=1 (perfectly elastic), e=0 (perfectly plastic/inelastic, bodies coalesce and move together).
- Law of conservation of angular momentum: I₁ω₁ = I₂ω₂ — classic ice-skater example is a favorite conceptual question.
- Direct impact: velocities along the line joining centres; Oblique impact: velocities inclined to it.

## Practice Questions

1. A 2 kg ball moving at 5 m/s collides head-on with a stationary 3 kg ball and they stick together. Find their common velocity.
   → Conservation of momentum: 2×5 + 3×0 = (2+3)v → v = 10/5 = **2 m/s**; e = 0 here (perfectly plastic).
2. If e = 1 for a collision, what type of collision is it? → **Perfectly elastic**
3. What physical quantity remains constant when a spinning skater pulls their arms in (ignoring friction)? → **Angular momentum (Iω)**
