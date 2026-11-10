# Industrial Engineering — PERT/CPM, Inventory Control, Break-Even Analysis (औद्योगिक अभियांत्रिकी)

## PERT vs CPM — Fundamental Distinction (extremely high-yield)

Both are **network-based project-scheduling techniques**, but differ in a key way:

| | PERT (Program Evaluation & Review Technique) | CPM (Critical Path Method) |
|---|---|---|
| Time estimate | **Probabilistic** — three time estimates per activity (optimistic, most likely, pessimistic) | **Deterministic** — single, well-known time estimate per activity |
| Best suited for | **R&D, new/uncertain projects** where activity durations aren't well known | **Repetitive/construction-type projects** with well-established activity durations |
| Focus | **Time** (uncertainty analysis) | **Time AND cost** (includes cost-time trade-off / crashing) |
| Origin | US Navy (Polaris missile project) | DuPont |

## PERT — Expected Time Formula

**te (expected time) = (to + 4·tm + tp) / 6**

- to = optimistic time, tm = most likely time, tp = pessimistic time
- This is a **weighted average**, giving 4× weight to the most-likely estimate — a very frequently tested formula

**Variance of an activity, σ² = [(tp − to)/6]²**

## Critical Path — Definition (very high-yield)

The **longest path** through the project network from start to finish — determines the **minimum possible project duration**. Any delay in a critical-path activity delays the entire project; activities NOT on the critical path have **slack/float** (can be delayed somewhat without affecting overall completion).

## Float/Slack

**Total Float = Latest Start (LS) − Earliest Start (ES) = Latest Finish (LF) − Earliest Finish (EF)**

- **Critical path activities have ZERO total float** — this is the defining test for identifying the critical path in a network diagram.

## Inventory Control — Economic Order Quantity (EOQ) (extremely high-yield formula)

The order quantity that **minimizes total inventory cost** (balancing ordering cost against holding/carrying cost):

**EOQ = √(2 · D · Co / Ch)**

- D = annual demand (units/year)
- Co = ordering cost per order
- Ch = holding/carrying cost per unit per year

At EOQ, **ordering cost per year = holding cost per year** — the two cost curves intersect at the minimum total-cost point (a key conceptual fact, since EOQ is derived by minimizing their sum).

## Break-Even Analysis (very high-yield formula)

The point at which **total revenue = total cost** — i.e., no profit, no loss.

**Break-Even Point (in units) = Fixed Cost / (Selling Price per unit − Variable Cost per unit)**

- The denominator (Selling Price − Variable Cost) is called the **"contribution margin"** per unit
- Below BEP → loss; above BEP → profit
- **Break-Even Point (in ₹ sales value) = Fixed Cost / (Contribution Margin Ratio)**, where Contribution Margin Ratio = Contribution / Selling Price

## Most Important Facts to Remember

- **PERT = probabilistic (3 time estimates), used for uncertain/R&D projects. CPM = deterministic (1 time estimate), used for repetitive projects with known durations, and includes cost-time trade-off.**
- **te = (to + 4tm + tp)/6** — PERT expected-time formula, a near-guaranteed MCQ.
- **Critical path = longest path = zero total float** — the single most-tested network-analysis fact.
- **EOQ = √(2DCo/Ch)** — minimizes total inventory cost; at EOQ, ordering cost = holding cost.
- **Break-even units = Fixed Cost / (Selling Price − Variable Cost)** — variable cost per unit and fixed cost (total) must not be confused in the formula.

## Practice Questions

1. Which project-scheduling technique uses three time estimates (optimistic, most likely, pessimistic) per activity? → **PERT**
2. What is the defining characteristic of activities on the critical path, in terms of float? → **Zero total float**
3. Annual demand = 10,000 units, ordering cost = ₹100/order, holding cost = ₹2/unit/year. Find EOQ. → **EOQ = √(2×10000×100/2) = √1,000,000 = 1000 units**
4. Fixed cost = ₹50,000, selling price = ₹100/unit, variable cost = ₹60/unit. Find the break-even quantity. → **BEP = 50,000/(100−60) = 1,250 units**
