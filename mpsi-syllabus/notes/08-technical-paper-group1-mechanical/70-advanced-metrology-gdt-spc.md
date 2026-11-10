# Advanced Metrology — GD&T, SPC, CMM (उन्नत मेट्रोलॉजी)

## Geometric Dimensioning & Tolerancing (GD&T) — Purpose

Controls not just the **size** of a feature (covered by ordinary limits/fits/tolerances) but its **form, orientation, location, and runout** — because two parts can be within size tolerance yet still not assemble/function correctly if their geometry is distorted.

## GD&T Characteristic Categories (high-yield classification)

| Category | Characteristics Controlled |
|---|---|
| **Form** | Straightness, Flatness, Circularity (roundness), Cylindricity |
| **Orientation** | Parallelism, Perpendicularity, Angularity |
| **Location** | Position (true position), Concentricity, Symmetry |
| **Runout** | Circular runout, Total runout |
| **Profile** | Profile of a line, Profile of a surface (can control form, orientation, or location depending on datum reference) |

- **Form tolerances** (straightness, flatness, circularity, cylindricity) are the only category that does **not** require a datum reference — they control a feature purely relative to itself.
- **Datum**: a theoretically exact reference (point/line/plane) used to establish the origin and orientation for measuring other geometric characteristics.

## Statistical Process Control (SPC) — Purpose

Uses **statistical methods to monitor and control a manufacturing process** in real time — distinguishing normal ("common cause") variation from abnormal ("special/assignable cause") variation, allowing corrective action **before** defective parts are produced (rather than just inspecting finished parts afterward).

## Control Charts — Variables vs Attributes (very high-yield distinction)

| Chart Type | Used For | Example |
|---|---|---|
| **X̄ (X-bar) chart and R chart** | **Variable** (measurable, continuous) data | Monitoring average and range of a measured dimension (e.g., shaft diameter) |
| **p-chart** | **Attribute** data — fraction/proportion defective, sample size can vary | Fraction of defective items per batch |
| **c-chart** | **Attribute** data — count of defects per unit, constant sample size | Number of surface defects per painted panel |

## Process Capability — Cp and Cpk (extremely high-yield formulas)

**Cp = (USL − LSL) / 6σ**

- USL/LSL = Upper/Lower Specification Limits, σ = process standard deviation
- Measures whether the process **spread** fits within the specification width — **does NOT account for whether the process is centered**

**Cpk = min [ (USL − μ)/3σ , (μ − LSL)/3σ ]**

- μ = process mean
- Accounts for **process centering** as well as spread — this is the key difference from Cp

### Cp vs Cpk — Critical Distinction (classic MCQ trap)

- **Cp = Cpk only when the process is perfectly centered** between USL and LSL.
- **Cpk is always ≤ Cp** — if a process is off-center, Cpk drops below Cp even though the spread (Cp) hasn't changed. A high Cp with a low Cpk indicates a **capable but poorly-centered** process.
- General benchmark: **Cp/Cpk ≥ 1.33** is often considered a "capable" process in industry.

## Advanced Measuring Instruments

- **Coordinate Measuring Machine (CMM)**: a probe (contact or non-contact) moves in 3 axes (X, Y, Z) to precisely capture the coordinates of points on a part's surface — used for complex 3D geometric inspection, far more versatile than manual instruments
- **Laser interferometer**: uses the interference of laser light waves to measure length/displacement with **extremely high precision** (used for calibrating machine tools and other precision measuring equipment — a reference-standard-level instrument)
- **Optical flat**: a flat glass/quartz disc used with monochromatic light to check the **flatness** of a surface via interference fringes
- **Sine bar**: a precision tool (with gauge blocks) used to measure or set **angles** very accurately, based on trigonometric (sine) principles

## Most Important Facts to Remember

- **GD&T controls form, orientation, location, and runout** — beyond simple size tolerance; **form tolerances need no datum**, all other categories do.
- **X-bar/R charts = variable data; p-chart/c-chart = attribute data** — a frequently tested SPC distinction.
- **Cp = (USL−LSL)/6σ** (spread only); **Cpk** additionally accounts for **centering** — **Cpk ≤ Cp always**, equal only when perfectly centered.
- **CMM** = versatile 3D coordinate-based inspection; **laser interferometer** = highest-precision length/displacement reference measurement; **sine bar** = precision angle measurement.

## Practice Questions

1. Which GD&T characteristic category does NOT require a datum reference? → **Form** (straightness, flatness, circularity, cylindricity)
2. Which control chart type is used for "fraction defective" data with varying sample size? → **p-chart**
3. If Cp = 1.5 but Cpk = 0.9 for a process, what does this indicate? → **The process has adequate spread/capability (Cp) but is poorly centered within the specification limits** (Cpk accounts for centering, Cp does not)
4. Which precision instrument uses light-wave interference to measure length with extremely high accuracy? → **Laser interferometer**
