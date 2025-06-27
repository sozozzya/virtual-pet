# virtual-pet

The REST API for a virtual pet on Express.js

### 1. Pet Model

The pet has the following characteristics:

- **Name** (set during creation)
- **Age** (increases automatically)
- **Health** (0-100, decreases with time)
- **Hunger** (0-100, increases with time)
- **Mood** (0-100, depends on health and hunger)
- **Status** (alive/sick/dead)

### 2. API Endpoints

#### Basic operations:

- `GET /pet` - get the current status of the pet
- `POST/pet` - create a new pet (name in body)
- `POST/pet/feed` - feed the pet (-30 to hunger, +10 to mood)
- `POST/pet/heal` - treat pet (+20 to health, -10 to hunger)
- `POST/pet/play` - play with pet (+15 to mood, +5 to hunger)

If the pet has died, an error is given during the interaction

### 3. Game mechanics

**Automatic changes (every minute):**

- Age +1
- Health -2 (if hunger is > 70, then -5)
- Hunger +3
- Mood is calculated: `(health + (100 - hunger)) / 2`

**Conditions of death:**

- Health <= 0
- Hunger >= 100

**States:**

- `alive`: health > 30
- `sick`: health <= 30 and > 0
- `dead`: health <= 0 or hunger >= 100

## Tasks with an asterisk ⭐️

- middleware for logging requests
- a Dockerfile has been created for the application
