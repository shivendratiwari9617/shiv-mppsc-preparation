# Laws of Thermodynamics — Zeroth, First & Second Law (ऊष्मागतिकी के नियम)

## Basic Definitions

- **System**: The quantity of matter/region under study, separated from the rest (surroundings) by a boundary.
- **Types of Systems**: **Closed system** (mass fixed, energy can cross boundary), **Open system** (both mass and energy cross boundary, e.g., turbines, compressors — also called control volume), **Isolated system** (neither mass nor energy crosses boundary).
- **Thermodynamic Process**: Isothermal (constant T), Isobaric (constant P), Isochoric/Isometric (constant V), Adiabatic (no heat transfer, Q=0), Isentropic (reversible adiabatic, constant entropy).
- **State function** vs **Path function**: State functions (P, V, T, internal energy U, enthalpy H, entropy S) depend only on the state, not the path taken; path functions (heat Q, work W) depend on the process/path followed.

## Zeroth Law of Thermodynamics

**"If two bodies are each in thermal equilibrium with a third body, then they are in thermal equilibrium with each other."**

- This law is the basis for the concept of **temperature** and for the working of **thermometers** — it was formulated *after* the first and second laws, hence numbered "zeroth" as it is logically more fundamental.

## First Law of Thermodynamics (Law of Conservation of Energy)

**"Energy can neither be created nor destroyed, only converted from one form to another."**

For a closed system undergoing a cyclic process: **∮dQ = ∮dW** (net heat supplied = net work done, over a complete cycle)

For a non-cyclic process: **Q = ΔU + W**

where Q = heat supplied to the system, ΔU = change in internal energy, W = work done **by** the system.

### Key consequence
The first law establishes **Internal Energy (U)** as a property (state function) of the system — it does not, by itself, indicate the *direction* in which a process can proceed (that role belongs to the second law).

### Limitation of the First Law
It does not explain why heat flows from hot to cold and not the reverse, nor does it forbid a process (like 100% conversion of heat into work in a cycle) that is actually impossible — this gap is filled by the **Second Law**.

## Second Law of Thermodynamics

Establishes the **direction** of natural processes and the **limits on efficiency** of heat engines. Two classical equivalent statements:

### Kelvin-Planck Statement (Heat Engine form)
**"It is impossible to construct a heat engine operating in a cycle that produces no effect other than extracting heat from a single reservoir and converting it entirely into work."**
→ i.e., **100% efficient heat engine is impossible**; some heat must always be rejected to a sink.

### Clausius Statement (Refrigerator/Heat Pump form)
**"It is impossible to construct a device operating in a cycle that produces no effect other than the transfer of heat from a colder body to a hotter body."**
→ i.e., heat cannot flow spontaneously from cold to hot **without external work input** (this is exactly what a refrigerator/heat pump does, using compressor work).

### Equivalence of the Two Statements
The Kelvin-Planck and Clausius statements are **logically equivalent** — violation of one implies violation of the other (a standard proof-by-contradiction result in thermodynamics courses).

## Perpetual Motion Machines (PMM) — Directly Tied to the Laws

| Type | Violates | Description |
|---|---|---|
| **PMM of the First Kind (PMM1)** | First Law | A machine that produces work continuously without any energy input (creates energy from nothing) — impossible |
| **PMM of the Second Kind (PMM2)** | Second Law | A machine that extracts heat from a single reservoir and converts it entirely into work with 100% efficiency, in a cycle — impossible (this is exactly the Kelvin-Planck statement in machine form) |

## Entropy (S) — Consequence of the Second Law

A property (state function) that is a measure of the **unavailability/disorder** of a system's energy, or the degree of irreversibility of a process.

- For a **reversible** process: ΔS = ∫dQ/T
- For any process in an **isolated system**: **entropy always increases or remains constant, never decreases** (Principle of Increase of Entropy) — this is the quantitative statement of the second law's directionality.
- Entropy of the universe is continuously increasing (all real processes are irreversible to some degree).

## Reversible vs Irreversible Process

| | Reversible | Irreversible |
|---|---|---|
| Definition | Can be reversed exactly, restoring both system and surroundings to original state, with no trace left | Cannot be exactly reversed without leaving some permanent change |
| Occurrence | An idealization, never truly achieved in practice | All real/natural processes are irreversible |
| Efficiency | Gives maximum possible (theoretical) efficiency for a given process | Always lower efficiency than the reversible ideal |

## Most Important Facts to Remember

- **Zeroth Law** → basis of temperature measurement; **First Law** → energy conservation (Q = ΔU + W); **Second Law** → direction of processes, limits on efficiency, basis of entropy.
- **Kelvin-Planck statement**: no engine can be 100% efficient (heat engine form). **Clausius statement**: heat cannot flow cold→hot without work input (refrigerator form). These two are equivalent.
- **PMM1 violates the First Law** (creates energy); **PMM2 violates the Second Law** (100% heat-to-work conversion) — a very frequently tested distinction.
- Entropy of an isolated system **never decreases** — this is the mathematical form of the second law.
- All real processes are **irreversible**; a perfectly reversible process is only a theoretical ideal.

## Practice Questions

1. Which law of thermodynamics forms the basis for temperature measurement via thermometers? → **Zeroth Law**
2. A hypothetical machine claims to produce continuous work output with zero energy input. Which law does it violate, and what is such a machine called? → **First Law; PMM of the First Kind (PMM1)**
3. What does the Kelvin-Planck statement of the second law assert about heat engines? → **No heat engine can convert heat from a single reservoir entirely into work with 100% efficiency, in a cyclic process**
4. What happens to the entropy of an isolated system undergoing a spontaneous (irreversible) process? → **It increases**
