export const VIEWING_TIMES = Array.from({ length: 20 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 30;
  const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const minutes = String(totalMinutes % 60).padStart(2, "0");
  return `${hours}:${minutes}`;
});

export function localDateValue(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function validateViewing(values, now = new Date()) {
  if (!values.date || !values.time) return "Choose a preferred date and time.";
  if (!VIEWING_TIMES.includes(values.time)) return "Choose an available viewing time.";
  const selected = new Date(`${values.date}T${values.time}:00`);
  if (Number.isNaN(selected.getTime()) || selected.getTime() <= now.getTime() + 30 * 60 * 1000) {
    return "Choose a date and time at least 30 minutes from now.";
  }
  if (values.comment.trim().length > 1000) return "Comment must contain no more than 1000 characters.";
  return "";
}

export function formatViewingDate(date, time, locale = "en") {
  return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
    hour: "numeric", minute: "2-digit",
  }).format(new Date(`${date}T${time}:00`));
}
