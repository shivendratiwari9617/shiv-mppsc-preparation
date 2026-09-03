# Mechanics of Metal Cutting, Tool Geometry & Tool Life (धातु काटने का सिद्धांत, टूल ज्यामिति व टूल लाइफ)

## Mechanics of Metal Cutting — Basic Concept

When a cutting tool engages a workpiece, material ahead of the tool is **sheared and deformed plastically**, forming a **chip** that flows away along the tool's rake face — understanding this chip-formation process (the "shear plane" concept) is fundamental to predicting cutting forces, temperatures, and tool wear.

## Types of Chips Produced

| Chip Type | Formed when | Characteristics |
|---|---|---|
| **Continuous Chip** | Machining **ductile** materials at **high cutting speed**, with a **large rake angle**, and low friction at the tool-chip interface | Long, ribbon-like chip; generally gives a **good surface finish** but can be hazardous (sharp, tangled) and may need a chip-breaker |
| **Continuous Chip with Built-Up Edge (BUE)** | Ductile materials at **lower speed** or high friction, where work-hardened material periodically welds to and breaks off the tool's cutting edge | Poor surface finish, irregular chip; BUE material adhering/breaking off can also damage tool edge |
| **Discontinuous (Segmented) Chip** | Machining **brittle** materials (e.g., cast iron), or ductile materials at very **low speed** with a **small rake angle**, or with a **brittle** workpiece structure | Chip breaks into small segments/fragments as it forms |

## Basic Single-Point Cutting Tool Geometry (Tool Angles)

| Angle | Meaning/Purpose |
|---|---|
| **Rake Angle** | Angle of the tool's top (rake) face relative to a plane perpendicular to the workpiece surface — controls the direction of chip flow and cutting force; a **larger positive rake angle** reduces cutting force (easier shearing) but weakens the tool edge (less material to support it) |
| **Clearance (Relief) Angle** | Angle between the tool's flank (side, below the cutting edge) and the machined surface — **prevents the tool flank from rubbing** against the already-machined surface, essential for the tool to actually cut rather than merely rub |
| **Cutting Edge Angle** | The angle the main cutting edge makes relative to the direction of feed |
| **Nose Radius** | A small rounding at the tool tip (instead of a sharp point) — improves surface finish and tool strength/life, but too large a radius can increase cutting forces and cause chatter |

### Positive vs Negative Rake Angle
- **Positive Rake**: reduces cutting force, lower power consumption, better for **ductile materials/lower-strength tool materials** — but the tool edge is thinner/weaker.
- **Negative Rake**: increases cutting force but gives a **stronger** tool edge — better suited to interrupted cuts, harder materials, and tool materials that are strong in compression but weak in tension (e.g., carbide, ceramic tools).

## Tool Wear — Types

| Type | Description |
|---|---|
| **Flank Wear** | Wear on the tool's flank (side face, below the cutting edge) — the **most common** and generally used indicator for defining tool life/replacement, since it directly affects dimensional accuracy |
| **Crater Wear** | Wear forming a **crater/pit on the rake face**, caused by the chip sliding across it at high temperature — affects tool strength and chip flow |

## Tool Life & Taylor's Tool Life Equation

**Tool Life**: the useful cutting time a tool provides before it must be reground/replaced (defined by reaching a specified flank wear limit, or by a specific failure criterion).

### Taylor's Tool Life Equation (extremely high-yield formula)

**VTⁿ = C**

where:
- V = cutting speed (m/min)
- T = tool life (min)
- n = **Taylor's exponent** (a tool-material-dependent constant)
- C = a constant (approximately the cutting speed that gives a 1-minute tool life, for that tool-material/workpiece combination)

**Key consequence: increasing cutting speed decreases tool life** — a small increase in cutting speed can cause a disproportionately large decrease in tool life (governed by the exponent n) — a critical practical trade-off in machining economics (higher speed = faster production but more frequent tool changes/regrinding).

### Typical values of Taylor's exponent (n) — approximate, by tool material
| Tool Material | Approximate n |
|---|---|
| High-Speed Steel (HSS) | ≈ 0.1 – 0.15 |
| Carbide | ≈ 0.2 – 0.3 |
| Ceramic | ≈ 0.4 – 0.55 |

**Key trend: a HIGHER value of n means the tool life is LESS sensitive to changes in cutting speed** — ceramic tools (highest n) can sustain much higher cutting speeds with comparatively less tool-life penalty than HSS tools (lowest n).

## Cutting Tool Materials (brief overview, in order of increasing hardness/heat resistance/cutting speed capability)

**Carbon Steel (lowest heat resistance) → High-Speed Steel (HSS, retains hardness at higher temperature, "red-hardness," see point 11) → Cemented Carbide (much higher speed capability) → Ceramic → Cubic Boron Nitride (CBN) → Diamond (hardest, for very high-speed/precision finishing of hard materials).**

## Machinability
A relative measure of how easily a material can be machined — influenced by factors like tool life achieved, cutting force required, surface finish obtained, and ease of chip disposal, for a given material under given cutting conditions.

## Cutting Fluid (Coolant) — Purpose
Applied during machining to: **reduce temperature** at the cutting zone (via cooling), **reduce friction** (via lubrication), **flush away chips**, and **improve surface finish** — extends tool life and allows higher cutting speeds.

## Most Important Facts to Remember

- **Rake angle** controls chip flow/cutting force (larger positive rake = easier cutting, weaker edge); **Clearance angle** prevents the tool flank from rubbing on the machined surface.
- **Continuous chip** = ductile material, high speed, large rake, good finish; **Discontinuous chip** = brittle material or low speed/small rake; **BUE** = poor finish, occurs at moderate speed/high friction with ductile materials.
- **Taylor's Tool Life Equation: VTⁿ = C** — the single most important formula in this topic; **increasing cutting speed decreases tool life**.
- **Flank wear** = most common tool-life-limiting wear mode; **Crater wear** = pit on the rake face from chip friction/heat.
- Cutting tool material progression (increasing speed capability/hardness): **Carbon steel → HSS → Carbide → Ceramic → CBN → Diamond**.

## Practice Questions

1. State Taylor's Tool Life Equation. → **VTⁿ = C**
2. What effect does increasing cutting speed have on tool life, according to Taylor's equation? → **Tool life decreases (often disproportionately, depending on the exponent n)**
3. What is the purpose of the clearance (relief) angle on a cutting tool? → **To prevent the tool's flank from rubbing against the already-machined workpiece surface**
4. Which type of chip is typically produced when machining brittle materials like cast iron? → **Discontinuous (segmented) chip**
