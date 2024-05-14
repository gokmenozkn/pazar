/* eslint-disable @typescript-eslint/no-explicit-any */

type ValueType = {
  Ortalama: number
}

export const calculatePercentageChange = (values: ValueType[]) => {
  if (values.length > 1) {
    const initial = values[0].Ortalama;
    const final = values[values.length - 1].Ortalama;
    return ((final - initial) / initial * 100);
  }
  return 0;
};