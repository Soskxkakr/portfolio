/** Parse strings like "June 2023", "Apr 2022", "Sep 2019" */
const MONTH: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

export function parseMonthYear(s: string): { year: number; month: number } {
  const parts = s.trim().split(/\s+/);
  if (parts.length < 2) {
    throw new Error(`Invalid date string: ${s}`);
  }
  const year = parseInt(parts[parts.length - 1]!, 10);
  const monthKey = parts
    .slice(0, -1)
    .join(" ")
    .toLowerCase();
  const month =
    MONTH[monthKey] ?? MONTH[monthKey.slice(0, 3)] ?? MONTH[monthKey.slice(0, 4)];
  if (month === undefined || Number.isNaN(year)) {
    throw new Error(`Unknown month in: ${s}`);
  }
  return { year, month };
}

/** First day of that calendar month */
export function startOfMonth(y: number, m: number): Date {
  return new Date(y, m, 1);
}

function diffCalendarMonths(from: Date, to: Date): number {
  return (
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth())
  );
}

export function formatYearsMonths(years: number, months: number): string {
  const yLabel = years === 1 ? "year" : "years";
  const mLabel = months === 1 ? "month" : "months";
  return `${years} ${yLabel}, ${months} ${mLabel}`;
}

/**
 * Duration for a role: start month through end month (inclusive).
 * Uses exclusive end = first day of month after the last worked month (or after "today" for Present).
 */
export function durationForRole(
  startStr: string,
  endStr: string | null,
  today: Date
): { years: number; months: number; label: string } {
  const start = parseMonthYear(startStr);
  const startDate = startOfMonth(start.year, start.month);

  let endExclusive: Date;
  if (endStr == null) {
    endExclusive = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  } else {
    const end = parseMonthYear(endStr);
    endExclusive = new Date(end.year, end.month + 1, 1);
  }

  let totalMonths = diffCalendarMonths(startDate, endExclusive);
  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return {
    years,
    months,
    label: formatYearsMonths(years, months),
  };
}

/**
 * Total professional experience = sum of each role’s duration (gaps between
 * jobs are not counted). Matches adding the per-role “(x years, y months)” lines.
 */
export function sumRoleDurations(
  roles: { startDate: string; endDate: string | null }[],
  today: Date
): { years: number; months: number; label: string } {
  let sumMonths = 0;
  for (const role of roles) {
    const d = durationForRole(role.startDate, role.endDate, today);
    sumMonths += d.years * 12 + d.months;
  }
  const years = Math.floor(sumMonths / 12);
  const months = sumMonths % 12;
  return {
    years,
    months,
    label: formatYearsMonths(years, months),
  };
}
