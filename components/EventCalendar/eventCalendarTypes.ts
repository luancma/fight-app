export interface IEventCalendarProps {
  week: any[];
  nextWeek: () => void;
  handleSelectADay: (date: Date) => void;
  pressedDay: Date | null;
}
