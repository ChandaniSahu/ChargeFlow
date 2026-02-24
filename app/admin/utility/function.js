export function formatTimestamp(timestamp) {
  const dateObj = new Date(timestamp);
  const now = new Date();

  // Date -> DD/MM/YYYY
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  // Time -> hh:mm AM/PM
  const formattedTime = dateObj.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).toUpperCase();

  // Time difference
  const diffMs = now - dateObj;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  let relativeTime;

  if (diffHours < 24) {
    relativeTime = `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  } else if (diffDays < 30) {
    relativeTime = `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  } else if (diffMonths < 12) {
    relativeTime = `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;
  } else {
    relativeTime = `${diffYears} year${diffYears !== 1 ? "s" : ""} ago`;
  }

  return {
    date: formattedDate,
    time: formattedTime,
    timeAgo: relativeTime,
  };
}