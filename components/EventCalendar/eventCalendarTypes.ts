import { IEventListData } from "../../utils/mocks/events";

export interface IEventCalendarProps {
  week: any[];
  nextWeek: () => void;
  handleSelectADay: (date: Date) => void;
  pressedDay: Date | null;
  eventList?: IEventListData[]
}
