# Basics of Air Conditioning (वातानुकूलन के मूल सिद्धांत)

## Air Conditioning — Basic Definition

The process of simultaneously controlling the **temperature, humidity, cleanliness (purity), and circulation/distribution** of air within an enclosed space, for either **human comfort** or specific **industrial/process requirements** — a broader concept than simple cooling (refrigeration alone), since AC involves control of multiple air properties together.

## Psychrometry — the Science Behind Air Conditioning
The study of the **properties of moist air** (a mixture of dry air and water vapour) — essential for AC system design/analysis, since both temperature and moisture content must be understood and controlled together.

### Key Psychrometric Terms

| Term | Meaning |
|---|---|
| **Dry Bulb Temperature (DBT)** | The actual air temperature, measured by an ordinary (dry) thermometer |
| **Wet Bulb Temperature (WBT)** | Temperature measured by a thermometer whose bulb is covered with a wetted wick, exposed to moving air — evaporative cooling of the wick lowers the reading below DBT (except at 100% RH, where WBT = DBT); a measure related to the air's humidity/moisture content |
| **Dew Point Temperature (DPT)** | The temperature at which moist air, if cooled at constant pressure (without adding/removing moisture), would just begin to **condense** (form dew/fog) — the point of 100% saturation for that air's actual moisture content |
| **Relative Humidity (RH)** | Ratio of the actual amount of water vapour present in air to the maximum amount the air **could** hold at that same temperature (saturation), expressed as a **percentage** |
| **Specific Humidity (Humidity Ratio)** | Mass of water vapour present per unit mass of **dry** air (kg of water vapour / kg of dry air) |
| **Enthalpy of moist air** | Total heat content of the air-vapour mixture, combining sensible heat (dry-bulb-related) and latent heat (moisture-related) |

### Relationship Between DBT, WBT, and DPT

**DBT ≥ WBT ≥ DPT** (always, for unsaturated air)

**At 100% Relative Humidity (saturated air): DBT = WBT = DPT** (all three temperatures coincide) — a frequently tested specific fact.

## Psychrometric Chart
A graphical chart plotting the relationships between DBT, WBT, RH, specific humidity, dew point, and enthalpy — a fundamental design/analysis tool that allows any two known properties of moist air to be used to read off all the remaining properties graphically.

## Human Comfort — Effective Temperature
A composite index that combines the effects of **dry bulb temperature, humidity, and air velocity** into a single value representing the sensation of warmth/coolness experienced by the human body — reflects that comfort depends on more than temperature alone (e.g., high humidity makes the same temperature feel warmer/more uncomfortable, since it inhibits the body's evaporative cooling via sweat).

## Types of Air Conditioning Systems

| Type | Description |
|---|---|
| **Window (Unitary) AC** | A single, compact, self-contained unit housing all components (compressor, condenser, evaporator), typically fitted in a window/wall opening — suited for a single room |
| **Split AC** | The system is divided into two units: an **indoor unit** (evaporator coil, blower — placed inside the room) and an **outdoor unit** (compressor, condenser — placed outside), connected by refrigerant piping — quieter indoors than a window unit, since the noisy compressor/condenser are outside |
| **Central Air Conditioning** | A single large, central AC plant conditions air for an **entire building**, distributing conditioned air via a network of ducts to multiple rooms/zones — used for large buildings, malls, offices |
| **Packaged AC** | A larger self-contained unit (larger capacity than window/split units) than typical residential systems, used for medium-sized spaces (small offices, shops), often ducted for multiple outlets |

## Summer (Cooling) vs Winter (Heating) Air Conditioning — Basic Process Comparison

| | Summer AC (Cooling & Dehumidifying) | Winter AC (Heating & Humidifying) |
|---|---|---|
| Primary process | **Cooling** (via evaporator/refrigeration cycle) + **Dehumidification** (moisture condenses out as air is cooled below its dew point) | **Heating** (via a heating coil/heater) + often **Humidification** (since heating air alone lowers its relative humidity, dry winter air may need moisture added for comfort) |
| Underlying cycle | Vapour compression refrigeration cycle (point 54) provides the cooling effect | A heating element/coil, or (in some systems) a **heat pump** reversing the refrigeration cycle |

## Load Calculation — Basic Concept (Sensible & Latent Heat Load)

An AC system must handle two types of heat load simultaneously, arising from various sources (occupants, lighting, equipment, sun/solar gain through windows, outside air infiltration):

| Load Type | Description |
|---|---|
| **Sensible Heat Load** | Heat that changes **air temperature** (dry-bulb) without changing its moisture content |
| **Latent Heat Load** | Heat associated with changing the **moisture content** of the air (humidity), without necessarily changing its temperature (e.g., the heat needed to evaporate moisture from occupants' perspiration, or from outside humid air infiltration) |

**Total (Grand Total) Heat Load = Sensible Heat Load + Latent Heat Load** — the AC system (evaporator) must be sized to handle this combined total.

## Most Important Facts to Remember

- **DBT ≥ WBT ≥ DPT always**, and **DBT = WBT = DPT at 100% Relative Humidity (saturation)** — a frequently tested specific fact.
- **Relative Humidity (RH)** = ratio of actual to maximum-possible moisture content at that temperature, as a percentage.
- **Air conditioning controls temperature AND humidity AND air purity/circulation together** — broader than simple refrigeration/cooling alone.
- **Summer AC**: cooling + dehumidification (moisture condenses as air is cooled below dew point). **Winter AC**: heating + often humidification (heating alone reduces RH of the air).
- Total AC load = **Sensible heat load** (temperature-related) + **Latent heat load** (moisture-related).
- **Split AC** separates the noisy compressor/condenser (outdoor unit) from the evaporator/blower (indoor unit) — quieter indoor operation than a window unit.

## Practice Questions

1. What is the relationship between dry bulb temperature, wet bulb temperature, and dew point temperature at 100% relative humidity? → **All three are equal (DBT = WBT = DPT)**
2. What does "Relative Humidity" represent? → **The ratio of the actual water vapour present in air to the maximum the air could hold at that same temperature (saturation), expressed as a percentage**
3. Why does summer air conditioning typically dehumidify the air, in addition to cooling it? → **Because cooling air below its dew point causes excess moisture to condense out, naturally reducing humidity as part of the cooling process**
4. What are the two basic categories of heat load an air conditioning system must handle? → **Sensible heat load (temperature-related) and latent heat load (moisture/humidity-related)**
