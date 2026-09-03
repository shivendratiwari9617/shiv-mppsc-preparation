# Heat Exchangers (ऊष्मा विनिमायक)

## Heat Exchanger — Basic Definition

A device used to transfer heat between **two or more fluids** at different temperatures, without (in most types) allowing the fluids to physically mix — widely used in boilers, condensers, radiators, refrigeration/AC systems, IC engine cooling systems, and industrial process plants.

## Classification by Flow Arrangement

| Type | Flow Direction | Key Characteristic |
|---|---|---|
| **Parallel Flow (Co-current)** | Both fluids flow in the **same** direction | Temperature difference (ΔT) between fluids is **large at inlet, small at outlet**; outlet temperature of cold fluid can never exceed outlet temperature of hot fluid |
| **Counter Flow (Counter-current)** | Fluids flow in **opposite** directions | ΔT is more **uniform** along the length; achieves the **highest possible effectiveness/heat transfer** for given inlet conditions — the cold fluid outlet temperature **can even exceed** the hot fluid's outlet temperature |
| **Cross Flow** | Fluids flow **perpendicular** to each other | Common in compact heat exchangers, e.g., car radiators, air-cooled condensers |

**Key fact: Counter-flow arrangement is thermodynamically the most efficient (highest heat transfer for given surface area), because it maintains a more uniform temperature difference throughout the exchanger length, avoiding the "pinch point" limitation of parallel flow.**

## Classification by Construction

| Type | Description |
|---|---|
| **Shell and Tube** | One fluid flows through a bundle of tubes, the other flows around the tubes within an outer shell — most common industrial type, used in condensers, boilers, oil coolers |
| **Double Pipe (Concentric Tube)** | One fluid flows through an inner pipe, the other through the annular space between inner and outer pipe — simplest construction, used for small-capacity applications |
| **Plate Type** | Series of thin corrugated plates, fluids flow in alternate channels between plates — very compact, high heat transfer area per unit volume, used in HVAC and food/dairy processing |
| **Finned Tube / Compact Heat Exchanger** | Fins added to increase surface area on the side with lower heat transfer coefficient (typically the gas/air side) — used in radiators, air-cooled condensers, IC engine cooling |

## Classification by Fluid Contact / Mixing

| Type | Description |
|---|---|
| **Direct Contact (Open) Type** | Hot and cold fluids **physically mix** — e.g., cooling towers, spray/jet condensers |
| **Indirect Contact (Closed/Surface) Type** | Fluids are separated by a **solid wall** (tube/plate), never mix — the most common type (shell-and-tube, plate, etc.) |
| **Regenerative Type** | A single flow passage is alternately exposed to hot and cold fluid streams; the wall/matrix material stores and releases heat — e.g., regenerator in a gas turbine, Cowper stove |
| **Recuperative Type** | Fluids flow simultaneously and continuously on either side of a dividing wall — most heat exchangers (shell-and-tube etc.) are of this type |

## Log Mean Temperature Difference (LMTD)

Since the temperature difference between the two fluids **varies along the length** of a heat exchanger (not constant), a special average — **LMTD** — is used for heat transfer calculations rather than a simple arithmetic mean:

**Q = U·A·(LMTD)**

**LMTD = (ΔT1 − ΔT2) / ln(ΔT1/ΔT2)**

where ΔT1 and ΔT2 are the temperature differences between the hot and cold fluid at the two ends of the exchanger.

**For a given set of inlet/outlet temperatures, LMTD for counter-flow is always ≥ LMTD for parallel-flow** — this is the mathematical reason counter-flow exchangers are more efficient (transfer more heat for the same U and A).

## Effectiveness-NTU Method (brief mention)

An alternative analysis method (used when outlet temperatures are unknown), based on:

**Effectiveness (ε) = Actual heat transfer / Maximum possible heat transfer**

**NTU (Number of Transfer Units) = UA / C_min** (C_min = minimum of the two fluids' heat capacity rates, ṁcp)

## Fouling

Accumulation of unwanted deposits (scale, dirt, corrosion products) on heat transfer surfaces over time — reduces effective heat transfer by adding thermal resistance (**fouling factor**), a practical maintenance concern in real heat exchangers.

## Common Real-World Examples (application-linkage, often tested)

| Application | Heat Exchanger Type |
|---|---|
| Car/vehicle radiator | Cross-flow, finned-tube |
| Boiler | Shell-and-tube (or fire-tube/water-tube arrangement) |
| Condenser (refrigeration/steam plant) | Shell-and-tube or finned-tube |
| Cooling tower | Direct contact type |
| Milk pasteurization plant | Plate type |

## Most Important Facts to Remember

- **Counter-flow gives higher effectiveness/heat transfer than parallel-flow** for the same inlet conditions, area, and U — because it maintains a more uniform ΔT and has a higher LMTD.
- In **counter-flow**, the cold fluid's outlet temperature **can exceed** the hot fluid's outlet temperature — impossible in parallel flow.
- **LMTD = (ΔT1 − ΔT2)/ln(ΔT1/ΔT2)**, used in **Q = UA(LMTD)** — the standard heat exchanger sizing formula.
- **Shell-and-tube** = most common industrial type; **Plate type** = most compact, used in food/dairy/HVAC; **Direct contact** = fluids physically mix (e.g., cooling towers).
- **Regenerative** exchangers use alternating flow through a heat-storing matrix; **Recuperative** exchangers have simultaneous flow separated by a wall (the more common type).

## Practice Questions

1. Which flow arrangement in a heat exchanger gives the highest thermal effectiveness for the same inlet conditions? → **Counter-flow**
2. In which type of heat exchanger do the two fluids physically mix? → **Direct contact (open) type**, e.g., cooling towers
3. What formula relates heat transfer rate Q to overall heat transfer coefficient U, area A, and LMTD? → **Q = U·A·(LMTD)**
4. Name the most common heat exchanger construction type used in industrial condensers and boilers. → **Shell and tube**
