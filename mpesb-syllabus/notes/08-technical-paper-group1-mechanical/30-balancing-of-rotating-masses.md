# Balancing of Rotating Masses (घूर्णन भागों का संतुलन)

## Why Balancing Is Needed

An unbalanced rotating mass produces a **centrifugal force (Fc = mrω²)** that varies in direction as the mass rotates — if unopposed, this creates vibration, noise, wear, and can cause structural/bearing damage, especially at high speeds (since Fc ∝ ω², the effect grows rapidly with speed).

## Balancing of a Single Rotating Mass

Achieved by placing a **balancing mass** in the **same plane**, at 180° to the unbalanced mass, such that:

**m·r = mb·rb**

(m, r = mass and radius of the unbalanced mass; mb, rb = mass and radius of the balancing mass) — this ensures the two centrifugal forces are equal in magnitude and opposite in direction, cancelling out.

## Balancing of Several Masses Rotating in the Same Plane

For multiple unbalanced masses in one plane, resultant unbalanced force is found by vector addition of each mass's **m·r** value (treated as a vector, in the direction of that mass's radius) — resolved into horizontal/vertical components:

**ΣmrcosΘ = 0** and **ΣmrsinΘ = 0** (conditions for complete balance)

If not naturally zero, a single balancing mass is added such that its m·r vector is equal and opposite to the resultant of all the given masses' m·r vectors.

## Balancing of Several Masses Rotating in Different Planes

This is more complex because unbalanced masses in different planes create not just a net **force** imbalance but also a net **couple** imbalance (since forces act at different axial locations, they create moments about any reference plane). Complete balance requires **two conditions simultaneously**:

1. **ΣmrcosΘ = 0, ΣmrsinΘ = 0** (force balance — resultant centrifugal force is zero)
2. **ΣmrlcosΘ = 0, ΣmrlsinΘ = 0** (couple balance — resultant unbalanced couple is zero, where l = axial distance of each mass's plane from a chosen reference plane)

**Key fact: balancing masses in different planes generally requires balancing masses in at least TWO planes** (not one) to satisfy both the force and couple conditions simultaneously.

## Static vs Dynamic Balancing

| | Static Balancing | Dynamic Balancing |
|---|---|---|
| Condition | Resultant centrifugal **force** = 0 | Resultant centrifugal **force** = 0 **AND** resultant **couple** = 0 |
| Sufficient when | All masses in a **single plane** | Masses in **multiple/different planes** |
| Also called | Balancing in one plane | Balancing in two (or more) planes |

**A body can be statically balanced but dynamically unbalanced** (if masses lie in different planes and only the force condition is met, without the couple condition) — this is a critical, frequently tested distinction. A dynamically balanced system, however, is **always** also statically balanced (dynamic balance is the stricter, complete condition).

## Balancing of Reciprocating Masses (brief overview, relates to point 25's slider-crank kinematics)

Reciprocating masses (piston, part of connecting rod) generate **inertia forces** that vary with crank angle (per the acceleration expressions in point 25) — unlike a purely rotating mass, this inertia force cannot be **completely** balanced by a simple rotating balancing mass, because the reciprocating inertia force has both a **primary component** (frequency = engine rpm) and a **secondary component** (frequency = 2× engine rpm, arising from the finite connecting-rod-length correction term).

- Rotating balancing masses can fully balance only the **primary** component **along the line of stroke**, but in doing so introduce a new unbalanced force **perpendicular** to the line of stroke — so, in practice, only a **fraction** (commonly two-thirds, by convention) of the reciprocating mass is balanced by the rotating counterweight, as a compromise between along-stroke and cross-stroke unbalance.
- **Secondary balancing** (addressing the 2×rpm component) requires more complex means (e.g., secondary balancer shafts, or is inherently better/worse balanced depending on the number/arrangement of cylinders — an in-line engine's cylinder count and firing order strongly affect how much of this the basic layout self-cancels).

## Applications
Automobile engine crankshafts (counterweights), turbine rotors, fans, pump impellers, any high-speed rotating machinery — dynamic balancing of rotors (e.g., car wheels, turbine shafts) is a standard workshop/maintenance procedure.

## Most Important Facts to Remember

- Balancing condition for masses in the **same plane**: **Σmr = 0** (vector sum, both components) — **force balance only**.
- Balancing masses in **different planes** requires **both** force balance (Σmr = 0) **and** couple balance (Σmrl = 0) — needs balancing masses in **at least two planes**.
- **Static balance** = force balance only; **Dynamic balance** = force AND couple balance — a system can be statically balanced yet dynamically unbalanced, but not the reverse.
- Reciprocating inertia force has **primary** (1× rpm) and **secondary** (2× rpm) components; rotating counterweights can only address the primary component, and only partially/directionally.
- Centrifugal force Fc = mrω² — increases with the **square** of rotational speed, making balancing increasingly critical at high speeds.

## Practice Questions

1. What is the difference between static balancing and dynamic balancing? → **Static balancing requires only the resultant centrifugal force to be zero; dynamic balancing additionally requires the resultant couple to be zero — needed when masses lie in different planes**
2. Can a rotating system be statically balanced but dynamically unbalanced? → **Yes, if the masses lie in different planes and only the force condition (not the couple condition) is satisfied**
3. How many planes of balancing masses are generally required to fully balance a system of masses rotating in several different planes? → **At least two planes**
4. Why does centrifugal force become a much more serious problem at high rotational speeds? → **Because Fc = mrω², so the unbalanced force grows with the square of the angular velocity**
