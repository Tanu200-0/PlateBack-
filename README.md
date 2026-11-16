# PlateBack

Frontend prototype: a real-time-feeling food rescue app. Donors post surplus food, the app ranks nearby NGOs, and NGOs accept and track pickups.
Everything runs in the browser with mock data. The AI food check and matching are simulated or computed locally.

**Features:** donor form with photo, AI food check (simulated), safety countdown, smart NGO ranking (distance, capacity, food type), auto-escalation after 10s, event mode, live map, status tracker, impact dashboard, Reset demo button.

## Run
```
npm install
npm run dev
```
Open the printed local URL and use phone width for the demo.

## Demo flow
Donor tab: add photo, post. NGO tab: see the pin and best match, accept, mark on the way, mark picked up. Impact tab: watch the counters rise. Use Reset demo to retake.

Stack: React, Vite, Leaflet and OpenStreetMap. NGO names are fictional.
