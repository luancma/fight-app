import { addDays, format, getDate, startOfWeek } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export interface WeekCalendarProps {
  uuid: string;
  formatted: string;
  date: Date;
  day: number;
}

export const generateWeekList = (date: Date, refreshDate?: boolean) => {
  const final: WeekCalendarProps[] = [];
  const startWeekDay: any = refreshDate ? date.getDay() : 0;
  const start = startOfWeek(date, { weekStartsOn: startWeekDay });
  for (let i = 0; i < 14; i++) {
    const date = addDays(start, i);
    final.push({
      uuid: uuidv4(),
      formatted: format(date, "MMM dd"),
      date,
      day: getDate(date),
    });
  }
  if (refreshDate) {
    final.shift();
  }
  return final;
};
