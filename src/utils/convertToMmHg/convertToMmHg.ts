export const convertToMmHg = (pressure: number): string => {
  return (pressure * 0.75).toFixed();
};
