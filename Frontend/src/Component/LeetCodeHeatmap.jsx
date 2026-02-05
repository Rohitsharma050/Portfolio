import { useEffect, useState } from "react";

const COLORS = [
  "#ebedf0",
  "#c6e48b",
  "#7bc96f",
  "#239a3b",
  "#196127",
];

const getColor = (count) => {
  if (count === 0) return COLORS[0];
  if (count <= 1) return COLORS[1];
  if (count <= 3) return COLORS[2];
  if (count <= 5) return COLORS[3];
  return COLORS[4];
};

const ONE_DAY = 24 * 60 * 60 * 1000;

const LeetCodeHeatmap = ({ username }) => {
  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    fetch(`https://leetcode-calendar.vercel.app/${username}`)
      .then((res) => res.json())
      .then((data) => setCalendar(data.submissionCalendar))
      .catch(() => setCalendar({}));
  }, [username]);

  if (!calendar) return <p>Loading LeetCode Heatmap...</p>;


 // ---- build last 365 days (FIXED) ----
const today = new Date();
today.setHours(0, 0, 0, 0);

const startDate = new Date(today);
startDate.setDate(today.getDate() - 364);

const days = [];
for (
  let d = new Date(startDate);
  d <= today;
  d.setDate(d.getDate() + 1)
) {
  const ts = Math.floor(
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 1000
  );

  days.push({
    date: new Date(d),
    count: calendar[String(ts)] || 0, // 🔑 STRING key
  });
}


  // ---- align weeks (Sunday start like GitHub) ----
  const firstDayOfWeek = days[0].date.getDay(); // 0 = Sunday
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.unshift(null);
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div>
      <h3 style={{ marginBottom: "12px" }}>LeetCode – Last 1 Year</h3>

      <div style={{ display: "flex", gap: "4px" }}>
        {weeks.map((week, wi) => (
          <div key={wi} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {week.map((day, di) =>
              day ? (
                <div
                  key={di}
                  title={`${day.count} submissions on ${day.date.toDateString()}`}
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: getColor(day.count),
                    borderRadius: "3px",
                  }}
                />
              ) : (
                <div key={di} style={{ width: "14px", height: "14px" }} />
              )
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px" }}>
        <span>Less</span>
        {COLORS.map((c, i) => (
          <div
            key={i}
            style={{
              width: "14px",
              height: "14px",
              backgroundColor: c,
              borderRadius: "3px",
            }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default LeetCodeHeatmap;
