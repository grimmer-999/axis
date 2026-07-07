// src/lib/cameras/kenya.ts
import type { CctvCamera } from '@/types';

const KENYA_CAMERAS: CctvCamera[] = [
  // ─── YouTube Live Streams ───
  {
    id: 'ke-maasai-mara-bushtops',
    lat: -1.3167,
    lng: 35.0167,
    name: 'Mara Bushtops Salt Lick (Maasai Mara)',
    city: 'Narok',
    country: 'Kenya',
    stream_url: 'https://www.youtube.com/embed/xXZqU5vnEug?autoplay=1&mute=1',
    stream_type: 'youtube',
    external_url: 'https://www.youtube.com/live/xXZqU5vnEug',
    source: 'Mara Bushtops / YouTube',
    weather: {
      temperature: '26°C',
      humidity: '50%',
      condition: 'Sunny',
      windSpeed: '10 km/h',
      pressure: '1012 hPa',
    },
    climate: {
      region: 'Savanna',
      averageRainfall: '800mm/year',
      averageTemperature: '24°C',
      notableFeatures: 'Wildlife migration, open grasslands, Big Five habitat',
    },
  },
  {
    id: 'ke-ol-donyo-lodge',
    lat: -2.5025,
    lng: 37.7519,
    name: 'ol Donyo Lodge Wildlife Cam (Chyulu Hills)',
    city: 'Loitokitok',
    country: 'Kenya',
    stream_url: 'https://www.youtube.com/embed/XsOU8JnEpNM?autoplay=1&mute=1',
    stream_type: 'youtube',
    external_url: 'https://www.youtube.com/live/XsOU8JnEpNM',
    source: 'ol Donyo Lodge / Great Plains Conservation / YouTube',
    weather: {
      temperature: '24°C',
      humidity: '55%',
      condition: 'Partly Cloudy',
      windSpeed: '12 km/h',
      pressure: '1015 hPa',
    },
    climate: {
      region: 'Montane Savanna',
      averageRainfall: '700mm/year',
      averageTemperature: '22°C',
      notableFeatures: 'Chyulu Hills volcanic range, Mount Kilimanjaro views',
    },
  },

  // ─── SkylineWebcams (direct JPG snapshots) ───
  {
    id: 'ke-tsavo-east',
    lat: -3.4000,
    lng: 38.5500,
    name: 'Tsavo East National Park (Voi)',
    city: 'Voi',
    country: 'Kenya',
    feed_url: 'https://www.skylinewebcams.com/en/webcam/kenya/taita-taveta-county/voi/tsavo-east-national-park.jpg',
    external_url: 'https://www.skylinewebcams.com/en/webcam/kenya/taita-taveta-county/voi/tsavo-east-national-park.html',
    source: 'SkylineWebcams',
    weather: {
      temperature: '32°C',
      humidity: '40%',
      condition: 'Sunny',
      windSpeed: '8 km/h',
      pressure: '1010 hPa',
    },
    climate: {
      region: 'Arid Savanna',
      averageRainfall: '500mm/year',
      averageTemperature: '28°C',
      notableFeatures: 'Red elephants, Yatta Plateau, Galana River',
    },
  },
  {
    id: 'ke-diani-beach',
    lat: -4.2800,
    lng: 39.5800,
    name: 'Diani Beach',
    city: 'Diani Beach',
    country: 'Kenya',
    feed_url: 'https://www.skylinewebcams.com/en/webcam/kenya/kwale-county/diani-beach/diani-beach.jpg',
    external_url: 'https://www.skylinewebcams.com/en/webcam/kenya/kwale-county/diani-beach/diani-beach.html',
    source: 'SkylineWebcams',
    weather: {
      temperature: '29°C',
      humidity: '75%',
      condition: 'Partly Cloudy',
      windSpeed: '15 km/h',
      pressure: '1009 hPa',
    },
    climate: {
      region: 'Tropical Coastal',
      averageRainfall: '1200mm/year',
      averageTemperature: '27°C',
      notableFeatures: 'Coral reefs, white sand beaches, Indian Ocean',
    },
  },
  {
    id: 'ke-watamu-beach',
    lat: -3.3500,
    lng: 40.0200,
    name: 'Watamu Beach',
    city: 'Watamu',
    country: 'Kenya',
    feed_url: 'https://www.skylinewebcams.com/en/webcam/kenya/malindi/watamu/watamu-beach.jpg',
    external_url: 'https://www.skylinewebcams.com/en/webcam/kenya/malindi/watamu/watamu-beach.html',
    source: 'SkylineWebcams',
    weather: {
      temperature: '28°C',
      humidity: '78%',
      condition: 'Sunny',
      windSpeed: '14 km/h',
      pressure: '1009 hPa',
    },
    climate: {
      region: 'Tropical Coastal',
      averageRainfall: '1100mm/year',
      averageTemperature: '26°C',
      notableFeatures: 'Watamu Marine National Park, coral gardens, sea turtles',
    },
  },

  // ─── Aero Club East Africa / TrafficVision (direct JPG) ───
  {
    id: 'ke-mount-elgon',
    lat: 1.1000,
    lng: 34.5500,
    name: 'Mount Elgon SE',
    city: 'Mount Elgon',
    country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Western/western_MtElgonSE.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-mount-elgon',
    source: 'Aero Club East Africa / TrafficVision',
    weather: {
      temperature: '18°C',
      humidity: '65%',
      condition: 'Cloudy',
      windSpeed: '20 km/h',
      pressure: '1018 hPa',
    },
    climate: {
      region: 'Montane Forest',
      averageRainfall: '1500mm/year',
      averageTemperature: '15°C',
      notableFeatures: 'Extinct shield volcano, caldera, elephant caves',
    },
  },
  {
    id: 'ke-ngong-hills',
    lat: -1.4000,
    lng: 36.6500,
    name: 'Ngong Hills W',
    city: 'Ngong Hills',
    country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Nairobi/nairobi_ngongHillsW.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-ngong-hills',
    source: 'Aero Club East Africa / TrafficVision',
    weather: {
      temperature: '22°C',
      humidity: '60%',
      condition: 'Partly Cloudy',
      windSpeed: '18 km/h',
      pressure: '1016 hPa',
    },
    climate: {
      region: 'Highland',
      averageRainfall: '1000mm/year',
      averageTemperature: '18°C',
      notableFeatures: 'Wind farm, Great Rift Valley views, Nairobi skyline',
    },
  },
  {
    id: 'ke-nyeri-north',
    lat: -0.4000,
    lng: 36.9500,
    name: 'Nyeri North (Mt Kenya)',
    city: 'Nyeri',
    country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Mt.Kenya/mtkenya_nyeriN.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-nyeri-north',
    source: 'Aero Club East Africa / TrafficVision',
    weather: {
      temperature: '20°C',
      humidity: '58%',
      condition: 'Clear',
      windSpeed: '10 km/h',
      pressure: '1017 hPa',
    },
    climate: {
      region: 'Montane Highland',
      averageRainfall: '1400mm/year',
      averageTemperature: '16°C',
      notableFeatures: 'Mount Kenya views, coffee plantations, Aberdare Range',
    },
  },
  {
    id: 'ke-machakos',
    lat: -1.5200,
    lng: 37.2600,
    name: 'Machakos SE',
    city: 'Machakos',
    country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Nairobi/nairobi_machakosSE.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-machakos',
    source: 'Aero Club East Africa / TrafficVision',
    weather: {
      temperature: '25°C',
      humidity: '55%',
      condition: 'Sunny',
      windSpeed: '14 km/h',
      pressure: '1014 hPa',
    },
    climate: {
      region: 'Semi-Arid Highland',
      averageRainfall: '700mm/year',
      averageTemperature: '21°C',
      notableFeatures: 'Machakos Peoples Park, Akamba culture, undulating terrain',
    },
  },
  {
    id: 'ke-lake-naivasha',
    lat: -0.7800,
    lng: 36.3500,
    name: 'Lake Naivasha NE',
    city: 'Naivasha',
    country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/RiftValley/riftvalley_naivashaNE.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-lake-naivasha-2',
    source: 'Aero Club East Africa / TrafficVision',
    weather: {
      temperature: '23°C',
      humidity: '62%',
      condition: 'Partly Cloudy',
      windSpeed: '16 km/h',
      pressure: '1015 hPa',
    },
    climate: {
      region: 'Rift Valley Highland',
      averageRainfall: '600mm/year',
      averageTemperature: '19°C',
      notableFeatures: "Freshwater lake, hippos, flower farms, Hell's Gate",
    },
  },
  {
    id: 'ke-mt-kenya',
    lat: -0.1500,
    lng: 37.3000,
    name: 'Mt Kenya (Nyeri NE)',
    city: 'Mt Kenya',
    country: 'Kenya',
    feed_url: 'https://webcams.aeroclubea.com/Mt.Kenya/mtkenya_nyeriNE065.jpg',
    external_url: 'https://trafficvision.live/?continent=Africa&country=Kenya&camera=aeroclubea-mt-kenya',
    source: 'Aero Club East Africa / TrafficVision',
    weather: {
      temperature: '12°C',
      humidity: '70%',
      condition: 'Misty',
      windSpeed: '25 km/h',
      pressure: '1020 hPa',
    },
    climate: {
      region: 'Alpine / Montane',
      averageRainfall: '2000mm/year',
      averageTemperature: '8°C',
      notableFeatures: 'Second highest peak in Africa, glaciers, equatorial snow',
    },
  },
];

function cameraKey(cam: CctvCamera): string {
  return (cam.stream_url || cam.feed_url || cam.external_url || cam.id).split('?')[0];
}

export async function fetchKenyaCameras(): Promise<CctvCamera[]> {
  const seen = new Set<string>();
  const merged: CctvCamera[] = [];

  for (const cam of KENYA_CAMERAS) {
    if (!cam.feed_url && !cam.stream_url && !cam.external_url) continue;
    const key = cameraKey(cam);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(cam);
  }

  return merged;
}