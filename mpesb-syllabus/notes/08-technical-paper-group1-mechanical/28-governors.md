# Governors (गवर्नर)

## Governor — Basic Definition

A device that **automatically regulates the mean/average speed of an engine** by controlling the supply of working fluid (fuel/steam) in response to **load variations**, keeping speed within a defined range despite changes in load — distinct from a flywheel (see point 29), which handles **cyclic** speed fluctuations *within a single revolution*, not load-based variations over time.

## Governor vs Flywheel — Critical Distinction (very high-yield)

| | Governor | Flywheel |
|---|---|---|
| Controls | Speed variation due to **change in load** (over many cycles, longer time-scale) | Speed variation **within one cycle/revolution**, due to fluctuating turning moment |
| Acts by | Adjusting **fuel/steam supply** | Storing/releasing **kinetic energy** via its mass |
| Operates | Continuously, intermittently as load changes | Every cycle, automatically, passively (no control action) |

## Types of Governors

### 1. Centrifugal Governors
Work on the principle of **balancing centrifugal force of rotating balls (flyballs) against a controlling force** (gravity or spring) — as engine speed changes, the balls fly outward/inward, and this motion is mechanically linked to the fuel/steam control valve (throttle).

| Sub-type | Controlling Force | Description |
|---|---|---|
| **Watt Governor** | Gravity (weight of balls only) | Simplest form; suitable only for **low speeds** (for reasonable operating heights) |
| **Porter Governor** | Gravity + a **central dead weight** (heavy sleeve load) sliding on the spindle | Higher sensitivity than Watt governor for the same height, works at higher speeds |
| **Proell Governor** | Gravity + central load, but balls mounted on **extended arms** | Even more sensitive than Porter for a given change in speed |
| **Hartnell Governor** | **Spring force** (a helical spring provides the controlling force, replacing the dead weight) | Compact, suitable for **high-speed** engines where a Watt/Porter governor's required height becomes impractically small |

### 2. Inertia Governors
Respond to the **rate of change** of speed (angular acceleration) rather than the actual speed value itself — react faster than centrifugal governors, but are mechanically complex and less commonly used compared to centrifugal types.

## Key Governor Performance Characteristics

| Term | Definition |
|---|---|
| **Height of Governor (h)** | Vertical distance from the centre of the ball to the point of intersection of the arms on the spindle axis |
| **Sensitiveness** | Ratio of the range of speed to the mean speed — a **sensitive** governor produces a large sleeve displacement for a small change in speed |
| **Stability** | A stable governor is one for which there is only **one radius of rotation (or one sleeve position) for each speed**, within its working range |
| **Isochronism** | A theoretical (extreme) case where the governor is **infinitely sensitive** — has the same equilibrium speed for all radii of rotation (all sleeve positions) — an isochronous governor is actually **unstable** in practice, since it cannot settle at a definite position |
| **Hunting** | An instability condition where the governor sleeve/speed continuously **oscillates back and forth** around the mean position, rather than settling — undesirable, caused by excessive sensitivity |
| **Effort** | The mean force exerted by the governor at the sleeve, for a **given** percentage change in speed — a measure of the governor's "power" to actually move the control mechanism |
| **Power** | Work done by the governor at the sleeve for a given percentage change in speed = Effort × sleeve displacement |

## Watt Governor — Height Formula

For a simple Watt governor (balls directly on the spindle, no offset):

**h = 895 / N²** (h in metres, N in rpm — using g = 9.81 m/s², this is a commonly memorized approximate formula)

**Key consequence: at high speeds, the required height h becomes impractically small (a few millimetres), making Watt governors unsuitable for high-speed engines** — this is exactly why Porter/Proell (added weight) and ultimately Hartnell (spring-loaded) governors were developed, to keep governor size practical at higher operating speeds.

## Sensitiveness vs Stability — Trade-off

**A more sensitive governor tends to be less stable, and vice versa** — excessive sensitivity can lead to hunting; the governor design must balance adequate sensitivity (responsiveness to load change) against stability (settling to a definite equilibrium position) — a key conceptual trade-off frequently tested.

## Most Important Facts to Remember

- **Governor** controls speed variation due to **load changes** (over time); **Flywheel** controls speed variation **within one cycle** (fluctuating turning moment) — the single most important distinction in this topic.
- **Watt Governor**: gravity only, suitable for **low speeds** only (height formula h = 895/N² becomes impractically small at high N).
- **Porter/Proell Governors**: gravity + dead weight (added load on sleeve) — allow higher speeds than Watt for practical heights; Proell is more sensitive than Porter.
- **Hartnell Governor**: uses a **spring**, not gravity — the standard choice for **high-speed** engines.
- **Isochronous governor**: theoretically infinitely sensitive, but actually **unstable** (same speed at all radii — can't settle).
- **Hunting**: continuous oscillation of the governor sleeve — an undesirable instability from excessive sensitivity.

## Practice Questions

1. What is the fundamental difference between the function of a governor and a flywheel? → **Governor controls speed variation due to load change (over time); flywheel controls speed variation within one cycle**
2. Which type of governor uses a spring instead of gravity as the controlling force, making it suitable for high-speed engines? → **Hartnell governor**
3. What is meant by an "isochronous" governor, and why is it undesirable in practice? → **A governor with the same equilibrium speed at all radii (infinitely sensitive) — undesirable because it is inherently unstable and cannot settle at a definite position**
4. What term describes continuous oscillation of a governor's sleeve due to excessive sensitivity? → **Hunting**
