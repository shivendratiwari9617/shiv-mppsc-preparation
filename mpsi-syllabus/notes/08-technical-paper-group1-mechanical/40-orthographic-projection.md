# Orthographic Projection (ऑर्थोग्राफिक प्रोजेक्शन)

## Engineering Drawing — Why Orthographic Projection?

A single pictorial (3D, e.g., isometric) view cannot fully/unambiguously convey all dimensions of a complex object. **Orthographic projection** represents a 3D object using multiple **2D views**, each obtained by projecting the object onto a plane **perpendicular to the line of sight**, with the observer positioned at infinity (parallel projection lines) — giving true shape and size on each individual view.

## Principal Planes of Projection

| Plane | Abbreviation | View obtained |
|---|---|---|
| **Vertical Plane** | VP | **Front View (Elevation)** |
| **Horizontal Plane** | HP | **Top View (Plan)** |
| **Profile/Side Plane** | PP | **Side View (End View)** |

These three mutually perpendicular planes together form a complete orthographic representation of most objects.

## First-Angle vs Third-Angle Projection — the Critical Distinction (extremely high-yield)

The object is imagined placed in one of the four quadrants formed by the intersecting VP and HP; only the **first and third** quadrants are used in standard practice.

| | First-Angle Projection | Third-Angle Projection |
|---|---|---|
| Object position | Between the **observer and the plane of projection** | Plane of projection is between the **observer and the object** (object viewed "through" a transparent plane) |
| View placement logic | Each view is placed on the side **opposite** to the direction from which it is viewed (e.g., **Top View is placed BELOW the Front View**) | Each view is placed on the **same side** as the direction from which it is viewed (e.g., **Top View is placed ABOVE the Front View**) |
| Standard/usage region | **India, UK, and most of Europe/Asia (BIS/SP-46 standard)** | **USA, Canada** (ASME/ANSI standard) |
| Symbol (a truncated cone symbol used on drawings to indicate the convention) | One specific cone orientation | The mirror-image cone orientation |

**Key memorized fact: First-angle projection is the standard used in India** (per BIS — Bureau of Indian Standards) — extremely relevant for any Indian engineering-drawing exam question, and this is the convention assumed by default unless a drawing explicitly states otherwise.

## The Three Principal Views — Placement in First-Angle Projection

- **Front View (Elevation)**: obtained by projecting onto the Vertical Plane — placed as the reference, central view.
- **Top View (Plan)**: obtained by projecting onto the Horizontal Plane — placed **directly below** the Front View.
- **Side View (End View)**: obtained by projecting onto the Profile Plane — placed to the **side** (commonly, the Left-Hand Side View is placed on the **right** of the Front View, and the Right-Hand Side View is placed on the **left**, in first-angle projection — this "view placed opposite to the direction it represents" logic is consistent with the general first-angle rule).

## Types of Lines Used in Engineering Drawing (as per convention — frequently tested)

| Line Type | Appearance | Use |
|---|---|---|
| **Continuous thick (Visible/Outline)** | Solid, thick | Visible edges/outlines of the object |
| **Continuous thin** | Solid, thin | Dimension lines, extension/projection lines, hatching/section lines, leader lines |
| **Dashed (Hidden) line** | Short dashes, medium thickness | Hidden/invisible edges (not directly visible from that viewing direction) |
| **Chain thin (Long dash-dot)** | Alternating long dash and dot | Centre lines (axis of symmetry, centre of holes/circles) |
| **Chain thick (or chain thin with thick ends)** | — | Cutting plane line (indicates where a sectional view is taken, see point 41) |
| **Continuous thin, freehand (or zigzag)** | Wavy/zigzag | Break lines (indicating a shortened/broken representation of a long uniform object) |

## Projection of Points, Lines & Solids (brief conceptual overview)

- **Projection of Points**: a point in 3D space is represented by its projections onto HP, VP, and PP — its position is fully defined by these projections combined with reference-line distances.
- **Projection of Solids**: orthographic views of 3D solids (prisms, pyramids, cylinders, cones) in various orientations (axis vertical, horizontal, inclined) — a core engineering-drawing skill, built up from points and lines.

## Isometric vs Orthographic — Quick Distinction
- **Orthographic**: multiple 2D views, each true shape/size, but requires mental combination of views to visualize the full 3D form.
- **Isometric**: a single pictorial 3D-look view (all three axes drawn at equal angles, 120° apart), gives an immediate visual impression of the object's overall shape, but individual dimensions are not shown in true, undistorted size on inclined/receding faces.

## Most Important Facts to Remember

- **India follows First-Angle Projection** (BIS standard) — the single most important region-specific fact in this topic.
- **First-angle**: Top View placed **below** Front View. **Third-angle**: Top View placed **above** Front View — the core placement-logic distinction.
- **Continuous thick line** = visible outline; **Dashed line** = hidden edge; **Chain (long dash-dot) line** = centre line — the three most commonly tested line types.
- The three standard views are **Front View (VP), Top View (HP), Side View (PP)** — each obtained by projection onto its respective mutually perpendicular plane.

## Practice Questions

1. Which projection system (first-angle or third-angle) is the standard followed in India, per BIS? → **First-angle projection**
2. In first-angle projection, is the Top View placed above or below the Front View? → **Below**
3. Which type of line is used to represent a hidden (invisible) edge of an object in an orthographic drawing? → **Dashed line (hidden line)**
4. What line type is used to represent the centre/axis of a hole or a symmetric feature? → **Chain thin line (long dash-dot, i.e., centre line)**
