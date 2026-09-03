# Production Planning & Control — PPC (उत्पादन योजना व नियंत्रण)

## Production Planning & Control (PPC) — Basic Definition

The management function/system that **coordinates and directs all manufacturing activities**, ensuring the right products are produced in the **right quantity, at the right quality, at the right time, at the lowest cost** — bridges the gap between a production plan and its actual on-the-shop-floor execution.

## Objectives of PPC
- Ensure smooth, uninterrupted production flow.
- Optimum utilization of resources (machines, materials, manpower).
- Meet delivery deadlines/customer commitments.
- Minimize production costs, work-in-progress inventory, and idle time.
- Maintain the desired quality standard.

## The Main Functions/Phases of PPC (a widely used classification — extremely high-yield)

| Phase | Function |
|---|---|
| **Planning (Pre-Planning)** | Includes: **Product Development & Design**, **Process Planning/Routing** (deciding the sequence of operations/machines/tools a part must go through), **Material Planning**, **Estimating/Scheduling of resources** |
| **Routing** | Determines the **path/sequence** of operations (which machines, in what order) a product/part must follow through the production process — essentially "what path the work will take" |
| **Scheduling** | Determines **WHEN** each operation should start and finish (timing) — fixing the timetable for production activities, considering machine/labour availability |
| **Loading** | Assigning/allocating specific jobs to specific machines/work centres, within the time slots fixed by scheduling — essentially checking that the scheduled workload doesn't exceed available machine/labour capacity |
| **Dispatching** | The actual **"go-ahead" / release of work orders** to the shop floor, authorizing operations to begin as per the schedule — the action phase that converts the plan into actual physical work starting |
| **Follow-up (Expediting)** | Monitoring actual progress **against** the plan/schedule, identifying and resolving delays/bottlenecks, ensuring the plan is actually being achieved in practice |
| **Inspection** | Quality checking, ensuring the produced items meet specified quality standards |

**Simple memorized sequence: Routing (path) → Scheduling (timing) → Loading (capacity allocation) → Dispatching (release/go-ahead) → Follow-up (monitor/correct) → Inspection (quality check).**

## Types of Production Systems (a foundational classification, directly affects how PPC is applied)

| Type | Description |
|---|---|
| **Job Production (Job Shop)** | Single units or small batches of a highly **customized/unique** product — high variety, low volume (e.g., custom machinery, ships, one-off prototypes); routing/scheduling is highly flexible/complex, since each job may follow a different path |
| **Batch Production** | Identical products manufactured in **discrete, finite batches/lots**, with different batches of different products interspersed on the same equipment — moderate variety, moderate volume (e.g., bakery goods, pharmaceuticals, many general engineering components) |
| **Mass (Flow) Production** | Large volumes of a **highly standardized, identical** product, produced continuously on dedicated equipment (typically an assembly line) — low variety, very high volume (e.g., automobile assembly lines, consumer electronics) |
| **Continuous (Process) Production** | Production runs essentially continuously/uninterrupted, typically for fluid/bulk commodities that flow through the process (e.g., oil refining, cement, chemicals, steel) — least flexible, but most efficient for that single product/process |

**Key trend: as you move from Job → Batch → Mass → Continuous production, product VARIETY decreases while production VOLUME (per product) and standardization increase — a very frequently tested classification and its underlying trade-off.**

## Master Production Schedule (MPS) & Material Requirements Planning (MRP) — brief modern-context mention
- **MPS**: a detailed plan stating **what** products, **how many**, and **when**, are to be produced over a planning horizon — the primary driving input for detailed production planning.
- **MRP (Material Requirements Planning)**: a computerized planning system that calculates the exact **materials and components** needed, and **when**, to meet the MPS — works backward from the finished product schedule (using the bill of materials) to determine timed procurement/production of every sub-component.

## Gantt Chart — a Classic PPC Scheduling Tool
A simple, widely-used **bar chart** representing a production schedule, showing planned start/finish times for each job/activity against a horizontal time axis — allows easy visualization of the schedule, and (in its "progress" form) easy comparison of actual progress against the plan, at a glance.

## Most Important Facts to Remember

- **PPC functional sequence: Routing (decides path) → Scheduling (decides timing) → Loading (allocates capacity) → Dispatching (authorizes/releases work) → Follow-up (monitors/corrects) → Inspection (checks quality)** — the single most frequently tested sequence in this topic.
- **Routing** answers "which machines, what sequence"; **Scheduling** answers "when" — a commonly confused pair.
- Production system types, in order of **decreasing variety / increasing volume-standardization**: **Job Production → Batch Production → Mass Production → Continuous Production.**
- **Gantt Chart**: a simple bar-chart tool for visualizing and tracking production schedules against actual progress.
- The overall goal of PPC: right product, right quantity, right quality, right time, at lowest cost.

## Practice Questions

1. In the standard PPC functional sequence, what comes immediately after "Routing"? → **Scheduling**
2. What is the key difference between "Routing" and "Scheduling" in production planning? → **Routing determines the sequence/path of operations (which machines, in what order); Scheduling determines the timing (when each operation starts/finishes)**
3. Which type of production system involves a single unit or very small batch of a highly customized product? → **Job Production (Job Shop)**
4. What is a Gantt Chart used for? → **Visualizing and tracking a production schedule (planned vs. actual progress) as a bar chart against a time axis**
