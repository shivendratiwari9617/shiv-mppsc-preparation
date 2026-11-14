# Analysis of Trusses & Frames (ट्रस व फ्रेम विश्लेषण)

## Truss — Basic Definition

A **truss** is a structure made of slender members (usually straight bars) joined together at their ends (**joints/nodes**) to form a rigid framework — typically triangulated — used to support loads with members primarily in **tension or compression only** (no bending).

### Assumptions in Truss Analysis
1. All members are connected by **frictionless pin joints** (no moment transfer).
2. Loads act **only at the joints**, not along the length of members.
3. Self-weight of members is neglected (or, if considered, is split equally to the two end joints).
4. Each member is a **two-force member** — carries force only along its own axis (either pure tension or pure compression).

## Perfect, Deficient & Redundant Frames

**Relationship: m = 2j − 3** (for a plane truss with a support providing 3 reactions)

where m = number of members, j = number of joints.

| Condition | Type |
|---|---|
| m = 2j − 3 | **Perfect frame** (statically determinate, just-rigid) |
| m < 2j − 3 | **Deficient frame** (unstable, insufficient members) |
| m > 2j − 3 | **Redundant frame** (statically indeterminate, more members than needed) |

## Methods of Truss Analysis

### 1. Method of Joints
Each joint is analyzed individually using equilibrium equations **ΣFx = 0** and **ΣFy = 0**. Since only 2 equations are available per joint, this method starts at a joint with **only 2 unknown member forces** and proceeds joint-by-joint. Best suited when forces in **all** members are required.

### 2. Method of Sections
The truss is cut through an imaginary section passing through **not more than 3 members with unknown forces**, and equilibrium of one resulting part (ΣFx=0, ΣFy=0, ΣM=0 — 3 equations) is used to directly find forces in the cut members. Best suited when force in **only a specific member** is required, without solving the entire truss joint-by-joint.

### 3. Graphical Method (Method of Bow's Notation)
Forces are represented graphically and the resultant/member forces are found by drawing force diagrams (vector polygons) to scale — largely a manual-drafting-era method.

## Sign Convention (Tension vs Compression)

- If a member's force pulls **away** from the joint (arrow points away from the joint when drawn on FBD) → member is in **Tension (+)**.
- If a member's force pushes **into** the joint → member is in **Compression (−)**.

## Zero-Force Members — Important Shortcut Rules

1. If **only two non-collinear members** meet at an unloaded joint, **both are zero-force members**.
2. If **three members** meet at a joint, **two of which are collinear**, and there is no external load at that joint, the **third (non-collinear) member is a zero-force member**, while the two collinear members carry equal force.

These rules let many members be eliminated by inspection before detailed calculation — a common objective-question trick.

## Types of Trusses (common named forms)

| Truss type | Typical use |
|---|---|
| Pratt truss | Bridges — diagonals in tension |
| Howe truss | Bridges/roofs — diagonals in compression |
| Warren truss | Bridges — equilateral triangle pattern |
| King post truss | Small-span roof trusses |
| Queen post truss | Medium-span roof trusses |
| Fink truss | Roof trusses, steep pitch |

## Frame vs Truss

A **frame** differs from a truss in that it may have members subjected to **bending moment** as well (not purely axial force), and may carry loads at points other than joints (e.g., machine frames, building frames with rigid joints).

## Most Important Facts to Remember

- Perfect frame condition: **m = 2j − 3**.
- Method of Joints → use when forces in **all** members needed; Method of Sections → use when force in a **specific** member needed (cut through max. 3 unknowns).
- Zero-force member rules (2 non-collinear members at unloaded joint; 3 members with 2 collinear at unloaded joint) — high-yield shortcut for objective questions.
- Truss members carry only **axial** force (tension/compression), never bending — this is the core assumption distinguishing truss analysis from frame/beam analysis.
- Pin joints are assumed frictionless and moment-free in ideal truss analysis.

## Practice Questions

1. A truss has 8 joints and is simply supported (3 reactions). For a perfect frame, how many members are needed? → m = 2(8) − 3 = **13**
2. At an unloaded joint, two non-collinear members meet. What are their forces? → **Both zero (zero-force members)**
3. Which method is preferred to find the force in only one specific member of a large truss? → **Method of Sections**
