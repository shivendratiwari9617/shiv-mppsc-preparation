# Air Standard Cycles — Carnot, Otto, Diesel Cycle (वायु मानक चक्र)

## Air Standard Cycle — Concept

An idealized thermodynamic cycle analysis where air (treated as an ideal gas) is the working fluid throughout, used to approximate the performance of internal combustion engines without the complications of actual combustion chemistry — allows comparison of engine cycle efficiencies on a common theoretical basis.

### Common Assumptions
1. Working fluid is air, behaving as an ideal gas, in a fixed quantity (closed cycle — no intake/exhaust).
2. Combustion is replaced by an equivalent **heat addition** from an external source.
3. Exhaust process is replaced by an equivalent **heat rejection**.
4. All processes are **reversible** (no friction, no throttling losses).
5. Specific heats (cp, cv) are constant.

## Carnot Cycle

The **most efficient possible cycle** operating between two fixed temperature limits — a theoretical benchmark (not practically realizable as an engine) consisting of 4 reversible processes:

1. **Reversible isothermal heat addition** (at T1, constant temperature)
2. **Reversible adiabatic (isentropic) expansion** (T1 → T2)
3. **Reversible isothermal heat rejection** (at T2, constant temperature)
4. **Reversible adiabatic (isentropic) compression** (T2 → T1, back to start)

### Carnot Efficiency

**η_Carnot = 1 − (T2/T1) = 1 − (T_sink/T_source)**

(temperatures in **absolute/Kelvin** scale — a critical detail, frequently a trick in numerical questions)

**Key significance**: Carnot efficiency depends **only on the two temperature limits**, not on the working fluid — it represents the theoretical maximum efficiency any heat engine can achieve between those two temperatures (Carnot's theorem).

## Otto Cycle (Spark-Ignition / Petrol Engine Cycle)

The ideal air-standard cycle for **petrol (SI — spark ignition) engines**, consisting of 4 processes:

1. **Isentropic (reversible adiabatic) compression** (1→2)
2. **Constant volume heat addition** (2→3) — represents the spark-ignited combustion, which occurs so fast it's modeled as instantaneous (constant volume)
3. **Isentropic expansion** (3→4) — the power stroke
4. **Constant volume heat rejection** (4→1) — represents exhaust

### Otto Cycle Efficiency

**η_Otto = 1 − 1/r^(γ−1)**

where **r = compression ratio (V1/V2)**, **γ = ratio of specific heats (cp/cv)**, typically γ = 1.4 for air.

**Key fact: Otto cycle efficiency depends only on the compression ratio (r) and γ — increasing compression ratio increases efficiency** (this is why higher-compression petrol engines are more efficient, up to the limit set by knocking/detonation).

## Diesel Cycle (Compression-Ignition Engine Cycle)

The ideal air-standard cycle for **diesel (CI — compression ignition) engines**, consisting of 4 processes:

1. **Isentropic compression** (1→2)
2. **Constant pressure heat addition** (2→3) — represents the diesel combustion, which occurs over a finite period as fuel is injected (modeled as constant pressure, unlike Otto's instantaneous constant-volume addition)
3. **Isentropic expansion** (3→4)
4. **Constant volume heat rejection** (4→1)

### Diesel Cycle Efficiency

**η_Diesel = 1 − [1/r^(γ−1)] × [(ρ^γ − 1)/(γ(ρ−1))]**

where **r = compression ratio**, **ρ (cut-off ratio) = V3/V2** (ratio of volume at end of heat addition to volume at start of heat addition).

## Otto vs Diesel — Key Comparisons (frequently tested)

| | Otto Cycle | Diesel Cycle |
|---|---|---|
| Engine type | Petrol / Spark Ignition (SI) | Diesel / Compression Ignition (CI) |
| Heat addition | Constant **volume** | Constant **pressure** |
| Ignition | Spark plug | Compression (heat of compression ignites fuel) |
| Compression ratio | Lower (typically 6–10) | Higher (typically 14–22) |
| **For the SAME compression ratio** | **Otto is MORE efficient than Diesel** | Less efficient than Otto (at same r) |
| In practice | Diesel engines typically achieve **higher overall efficiency** despite the above, because they operate at much higher compression ratios than are possible in petrol engines (which are limited by knocking) | — |

## Efficiency Ranking (for a common comparison basis, e.g., same heat input and heat rejection)

**η_Carnot > η_Otto > η_Diesel** — the Carnot cycle always represents the theoretical upper bound.

## Dual Cycle (brief mention, sometimes clubbed with this topic)

Combines constant volume and constant pressure heat addition (models actual CI engine behavior more realistically than the pure Diesel cycle) — heat added partly at constant volume, partly at constant pressure.

## Most Important Facts to Remember

- **Carnot efficiency = 1 − T2/T1** (absolute temperatures) — depends only on temperature limits, is the theoretical maximum for any cycle.
- **Otto cycle**: constant **volume** heat addition, used for **petrol/SI** engines; **η = 1 − 1/r^(γ−1)**.
- **Diesel cycle**: constant **pressure** heat addition, used for **diesel/CI** engines.
- **At the same compression ratio, Otto is more efficient than Diesel** — but diesel engines use much higher compression ratios in practice, giving them a real-world efficiency edge.
- Efficiency ranking (same conditions): **Carnot > Otto > Diesel**.
- γ (ratio of specific heats) for air ≈ **1.4**.

## Practice Questions

1. A Carnot engine operates between 800 K and 300 K. Find its efficiency.
   → η = 1 − 300/800 = 1 − 0.375 = **0.625 = 62.5%**
2. Which cycle models the ideal petrol engine, and what type of heat addition does it use? → **Otto cycle, constant volume heat addition**
3. For the same compression ratio, which is more efficient — Otto or Diesel cycle? → **Otto cycle**
4. In the Otto cycle efficiency formula η = 1 − 1/r^(γ−1), what does 'r' represent? → **Compression ratio (V1/V2)**
