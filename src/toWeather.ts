const codeMap = {
  0: "Clear",

  1: "Cloudy", // Mainly Clear
  2: "Cloudy", // Partly Cloudy
  3: "Overcast", // Overcast

  45: "Fog", // Fog
  48: "Fog", // Depositing Rime Fog

  51: "LightRain", // Drizzle: Light
  53: "ModerateRain", // Drizzle: Moderate
  55: "HeavyRain", // Drizzle: Heavy
  61: "LightRain", // Rain: Light
  63: "ModerateRain", // Rain: Moderate
  65: "HeavyRain", // Rain: Heavy
  80: "LightRain", // Rain Showers: Light
  81: "ModerateRain", // Rain Showers: Moderate
  82: "HeavyRain", // Rain Showers: Heavy

  56: "LightRain", //  Freezing Drizzle: Light
  57: "HeavyRain", //  Freezing Drizzle: Heavy
  66: "LightRain", //  Freezing Rain: Light
  67: "HeavyRain", //  Freezing Rain: Heavy

  71: "LightSnow", // Snow: Light
  73: "ModerateSnow", // Snow: Moderate
  75: "HeavySnow", // Snow: Heavy
  77: "LightSnow", // Snow Grains
  85: "LightSnow", // Snow Showers: Light
  86: "HeavySnow", // Snow Showers: Heavy
} as const

export type WeatherCode = keyof typeof codeMap
export type Weather = (typeof codeMap)[WeatherCode]

function toWeather(input: number): Weather {
  if (input in codeMap) {
    return codeMap[input as WeatherCode]
  }

  throw new Error("toWeather: Invalid input.")
}

export default toWeather
