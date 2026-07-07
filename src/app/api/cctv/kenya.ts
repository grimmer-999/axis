import type { CctvCamera } from './types';

const KENYA_MANUAL: CctvCamera[] = [
  // Nairobi — CBD & Major Arteries
  {
    id: 'ke-nairobi-uhuru-highway',
    lat: -1.2921, lng: 36.8219,
    name: 'Uhuru Highway (CBD)', city: 'Nairobi', country: 'Kenya',
    feed_url: 'https://namata.go.ke/live-traffic-map/',
    external_url: 'https://namata.go.ke/live-traffic-map/',
    source: 'NaMATA / KeNHA',
  },
  {
    id: 'ke-nairobi-thika-superhighway',
    lat: -1.2195, lng: 36.8880,
    name: 'Thika Superhighway (Safari Park)', city: 'Nairobi', country: 'Kenya',
    feed_url: 'https://namata.go.ke/live-traffic-map/',
    external_url: 'https://namata.go.ke/live-traffic-map/',
    source: 'NaMATA / KeNHA',
  },
  {
    id: 'ke-nairobi-mombasa-road',
    lat: -1.3236, lng: 36.8531,
    name: 'Mombasa Road (Airport Approach)', city: 'Nairobi', country: 'Kenya',
    feed_url: 'https://namata.go.ke/live-traffic-map/',
    external_url: 'https://namata.go.ke/live-traffic-map/',
    source: 'NaMATA / KeNHA',
  },
  {
    id: 'ke-nairobi-expressway-mlolongo',
    lat: -1.3984, lng: 36.9335,
    name: 'Nairobi Expressway (Mlolongo Toll)', city: 'Nairobi', country: 'Kenya',
    stream_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    stream_type: 'hls',
    external_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    source: 'TrafficVision / Moja Expressway',
  },
  {
    id: 'ke-nairobi-waiyaki-way',
    lat: -1.2640, lng: 36.7714,
    name: 'Waiyaki Way (Westlands)', city: 'Nairobi', country: 'Kenya',
    feed_url: 'https://www.waze.com/live-map',
    external_url: 'https://www.waze.com/live-map',
    source: 'Waze / Community',
  },
  {
    id: 'ke-nairobi-ngong-road',
    lat: -1.2984, lng: 36.7864,
    name: 'Ngong Road', city: 'Nairobi', country: 'Kenya',
    feed_url: 'https://www.tomtom.com/traffic-index/city/nairobi',
    external_url: 'https://www.tomtom.com/traffic-index/city/nairobi',
    source: 'TomTom',
  },
  {
    id: 'ke-nairobi-jogoo-road',
    lat: -1.2921, lng: 36.8714,
    name: 'Jogoo Road (CBD Access)', city: 'Nairobi', country: 'Kenya',
    feed_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    external_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    source: 'TrafficVision',
  },
  {
    id: 'ke-nairobi-southern-bypass',
    lat: -1.3567, lng: 36.7823,
    name: 'Southern Bypass (Weighbridge)', city: 'Nairobi', country: 'Kenya',
    feed_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    external_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    source: 'TrafficVision',
  },
  {
    id: 'ke-nairobi-northern-bypass',
    lat: -1.2083, lng: 36.8236,
    name: 'Northern Bypass', city: 'Nairobi', country: 'Kenya',
    feed_url: 'https://namata.go.ke/live-traffic-map/',
    external_url: 'https://namata.go.ke/live-traffic-map/',
    source: 'NaMATA / KeNHA',
  },

  // Mombasa — Coast & Port
  {
    id: 'ke-mombasa-port-road',
    lat: -4.0435, lng: 39.6682,
    name: 'Mombasa Port Road', city: 'Mombasa', country: 'Kenya',
    feed_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    external_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    source: 'TrafficVision / KeNHA',
  },
  {
    id: 'ke-mombasa-nyali-bridge',
    lat: -4.0435, lng: 39.6682,
    name: 'Nyali Bridge', city: 'Mombasa', country: 'Kenya',
    feed_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    external_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    source: 'TrafficVision',
  },

  // Kisumu — Western Kenya
  {
    id: 'ke-kisumu-city-center',
    lat: -0.0917, lng: 34.7680,
    name: 'Kisumu City Center', city: 'Kisumu', country: 'Kenya',
    feed_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    external_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    source: 'TrafficVision',
  },

  // Nakuru — Rift Valley
  {
    id: 'ke-nakuru-highway',
    lat: -0.3031, lng: 36.0663,
    name: 'Nakuru Highway (Northern Corridor)', city: 'Nakuru', country: 'Kenya',
    feed_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    external_url: 'https://trafficvision.live/blog/kenya-traffic-cameras',
    source: 'TrafficVision / KeNHA',
  },

  // Aviation / Weather Cams
  {
    id: 'ke-nairobi-wilson-airport',
    lat: -1.3214, lng: 36.8148,
    name: 'Wilson Airport Surrounds', city: 'Nairobi', country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com',
    external_url: 'https://webcams.aeroclubea.com',
    source: 'Aero Club East Africa',
  },
  {
    id: 'ke-ngong-hills',
    lat: -1.4013, lng: 36.6541,
    name: 'Ngong Hills (Weather Feed)', city: 'Kajiado', country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com',
    external_url: 'https://webcams.aeroclubea.com',
    source: 'Aero Club East Africa',
  },
];

function cameraKey(cam: CctvCamera): string {
  return (cam.stream_url || cam.feed_url || cam.external_url || cam.id).split('?')[0];
}

export async function fetchKenyaCameras(): Promise<CctvCamera[]> {
  const seen = new Set<string>();
  const merged: CctvCamera[] = [];

  for (const cam of KENYA_MANUAL) {
    if (!cam.feed_url && !cam.stream_url && !cam.external_url) continue;
    const key = cameraKey(cam);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(cam);
  }

  return merged;
}