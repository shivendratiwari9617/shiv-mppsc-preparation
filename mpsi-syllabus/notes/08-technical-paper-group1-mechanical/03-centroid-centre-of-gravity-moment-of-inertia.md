# Centroid, Centre of Gravity & Moment of Inertia (केन्द्रक, गुरुत्व केन्द्र व जड़त्व आघूर्ण)

## Centroid vs Centre of Gravity — Key Distinction (frequently tested)

| | Centroid | Centre of Gravity (C.G.) |
|---|---|---|
| Applies to | Plane areas / lines / geometric figures (2D, no mass) | Physical bodies having mass/weight |
| Definition | Geometric centre of an area/line | Point through which the entire weight of a body acts |
| Depends on | Only geometry (shape) | Mass distribution |

For a **uniform, homogeneous body**, centroid and centre of gravity coincide at the same point.

## Centroid Formulas for Common Plane Figures (measured from a defined base/edge)

| Shape | Centroid location |
|---|---|
| Rectangle (base b, height h) | At b/2, h/2 (geometric centre) |
| Triangle (height h) | h/3 from the base |
| Semicircle (radius R) | 4R/3π from the diametral base |
| Quarter circle (radius R) | 4R/3π from each straight edge |
| Circle | At the geometric centre |

## Centroid by Method of Moments (for composite figures)

For a composite area made of simple shapes:

**x̄ = Σ(Aᵢ·xᵢ) / ΣAᵢ**, **ȳ = Σ(Aᵢ·yᵢ) / ΣAᵢ**

where Aᵢ = area of each part, xᵢ, yᵢ = centroid distance of each part from the reference axis. For a **cut-out/hole**, the area of that part is taken as **negative**.

## Moment of Inertia (M.I.) — जड़त्व आघूर्ण

**Moment of Inertia of an area** about an axis = Σ(a·r²), i.e., sum of (elemental area × square of its distance from the axis). Unit: **m⁴** (for area M.I.) or **kg·m²** (for mass M.I., used in dynamics/rotation problems).

### M.I. of Common Sections (about centroidal axis)

| Section | Moment of Inertia (I) |
|---|---|
| Rectangle (b × d), about centroidal axis parallel to b | **I = bd³/12** |
| Circle (diameter d), about diametral axis | **I = πd⁴/64** |
| Triangle (base b, height h), about base | **I = bh³/12**; about centroidal axis = **bh³/36** |
| Hollow circular section (D outer, d inner) | **I = π(D⁴ − d⁴)/64** |

### Radius of Gyration (k)

**k = √(I/A)**

The distance from the reference axis at which the entire area is imagined to be concentrated so as to give the same moment of inertia.

### Parallel Axis Theorem
Moment of inertia about any axis parallel to the centroidal axis:

**I = I꜀ + A·h²**

(I꜀ = M.I. about centroidal axis, A = area, h = distance between the two parallel axes) — **one of the most frequently asked formulas** in this topic.

### Perpendicular Axis Theorem
For a **plane lamina**, if x and y axes lie in the plane and z-axis is perpendicular to the plane (all three intersecting at one point):

**Izz = Ixx + Iyy**

(Polar moment of inertia = sum of the two rectangular moments of inertia)

## Polar Moment of Inertia (J)

M.I. about an axis perpendicular to the plane of the area, passing through the centroid — relevant in torsion (shaft design):

**J = Ixx + Iyy** (for circular section: **J = πd⁴/32**)

## Most Important Facts to Remember

- Centroid = geometric centre (area only); Centre of Gravity = point of action of weight (mass-dependent) — for uniform bodies, they coincide.
- Rectangle: I = bd³/12 about centroidal axis — the single most commonly used formula (also basis for beam bending calculations, see point 8).
- Circle: I = πd⁴/64 (rectangular axis), J = πd⁴/32 (polar) — polar is exactly **double** the rectangular for a circle.
- **Parallel Axis Theorem: I = I꜀ + Ah²** — always add, never subtract, when moving away from the centroidal axis.
- Perpendicular Axis Theorem applies **only to plane laminas** (2D thin sections).
- Radius of gyration k = √(I/A) — used in column buckling (slenderness ratio = L/k).

## Practice Questions

1. Find the M.I. of a rectangular section 100 mm × 200 mm about its centroidal axis parallel to the 100 mm side.
   → I = bd³/12 = 100×200³/12 = **6.67 × 10⁷ mm⁴**
2. A circular shaft has diameter 50 mm. Find its polar moment of inertia.
   → J = πd⁴/32 = π×50⁴/32 ≈ **6.14 × 10⁵ mm⁴**
3. State the parallel axis theorem formula. → **I = I꜀ + Ah²**
