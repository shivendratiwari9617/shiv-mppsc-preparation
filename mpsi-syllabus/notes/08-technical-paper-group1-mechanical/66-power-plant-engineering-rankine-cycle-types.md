# Power Plant Engineering — Rankine Cycle, Types of Power Plants (पावर प्लांट इंजीनियरिंग)

## Types of Power Plants — Classification by Energy Source (high-yield)

| Power Plant | Prime Mover | Primary Energy Source |
|---|---|---|
| **Thermal (steam)** | Steam turbine | Coal/fuel combustion heat → steam |
| **Hydro** | Water turbine (Pelton/Francis/Kaplan) | Potential energy of stored/falling water |
| **Nuclear** | Steam turbine | Nuclear fission heat → steam (same Rankine-cycle back-end as thermal plants) |
| **Diesel** | Diesel (CI) engine | Diesel combustion (used for smaller/standby/peaking loads) |
| **Gas turbine** | Gas turbine | Combustion of gas/liquid fuel directly driving turbine (Brayton cycle) |
| **Combined cycle** | Gas turbine + steam turbine | Gas turbine's hot exhaust generates steam for a second (steam) cycle — **highest efficiency** among fossil-fuel plants |

## Rankine Cycle — Basic Steam Power Cycle (extremely high-yield)

The **standard vapour power cycle** used in all steam-based (thermal and nuclear) power plants — 4 processes, 4 main components:

| Process | Component | What Happens |
|---|---|---|
| 1→2 | **Feed pump** | Isentropic (ideal) compression of saturated liquid water — pressure raised with negligible temperature rise |
| 2→3 | **Boiler** | Constant-pressure heat addition — water heated, boiled, and superheated into high-pressure steam |
| 3→4 | **Turbine** | Isentropic expansion of steam — does work, drives generator; pressure/temperature drop sharply |
| 4→1 | **Condenser** | Constant-pressure heat rejection — steam condensed back to saturated liquid water (using cooling water) |

## Methods to Improve Rankine Cycle Efficiency (very high-yield)

- **Reheating**: steam is partially expanded in a high-pressure turbine, sent back to the boiler to be **reheated**, then expanded further in a low-pressure turbine — increases average temperature of heat addition and reduces moisture content at turbine exit (protects blades from erosion)
- **Regeneration (feedwater heating)**: some steam is **bled/extracted** from intermediate turbine stages to preheat the feedwater before it enters the boiler — reduces the heat that must be supplied by fuel, raising overall thermal efficiency
- Increasing boiler pressure/temperature (within metallurgical limits) also raises efficiency

## Brayton Cycle — Gas Turbine Cycle

The **ideal cycle for gas turbines**, analogous in role to the Rankine cycle for steam plants — 4 processes: isentropic compression (compressor), constant-pressure heat addition (combustion chamber), isentropic expansion (turbine), constant-pressure heat rejection (exhaust to atmosphere, in an open cycle).

## Combined Cycle Power Plant

Couples a **gas turbine (Brayton cycle, "topping" cycle)** with a **steam turbine (Rankine cycle, "bottoming" cycle)** — the gas turbine's hot exhaust (which would otherwise be wasted) is routed through a **Heat Recovery Steam Generator (HRSG)** to raise steam for the steam turbine. This gives the **highest thermal efficiency** achievable among conventional fossil-fuel power plants (both cycles' energy is usefully extracted from the same fuel).

## Cogeneration (Combined Heat and Power, CHP)

Simultaneous production of **both electricity and useful process heat/steam** from a single fuel source (e.g., a factory using turbine exhaust steam for its industrial heating needs after power generation) — dramatically improves overall energy utilization efficiency compared to generating power and heat separately.

## Main Components of a Thermal (Coal) Power Plant

**Boiler** (generates steam) → **Turbine** (expands steam, does mechanical work) → **Generator** (converts mechanical to electrical energy) → **Condenser** (condenses exhaust steam) → **Feed pump** (returns condensate to boiler) → **Cooling tower** (rejects heat from condenser cooling water to atmosphere).

## Most Important Facts to Remember

- **Rankine cycle 4 processes: pump (isentropic compression) → boiler (const-P heat addition) → turbine (isentropic expansion) → condenser (const-P heat rejection).**
- **Reheating** reduces turbine-exit moisture and raises average heat-addition temperature; **regeneration** preheats feedwater using bled steam — both raise Rankine efficiency, tested via distinct mechanisms.
- **Brayton cycle** is to gas turbines what the **Rankine cycle** is to steam turbines.
- **Combined cycle plants** (gas turbine + HRSG + steam turbine) achieve the **highest efficiency** among conventional power plants because they extract useful work from the same fuel twice.
- **Cogeneration** = simultaneous electricity + useful heat output — much higher overall fuel utilization than power-only generation.
- Nuclear power plants use the **same Rankine (steam) cycle** as coal thermal plants — only the heat source (fission vs combustion) differs.

## Practice Questions

1. Name the four processes of the ideal Rankine cycle in order. → **Isentropic pumping → constant-pressure heat addition (boiler) → isentropic expansion (turbine) → constant-pressure heat rejection (condenser)**
2. What is the purpose of "regeneration" in a Rankine cycle? → **Preheating feedwater using steam bled from the turbine, reducing fuel heat input needed and raising efficiency**
3. Why do combined cycle power plants achieve higher efficiency than a simple gas turbine plant alone? → **The gas turbine's waste exhaust heat is recovered via an HRSG to generate additional power through a steam turbine (bottoming cycle)**
4. What cycle serves as the ideal reference cycle for gas turbines? → **Brayton cycle**
