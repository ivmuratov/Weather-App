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

/**
 * Ответ сервиса о координатах локации
 */
interface CoordinatesResp extends ICoordinates {
  /**
   * Имя найденной локации
   */
  name: string;
  /**
   * Название найденной локации на разных языках.
   * Список имён может быть разным для разных локаций
   */
  local_names: LocalNames;
  /**
   * Страна найденной локации
   */
  country: string;
  /**
   * Штат найденной локации
   */
  state: string;
}

export default CoordinatesResp;
