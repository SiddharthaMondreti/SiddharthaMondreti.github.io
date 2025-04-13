function getDayWithSuffix(day) {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`;
    case 3: return `${day}rd`;
    default: return `${day}th`;
  }
}

function formatTimeZone(date, cityLabel, timeZone) {
  const zonedDate = new Date(date.toLocaleString("en-US", { timeZone }));

  const day = getDayWithSuffix(zonedDate.getDate());
  const weekday = zonedDate.toLocaleString("en-US", { weekday: "short" });
  const month = zonedDate.toLocaleString("en-US", { month: "long" });
  const year = zonedDate.getFullYear();

  let hours = zonedDate.getHours();
  const minutes = zonedDate.getMinutes().toString().padStart(2, '0');
  const seconds = zonedDate.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `📍 ${cityLabel} | ${weekday}, ${day} ${month} ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
}

function updateClocks() {
  const now = new Date();
  document.getElementById("clock-mumbai").textContent = formatTimeZone(now, "Mumbai", "Asia/Kolkata");
  document.getElementById("clock-sf").textContent = formatTimeZone(now, "San Francisco", "America/Los_Angeles");
}

setInterval(updateClocks, 1000);
updateClocks();
