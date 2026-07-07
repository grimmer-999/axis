import type { CctvCamera } from './types';

const KENYA_LIVE_CAMERAS: CctvCamera[] = [
  // ─── YouTube Live Streams ───
  {
    id: 'ke-maasai-mara-bushtops',
    lat: -1.3167, lng: 35.0167,
    name: 'Mara Bushtops Salt Lick (Maasai Mara)', city: 'Maasai Mara', country: 'Kenya',
    stream_url: 'https://www.youtube.com/embed/xXZqU5vnEug?autoplay=1&mute=1',
    stream_type: 'youtube',
    external_url: 'https://www.youtube.com/live/xXZqU5vnEug',
    source: 'Mara Bushtops / YouTube',
  },
  {
    id: 'ke-ol-donyo-lodge',
    lat: -2.5025, lng: 37.7519,
    name: 'ol Donyo Lodge Wildlife Cam (Chyulu Hills)', city: 'Loitokitok', country: 'Kenya',
    stream_url: 'https://www.youtube.com/embed/XsOU8JnEpNM?autoplay=1&mute=1',
    stream_type: 'youtube',
    external_url: 'https://www.youtube.com/live/XsOU8JnEpNM',
    source: 'ol Donyo Lodge / Great Plains Conservation / YouTube',
  },

  // ─── SkylineWebcams — Direct image feeds ───
  {
    id: 'ke-tsavo-east-national-park',
    lat: -3.4000, lng: 38.5500,
    name: 'Tsavo East National Park (Voi)', city: 'Voi', country: 'Kenya',
    feed_url: 'https://www.skylinewebcams.com/en/webcam/kenya/taita-taveta-county/voi/tsavo-east-national-park.jpg',
    external_url: 'https://www.skylinewebcams.com/en/webcam/kenya/taita-taveta-county/voi/tsavo-east-national-park.html',
    source: 'SkylineWebcams',
  },
  {
    id: 'ke-diani-beach',
    lat: -4.2800, lng: 39.5800,
    name: 'Diani Beach', city: 'Diani Beach', country: 'Kenya',
    feed_url: 'https://www.skylinewebcams.com/en/webcam/kenya/kwale-county/diani-beach/diani-beach.jpg',
    external_url: 'https://www.skylinewebcams.com/en/webcam/kenya/kwale-county/diani-beach/diani-beach.html',
    source: 'SkylineWebcams',
  },
  {
    id: 'ke-watamu-beach',
    lat: -3.3500, lng: 40.0200,
    name: 'Watamu Beach', city: 'Watamu', country: 'Kenya',
    feed_url: 'https://www.skylinewebcams.com/en/webcam/kenya/malindi/watamu/watamu-beach.jpg',
    external_url: 'https://www.skylinewebcams.com/en/webcam/kenya/malindi/watamu/watamu-beach.html',
    source: 'SkylineWebcams',
  },

  // ─── Aero Club East Africa — Direct JPG feeds ───
  {
    id: 'ke-mount-elgon',
    lat: 1.1000, lng: 34.5500,
    name: 'Mount Elgon SE', city: 'Mount Elgon', country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Western/western_MtElgonSE.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-mount-elgon',
    source: 'Aero Club East Africa / TrafficVision',
  },
  {
    id: 'ke-ngong-hills',
    lat: -1.4000, lng: 36.6500,
    name: 'Ngong Hills W', city: 'Ngong Hills', country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Nairobi/nairobi_ngongHillsW.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-ngong-hills',
    source: 'Aero Club East Africa / TrafficVision',
  },
  {
    id: 'ke-nyeri-north',
    lat: -0.4000, lng: 36.9500,
    name: 'Nyeri North (Mt Kenya)', city: 'Nyeri', country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Mt.Kenya/mtkenya_nyeriN.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-nyeri-north',
    source: 'Aero Club East Africa / TrafficVision',
  },
  {
    id: 'ke-machakos',
    lat: -1.5200, lng: 37.2600,
    name: 'Machakos SE', city: 'Machakos', country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Nairobi/nairobi_machakosSE.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-machakos',
    source: 'Aero Club East Africa / TrafficVision',
  },
  {
    id: 'ke-lake-naivasha',
    lat: -0.7800, lng: 36.3500,
    name: 'Lake Naivasha NE', city: 'Naivasha', country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/RiftValley/riftvalley_naivashaNE.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-lake-naivasha-2',
    source: 'Aero Club East Africa / TrafficVision',
  },
  {
    id: 'ke-mt-kenya',
    lat: -0.1500, lng: 37.3000,
    name: 'Mt Kenya (Nyeri NE)', city: 'Mt Kenya', country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Mt.Kenya/mtkenya_nyeriNE065.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-mt-kenya',
    source: 'Aero Club East Africa / TrafficVision',
  },
];

function cameraKey(cam: CctvCamera): string {
  return (cam.stream_url || cam.feed_url || cam.external_url || cam.id).split('?')[0];
}

export async function fetchKenyaCameras(): Promise<CctvCamera[]> {
  const seen = new Set<string>();
  const merged: CctvCamera[] = [];

  for (const cam of KENYA_LIVE_CAMERAS) {
    if (!cam.feed_url && !cam.stream_url && !cam.external_url) continue;
    const key = cameraKey(cam);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(cam);
  }

  return merged;
}