const BASE_URL = import.meta.env.VITE_URL;

const PYTHON_SERVER_URL = import.meta.env.VITE_PYTHON_URL;

export async function getYearlyData(malAdi: string, year: string) {
  const response = await fetch(`${BASE_URL}/getOrt/${malAdi}/${year}`);
  return await response.json();
}

export async function getAvgBetweenSelectedDays(
  malAdi: string,
  startDate: string,
  endDate: string
) {
  // endpoint: "/getselectday/:mal_adi/:yil1/:ay1/:gun1/:yil2/:ay2/:gun2"

  const [year1, month1, day1] = startDate.split('-');
  const [year2, month2, day2] = endDate.split('-');

  const res = await fetch(
    `${BASE_URL}/getselectday/${malAdi}/${year1}/${month1}/${day1}/${year2}/${month2}/${day2}`
  );
  return await res.json();
}

// BİR SONRAKİ AYI TAHMİN ET
export async function predictNextMonth(malAdi: string) {
  const response = await fetch(`${PYTHON_SERVER_URL}/predict/${malAdi}`);
  return await response.json();
}
