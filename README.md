# Hoppi

<img src="dist/hoppi.svg" alt="Hoppi bunny logo" width="88">

*A little planning. A lot to look forward to.*

Built from a month of traveling across Europe, **Hoppi** brings together the tools I wished I had in one place: planning each day, finding my way, tracking spending, and understanding the places I visited.

An English/Korean travel companion for planning a trip and following it on the go. Built with plain HTML, CSS and JavaScript, with responsive layouts for phones and laptops.

**Live app:** https://stupendous-sunburst-8d2180.netlify.app/

## Features

- Switch the interface, place stories and narration between English and Korean in **Travel tools → Language**.
- Search destinations worldwide, including common Korean city names, and combine multiple destinations in one trip by assigning cities to day ranges.
- Create editable daily itineraries with visit times, durations, reservations, notes and budgets; reorder stops or use table view.
- Generate suggested itineraries within a start/end time, including nearby sights, restaurants and cafés when place data is available. Preview changes before applying them.
- Discover destination-specific routes and use a separate Travel mode to follow the day's stops.
- View maps and open external directions. Google Maps is supported overseas and NAVER Maps in Korea; the default is an OpenStreetMap preview.
- Listen to sourced English/Korean stories for supported places using browser speech synthesis.
- Use packing checklists and a trip expense ledger. Planned stop budgets and actual expenses remain separate, with totals grouped by currency.
- Check weather for the destination, current location or a chosen city; convert currencies and hear phrasebook pronunciation.
- Complete and restore trips, and export trip data as JSON.

## Run locally

Python 3 is sufficient; there is no dependency installation or build step:

```sh
python3 -m http.server 5173 --directory dist
```

Open http://localhost:5173 in your browser. Use an HTTP server rather than opening `index.html` directly.

## Project structure

```text
dist/
  index.html          App entry point
  app.js              Trip state, screens and interactions
  style.css           Responsive styles
  i18n.js             English/Korean interface translations
  planner.js          Place discovery and itinerary suggestions
  city-search.js      Destination lookup and Korean aliases
  map-providers.js    Map adapters and preview map
  config.js           Optional browser map credentials
  stories.js          English place stories
  stories-ko.js       Korean place stories
  utilities.js        Weather, currency and phrasebook tools
tests/                Node.js regression checks
netlify.toml          Static publish directory
```

## Checks

With Node.js installed:

```sh
node tests/planner.test.cjs
node tests/ledger.test.cjs
node tests/completed-trips.test.cjs
node tests/city-search.test.cjs
node tests/multi-destination.test.cjs
```

## Deploy

The existing live site is hosted on Netlify. To deploy a copy, upload the contents of `dist/` through Netlify Drop, or import this repository and publish `dist/` with no build command. The included `netlify.toml` specifies that directory.

The current live site was uploaded manually; pushing to this repository does not automatically update that site until a Git connection is configured in Netlify.

## Optional map credentials

The app works with its preview map without credentials. To enable provider maps, configure `dist/config.js`:

- `googleMapsApiKey`: a browser key for Maps JavaScript API, restricted to your site's referrers and required API.
- `naverMapsClientId`: a NAVER Cloud Maps application ID, with the deployed web service URL registered.

Browser credentials are visible to visitors. Never add server-side API keys, NAVER Client Secret, or other private credentials to this repository. The checked-in configuration contains empty values.

Provider setup: [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key) · [NAVER Maps](https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html)

## Data and limitations

Trips are stored in localStorage in the current browser. There is no login, cloud sync or shared editing. A different device, browser or site address has separate trip data; clearing browser storage can remove it. Use JSON export to keep a copy.

Automatic planning uses geographic proximity and available place data, not verified street routing. Durations and suggestions are estimates; confirm opening hours, transport, accessibility, reservations and current prices independently. Unknown prices are shown as unknown, not free. Entering a reservation time does not book a ticket. Stories are available for a limited set of researched places. GPS and speech depend on browser support and permissions. External data services may be unavailable or rate-limited.

## Data sources and attribution

- Destination lookup: Open-Meteo / GeoNames.
- Places and preview maps: OpenStreetMap contributors; map rendering uses Leaflet.
- Weather: Open-Meteo; exchange rates: Frankfurter, with manual-rate support.
- Place stories include their source links in the app.
- Paris photograph: Wolfgang Moroder / Wikimedia Commons, CC BY 2.5, cropped; attribution is included in the app.

Review provider terms and commercial-use requirements before a commercial launch.
