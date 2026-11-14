# Mechanical Vibrations (यांत्रिक कंपन)

## Vibration — Basic Definition

The **to-and-fro (oscillatory) motion** of a body/system about its equilibrium (mean) position — occurs in nearly all machinery to some degree, and is an important design consideration (excessive vibration causes fatigue failure, noise, and loss of performance).

## Basic Vibration Terminology

| Term | Meaning |
|---|---|
| **Amplitude** | Maximum displacement of a vibrating body from its mean/equilibrium position |
| **Time Period (T)** | Time taken to complete **one full cycle** of vibration |
| **Frequency (f)** | Number of cycles completed per unit time, f = 1/T, unit: **Hertz (Hz)** |
| **Natural Frequency (fn or ωn)** | The frequency at which a system vibrates **on its own**, when disturbed and left free, with no external forcing and no damping |
| **Resonance** | The condition when the **frequency of an externally applied (forcing) vibration matches the natural frequency** of the system — causes a dramatic (theoretically unbounded, in the undamped case) increase in amplitude — one of the most important and dangerous phenomena in vibration engineering |
| **Degrees of Freedom (in vibration context)** | The minimum number of independent coordinates needed to completely describe the system's motion (e.g., a single mass on a spring, moving only vertically, is a **single-degree-of-freedom (SDOF)** system) |

## Classification of Vibrations

### By presence of external force
| Type | Description |
|---|---|
| **Free Vibration** | System vibrates under its own elastic/restoring forces after an initial disturbance, with **no continuing external force** — vibrates at its natural frequency |
| **Forced Vibration** | System vibrates under a **continuing external periodic force** — vibrates at the frequency of the **forcing function**, not necessarily its natural frequency (except at resonance, when they coincide) |

### By presence of resistance (energy dissipation)
| Type | Description |
|---|---|
| **Undamped Vibration** | No resistive/frictional force opposes the motion — amplitude theoretically remains constant forever (an idealization) |
| **Damped Vibration** | A resistive force (friction, viscous drag) opposes motion, causing amplitude to **decay over time** — represents real-world vibration behaviour |

### By nature of motion
| Type | Description |
|---|---|
| **Linear (Longitudinal/Transverse) Vibration** | Vibrating body moves in a straight line |
| **Torsional Vibration** | Vibrating body oscillates angularly, twisting about its axis (e.g., a shaft with a flywheel/rotor, twisting back and forth) |

## Simple Harmonic Motion (SHM) — Foundation of Vibration Analysis

Most basic (undamped, free) vibration analysis models the motion as SHM, where **acceleration is directly proportional to displacement from the mean position, and always directed toward it**:

**a = −ω²x**

### Natural Frequency of a Simple Spring-Mass System

**ωn = √(k/m)** (rad/s), or **fn = (1/2π)√(k/m)** (Hz)

where k = stiffness of the spring/restoring element (N/m), m = mass (kg) — the fundamental formula for SDOF free vibration.

## Damping — Types

| Type | Description |
|---|---|
| **Viscous Damping** | Damping force proportional to **velocity** (Fd = c·ẋ, c = damping coefficient) — the most common and mathematically simplest model, used in dashpots/shock absorbers |
| **Coulomb (Dry Friction) Damping** | Damping force is **constant** in magnitude, opposing motion (like sliding friction) |
| **Structural (Hysteretic) Damping** | Damping arising from internal friction within the material itself, during cyclic stress |

### Damping Ratio (ζ) & System Classification
| Condition | Behaviour |
|---|---|
| **ζ = 0 (Undamped)** | Oscillates forever at natural frequency, constant amplitude |
| **0 < ζ < 1 (Underdamped)** | Oscillates with **decreasing** amplitude, eventually settling to rest |
| **ζ = 1 (Critically Damped)** | Returns to equilibrium in the **shortest possible time, without oscillating** — the ideal design target for many damped systems (e.g., automobile suspension, door closers) |
| **ζ > 1 (Overdamped)** | Returns to equilibrium **without oscillating**, but more slowly than the critically damped case |

## Resonance — Critical Engineering Significance

At resonance (forcing frequency = natural frequency), amplitude grows very large (limited only by damping, if present); in the undamped case, amplitude theoretically grows without bound. Resonance is responsible for many notable engineering failures:

- **Excessive shaft vibration at critical speed** (a rotating shaft's natural frequency coinciding with its rotational speed) — can cause catastrophic shaft failure; a shaft is designed/operated to avoid running continuously at its **critical speed**.
- **Vortex-shedding-induced resonance** — famously implicated in bridge/structure failures when wind-induced periodic forces coincide with a structure's natural frequency (classic textbook example: Tacoma Narrows Bridge collapse, 1940).
- **Machine foundation design**: foundations must be designed so their natural frequency is well away from the operating frequency of the machine mounted on them, to avoid resonance.

## Vibration Isolation

Using resilient mounts (springs, rubber pads) between a vibrating machine and its foundation to **reduce the transmission of vibration** to the surroundings — effectiveness measured by **Transmissibility (the ratio of transmitted force/motion to the applied force/motion)**; isolation is effective only when the **forcing frequency is significantly higher (typically √2 times) than the natural frequency** of the isolation system — operating below this ratio can actually amplify (not reduce) transmitted vibration.

## Most Important Facts to Remember

- **Natural frequency of a spring-mass system: ωn = √(k/m)** — the foundational SDOF vibration formula.
- **Resonance** occurs when forcing frequency = natural frequency, causing dangerously large amplitude — a critical concept tested very frequently, with real engineering-failure examples (shaft critical speed, Tacoma Narrows Bridge).
- **Free vibration**: no continuing external force, occurs at natural frequency. **Forced vibration**: continuing external force, occurs at the forcing frequency.
- **Damping ratio ζ**: ζ=0 undamped (oscillates forever); 0<ζ<1 underdamped (decaying oscillation); ζ=1 critically damped (fastest return, no oscillation — ideal for many practical designs); ζ>1 overdamped (slow return, no oscillation).
- **Torsional vibration** = angular/twisting oscillation (e.g., shaft-flywheel system); **Linear vibration** = straight-line oscillation.

## Practice Questions

1. What is the formula for the natural frequency (in rad/s) of a simple spring-mass system? → **ωn = √(k/m)**
2. What condition is called "resonance," and why is it engineering-critical? → **When the forcing frequency equals the natural frequency of the system — causes a large, potentially destructive increase in vibration amplitude**
3. Which damping condition allows a system to return to equilibrium in the shortest time without oscillating? → **Critical damping (ζ = 1)**
4. What type of vibration involves a shaft twisting back and forth about its own axis? → **Torsional vibration**
