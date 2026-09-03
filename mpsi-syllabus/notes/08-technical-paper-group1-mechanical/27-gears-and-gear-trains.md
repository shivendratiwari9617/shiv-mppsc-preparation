# Gears & Gear Trains (गियर व गियर ट्रेन)

## Gear — Basic Definition

A toothed wheel used to transmit motion and power between two shafts by successive engagement of teeth, ensuring a **positive (no-slip) drive** with a constant velocity ratio — unlike belt/friction drives, gears cannot slip.

## Classification of Gears — by Shaft Arrangement

| Type | Shaft Arrangement | Description |
|---|---|---|
| **Spur Gear** | Parallel shafts | Teeth cut parallel to the axis; simplest, most common type |
| **Helical Gear** | Parallel shafts (can also connect skew shafts) | Teeth cut at an angle (helix angle) to the axis — smoother, quieter engagement (gradual tooth contact) than spur, but generates an **axial thrust** |
| **Double Helical (Herringbone) Gear** | Parallel shafts | Two helical gears of opposite hand joined together — cancels out the axial thrust of a single helical gear |
| **Bevel Gear** | Intersecting shafts (typically at 90°) | Conical shape; used to change the direction of drive (e.g., differential in automobiles) |
| **Worm & Worm Wheel** | Non-intersecting, non-parallel (perpendicular skew) shafts | Worm resembles a screw; gives very **high speed reduction** in a single stage, and is typically **self-locking** (worm wheel cannot drive the worm backward) |
| **Rack and Pinion** | Converts rotary motion to linear motion | Rack = a "gear" of infinite radius (a straight toothed bar); pinion = a small circular gear meshing with it — e.g., steering mechanism |

## Gear Terminology (very high-yield definitions)

| Term | Meaning |
|---|---|
| **Pitch Circle** | Imaginary circle on which gear calculations are based — the two meshing gears' pitch circles are tangent to each other and roll without slipping |
| **Pitch Circle Diameter (PCD)** | Diameter of the pitch circle |
| **Module (m)** | m = PCD / Number of teeth (mm per tooth) — the standard metric measure of gear tooth size; **two gears must have the same module to mesh correctly** |
| **Circular Pitch (Pc)** | Distance measured along the pitch circle from a point on one tooth to the corresponding point on the next tooth = πm |
| **Diametral Pitch (Pd)** | (used in imperial/British system) = Number of teeth / PCD — inverse relationship to module |
| **Addendum** | Radial distance from the pitch circle to the **top** of the tooth |
| **Dedendum** | Radial distance from the pitch circle to the **bottom** of the tooth |
| **Pressure Angle (φ)** | Angle between the line of action (common normal at the point of contact) and the common tangent to the pitch circles — **standard values: 14.5° or 20°** (20° is now the more common modern standard) |
| **Backlash** | Small clearance between mating teeth (measured along the pitch circle) — necessary to allow for lubrication and thermal expansion, prevents jamming |
| **Face Width** | Width of the gear tooth measured along the axis |

## Law of Gearing

**"For a constant velocity ratio to be maintained, the common normal at the point of contact between two meshing teeth must always pass through the pitch point (the point where the line joining the two gear centres intersects the common tangent to the pitch circles)."**

- Tooth profiles that satisfy this law: **Involute profile** (most common, tolerant of small centre-distance errors) and **Cycloidal profile** (used in some specialized applications, e.g., clock gears — theoretically zero interference but sensitive to centre-distance accuracy).

## Gear Ratio (Velocity Ratio)

**Velocity Ratio = N_driven/N_driver = T_driver/T_driven = D_driver/D_driven**

(N = speed in rpm, T = number of teeth, D = pitch circle diameter) — **inversely proportional relationship between speed and number of teeth**, a fundamental and frequently used relation.

## Gear Trains — Classification

| Type | Description |
|---|---|
| **Simple Gear Train** | A series of gears where each shaft carries only **one gear**; overall velocity ratio depends only on the **first and last** gears (intermediate/idler gears don't affect the ratio magnitude, only the direction of rotation, and can bridge a large centre distance) |
| **Compound Gear Train** | At least one shaft carries **two (or more) gears** (keyed together, rotating at the same speed); used to achieve a **large speed reduction/increase** in limited space — overall velocity ratio = product of individual gear-pair ratios |
| **Epicyclic (Planetary) Gear Train** | Gears (planet gears) rotate about their **own axis while also revolving around** a central (sun) gear's axis — the gear axes themselves move — very compact, allows large speed reduction and even variable-ratio operation (e.g., automatic transmissions, differential) |
| **Reverted Gear Train** | A compound gear train where the input and output shafts are **coaxial** (share the same axis) — used in clocks, back gear of lathes |

## Idler Gear
An intermediate gear in a simple gear train that does **not** affect the overall speed ratio (magnitude), but reverses the direction of rotation of the output gear relative to the input, and/or bridges a physical gap between input and output shafts.

## Epicyclic Gear Train — Key Feature
Analyzed using either the **tabular method** (accounting for arm rotation) or **formula method** — the defining feature is that at least one gear axis is **not fixed** but itself revolves around another axis (the "arm" or "carrier").

## Most Important Facts to Remember

- **Module (m) must be identical for two gears to mesh** — the single most frequently tested compatibility fact.
- **Velocity Ratio = T_driver/T_driven** (inversely related to number of teeth) — speed and teeth count are inversely proportional.
- **Standard pressure angles: 14.5° and 20°** (20° now more common).
- **Worm gear drives are typically self-locking** and give very high single-stage speed reduction — a distinctive, frequently asked property.
- **Simple gear train**: idler gears change direction only, not the ratio magnitude. **Compound gear train**: multiple gears per shaft, ratio = product of stage ratios, used for large reductions in limited space.
- **Epicyclic gear train**: at least one gear's axis itself moves (revolves) — basis of automatic transmissions and differentials.
- **Helical gears** run smoother/quieter than spur gears but generate axial thrust; **double helical (herringbone)** cancels this thrust.

## Practice Questions

1. Two meshing gears must have the same value of which parameter? → **Module**
2. In a simple gear train, does adding an idler gear change the overall speed ratio (magnitude)? → **No — it only changes the direction of rotation of the output gear**
3. Which type of gear drive is characterized by being self-locking and giving very high speed reduction in a single stage? → **Worm and worm wheel**
4. A pinion with 20 teeth drives a gear with 60 teeth. If the pinion rotates at 300 rpm, find the gear's speed. → N_gear = N_pinion × T_pinion/T_gear = 300×20/60 = **100 rpm**
