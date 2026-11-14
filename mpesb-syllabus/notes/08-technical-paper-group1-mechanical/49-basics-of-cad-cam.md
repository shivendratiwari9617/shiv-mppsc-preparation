# Basics of CAD/CAM (CAD/CAM के बुनियादी सिद्धांत)

## CAD — Computer-Aided Design

The use of **computer software** to create, modify, analyze, and document engineering designs — replaces traditional manual drafting (with a drawing board and pencil, per points 40-41) with digital modelling tools.

### Key CAD Concepts

| Concept | Description |
|---|---|
| **2D Drafting** | Digital creation of orthographic drawings (front/top/side views, per point 40), replacing manual drafting |
| **3D Modelling** | Creating a full three-dimensional digital representation of a part/assembly |
| **Wireframe Model** | Represents an object using only its **edges and vertices** (lines) — no surface or solid information, so it is ambiguous (cannot distinguish solid from hollow, or determine visible/hidden surfaces automatically) — the simplest and earliest form of 3D CAD representation |
| **Surface Model** | Represents the object's **outer surfaces/skin** explicitly (a collection of surface patches) — better than wireframe for visualizing complex curved shapes and generating machining toolpaths, but does not inherently define solid interior/mass properties |
| **Solid Model** | The most complete representation — fully defines the enclosed volume (interior and exterior), enabling automatic calculation of **mass properties** (volume, mass, centroid, moment of inertia), automatic detection of hidden lines/interference, and is the standard modern approach for most mechanical design work |

### Solid Modelling Techniques
- **CSG (Constructive Solid Geometry)**: builds complex solids by combining simple primitive shapes (cube, cylinder, sphere) using Boolean operations (**Union, Subtraction, Intersection**).
- **B-Rep (Boundary Representation)**: defines a solid by explicitly describing its bounding surfaces (faces, edges, vertices) and their connectivity — the more common underlying representation in most modern CAD software.
- **Parametric/Feature-Based Modelling**: the dominant modern approach — a model is built as a sequence of **features** (extrude, revolve, fillet, hole, etc.), each controlled by **parameters/dimensions** that can be changed later, automatically updating the entire model (and any dependent drawings) — enables rapid design iteration/modification.

## CAM — Computer-Aided Manufacturing

The use of computer software to **plan, control, and manage manufacturing operations** — most directly, generating the **toolpaths and machine instructions** needed to actually produce a part (often, though not always, directly from a CAD model) on CNC (Computer Numerical Control) machine tools.

### CAM's Core Function
Converts a CAD geometric model into a series of instructions (a **part program**, typically in **G-code**, see below) that a CNC machine tool can execute to physically machine the part — including toolpath generation, cutting-parameter selection (speed/feed), and simulation/verification of the machining process before actual production.

## CNC — Computer Numerical Control (the execution layer, closely tied to CAM)

### CNC — Basic Definition
A machine tool (lathe, milling machine, etc.) whose motion (of the tool and/or workpiece along its axes) is controlled automatically by a **computer**, following a stored digital program — the modern successor to manually-operated conventional machine tools (and to earlier NC — Numerical Control — systems that used punched tape/cards instead of a computer).

### G-Code & M-Code
- **G-Code (Preparatory Codes)**: instructions controlling **geometric/motion** functions — e.g., rapid positioning, linear/circular interpolation (tool movement path), a widely recognized example being **G01 (linear interpolation/feed move)**.
- **M-Code (Miscellaneous Codes)**: instructions controlling **auxiliary/machine functions** not directly related to tool geometry — e.g., spindle on/off, coolant on/off, program stop.

### Axes of a CNC Machine
Machine motion is defined along standard axes — **X, Y, Z** (linear, translational) and, on more capable machines, **A, B, C** (rotary, about the X, Y, Z axes respectively) — a machine's capability is often described by how many axes it can control simultaneously (e.g., "3-axis," "5-axis" CNC machining centre); more axes allow machining more complex geometry in fewer setups.

### Advantages of CNC over Conventional Machine Tools
- Much higher **precision, repeatability, and consistency** (removes operator-to-operator variation).
- Capable of machining **highly complex geometries** difficult or impossible manually.
- Higher **productivity** for batch/repeat production, once the program is set up.
- Reduced dependence on highly-skilled manual machine operators (though skilled CNC programming/setup expertise is still needed).
- Disadvantage: **higher initial cost**, and programming/setup time can make it less economical for true one-off/very-low-volume work compared to a skilled manual machinist.

## CIM — Computer Integrated Manufacturing (brief context)
The broader concept of integrating **CAD, CAM, and other business/production functions** (planning, scheduling, quality control, inventory) into a single, unified computer-controlled system — CAD/CAM are core building-block components within the larger CIM framework.

## Most Important Facts to Remember

- **CAD** = designing (creating the geometric model); **CAM** = manufacturing (generating toolpaths/instructions to actually produce the part) — CAD/CAM together form a continuous digital workflow from design to production.
- **Wireframe** (edges/vertices only, ambiguous) → **Surface** (outer skin defined) → **Solid model** (fully defines volume, enables mass-property calculation) — increasing order of completeness in 3D representation.
- **Parametric/Feature-based modelling** is the dominant modern CAD approach, allowing rapid design changes by editing dimensions/parameters.
- **G-code** = geometric/motion instructions (tool path); **M-code** = auxiliary/machine functions (spindle, coolant, etc.) — the two code categories in a CNC part program.
- CNC machines are described by their number of controllable **axes** (X, Y, Z linear; A, B, C rotary) — more axes = more complex geometry machinable in fewer setups.

## Practice Questions

1. What is the fundamental difference between the function of CAD and CAM? → **CAD is used to create/design the geometric model; CAM is used to generate the toolpaths/instructions needed to actually manufacture the part**
2. Which 3D CAD representation type allows automatic calculation of mass, volume, and centroid? → **Solid model**
3. What does "G-code" control in a CNC part program, and what does "M-code" control? → **G-code controls geometric/motion (tool positioning/path) functions; M-code controls auxiliary/miscellaneous machine functions (e.g., spindle on/off, coolant)**
4. What is the dominant modern CAD modelling approach, where a model is built from a sequence of dimension-controlled operations that can be edited later? → **Parametric (feature-based) modelling**
