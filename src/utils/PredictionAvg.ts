interface IData {
  tahmin: number;
  tarih: string;
}

export function calculateAvg(data: IData[]) {
  const n = data.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += data[i].tahmin;
  }

  return sum / n;
}
