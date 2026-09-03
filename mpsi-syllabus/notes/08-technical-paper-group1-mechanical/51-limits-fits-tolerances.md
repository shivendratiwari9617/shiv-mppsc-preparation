# Limits, Fits & Tolerances (सीमा, फिट व सहनशीलता)

## Why Limits & Tolerances Are Needed

No manufacturing process can produce a dimension at the **exact theoretical (nominal) size** every single time — some variation is inevitable. Rather than requiring impossible perfection, engineering design specifies an **acceptable range** within which the actual manufactured dimension may fall, while still ensuring the part functions correctly (especially when it must fit/mate with another part).

## Basic Terminology

| Term | Meaning |
|---|---|
| **Nominal Size** | The size used for general identification/reference (e.g., "a 20 mm shaft") — the round-number target dimension |
| **Basic Size** | The size from which the limits of size are derived, per the applicable standard/calculation |
| **Actual Size** | The size actually obtained/measured after manufacturing |
| **Limits of Size** | The two extreme permissible sizes — **Upper (Maximum) Limit** and **Lower (Minimum) Limit** — between which the actual size must lie |
| **Tolerance** | The **total permissible variation** in a dimension = Upper Limit − Lower Limit (always a positive value, regardless of whether the part is oversize or undersize relative to nominal) |
| **Deviation** | The algebraic difference between a size (actual, upper limit, or lower limit) and the corresponding basic size — can be **positive or negative** |
| **Allowance** | The **intentional, designed-in difference** between the limits of two mating parts (e.g., shaft and hole) — determines whether the fit is designed to be clearance or interference |

## Types of Tolerance

| Type | Description |
|---|---|
| **Unilateral Tolerance** | Total tolerance is applied entirely on **one side** of the basic size (either fully above or fully below) — e.g., 20.00/19.95 mm (tolerance entirely below basic size) |
| **Bilateral Tolerance** | Tolerance is applied on **both sides** of the basic size — e.g., 20.00 ± 0.05 mm (0.025 above and 0.025 below, or unevenly split) |

## Fits — Basic Classification (extremely high-yield)

A **"fit"** describes the relationship (looseness or tightness) resulting when two mating parts (typically a **shaft and a hole**) are assembled together, based on the relative sizes of their limits.

### 1. Clearance Fit
The shaft is **always smaller** than the hole, across the entire tolerance range — there is always some **positive clearance (gap)** between them, allowing free relative movement.
- **Used for**: parts requiring relative rotation or sliding motion (e.g., a shaft rotating freely in a plain bearing).
- Sub-types (by degree of clearance): **Slack fit, Loose fit, Free fit, Easy fit, Medium/Running fit** — from very loose to just barely clearance.

### 2. Interference Fit
The shaft is **always larger** than the hole, across the entire tolerance range — assembly requires force (press-fitting) or a temperature-based method (heating the hole/cooling the shaft to expand/contract them temporarily), and the two parts, once assembled, act essentially as a single rigid unit, held together by the interference (compression at the mating surfaces).
- **Used for**: permanent or semi-permanent assemblies requiring no relative motion and high joint rigidity (e.g., a gear or bearing pressed onto a shaft, a wheel hub on an axle).
- Sub-types: **Force fit, Shrink fit, Tight fit** — from moderate press-fit to a heat-assisted shrink fit for very high interference.

### 3. Transition Fit
The tolerance zones of the shaft and hole **overlap** — depending on the actual sizes produced within their respective tolerance ranges, the resulting assembly **may turn out to be either a small clearance OR a small interference** — it is genuinely uncertain (varies from one assembled pair to the next) which it will be.
- **Used for**: applications needing accurate location/alignment with easy assembly/disassembly (e.g., some gear/pulley-to-shaft assemblies, dowel pin locations).

**Key conceptual summary — extremely frequently tested:**
- **Clearance Fit**: shaft always smaller than hole (gap guaranteed).
- **Interference Fit**: shaft always larger than hole (overlap/press-fit guaranteed).
- **Transition Fit**: could go either way (uncertain — depends on actual produced sizes within tolerance).

## Hole Basis System vs Shaft Basis System (the two standard fit-specification systems)

| System | Description |
|---|---|
| **Hole Basis System** | The **hole's** lower limit (minimum size) is kept **fixed** at the basic size (i.e., the hole's tolerance is always on the "+" side of basic size), and different fits are achieved entirely by varying the **shaft's** size — the **more widely used/preferred system in industry**, since holes are generally more difficult/expensive to produce to a variable size (a standard-size drill/reamer/broach is simpler to standardize on), so it's more economical to keep the hole standard and adjust the (comparatively easier-to-vary) shaft size |
| **Shaft Basis System** | The **shaft's** upper limit (maximum size) is kept fixed at the basic size, and different fits are achieved by varying the **hole's** size — used less commonly, typically only where a common shaft size (e.g., standard cold-drawn round bar stock) must mate with several different hole-fit requirements |

**Key fact: the Hole Basis System is the standard/preferred system in general engineering practice**, because it is generally easier and more economical to manufacture a range of shaft sizes (using standard turning/grinding tools) than to manufacture a range of hole sizes (which would require a different-sized drill/reamer for every variation) — a frequently tested rationale question.

## IT (International Tolerance) Grades (brief mention)
Standardized tolerance grades (e.g., IT01, IT0, IT1 ... IT18) specifying the **magnitude** of tolerance for a given nominal size range, as per ISO/BIS standards — lower IT grade number = tighter (finer) tolerance; higher IT grade number = looser (coarser) tolerance.

## Most Important Facts to Remember

- **Tolerance = Upper Limit − Lower Limit** — always a positive total permissible variation.
- **Clearance Fit**: shaft always smaller than hole. **Interference Fit**: shaft always larger than hole. **Transition Fit**: could be either, depending on actual sizes within tolerance — the single most tested classification in this topic.
- **Hole Basis System is the industry-preferred/standard system**, because it's more economical to vary shaft sizes (using standard tools) than hole sizes (which need different-sized drills/reamers for each variation).
- **Interference fit** is used for permanent/rigid assemblies (press/shrink fit, e.g., gear on shaft); **Clearance fit** is used where relative motion is needed (e.g., a rotating shaft in a bearing).
- **Unilateral tolerance**: entirely on one side of basic size; **Bilateral tolerance**: split across both sides.

## Practice Questions

1. What is the fundamental difference between a clearance fit and an interference fit? → **In a clearance fit, the shaft is always smaller than the hole (a gap always exists); in an interference fit, the shaft is always larger than the hole (assembly requires force/press-fitting)**
2. What is unique about a transition fit compared to clearance and interference fits? → **The result can be either a small clearance or a small interference, depending on the actual produced sizes within the tolerance range — it is not guaranteed to be one or the other**
3. Which system — Hole Basis or Shaft Basis — is more widely used in general engineering practice, and why? → **Hole Basis System, because it is more economical to manufacture a range of shaft sizes (using standard tools) than a range of hole sizes (which would require different drill/reamer sizes for each variation)**
4. Give an everyday example of an application requiring an interference fit. → **A gear, pulley, or bearing pressed onto a shaft (permanent, rigid, no-relative-motion assembly)**
