# Steam Turbine — Basic Principles (स्टीम टर्बाइन के मूल सिद्धांत)

## Steam Turbine — Basic Definition

A rotary heat engine that converts the **thermal/kinetic energy of high-pressure, high-temperature steam** (produced in a boiler) into **mechanical (rotational) work**, by directing steam onto blades mounted on a rotor — used extensively in thermal and nuclear power plants to drive electric generators, and in some marine/industrial applications.

## Impulse vs Reaction Steam Turbine — Fundamental Classification (parallels hydraulic turbine classification, point 24 — same underlying logic)

| | Impulse Turbine | Reaction Turbine |
|---|---|---|
| Working Principle | Steam is expanded **completely in fixed nozzles** before striking the moving blades — pressure drop occurs **only in the nozzles**, not across the moving blades | Steam expands **partly in fixed (guide) blades and partly in the moving blades themselves** — pressure drops **gradually, continuously**, across both fixed and moving rows |
| Pressure on moving blades | **Constant** (no pressure drop across moving blades — steam only changes direction/velocity, imparting an impulse force) | **Decreases** across the moving blades (pressure energy is converted to work directly within the moving blade passage too) |
| Blade shape | Symmetrical | Unsymmetrical (aerofoil-like, similar to the fixed/guide blades) |
| Example | **De Laval turbine, Curtis turbine, Rateau turbine** | **Parsons turbine** |

**Key memorized fact: In a pure impulse turbine, ALL pressure drop happens in the nozzles (fixed), and moving blades experience constant pressure — they only redirect the high-velocity steam jet, extracting kinetic energy via the impulse/momentum-change principle (same fundamental principle as the Pelton wheel, point 24). In a reaction turbine, pressure continues to drop as steam passes through the moving blades themselves, generating an additional reactive thrust (similar in spirit to Newton's third law/rocket-nozzle reaction) alongside the impulse effect.**

## Compounding of Steam Turbines — Why Needed

A single stage expanding steam from boiler pressure directly to condenser pressure would require an impractically high blade speed to efficiently extract the available energy (efficiency is best when blade speed is a specific fraction of steam jet speed) — **compounding** splits the total pressure/velocity drop across **multiple stages**, keeping blade speeds and rotor stresses at practical, manageable levels.

### Types of Compounding

| Type | Description |
|---|---|
| **Velocity Compounding (Curtis stage)** | Steam is expanded to **full/final pressure drop in a single set of nozzles**, but the resulting high-velocity steam then passes through **multiple rows of moving blades** (with intermediate fixed/guide blade rows redirecting the flow between each moving row), progressively extracting its kinetic energy in stages |
| **Pressure Compounding (Rateau stage)** | The total pressure drop is divided across **several stages in series**, each stage consisting of one row of fixed nozzles followed by one row of moving blades — pressure drops gradually across successive stages, rather than all at once |
| **Pressure-Velocity Compounding** | A combination of both — pressure is divided into a few stages, and within each stage, velocity compounding (multiple moving blade rows) is also used — a practical compromise design |
| **(Reaction Turbine) Compounding** | Reaction turbines are inherently multi-staged by design (many alternating rows of fixed and moving blades, each contributing a small pressure drop) — sometimes just called reaction staging, distinct terminology from the impulse-turbine compounding methods above |

## Governing of Steam Turbines
Similar in purpose to engine governors (point 28) — controls steam flow (via a throttle valve or nozzle-control valves) to maintain the turbine's speed constant despite load variations.

## Steam Turbine — Key Auxiliary/Related Concepts

| Term | Meaning |
|---|---|
| **Condenser** | Located downstream of the turbine, condenses exhaust steam back to water (using cooling water) — maintains a **low back-pressure** at the turbine exhaust, which significantly increases the **useful pressure drop** available across the turbine, and hence its efficiency/output |
| **Nozzle** | Converts pressure/thermal energy of steam into kinetic energy (high velocity) — the counterpart to a hydraulic turbine's nozzle (Pelton wheel, point 24) |
| **Blade (Bucket)** | Mounted on the rotor, receives the steam jet/flow and converts its energy into rotational mechanical work |
| **Diaphragm** | In an impulse turbine, a partition carrying the fixed nozzles for each stage |

## Steam Turbine vs Steam Engine (reciprocating) — Brief Comparison
Steam turbines give **continuous rotary output** directly (no need for a crank-connecting rod mechanism to convert reciprocating to rotary motion, unlike a reciprocating steam engine), generally achieve **higher efficiency and much higher power-to-weight ratio**, and dominate modern large-scale power generation — reciprocating steam engines are now largely obsolete for this purpose (of largely historical interest, e.g., in older steam locomotives).

## Most Important Facts to Remember

- **Impulse turbine**: all pressure drop in **fixed nozzles**, moving blades see **constant pressure** (only velocity/direction change) — example: **De Laval, Curtis**.
- **Reaction turbine**: pressure drops **gradually across both fixed and moving blades** — example: **Parsons**.
- **Velocity compounding (Curtis)**: one nozzle row, multiple moving blade rows. **Pressure compounding (Rateau)**: multiple stages, each with its own nozzle + moving blade row, pressure drops gradually across stages.
- A **condenser** at the turbine exhaust increases the effective/useful pressure drop across the turbine, improving efficiency and output.
- Steam turbines give direct continuous rotary output (no reciprocating-to-rotary conversion needed), unlike a reciprocating steam engine.

## Practice Questions

1. In an impulse steam turbine, where does the entire pressure drop of the steam occur? → **In the fixed nozzles only — moving blades experience constant pressure**
2. What is the purpose of "compounding" in a steam turbine? → **To split the total pressure/velocity drop across multiple stages, keeping blade speed and stresses at practical levels rather than requiring one impractically high-speed single stage**
3. Which type of compounding uses a single nozzle row followed by multiple rows of moving blades? → **Velocity compounding (Curtis stage)**
4. Why does adding a condenser at the turbine exhaust improve turbine efficiency/output? → **It maintains a low back-pressure at the exhaust, increasing the total useful pressure drop available across the turbine**
