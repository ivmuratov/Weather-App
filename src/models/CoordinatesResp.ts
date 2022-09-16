import ICoordinates from './ICoordinates';

type LocalNames = {
  ru: string;
  ja: string;
  es: string;
  oc: string;
  ca: string;
  de: string;
  hi: string;
  ko: string;
  fi: string;
  sl: string;
  zh: string;
  be: string;
  he: string;
  pl: string;
  pt: string;
  uk: string;
  lv: string;
  hr: string;
  ku: string;
  ar: string;
  da: string;
  ro: string;
  et: string;
  en: string;
  kn: string;
  lt: string;
  fr: string;
};

interface CoordinatesResp extends ICoordinates {
  name: string;
  local_names: LocalNames;
  country: string;
  state: string;
}

export default CoordinatesResp;
