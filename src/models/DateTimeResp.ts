/**
 * Ответ сервиса о текущей дате и времени
 */
interface DateTimeResp {
  /**
   * Часовой пояс
   */
  timezone: string;
  /**
   * Смещение часового пояса
   */
  timezone_offset: number;
  /**
   * Смещение часового пояса с учетом летнего времени
   */
  timezone_offset_with_dst: number;
  /**
   * Текущая дата, yyyy-mm-dd
   */
  date: string;
  /**
   * Текущая дата и время, yyyy-mm-dd HH:MM:SS
   */
  date_time: string;
  /**
   * Текущая дата и время, Monday, January 01, yyyy HH:MM:SS
   */
  date_time_txt: string;
  /**
   * Текущая дата и время, Mon, 01 Jan yyyy HH:MM:SS -0800
   */
  date_time_wti: string;
  /**
   * Текущая дата и время, yyyy-mm-ddTHH:MM:SS-0800
   */
  date_time_ymd: string;
  /**
   * Текущая дата и время в unix
   */
  date_time_unix: number;
  /**
   * Текущая время в 24-часовом формате, HH:MM:SS
   */
  time_24: string;
  /**
   * Текущая время в 12-часовом формате, HH:MM:SS AM
   */
  time_12: string;
  /**
   * Номер текущей недели
   */
  week: number;
  /**
   * Номер текущего месяца
   */
  month: number;
  /**
   * Текущий год
   */
  year: number;
  /**
   * Последние две цифры текущего года
   */
  year_abbr: string;
  /**
   * Летнее время, true / false
   */
  is_dst: boolean;
  /**
   * Летнее время, 1 / 0
   */
  dst_savings: number;
}

export default DateTimeResp;
