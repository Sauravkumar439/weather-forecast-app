const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function groupForecastByDay(list) {
  const grouped = {};

  list.forEach((item) => {
    const date = new Date(item.dt_txt);
    const day = daysOfWeek[date.getDay()];
    if (!grouped[day]) grouped[day] = [];
    grouped[day].push(item);
  });

  return Object.keys(grouped).map((day) => {
    const items = grouped[day];
    const temps = items.map((i) => i.main.temp);
    const min = Math.min(...temps).toFixed(1);
    const max = Math.max(...temps).toFixed(1);
    const icon = items[0].weather[0].icon;
    const desc = items[0].weather[0].description;

    return { day, min, max, icon, desc };
  });
}
