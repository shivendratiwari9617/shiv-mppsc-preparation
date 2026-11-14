# Fluid Properties & Pressure Measurement (द्रव के गुण व दाब मापन)

## Fluid — Basic Definition

A substance that **continuously deforms (flows)** under the action of even a very small **shear stress**, however small — this is the defining distinction between a fluid and a solid (a solid can resist shear stress up to some limit without continuous deformation).

## Key Fluid Properties

| Property | Definition | Unit |
|---|---|---|
| **Density (ρ)** | Mass per unit volume | kg/m³ (water ≈ 1000 kg/m³) |
| **Specific Weight (w or γ)** | Weight per unit volume, w = ρg | N/m³ |
| **Specific Volume** | Volume per unit mass (reciprocal of density) | m³/kg |
| **Specific Gravity (Relative Density)** | Ratio of density of fluid to density of a reference fluid (water for liquids, air for gases) | Dimensionless |
| **Viscosity (μ)** | Measure of a fluid's resistance to shear/flow (internal friction between fluid layers) | N·s/m² (Pa·s) or Poise |
| **Kinematic Viscosity (ν)** | ν = μ/ρ | m²/s or Stokes |
| **Compressibility** | Measure of change in volume under pressure — liquids nearly incompressible, gases highly compressible |
| **Surface Tension (σ)** | Force per unit length acting along the free surface of a liquid, due to intermolecular cohesive forces | N/m |
| **Capillarity** | Rise or fall of liquid in a narrow tube, due to combined effect of surface tension, cohesion, and adhesion |

## Newton's Law of Viscosity

**τ = μ (du/dy)**

where τ = shear stress, du/dy = velocity gradient (rate of shear strain), μ = dynamic (absolute) viscosity — the defining relationship for a **Newtonian fluid** (viscosity is constant, independent of the rate of shear; water, air, and most common fluids are Newtonian).

### Non-Newtonian Fluids
Fluids where viscosity changes with the rate of shear (e.g., blood, paint, toothpaste, quicksand) — do not follow Newton's law of viscosity linearly.

## Types of Fluids (by compressibility & viscosity)

| Type | Description |
|---|---|
| **Ideal Fluid** | Incompressible and has **zero viscosity** (a theoretical idealization, doesn't exist in reality) |
| **Real Fluid** | Possesses viscosity, offers resistance to flow — all actual fluids |
| **Incompressible Fluid** | Density remains constant regardless of pressure (typical assumption for liquids) |
| **Compressible Fluid** | Density changes significantly with pressure (typical for gases, especially at high speed) |

## Pressure — Basic Concepts

**Pressure (P) = Force / Area**, SI unit: **Pascal (Pa) = N/m²**

### Pascal's Law
**Pressure applied at any point in a confined, incompressible fluid at rest is transmitted equally and undiminished in all directions** — the fundamental principle behind hydraulic systems (hydraulic jack, hydraulic press, hydraulic brakes).

### Types of Pressure

| Type | Definition |
|---|---|
| **Absolute Pressure** | Pressure measured relative to a **perfect vacuum (zero pressure)** |
| **Gauge Pressure** | Pressure measured relative to **atmospheric pressure** (what most pressure gauges read) |
| **Atmospheric Pressure** | Pressure exerted by the atmosphere at a given location; standard value = **101.325 kPa** (≈ 1.013 bar ≈ 760 mm of Hg ≈ 10.33 m of water) |
| **Vacuum Pressure** | The amount by which pressure is **below** atmospheric pressure (negative gauge pressure) |

**Key relation: Absolute Pressure = Atmospheric Pressure + Gauge Pressure** — one of the most frequently used formulas.

## Hydrostatic Pressure (pressure at depth in a static fluid)

**P = ρgh**

where ρ = fluid density, g = 9.81 m/s², h = depth below the free surface — pressure increases linearly with depth and is independent of the container's shape (**Hydrostatic Paradox**).

## Pressure Measurement Devices

| Device | Principle |
|---|---|
| **Manometer (Simple/U-tube)** | Balances the unknown fluid pressure against a column of liquid (mercury/water) — reads pressure via the height difference of the liquid column |
| **Differential Manometer** | Measures the **pressure difference** between two points (e.g., across an orifice or venturi meter) |
| **Bourdon Tube Pressure Gauge** | Mechanical device — a curved, flattened tube that tends to straighten under internal pressure, the deflection is mechanically linked to a pointer/dial — the most common type of gauge seen on machinery, compressors, boilers |
| **Barometer** | Measures **atmospheric pressure** specifically (using a column of mercury in a closed tube — Torricelli's experiment) |
| **Piezometer** | Simplest device — a vertical open tube connected to the point of measurement; only suitable for measuring positive, moderate gauge pressure in liquids |

## Most Important Facts to Remember

- Fluid is defined by its inability to resist **shear stress** without continuous deformation — however small the shear stress.
- **Newton's Law of Viscosity: τ = μ(du/dy)** — defines a Newtonian fluid.
- **Absolute Pressure = Atmospheric Pressure + Gauge Pressure** — extremely frequently used relation.
- **Pascal's Law**: pressure in a confined fluid is transmitted equally in all directions — basis of all hydraulic machines.
- **Hydrostatic pressure: P = ρgh** — depends only on depth and fluid density, not on the shape/size of the container (Hydrostatic Paradox).
- Standard atmospheric pressure = **101.325 kPa = 1.013 bar = 760 mm Hg**.
- **Bourdon tube gauge** = most common mechanical pressure gauge; **Barometer** = specifically measures atmospheric pressure.

## Practice Questions

1. State Pascal's Law in one line. → **Pressure applied at any point in a confined fluid at rest is transmitted equally and undiminished in all directions.**
2. What is the relationship between absolute pressure, gauge pressure, and atmospheric pressure? → **Absolute = Atmospheric + Gauge**
3. Find the pressure at a depth of 5 m in water (ρ = 1000 kg/m³, g = 9.81 m/s²). → P = ρgh = 1000×9.81×5 = **49,050 Pa ≈ 49.05 kPa**
4. Which instrument is used specifically to measure atmospheric pressure? → **Barometer**
