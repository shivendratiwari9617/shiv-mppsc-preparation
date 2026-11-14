# Heat Transfer — Conduction, Convection, Radiation (ताप अंतरण)

## Three Modes of Heat Transfer — Overview

| Mode | Medium required | Mechanism |
|---|---|---|
| **Conduction** | Solid (or stationary fluid) | Transfer through molecular/atomic vibration & free-electron movement, no bulk motion of matter |
| **Convection** | Fluid (liquid/gas) | Transfer via **bulk movement** of fluid particles carrying heat |
| **Radiation** | **No medium needed** (works through vacuum) | Transfer via **electromagnetic waves** |

## 1. Conduction

### Fourier's Law of Heat Conduction

**Q = −kA(dT/dx)**

or, for steady-state, one-dimensional conduction through a plane wall:

**Q = kA(T1 − T2)/L**

where:
- Q = rate of heat conduction (W)
- k = thermal conductivity of material (W/m·K) — a material property
- A = cross-sectional area normal to heat flow
- L = thickness of the material (in direction of heat flow)
- (T1 − T2) = temperature difference across the thickness

**Negative sign** in the differential form indicates heat flows in the direction of **decreasing** temperature.

### Thermal Conductivity (k) — comparative values (qualitative order)
**Metals (Ag, Cu, Al) > Non-metallic solids > Liquids > Gases** — metals are the best conductors; gases are the poorest (best insulators, when not allowed to convect).

### Thermal Resistance (Analogy with Electrical Resistance)
**R_thermal = L/(kA)** — analogous to electrical resistance (R = ρL/A); heat flow Q is analogous to current, temperature difference ΔT is analogous to voltage: **Q = ΔT/R**. This analogy is used to solve composite-wall (multi-layer) conduction problems, where resistances in series simply add up.

## 2. Convection

### Newton's Law of Cooling

**Q = hA(Ts − T∞)**

where:
- h = convective heat transfer coefficient (W/m²·K) — depends on fluid properties, flow velocity, and surface geometry (NOT a pure material property like k)
- A = surface area
- Ts = surface temperature, T∞ = fluid (bulk/ambient) temperature

### Types of Convection

| Type | Description |
|---|---|
| **Natural (Free) Convection** | Fluid motion caused **solely by density differences** due to temperature variation (buoyancy-driven) — e.g., heat rising from a radiator |
| **Forced Convection** | Fluid motion caused by an **external agency** (fan, pump, blower) — e.g., heat sink with a cooling fan, radiator with water pump |

Forced convection generally gives a **higher heat transfer coefficient (h)** than natural convection for comparable conditions.

## 3. Radiation

### Stefan-Boltzmann Law

**Q = σεAT⁴**

where:
- σ = Stefan-Boltzmann constant = **5.67 × 10⁻⁸ W/m²K⁴**
- ε = emissivity of the surface (0 ≤ ε ≤ 1; ε = 1 for a perfect **black body**)
- A = surface area
- T = absolute temperature (Kelvin) — note the **fourth-power** dependence, meaning radiative heat transfer becomes dominant at high temperatures

### Black Body
An ideal surface that **absorbs all incident radiation** (none reflected or transmitted) and, correspondingly, is the **best possible emitter** at any given temperature (ε = 1) — a theoretical reference standard against which real surfaces (grey bodies, ε < 1) are compared.

### Key radiation terms
- **Emissivity (ε)**: Ratio of radiation emitted by a real surface to that emitted by a black body at the same temperature.
- **Absorptivity, Reflectivity, Transmissivity**: Fractions of incident radiation absorbed, reflected, and transmitted; sum to 1 for any surface.
- **Kirchhoff's Law**: At thermal equilibrium, a body's emissivity equals its absorptivity (ε = α) at a given wavelength/temperature.

## Combined Heat Transfer — Overall Heat Transfer Coefficient (U)

For composite systems (e.g., a wall with conduction through layers plus convection on both faces), an **overall heat transfer coefficient U** combines all resistances in series:

**Q = UA·ΔT_overall**, where **1/U = 1/h1 + L/k + 1/h2** (resistances in series, analogous to the thermal-resistance-network idea above)

## Most Important Facts to Remember

- **Conduction** needs a medium (solid), governed by **Fourier's Law: Q = kA·ΔT/L**.
- **Convection** needs a fluid in motion, governed by **Newton's Law of Cooling: Q = hA·ΔT**; **natural** (buoyancy-driven) vs **forced** (externally driven, e.g., fan/pump) convection.
- **Radiation** needs **no medium**, governed by the **Stefan-Boltzmann Law: Q = σεAT⁴** — the only mode that works through a vacuum, and the only one with a **fourth-power** temperature dependence.
- Thermal conductivity order: **metals > non-metallic solids > liquids > gases**.
- A **black body** has emissivity ε = 1 and is the best possible absorber and emitter.
- Stefan-Boltzmann constant σ = **5.67 × 10⁻⁸ W/m²K⁴** — a specific numeric value worth memorizing.

## Practice Questions

1. Which mode of heat transfer can occur through a vacuum, with no medium present? → **Radiation**
2. What is the value of the Stefan-Boltzmann constant? → **5.67 × 10⁻⁸ W/m²K⁴**
3. A fan is used to blow air over a hot surface to cool it faster. What type of convection is this? → **Forced convection**
4. What is the emissivity of a perfect black body? → **1 (ε = 1)**
