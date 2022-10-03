/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_OPEN_WEATHER_MAP_API_KEY: string;
    REACT_APP_OPEN_WEATHER_MAP_API_URL: string;
    REACT_APP_WEATHER_BIT_API_KEY: string;
    REACT_APP_WEATHER_BIT_API_URL: string;
    REACT_APP_DATE_TIME_API_KEY: string;
    REACT_APP_DATE_TIME_API_URL: string;
  }
}
