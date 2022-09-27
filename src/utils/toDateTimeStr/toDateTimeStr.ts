type DateFormat = 'dd.mm' | 'dd.mm.yyyy' | 'dd.mm.yyyy, HH:MM' | 'dd.mm.yyyy, HH:MM:SS';

export const toDateTimeStr = (date: string | undefined, format: DateFormat): string | undefined => {
  if (typeof date === 'undefined') {
    return;
  }
  const dateStr = new Date(date).toLocaleString();

  switch (format) {
    case 'dd.mm':
      return dateStr.slice(0, -15);
    case 'dd.mm.yyyy':
      return dateStr.slice(0, -10);
    case 'dd.mm.yyyy, HH:MM':
      return dateStr.slice(0, -3);
    case 'dd.mm.yyyy, HH:MM:SS':
      return dateStr;
  }
};
