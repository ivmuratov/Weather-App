/**
 * Состояние погоды
 */
interface IWeatherConditions {
  /**
   * Иконка погоды
   */
  icon: string;
  /**
   * Код погоды
   */
  code: number;
  /**
   * Описание погоды
   */
  description: string;
}

export default IWeatherConditions;
