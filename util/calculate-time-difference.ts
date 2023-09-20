type TimeDifference = {
  days: number;
  hours: number;
  minutes: number;
};

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR;

export function calculateTimeDifference(a: Date, b: Date): TimeDifference {
  let secondsDelta = Math.abs(b.valueOf() - a.valueOf()) / 1000;

  const days = Math.floor(secondsDelta / SECONDS_PER_DAY);
  secondsDelta = secondsDelta - days * SECONDS_PER_DAY;

  const hours = Math.floor(secondsDelta / SECONDS_PER_HOUR);
  secondsDelta = secondsDelta - hours * SECONDS_PER_HOUR;

  const minutes = Math.floor(secondsDelta / 60);

  return {
    minutes,
    hours,
    days,
  };
}
