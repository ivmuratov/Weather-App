export const ApiKey = {
  OPEN_WEATHER_MAP: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
  WEATHER_BIT: process.env.REACT_APP_WEATHER_BIT_API_KEY,
  DATE_TIME: process.env.REACT_APP_DATE_TIME_API_KEY,
} as const;

export const ApiUrl = {
  OPEN_WEATHER_MAP: process.env.REACT_APP_OPEN_WEATHER_MAP_API_URL,
  WEATHER_BIT: process.env.REACT_APP_WEATHER_BIT_API_URL,
  DATE_TIME: process.env.REACT_APP_DATE_TIME_API_URL,
} as const;
