# Steam Nozzles & Compressors (स्टीम नोज़ल एवं कम्प्रेसर)

## Steam Nozzle — Definition

A duct/passage of varying cross-section that converts the **pressure energy of steam into kinetic energy** (increases velocity while pressure/enthalpy drops) — used to direct high-velocity steam onto turbine blades (e.g., in a Pelton-analogous role for impulse steam turbines).

## Types of Nozzles — Based on Flow Regime (high-yield)

| Nozzle Type | Shape | Used For |
|---|---|---|
| **Convergent nozzle** | Cross-section decreases continuously | Accelerating flow up to **sonic velocity (Mach 1)** at the exit — cannot exceed sonic speed |
| **Convergent-divergent (Laval/De Laval) nozzle** | Converges then diverges after a narrow "throat" | Accelerating flow **beyond sonic velocity (supersonic)** — divergent section further accelerates already-sonic flow |

## Critical Pressure Ratio (extremely high-yield fact)

The pressure ratio (throat pressure / inlet pressure) at which flow through the throat becomes **sonic (choked flow)** — beyond this point, simply lowering the exit/back pressure further **does not increase mass flow rate** through a convergent nozzle (a convergent-divergent nozzle is needed instead).

**For steam (typical approximate value): critical pressure ratio ≈ 0.58** (varies slightly — dry saturated ≈ 0.577, superheated ≈ 0.546, by different textbook conventions; **0.58 is the standard quick-recall figure**)

## Compressor — Definition

A machine that **increases the pressure of a gas** by reducing its volume, using mechanical work input (opposite function to a turbine, which extracts work from an expanding gas).

## Reciprocating vs Rotary/Centrifugal Compressor (very high-yield comparison)

| | Reciprocating Compressor | Rotary/Centrifugal Compressor |
|---|---|---|
| Working principle | Piston moves in a cylinder, compresses gas via **positive displacement** | Impeller imparts kinetic energy to gas, converted to pressure via diffuser (**dynamic/continuous flow**) |
| Discharge pressure | **High pressure**, lower flow rate | **Lower pressure**, high flow rate |
| Flow | Pulsating (intermittent) | Continuous, smoother |
| Suitability | Suited to **high-pressure, low-volume** applications | Suited to **low-pressure, high-volume** applications |

## Multi-Staging in Reciprocating Compressors — Why Used (high-yield)

Compressing gas from low to very high pressure in a **single stage** is inefficient and impractical. Multi-staging (compressing in stages with **intercooling between stages**) is used because it:

- **Reduces the work done** per unit mass of gas compressed (compression approaches isothermal, the most efficient theoretical mode, more closely as stages increase)
- **Improves volumetric efficiency** (reduces the effect of clearance-volume re-expansion at high pressure ratios)
- Keeps the **discharge temperature within safe limits** for cylinder materials and lubricant stability
- Reduces stresses on mechanical components from very high single-stage pressure ratios

## Volumetric Efficiency of a Reciprocating Compressor

**ηv = (Actual volume of gas drawn in at inlet conditions) / (Swept/displacement volume of cylinder)**

Reduced primarily by the **clearance volume** — gas trapped in the clearance re-expands before fresh gas can be drawn in, reducing the effective intake volume. Higher pressure ratio → lower volumetric efficiency (clearance-gas re-expansion effect is amplified).

## Isothermal vs Adiabatic Compression — Efficiency Reference

- **Isothermal compression** (constant temperature, requires continuous heat removal) needs the **least work input** — the theoretical ideal/benchmark
- **Adiabatic (isentropic) compression** (no heat transfer) needs the **most work input** for the same pressure rise
- **Isothermal efficiency = Isothermal work / Actual work done** — used to rate real compressor performance against this ideal benchmark (intercooling in multi-staging is precisely the practical attempt to approach isothermal behaviour)

## Most Important Facts to Remember

- **Convergent nozzle**: accelerates flow up to sonic (Mach 1) only. **Convergent-divergent (Laval) nozzle**: needed to accelerate flow to supersonic.
- **Critical pressure ratio for steam ≈ 0.58** — beyond this, a convergent nozzle alone cannot increase mass flow further (choked flow).
- **Reciprocating compressor**: high pressure, low flow, positive displacement. **Centrifugal/rotary compressor**: low pressure, high flow, continuous dynamic flow.
- **Multi-staging with intercooling** reduces work done, improves volumetric efficiency, and limits discharge temperature — the single most-tested reason for multi-staging.
- **Isothermal compression requires the least work**; **adiabatic requires the most** — this ranking is a classic exam fact.

## Practice Questions

1. Which nozzle type is required to accelerate steam flow beyond the speed of sound? → **Convergent-divergent (Laval/De Laval) nozzle**
2. What is the approximate critical pressure ratio for steam flow through a nozzle? → **≈ 0.58**
3. Name two benefits of multi-staging in reciprocating air compressors. → **Reduced work done (closer to isothermal) and improved volumetric efficiency** (also: limited discharge temperature)
4. Between isothermal and adiabatic compression for the same pressure ratio, which requires more work input? → **Adiabatic compression**
