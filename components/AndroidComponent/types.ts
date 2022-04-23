import { WeekCalendarProps } from "../../utils/generateWeekList";
import { IEventListData } from "../../utils/mocks/events";

export type AndroidComponentType = {
    handleIncrementWeek: () => void;
    handleSelectADay: (day: Date) => void;
    selectedDay: Date;
    weekList: WeekCalendarProps[];
    validatedEventDay: any | null;
  };
  